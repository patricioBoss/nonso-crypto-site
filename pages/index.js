// ----------------------------------------------------------------------

import dynamic from "next/dynamic";
import LandingLayout from "../components/landing-layout/LandingLayout.js";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import axios from "axios";
import { getNeededInfo } from "../utils/settings";
import HeroSection from "../components/landing-main-pages/HeroSection";

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

export default function Index({ list }) {
  const mounted = useRef(true);
  const router = useRouter();
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
      <HeroSection />
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

//https://bd-piano-live.mystagingwebsite.com/wp-json/wp/v2/posts?include=535495,535506,535510
export const getStaticProps = async () => {
  try {
    const { data } = await axios({
      baseURL: "https://bd-piano-live.mystagingwebsite.com",
      method: "GET",
      url: "/wp-json/wp/v2/posts",
      params: {
        include: "535495,535506,535510",
      },
    });

    return {
      props: {
        list: data.map((articule) => getNeededInfo(articule)),
      },
      revalidate: 5 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
