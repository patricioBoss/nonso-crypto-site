import React, { useState } from "react";
import { Container } from "../landing-page-components/Container";
import BaseButton from "./component/BaseButton";
import Image from "next/image";
import numeral from "numeral";
import { capitalCase } from "change-case";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const dummydata = {
  deposit: [
    {
      name: "MizHope101",
      coin: "eth",
      amount: 555114,
    },
    {
      name: "BitMike212",
      coin: "usdt",
      amount: 404112,
    },
    {
      name: "LawrenceX",
      coin: "btc",
      amount: 334224,
    },
    {
      name: "Rose$aline",
      coin: "usdt",
      amount: 300614,
    },
    {
      name: "Rufus-raul",
      coin: "btc",
      amount: 300555,
    },
    {
      name: "McAnthony212",
      coin: "btc",
      amount: 300543,
    },
  ],
  withdrawal: [
    {
      name: "Eth0fficer",
      coin: "eth",
      amount: 1155114,
    },
    {
      name: "Gayle",
      coin: "eth",
      amount: 1004112,
    },
    {
      name: "Dann.reilly",
      coin: "usdt",
      amount: 764224,
    },
    {
      name: "Myron",
      coin: "usdt",
      amount: 422614,
    },
    {
      name: "Debby.martins",
      coin: "btc",
      amount: 424554,
    },
    {
      name: "Debby.martins",
      coin: "btc",
      amount: 310566,
    },
  ],
};

const DepositWithdrawal = ({ marketData }) => {
  let [coinMap, setCoinMap] = useState(
    marketData.reduce((acc, x) => {
      acc[x.symbol] = x;
      return acc;
    }, {})
  );
  const [order, setOrder] = useState("deposit");
  return (
    <section className="bg-[#131722]">
      <Container className={"pt-10 pb-20 "}>
        <div className=" flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-center  text-white sm:text-4xl">
            Top Deposits and Payouts.
          </h2>
          <p className="text-lg text-blue-200 mt-4 mb-8 text-center max-w-768">
            Discover seamless financial transactions with WisevestCapital&apos;s
            Top Deposits and Withdrawals. Take control of your investments and
            earnings effortlessly.
          </p>
        </div>
        <div className=" border-2 max-w-768 border-white rounded-full p-1 flex justify-between mx-auto">
          <BaseButton
            className={`px-6 py-4 ${
              order === "deposit" ? "bg-blue-500" : "!bg-none"
            }  text-white text-base font-medium hover:shadow-none`}
            onClick={() => setOrder("deposit")}
          >
            Deposit
          </BaseButton>
          <BaseButton
            className={`px-6 py-4 ${
              order === "withdrawal" ? "bg-blue-500" : "!bg-none"
            }  text-white text-base font-medium hover:shadow-none`}
            onClick={() => setOrder("withdrawal")}
          >
            Payouts
          </BaseButton>
        </div>

        <div>
          <div className="overflow-hidden mt-9 max-w-3xl mx-auto">
            <table className="min-w-full divide-y  divide-gray-100">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Coin
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody key={order} className="divide-y divide-gray-100">
                {dummydata[order].map((user) => (
                  <tr key={user.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white flex items-center gap-2">
                      <Image
                        src={coinMap[user.coin].image}
                        width={48}
                        height={48}
                        alt="coin"
                      />
                      {coinMap[user.coin].name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                      {numeral(
                        user.amount / coinMap[user.coin].current_price
                      ).format("0,0.000")}{" "}
                      {capitalCase(user.coin)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DepositWithdrawal;
