"use client";
import React, { useContext } from "react";
import TulasLogo from "../public/Components/Navbar/TulasLogoGreen.png";
import tick from "../public/graduate-school-of-business/mba/tick.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { UtmContext } from "./utmParams";

// Tulas brand colors
const TULAS_DARK_BLUE = "#0B2447";
const TULAS_ORANGE = "#f97316";

function ThankYou() {
  const { utmParams } = useContext(UtmContext);
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/tulasuniversitydehradun/",
      icon: <FaFacebookF />,
    },
    { href: "https://twitter.com/tulas_institute", icon: <FaXTwitter /> },
    {
      href: "https://www.instagram.com/tulasuniversity.ddn/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/school/tulasuniversity/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.youtube.com/@tulasuniversitydehradun",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="w-full h-screen bg-white overflow-hidden relative">
      <div
        className="w-[50vw] md:w-[30vw] z-10 h-[200vh] rotate-45 -top-[100%] md:-top-[90%] absolute"
        style={{ backgroundColor: TULAS_DARK_BLUE }}
      ></div>
      <div
        className="w-[30vw] z-10 h-[200vh] rotate-45 right-0 absolute"
        style={{ backgroundColor: TULAS_ORANGE }}
      ></div>
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        <Image
          src={TulasLogo}
          alt=""
          className="absolute right-6 md:right-10 top-0 w-[30vw] md:w-[10vw] pt-6 h-fit pointer-events-auto cursor-pointer"
        />
        {/* <Image src={tick} alt="" className="mb-4" /> */}
        <h3 className="text-[#353535] px-2 font-[Helvetica] font-extrabold text-[clamp(10px,6vw,100px)] md:text-[clamp(10px,2.8vw,100px)] mb-4">
          Thank You for Choosing Tulas!
        </h3>
        <h5 className="text-[#353535] px-2 md:max-w-[35vw] text-[clamp(8px,4vw,100px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-center mb-4">
          You’ve just taken a meaningful step towards an exciting future. Our
          team is reviewing your details and will connect with you soon to guide
          you further.
        </h5>
        <h5
          className="px-2 md:max-w-[35vw] text-[clamp(8px,4vw,100px)] md:text-[clamp(10px,1vw,45px)] font-[TTChocolatesMedium] text-center"
          style={{ color: TULAS_ORANGE }}
        >
          Looking forward to helping you shape your future!
        </h5>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10vw] mt-[5vh] md:mt-[10vh] mb-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-[#353535] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] font-bold font-[TTChocolatesMedium]">
              Contact With Us
            </h3>
            <ul className="flex gap-2 pt-[1%] w-full items-center justify-center">
              {socialMediaLinks.map((social, index) => (
                <li
                  key={index}
                  className="text-[20px] p-2 rounded-full backdrop:blur-3xl bg-opacity-80 text-white"
                  style={{ backgroundColor: TULAS_DARK_BLUE }}
                >
                  
                    <a href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-[#353535] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-bold font-[TTChocolatesMedium]">
              Visit Our Website
            </h3>{" "}
            <button
              onClick={() => (window.location.href = `/${utmParams}`)}
              className="text-white leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] py-3 px-14 font-bold font-[TTChocolatesMedium]"
              style={{ backgroundColor: TULAS_ORANGE }}
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;