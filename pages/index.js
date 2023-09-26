// ----------------------------------------------------------------------

import dynamic from "next/dynamic";
import LandingLayout from "../components/landing-layout/LandingLayout.js";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import axios from "axios";
import HeroSection from "../components/landing-main-pages/HeroSection.js";
import { PhoneChatSection } from "../components/landing-main-pages/PhoneChatSection.jsx";
import Section05 from "../components/landing-main-pages/Section05.jsx";
import Section07 from "../components/landing-main-pages/section07.jsx";
import Section08 from "../components/landing-main-pages/section08.jsx";
import WidgetWall1 from "../components/landing-main-pages/WidgetWall1.jsx";
import CalculatorSection from "../components/landing-main-pages/CalculatorSection.jsx";

const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const tapeSymbol = [
  {
    title: "TESLA, INC.",
    proName: "NASDAQ:TSLA",
  },
  {
    title: "APPLE INC.",
    proName: "NASDAQ:AAPL",
  },
  {
    title: "AMAZON.COM, INC.",
    proName: "NASDAQ:AMZN",
  },
  {
    title: " MICROSOFT CORPORATION",
    proName: "NASDAQ:MSFT",
  },
  {
    title: "NETFLIX, INC.",
    proName: "NASDAQ:NFLX",
  },
  {
    title: " META PLATFORMS, INC.",
    proName: "NASDAQ:META",
  },
  {
    title: "GOOGLE INC.",
    proName: "NASDAQ:GOOGL",
  },
  {
    title: "ALIBABA",
    proName: "NYSE:BABA",
  },
  {
    title: " SHOPIFY INC.",
    proName: "NYSE:SHOP",
  },
  {
    title: "UBER",
    proName: "NYSE:UBER",
  },
];

export default function Index({ marketData }) {
  const mounted = useRef(true);
  const router = useRouter();
  console.log({ marketData });
  useEffect(() => {
    const { ref } = router.query;

    if (mounted.current) {
      if (ref) {
        axios
          .get("/api/user/" + ref)
          .then((res) => {
            console.log(res.data.data);
            localStorage.setItem("ref", JSON.stringify(res.data.data));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
    mounted.current = false;
  }, []);

  return (
    <>
      <div className=" bg-white">
        <HeroSection />
        <PhoneChatSection />
        <Section05 />
        <Section08 />
        <WidgetWall1 />
        <Section07 />
        <CalculatorSection marketData={marketData} />
      </div>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

//https://bd-piano-live.mystagingwebsite.com/wp-json/wp/v2/posts?include=535495,535506,535510
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,tether,ethereum,bnb,ripple,cardano,usd-coin,binancecoin,dogecoin,matic-network,tron,solana
export const getStaticProps = async () => {
  try {
    const { data } = await axios({
      baseURL: "https://api.coingecko.com",
      method: "GET",
      url: "/api/v3/coins/markets",
      params: {
        vs_currency: "usd",
        ids: "bitcoin,tether,ethereum,bnb,ripple,cardano,usd-coin,binancecoin,dogecoin,matic-network,tron,solana",
      },
    });

    return {
      props: {
        marketData: data,
      },
      revalidate: 5 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
