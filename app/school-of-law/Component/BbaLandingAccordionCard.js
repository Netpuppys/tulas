"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the structure and focus of the BBA LL.B (Hons.) program?",
    content: (
      <>
        <p className="mb-2 text-body">
          The BBA LL.B (Hons.) is a 5-year integrated program that combines legal education with business and management studies. It focuses on building a strong foundation in law along with an understanding of corporate governance, compliance, and business regulations, preparing students for roles where law and business intersect.
        </p>
      </>
    ),
  },
  {
    title: "How is BBA LL.B different from a traditional law program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Unlike traditional law programs, BBA LL.B integrates subjects related to business, finance, and management along with legal studies. This enables students to understand the legal aspects of business decisions, making it ideal for careers in corporate law, legal advisory, and compliance.
        </p>
      </>
    ),
  },
  {
    title: "What career opportunities are available after completing BBA LL.B (Hons.)?",
    content: (
      <>
        <p className="mb-2 text-body">
          Graduates can pursue careers in corporate law, legal advisory, compliance management, business consultancy, and litigation. The program also provides a strong foundation for higher studies such as LL.M and preparation for competitive legal examinations.
        </p>
      </>
    ),
  },
  {
    title: "How does Tulas support students in building their legal careers?",
    content: (
      <>
        <p className="mb-2 text-body">
          Tulas supports students through structured training in legal and professional skills, internship opportunities, and career guidance. Initiatives like TCCI help bridge the gap between academic learning and industry expectations, ensuring students are prepared for real-world legal and corporate roles.
        </p>
      </>
    ),
  },
  {
    title: "Why Tulas is the best BBA LL.B (Hons.)  college in Dehradun, Uttrakhand?",
    content: (
      <>
        <p className="mb-2 text-body">
          If you are looking for a BBA LL.B (Hons.) college in Uttarakhand, Dehradun then Tulas is suggested as it is UGC approved and NAAC A+ Accredited. It has an amazing campus life, students club, annual fests and industry workshops on futuristic skills and courses that will help students get good placements. With a good alumni record, students of Tulas are working in different industries at good packages.LL.B admissions 2026 are open. Apply now by filling the admission form.
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
