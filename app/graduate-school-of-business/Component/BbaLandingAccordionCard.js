"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the focus of the BBA program at Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
          The BBA program focuses on developing foundational knowledge in business and management along with essential analytical and decision-making skills required for managerial roles.
        </p>
      </>
    ),
  },
  {
    title: "What will students study during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Students study subjects such as marketing, finance, human resource management, operations, business law and entrepreneurship. The curriculum also includes case studies, projects and applied learning to build practical business understanding.
        </p>
      </>
    ),
  },
  {
    title: "Does Tulas provide practical exposure and industry experience?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. The program incorporates case-based learning, live projects, internships and industry interactions to provide students with practical exposure and understanding of real-world business environments.
        </p>
      </>
    ),
  },
  {
    title: "What are the career opportunities after BBA?",
    content: (
      <>
        <p className="mb-2 text-body">
          Graduates can pursue careers in marketing, sales, human resources, operations and business development, or opt for higher studies such as MBA and other professional programs.
        </p>
      </>
    ),
  },
];

export default function BbaLandingAccordionCard() {
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
