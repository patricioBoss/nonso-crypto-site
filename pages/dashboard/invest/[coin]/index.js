import { Container, Typography, Grid } from "@mui/material";
import { useState } from "react";
// layouts
import Layout from "../../../../layouts";
// hooks
import useSettings from "../../../../hooks/useSettings";
// components
import Page from "../../../../components/Page";
import serializeFields from "../../../../helpers/serialize";
import { getUserById } from "../../../../helpers/fetchers";
import useSWR from "swr";
import PropTypes from "prop-types";
import pageAuth from "../../../../middleware/pageAuthAccess";
import axios from "axios";
import StocksCard from "../../../../components/stocksCard";
import stocks from "../../../../helpers/stocks";
import PlanCards from "../../../../components/PlanCards";
import plans from "../../../../helpers/plans";
import StockPlanCards from "../../../../components/StockPlanCards";
import PaymentChoice from "../../../../components/PaymentChoice";
import cryptoList from "../../../../helpers/crypto";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

// ----------------------------------------------------------------------
async function handler(context) {
  const user = serializeFields(context.req.user);
  const coinSymbol = context.params.coin;
  console.log({ coinSymbol });
  if (!(coinSymbol && cryptoList[coinSymbol])) {
    return {
      redirect: {
        destination: "/dashboard/invest",
        permanent: false,
      },
    };
  }

  const {
    data: { data: cryptoDataList },
  } = await axios({
    baseURL: "http://pipsville-img-server.eu-north-1.elasticbeanstalk.com",
    method: "GET",
    url: "/coin/markets",
    params: {
      vs_currency: "usd",
      ids: coinSymbol,
    },
  });

  const quoteResponse = await axios.get(
    `https://query1.finance.yahoo.com/v8/finance/chart/${cryptoDataList[0].symbol.toUpperCase()}-USD?metrics=high&interval=30m&range=5d`
  );

  // const stockData = await stockResponse.data.quoteResponse.result[0];
  const stockData = await cryptoDataList[0];
  const quoteData = {
    timestamp: await quoteResponse.data.chart.result[0].timestamp,
    quotes: await quoteResponse.data.chart.result[0].indicators.quote[0],
  };

  // console.log(stocksDataList.length, stockQuoteList.length, stockDataQuote);
  return {
    props: {
      user,
      stockData,
      quoteData,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };
  // return {
  //   props: { user },
  // };
}
Plans.propTypes = {
  user: PropTypes.object,
  stockData: PropTypes.object,
  quoteData: PropTypes.object,
};
export const getServerSideProps = pageAuth(handler);
Plans.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Plans({ user, stockData, quoteData }) {
  const url = `/api/user/${user._id}`;

  console.log({ stockData, quoteData });
  const { data } = useSWR(url, getUserById);
  const { themeStretch } = useSettings();

  return (
    <Page title={`${stockData.name} Plans`}>
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4">
          Invest in{" "}
          <span
            style={{ background: cryptoList[stockData.id].bg }}
            className=" text-white p-2 rounded-md"
          >
            {stockData.name}
          </span>
        </Typography>
        <div className=" mt-10 rounded-2xl overflow-hidden">
          <AdvancedRealTimeChart
            theme="dark"
            width={"100%"}
            symbol={`COINBASE:${stockData.symbol.toUpperCase()}USD`}
            hide_top_toolbar
            hide_side_toolbar
            height={400}
          ></AdvancedRealTimeChart>
        </div>
        <InvestList user={data ? data : user} stockData={stockData} />
      </Container>
      {/* <PaymentChoice
        open={open}
        setOpen={setOpen}
        details={payDetails}
        user={data ? data : user}
      /> */}
    </Page>
  );
}

const InvestList = ({ user, stockData }) => {
  const [payDetails, setPayDetails] = useState({
    capital: "",
    stock: "",
    planId: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();

  const handleInvest = () => {
    setisSubmitting(true);
    console.log("the details", payDetails);
    axios
      .post(`/api/user/${user._id}/invest`, {
        ...payDetails,
      })
      .then((res) => {
        router.push("/dashboard/invest/all");
        setisSubmitting(false);
      })
      .catch((err) => {
        setisSubmitting(false);
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <Grid mt={1} container spacing={3}>
      {plans.map((plan, index) => (
        <Grid key={plan.id} item xs={12} sm={6} md={4}>
          <StockPlanCards
            setDetails={setPayDetails}
            plan={{ ...plan, id: index }}
            stockData={stockData}
            user={user}
            isSubmitting={isSubmitting}
            handleInvest={handleInvest}
          />
        </Grid>
      ))}
    </Grid>
  );
};
