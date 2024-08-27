"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import sitemap from "@/data/sitemap";

const Header = () => {
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [isHamMenuOpened, setIsHamMenuOpened] = useState(false);
  const [showSubSubSubMenu, setShowSubSubSubMenu] = useState(null);
  const [showHeadersSubmenu, setShowHeadersSubmenu] = useState({});
  const [showHeadersSubSubmenu, setShowHeadersSubSubmenu] = useState({});

  const toggleSubmenu = (title) => {
    setShowHeadersSubmenu((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSubSubmenu = (parentTitle, title) => {
    setShowHeadersSubSubmenu((prev) => ({
      ...prev,
      [`${parentTitle}-${title}`]: !prev[`${parentTitle}-${title}`],
    }));
  };

  const toggleShowSubSubSubMenu = (title) => {
    setShowSubSubSubMenu((prevTitle) => (prevTitle === title ? null : title));
  };

  const menuRef = useRef(null);

  useEffect(() => {
    if (showMobileHeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileHeader]);

  const handleMenuClick = () => {
    menuRef.current.classList.add("scale-90");
    setTimeout(() => {
      menuRef.current.classList.remove("scale-90");
    }, 200);
    setIsHamMenuOpened(true);
    setShowMobileHeader(true);
  };

  return (
    <ul className="menu-animation">
      {sitemap.map((item, index) => (
        <li
          className="border-t border-[#C5C5C5] flex flex-col w-full"
          key={index}
        >
          <span
            className="flex items-center justify-between cursor-pointer h-[60px]"
            onClick={() => toggleSubmenu(item.title)}
          >
            <a
              href={item.linkTo}
              onClick={(event) => event.stopPropagation()}
              className="flex-auto text-[#212121] text-[17px] font-normal flex items-center h-full"
            >
              <span className="hamburger-menu-sub-headers">{item.title}</span>
            </a>
            {item.nestedLinks && (
              <>
                {showHeadersSubmenu[item.title] ? (
                  <FiMinus
                    size={20}
                    className="text-lg hover:text-xl text-white cursor-pointer"
                  />
                ) : (
                  <FiPlus
                    size={20}
                    className="text-lg hover:text-xl text-white cursor-pointer"
                  />
                )}
              </>
            )}
          </span>

          {item.nestedLinks && showHeadersSubmenu[item.title] && (
            <div className="hamburger-menu-sub-sub-container menu-animation menu-opened">
              {item.nestedLinks.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <li
                    className="hamburger-menu-sub-sub-headers"
                    onClick={() => toggleSubSubmenu(item.title, subItem.title)}
                  >
                    <a
                      href={subItem.linkTo}
                      onClick={(event) => event.stopPropagation()}
                      className="text-[#DFDFDF;] text-[14px] font-normal"
                    >
                      {subItem.title}
                    </a>
                    {subItem.thirdNestedLinks && (
                      <>
                        {showHeadersSubSubmenu[
                          `${item.title}-${subItem.title}`
                        ] ? (
                          <FiMinus
                            size={20}
                            className="text-lg hover:text-xl text-white cursor-pointer"
                          />
                        ) : (
                          <FiPlus
                            size={20}
                            className="text-lg hover:text-xl text-white cursor-pointer"
                          />
                        )}
                      </>
                    )}
                  </li>

                  {subItem.thirdNestedLinks &&
                    showHeadersSubSubmenu[`${item.title}-${subItem.title}`] && (
                      <div className="w-full menu-animation menu-opened">
                        {subItem.thirdNestedLinks.map(
                          (thirdItem, thirdIndex) => (
                            <a
                              key={thirdIndex}
                              href={thirdItem.linkTo}
                              className="hamburger-sub-sub-sub-headers"
                              onClick={(event) => event.stopPropagation()}
                            >
                              {thirdItem.title}
                            </a>
                          )
                        )}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Header;
