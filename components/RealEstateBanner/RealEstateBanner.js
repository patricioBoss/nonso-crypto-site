import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import Banner from "./banner";

const reels = [
  {
    bg: "bg-[linear-gradient(180deg,#598EF3_0%,#000000_100%,#ADE1FF_100%)]",
    color: "#FFFFFF",
    button: "warning",
    imgUrl: "/img/real/banner/1.png",
    title: "Your Journey to Crypto Prosperity Begins Here",
    paragraph:
      "WisevestCapital takes you on an exciting journey into the world of AI-driven crypto mining. It's your chance to embark on a path of financial prosperity with cutting-edge technology by your side",
  },
  {
    bg: "bg-[linear-gradient(180deg,#598EF3_0%,#ADE1FF_100%,#ADE1FF_100%)]",
    color: "#000000",
    button: "error",
    imgUrl: "/img/real/banner/2.png",
    title: "WisevestCapital AI: Where Innovation Meets Mining",
    paragraph:
      "Step into the future of mining with WisevestCapital. We've brought innovation and AI together to create a platform that's setting new standards in the world of cryptocurrency",
  },
  {
    bg: "bg-[linear-gradient(180deg,#598EF3_0%,#000000_100%,#ADE1FF_100%)]",
    color: "#FFFFFF",
    button: "warning",
    title: "AI-Powered Mining for Tomorrow's Investors",
    paragraph:
      "WisevestCapital is paving the way for tomorrow's investors. With AI-powered mining, we bring you a platform that's designed to deliver success in the world of cryptocurrency.",

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
            className={`${reel.bg} rounded-[1rem] overflow-hidden`}
          >
            <Banner reel={reel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RealEstateBanner;
