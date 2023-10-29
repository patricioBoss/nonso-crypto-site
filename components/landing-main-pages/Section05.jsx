import Image from "next/image";
import LogosIllustration from "../../public/img/logos-illustration.svg";

export default function Section05() {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="text-4xl text-white mb-4 font-semibold">
                  Get started in minutes and connect all your accounts in one
                  place
                </h2>
                <p className="text-lg text-blue-200 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Image */}
              <div
                className="flex justify-center mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image
                    className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none max-w-none mix-blend-lighten"
                    src={LogosIllustration}
                    alt="Logos illustration"
                    // aria-hidden="true"
                  />
                  <Image
                    src={"/img/logos.png"}
                    width={720}
                    height={283}
                    alt="Logos"
                    className="relative z-10"
                  />
                </div>
              </div>

              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* 1st item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-blue-600 bg-blue-200 h-11 w-11 rounded-full">
                      1
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">
                    Register
                  </h4>
                  <p className="text-blue-200">
                    Look for the &quot;Sign Up&quot; or &quot;Register button
                    and click on it to start the registration process.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-blue-600 bg-blue-200 h-11 w-11 rounded-full">
                      2
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">
                    Additional verification
                  </h4>
                  <p className="text-blue-200">
                    Complete all necessary verification processes, Additionally,
                    provide accurate withdrawal addresses tailored to each
                    respective cryptocurrency.
                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-blue-600 bg-blue-200 h-11 w-11 rounded-full">
                      3
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">
                    Invest Now
                  </h4>
                  <p className="text-blue-200">
                    Deposit funds into your wallet and select an appropriate
                    plan tailored to your preferences, ensuring you receive a
                    daily return on your investment (ROI)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
