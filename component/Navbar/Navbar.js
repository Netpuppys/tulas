"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import TulasLogoGreen from "../../public/Components/Navbar/TulasLogoGreen.png";
import TulasLogoRed from "../../public/Components/Navbar/TulasLogoRed.png";
import NBA from "../../public/Components/Navbar/NBA.png";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import NAAC from "../../public/Components/Navbar/NAAC.png";
import { FaPen, FaPhone } from "react-icons/fa";
import Image from "next/image";
import NavbarMobile from "./Component/NavbarMobile";
import NavbarDesktop from "./Component/NavbarDesktop";
import phoneCallGif from "../../public/Components/Navbar/phone_ringing.gif";
import { IoCall } from "react-icons/io5";
import { UtmContext } from "../utmParams";

function Navbar({
  setState,
  position = false,
  fullBanner = false,
  scroled = false,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [superExpandedIndex, setSuperExpandedIndex] = useState(null);
  const [thirdExpandedIndex, setThirdExpandedIndex] = useState(null);
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [scrolled, setScrolled] = useState(scroled);
  const { utmParams } = useContext(UtmContext);

  // useEffect to check if the page is scrolled
  useEffect(() => {
    if (!scroled) {
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
    }
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
    }
    if (nestedLinksVisible) {
      setExpandedIndex(null);
      setSuperExpandedIndex(null);
      setThirdExpandedIndex(null);
      setNestedLinksVisible(false);
      setIsChecked(false);
    }
  };
  return (
    <div className={`fixed w-full pointer-events-none z-[9999]`}>
      <div className="w-full pointer-events-auto md:bg-[rgba(19,19,19,0.50)] md:backdrop-blur-xl hidden mdNavbar:flex">
        <div className="w-[95%] mx-auto flex items-center justify-center gap-4 top-0 border-b-[0.5px] border-[#9A9A9A] h-fit py-2">
          <a
            className="flex gap-2 items-center justify-center"
            href="tel:+91-9837983721"
          >
            <Image src={phoneCallGif} alt="" className="w-5 h-full" />
            Admissions Helpline Number - +91-9837983721
          </a>
          <button
            className={`px-8  ${
              !scrolled ? "bg-white text-[#3D001B]" : "bg-[#007A83] text-white"
            } rounded-full`}
          >
            Enquire Now
          </button>
        </div>
      </div>
      <div
        className={`mdNavbar:px-10 w-full relative ${
          !scrolled ? "md:bg-[rgba(19,19,19,0.50)] md:backdrop-blur-xl" : ""
        } h-full py-2 flex flex-col justify-center`}
      >
        {/* top bar */}
        <div className="hidden h-fit w-full mdNavbar:flex justify-between items-center">
          {!scrolled && (
            <div className="flex pointer-events-auto mdNavbar:w-fit flex-row-reverse animate-fadeIn mdNavbar:flex-row gap-2 mdNavbar:gap-12">
              {/* menu button */}
              <button
                className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
                onClick={handleButtonClick}
              >
                <div
                  className={`p-[15px] border-2 rounded-[50%] aspect-square border-r-transparent ${
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
                  className={`hidden mdNavbar:block text-left text-[25px] -ml-4 font-semibold transition-color ${
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
              {/* Contact button */}
              {/* {!isChecked && (
                <button
                  title="Admission Helpline No. +91-9837983721"
                  className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
                  onClick={() => (window.location.href = "tel:+91-9837983721")}
                >
                  <div
                    className={`p-[15px] mdNavbar:p-[15px] border-2 ${
                      (isChecked && position) || isChecked
                        ? "border-black"
                        : position
                        ? "border-[#760135]"
                        : "border-white"
                    } rounded-[50%] aspect-square border-r-transparent`}
                  >
                    <div className="w-[40px] h-[40px]">
                      <Image
                        src={phoneCallGif}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <h3
                    style={{ fontFamily: "Zilla Slab" }}
                    className={`hidden mdNavbar:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                      (isChecked && position) || isChecked
                        ? "text-black"
                        : position
                        ? "text-[#760135]"
                        : "text-white"
                    }`}
                  >
                    Contact
                  </h3>
                </button>
              )} */}
              {/* apply now button */}
              <button
                className="flex w-full flex-row justify-between items-center cursor-pointer relative z-[3333]"
                onClick={() =>
                  (window.location.href = `/apply-now${utmParams}`)
                }
              >
                <div
                  className={`p-[15px] border-2 ${
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
                  className={`hidden mdNavbar:block text-nowrap text-left text-[25px] -ml-4 font-semibold transition-color ${
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
            <div className="flex pointer-events-auto mdNavbar:w-fit animate-translateButton flex-row-reverse mdNavbar:flex-row gap-2 mdNavbar:gap-6">
              {/* menu button */}
              <button
                className="bg-[#007A83] rounded-full text-3xl shadow-lg w-16 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={handleButtonClick}
              >
                {/* {isChecked? <IoCloseOutline /> : <CgMenuLeftAlt />} */}
                <div
                  className={`p-[15px] rounded-[50%] aspect-square border-r-transparent`}
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
              {/* Contact button */}
              {/* <button
                title="Admission Helpline No. +91-9837983721"
                className="bg-[#E69706] rounded-full text-3xl shadow-lg w-16 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={() => (window.location.href = "tel:+91-9837983721")}
              >
                <div className="w-[40px] h-[40px]">
                  <Image src={phoneCallGif} alt="" className="w-full h-full" />
                </div>
              </button> */}
              {/* apply now button */}
              <button
                className="bg-[#760135] rounded-full text-3xl shadow-lg w-16 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={() =>
                  (window.location.href = `/apply-now${utmParams}`)
                }
              >
                <PiPencilSimpleLineLight />
              </button>
            </div>
          )}

          {!scrolled && (
            <div className="flex pointer-events-auto relative right-10 z-[3333] animate-fadeIn items-center justify-center gap-6">
              <Image
                src={NBA}
                alt=""
                className="w-[5vw] h-fit pointer-events-auto cursor-pointer"
              />
              <div className="h-[60px] w-[1px] bg-white"></div>
              <Image
                src={NAAC}
                alt=""
                className="w-[10vw] h-fit pointer-events-auto cursor-pointer"
              />
              <div className="h-[60px] w-[1px] bg-white"></div>
              <Image
                src={
                  (isChecked && position) || isChecked
                    ? TulasLogo
                    : position
                    ? TulasLogoRed
                    : TulasLogo
                }
                alt=""
                onClick={() => (window.location.href = `/${utmParams}`)}
                className="w-[12vw] h-full pointer-events-auto cursor-pointer"
              />
            </div>
          )}

          {scrolled && (
            <Link
              href={`/${utmParams}`}
              className="z-[3333] pointer-events-auto relative right-10 animate-translateButton"
            >
              <Image
                src={
                  (isChecked && position) || isChecked
                    ? TulasLogoGreen
                    : position
                    ? TulasLogoRed
                    : TulasLogoGreen
                }
                alt=""
                className="w-[12vw] h-fit pointer-events-auto cursor-pointer"
              />
            </Link>
          )}
        </div>

        {/* main navbar */}
        <div className="w-full h-fit px-3">
          <div className="flex w-full flex-row-reverse items-center mdNavbar:flex-row justify-between">
            {/* <div className="hidden mdNavbar:block">
            <a href="tel:+91-9837983721" className="">
              <Image src={phoneCallGif} alt="" className="footer-call-number-gif" />
              <div className="footer-call-number-text">
                Admission Helpline No. +91-9837983721
              </div>
            </a>
          </div> */}
            <div className="flex mdNavbar:hidden mdNavbar:w-fit animate-translateButton flex-row-reverse mdNavbar:flex-row gap-2 mdNavbar:gap-6">
              {/* menu button */}
              <button
                className="bg-[#007A83] rounded-full text-3xl shadow-lg w-16 mdNavbar:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={handleButtonClick}
              >
                {/* {isChecked? <IoCloseOutline /> : <CgMenuLeftAlt />} */}
                <div
                  className={`p-[15px] rounded-[50%] aspect-square border-r-transparent`}
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
              {/* Contact button */}
              {/* <button
                className="bg-[#E69706] rounded-full text-3xl shadow-lg w-16 mdNavbar:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={() => (window.location.href = "tel:+91-9837983721")}
              >
                <div className="w-[35px] h-[35px]">
                  <Image src={phoneCallGif} alt="" className="w-full h-full" />
                </div>
              </button> */}
              {/* apply now button */}
              <button
                className="bg-[#760135] rounded-full text-3xl shadow-lg w-16 mdNavbar:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative z-[3333]"
                onClick={() =>
                  (window.location.href = `/apply-now${utmParams}`)
                }
              >
                <PiPencilSimpleLineLight />
              </button>
            </div>
            <Link
              href={`/${utmParams}`}
              className="z-[3333] mdNavbar:hidden animate-translateButton"
            >
              <Image
                src={
                  (isChecked && position) || isChecked
                    ? TulasLogoGreen
                    : position
                    ? TulasLogoRed
                    : TulasLogoGreen
                }
                alt=""
                className="w-[50vw] mdNavbar:w-[160px] h-fit pointer-events-auto cursor-pointer"
              />
            </Link>
          </div>

          {isChecked && (
            <>
              <div
                onClick={handleOutsideClick}
                className="w-screen h-screen flex pointer-events-auto absolute left-0 top-0 bg-opacity-40 bg-black transition-all duration-100 ease-linear"
              ></div>
              <NavbarMobile isChecked={isChecked} utmParams={utmParams} />
              <NavbarDesktop
                setExpandedIndex={setExpandedIndex}
                expandedIndex={expandedIndex}
                isChecked={isChecked}
                utmParams={utmParams}
                setNestedLinksVisible={setNestedLinksVisible}
                nestedLinksVisible={nestedLinksVisible}
                superExpandedIndex={superExpandedIndex}
                setSuperExpandedIndex={setSuperExpandedIndex}
                thirdExpandedIndex={thirdExpandedIndex}
                setThirdExpandedIndex={setThirdExpandedIndex}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
