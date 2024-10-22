"use client";
import sitemap from "@/data/sitemap";
import React, { useState } from "react";
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
  setNestedLinksVisible,
}) {
  const [activeLink, setActiveLink] = useState(null);

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
      <div
        className={`hidden md:block w-[440px] absolute top-0 h-screen shadow-2xl z-50 bg-white ${
          isChecked
            ? "animate-translateLeftMenu left-0"
            : "animate-translateRightMenu left-[-100%]"
        }`}
      >
        <div className="w-full h-[calc(100vh-350px)] relative top-[200px] overflow-auto">
          {sitemap.map((item, index) => (
            <div
              className="border-t border-[#C5C5C5] flex flex-col w-full h-fit"
              key={index}
            >
              <span
                className={`flex items-center justify-between cursor-pointer hover:bg-[#E3E3E3] ${
                  expandedIndex === index ? "bg-[#E3E3E3]" : "bg-white"
                } transition-all duration-300 ease-linear h-full min-h-[60px]`}
              >
                <Link
                  href={item.linkTo || "#"}
                  className="flex-auto font-[TTChocolatesBold] font-bold px-10 py-1 flex items-center h-full text-[22px] text-[#007A83]"
                >
                  {item.title}
                </Link>
                {item.nestedLinks && (
                  <div
                    onClick={() => handleExpandNestedLinks(index)}
                    className={`w-fit !h-full min-h-[60px] px-5 bg-[#E3E3E3] ${
                      expandedIndex === index ? "bg-[#919191]" : ""
                    } flex justify-center items-center`}
                  >
                    {expandedIndex === index ? (
                      <FiX
                        className={`text-[22px] ${
                          expandedIndex === index
                            ? "animate-scrollSpinExpand text-white"
                            : ""
                        }`}
                      />
                    ) : (
                      <FiPlus className="text-[#007A83] text-[22px]" />
                    )}
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>
        <QuickLinks />
      </div>

      {activeLink !== null && (
        <div
          className={`hidden md:block w-[440px] min-w-[440px] bg-white absolute top-0 h-screen overflow-y-scroll ${
            nestedLinksVisible
              ? "animate-translateLeftMenu left-[440px]"
              : "animate-translateRightMenu left-[-100%]"
          }`}
        >
          <div className="h-fit w-full overflow-auto mt-[120px] py-[40px]">
            <p className="text-[#007A83] text-[32px] font-extrabold font-[CarotSlab] px-10 w-fit py-4 h-fit">
              {sitemap[activeLink].title}
            </p>
            {sitemap[activeLink]?.nestedLinks?.map((nestedLinks, index) => (
              <div
                className="border-t border-[#C5C5C5] flex flex-col h-fit w-full overflow-auto"
                key={`${activeLink}-${index}`}
              >
                <span className="flex items-center bg-white group hover:bg-[#919191] transition-all duration-300 ease-linear justify-between cursor-pointer h-full min-h-[60px]">
                  <Link
                    href={nestedLinks.linkTo || "#"}
                    className="flex-auto font-[TTChocolatesBold] px-10 py-1 font-medium flex items-center h-full text-[22px] text-[#007A83] group-hover:text-white transition-all duration-300 ease-linear"
                  >
                    {nestedLinks.title}
                  </Link>
                  {nestedLinks.superNestedLinks && (
                    <div
                      onClick={() => handleExpandSuperNestedLinks(index)}
                      className={`w-fit h-full min-h-[60px] px-5 bg-[#919191] ${
                        superExpandedIndex === index ? "bg-[#2c2c2c]" : ""
                      } flex justify-center items-center`}
                    >
                      {superExpandedIndex === index ? (
                        <FiX
                          className={`text-white text-[22px] ${
                            superExpandedIndex === index
                              ? "animate-scrollSpinExpand"
                              : ""
                          }`}
                        />
                      ) : (
                        <FiPlus className="text-white text-[22px]" />
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
                        <span className="flex items-center justify-between bg-[#919191] hover:bg-[#2c2c2c] cursor-pointer w-full h-full min-h-[60px]">
                          <Link
                            key={index}
                            href={superNestedLinks.linkTo || "#"}
                            className="flex-auto font-[TTChocolatesBold] px-12 py-1 font-medium flex items-center h-full text-[20px] text-white"
                          >
                            {superNestedLinks.title}
                          </Link>
                          {superNestedLinks.thirdNestedLinks && (
                            <div
                              onClick={() =>
                                handleExpandThirdNestedLinks(index)
                              }
                              className="w-fit h-full min-h-[60px] px-5 bg-[#2c2c2c] flex justify-center items-center"
                            >
                              {thirdExpandedIndex === index ? (
                                <FiX
                                  className={`text-white text-[22px] ${
                                    thirdExpandedIndex === index
                                      ? "animate-scrollSpinExpand"
                                      : ""
                                  }`}
                                />
                              ) : (
                                <FiPlus className="text-white text-[22px]" />
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
                                <span className="flex items-center justify-between cursor-pointer w-full h-full min-h-[60px]">
                                  <Link
                                    key={index}
                                    href={thirdNestedLinks.linkTo || "#"}
                                    className="flex-auto font-[TTChocolates] px-14 py-1 font-normal flex items-center h-full text-[18px] text-white group-hover:text-[#2c2c2c]"
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
    </>
  );
}

export default NavbarDesktop;
