"use client";
import { useState } from "react";
import Image from "next/image";

export default function Bballbcoredomain() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Corporate & Company Law",
      text: "This domain provides a comprehensive understanding of corporate law, focusing on the incorporation, management, and governance of companies under the Companies Act. Students study corporate structures, board composition, shareholder rights, and corporate governance practices. The subject also covers regulatory compliance, legal frameworks, and statutory obligations, helping students understand how businesses operate within a structured legal environment.",
      mobileImage: "/school-of-law/law/corporate-company-law.png",
      image: "/school-of-law/law/corporate-company-law.png",
    },
    {
      title: "Business & Commercial Law",
      text: "Business & Commercial Law focuses on the legal aspects of business transactions and commercial relationships. Students explore contract law, partnership law, and commercial agreements, gaining insight into drafting, negotiation, and enforcement of contracts. The domain emphasises legal risk management, dispute resolution, and the application of commercial law in real-world business scenarios.",
      mobileImage: "/school-of-law/law/business-commercial-law.png",
      image: "/school-of-law/law/business-commercial-law.png",
    },
    {
      title: "Financial & Banking Law",
      text: "This domain introduces the legal and regulatory framework governing banking systems, financial institutions, and capital markets. Students study banking laws, financial regulations, securities law, and compliance requirements. Key areas include risk management, financial compliance, and the role of regulatory authorities, enabling students to understand the legal aspects of the financial sector.",
      mobileImage: "/school-of-law/law/financial-banking-law.png",
      image: "/school-of-law/law/financial-banking-law.png",
    },
    {
      title: "Mergers, Acquisitions & Corporate Restructuring",
      text: "This domain explores the legal and strategic aspects of mergers and acquisitions (M&A), corporate restructuring, and business consolidation. Students learn about due diligence, transaction structuring, valuation, and regulatory approvals. The subject also covers takeover laws, corporate restructuring strategies, and compliance requirements involved in large-scale business transactions.",
      mobileImage: "/school-of-law/law/corporate-company-law-opt.png",
      image: "/school-of-law/law/corporate-company-law-opt.png",
    },
        {
      title: "Intellectual Property Rights (IPR)",
      text: "This domain focuses on the protection and management of intellectual property, including patents, trademarks, copyrights, and trade secrets. Students understand intellectual property law, registration processes, licensing, and enforcement of rights. The subject highlights the role of IPR in innovation, branding, and competitive business strategy in a knowledge-driven economy.",
      mobileImage: "/school-of-law/law/corporate-business-law.png",
      image: "/school-of-law/law/corporate-business-law.png",
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
        <span className="text-gray-800">Legal Domains</span>
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