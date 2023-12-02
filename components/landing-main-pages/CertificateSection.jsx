import Image from "next/image";
import CardsIllustration from "../../public/img/cards-illustration.svg";
import Link from "next/link";

export default function CertificateSection() {
  return (
    <section className=" py-20" data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl md:flex mx-auto md:max-w-none text-center md:text-left">
              {/* Content */}
              <div className=" flex-1">
                {/* Copy */}
                <h2
                  className="h2 text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="100"
                >
                  Certified AI Cryptocurrency Mining Pioneers
                </h2>
                <p
                  className="text-lg text-slate-400 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="200"
                >
                  At WisevestCapital, we&apos;re proud to offer certified crypto
                  mining solutions. Explore a platform that&apos;s certified for
                  security, precision, and success in AI mining
                </p>

                {/* Button */}
                <div
                  className="max-w-xs mx-auto sm:max-w-none mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  <div>
                    <Link
                      className="py-2 px-8 rounded-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm"
                      href="/login"
                    >
                      Invest Now
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg
                          className="fill-current"
                          width={12}
                          height={10}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 p-5 md:p-0">
                <div className="relative -mx-16 md:mx-0">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    alt="Cards illustration"
                    aria-hidden="true"
                  />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <Image src={"/img/cert.png"} width={512.4} height={419} />
                  </div>
                  <div className="flex w-[85%] absolute -right-5 -bottom-6 rounded-[16px] px-4 py-8 bg-[linear-gradient(233deg,#3671E9_28.71%,#0EA5E9_93.85%)]">
                    <div className="flex-1 pl-8 text-white">
                      <h6 className=" font-semibold text-sm">Total Invested</h6>
                      <p className=" text-sm">$49,256,578,330</p>
                    </div>
                    <div className="flex-1 pl-8 text-white border-l-2 border-l-black">
                      <h6 className=" font-semibold text-sm">Total Invested</h6>
                      <p className=" text-sm">$49,256,578,330</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
