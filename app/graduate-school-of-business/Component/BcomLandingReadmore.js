"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function BcomLandingReadmore() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="max-w-3xl md:max-w-6xl mx-auto px-4 pt-5">
      {/* Heading */}
          <h2 className="text-center text-[clamp(39px,5vw,38px)] font-montserrat font-medium mb-2">
          <span className="text-orange-500 font-bold">B.Com</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4 capitalize">
        Designed for future professionals in finance, business and commerce
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        The 3 year B.Com program at Tulas Dehradun, along with a 4-year B.Com (Hons), is designed to build a strong foundation in commerce, accounting and business practices.
      </p>

      {/* Expandable content */}
      <div
        ref={contentRef}
        style={!isDesktop ? { maxHeight: height } : {}}
        className={`transition-[max-height] duration-700 ease-in-out ${
          isDesktop ? "" : "overflow-hidden"
        }`}
      >
        <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mt-4">
          As one of the best BCom (Hons) colleges in Dehradun, Tulas provides a curriculum that blends core concepts of accounting, finance, economics, and business law with hands-on learning experiences. Our mission is to prepare students for dynamic careers in commerce, entrepreneurship, and financial services
          <br/>
          <br/>
          Built on the strength of NAAC A+ accreditation and an outcome-driven academic framework, this B.Com program in Uttarkhand combines academic learning with practical exposure. Recognized among the best commerce colleges in Uttarakhand,Tulas is known for personalized mentorship, industry exposure, and strong academic framework.

        </p>
      </div>

      {/* Read more button (mobile only) */}
      {!isDesktop && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 w-full bg-[#2b2b2b] text-white py-2 flex items-center justify-center gap-2 text-md font-light"
        >
          {open ? "Read less" : "Read more"}
          <IoChevronDown
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}