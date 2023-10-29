import React from "react";
import Exchange from "./component/Exchange";
import { useState } from "react";
import BaseButton from "./component/BaseButton";
import dynamic from "next/dynamic";
import getNextPlanId from "../../utils/getNextPlanId";
import Link from "next/link";
const StockMarket = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.StockMarket),
  {
    ssr: false,
  }
);

const currencies = [
  {
    image: "/img/country-icon/eng.png",
    name: "USD",
  },
];

const currencySelected = {
  image: "./img/country-icon/eng.png",
  name: "USD",
};

const CalculatorSection = ({ marketData }) => {
  return (
    <div className=" py-28 overflow-hidden">
      <div className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 ">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="col-span-12 lg:col-span-6 sm:hidden mb-8">
          <div className="w-full">
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <div className="bg-white md:rounded-[1rem] md:shadow-lg w-full p-3">
                <StockMarket width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4"
        >
          <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
            {/* Buy & trade on the <br className="hidden sm:block" />
            original crypto exchange. */}
            Achieve a remarkable up <br className="hidden sm:block" /> 20% to
            ROI
          </h2>
          <p className="paragraph">
            Maximize your returns on investment by aiming for an impressive up
            to 20% Return on Investment (ROI).
          </p>
          <Calculator marketData={marketData} />
        </div>
        <div
          data-aos="fade-left"
          className="col-span-12 lg:col-span-6 hidden sm:block"
        >
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="bg-white md:rounded-[1rem] md:shadow-lg w-full p-3">
              <StockMarket width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;

const Calculator = ({ marketData }) => {
  const [amount, setAmount] = useState("0");
  const [selected, setSlected] = useState(marketData[2]);
  const handleSelect = (coin) => {
    setSlected(coin);
  };
  console.log({ next: getNextPlanId(Number(amount)) });
  return (
    <div className="space-y-6 lg:pr-12">
      <Exchange
        title="Amount"
        name="amount"
        type="number"
        value={amount}
        onChange={({ target: { value } }) => setAmount(value)}
        exchangeSelected={currencySelected}
        exchanges={currencies}
      />
      <Exchange
        title="Get"
        name="get"
        type="number"
        disabled
        value={
          (Number(getNextPlanId(Number(amount)).interest / 100) * amount * 15) /
          selected.current_price
        }
        onDropdownSelect={handleSelect}
        exchangeSelected={selected}
        exchanges={marketData.map(({ name, image, current_price, symbol }) => ({
          name,
          image,
          current_price,
          symbol,
        }))}
      />
      <Link href={"/login"}>
        <BaseButton className="w-full mt-7 px-5 py-4 bg-blue-500 text-white text-base font-medium">
          Invest Now
        </BaseButton>
      </Link>
    </div>
  );
};
