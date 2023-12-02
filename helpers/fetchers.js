import axios from "axios";
import { yahooRequest } from "../utils/request";

export const getUserById = (url) => axios.get(url).then((res) => res.data.data);

export const getQuotes = async (quoteString) => {
  const { request } = yahooRequest();
  // const url = `/finance/quote?symbols=${quoteString}`;
  const url = `/yahooapi/quotes?symbols=${quoteString}`;
  const stocksResponse = await request.get(url);
  // return await stocksResponse.data.quoteResponse.result;
  return await stocksResponse.data.data;
};

export const getCoinPrices = async () => {
  const {
    data: { data: cryptoDataList },
  } = await axios({
    baseURL: "https://ethervest-image-server.cyclic.app",
    method: "GET",
    url: "/coin/markets",
    params: {
      vs_currency: "usd",
      ids: "bitcoin,tether,ethereum,cardano,ripple",
    },
  });

  return cryptoDataList;
};
