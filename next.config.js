/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://s3-symbol-logo.tradingview.com",
      "bd-piano-live.mystagingwebsite.com",
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/finance/:path*",
  //       // has: [
  //       //   {
  //       //     type: "query",
  //       //     key: "symbols",
  //       //   },
  //       // ],
  //       destination: "https://query1.finance.yahoo.com/v6/finance/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
