"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What makes Tulas one of the top M.Sc Agronomy courses in Dehradun?",
    content: (
      <>
        <p className="mb-2 text-body">
          Tulas offers a research-driven M.Sc Agronomy in Dehradun with a strong focus on crop science, soil management, and sustainable agriculture. Recognised among the top M.Sc Agronomy courses in Dehradun, the program combines fieldwork, modern agricultural practices, and industry exposure to prepare students for real-world challenges.
        </p>
      </>
    ),
  },
  {
    title: "What is the eligibility criteria for M.Sc Agronomy admission at Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
          For students seeking M.Sc Agronomy admission 2026, candidates must hold a Bachelor’s degree in Agriculture or a related field with a minimum of 50% marks (as per university norms). This makes it an accessible and competitive M.Sc program in Uttarakhand for aspiring agriculture professionals.
        </p>
      </>
    ),
  },
  {
    title: "Does Tulas provide research and industry exposure for M.Sc Agronomy students?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. As a leading M.Sc agronomy college in Dehradun, Tulas provides extensive fieldwork, research projects, and exposure to modern agri practices. Students gain hands-on experience in crop trials, soil analysis, and sustainable farming, making it one of the best agronomy colleges in Uttarakhand.
        </p>
      </>
    ),
  },
  {
    title: "What career opportunities are available after M.Sc Agronomy from Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
         Graduates from this M.Sc in Dehradun can pursue careers as agronomists, agricultural researchers, consultants, and professionals in agri-tech and sustainability sectors. The program prepares students for roles across research institutions, government organisations, and private agri-industries.
        </p>
      </>
    ),
  },
  {
    title: "Why is Tulas considered one of the best M.Sc colleges in Dehradun for Agronomy?",
    content: (
      <>
        <p className="mb-2 text-body">
         Tulas stands out as one of the best M.Sc colleges in Dehradun due to its strong focus on research, practical learning, and industry relevance. As a leading M.Sc Agronomy college in Uttarakhand, it offers a balanced approach of scientific knowledge, field exposure, and modern agricultural practices, making it a preferred choice for students looking to build impactful careers in agriculture.
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
