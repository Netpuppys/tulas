"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function BbaLandingReadmore() {
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
          <span className="text-orange-500 font-bold">BBA</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4 capitalize">
        Designed for students aspiring to build careers in business, management and entrepreneurship
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
      As one of the reputed BBA colleges in Dehradun Uttarakhand, the BBA program at Tulas is designed to provide students with a strong academic foundation along with practical understanding of business and management.  Supported by NAAC A+ accreditation and an outcome-driven academic framework, the program combines classroom learning with case studies, projects and industry exposure.
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
        With a focus on real-world application, students engage in practical assignments, presentations and collaborative projects that enhance problem-solving abilities, communication skills and business awareness, helping them adapt effectively to dynamic corporate environments. If you're looking for the best BBA college in Uttarakhand, Tulas Institute offers the perfect balance of quality education, experienced faculty, and career-oriented exposure.
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