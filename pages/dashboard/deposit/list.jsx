import { Container } from "@mui/material";
// layouts
import Layout from "../../../layouts";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import DepositTable from "../../../components/DepositPaginate";
import Deposit from "../../../models/deposit.model";
import PropTypes from "prop-types";
import serializeFields from "../../../helpers/serialize";
import axios from "axios";
// ----------------------------------------------------------------------
import pageAuth from "../../../middleware/pageAuthAccess";

// ----------------------------------------------------------------------
async function handler({ req }) {
  const user = serializeFields(req.user);
  const allDeposits = serializeFields(
    await Deposit.find({
      userId: user._id,
      transactionId: { $exists: true },
    }).lean()
  );

  const uniqueStockString = [
    ...new Set(allDeposits.map((x) => x.stock.toUpperCase())),
  ].join(",");

  const { data: cryptoDataList } = await axios({
    baseURL: "https://api.coingecko.com",
    method: "GET",
    url: "/api/v3/coins/markets",
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
  const depositsWithStockData = allDeposits.map((x) => ({
    ...x,
    stock: stocksDataMap[x.stock],
  }));

  return {
    props: {
      user,
      allDeposits: depositsWithStockData,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };
  // return {
  //   props: { user },
  // };
}
AllDeposits.propTypes = {
  user: PropTypes.object,
  allDeposits: PropTypes.array,
};
export const getServerSideProps = pageAuth(handler);

AllDeposits.getLayout = function getLayout(page) {
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

export default function AllDeposits({ user, allDeposits }) {
  const { themeStretch } = useSettings();

  return (
    <Page title="investment list">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <>
          <DepositTable rows={allDeposits} />
        </>
      </Container>
    </Page>
  );
}
