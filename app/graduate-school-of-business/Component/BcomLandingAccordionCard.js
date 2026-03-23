"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the difference between B.Com and B.Com (Hons.) at Tula’s?",
    content: (
      <>
        <p className="mb-2 text-body">
          B.Com is a 3-year undergraduate program focused on core commerce fundamentals. B.Com (Hons.) is a 4-year advanced program that includes deeper academic learning, analytical depth and extended practical exposure.
        </p>
      </>
    ),
  },
  {
    title: "What will students study during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
          The program covers accounting, finance, taxation, business law, economics and management. Students also develop practical understanding through case studies, projects and applied learning.
        </p>
      </>
    ),
  },
  {
    title: "Does Tula’s provide practical exposure and industry experience?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. Students gain hands-on experience through live projects, internships, industry interactions and practical learning modules.
        </p>
      </>
    ),
  },
  {
    title: "What are the career opportunities after B.Com / B.Com (Hons.)?",
    content: (
      <>
        <p className="mb-2 text-body">
          Graduates can pursue careers in accounting, finance, banking, consulting, taxation and corporate roles, or opt for higher studies like MBA, CA, CFA and other professional certifications.
        </p>
      </>
    ),
  },
];

export default function BcomLandingAccordionCard() {
const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className="space-y-4 my-10">
                  <h3 className="text-center text-[clamp(38px,5.5vw,34px)] font-extrabold">
        <span className="text-orange-500">Frequently</span>{" "}
        <span className="text-gray-800">Asked Questions</span>
      </h3>
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="px-3">
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`flex items-center justify-between w-full px-5 py-3 font-medium text-body border rounded-lg shadow-lg transition
                hover:text-heading hover:bg-neutral-secondary-medium
                ${isOpen ? "rounded-b-none shadow-none" : ""}
              `}
            >
              <span className="text-black font-light text-left">{item.title}</span>

              <svg
                className={`w-5 h-5 shrink-0 transition-transform text-orange-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 9 7 7 7-7" />
              </svg>
            </button>

            <div
  className={`grid transition-all duration-300 ease-in-out ${
    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
  }`}
>
  <div className="overflow-hidden">
    <div className="border border-t-0 border-default rounded-b-base shadow-xs">
      <div className="p-4 md:p-5 text-black font-light">{item.content}</div>
    </div>
  </div>
</div>
          </div>
        );
      })}
    </div>
  );
}
