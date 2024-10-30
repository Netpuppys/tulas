"use client";
import sitemap from "@/data/sitemap";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "../Component/NavbarMobile.css";
import Link from "next/link";
import QuickLinks from "./QuickLinks";
function NavbarMobile({ isChecked }) {
  const [showSubHeaders, setShowSubHeaders] = useState();
  const [showSubSubHeaders, setShowSubSubHeaders] = useState();
  const [showSubSubSubHeaders, setShowSubSubSubHeaders] = useState();
  return (
    <div
      className={`block mdNavbar:hidden absolute w-full max-w-[500px] top-0 bg-white h-screen ${
        isChecked
          ? "animate-translateLeftMenu left-0 block"
          : "animate-translateRightMenu left-[-100%] hidden"
      }`}
    >
      <div className="site-map-tree">
        {sitemap.map((item, index) => (
          <>
            <div className="site-map-header" key={index}>
              <Link className="site-map-link" href={item.linkTo || "#"}>
                {item.title}
              </Link>
              {item.nestedLinks && (
                <button
                  className={`${
                    showSubHeaders === item.title
                      ? "site-map-header-minus"
                      : "site-map-header-plus"
                  }`}
                  onClick={() =>
                    setShowSubHeaders(
                      showSubHeaders === item.title ? null : item.title
                    )
                  }
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <FiPlus
                      className={`transition-all duration-500 ease-in-out text-lg text-[#007A83] absolute ${
                        showSubHeaders === item.title
                          ? "rotate-90 opacity-0"
                          : "rotate-0 opacity-100"
                      }`}
                    />
                    <FiMinus
                      className={`transition-all duration-500 ease-in-out text-lg text-[#007A83] absolute ${
                        showSubHeaders === item.title
                          ? "rotate-0 opacity-100"
                          : "-rotate-90 opacity-0"
                      }`}
                    />
                  </div>
                </button>
              )}
            </div>
            <div
              className={`site-map-sub-header-wrapper ${
                showSubHeaders === item.title
                  ? "site-map-sub-header-wrapper-show"
                  : ""
              }`}
            >
              <div className="site-map-sub-header-inner-wrapper">
                {item.nestedLinks?.map((subItem) => (
                  <>
                    <div className="site-map-sub-header">
                      <Link
                        className="site-map-sub-link"
                        href={subItem.linkTo || "#"}
                      >
                        {subItem.title}
                      </Link>

                      {subItem.superNestedLinks && (
                        <button
                          className={`${
                            showSubSubHeaders === subItem.title
                              ? "site-map-sub-header-minus"
                              : "site-map-sub-header-plus"
                          }`}
                          onClick={() =>
                            setShowSubSubHeaders(
                              showSubSubHeaders === subItem.title
                                ? null
                                : subItem.title
                            )
                          }
                        >
                          <div className="relative w-full h-full flex items-center bg-[#919191] justify-center">
                            <FiPlus
                              className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${
                                showSubSubHeaders === subItem.title
                                  ? "rotate-90 opacity-0"
                                  : "rotate-0 opacity-100"
                              }`}
                            />
                            <FiMinus
                              className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${
                                showSubSubHeaders === subItem.title
                                  ? "rotate-0 opacity-100"
                                  : "-rotate-90 opacity-0"
                              }`}
                            />
                          </div>
                        </button>
                      )}
                    </div>

                    <div
                      className={`site-map-sub-header-wrapper ${
                        showSubSubHeaders === subItem.title
                          ? "site-map-sub-header-wrapper-show"
                          : ""
                      }`}
                    >
                      <div className="site-map-sub-header-inner-wrapper">
                        {subItem.superNestedLinks?.map((subsubItem) => (
                          <>
                            <div className="site-map-ss-header">
                              <Link
                                className="site-map-ss-link"
                                href={subsubItem.linkTo || "#"}
                              >
                                {subsubItem.title}
                              </Link>

                              {subsubItem.thirdNestedLinks && (
                                <button
                                  className={`${
                                    showSubSubSubHeaders === subsubItem.title
                                      ? "site-map-ss-header-minus"
                                      : "site-map-ss-header-plus"
                                  }`}
                                  onClick={() =>
                                    setShowSubSubSubHeaders(
                                      showSubSubSubHeaders === subsubItem.title
                                        ? null
                                        : subsubItem.title
                                    )
                                  }
                                >
                                  <div className="relative w-full h-full flex items-center bg-[#2C2C2C] justify-center">
                                    <FiPlus
                                      className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${
                                        showSubSubSubHeaders ===
                                        subsubItem.title
                                          ? "rotate-90 opacity-0"
                                          : "rotate-0 opacity-100"
                                      }`}
                                    />
                                    <FiMinus
                                      className={`transition-all duration-500 ease-in-out text-lg text-white absolute ${
                                        showSubSubSubHeaders ===
                                        subsubItem.title
                                          ? "rotate-0 opacity-100"
                                          : "-rotate-90 opacity-0"
                                      }`}
                                    />
                                  </div>
                                </button>
                              )}
                            </div>

                            <div
                              className={`site-map-sub-header-wrapper ${
                                showSubSubSubHeaders === subsubItem.title
                                  ? "site-map-sub-header-wrapper-show"
                                  : ""
                              }`}
                            >
                              <div className="site-map-sub-header-inner-wrapper">
                                {subsubItem.thirdNestedLinks?.map(
                                  (subsubsubItem) => (
                                    <Link
                                      className="site-map-sss-link"
                                      href={subsubsubItem.linkTo || "#"}
                                    >
                                      {subsubsubItem.title}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <QuickLinks />
    </div>
  );
}

export default NavbarMobile;
