"use client";
import { useState } from "react";
import Image from "next/image";

export default function BbaLandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Marketing",
      text: "Understand how organisations identify customer needs and build market presence. Learn consumer behaviour, market research, product development and brand strategy. Develop the ability to plan, execute and evaluate marketing activities, enabling you to understand how businesses position themselves and compete in dynamic market environments.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
    },
    {
      title: "Digital Marketing",
      text: "Develop an understanding of digital platforms, social media, content strategies and online consumer engagement. Learn how businesses use digital channels for communication, campaign planning and performance evaluation. Gain exposure to evolving digital trends and tools that support brand visibility and customer interaction in the digital ecosystem.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
    },
    {
      title: "Finance",
      text: "Build a strong foundation in financial management, corporate finance and investment analysis. Learn budgeting, financial planning, capital allocation and risk assessment. Develop the ability to interpret financial data, evaluate performance and support informed decision-making within organisations and financial environments.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
    },
    {
      title: "International Business",
      text: "Understand how businesses operate in global markets and cross-border environments. Learn international trade practices, global business strategies and cultural dynamics. Develop awareness of global economic trends and business practices, preparing you to work in multinational organisations and diverse business settings.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
    },
    {
      title: "Business Analytics",
      text: "Develop the ability to analyse, interpret and use data for effective business decision-making. Learn basic analytical tools, reporting techniques and data-driven approaches. Understand how organisations use data insights to improve performance, identify trends and support strategic planning across business functions.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
      image: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
    },
    {
      title: "Human Resource Management",
      text: "Understand how organisations manage people, performance and workplace dynamics. Learn recruitment, training, performance management and employee engagement. Develop the ability to align human resources with organisational goals, supporting productivity, team effectiveness and overall business growth.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop1.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop1.jpg",
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