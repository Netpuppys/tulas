"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function LandingReadmore() {
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
          <h2 className="text-center text-[clamp(26px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-semibold">MBA</span>{" "}
          <span className="text-gray-800 font-light">At Tula’s</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[15px] md:text-[16px] text-center text-orange-600 mb-4">
        Designed For Future Decision - makers
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        The MBA at Tula’s Institute is a 2-year full-time industry-aligned postgraduate program designed to transform graduates into confident decision-makers, strategic thinkers and future business leaders.
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
          Built on the strength of NAAC A+ accreditation and a structured, outcome-driven academic framework, the program integrates core management fundamentals with an industry-aligned curriculum, complemented by hands-on learning through case studies, live projects and internship opportunities, all supported by a dedicated placement ecosystem
          <br/>
          <br/>
          With focused specialisations in Marketing, Finance, Human Resource Management, Business Analytics, International Business and Supply Chain Management, the program develops both strategic insight and functional expertise across key business domains.
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