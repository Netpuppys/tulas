"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the focus of the MCA program at Tulas",
    content: (
      <>
        <p className="mb-2 text-body">
          MCA is 2 year program that focuses on developing advanced technical expertise in software development, programming and system design for specialised roles in the IT sector.
        </p>
      </>
    ),
  },
  {
    title: "What will students study during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Students study advanced programming, data structures, database systems, software engineering and application development. The curriculum also includes live projects and practical assignments.
        </p>
      </>
    ),
  },
  {
    title: "Does Tulas provide practical exposure and industry experience?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. Students gain hands-on experience through real-time projects, internships and industry-based assignments, helping them align with current technology practices and industry requirements.
        </p>
      </>
    ),
  },
  {
    title: "What are the career opportunities after MCA?",
    content: (
      <>
        <p className="mb-2 text-body">
       Graduates can pursue roles such as software developer, application developer, system architect, data analyst and IT consultant, or explore specialised domains within the technology sector.
        </p>
      </>
    ),
  },
  {
    title: "Why Tulas is the best MCA college in Dehradun, Uttrakhand?",
    content: (
      <>
        <p className="mb-2 text-body">
      If you are looking for a MCA college in Uttarakhand, Dehradun then Tulas is suggested as it is UGC approved and NAAC A+ Accredited. It has an amazing campus life, students club, annual fests and industry workshops on futuristic skills and courses that will help students get good placements. With a good alumni record, alumni of Tulas are working in different industries at good packages. MCA admissions 2026 are open. Apply now by filling the admission form.
        </p>
      </>
    ),
  },
];

export default function McaLandingAccordionCard() {
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
