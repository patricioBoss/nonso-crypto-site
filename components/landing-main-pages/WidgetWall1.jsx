import React from "react";
import { Container } from "../landing-page-components/Container";
import dynamic from "next/dynamic";

const CryptoCurrencyMarket = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.CryptoCurrencyMarket),
  {
    ssr: false,
  }
);

const WidgetWall1 = () => {
  return (
    <section className="bg-[#131722]">
      <Container className={"pt-10 pb-20 "}>
        <div className=" flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-center  text-white sm:text-4xl">
            Trusted by over I million Users across the World.
          </h2>
          <p className="text-lg text-blue-200 mt-4 mb-8 text-center max-w-768">
            We engage in trading a vast portfolio of over 200 cryptocurrencies,
            offering a diverse range of options for investment and trading
            opportunities.
          </p>
        </div>

        <div className="">
          <CryptoCurrencyMarket
            colorTheme="dark"
            width="100%"
            height={400}
          ></CryptoCurrencyMarket>
        </div>
      </Container>
    </section>
  );
};

export default WidgetWall1;
