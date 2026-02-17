"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function LandingReadmore() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Heading */}
<div className="flex items-center gap-3 mb-6 mt-6 relative z-10">
  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
  <h2 className="text-2xl md:text-2xl tracking-wide text-[#1a1a1a]">
    ABOUT THE PROGRAMME
  </h2>
</div>


      {/* Always visible text */}
      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        Choosing the right business management degree is crucial for career
        advancement. The MBA Program at Tula's Institute is meticulously
        designed to transform aspiring professionals into executive-level
        thinkers and competent leaders equipped for global industries.
      </p>

      {/* Expandable content */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      >
        <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mt-4">
          The programme emphasizes real-world exposure, industry-aligned
          curriculum, experienced faculty, and leadership development.
          Students gain hands-on experience through live projects,
          internships, case studies, and global business perspectives to
          prepare them for dynamic corporate environments.
        </p>
      </div>

      {/* Read more button */}
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
    </div>
  );
}
