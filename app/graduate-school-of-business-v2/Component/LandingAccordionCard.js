"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the duration of the MBA program at Tula’s?",
    content: (
      <>
        <p className="mb-2 text-body">
          The MBA at Tula’s is a 2-year full-time postgraduate program designed to build leadership, strategic thinking and industry-ready management skills.
        </p>
      </>
    ),
  },
  {
    title: "What specialisations are offered in the MBA program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Students can choose from Marketing, Digital Marketing, Finance, Human Resource Management, Business Analytics and International Business, allowing them to focus on their preferred career domain.
        </p>
      </>
    ),
  },
  {
    title: "What is the eligibility criteria for MBA admission?",
    content: (
      <>
        <p className="mb-2 text-body">
          Applicants must hold a Bachelor’s degree with a minimum of 50% marks (45% for reserved categories) from a recognised university. Scores from CAT, MAT, XAT, CMAT or equivalent entrance exams may be considered.
        </p>
      </>
    ),
  },
  {
    title: "Does Tula’s provide internships and placement support for MBA students?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. The Training and Placement Cell provides internship opportunities, career training, mock interviews and connects students with leading recruiters through campus placement drives.
        </p>
      </>
    ),
  },
];

export default function LandingAccordionCard() {
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
              <span className="text-black font-light">{item.title}</span>

              <svg
                className={`w-5 h-5 shrink-0 transition-transform text-orange-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 15 7-7 7 7" />
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
