"use client";
import React, { useState } from "react";
import Link from "next/link";
import TulasLogo from "../public/Components/Navbar/TulasLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import sitemap from "../data/sitemap";
import Image from "next/image";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

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

  const renderNestedLinks = (nestedLinks) => (
    <div className="absolute w-[12rem] z-10 text-wrap">
      {nestedLinks.map((nestedItem, nestedIndex) => (
        <div className="list-item" key={nestedIndex}>
          <Link className="link" href={nestedItem?.linkTo || "#"}>
            <div className="flex justify-between">
              <p
                className="nested-link-title font-semibold"
                style={{
                  fontFamily: "Zilla Slab",
                }}
              >
                {nestedItem?.title}
              </p>
              {nestedItem?.nestedLinks?.length > 1 && (
                <IoIosArrowForward className="nav-arrows" />
              )}
            </div>
          </Link>

          {nestedItem.superNestedLinks &&
            nestedItem.superNestedLinks.length > 0 && (
              <div className="ml-[12rem] text-wrap">
                {nestedItem.superNestedLinks.length > 1}
                {renderNestedLinks(nestedItem.superNestedLinks)}
              </div>
            )}
          {nestedItem.thirdNestedLinks &&
            nestedItem.thirdNestedLinks.length > 0 && (
              <div className="ml-[12rem] text-wrap">
                {nestedItem.thirdNestedLinks.length > 1}
                {renderNestedLinks(nestedItem.thirdNestedLinks)}
              </div>
            )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-16 pt-8 w-full absolute flex justify-center">
      <div className="w-full h-fit">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-12 items-start">
            <button
              className="flex flex-row justify-between items-center cursor-pointer pointer-events-auto relative z-[3333]"
              onClick={handleButtonClick}
            >
              <div className="p-[20px] border-2 border-white rounded-[50%] aspect-square border-r-transparent">
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
                className="text-white text-left text-[25px] -ml-4 font-semibold transition-color"
              >
                {!isChecked ? "Menu" : "Close"}
              </h3>
            </button>
            <button
              className="flex flex-row justify-between items-center cursor-pointer pointer-events-auto relative z-[3333]"
              onClick={() => (window.location.href = "/admissions2024/")}
            >
              <div className="p-[20px] border-2 border-white rounded-[50%] aspect-square border-r-transparent">
                <FaPen className="text-xl" />
              </div>
              <h3
                style={{
                  fontFamily: "Zilla Slab",
                }}
                className="text-white text-left text-[25px] -ml-4 font-semibold transition-color"
              >
                Apply Now
              </h3>
            </button>
          </div>
          <Image src={TulasLogo} alt="" className="w-[160px] h-fit z-10" />
        </div>
        {isChecked && (
          <div className="flex w-full max-w-[1300px] pr-[160px] flex-row z-10">
            <div className="-mt-[12px] ml-[60px] text-white font-thin text-[60px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="72"
                viewBox="0 0 27 72"
                fill="none"
              >
                <path
                  d="M1.49973 55.5L1.99433 55.5733L1.99973 55.5368V55.5H1.49973ZM26.5 68.5L21.6392 65.3846L21.3715 71.1518L26.5 68.5ZM0.999732 0V55.5H1.99973V0H0.999732ZM1.00513 55.4267C0.66314 57.7352 0.732701 61.1951 2.09861 64.0531C2.78569 65.4907 3.80684 66.7875 5.27765 67.6957C6.74997 68.6049 8.63796 69.1032 11.0215 68.9995L10.978 68.0005C8.76151 68.0968 7.07866 67.6326 5.80306 66.8449C4.52596 66.0563 3.6221 64.9218 3.00086 63.6219C1.7501 61.0049 1.66966 57.7648 1.99433 55.5733L1.00513 55.4267ZM11.0215 68.9995C15.7988 68.7918 19.4293 68.7553 21.9976 68.7913L22.0116 67.7914C19.4215 67.7551 15.7717 67.7921 10.978 68.0005L11.0215 68.9995Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="navbar-list-main mt-[40px] pl-10 text-[20px] flex flex-row w-full justify-between z-10">
              {sitemap.map((item, index) => (
                <div
                  className="main-list-item"
                  key={index}
                  onMouseEnter={() => handleMenuHover(index)}
                  onMouseLeave={() => handleMenuLeave()}
                >
                  <Link className={"link"} href={item.linkTo || "#"}>
                    <p
                      className="title font-semibold"
                      style={{
                        fontFamily: "Zilla Slab",
                      }}
                    >
                      {item.title}
                    </p>
                  </Link>
                  <div className="dropdown-container list-none">
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
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
