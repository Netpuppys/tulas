"use client";
import { useState } from "react";
import Image from "next/image";

export default function BcomLandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Financial Accounting",
      text: "Understand how businesses record, organise and interpret financial transactions. Learn to prepare financial statements, analyse performance and ensure accuracy in reporting. Build a strong foundation in accounting principles that support decision-making, compliance and transparency across organisations.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop.png",
      image: "/graduate-school-of-business/bcom/specialdesktop.png",
    },
    {
      title: "Corporate Finance",
      text: "Learn how companies manage money, investments and financial risks. Develop skills in financial planning, capital budgeting, valuation and strategic decision-making. Understand how organisations allocate resources efficiently to maximise profitability and ensure long-term financial stability.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop1.png",
      image: "/graduate-school-of-business/bcom/specialdesktop1.png",
    },
    {
      title: "Taxation",
      text: "Gain practical knowledge of direct and indirect taxation systems, including income tax, GST and regulatory compliance. Learn tax planning, filing procedures and legal frameworks, enabling you to understand how taxation impacts businesses and individuals in real-world financial environments.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop2.png",
      image: "/graduate-school-of-business/bcom/specialdesktop2.png",
    },
    {
      title: "Business Law",
      text: "Understand the legal environment in which businesses operate. Study contracts, corporate laws, regulatory frameworks and compliance requirements. Build awareness of legal responsibilities and decision-making, ensuring ethical and lawful business practices across different organisational and commercial scenarios.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop3.png",
      image: "/graduate-school-of-business/bcom/specialdesktop3.png",
    },
    {
      title: "Economics",
      text: "Explore how markets function and how economic forces influence business decisions. Learn about demand and supply, pricing, policies and economic trends. Develop analytical skills to interpret market behaviour and understand the broader financial and economic environment.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop4.png",
      image: "/graduate-school-of-business/bcom/specialdesktop4.png",
    },
    {
      title: "Business & Management",
      text: "Learn how organisations function, grow and sustain themselves. Understand management principles, organisational behaviour, operations and strategic planning. Build skills to analyse business situations, manage teams and contribute effectively to decision-making within dynamic corporate environments.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop5.png",
      image: "/graduate-school-of-business/bcom/specialdesktop5.png",
    },
    {
      title: `Advanced Financial Analysis (Hons.)`,
      text: "Develop deeper analytical skills to evaluate financial performance, investment opportunities and business strategies. Learn financial modelling, ratio analysis and forecasting techniques, enabling you to interpret complex financial data and support high-level decision-making in competitive business environments.",
      mobileImage: "/graduate-school-of-business/bcom/specialdesktop6.png",
      image: "/graduate-school-of-business/bcom/specialdesktop6.png",
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