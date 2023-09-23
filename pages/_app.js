//tailwind
import "../scss/tailwind.scss";
import "../scss/icons.scss";
// scroll bar
import "simplebar/src/simplebar.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// highlight
import "../utils/highlight";

// editor
import "react-quill/dist/quill.snow.css";
import "mapbox-gl/dist/mapbox-gl.css";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import PropTypes from "prop-types";
import cookie from "cookie";
// next
import Head from "next/head";
import App from "next/app";
// utils
import { getSettings } from "../utils/settings";
//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// contexts
import { SettingsProvider } from "../contexts/SettingsContext";
import { CollapseDrawerProvider } from "../contexts/CollapseDrawerContext";
// theme
import ThemeProvider from "../theme";
// components
// import Settings from '../components/settings';
import RtlLayout from "../components/RtlLayout";
import ProgressBar from "../components/ProgressBar";
import ThemeColorPresets from "../components/ThemeColorPresets";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";
import Script from "next/script";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

//there is a meta tag change
export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        title="Elizabeth Ann Graney | Wealth Management"
        description="Elizabeth Ann Graney can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        openGraph={{
          type: "website",
          locale: "en-GB",
          url: "https://advisor.elizabethanngraney.com",
          siteName: "Elizabeth Ann Graney Portfolio website",
          profile: {
            firstName: "Elizabeth Ann Graney",
            lastName: "Graney",
            gender: "female",
          },
          images: [
            {
              url: "https://f004.backblazeb2.com/file/pipsville-bucket/666x1122.2png.png",
              alt: "Og Image Alt",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "elizabeth, Ann, graney, Elizabeth Reed, Elizabeth Ann Graney, Washington, DC, Wealth Management, Wealth Management, Financial goals, Retirement, Investing, Family planning, Business planning, Philanthropy, Financial wellness",
          },
          // {
          //   name: "google-site-verification",
          //   content: "zElf0lEx7sIag7jmbsi1DbGcFRRpzg0em8yY1khoLYE",
          // },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <LocalBusinessJsonLd
        type="Wealth Management"
        id="https://advisor.elizabethanngraney.com"
        name="Elizabeth Ann Graney - Wealth Management"
        description="Elizabeth Ann Graney can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        url=""
        telephone="+14242793916"
        address={{
          streetAddress: "725 15th Street Northwest Washington DC 20005",
          addressLocality: "15th Street Northwest Washington",
          addressRegion: " DC",
          postalCode: "34688",
          addressCountry: "US",
        }}
        geo={{
          //39.1962786,-77.1762385
          latitude: "39.1962786",
          longitude: "-77.1762385",
        }}
        images={[
          "https://f004.backblazeb2.com/file/pipsville-bucket/666x1122.2png.png",
        ]}
        openingHours={[
          {
            opens: "08:00",
            closes: "17:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
        ]}
      />
      <Script src="/js/easy_background.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/js/feather.min.js" />
      <CollapseDrawerProvider>
        <SettingsProvider defaultSettings={settings}>
          <ThemeProvider>
            <MotionLazyContainer>
              <ThemeColorPresets>
                <RtlLayout>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                  <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    theme="colored"
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </RtlLayout>
              </ThemeColorPresets>
            </MotionLazyContainer>
          </ThemeProvider>
        </SettingsProvider>
      </CollapseDrawerProvider>
      <Script>{`feather.replace();`}</Script>
      {/* <Script
        src="//code.tidio.co/ryxghgdiucqlkgswdprdkwlolpygakwf.js"
        async
      ></Script>
      <Script>
        {`
        document.querySelectorAll('a.scroll[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
        `}
      </Script> */}

      <Script>{`window.$crisp=[];window.CRISP_WEBSITE_ID="175dce82-598a-4ab7-bb64-8a98d7edc185";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}</Script>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
