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
          <span className="text-orange-500 font-bold">LLB</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        Build a Career in Law with Strong Foundations and Real-World Exposure
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        Recognised as one of the best law college in Dehradun, Uttarakhand, Tulas offers a dynamic environment for graduates who want to build a professional career in law. The LL.B program focuses on developing a clear understanding of legal systems along with practical skills required for litigation, corporate law, and other legal roles.
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
          Students study key areas such as constitutional law, criminal law, contract law, and civil procedures, gaining insight into how law works across courts and organisations. Through case-based learning, research, and drafting exercises, students build the ability to analyse and apply legal concepts effectively.
          <br/>
          <br/>
          If you are looking for LLB program in Uttarakhand, then Tulas college can be a good choice. Students get Internships with law firms, courts, and organisations with insight into real legal environments and processes. This ensures that students graduate with not only knowledge, but also the confidence and professional readiness required for careers in law.
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