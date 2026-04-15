"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the structure and focus of the LLB program at Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
          The LLB program in Dehradun at Tulas is a 3-year course designed for graduates who want to build a strong foundation in law. Recognised among the best LLB colleges in Dehradun, the program focuses on both theoretical understanding and practical application. Students study core subjects such as constitutional law, criminal law, contract law, civil procedure, and corporate law, while developing skills in legal research, drafting, and case analysis through a structured, application-driven approach.
        </p>
      </>
    ),
  },
  {
    title: "What kind of practical exposure will I receive during the LLB program?",
    content: (
      <>
        <p className="mb-2 text-body">
         The LLB program in Uttarakhand at Tulas emphasises experiential learning. Students participate in moot courts, mock trials, legal research projects, and drafting exercises. As a leading law college in Dehradun, Tulas also provides internship opportunities with law firms, courts, and corporate legal teams, giving students real-world exposure to legal procedures and professional environments.
        </p>
      </>
    ),
  },
  {
    title: "What career opportunities are available after completing LLB?",
    content: (
      <>
        <p className="mb-2 text-body">
          After completing your LLB in Uttarakhand, graduates can explore careers in litigation, corporate law, legal advisory, compliance, judiciary services, and public policy. The program also prepares students for higher studies such as LL.M and competitive exams like judiciary and civil services, making it a strong choice for those pursuing law in Dehradun.
        </p>
      </>
    ),
  },
  {
    title: "How does Tulas support students in building their legal careers?",
    content: (
      <>
        <p className="mb-2 text-body">
          Tulas, known as one of the best LLB colleges in Dehradun, supports students through structured training in legal research, drafting, communication, and interview preparation. The Training and Placement Cell, along with TCCI, ensures students are industry-ready. For students seeking LLB admission 2026, the program offers the right mix of academic learning and professional exposure to build successful legal careers.
        </p>
      </>
    ),
  },
  {
    title: "Why Tulas is the best LL.B college in Dehradun, Uttrakhand?",
    content: (
      <>
        <p className="mb-2 text-body">
          If you are looking for a LL.B college in Uttarakhand, Dehradun then Tulas is suggested as it is UGC approved and NAAC A+ Accredited. It has an amazing campus life, students club, annual fests and industry workshops on futuristic skills and courses that will help students get good placements. With a good alumni record, students of Tulas are working in different industries at good packages.LL.B admissions 2026 are open. Apply now by filling the admission form.
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
              className={`flex justify-between w-full px-5 py-3 font-medium text-body border rounded-lg shadow-lg transition
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
