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
          <span className="text-orange-500 font-bold">B.Pharma</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas</span>
        </h2>

      {/* Always visible text */}
      {/* <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        Built For Tomorrow’s Engineers
      </h5> */}

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        The B.Pharm program at Tulas is designed for students who aspire to build careers in pharmaceutical sciences and the healthcare sector. The program focuses on developing a strong foundation in pharmaceutical chemistry, pharmacology, pharmaceutics, and drug formulation. The curriculum is thoughtfully structured to cover key areas such as medicinal chemistry, pharmaceutical analysis, drug delivery systems, and regulatory practices—ensuring a comprehensive understanding of the field
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
         Built on the strength of NAAC A+ accreditation and an outcome-driven academic framework, the program combines academic learning with practical lab work, research exposure, and industry-relevant training. Students gain hands-on experience through laboratory experiments, formulation techniques, and applied assignments, preparing them for diverse roles across pharmaceutical industries, healthcare organisations, and research domains.
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