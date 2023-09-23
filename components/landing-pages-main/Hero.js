import React, { useEffect } from "react";
// import { getCookie } from "cookies-next";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

const Hero = () => {
  useEffect(() => {
    // if (getCookie("googtrans")?.includes("en")) {
    //   setisTranslate(true);
    // } else {
    //   // setisTranslate(false);
    // }

    return () => {};
  }, []);

  return (
    <section className=" py-36 h-auto items-center flex relative" id="home">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative text-white">
        <h1 className=" font-inter font-extralight text-5xl mb-4 md:mb-0 md:text-[72px] md:tracking-[-3px] text-center">
          Elizabeth Ann Graney, QPFC
        </h1>
        <h2 className=" font-inter text-base md:text-[25px] md:tracking-[-2.5px] leading-normal text-center">
          Vice President, Wealth Management, Financial Advisor, Financial
          Planning Specialist, Insurance Planning Director
        </h2>
        <div className=" flex justify-center gap-[15px] mt-8">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100092628723527&mibextid=LQQJ4d"
          >
            <FaFacebookF className=" h-[24px] w-[24px]" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:advisor.elizabethgraneyreed@gmail.com"
          >
            <IoIosMail className=" h-[24px] w-[24px]" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/elizabeth_ann_graney?igshid=OGQ5ZDc2ODk2ZA=="
          >
            <BsInstagram className=" h-[24px] w-[24px]" />
          </a>
        </div>
        <p className=" text-lg mt-[16px] text-center">
          <span className=" font-bold">Direct:&nbsp;&nbsp;</span> +1(562)
          396-5148
        </p>
        <div className=" flex justify-center mt-[30px]">
          {/* +15623965148 */}
          <a
            href="https://wa.me/15623965148"
            target="_blank"
            rel="noreferrer"
            className=" py-4 px-[48px] bg-[#3182c1] text-[19px]  rounded-full"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
