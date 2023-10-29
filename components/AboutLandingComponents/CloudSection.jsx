import React from "react";

const CloudSection = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-blue-600  text-center">
        Our Advancements
      </h3>
      <div
        id="advance"
        className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 mb-10 gap-[30px]"
      >
        <div className="lg:col-span-6">
          <div className="lg:mr-8">
            <img src="/img/hosting.png" alt="" />
          </div>
        </div>
        <div className="lg:col-span-6 mt-8 md:mt-0">
          <div className="grid grid-cols-1 gap-[30px]">
            <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out">
              <span className="text-blue-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                <i className="uil uil-swatchbook"></i>
              </span>
              <div className="flex-1 ml-3">
                <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">
                  Efficiency and Optimization:
                </h5>
                <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                  We streamlines operations, optimizes energy usage, and
                  enhances resource allocation, maximizing mining efficiency and
                  profitability.
                </p>
              </div>
              <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                <i className="uil uil-swatchbook"></i>
              </div>
            </div>

            <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out">
              <span className="text-blue-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                <i className="uil uil-tachometer-fast-alt"></i>
              </span>
              <div className="flex-1 ml-3">
                <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">
                  Adaptive Algorithms
                </h5>
                <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                  adjusts algorithms in real-time, ensuring miners remain
                  competitive and capable of effectively mining a diverse range
                  of cryptocurrencies.
                </p>
              </div>
              <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                <i className="uil uil-tachometer-fast-alt"></i>
              </div>
            </div>

            <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out">
              <span className="text-blue-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                <i className="uil uil-user-check"></i>
              </span>
              <div className="flex-1 ml-3">
                <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">
                  Enhanced Security
                </h5>
                <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                  AI algorithms bolster security measures, detecting and
                  preventing potential threats and fraud, making crypto mining
                  operations more secure and resilient against attacks.
                </p>
              </div>
              <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                <i className="uil uil-user-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSection;
