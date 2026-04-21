"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { SiGoogleforms } from "react-icons/si";
import logo360 from "../../public/Components/Navbar/logo360.png";
import NAAC from "../../public/Components/Navbar/Naac2.png";
import NBA from "../../public/Components/Navbar/NBA.png";
import phoneCallGif from "../../public/Components/Navbar/phone_ringing.gif";
import TulasLogo from "../../public/Components/Footer/tulaslogo.png";
import whatsapp from "../../public/Components/Navbar/whatsapp.png";
import touricon from "../../public/Components/Navbar/rotation.png";
import whatsappnew from "../../public/Components/Navbar/whatsapp2.png";
import Years20 from "../../public/graduate-school-of-business/mba/20Years.png";
import FormPopup from "../formPopup";
import { UtmContext } from "../utmParams";
import NavbarDesktop from "./Component/NavbarDesktop";
import NavbarMobile from "./Component/NavbarMobile";
import NewNavbarMobile from "./Component/NewNavbarMobile";

function NewNavbar({ fullBanner = false, scroled = false, handleScrollArrow }) {
  const [isChecked, setIsChecked] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [formPopup, setFormPopup] = useState(false);
  const [superExpandedIndex, setSuperExpandedIndex] = useState(null);
  const [thirdExpandedIndex, setThirdExpandedIndex] = useState(null);
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [scrolled, setScrolled] = useState(scroled);
  const { utmParams } = useContext(UtmContext);
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [showStickyBar, setShowStickyBar] = useState(true);

  useEffect(() => {
    if (!scroled) {
      const handleScroll = () => {
        const threshold = fullBanner ? 1 : 0.5;
        const sixtyVH = window.innerHeight * threshold;
        if (window.scrollY > sixtyVH) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
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
    if (isChecked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isChecked]);

  const handleFormPopup = () => {
    setFormPopup(true);
  };

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
    <div className="fixed w-full h-full z-[9999] pointer-events-none">

      {/* ── Header bar — always on top of the sliding menu ── */}
      <div className={`z-[10000] relative`}>
        <div
          className={`mdNavbar:px-10 w-full relative h-full py-2 flex flex-col justify-center
            ${
              isChecked
                /* Mobile: solid orange to blend with the open menu; desktop: transparent */
                ? "bg-orange-500 mdNavbar:bg-transparent"
                : "bg-[rgba(19,19,19,0.80)] backdrop-blur-xl"
            }
          `}
        >
          {/* ── Desktop nav row ── */}
          <div className="hidden h-fit w-full mdNavbar:flex justify-between items-center">
            <div className="flex pointer-events-auto mdNavbar:w-fit flex-row-reverse animate-fadeIn mdNavbar:flex-row gap-2 mdNavbar:gap-12">
              {/* menu button */}
              <button
                className="flex flex-row justify-between items-center cursor-pointer relative"
                onClick={handleButtonClick}
              >
                <div
                  className={`p-[15px] border-2 rounded-[50%] aspect-square border-r-transparent ${
                    isChecked ? "border-black" : "border-white"
                  }`}
                >
                  <label
                    className={
                      isChecked
                        ? "checked flex flex-col w-[30px] cursor-pointer"
                        : "unCheck flex flex-col w-[30px] cursor-pointer"
                    }
                  >
                    <span className={`my-[3px] rounded-lg h-[3px] w-1/2 ${isChecked ? "bg-black" : "bg-white"}`}></span>
                    <span className={`my-[3px] rounded-lg h-[3px] w-full ${isChecked ? "bg-black" : "bg-white"}`}></span>
                    <span className={`my-[3px] rounded-lg h-[3px] w-3/4 ${isChecked ? "bg-black" : "bg-white"}`}></span>
                  </label>
                </div>
                <h3
                  style={{ fontFamily: "Zilla Slab" }}
                  className={`hidden mdNavbar:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                    isChecked ? "text-[#353535]" : "text-white"
                  }`}
                >
                  {!isChecked ? "Menu" : "Close"}
                </h3>
              </button>
              {/* apply now button */}
              <button
                className="flex w-full flex-row justify-between items-center cursor-pointer relative"
                onClick={() => (window.location.href = `/apply-now?`)}
              >
                <div
                  className={`p-[15px] border-2 ${
                    isChecked ? "border-black" : "border-white"
                  } rounded-[50%] aspect-square border-r-transparent`}
                >
                  <FaPen className={`w-[30px] h-[30px] ${isChecked ? "text-[#353535]" : "text-white"}`} />
                </div>
                <h3
                  style={{ fontFamily: "Zilla Slab" }}
                  className={`hidden mdNavbar:block text-nowrap text-left text-[25px] -ml-4 font-semibold transition-color ${
                    isChecked ? "text-[#353535]" : "text-white"
                  }`}
                >
                  Apply Now
                </h3>
              </button>
            </div>

            <div className="flex pointer-events-auto relative right-10 animate-fadeIn items-center justify-center gap-6">
              <Image src={NBA} alt="" className="w-[5vw] h-fit pointer-events-auto cursor-pointer" />
              <div className="h-[60px] w-[1px] bg-white"></div>
              <Image src={NAAC} alt="" className="w-[10vw] h-fit pointer-events-auto cursor-pointer" />
              <div className="h-[60px] w-[1px] bg-white"></div>
              <Image src={Years20} alt="" className="w-[8vw] h-fit pointer-events-auto cursor-pointer" />
              <div className="h-[60px] w-[1px] bg-white"></div>
              <Image
                src={TulasLogo}
                alt=""
                onClick={() => (window.location.href = `/${utmParams}`)}
                className="w-[12vw] h-full pointer-events-auto cursor-pointer"
              />
            </div>
          </div>

          {/* ── Mobile nav row — always visible ── */}
          <div className="w-full flex flex-col gap-2 pointer-events-auto h-fit px-3">
            <div className="flex w-full flex-row-reverse items-center mdNavbar:flex-row justify-between">
              {/* Hamburger / Close button */}
              <button
                className="bg-[rgba(19,19,19,0.16)] text-3xl rounded-lg shadow-lg w-14 mdNavbar:w-20 aspect-square flex flex-row justify-center items-center cursor-pointer relative border-2 border-gray-400"
                onClick={handleButtonClick}
              >
                <div className={`p-[11px] rounded-[50%] aspect-square`}>
                  <label
                    className={
                      isChecked
                        ? "checked flex flex-col w-[30px] cursor-pointer"
                        : "unCheck flex flex-col w-[30px] cursor-pointer"
                    }
                  >
                    <span className={`my-[3px] rounded-lg h-[3px] w-1/2 bg-black`}></span>
                    <span className={`my-[3px] rounded-lg h-[3px] w-full bg-black`}></span>
                    <span className={`my-[3px] rounded-lg h-[3px] w-3/4 bg-black`}></span>
                  </label>
                </div>
              </button>

              {/* Logo — always visible on mobile, regardless of menu state */}
              <Link href={`/${utmParams}`} className="mdNavbar:hidden animate-translateButton">
                <Image
                  src={TulasLogo}
                  alt=""
                  className="w-[50vw] mdNavbar:w-[160px] h-fit pointer-events-auto cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sliding menu (top → down) + desktop overlay ── */}
      {isChecked && (
        <>
          <div
            onClick={handleOutsideClick}
            className="w-screen h-screen flex pointer-events-auto absolute left-0 top-0 bg-opacity-40 bg-black transition-all duration-100 ease-linear"
          ></div>
          <NewNavbarMobile isChecked={isChecked} utmParams={utmParams} />
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
            handleOutsideClick={handleOutsideClick}
          />
        </>
      )}

      {formPopup && (
        <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />
      )}

      {/* ── Mobile sticky bottom bar ── */}
      {!isChecked && (
        <>
          {showStickyBar && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-50 mdNavbar:hidden pointer-events-auto">
              <div className="flex items-center justify-between px-4 py-3 rounded-full border-2 border-gray-300 bg-white shadow-lg">
                <a
                  href="tel:+91-9837983721"
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  <IoCall className="text-lg" />
                  CALL NOW
                </a>
                <button
                  onClick={() =>
                    (window.location.href = `/virtual-tour/index.html/${utmParams}`)
                  }
                >
                  <Image src={touricon} alt="360" className="w-8 h-8" />
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://api.whatsapp.com/send/?phone=%2B919258159248&text&type=phone_number&app_absent=0")
                  }
                >
                  <Image src={whatsappnew} alt="whatsapp" className="w-8 h-8" />
                </button>
                <button
                  onClick={() => setShowStickyBar(false)}
                  className="text-2xl text-black"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {!showStickyBar && (
            <button
              onClick={() => setShowStickyBar(true)}
              className="fixed bottom-6 right-4 z-[10000] mdNavbar:hidden bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto"
            >
              <FiInfo className="text-2xl" />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default NewNavbar;
