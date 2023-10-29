/* eslint-disable react/no-unknown-property */
import React from "react";
import Navbar from "../landing-main-pages/Navbar";
// import TawkMessenger from "../TawkMessenger";
import WhatsAppWidget from "../WhatsAppWidget";
import RandomToast from "../RandomToast";
import Footer from "../landing-main-pages/Footer";
import LoadingScreen from "../LoadingScreen";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Script from "next/script";

const LandingLayout = ({ children, isSticky }) => {
  const isMounted = useRef(false);
  const timeoutId = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("mounted on loading screen");
    timeoutId.current = setTimeout(() => {
      setLoading(false);
      console.log("setLoading");
      // eslint-disable-next-line no-undef
      feather.replace();
    }, 6000);
    // if (!isMounted.current) {

    // }
    isMounted.current = true;
    // eslint-disable-next-line no-undef
    feather.replace();
    return () => {
      console.log("timeout cleared");
      clearTimeout(timeoutId.current);
    };
  }, []);
  return (
    <>
      <div className=" relative bg-white overflow-hidden">
        {loading && <LoadingScreen />}
        <Navbar isSticky={isSticky} />
        {children}
        {/* <TawkMessenger /> */}
        <RandomToast />
        <WhatsAppWidget />

        <Footer />
      </div>
      <Script src="https://www.livecoinwatch.com/static/lcw-widget.js" />
      <div className=" h-0 ">
        <div
          className="livecoinwatch-widget-5 bg-dark-footer m-0  w-full z-999 fixed bottom-0 !h-[50px]"
          lcw-base="USD"
          lcw-color-tx="#ffffff"
          lcw-marquee-1="coins"
          lcw-marquee-2="none"
          lcw-marquee-items="20"
        ></div>
      </div>
    </>
  );
};

export default LandingLayout;
