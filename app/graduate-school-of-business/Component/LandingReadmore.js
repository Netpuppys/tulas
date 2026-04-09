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
          <h2 className="text-center text-[clamp(39px,5vw,38px)] font-montserrat font-medium mb-2">
          <span className="text-orange-500 font-bold">MBA</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        Designed for Future Decision-makers
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        Ranked among the top MBA colleges in Dehradun, Tulas offers a dynamic learning environment where students gain in-depth business knowledge, hands-on experience, and exposure to real-time industry challenges. From marketing and finance to HR and analytics, our curriculum is tailored to meet the demands of a fast-changing market.
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
          Master of Business Administration at Tulas Institute is a 2-year full-time industry-aligned postgraduate program designed to transform graduates into confident decision-makers, strategic thinkers and future business leaders.
          <br/>
          <br/>
          Built on the strength of NAAC A+ accreditation and a structured, outcome-driven academic framework, the program integrates core management fundamentals with an industry-aligned curriculum, complemented by hands-on learning through case studies, live projects and internship opportunities, all supported by a dedicated placement ecosystem.
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