"use client";
import React, { useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import sitemap from "../../../data/sitemap";
import Image from "next/image";
import { useMobile } from "../../IsMobileContext";
import Header from "../../NavbarMobile";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [activeMenu, setActiveMenu] = useState();
  const [subIndex, setSubIndex] = useState();
  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const renderNestedLinks = (nestedLinks, nowrap, alignLeft) => (
    <div className="w-full z-10 text-wrap flex flex-col items-center gap-2">
      {nestedLinks.map((nestedItem, nestedIndex) => (
        <div className="w-full text-center" key={nestedIndex}>
          <Link
            className={`relative w-full
            ${alignLeft ? "text-left" : "text-center"} 
            ${nowrap ? "text-nowrap" : "text-wrap"}`}
            href={nestedItem?.linkTo || "#"}
            onMouseEnter={() => setSubIndex(nestedIndex)}
            onMouseLeave={() => setSubIndex(null)}
          >
            <div
              className={`relative w-full flex items-center justify-center text-white h-8 hover:bg-white group hover:text-black hover:text-opacity-80
            ${nestedItem?.superNestedLinks?.length > 0 ? "pr-6" : "pr-0"}
            `}
            >
              <p
                className="nested-link-title font-semibold px-5"
                style={{
                  fontFamily: "Zilla Slab",
                }}
              >
                {nestedItem?.title}
              </p>
              {nestedItem?.superNestedLinks?.length > 0 && (
                <p className="absolute top-1/2 right-1 -translate-y-1/2 ">
                  <IoIosArrowForward />
                </p>
              )}
            </div>

            {nestedItem.superNestedLinks &&
              nestedIndex === subIndex &&
              nestedItem.superNestedLinks.length > 0 && (
                <div className="absolute text-nowrap w-[15rem] px-5 py-2 rounded-xl rounded-tl-none left-[calc(100%)] bg-black bg-opacity-30 top-0">
                  {nestedItem.superNestedLinks.length > 1}
                  {renderNestedLinks(nestedItem.superNestedLinks)}
                </div>
              )}
          </Link>

          {/* {nestedItem.thirdNestedLinks &&
            nestedItem.thirdNestedLinks.length > 0 && (
              <div className="ml-[12rem] text-wrap">
                {nestedItem.thirdNestedLinks.length > 1}
                {renderNestedLinks(nestedItem.thirdNestedLinks)}
              </div>
            )} */}
        </div>
      ))}
    </div>
  );

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
        {isChecked && (
          <div className="hidden md:flex w-full max-w-[1500px] pr-[160px] flex-row z-10">
            <div className="-mt-[12px] ml-[60px] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="75"
                viewBox="0 0 27 75"
                fill="none"
              >
                <path
                  d="M1.49973 55.5L2.48894 55.6465L2.49973 55.5737V55.5H1.49973ZM26.5 68.5L16.6299 62.5071L16.375 74.0513L26.5 68.5ZM0.499732 0V55.5H2.49973V0H0.499732ZM0.510529 55.3535C0.15988 57.7203 0.224004 61.2903 1.64748 64.2687C2.36749 65.7752 3.44728 67.1531 5.01495 68.1212C6.58562 69.0911 8.57618 69.6063 11.0432 69.4991L10.9563 67.5009C8.82329 67.5937 7.24301 67.1464 6.06577 66.4195C4.88552 65.6906 4.04031 64.6373 3.45198 63.4063C2.25879 60.9097 2.17292 57.7797 2.48894 55.6465L0.510529 55.3535ZM11.0432 69.4991C13.503 69.3921 15.6575 69.3307 17.5183 69.3012L17.4866 67.3014C15.6063 67.3312 13.4334 67.3932 10.9563 67.5009L11.0432 69.4991Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="navbar-list-main mt-[32px] pl-10 text-[20px] flex flex-row w-full gap-8 z-10">
              {sitemap.map((item, index) => (
                <div
                  className="group flex items-center justify-start py-2 hover:bg-black hover:bg-opacity-40 rounded-2xl h-fit flex-col text-center relative"
                  key={index}
                  onMouseEnter={() => handleMenuHover(index)}
                  onMouseLeave={() => handleMenuLeave()}
                >
                  <Link className="mb-2" href={item.linkTo || "#"}>
                    <p
                      className="title font-semibold text-nowrap"
                      style={{
                        fontFamily: "Zilla Slab",
                      }}
                    >
                      {item.title}
                    </p>
                  </Link>
                  <div className="w-full h-fit list-none text-sm">
                    {activeMenu === index &&
                      item.nestedLinks &&
                      item.nestedLinks.length > 0 &&
                      renderNestedLinks(item.nestedLinks)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* {isChecked && <Header />} */}
      </div>
    </div>
  );
}

export default Navbar;
