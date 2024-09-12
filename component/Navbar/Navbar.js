"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import TulasLogoGreen from "../../public/Components/Navbar/TulasLogoGreen.png";
import { FaPen } from "react-icons/fa";
import Image from "next/image";
import NavbarMobile from "./Component/NavbarMobile";
import { useMobile } from "../IsMobileContext";
import NavbarDesktop from "./Component/NavbarDesktop";
function Navbar({ setState }) {
  const [isChecked, setIsChecked] = useState(false);
  const isMobile = useMobile();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [superExpandedIndex, setSuperExpandedIndex] = useState(null);
  const [thirdExpandedIndex, setThirdExpandedIndex] = useState(null);
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);

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
  return (
    <div className="px-4 md:px-10 w-full fixed flex flex-col justify-center z-[9999]">
      {/* top bar */}
      <div className="hidden h-[80px] w-full md:flex justify-between items-center z-[9999]">
        <a
          href="tel:+91-6366937159"
          className={`font-[TTChocolates] ${
            isChecked ? "text-black" : "text-white"
          }`}
        >
          Admission Helpline No. +91-6366937159
        </a>
        <div className="flex gap-6">
          <button
            onClick={() => (window.location.href = "/pay-fee-online/")}
            className="text-[#fff] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] rounded-full"
          >
            Pay Online
          </button>
          <button
            onClick={() => (window.location.href = "/admissions2024/")}
            className="text-[#222] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] bg-white rounded-full"
          >
            Apply Now
          </button>
          <button
            onClick={() => (window.location.href = "/virtual-tour/index.html")}
            className="text-[#fff] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] rounded-full"
          >
            Virtual Tour
          </button>
        </div>
      </div>
      {/* main navbar */}
      <div className="w-full pt-8 md:pt-0 h-fit">
        <div className="flex w-full flex-row-reverse md:flex-row justify-between">
          <div className="flex md:w-fit flex-row-reverse md:flex-row gap-6 md:gap-12">
            <button
              className="flex flex-row justify-between items-center cursor-pointer relative z-[9999]"
              onClick={handleButtonClick}
            >
              <div
                className={`p-[15px] md:p-[20px] border-2 rounded-[50%] aspect-square border-r-transparent ${
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
                  <span
                    className={`my-[3px] rounded-lg h-[3px] w-1/2 ${
                      isChecked ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                  <span
                    className={`my-[3px] rounded-lg h-[3px] w-full ${
                      isChecked ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                  <span
                    className={`my-[3px] rounded-lg h-[3px] w-3/4 ${
                      isChecked ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                </label>
              </div>
              <h3
                style={{ fontFamily: "Zilla Slab" }}
                className={`hidden md:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                  isChecked ? "text-black" : "text-white"
                }`}
              >
                {!isChecked ? "Menu" : "Close"}
              </h3>
            </button>
            <button
              className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
              onClick={() => (window.location.href = "/admissions2024/")}
            >
              <div
                className={`p-[15px] md:p-[20px] border-2 ${
                  isChecked ? "border-black" : "border-white"
                } rounded-[50%] aspect-square border-r-transparent`}
              >
                <FaPen
                  className={`w-[30px] h-[30px] ${
                    isChecked ? "text-black" : "text-white"
                  }`}
                />
              </div>
              <h3
                style={{ fontFamily: "Zilla Slab" }}
                className={`hidden md:block text-left text-[25px] -ml-4 font-semibold transition-color ${
                  isChecked ? "text-black" : "text-white"
                }`}
              >
                Apply Now
              </h3>
            </button>
          </div>
          <Link href="/" className="z-[3333]">
            <Image
              src={isChecked ? TulasLogoGreen : TulasLogo}
              alt="Tulas Logo"
              className="block md:hidden w-[160px] h-fit pointer-events-auto cursor-pointer"
            />
            <Image
              src={TulasLogo}
              alt="Tulas Logo"
              className="hidden md:block w-[160px] h-fit pointer-events-auto cursor-pointer"
            />
          </Link>
        </div>
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
