"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TulasLogo from "../../public/Components/Navbar/TulasLogo.png";
import { FaPen } from "react-icons/fa";
import Image from "next/image";
import sitemap from "@/data/sitemap";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

function Navbar({ setState }) {
  const [isChecked, setIsChecked] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [superExpandedIndex, setSuperExpandedIndex] = useState(null);
  const [thirdExpandedIndex, setThirdExpandedIndex] = useState(null);
  const [nestedLinksVisible, setNestedLinksVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleExpandNestedLinks = (index) => {
    if (expandedIndex === index) {
      setNestedLinksVisible(false);
      setSuperExpandedIndex(null);
      setExpandedIndex(null);
      setThirdExpandedIndex(null);
    } else {
      setNestedLinksVisible(true);
      setActiveLink(index);
      setExpandedIndex(index);
    }
  };
  const handleExpandSuperNestedLinks = (index) => {
    if (superExpandedIndex === index) {
      setSuperExpandedIndex(null);
      setThirdExpandedIndex(null);
    } else {
      setSuperExpandedIndex(index);
    }
  };
  const handleExpandThirdNestedLinks = (index) => {
    if (thirdExpandedIndex === index) {
      setThirdExpandedIndex(null);
    } else {
      setThirdExpandedIndex(index);
    }
  };

  const handleButtonClick = () => {
    if (isChecked) {
      setExpandedIndex(null);
      setNestedLinksVisible(false);
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  useEffect(() => {
    if (setState) setState(isChecked);
    if (isChecked) {
      //document.body.style.overflow = "hidden";
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
          <Link href="/">
            <Image
              src={TulasLogo}
              alt="Tulas Logo"
              className="w-[160px] h-fit z-10"
            />
          </Link>
        </div>
        {/* onclick menu */}
        <div
          className={`w-[25vw] min-w-[400px] absolute top-0 h-screen shadow-2xl z-50 bg-white ${
            isChecked
              ? "animate-translateLeftMenu left-0"
              : "animate-translateRightMenu left-[-100%]"
          }`}
        >
          <div className="w-full h-[calc(100vh-300px)] relative top-[200px] overflow-auto">
            {sitemap.map((item, index) => (
              <div
                className="border-t border-[#C5C5C5] flex flex-col w-full h-fit"
                key={index}
              >
                <span className="flex items-center justify-between cursor-pointer h-full min-h-[60px]">
                  <Link
                    href={item.linkTo || "#"}
                    className="flex-auto font-[TTChocolates] px-10 py-1 font-normal flex items-center h-full text-[22px] text-[#007A83]"
                  >
                    {item.title}
                  </Link>
                  {item.nestedLinks && (
                    <div
                      onClick={() => handleExpandNestedLinks(index)}
                      className="w-fit !h-full min-h-[60px] px-5 bg-[#E3E3E3] flex justify-center items-center"
                    >
                      {expandedIndex === index ? (
                        <FiX className="text-[#007A83] text-[22px]" />
                      ) : (
                        <FiPlus className="text-[#007A83] text-[22px]" />
                      )}
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {activeLink !== null && (
          <div
            className={`w-[25vw] min-w-[400px] bg-white absolute top-0 h-screen overflow-y-scroll ${
              nestedLinksVisible
                ? "animate-translateLeftMenu left-[25vw]"
                : "animate-translateRightMenu left-[-100%]"
            }`}
          >
            <div className="h-fit w-fit overflow-auto mt-[120px] py-[40px]">
              <p className="text-[#007A83] text-[32px] font-[CarotSlab] px-10 w-fit py-4 h-fit">
                {sitemap[activeLink].title}
              </p>
              {sitemap[activeLink]?.nestedLinks?.map((nestedLinks, index) => (
                <div
                  className="border-t border-[#C5C5C5] flex flex-col h-fit w-full overflow-auto"
                  key={`${activeLink}-${index}`}
                >
                  <span className="flex items-center justify-between cursor-pointer h-full min-h-[60px]">
                    <Link
                      href={nestedLinks.linkTo || "#"}
                      className="flex-auto font-[TTChocolates] px-10 py-1 font-normal flex items-center h-full text-[22px] text-[#007A83]"
                    >
                      {nestedLinks.title}
                    </Link>
                    {nestedLinks.superNestedLinks && (
                      <div
                        onClick={() => handleExpandSuperNestedLinks(index)}
                        className="w-fit h-full min-h-[60px] px-5 bg-[#E3E3E3] flex justify-center items-center"
                      >
                        {superExpandedIndex === index ? (
                          <FiX className="text-[#007A83] text-[22px]" />
                        ) : (
                          <FiPlus className="text-[#007A83] text-[22px]" />
                        )}
                      </div>
                    )}
                  </span>
                  {superExpandedIndex === index &&
                    nestedLinks.superNestedLinks.map(
                      (superNestedLinks, index) => (
                        <div
                          key={index}
                          className="border-t border-[#C5C5C5] bg-[#E3E3E3] flex flex-col w-full h-fit"
                        >
                          <span className="flex items-center justify-between cursor-pointer w-full h-full min-h-[60px]">
                            <Link
                              key={index}
                              href={superNestedLinks.linkTo || "#"}
                              className="flex-auto font-[TTChocolates] px-12 py-1 font-normal flex items-center h-full text-[20px] text-[#007A83]"
                            >
                              {superNestedLinks.title}
                            </Link>
                            {superNestedLinks.thirdNestedLinks && (
                              <div
                                onClick={() =>
                                  handleExpandThirdNestedLinks(index)
                                }
                                className="w-fit h-full min-h-[60px] px-5 bg-[#E3E3E3] flex justify-center items-center"
                              >
                                {thirdExpandedIndex === index ? (
                                  <FiX className="text-[#007A83] text-[22px]" />
                                ) : (
                                  <FiPlus className="text-[#007A83] text-[22px]" />
                                )}
                              </div>
                            )}
                          </span>
                          {thirdExpandedIndex === index &&
                            superNestedLinks.thirdNestedLinks.map(
                              (thirdNestedLinks, index) => (
                                <div
                                  key={index}
                                  className="border-t border-[#C5C5C5] bg-white flex flex-col w-full h-fit"
                                >
                                  <span className="flex items-center justify-between cursor-pointer w-full h-full min-h-[60px]">
                                    <Link
                                      key={index}
                                      href={thirdNestedLinks.linkTo || "#"}
                                      className="flex-auto font-[TTChocolates] px-14 py-1 font-normal flex items-center h-full text-[20px] text-[#007A83]"
                                    >
                                      {thirdNestedLinks.title}
                                    </Link>
                                  </span>
                                </div>
                              )
                            )}
                        </div>
                      )
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
