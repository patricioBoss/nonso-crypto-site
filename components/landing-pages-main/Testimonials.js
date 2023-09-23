import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import "tiny-slider/dist/tiny-slider.css";
import Image from "next/image";
const reviews = [
  {
    title: "It is a Game-changer.",
    img: "/img/Zhang Wei.jpg",
    body: '"Elizabeth Graney\'s expertise in wealth management has been invaluable to me. She provided personalized guidance and helped me create a solid retirement plan. I feel confident and secure in my financial future." ',
    author: " Robert L",
    rating: 4,
  },
  {
    title: "Outsanding",
    img: "/img/Ashley Rodriguez.jpg",
    body: "Elizabeth Graney understands my financial goals and has consistently provided me with well-informed investment advice. Her professionalism and attention to detail have made a significant positive impact on my portfolio.",
    author: "Ashley R",
    rating: 4,
  },
  {
    title: "Exceeded my expectations",
    img: "/img/client/02.jpg",
    body: "Elizabeth Graney goes above and beyond to ensure my family's financial well-being. She helped us develop a comprehensive estate plan that addresses all our needs. Her knowledge and dedication are unmatched.",
    author: "Ruki M",
    rating: 5,
  },
  {
    title: "Wish I could give 6 stars",
    img: "/img/rose.png",
    body: "I highly recommend Elizabeth Graney for business planning. She helped me strategize and optimize my business finances, resulting in improved profitability and growth. Her insights have been instrumental in my success.",
    author: "Rose k",
    rating: 5,
  },
  {
    title: "Excellent Support",
    img: "/img/Markus Wagner.jpg",
    body: "Elizabeth Graney has a deep understanding of philanthropy. With her guidance, I was able to align my charitable giving with my values and make a meaningful impact in my community. She truly cares about making a difference.",
    author: "Markus Wagner",
    rating: 3,
  },
  {
    title: "No more debt!",
    img: "/img/caroline.png",
    body: "Elizabeth Graney's financial wellness program has been a game-changer for me. She provided valuable insights and resources to improve my financial literacy and make smarter financial decisions. I am now more in control of my finances.",
    author: "Caroline M",
    rating: 4,
  },
  {
    title: "I’m 13 and I’m rich.",
    img: "/img/client/03.jpg",
    body: "Elizabeth Graney is a trusted advisor who takes the time to understand my unique financial situation. She helped me navigate complex investment options and provided me with a clear roadmap to achieve my financial goals.",
    author: "Micheal Lin",
    rating: 5,
  },
  {
    title: "Inbuilt Porfolio Managment",
    img: "/img/joe.png",
    body: "Elizabeth Graney's knowledge and expertise in wealth management are second to none. She consistently provides me with valuable insights and recommendations that have helped me grow my wealth. I trust her implicitly with my financial decisions",
    author: "Joe Mc ",
    rating: 5,
  },
  {
    title: "Safe and Secure",
    img: "/img/client/01.jpg",
    body: "Elizabeth Graney's knowledge and expertise in wealth management are second to none. She consistently provides me with valuable insights and recommendations that have helped me grow my wealth. I trust her implicitly with my financial decisions",
    author: "Miko Banks",
    rating: 4,
  },
];

const settings = {
  container: ".tiny-two-item",
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<svg stroke="currentColor" class="h-4 w-4 m-auto" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>',
    '<svg stroke="currentColor" class="h-4 w-4 m-auto" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    768: {
      items: 2,
    },
  },
};

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const Testimonials = () => {
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      require("tiny-slider/src/tiny-slider").tns(settings);
    }
    isMounted.current = false;
  }, []);
  return (
    <section className="relative md:py-24 py-16 bg-zinc-50" id="testi">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-[#0F8EC7] text-base font-medium uppercase mb-2">
            Testimonial
          </h6>
          <h3 className="mb-4 md:text-2xl text-xl font-medium">
            Client&apos;s Review
          </h3>
        </div>

        <div className="grid grid-cols-1 mt-8 relative">
          <div className="tiny-two-item">
            {reviews.map(({ author, body, rating, img }, idx) => (
              <div key={idx} className="tiny-slide">
                <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow shadow-slate-200 bg-white overflow-hidden m-2">
                  <Image
                    className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto object-cover object-center"
                    src={img}
                    alt=""
                    width={384}
                    height={512}
                  />
                  <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                    <p className="text-base text-slate-500">{body}</p>

                    <div>
                      <span className="text-[#0F8EC7] block mb-1">
                        {author}
                      </span>
                      <span className=" flex justify-center lg:justify-start">
                        {[...Array(5).keys()].map((index) => (
                          <StarIcon
                            key={index}
                            className={clsx(
                              "h-5 w-5",
                              rating > index
                                ? "fill-orange-300"
                                : "fill-gray-300"
                            )}
                          />
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
