"use client";

import sitemap from "@/data/sitemap";
import React, { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import Link from "next/link";
import QuickLinks from "./QuickLinks";

function NavbarDesktop({
  isChecked,
  expandedIndex,
  setExpandedIndex,
  superExpandedIndex,
  setSuperExpandedIndex,
  thirdExpandedIndex,
  setThirdExpandedIndex,
  nestedLinksVisible,
  utmParams,
  setNestedLinksVisible,
  handleOutsideClick,
}) {
  const [activeLink, setActiveLink] = useState(null);

  const pathname = window.location.pathname;

  const checkCurrentPageOpen = (linkto) => {
    const linkId = linkto
      .split("/")
      .filter((item) => item !== "")
      .join("");
    const pathId = pathname
      .split("/")
      .filter((item) => item !== "")
      .join("");

    if (linkId === pathId) {
      return true;
    }
    return false;
  };

  const handleExpandNestedLinks = (index) => {
    if (expandedIndex !== index) {
      setActiveLink(index);
    }
    setNestedLinksVisible(true);
    setSuperExpandedIndex(null);
    setActiveLink(index);
    setExpandedIndex(index);
    setThirdExpandedIndex(null);
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setActiveLink(null);
    }
  };

  const handleExpandSuperNestedLinks = (index) => {
    if (superExpandedIndex !== index) {
      setSuperExpandedIndex(index);
    } else {
      setSuperExpandedIndex(null);
    }
    setThirdExpandedIndex(null);
  };
  const handleExpandThirdNestedLinks = (index) => {
    if (thirdExpandedIndex === index) {
      setThirdExpandedIndex(null);
    } else {
      setThirdExpandedIndex(index);
    }
  };
  return (
    <>
      {/* main menu */}
      {isChecked && (
        <div
          className={`hidden pointer-events-auto mdNavbar:block w-[440px] absolute top-0 z-50 h-screen shadow-2xl bg-white ${
            isChecked
              ? "animate-translateLeftMenu opacity-100 left-0"
              : "animate-translateRightMenu opacity-0 left-[-100%]"
          }`}
        >
          <div className="w-full h-[calc(100vh-280px)] relative top-[140px] overflow-auto">
            {sitemap.map((item, index) => (
              <div
                className="border-t last:border-b border-[#C5C5C5] flex flex-col w-full h-fit"
                key={index}
              >
                <span
                  className={`flex items-center justify-between cursor-pointer hover:bg-[#E3E3E3] ${
                    expandedIndex === index ? "bg-[#E3E3E3]" : "bg-white"
                  } transition-all duration-300 ease-linear h-full min-h-[6vh]`}
                >
                  {checkCurrentPageOpen(item.linkTo) ? (
                    <button
                      onClick={handleOutsideClick}
                      className="flex-auto font-[TTChocolatesMedium] font-normal px-[7%] py-1 flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83]"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <>
                      {item.linkTo !== "#" && (
                        <Link
                          href={
                            item.target
                              ? `${item.linkTo}`
                              : `${item.linkTo}${utmParams}`
                          }
                          target={item.target ? "_blank" : ""}
                          rel={
                            item.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex-auto font-[TTChocolatesMedium] font-normal px-[7%] py-1 flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83]"
                        >
                          {item.title}
                        </Link>
                      )}
                      {item.linkTo === "#" && (
                        <button
                          onClick={() => handleExpandNestedLinks(index)}
                          className="flex-auto font-[TTChocolatesMedium] font-normal px-[7%] py-1 flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83]"
                        >
                          {item.title}
                        </button>
                      )}
                    </>
                  )}
                  {item.nestedLinks && (
                    <div
                      onClick={() => handleExpandNestedLinks(index)}
                      className={`w-fit min-w-[6vh] h-full min-h-[6vh] aspect-square bg-[#E3E3E3] ${
                        expandedIndex === index ? "bg-[#919191]" : ""
                      } flex justify-center items-center`}
                    >
                      {expandedIndex === index ? (
                        <FiX
                          className={`text-[clamp(10px,1.6vw,25px)] ${
                            expandedIndex === index
                              ? "animate-scrollSpinExpand text-white"
                              : ""
                          }`}
                        />
                      ) : (
                        <FiPlus className="text-[#007A83] text-[clamp(10px,1.6vw,25px)]" />
                      )}
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
          <QuickLinks />
        </div>
      )}

      {/* sub menu */}
      {activeLink !== null && (
        <div
          className={`hidden pointer-events-auto mdNavbar:block w-[440px] min-w-[440px] z-40 bg-white absolute top-0 h-screen overflow-y-scroll ${
            nestedLinksVisible
              ? "animate-translateLeftSubMenu left-[440px]"
              : "animate-translateRightMenu -left-full"
          }`}
        >
          <div className="h-fit w-full overflow-auto mt-[80px] py-[40px]">
            <p className="text-[#007A83] text-[clamp(24px,1.6vw,35px)] font-extrabold font-[CarotSlab] px-10 w-fit py-4 h-fit">
              {sitemap[activeLink].title}
            </p>
            {sitemap[activeLink]?.nestedLinks?.map((nestedLinks, index) => (
              <div
                className="border-t last:border-b border-[#C5C5C5] flex flex-col h-fit w-full overflow-auto"
                key={`${activeLink}-${index}`}
              >
                <span className="flex items-center bg-white group hover:bg-[#919191] transition-all duration-300 ease-linear justify-between cursor-pointer h-full min-h-[6vh]">
                  {/* <Link
                    href={
                      nestedLinks.target
                        ? `${nestedLinks.linkTo}`
                        : `${nestedLinks.linkTo}/${utmParams}`
                    }
                    target={nestedLinks.target ? "_blank" : ""}
                    rel={
                      nestedLinks.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex-auto font-[TTChocolatesMedium] px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83] group-hover:text-white transition-all duration-300 ease-linear"
                  >
                    {nestedLinks.title}
                  </Link> */}
                  {checkCurrentPageOpen(nestedLinks.linkTo) ? (
                    <button
                      onClick={handleOutsideClick}
                      className="font-[TTChocolatesMedium] px-[7%] py-1 font-normal h-full text-[clamp(10px,1.3vw,100px)] text-start leading-tight text-[#007A83] group-hover:text-white transition-all duration-300 ease-linear"
                    >
                      {nestedLinks.title}
                    </button>
                  ) : (
                    <>
                      {nestedLinks.linkTo !== "#" && (
                        <Link
                          href={
                            nestedLinks.target
                              ? `${nestedLinks.linkTo}`
                              : `${nestedLinks.linkTo}/${utmParams}`
                          }
                          target={nestedLinks.target ? "_blank" : ""}
                          rel={
                            nestedLinks.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex-auto font-[TTChocolatesMedium] px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83] group-hover:text-white transition-all duration-300 ease-linear"
                        >
                          {nestedLinks.title}
                        </Link>
                      )}
                      {nestedLinks.linkTo === "#" && (
                        <button
                          onClick={() => handleExpandSuperNestedLinks(index)}
                          className="flex-auto w-full justify-start text-start font-[TTChocolatesMedium] px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-[#007A83] group-hover:text-white transition-all duration-300 ease-linear"
                        >
                          {nestedLinks.title}
                        </button>
                      )}
                    </>
                  )}

                  {nestedLinks.superNestedLinks && (
                    <div
                      onClick={() => handleExpandSuperNestedLinks(index)}
                      className={`w-fit min-w-[6vh] h-full min-h-[6vh] aspect-square bg-[#919191] ${
                        superExpandedIndex === index ? "bg-[#2c2c2c]" : ""
                      } flex justify-center items-center`}
                    >
                      {superExpandedIndex === index ? (
                        <FiX
                          className={`text-white text-[clamp(10px,1.6vw,25px)] ${
                            superExpandedIndex === index
                              ? "animate-scrollSpinExpand"
                              : ""
                          }`}
                        />
                      ) : (
                        <FiPlus className="text-white text-[clamp(10px,1.6vw,25px)]" />
                      )}
                    </div>
                  )}
                </span>

                {superExpandedIndex === index &&
                  nestedLinks.superNestedLinks?.map(
                    (superNestedLinks, index) => (
                      <div
                        key={index}
                        className="border-t border-[#C5C5C5] flex flex-col w-full h-fit"
                      >
                        <span className="flex items-center justify-between bg-[#919191] hover:bg-[#2c2c2c] cursor-pointer w-full h-full min-h-[6vh]">
                          {/* <Link
                            key={index}
                            href={
                              superNestedLinks.target
                                ? `${superNestedLinks.linkTo}`
                                : `${superNestedLinks.linkTo}/${utmParams}`
                            }
                            target={superNestedLinks.target ? "_blank" : ""}
                            rel={
                              superNestedLinks.target === "_blank"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex-auto font-[TTChocolates] px-[8.5%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-white"
                          >
                            {superNestedLinks.title}
                          </Link> */}
                          {checkCurrentPageOpen(superNestedLinks.linkTo) ? (
                            <button
                              onClick={handleOutsideClick}
                              className="flex-auto w-full font-[TTChocolatesMedium] text-start px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-white transition-all duration-300 ease-linear"
                            >
                              {superNestedLinks.title}
                            </button>
                          ) : (
                            <>
                              {superNestedLinks.linkTo !== "#" && (
                                <Link
                                  href={
                                    superNestedLinks.target
                                      ? `${superNestedLinks.linkTo}`
                                      : `${superNestedLinks.linkTo}/${utmParams}`
                                  }
                                  target={
                                    superNestedLinks.target ? "_blank" : ""
                                  }
                                  rel={
                                    superNestedLinks.target === "_blank"
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="flex-auto font-[TTChocolatesMedium] text-left px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-white transition-all duration-300 ease-linear"
                                >
                                  {superNestedLinks.title}
                                </Link>
                              )}
                              {superNestedLinks.linkTo === "#" && (
                                <button
                                  onClick={() =>
                                    handleExpandThirdNestedLinks(index)
                                  }
                                  className="flex-auto w-full justify-start text-start font-[TTChocolatesMedium] px-[7%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.3vw,100px)] leading-tight text-white transition-all duration-300 ease-linear"
                                >
                                  {superNestedLinks.title}
                                </button>
                              )}
                            </>
                          )}

                          {superNestedLinks.thirdNestedLinks && (
                            <div
                              onClick={() =>
                                handleExpandThirdNestedLinks(index)
                              }
                              className="w-fit min-w-[6vh] h-full min-h-[6vh] aspect-square bg-[#2c2c2c] flex justify-center items-center"
                            >
                              {thirdExpandedIndex === index ? (
                                <FiX
                                  className={`text-white text-[clamp(10px,1.6vw,25px)] ${
                                    thirdExpandedIndex === index
                                      ? "animate-scrollSpinExpand"
                                      : ""
                                  }`}
                                />
                              ) : (
                                <FiPlus className="text-white text-[clamp(10px,1.6vw,25px)]" />
                              )}
                            </div>
                          )}
                        </span>

                        {thirdExpandedIndex === index &&
                          superNestedLinks.thirdNestedLinks?.map(
                            (thirdNestedLinks, index) => (
                              <div
                                key={index}
                                className="border-t border-[#C5C5C5] bg-[#2c2c2c] group hover:bg-white flex flex-col w-full h-fit"
                              >
                                <span className="flex items-center justify-between cursor-pointer w-full h-full min-h-[6vh]">
                                  {/* <Link
                                    key={index}
                                    href={
                                      thirdNestedLinks.target
                                        ? `${thirdNestedLinks.linkTo}`
                                        : `${thirdNestedLinks.linkTo}/${utmParams}`
                                    }
                                    target={
                                      thirdNestedLinks.target ? "_blank" : ""
                                    }
                                    rel={
                                      thirdNestedLinks.target === "_blank"
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className="flex-auto font-[TTChocolates] px-[10%] py-1 font-normal flex items-center h-full text-[clamp(10px,1vw,100px)] leading-tight text-white group-hover:text-[#2c2c2c]"
                                  >
                                    {thirdNestedLinks.title}
                                  </Link> */}
                                  {checkCurrentPageOpen(
                                    thirdNestedLinks.linkTo
                                  ) ? (
                                    <button
                                      onClick={handleOutsideClick}
                                      className="flex-auto text-start font-[TTChocolates] px-[10%] py-1 font-normal flex items-center h-full text-[clamp(10px,1.1vw,100px)] leading-tight text-white group-hover:text-[#2c2c2c]"
                                    >
                                      {thirdNestedLinks.title}
                                    </button>
                                  ) : (
                                    <Link
                                      key={index}
                                      href={
                                        thirdNestedLinks.target
                                          ? `${thirdNestedLinks.linkTo}`
                                          : `${thirdNestedLinks.linkTo}/${utmParams}`
                                      }
                                      target={
                                        thirdNestedLinks.target ? "_blank" : ""
                                      }
                                      rel={
                                        thirdNestedLinks.target === "_blank"
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                      className="flex-auto font-[TTChocolates] px-[10%] py-1 font-normal flex items-center h-full text-[clamp(10px,1vw,100px)] leading-tight text-white group-hover:text-[#2c2c2c]"
                                    >
                                      {thirdNestedLinks.title}
                                    </Link>
                                  )}
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
    </>
  );
}

export default NavbarDesktop;
