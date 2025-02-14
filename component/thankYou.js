"use client";
import React, { useContext } from "react";
import TulasLogo from "../public/Components/Navbar/TulasLogoGreen.png";
import tick from "../public/graduate-school-of-business/mba/tick.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { UtmContext } from "./utmParams";
function ThankYou() {
  const { utmParams } = useContext(UtmContext);
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/tulasinstitutedehradun/",
      icon: <FaFacebookF />,
    },
    { href: "https://twitter.com/tulas_institute", icon: <FaTwitter /> },
    {
      href: "https://www.instagram.com/tulasinstitutedehradun/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/school/tula's-institute/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.youtube.com/@TulasInstitutedehradune",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="w-full h-screen bg-white overflow-hidden relative">
      <div className="w-[50vw] md:w-[30vw] z-10 bg-[#3D001B] h-[200vh] rotate-45 -top-[100%] md:-top-[90%] absolute"></div>
      <div className="w-[30vw] z-10 bg-[#007A83] h-[200vh] rotate-45 right-0 absolute"></div>
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        <Image
          src={TulasLogo}
          alt=""
          className="absolute right-6 md:right-10 top-0 w-[30vw] md:w-[10vw] pt-6 h-fit pointer-events-auto cursor-pointer"
        />
        <Image src={tick} alt="" className="mb-4" />
        <h3 className="text-black px-2 font-[Helvetica] font-extrabold text-[clamp(10px,6vw,100px)] md:text-[clamp(10px,2.8vw,100px)] mb-4">
          Thank You for Choosing Tula’s!
        </h3>
        <h5 className="text-black px-2 md:max-w-[35vw] text-[clamp(8px,4vw,100px)] md:text-[clamp(10px,1vw,45px)] font-[MontserratLight] text-center mb-4">
          You’ve just taken a meaningful step towards an exciting future. Our
          team is reviewing your details and will connect with you soon to guide
          you further.
        </h5>
        <h5 className="text-[#007A83] px-2 md:max-w-[35vw] text-[clamp(8px,4vw,100px)] md:text-[clamp(10px,1vw,45px)] font-[MontserratMedium] text-center">
          Looking forward to helping you shape your future!
        </h5>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10vw] mt-[5vh] md:mt-[10vh] mb-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-black leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] font-bold font-[MontserratMedium]">
              Contact With Us
            </h3>
            <ul className="flex gap-2 pt-[1%] w-full items-center justify-center">
              {socialMediaLinks.map((social, index) => (
                <li
                  key={index}
                  className="text-[20px] p-2 rounded-full backdrop:blur-3xl bg-opacity-80 text-white bg-black"
                >
                  <a
                    href={social.href}
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
            <h3 className="text-black leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-bold font-[MontserratMedium]">
              Visit Our Website
            </h3>{" "}
            <button
              onClick={() => (window.location.href = `/${utmParams}`)}
              className="text-white leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] bg-[#007A83] py-3 px-14 font-bold font-[MontserratMedium]"
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
