"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import TulasLogoGreen from "../../public/Components/Navbar/TulasLogoGreen.png";
import TulasLogoRed from "../../public/Components/Navbar/TulasLogoRed.png";

import { PiPencilSimpleLineLight } from "react-icons/pi";

import { FaPen } from "react-icons/fa";
import Image from "next/image";
import NavbarMobile from "./Component/NavbarMobile";
import NavbarDesktop from "./Component/NavbarDesktop";
import phoneCallGif from "../../public/Components/Navbar/phone_ringing.gif";

function Navbar({ setState, position = false, fullBanner = false }) {
  const [isChecked, setIsChecked] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [superExpandedIndex, setSuperExpandedIndex] = useState(null);
  const [thirdExpandedIndex, setThirdExpandedIndex] = useState(null);
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect to check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const threshold = fullBanner ? 1 : 0.5;
      // 60vh in pixels
      const sixtyVH = window.innerHeight * threshold;

      if (window.scrollY > sixtyVH) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    if (isChecked) {
      setExpandedIndex(null);
      setSuperExpandedIndex(null);
      setThirdExpandedIndex(null);
      setNestedLinksVisible(false);
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  useEffect(() => {
    if (setState) setState(isChecked);
    if (isChecked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isChecked]);

  const handleOutsideClick = () => {
    if (isChecked) {
      setExpandedIndex(null);
      setSuperExpandedIndex(null);
      setThirdExpandedIndex(null);
      setNestedLinksVisible(false);
      setIsChecked(false);
      setIsChecked(false);
    }
    if (nestedLinksVisible) {
      setNestedLinksVisible(false);
    }
  };
  return (
    <div
      className={`px-4 md:px-10 w-full ${
        position ? "relative pb-6" : "fixed"
      } flex flex-col justify-center z-[9999]`}
    >
      {/* top bar */}
      <div className="hidden h-[80px] w-full md:flex justify-between items-center z-[9999]">
        <a href="tel:+91-6366937159" className="footer-call-number">
          <Image src={phoneCallGif} alt="" className="footer-call-number-gif" />
          <div className="footer-call-number-text">
            Admission Helpline No. +91-6366937159
          </div>
        </a>
        {!scrolled &&
        <Link href="/" className="z-[3333] animate-fadeIn pt-16 pr-6">
          <Image
            src={
              (isChecked && position) || isChecked
                ? TulasLogoGreen
                : position
                ? TulasLogoRed
                : TulasLogo
            }
            alt=""
            className="w-[200px] h-fit pointer-events-auto cursor-pointer"
          />
        </Link>}

        {scrolled &&
        <Link href="/" className="z-[3333] animate-translateButton pt-16 pr-6">
          <Image
            src={
              (isChecked && position) || isChecked
                ? TulasLogoGreen
                : position
                ? TulasLogoRed
                : TulasLogoGreen
            }
            alt=""
            className="w-[200px] h-fit pointer-events-auto cursor-pointer"
          />
        </Link>}
      </div>
      {/* main navbar */}
      <div className="w-full pt-8 md:pt-0 h-fit">
        <div className="flex w-full flex-row-reverse md:flex-row justify-between">
          {!scrolled && (
            <div className="flex md:w-fit flex-row-reverse animate-fadeIn md:flex-row gap-6 md:gap-12">
              {/* menu button */}
              <button
                className="flex flex-row justify-between items-center cursor-pointer relative z-[9999]"
                onClick={handleButtonClick}
              >
                <div
                  className={`p-[15px] md:p-[20px] border-2 rounded-[50%] aspect-square border-r-transparent ${
                    (isChecked && position) || isChecked
                      ? "border-black"
                      : position
                      ? "border-[#760135]"
                      : "border-white"
                  }`}
                >
                  <label
                    className={
                      isChecked
                        ? "checked flex flex-col w-[30px] cursor-pointer"
                        : "unCheck flex flex-col w-[30px] cursor-pointer"
                    }
                  >
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-1/2
                     ${
                       (isChecked && position) || isChecked
                         ? "bg-black"
                         : position
                         ? "bg-[#760135]"
                         : "bg-white"
                     }`}
                    ></span>
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-full ${
                        (isChecked && position) || isChecked
                          ? "bg-black"
                          : position
                          ? "bg-[#760135]"
                          : "bg-white"
                      }`}
                    ></span>
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-3/4 ${
                        (isChecked && position) || isChecked
                          ? "bg-black"
                          : position
                          ? "bg-[#760135]"
                          : "bg-white"
                      }`}
                    ></span>
                  </label>
                </div>
                <h3
                  style={{ fontFamily: "Zilla Slab" }}
                  className={`hidden md:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                    (isChecked && position) || isChecked
                      ? "text-black"
                      : position
                      ? "text-[#760135]"
                      : "text-white"
                  }`}
                >
                  {!isChecked ? "Menu" : "Close"}
                </h3>
              </button>
              {/* apply now button */}
              <button
                className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
                onClick={() => (window.location.href = "/admissions2024/")}
              >
                <div
                  className={`p-[15px] md:p-[20px] border-2 ${
                    (isChecked && position) || isChecked
                      ? "border-black"
                      : position
                      ? "border-[#760135]"
                      : "border-white"
                  } rounded-[50%] aspect-square border-r-transparent`}
                >
                  <FaPen
                    className={`w-[30px] h-[30px] ${
                      (isChecked && position) || isChecked
                        ? "text-black"
                        : position
                        ? "text-[#760135]"
                        : "text-white"
                    }`}
                  />
                </div>
                <h3
                  style={{ fontFamily: "Zilla Slab" }}
                  className={`hidden md:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                    (isChecked && position) || isChecked
                      ? "text-black"
                      : position
                      ? "text-[#760135]"
                      : "text-white"
                  }`}
                >
                  Apply Now
                </h3>
              </button>
            </div>
          )}

          {/* minimal buttons after scrolling */}
          {scrolled && (
            <div className="flex md:w-fit animate-translateButton flex-row-reverse md:flex-row gap-4 md:gap-6">
              {/* menu button */}
              <button
                className="bg-[#007A83] rounded-full text-3xl shadow-lg w-16 md:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={handleButtonClick}
              >
                {/* {isChecked? <IoCloseOutline /> : <CgMenuLeftAlt />} */}
                <div
                  className={`p-[15px] md:p-[20px] rounded-[50%] aspect-square border-r-transparent`}
                >
                  <label
                    className={
                      isChecked
                        ? "checked flex flex-col w-[30px] cursor-pointer"
                        : "unCheck flex flex-col w-[30px] cursor-pointer"
                    }
                  >
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-1/2 bg-white`}
                    ></span>
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-full bg-white`}
                    ></span>
                    <span
                      className={`my-[3px] rounded-lg h-[3px] w-3/4 bg-white`}
                    ></span>
                  </label>
                </div>
              </button>
              {/* apply now button */}
              <button
                className="bg-[#760135] rounded-full text-3xl shadow-lg w-16 md:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={() => (window.location.href = "/admissions2024/")}
              >
                <PiPencilSimpleLineLight />
              </button>
            </div>
          )}

          {!scrolled &&
          <Link href="/" className="z-[3333] md:hidden animate-fadeIn">
            <Image
              src={
                (isChecked && position) || isChecked
                  ? TulasLogoGreen
                  : position
                  ? TulasLogoRed
                  : TulasLogo
              }
              alt=""
              className="w-[160px] h-fit pointer-events-auto cursor-pointer"
            />
          </Link>}

          {scrolled &&
          <Link href="/" className="z-[3333] md:hidden animate-translateButton">
            <Image
              src={
                (isChecked && position) || isChecked
                  ? TulasLogoGreen
                  : position
                  ? TulasLogoRed
                  : TulasLogoGreen
              }
              alt=""
              className="w-[160px] h-fit pointer-events-auto cursor-pointer"
            />
          </Link>}
        </div>
        <div
          onClick={handleOutsideClick}
          className={`${
            isChecked
              ? "w-full h-screen pointer-events-auto absolute left-0 top-0 bg-opacity-40 bg-black"
              : ""
          } transition-all duration-100 ease-linear`}
        ></div>
        <NavbarMobile isChecked={isChecked} />
        <NavbarDesktop
          setExpandedIndex={setExpandedIndex}
          expandedIndex={expandedIndex}
          isChecked={isChecked}
          setNestedLinksVisible={setNestedLinksVisible}
          nestedLinksVisible={nestedLinksVisible}
          superExpandedIndex={superExpandedIndex}
          setSuperExpandedIndex={setSuperExpandedIndex}
          thirdExpandedIndex={thirdExpandedIndex}
          setThirdExpandedIndex={setThirdExpandedIndex}
        />
      </div>
    </div>
  );
}

export default Navbar;
