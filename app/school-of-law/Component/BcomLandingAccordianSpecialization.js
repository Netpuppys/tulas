"use client";
import { useState } from "react";
import Image from "next/image";

export default function BcomLandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Constitutional & Administrative Law",
      text: "This domain focuses on the structure and functioning of the State, including separation of powers, fundamental rights, directive principles, and judicial review. Students study constitutional interpretation, landmark judgments, and administrative processes, building an understanding of how governance operates within a legal framework.",
      mobileImage: "/school-of-law/law/constitutional-law.png",
      image: "/school-of-law/law/constitutional-law.png",
    },
    {
      title: "Criminal Law & Justice System",
      text: "Covers substantive criminal law under IPC and procedural aspects under CrPC, including investigation, trial, and sentencing. Students examine criminal liability, defences, and the functioning of the criminal justice system, developing the ability to analyse offences and legal outcomes.",
      mobileImage: "/school-of-law/law/criminal-law-opt.png",
      image: "/school-of-law/law/criminal-law-opt.png",
    },
    {
      title: "Public Policy & Governance",
      text: "Explores how laws influence public administration, policy formulation, and regulatory systems. Students understand the role of legal frameworks in governance, social welfare, and institutional decision-making.",
      mobileImage: "/school-of-law/law/civil-procedure-code-opt.png",
      image: "/school-of-law/law/civil-procedure-code-opt.png",
    },
    {
      title: "Socio-Legal Studies",
      text: "Integrates insights from sociology, political science, and economics to study law within a social context. Students analyse issues such as rights, justice, inequality, and social change, understanding the broader impact of legal systems.",
      mobileImage: "/school-of-law/law/optional.png",
      image: "/school-of-law/law/optional.png",
    },
    {
      title: "Law of Evidence & Legal Procedures",
      text: "Focuses on rules governing admissibility, relevance, and evaluation of evidence. Students learn about burden of proof, witness examination, and procedural frameworks that determine how cases are adjudicated.",
      mobileImage: "/school-of-law/law/law-of-evidence-opt.png",
      image: "/school-of-law/law/law-of-evidence-opt.png",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">

      {/* Heading */}
      <h2 className="text-center text-[clamp(38px,5vw,38px)] font-extrabold mb-10">
        <span className="text-orange-500">Core</span>{" "}
        <span className="text-gray-800">Finance Domains</span>
      </h2>

      {/* ---------------- MOBILE (ACCORDION) ---------------- */}
      <div className="space-y-4 md:hidden">
        {items.map((item, index) => (
          <MobileAccordion
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {/* ---------------- DESKTOP (VERTICAL TABS) ---------------- */}
      <div className="hidden md:grid grid-cols-12 gap-10">

        {/* LEFT TABS */}
        <div className="col-span-4 space-y-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => toggle(index)}
              className={`w-full text-left px-5 py-4 rounded-lg border transition ${
                activeIndex === index
                  ? "bg-orange-600 text-white border-orange-500"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-8 border rounded-xl p-6 shadow-sm">

          {items[activeIndex] && (
            <>
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                width={800}
                height={400}
                className="rounded-lg mb-5 w-full h-[260px] md:h-[320px] object-cover"
              />

              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                {items[activeIndex].subitle}
              </h3>

              <p className="text-gray-600">
                {items[activeIndex].text}
              </p>
            </>
          )}

        </div>
      </div>

    </section>
  );
}

/* MOBILE ACCORDION COMPONENT */
function MobileAccordion({ item, index, activeIndex, setActiveIndex }) {
  const toggle = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">

      <button
        onClick={toggle}
        className="w-full text-left px-5 py-4 flex justify-between items-center text-black font-semibold text-lg"
      >
        {item.title}
        <span className="text-xxl text-orange-500">
          {activeIndex === index ? "-" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          activeIndex === index
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 border-t">

            <Image
              src={item.mobileImage}
              alt={item.title}
              width={800}
              height={400}
              className="rounded-lg mb-4 w-full h-auto"
            />

            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              {item.subitle}
            </h3>

            <p className="text-gray-600">{item.text}</p>

          </div>
        </div>
      </div>

    </div>
  );
}