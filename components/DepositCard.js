import { useState } from "react";
import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Typography,
  TextField,
  Card,
  Box,
  CardContent,
  IconButton,
  Modal,
  Stack,
  Button,
  Divider,
  Switch,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { toast } from "react-toastify";
import CopyClipboard from "./CopyToClipboard";
import { useRouter } from "next/router";

//number and word transforms
import { capitalCase } from "change-case";
import numeral from "numeral";
//vext/Image
import Image from "next/image";
//barcode images
import usdtImg from "../assets/img/usdt.jpg";
import btcImg from "../assets/img/btc.jpg";
import ethImg from "../assets/img/eth.jpg";
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(() => ({
  height: "100%",
  width: "100%",
  textAlign: "left",
  alignItems: "center",
}));

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
  border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};
// ----------------------------------------------------------------------
//{ plan: { minimum, maximum, name, id, interest }}
DepositCard.propTypes = {
  user: PropTypes.object,
  coin: PropTypes.object,
};
function DepositCard({ user, coin }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [field, setField] = useState({
    transactionId: "",
    amount: "",
  });
  const router = useRouter();
  const handleAmtChange = (e) => {
    const { name, value } = e.target;
    setField((vals) => ({ ...vals, [name]: value }));
  };

  const handleSubmit = () => {
    if (field.transactionId.length <= 5) {
      toast.error("invalid transactionId");
      return;
    }
    if (parseInt(field.amount) <= 10) {
      toast.error("deposit amount must be greater than $10");
      return;
    }
    setIsSubmitting(true);
    axios
      .post(`/api/user/${user._id}/deposit/`, { ...field, coin: coin.symbol })
      .then(() => {
        router.push("/dashboard");
        setIsSubmitting(false);
      })
      .catch((err) => {
        setIsSubmitting(false);
        if (err.response) {
          toast.error("error, submitting transaction");
        } else {
          toast.error(err.message);
        }
      });
  };
  return (
    <RootStyle>
      {
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box>
                <img
                  style={{
                    width: 48,
                    height: 48,
                  }}
                  src={`/icons/${coin.symbol}.svg`}
                  alt="coin icon"
                />
              </Box>
              <Box>
                <Typography variant="subtitle2">
                  Pay with {capitalCase(coin.name)}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={"primary"}
                >{`Current Price: $${numeral(coin.current_price).format(
                  "0.00"
                )}`}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                color: "error.main",
                justifySelf: "end",
              }}
            ></Box>
          </Box>

          <Typography align="center" variant="body2" color={"primary"}>
            Make payment to the Address below
          </Typography>
          <Box>
            {coin.symbol === "btc" && <Image src={btcImg} alt="barcode" />}
            {coin.symbol === "usdt" && <Image src={usdtImg} alt="barcode" />}
            {coin.symbol === "eth" && <Image src={ethImg} alt="barcode" />}
          </Box>
          <Box>
            <>
              <Typography align="center" variant="body2" color={"primary"}>
                Wallet Address
              </Typography>
              {coin.symbol === "btc" && (
                <CopyClipboard
                  value={"bc1q9s7l368fa04l67ylw8a9ulx8c39u8ttuycktf6"}
                  size="small"
                  disabled
                />
              )}
              {coin.symbol === "usdt" && (
                <CopyClipboard
                  value={"0x7ac61Ed4A0C5422e8EfeA284375b5B8ec981B56A"}
                  size="small"
                  disabled
                />
              )}
              {coin.symbol === "eth" && (
                <CopyClipboard
                  value={"0x7ac61Ed4A0C5422e8EfeA284375b5B8ec981B56A"}
                  size="small"
                  disabled
                />
              )}
              <TextField
                fullWidth
                sx={{ mt: 2 }}
                name="transactionId"
                size="small"
                variant="outlined"
                placeholder="Enter transaction Id"
                type="text"
                value={field.transactionId}
                onChange={handleAmtChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                sx={{ mt: 2 }}
                size="small"
                name="amount"
                variant="outlined"
                placeholder="Enter Amount in $"
                type="number"
                value={field.amount}
                onChange={handleAmtChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <LoadingButton
                fullWidth
                size="medium"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
                onClick={handleSubmit}
              >
                <span>
                  Pay{" "}
                  {numeral(
                    parseFloat(field.amount) / coin.current_price
                  ).format("0.0000")}
                  {coin.symbol}
                </span>
              </LoadingButton>
            </>
          </Box>
        </CardContent>
      }
    </RootStyle>
  );
}

export default DepositCard;
