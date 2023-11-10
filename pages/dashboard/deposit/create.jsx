import { Container, Typography, Grid } from "@mui/material";
// layouts
import Layout from "../../../layouts";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import pageAuth from "../../../middleware/pageAuthAccess";
import PropTypes from "prop-types";
import serializeFields from "../../../helpers/serialize";
import numeral from "numeral";
import DepositCard from "../../../components/DepositCard";
import { getCoinPrices, getQuotes } from "../../../helpers/fetchers";

// ----------------------------------------------------------------------

async function handler({ req }) {
  const user = serializeFields(req.user);
  let cyptoDetails = await getCoinPrices();
  console.log({ cyptoDetails });
  return {
    props: {
      user,
      coinList: cyptoDetails,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };

  // return {
  //   props: { user },
  // };
}
export const getServerSideProps = pageAuth(handler);
Pending.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
Pending.propTypes = {
  user: PropTypes.object,
  coinList: PropTypes.object,
};
export default function Pending({ user, coinList }) {
  const { themeStretch } = useSettings();
  return (
    <Page title="Deposit Coin">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3">Fund Your Account</Typography>
        <Typography>
          Effortlessly Fund Your Account with WisevestCapital. Investing in the
          future of cryptocurrency has never been easier - with just a few
          clicks, you can fund your account and embark on a path to financial
          growth.{" "}
          <span className=" font-bold">
            {" "}
            Current Balance: $ {numeral(user.accountBalance).format("0.00")}
          </span>
        </Typography>
        <Grid container mt={3} spacing={3}>
          {coinList.map((x) => (
            <Grid key={x.id} item xs={12} sm={6} md={4}>
              <DepositCard user={user} coin={x} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
