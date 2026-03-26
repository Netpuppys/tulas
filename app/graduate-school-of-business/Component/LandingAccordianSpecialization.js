"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Marketing",
      subitle: "Drive demand & deliver growth",
      text: "Master brand strategy, consumer behaviour and market intelligence. Learn how to position products, scale businesses and drive measurable growth across competitive markets.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop.jpg",
    },
    {
      title: "Human Resource Management (HRM)",
      subitle: "Build high-performance teams",
      text: "Learn to build high-performance teams, manage talent strategy and shape organisational culture.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop1.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop1.jpg",
    },
    {
      title: "International Business (IB)",
      subitle: "Lead across global markets",
      text: "Understand global trade, cross-border strategy and international market dynamics.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop3.jpg",
    },
    {
      title: "Finance",
      subitle: "Power growth with financial insight",
      text: "Develop strong financial acumen in investment analysis, risk management and corporate finance.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
      image: "/graduate-school-of-business-v2/mba/specialdesktop4.png",
    },
        {
      title: "Agri-Business Management",
      text: "The backbone of the Indian Economy - Agriculture and Agribusiness provide 54% of employment to the Indian Population. The recent spurt in full-time MBA specialization in the Agri-Business Management program offers a focus on the development of Agri-managerial skills, in the curriculum. The program aims at enabling meritorious agricultural graduates to acquire the critical competencies to function as effective Agri-business managers.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop5jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
    },
    {
      title: "Digital Marketing (AI Integrated)",
      subitle: "Engineer growth for digital economy",
      text: "Build expertise in performance marketing, social media strategy, SEO, analytics and digital brand management.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop2.jpg",
    },
    {
      title: "Business Analytics (AI Integrated)",
      subitle: "Turn data into decisions",
      text: "Combine data, technology and strategy to drive smarter business decisions.",
      mobileImage: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
      image: "/graduate-school-of-business-v2/mba/specialdesktop5.jpg",
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