import Link from "next/link";
import React from "react";

const LandingAbout = () => {
  return (
    <section className="relative md:py-24 py-16 bg-zinc-50" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="/img/Crypto portfolio-pana.svg"
                className=" relative"
                alt=""
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ml-7">
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                Who We Are ?
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium ">
                Our Company Story
              </h3>

              <p className="text-slate-400 max-w-2xl mx-auto">
                WisevestCapital, as an investment company, is committed to
                redefining the landscape of digital investments. At the core of
                our vision is the integration of cutting-edge technology,
                particularly AI, to optimize investment strategies and deliver
                exceptional results to our clients. With a focus on
                cryptocurrency and blockchain assets, we strive to provide a
                secure and profitable avenue for investors to participate in the
                dynamic world of digital finance. Our approach emphasizes
                transparency, data-driven insights, and tailored investment
                solutions, ensuring that our clients&apos; financial goals are
                met while navigating the ever-evolving cryptocurrency markets.
                Join WisevestCapital in embracing a future where innovative
                investment strategies pave the way for financial growth and
                prosperity.
              </p>

              <div className="relative mt-10">
                <Link
                  href="/faq"
                  className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
