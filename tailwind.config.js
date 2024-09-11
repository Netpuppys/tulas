const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scrollSpin: "scrollSpin 6s linear infinite",
        translateLeft: "translateLeft 0.8s linear",
        translateLeftMenu: "translateLeftMenu 0.3s linear",
        translateRight: "translateRight 0.8s linear",
        translateRightMenu: "translateRightMenu 0.3s linear",
        translateTop: "translateTop 0.8s linear",
        translateBottom: "translateBottom 0.8s linear",
      },
      keyframes: {
        scrollSpin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        translateLeft: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        translateRight: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        translateLeftMenu: {
          from: {
            left: "-100%",
            transform: "translateX(-100%)",
          },
          to: {
            left: "0px",
            transform: "translateX(0%)",
          },
        },
        translateRightMenu: {
          from: {
            left: "0px",
            transform: "translateX(0%)",
          },
          to: {
            left: "-100%",
            transform: "translateX(-100%)",
          },
        },
        translateTop: {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        translateBottom: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
