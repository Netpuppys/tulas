"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Constitutional Law",
      text: "This domain builds a strong foundation in constitutional principles, governance structures, and fundamental rights. Students study judicial review, separation of powers, and constitutional interpretation through landmark case laws. It develops a clear understanding of how courts uphold the rule of law and protect individual rights within a legal system.",
      mobileImage: "/school-of-law/law/constitutional-law.png",
      image: "/school-of-law/law/constitutional-law.png",
    },
    {
      title: "Criminal Law (IPC & CrPC)",
      text: "Criminal Law focuses on substantive and procedural aspects of offences, including criminal liability, investigation, and trial procedures. Students explore key concepts such as mens rea, defences, and justice delivery systems, gaining insight into how criminal cases are prosecuted and adjudicated within the legal framework.",
      mobileImage: "/school-of-law/law/criminal-law-opt.png",
      image: "/school-of-law/law/criminal-law-opt.png",
    },
    {
      title: "Contract & Commercial Law",
      text: "This domain covers the formation, enforceability, and breach of contracts under established legal frameworks. Students learn about contractual obligations, legal remedies, indemnity, and agency, with a focus on application in commercial transactions, business law, and corporate environments.",
      mobileImage: "/school-of-law/law/contract-commercial-law.png",
      image: "/school-of-law/law/contract-commercial-law.png",
    },
    {
      title: "Civil Procedure Code (CPC)",
      text: "The Civil Procedure Code provides a detailed understanding of civil litigation processes, including jurisdiction, pleadings, trial procedures, execution of decrees, and appellate mechanisms. It equips students with knowledge of procedural law and dispute resolution within civil courts.",
      mobileImage: "/school-of-law/law/civil-procedure-code.png",
      image: "/school-of-law/law/civil-procedure-code.png",
    },
        {
      title: "Agri-Business Management",
      text: "The backbone of the Indian Economy - Agriculture and Agribusiness provide 54% of employment to the Indian Population. The recent spurt in full-time MBA specialization in the Agri-Business Management program offers a focus on the development of Agri-managerial skills, in the curriculum. The program aims at enabling meritorious agricultural graduates to acquire the critical competencies to function as effective Agri-business managers.",
      mobileImage: "/school-of-law/law/business-commercial-law.png",
      image: "/school-of-law/law/business-commercial-law.png",
    },
    {
      title: "Law of Evidence",
      text: "This subject focuses on evidentiary principles such as admissibility, relevance, burden of proof, and witness examination. Students develop an understanding of how facts are established in court and how evidence influences judicial decision-making in legal proceedings.",
      mobileImage: "/school-of-law/law/law-of-evidence.png",
      image: "/school-of-law/law/law-of-evidence.png",
    },
    {
      title: "Corporate & Business Law",
      text: "Corporate & Business Law introduces legal frameworks governing companies, corporate governance, compliance, and regulatory practices. Students gain insight into mergers, acquisitions, business regulations, and the role of legal professionals in corporate advisory and compliance management.",
      mobileImage: "/school-of-law/law/corporate-company-law.png",
      image: "/school-of-law/law/corporate-company-law.png",
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
        <span className="text-gray-800">Domains</span>
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

              <h3 className="text-2xl font-semibold mb-3 text-orange-500 capitalize">
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