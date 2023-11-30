import React, { useEffect, useRef } from "react";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { capitalCase } from "change-case";
import numeral from "numeral";
const settings = {
  container: ".tiny-home-slide-four",
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<i class="mdi mdi-chevron-left translate-x-6 "></i>',
    '<i class="mdi mdi-chevron-right "></i>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    1025: {
      items: 4,
    },

    992: {
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

const HeroSection = ({ marketData }) => {
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      require("tiny-slider/src/tiny-slider").tns(settings);
    }
    isMounted.current = false;
  }, []);
  return (
    <>
      <section
        className=" py-36 md:h-screen h-auto items-center flex relative"
        id="home"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative mt-20 md:mt-0">
          <div className="grid grid-cols-1 mb-8 md:mb-0">
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-semibold mb-7 position-relative">
              Create The Future You <br />
              Desire Today. Let&apos;s{" "}
              {/* <span
              className="typewrite relative text-type-element"
              data-period="2000"
              data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
            ></span> */}
              <span>
                <TypewriterComponent
                  options={{
                    wrapperClassName: "typewrite relative text-type-element",
                    strings: [
                      "Start Your Journey.",
                      "Invest Smarter.",
                      "Grow Together.",
                    ],
                    autoStart: true,

                    loop: true,
                  }}
                />
              </span>
            </h4>

            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
              Step into a realm of unparalleled potential. We combine artificial
              intelligence and cryptocurrency mining for a seamless, efficient,
              and rewarding journey.
            </p>

            <div className="relative mt-10">
              <Link
                href="/register"
                className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="p-6 border-t border-dashed border-white/30">
                <div className="grid grid-cols-12 items-center">
                  <div className="lg:col-span-4 md:col-span-6 col-span-5">
                    <h5 className="text-white/50 text-xl mb-0">
                      Token Popular
                    </h5>
                  </div>

                  <div className="slider-four lg:col-span-8 md:col-span-6 col-span-7 relative overflow-hidden">
                    <div className="tiny-home-slide-four flex ">
                      {marketData
                        .slice(0, 5)
                        .map(
                          ({
                            name,
                            current_price,
                            price_change_percentage_24h,
                          }) => (
                            <div key={name} className="tiny-slide">
                              <div className="text-center">
                                <h6 className="text-white mb-1">{name}</h6>
                                <span className="text-white/50 block">
                                  $ {current_price}
                                </span>
                                <span
                                  className={
                                    price_change_percentage_24h >= 0
                                      ? "text-emerald-600"
                                      : "text-red-600"
                                  }
                                >
                                  {numeral(price_change_percentage_24h).format(
                                    "0.0"
                                  )}
                                  %
                                </span>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
