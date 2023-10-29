import Image from "next/image";
import React from "react";

const Section08 = () => {
  return (
    <div className="relative my-14 max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
      <div
        data-aos="fade-right"
        className="col-span-12 lg:col-span-6 aos-init aos-animate h-full"
      >
        <div className="relative w-full h-full">
          <Image
            fill
            src="/img/industry-leading-security.webp"
            alt=""
            className="w-full"
          />
        </div>
      </div>{" "}
      <div
        data-aos="fade-left"
        className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8 aos-init aos-animate"
      >
        <h2 className="text-4xl font-semibold">
          Industry-leading security from day one
        </h2>
        <ul className="space-y-8 sm:space-y-4">
          <li className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                aria-hidden="true"
                role="img"
                className="material-design-icon check-circle-icon text-[#0c66ee]"
              >
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="material-design-icon__svg"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                </svg>
              </span>{" "}
              <span>Safety, security and compliance</span>
            </div>{" "}
            <p className="text-sm text-gray-700 leading-relaxed">
              We Focus on identifying, assessing, and managing the potential
              risks that come with an investment. Finding and leveraging on
              trained optimal algorithm to identify and filter potiential high
              valuie stocks.
            </p>
          </li>{" "}
          <li className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                aria-hidden="true"
                role="img"
                className="material-design-icon check-circle-icon text-[#0c66ee]"
              >
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="material-design-icon__svg"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                </svg>
              </span>{" "}
              <span>Cryptic security keys</span>
            </div>{" "}
            <p className="text-sm text-gray-700 leading-relaxed">
              Cryptography plays a critical role in enhancing security measures.
              It involves the use of mathematical algorithms to encode
              information, making it unreadable to unauthorized users. This
              encryption process safeguards sensitive data during transmission
              or storage, ensuring confidentiality and integrity.
            </p>
          </li>{" "}
          <li className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                aria-hidden="true"
                role="img"
                className="material-design-icon check-circle-icon text-[#0c66ee]"
              >
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="material-design-icon__svg"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                </svg>
              </span>{" "}
              <span>Covered by US SEC</span>
            </div>{" "}
            <p className="text-sm text-gray-700 leading-relaxed">
              Trading accounts are held by our partners, a firm duly registered
              by the Securities and Exchange Commission in the US and our U.S
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section08;
