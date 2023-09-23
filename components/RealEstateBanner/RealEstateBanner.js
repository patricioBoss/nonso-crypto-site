import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import Banner from "./banner";

const reels = [
  {
    imgUrl: "/img/real/banner/1.png",
    title:
      "Achieve Your Financial Goals with Elizabeth Graney's Wealth Management Services",
    paragraph:
      "Elizabeth Graney offers a wide range of carefully tailored wealth management services that allow you to diversify and maximize your returns. With her expertise, investing in your financial future has never been easier.",
  },
  {
    imgUrl: "/img/real/banner/2.png",
    title:
      "Unlock Your Wealth with Elizabeth Graney's Wealth Management Strategies",
    paragraph:
      "Wealth management is a proven way to build long-term financial security and achieve your goals. Elizabeth Graney offers access to personalized investment strategies and a comprehensive range of services to help you unlock your wealth potential.",
  },
  {
    title:
      "Unlock Your Wealth with Elizabeth Graney's Expert Wealth Management Services",
    paragraph:
      "Experience high returns and hassle-free financial planning with Elizabeth Graney's diverse range of wealth management solutions. Join now and take control of your financial future!",

    imgUrl: "/img/real/banner/3.png",
  },
];
const RealEstateBanner = () => {
  return (
    <div className=" w-full h-full">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        effect={"fade"}
        // fadeEffect= {{
        //   crossFade: true,
        // }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reels.map((reel) => (
          <SwiperSlide
            key={reel.imgUrl}
            className="bg-[linear-gradient(180deg,#4AA0FF_0%,#ADE1FF_100%,#ADE1FF_100%)] rounded-[1rem] overflow-hidden"
          >
            <Banner reel={reel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RealEstateBanner;
