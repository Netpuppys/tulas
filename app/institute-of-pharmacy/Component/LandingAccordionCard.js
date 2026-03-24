"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the focus of the B.Pharma program at Tula’s?",
    content: (
      <>
        <p className="mb-2 text-body">
          Tulas B.Pharmaa is a 4 year program that focuses on building a strong foundation in pharmaceutical sciences, drug formulation and healthcare applications. It develops knowledge in pharmacology, pharmaceutics and medicinal chemistry, preparing students for roles in pharmaceutical and healthcare sectors.
        </p>
      </>
    ),
  },
  {
    title: "What will students study during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Students study subjects such as pharmaceutical chemistry, pharmacology, pharmaceutics, pharmaceutical analysis and drug delivery systems. The curriculum also includes laboratory work, practical experiments and research-based learning to build hands-on understanding of drug development and formulation.
        </p>
      </>
    ),
  },
  {
    title: "Does Tula’s provide practical exposure and industry experie",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. Students gain hands-on experience through laboratory training, formulation techniques, internships and industry interactions, helping them understand real-world pharmaceutical practices and healthcare applications.
        </p>
      </>
    ),
  },
  {
    title: "What are the career opportunities after B.Pharma?",
    content: (
      <>
        <p className="mb-2 text-body">
         Graduates can pursue careers in pharmaceutical companies, healthcare organisations, research laboratories and regulatory bodies. Roles include pharmacist, drug analyst, quality control executive, medical representative and research associate, or students can opt for higher studies such as M.Pharm and specialised programs.
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
