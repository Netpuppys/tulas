"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Pharmaceutical Chemistry",
      text: "Understand the chemical composition, structure and properties of drug molecules. Learn how medicines are designed, synthesised and evaluated using principles of organic, inorganic and medicinal chemistry. Develop the ability to analyse chemical behaviour and stability of drugs, forming a strong foundation for drug discovery, formulation and quality assessment in pharmaceutical industries.",
      mobileImage: "/btechimage/btechspecial.jpg",
      image: "/btechimage/btechspecial.jpg",
    },
    {
      title: `Pharmaceutics`,
      text: "Learn how medicines are formulated, developed and delivered in various dosage forms such as tablets, capsules, syrups and injectables. Understand drug delivery systems, formulation techniques and manufacturing processes. Gain practical exposure to formulation development and production methods used in pharmaceutical industries to ensure safety, stability and effectiveness of medicines.",
      mobileImage: "/btechimage/btechspecial1.jpg",
      image: "/btechimage/btechspecial1.jpg",
    },
    {
      title: "Pharmacology",
      text: "Study how drugs interact with the human body and produce therapeutic effects. Learn about drug mechanisms, dosage, side effects and toxicity. Develop an understanding of how medicines are used in the treatment of diseases, ensuring safe and effective use of drugs in clinical and healthcare settings.",
      mobileImage: "/btechimage/btechspecial2.jpg",
      image: "/btechimage/btechspecial2.jpg",
    },
    {
      title: "Pharmaceutical Analysis",
      text: "Gain knowledge of analytical techniques used to test the quality, purity and safety of pharmaceutical products. Learn laboratory methods, instrumentation and regulatory standards used in drug testing. Develop the ability to evaluate medicines and ensure they meet required quality and compliance standards.",
      mobileImage: "/btechimage/btechspecial3.jpg",
      image: "/btechimage/btechspecial3.jpg",
    },
    {
      title: `Pharmacognosy`,
      text: "Understand drugs derived from natural sources such as plants, herbs and marine organisms. Learn extraction, identification and evaluation of natural compounds used in medicine. Develop knowledge of traditional and modern applications of natural products in pharmaceutical and healthcare practices.",
      mobileImage: "/btechimage/btechspecial4.jpg",
      image: "/btechimage/btechspecial4.jpg",
    },
    {
      title: `Pharmaceutical Jurisprudence`,
      text: "Study the legal, ethical and regulatory framework governing the pharmaceutical industry. Learn about drug laws, quality standards, licensing and compliance requirements. Develop awareness of professional responsibilities and regulations involved in manufacturing, distribution and sale of pharmaceutical products.",
      mobileImage: "/btechimage/btechspecial5.jpg",
      image: "/btechimage/btechspecial5.jpg",
    },
        {
      title: `Clinical Pharmacy & Drug Safety`,
      text: "Develop an understanding of patient care, drug usage and safety monitoring. Learn how medicines are prescribed, dispensed and reviewed in clinical settings. Gain insights into pharmacovigilance, drug interactions and patient counselling to ensure safe and effective healthcare practices.",
      mobileImage: "/btechimage/btechspecial6.jpg",
      image: "/btechimage/btechspecial6.jpg",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">

      {/* Heading */}
      <h2 className="text-center text-[clamp(38px,5vw,38px)] font-extrabold mb-10">
        <span className="text-orange-500">Specialisations</span>{" "}
        <span className="text-gray-800">We Offer</span>
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
              className="rounded-lg mb-4 w-full h-[220px] object-cover"
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