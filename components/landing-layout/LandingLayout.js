import React from "react";
import Navbar from "../landing-main-pages/Navbar";
// import TawkMessenger from "../TawkMessenger";
import WhatsAppWidget from "../WhatsAppWidget";
import RandomToast from "../RandomToast";
import Footer from "../landing-main-pages/Footer";

const LandingLayout = ({ children, isSticky }) => {
  return (
    <div className=" relative bg-[#F2F2F2]">
      <Navbar />
      {children}
      {/* <TawkMessenger /> */}
      <RandomToast />
      <WhatsAppWidget />
      <Footer />
    </div>
  );
};

export default LandingLayout;
