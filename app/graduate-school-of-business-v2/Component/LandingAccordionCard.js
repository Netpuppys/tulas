"use client";

import { useState } from "react";

const faqs = [
  {
    title: "What is Flowbite?",
    content: (
      <>
        <p className="mb-2 text-body">
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p className="text-body">
          Check out this guide to learn how to{" "}
          <a href="/docs/getting-started/introduction/" className="text-fg-brand hover:underline">
            get started
          </a>{" "}
          and start developing websites even faster.
        </p>
      </>
    ),
  },
  {
    title: "Is there a Figma file available?",
    content: (
      <>
        <p className="mb-2 text-body">
          Flowbite is first conceptualized and designed using Figma, so everything
          has a design equivalent.
        </p>
        <p className="text-body">
          Check out the{" "}
          <a
            href="https://flowbite.com/figma/"
            className="text-fg-brand hover:underline"
          >
            Figma design system
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "What are the differences between ",
    content: (
      <>
        <p className="mb-2 text-body">
          Flowbite is open-source under MIT, while Tailwind UI is a paid product.
        </p>
        <ul className="ps-5 text-body list-disc">
          <li>
            <a href="https://flowbite.com/pro/" className="text-fg-brand hover:underline">
              Flowbite Pro
            </a>
          </li>
          <li>
            <a href="https://tailwindui.com/" className="text-fg-brand hover:underline">
              Tailwind UI
            </a>
          </li>
        </ul>
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
                  <h3 className="text-center text-[clamp(25px,5.5vw,34px)] font-medium">
        <span className="text-orange-500">Frequently</span>{" "}
        <span className="text-gray-800 font-light">Asked Questions</span>
      </h3>
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="px-3">
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`flex items-center justify-between w-full px-5 py-3 font-medium text-body border border-orange-500 rounded-lg shadow-xs transition
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

            {isOpen && (
              <div className="border border-t-0 border-default rounded-b-base shadow-xs">
                <div className="p-4 md:p-5 text-black font-light">{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
