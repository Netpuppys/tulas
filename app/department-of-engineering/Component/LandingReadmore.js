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
          <span className="text-orange-500 font-bold">B.Tech</span>{" "}
          <span className="text-gray-800 font-bold">at Tulas, Dehradun</span>
        </h2>

      {/* Always visible text */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        Built For Tomorrow’s Engineers
      </h5>

      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
       With BTech admissions 2026 now open, aspiring engineers have the opportunity to join a campus that blends innovation, industry exposure, and a student-centric approach.
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
          The B.Tech program at Tulas Dehradun is a 4-year full-time industry-aligned undergraduate program designed to develop future-ready engineers with strong technical foundations, analytical thinking and practical problem-solving abilities. Supported by NAAC A+ accreditation and NBA accreditation, Btech program  at Tulas has specialized programs in Computer Science & Engineering, Artificial Intelligence & Machine Learning, Data Science, Cyber Security, Civil Engineering, Mechanical Engineering, Electronics & Communication Engineering, and Electrical & Electronics Engineering, this B.Tech program in Uttarakhand equips students with both deep technical expertise and the ability to innovate across evolving engineering and technology domains.

          <br/>
          <br/>
         Recognized as the best engineering college in Uttarakhand, Tulas stands out for its commitment to quality education and career-focused learning. As a private BTech college with placements, we ensure that students are not only job-ready but future-ready, with top recruiters visiting us every year. The curriculum follows a structured, outcome-driven academic framework that combines classroom learning with advanced laboratories, project-based assignments, technical workshops and industry exposure through internships. Learning is strengthened through advanced laboratories, project-based assignments, technical workshops and internship opportunities, supported by a dedicated training and placement ecosystem.
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