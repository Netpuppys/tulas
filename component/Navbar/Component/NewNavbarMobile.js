"use client";
import sitemap from "@/data/sitemap";
import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import "../Component/NavbarMobile.css";
import Link from "next/link";
import QuickLinks from "./QuickLinks";

function NewNavbarMobile({ isChecked, utmParams }) {
  const [showSubHeaders, setShowSubHeaders] = useState();
  const [showSubSubHeaders, setShowSubSubHeaders] = useState();
  const [showSubSubSubHeaders, setShowSubSubSubHeaders] = useState();

  return (
    <div
      className={`block mdNavbar:hidden pointer-events-auto absolute w-full max-w-[500px] top-0 bg-orange-500 h-[80vh] max-h-[80vh] overflow-y-auto ${
        isChecked
          ? "animate-translateLeftMenu left-0 block"
          : "animate-translateRightMenu left-[-100%] hidden"
      }`}
    >
      {/* Top spacer so items don't sit behind the close (X) button */}
      <div className="h-20" />

      <div className="flex flex-col bg-orange-400 mx-5 rounded-xl">
        {sitemap.map((item, index) => (
          <div key={index}>
            {/* ── Level 1 Header ── */}
            <div className="flex items-center justify-between border-b border-white/20 px-6 py-4 bg-transparent">
              <Link
                className="text-white font-semibold text-[17px] tracking-wide flex-1"
                href={
                  item.target ? `${item.linkTo}` : `${item.linkTo}/${utmParams}`
                }
                target={item.target ? "_blank" : ""}
                rel={
                  item.target === "_blank" ? "noopener noreferrer" : undefined
                }
              >
                {item.title}
              </Link>

              {item.nestedLinks ? (
                <button
                  className="text-white ml-3 flex-shrink-0"
                  onClick={() =>
                    setShowSubHeaders(
                      showSubHeaders === item.title ? null : item.title
                    )
                  }
                >
                  {showSubHeaders === item.title ? (
                    <FiChevronDown className="text-2xl" />
                  ) : (
                    <FiChevronRight className="text-2xl" />
                  )}
                </button>
              ) : (
                <FiChevronRight className="text-white text-2xl flex-shrink-0 ml-3" />
              )}
            </div>

            {/* ── Level 2 Sub-items ── */}
            <div
              className={`site-map-sub-header-wrapper ${
                showSubHeaders === item.title
                  ? "site-map-sub-header-wrapper-show"
                  : ""
              }`}
            >
              <div className="site-map-sub-header-inner-wrapper">
                {item.nestedLinks?.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <div className="flex items-center justify-between border-b border-white/20 pl-10 pr-6 py-3 bg-[#e06b10]">
                      <Link
                        className="text-white text-[15px] font-medium flex-1"
                        href={
                          subItem.target
                            ? `${subItem.linkTo}`
                            : `${subItem.linkTo}/${utmParams}`
                        }
                        target={subItem.target ? "_blank" : ""}
                        rel={
                          subItem.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {subItem.title}
                      </Link>

                      {subItem.superNestedLinks ? (
                        <button
                          className="text-white ml-3 flex-shrink-0"
                          onClick={() =>
                            setShowSubSubHeaders(
                              showSubSubHeaders === subItem.title
                                ? null
                                : subItem.title
                            )
                          }
                        >
                          {showSubSubHeaders === subItem.title ? (
                            <FiChevronDown className="text-xl" />
                          ) : (
                            <FiChevronRight className="text-xl" />
                          )}
                        </button>
                      ) : (
                        <FiChevronRight className="text-white/70 text-xl flex-shrink-0 ml-3" />
                      )}
                    </div>

                    {/* ── Level 3 Sub-sub-items ── */}
                    <div
                      className={`site-map-sub-header-wrapper ${
                        showSubSubHeaders === subItem.title
                          ? "site-map-sub-header-wrapper-show"
                          : ""
                      }`}
                    >
                      <div className="site-map-sub-header-inner-wrapper">
                        {subItem.superNestedLinks?.map((subsubItem, ssIndex) => (
                          <div key={ssIndex}>
                            <div className="flex items-center justify-between border-b border-white/20 pl-14 pr-6 py-3 bg-[#c85e0a]">
                              <Link
                                className="text-white text-[14px] flex-1"
                                href={
                                  subsubItem.target
                                    ? `${subsubItem.linkTo}`
                                    : `${subsubItem.linkTo}/${utmParams}`
                                }
                                target={subsubItem.target ? "_blank" : ""}
                                rel={
                                  subsubItem.target === "_blank"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {subsubItem.title}
                              </Link>

                              {subsubItem.thirdNestedLinks ? (
                                <button
                                  className="text-white ml-3 flex-shrink-0"
                                  onClick={() =>
                                    setShowSubSubSubHeaders(
                                      showSubSubSubHeaders === subsubItem.title
                                        ? null
                                        : subsubItem.title
                                    )
                                  }
                                >
                                  {showSubSubSubHeaders === subsubItem.title ? (
                                    <FiChevronDown className="text-lg" />
                                  ) : (
                                    <FiChevronRight className="text-lg" />
                                  )}
                                </button>
                              ) : (
                                <FiChevronRight className="text-white/60 text-lg flex-shrink-0 ml-3" />
                              )}
                            </div>

                            {/* ── Level 4 Sub-sub-sub-items ── */}
                            <div
                              className={`site-map-sub-header-wrapper ${
                                showSubSubSubHeaders === subsubItem.title
                                  ? "site-map-sub-header-wrapper-show"
                                  : ""
                              }`}
                            >
                              <div className="site-map-sub-header-inner-wrapper">
                                {subsubItem.thirdNestedLinks?.map(
                                  (subsubsubItem, sssIndex) => (
                                    <Link
                                      key={sssIndex}
                                      className="block text-white/90 text-[13px] pl-16 pr-6 py-3 border-b border-white/20 bg-[#b05208]"
                                      href={
                                        subsubsubItem.target
                                          ? `${subsubsubItem.linkTo}`
                                          : `${subsubsubItem.linkTo}/${utmParams}`
                                      }
                                      target={
                                        subsubsubItem.target ? "_blank" : ""
                                      }
                                      rel={
                                        subsubsubItem.target === "_blank"
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                    >
                                      {subsubsubItem.title}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <QuickLinks /> */}
    </div>
  );
}

export default NewNavbarMobile;
