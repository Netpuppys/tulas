"use client";
import React, { useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import sitemap from "../../data/sitemap";
import Image from "next/image";
import { useMobile } from "../IsMobileContext";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <div className="px-4 md:px-16 w-full absolute flex flex-col justify-center z-50">
      {/* top bar */}
      <div className="hidden h-[80px] w-full md:flex justify-between items-center">
        <a href="tel:+91-6366937159" className=" font-[TTChocolates]">
          Admission Helpline No. +91-6366937159
        </a>
        <div className="flex gap-6">
          <button
            onClick={() => {
              window.location.href = "/pay-fee-online/";
            }}
            className="text-[#fff] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] rounded-full"
          >
            Pay Online
          </button>
          <button
            onClick={() => {
              window.location.href = "/admissions2024/";
            }}
            className="text-[#222] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] bg-white rounded-full"
          >
            Apply Now
          </button>
          <button
            onClick={() => {
              window.location.href = "/virtual-tour/index.html";
            }}
            className="text-[#fff] font-[TTChocolates] px-8 py-2 border-2 border-[#fff] rounded-full"
          >
            Virtual Tour
          </button>
        </div>
      </div>
      {/* main navbar */}
      <div className="w-full pt-8 md:pt-0 h-fit">
        <div className="flex w-full flex-row-reverse md:flex-row justify-between">
          <div className="flex md:w-fit flex-row-reverse md:flex-row gap-6 md:gap-12 ">
            <button
              className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
              onClick={handleButtonClick}
            >
              <div className="p-[15px] md:p-[20px] border-2 border-white rounded-[50%] aspect-square border-r-transparent">
                <label
                  className={
                    isChecked
                      ? "checked flex flex-col w-[30px] cursor-pointer"
                      : "unCheck flex flex-col w-[30px] cursor-pointer"
                  }
                >
                  {/* <input type="checkbox" id="check" checked={isChecked} /> */}
                  <span className="bg-white my-[3px] rounded-lg h-[3px] w-1/2"></span>
                  <span className="bg-white my-[3px] rounded-lg h-[3px] w-full"></span>
                  <span className="bg-white my-[3px] rounded-lg h-[3px] w-3/4"></span>
                </label>
              </div>
              <h3
                style={{
                  fontFamily: "Zilla Slab",
                }}
                className="hidden md:block text-white text-left text-[25px] -ml-4 font-semibold transition-color"
              >
                {!isChecked ? "Menu" : "Close"}
              </h3>
            </button>
            <button
              className="flex flex-row justify-between items-center cursor-pointer relative z-[3333]"
              onClick={() => (window.location.href = "/admissions2024/")}
            >
              <div className="p-[15px] md:p-[20px] border-2 border-white rounded-[50%] aspect-square border-r-transparent">
                <FaPen className="w-[30px] h-[30px]" />
              </div>
              <h3
                style={{
                  fontFamily: "Zilla Slab",
                }}
                className="hidden md:block text-white text-left text-[25px] -ml-4 font-semibold transition-color"
              >
                Apply Now
              </h3>
            </button>
          </div>
          <Link href="/">
            <Image src={TulasLogo} alt="" className="w-[160px] h-fit z-10" />
          </Link>
        </div>
        {/* onclick menu */}
        {isChecked && <></>}
      </div>
    </div>
  );
}

export default Navbar;
