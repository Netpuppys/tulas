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
          <h2 className="text-center text-[clamp(39px,5vw,38px)] font-montserrat font-medium ">
          <span className="text-orange-500 font-bold">B.Pharma</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        From Lab Learning to Real-World Healthcare
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        The B.Pharm program at Tulas, Dehradun Uttarakhand is designed for students who aspire to build careers in pharmaceutical sciences and the healthcare sector. As one of the leading B.Pharma colleges in Dehradun, Tulas offers a curriculum that combines pharmaceutical science with practical lab work, clinical exposure, and ethical training. We prepare students not just for jobs but for meaningful careers in drug development, healthcare, and biotech industries.
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
        Built on the strength of NAAC A+ accreditation and an outcome-driven academic framework, B.Pharma at Tulas is a good choice in Uttarakhand. We emphasize research, innovation, and real-world application to ensure our graduates are equipped for both higher studies and immediate industry roles.
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