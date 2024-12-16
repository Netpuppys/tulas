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
      screens: {
        mdNavbar: "880px",
      },
      boxShadow: {
        awardsImage: "0px 9px 40px 4px rgba(0, 0, 0, 0.75)",
        awardsLine: "0px 0px 20px 2px rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-custom-black":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 67.3%, #000 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scrollSpin: "scrollSpin 6s linear infinite",
        scrollSpinExpand: "scrollSpinExpand 0.1s linear",
        translateLeft: "translateLeft 0.4s linear",
        translateLeftImage: "translateLeft 0.8s linear",
        translateLeftMenu: "translateLeftMenu 0.3s linear",
        translateRight: "translateRight 0.4s linear",
        translateRightImage: "translateRight 0.8s linear",
        translateRightMenu: "translateRightMenu 0.3s linear",
        translateTop: "translateTop 0.8s linear",
        translateBottom: "translateBottom 0.8s linear",
        translateButton: "translateButton 0.5s ease",
        fadeIn: "fadeIn 0.5s ease",
        overlay: "overlay 0.5s ease",
        increaseWidth: "increaseWidth 0.3s ease",
        decreaseWidth: "decreaseWidth 0.3s ease",
        scaleUp: "scaleUp 0.3s linear",
        expandCheckpoint: "expandCheckpoint 0.3s ease",
        swipeRight: "swipeRight 0.8s ease",
        swipeLeft: "swipeLeft 0.8s ease 1s",
        awardHover: "awardHover 0.5s ease",
        awardImageHover: "awardImageHover 0.5s ease 0.5s",
        bannerImageFadeShow: "bannerImageFadeShow 0.8s linear",
        bannerImageFadeHide: "bannerImageFadeHide 0.8s linear",
      },
      keyframes: {
        expandCheckpoint: {
          "0%": {
            width: "1rem",
          },
          "80%": {
            width: "2.7rem",
            border: "1.5px solid #007A83",
          },
          "100%": {
            width: "2.5rem",
            border: "1px solid #007A83",
          },
        },
        bannerImageFadeShow: {
          "0%": {
            // zIndex: 10,
            opacity: 0,
          },
          "100%": {
            // zIndex: 20,
            opacity: 1,
          },
        },
        bannerImageFadeHide: {
          "0%": {
            // zIndex: 20,
            opacity: 1,
          },
          "100%": {
            // zIndex: 10,
            opacity: 0,
          },
        },
        awardHover: {
          from: {
            maxHeight: "25rem",
            height: "25rem",
            overflow: "hidden",
          },
          to: {
            maxHeight: "40rem",
            height: "40rem",
            overflow: "hidden",
          },
        },
        awardImageHover: {
          from: {
            objectFit: "cover",
            borderRadius: "20px",
            dropShadow: "none",
          },
          to: {
            objectFit: "contain",
            borderRadius: "20px",
            dropShadow: "0px 9px 40px 4px rgba(0, 0, 0, 0.75)",
          },
        },
        swipeRight: {
          from: {
            position: "absolute",
            width: "100%",
            zIndex: 10,
            top: 0,
            right: 0,
          },
          to: {
            position: "relative",
            width: "50%",
            zIndex: 0,
          },
        },
        swipeLeft: {
          from: {
            position: "relative",
            width: "50%",
            zIndex: 0,
          },
          to: {
            position: "absolute",
            width: "100%",
            zIndex: 10,
            top: 0,
            right: 0,
          },
        },
        scaleUp: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.1)",
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
            transform: "scale(0.95) translateY(2rem)",
          },
          to: {
            opacity: 1,
            transform: "scale(1) translateY(0rem)",
          },
        },
        increaseWidth: {
          from: {
            width: "33.33333333%",
          },
          to: {
            width: "66.66666666%",
          },
        },
        decreaseWidth: {
          from: {
            width: "66.66666666%",
          },
          to: {
            width: "33.33333333%",
          },
        },
        translateButton: {
          from: {
            transform: "translateY(-20rem)",
          },
          to: {
            transform: "translateY(0rem)",
          },
        },
        overlay: {
          from: {
            background: "transparent",
            opacity: "0",
          },
          to: {
            background: "#ffffff",
            opacity: 0.6,
          },
        },
        scrollSpin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        scrollSpinExpand: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(90deg)",
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
