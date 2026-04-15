"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the structure and focus of the BA LL.B (Hons.) program at Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
          The BA LL.B (Hons.) program is a 5-year integrated course that combines core legal education with subjects from the social sciences such as political science, sociology, and economics. The program is designed to help students understand not only legal principles but also the social and governance contexts in which laws operate.
        </p>
      </>
    ),
  },
  {
    title: "How does BA LL.B differ from other law programs like BBA LL.B or LLB?",
    content: (
      <>
        <p className="mb-2 text-body">
         BA LL.B is designed for students interested in understanding law in relation to society, governance, and public systems. Unlike BBA LL.B, which focuses on corporate and business law, BA LL.B emphasises constitutional law, public policy, and socio-legal studies. Compared to the 3-year LLB, it offers an integrated approach starting right after school, providing a broader academic foundation and more time for skill development and exposure
        </p>
      </>
    ),
  },
  {
    title: "What kind of practical exposure will I receive during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
        The program includes continuous practical exposure through moot courts, mock trials, legal research projects, and drafting exercises. Students also undertake internships with law firms, courts, and legal organisations, allowing them to observe real legal proceedings and understand professional workflows.
        </p>
      </>
    ),
  },
  {
    title: "What career opportunities are available after completing BA LL.B (Hons.)?",
    content: (
      <>
        <p className="mb-2 text-body">
          Graduates can pursue careers in litigation, judiciary services, civil services, public policy, legal advisory, and research. The program also provides a strong foundation for higher studies such as LL.M or preparation for competitive examinations like judiciary and UPSC.
        </p>
      </>
    ),
  },
  {
    title: "Why Tulas is the best BA LL.B (Hons.)  college in Dehradun, Uttrakhand?",
    content: (
      <>
        <p className="mb-2 text-body">
          If you are looking for a LL.B college in Uttarakhand, Dehradun then Tulas is suggested as it is UGC approved and NAAC A+ Accredited. It has an amazing campus life, students club, annual fests and industry workshops on futuristic skills and courses that will help students get good placements. With a good alumni record, students of Tulas are working in different industries at good packages.LL.B admissions 2026 are open. Apply now by filling the admission form
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
