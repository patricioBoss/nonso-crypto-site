import { Container, Typography, Grid, Modal, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
// layouts
import Layout from "../../../layouts";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import InvestmentTable from "../../../components/invtPaginate";
import PropTypes from "prop-types";
import serializeFields from "../../../helpers/serialize";
import Investment from "../../../models/investment.model";
import axios from "axios";
import { toast } from "react-toastify";
// ----------------------------------------------------------------------
import pageAuth from "../../../middleware/pageAuthAccess";
import { LoadingButton } from "@mui/lab";
import { fCurrency } from "../../../utils/formatNumber";
import plans from "../../../helpers/plans";
import { capitalCase } from "change-case";
import cryptoList from "../../../helpers/crypto";
import getNextPlanId from "../../../utils/getNextPlanId";
// ----------------------------------------------------------------------
async function handler({ req }) {
  const user = serializeFields(req.user);
  const allInvestments = serializeFields(
    await Investment.find({
      userId: user._id,
      transactionId: { $exists: true },
    }).lean()
  );

  // const uniqueStockString = [
  //   ...new Set(allInvestments.map((x) => x.stock.toUpperCase())),
  // ].join(",");
  const uniqueStockString = Object.keys(cryptoList).join(",");
  const {
    data: { data: cryptoDataList },
  } = await axios({
    baseURL: "https://ethervest-image-server.cyclic.app",
    method: "GET",
    url: "/coin/markets",
    params: {
      vs_currency: "usd",
      ids: uniqueStockString,
    },
  });
  // const stocksDataList = await stocksResponse.data.quoteResponse.result;
  const stocksDataMap = cryptoDataList.reduce((acc, stock) => {
    acc[stock.id] = stock;
    return acc;
  }, {});
  const investmentsWithStockData = allInvestments.map((x) => ({
    ...x,
    stock: stocksDataMap[x.stock],
  }));
  console.log({ cryptoDataList, stocksDataMap, investmentsWithStockData });
  return {
    props: {
      user,
      allInvestments: investmentsWithStockData,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };
  // return {
  //   props: { user },
  // };
}
AllInvestments.propTypes = {
  user: PropTypes.object,
  allInvestments: PropTypes.array,
};
export const getServerSideProps = pageAuth(handler);

AllInvestments.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: 400,
  },
  bgcolor: "background.paper",
  border: "1px solid #cdcdcd",
  borderRadius: ".8rem",
  boxShadow: 24,
};

export default function AllInvestments({ user, allInvestments }) {
  const { themeStretch } = useSettings();
  const [open, setOpen] = useState(false);
  const [investments, setInvestments] = useState(allInvestments);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [topUpIvt, setTopUpIvt] = useState({});
  console.log(topUpIvt);
  const handleOpen = (investment) => {
    console.log("this is my investment ", investment);
    setTopUpIvt(investment);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleTopUp = () => {
    setLoading(true);
    axios
      .put(`/api/user/${user._id}/invest/${topUpIvt._id}/topup`, {
        amount: user.accountBalance + topUpIvt.capital,
      })
      .then((res) => {
        setLoading(false);
        setUpdate((x) => !x);
        toast.success(res.data.message);
      })
      .catch((err) => {
        // console.log(err.response?.data.message);
        setLoading(false);

        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
  };

  const RefetchData = async () => {
    try {
      let res = await axios.get(`/api/user/${user._id}/invest/all`);
      const uniqueStockString = Object.keys(cryptoList).join(",");
      const {
        data: { data: cryptoDataList },
      } = await axios({
        baseURL: "https://ethervest-image-server.cyclic.app",
        method: "GET",
        url: "/coin/markets",
        params: {
          vs_currency: "usd",
          ids: uniqueStockString,
        },
      });

      // const stocksDataList = await stocksResponse.data.quoteResponse.result;
      const stocksDataMap = cryptoDataList.reduce((acc, stock) => {
        acc[stock.id] = stock;
        return acc;
      }, {});
      const investmentsWithStockData = allInvestments.map((x) => ({
        ...x,
        stock: stocksDataMap[x.stock],
      }));

      setInvestments(investmentsWithStockData);
      setLoading(false);
      toast.success(res.data.message);
    } catch (err) {
      // console.log(err.response?.data.message);
      setLoading(false);
      if (err.response) {
        toast.error("error, pls try again");
      } else {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    if (update) {
      RefetchData();
    }
  }, [update]);

  console.log(allInvestments);
  return (
    <Page title="investment list">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <>
          <InvestmentTable rows={investments} handleConfirmShow={handleOpen} />
        </>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ mt: 2, px: 4, pb: 1, borderBottom: "1px solid #cacaca" }}
            variant="h6"
            component="h2"
          >
            Top Up Investment
          </Typography>
          {user.accountBalance > 0 ? (
            <Typography id="modal-modal-description" sx={{ mt: 2, px: 4 }}>
              Glad you choose to take this step, topping up your this active
              investment entails using your current balance to top up this
              active investment. You are investing a total of{" "}
              <Typography component={"span"} sx={{ fontWeight: 600 }}>
                {fCurrency(user.accountBalance + topUpIvt.capital)}
              </Typography>{" "}
              upgrading this investment to &nbsp;
              <Typography component={"span"} sx={{ fontWeight: 600 }}>
                {capitalCase(
                  getNextPlanId(user.accountBalance + topUpIvt.capital).name
                )}
                Plan.
              </Typography>
            </Typography>
          ) : (
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, px: 4, pb: 2 }}
            >
              Glad you choose to take this step but your current balance is not
              high enough to invest, try again later when your balance is up to
              it.
            </Typography>
          )}
          <Box
            className="flex justify-end"
            sx={{ mt: 2, px: 4, py: 2, borderTop: "1px solid #cacaca" }}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              color="error"
              sx={{ mx: 2 }}
            >
              Close
            </Button>
            {user.accountBalance > 0 && (
              <LoadingButton
                variant="contained"
                loading={loading}
                onClick={() => handleTopUp()}
              >
                <span> Accept</span>
              </LoadingButton>
            )}
          </Box>
        </Box>
      </Modal>
    </Page>
  );
}
