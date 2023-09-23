const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      lg_992: "992px",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      inter: ["inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "11rem",
      },
    },
    extend: {
      colors: {
        dark: "#3c4858",
        black: "#161c2d",
        "dark-footer": "#192132",
      },
      animation: {
        "rotate-center": "rotate-center 7s linear infinite both",
        "bounce-out": "new-bounce-out 0.4s both",
        "bounce-in": "new-bounce-in 0.4s both",
        "slide-in-bottom":
          "slide-in-bottom 0.7s cubic-bezier(0.165, 0.840, 0.440, 1.000) both",
        "fade-out-bottom":
          "fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) reverse both",
      },
      boxShadow: {
        sm: "0 2px 4px 0 rgb(60 72 88 / 0.15)",
        DEFAULT: "0 0 3px rgb(60 72 88 / 0.15)",
        md: "0 5px 13px rgb(60 72 88 / 0.20)",
        lg: "0 10px 25px -3px rgb(60 72 88 / 0.15)",
        xl: "0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(60 72 88 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(60 72 88 / 0.05)",
        testi: "2px 2px 2px -1px rgb(60 72 88 / 0.15)",
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      maxWidth: ({ theme, breakpoints }) => ({
        1200: "71.25rem",
        992: "60rem",
        768: "45rem",
      }),

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [],
};
