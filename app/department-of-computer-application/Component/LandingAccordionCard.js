"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is the focus of the BCA program at Tulas?",
    content: (
      <>
        <p className="mb-2 text-body">
          The BCA program at Tulas is a 3 year program that focuses on building a strong foundation in computer applications, programming and software development. It is designed to develop analytical thinking, problem-solving ability and technical skills required to work in modern IT environments through an outcome-driven and application-oriented learning approach.
        </p>
      </>
    ),
  },
  {
    title: "What will students study during the program?",
    content: (
      <>
        <p className="mb-2 text-body">
          Students study core subjects such as programming languages, data structures, database management systems, web technologies and software engineering. The curriculum also includes practical lab work, coding projects and application-based learning, helping students understand how to design, develop and manage real-world software systems.
        </p>
      </>
    ),
  },
  {
    title: "Does Tulas provide practical exposure and industry experience?",
    content: (
      <>
        <p className="mb-2 text-body">
          Yes. The program emphasises hands-on learning through lab sessions, coding projects, internships and industry interactions. Students also benefit from structured training and skill development through TCCI (Tula’s Career Catalyst Initiative), which helps align their technical skills with industry expectations.
        </p>
      </>
    ),
  },
  {
    title: "What are the career opportunities after BCA?",
    content: (
      <>
        <p className="mb-2 text-body">
        Graduates can pursue careers in software development, web development, system analysis, application development and IT support roles. Students can also opt for higher studies such as MCA or specialised programs to advance into technical and specialised roles in the technology sector.
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
