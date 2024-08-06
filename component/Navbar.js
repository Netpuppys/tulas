"use client";
import React, { useState } from "react";
import Link from "next/link";
import TulasLogo from "../public/Components/Navbar/TulasLogo.png";
import { LuCornerDownRight } from "react-icons/lu";
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
              <p className="nested-link-title">{nestedItem?.title}</p>
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
    <div className="px-16 pt-8 w-screen absolute flex justify-center">
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
          <div className="flex w-full flex-row z-10">
            <LuCornerDownRight className="-mt-[15px] ml-[55px] text-white font-thin text-[60px]" />
            <div className="navbar-list-main text-[20px] flex flex-row w-full justify-between z-10">
              {sitemap.map((item, index) => (
                <div
                  className="main-list-item"
                  key={index}
                  onMouseEnter={() => handleMenuHover(index)}
                  onMouseLeave={() => handleMenuLeave()}
                >
                  <Link className={"link"} href={item.linkTo || "#"}>
                    <p className="title">{item.title}</p>
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
