import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import "tiny-slider/dist/tiny-slider.css";
import Image from "next/image";
const reviews = [
  {
    title: "It is a Game-changer.",
    img: "/img/Miko.png",
    body: '"WisevestCapital has been a game-changer for my crypto mining endeavors. Their AI-powered approach significantly boosted my mining efficiency, resulting in higher returns."',
    author: "CrazyInvestor",
    rating: 4,
  },
  {
    title: "Outsanding",
    img: "/img/Ashley Rodriguez.jpg",
    body: "WisevestCapital made crypto mining easy for someone like me, who was new to the concept. The user-friendly interface and guidance on suitable investment plans gave me the confidence to start.",
    author: "Ashley R",
    rating: 4,
  },
  {
    title: "Exceeded my expectations",
    img: "/img/client/02.jpg",
    body: "WisevestCapital is a pioneer in merging AI with crypto mining. The efficiency gains and steady ROI have exceeded my expectations. ",
    author: "Ruki M",
    rating: 5,
  },
  {
    title: "Wish I could give 6 stars",
    img: "/img/rose.png",
    body: "I love that WisevestCapital makes it easy to monitor my investments in real-time. The website is always updating with the latest market information, which helps me make informed investment decisions.",
    author: "Rose k",
    rating: 5,
  },
  {
    title: "Excellent Support",
    img: "/img/Markus Wagner.jpg",
    body: "WisevestCapital's team is responsive, professional, and committed to helping me achieve my investment goals",
    author: "Markus Wagner",
    rating: 3,
  },
  {
    title: "No more debt!",
    img: "/img/caroline.png",
    body: "I appreciate WisevestCapital's transparency and dedication to helping me achieve my real estate investment goals.",
    author: "Caroline M",
    rating: 4,
  },
  {
    title: "I’m 13 and I’m rich.",
    img: "/img/client/03.jpg",
    body: "Managing investments can be overwhelming, but WisevestCapital simplified the process for me. Their intuitive platform and daily ROI updates provide peace of mind, allowing me to focus on my career while growing my investments",
    author: "Micheal Lin",
    rating: 5,
  },
  {
    title: "Inbuilt Porfolio Managment",
    img: "/img/joe.png",
    body: "I love how WisevestCapital allows me to diversify my portfolio with a variety of investment options. It's great to have everything in one place",
    author: "Joe Mc",
    rating: 5,
  },
  {
    title: "Safe and Secure",
    img: "/img/client/01.jpg",
    body: "WisevestCapital has exceeded my expectations with its range of investment options and user-friendly interface. It's the perfect platform for anyone interested in investing.",
    author: "Miko Banks",
    rating: 4,
  },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const settings = {
  container: ".tiny-single-item",
  items: 1,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 16,
};

const TestimonialSection = () => {
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      require("tiny-slider/src/tiny-slider").tns(settings);
    }
    isMounted.current = false;
  }, []);
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">
          What Our Client Say ?
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Celebrate success with WisevestCapital through the voices of our
          satisfied users, as they share their remarkable experiences and
          achievements.
        </p>
      </div>
      <div className="flex justify-center relative mt-16">
        <div className="relative lg:w-1/3 md:w-1/2 w-full">
          <div className="absolute -top-20 md:-left-24 -left-0">
            <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
          </div>

          <div className="absolute bottom-28 md:-right-24 -right-0">
            <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
          </div>
          <div className="tiny-single-item">
            {reviews.map(({ author, body, rating, img }, idx) => (
              <div key={idx} className="tiny-slide">
                <div className="text-center">
                  <p className="text-lg text-slate-400 italic">
                    {" "}
                    {`" ${body} "`}{" "}
                  </p>
                  <div className="text-center mt-5">
                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                      {[...Array(5).keys()].map((index) => (
                        <StarIcon
                          key={index}
                          className={clsx(
                            "h-5 w-5 inline",
                            rating > index ? "fill-orange-300" : "fill-gray-300"
                          )}
                        />
                      ))}
                    </ul>
                    <Image
                      src={img}
                      className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto"
                      width={384}
                      height={512}
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">{author}</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
