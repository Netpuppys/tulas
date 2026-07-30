"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { IoChevronDown } from "react-icons/io5";

// ── Custom hook for media queries (plain JS) ──
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

// ── Component ──
export default function LandingReadmore({
  heading = "B.Tech at Tulas, Dehradun",
  highlight = "B.Tech",
  subheading = "Built For Tomorrow’s Engineers",
  intro = "With BTech admissions 2026 now open, aspiring engineers have the opportunity to join a campus that blends innovation, industry exposure, and a student-centric approach.",
  paragraphs = [
    `The B.Tech program at Tulas Dehradun is a 4-year full-time industry-aligned undergraduate program designed to develop future-ready engineers with strong technical foundations, analytical thinking and practical problem-solving abilities. Supported by NAAC A+ accreditation and NBA accreditation, Btech program at Tulas has specialized programs in Computer Science & Engineering, Artificial Intelligence & Machine Learning, Data Science, Cyber Security, Civil Engineering, Mechanical Engineering, Electronics & Communication Engineering, and Electrical & Electronics Engineering, this B.Tech program in Uttarakhand equips students with both deep technical expertise and the ability to innovate across evolving engineering and technology domains.`,

    `Recognized as the best engineering college in Uttarakhand, Tulas stands out for its commitment to quality education and career-focused learning. As a private BTech college with placements, we ensure that students are not only job-ready but future-ready, with top recruiters visiting us every year. The curriculum follows a structured, outcome-driven academic framework that combines classroom learning with advanced laboratories, project-based assignments, technical workshops and industry exposure through internships. Learning is strengthened through advanced laboratories, project-based assignments, technical workshops and internship opportunities, supported by a dedicated training and placement ecosystem.`,
  ],
  readMoreLabel = "Read more",
  readLessLabel = "Read less",
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const isDesktop = useMediaQuery("(min-width: 768px)");

  // ── Update height when open changes ──
  useEffect(() => {
    if (!contentRef.current) return;
    setContentHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [open]);

  // ── Toggle handler ──
  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // ── Build heading with highlight ──
  const renderHeading = () => {
    const parts = heading.split(highlight);
    if (parts.length === 1) return <span>{heading}</span>;
    return (
      <>
        {parts[0]}
        <span className="text-orange-500 font-bold">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className="max-w-3xl md:max-w-6xl mx-auto px-4 pt-5">
      {/* Heading */}
      <h2 className="text-center text-[clamp(39px,5vw,38px)] text-black font-bold font-montserrat mb-2">
        {renderHeading()}
      </h2>

      {/* Subheading */}
      <h5 className="text-[19px] md:text-[23px] text-center text-orange-500 mb-4">
        {subheading}
      </h5>

      {/* Introductory paragraph */}
      <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600">
        {intro}
      </p>

      {/* Expandable content – maps over the `paragraphs` array */}
      <div
        ref={contentRef}
        className={`transition-[max-height] duration-700 ease-in-out  overflow-hidden ${
          isDesktop ? "max-h-none overflow-visible" : ""
        }`}
        style={!isDesktop ? { maxHeight: contentHeight } : undefined}
      >
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mt-4"
          >
            {text}
          </p>
        ))}
      </div>

      {/* Read more button (hidden on desktop) */}
      {!isDesktop && (
        <button
          onClick={toggleOpen}
          className="mt-6 w-full bg-[#2b2b2b] text-white py-2 flex items-center justify-center gap-2 text-md font-light md:hidden"
          aria-expanded={open}
        >
          {open ? readLessLabel : readMoreLabel}
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