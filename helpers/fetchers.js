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
  const { data: cryptoDataList } = await axios({
    baseURL: "https://api.coingecko.com",
    method: "GET",
    url: "/api/v3/coins/markets",
    params: {
      vs_currency: "usd",
      ids: "bitcoin,tether,ethereum",
    },
  });

  return cryptoDataList;
};
