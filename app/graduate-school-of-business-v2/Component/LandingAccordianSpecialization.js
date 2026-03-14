"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Marketing",
      subitle: "Drive demand & deliver growth",
      text: "Master brand strategy, consumer behaviour and market intelligence. Learn how to position products, scale businesses and drive measurable growth across competitive markets.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
    {
      title: "Human Resource Management (HRM)",
      subitle: "Build high-performance teams",
      text: "Learn to build high-performance teams, manage talent strategy and shape organisational culture. Ideal for future leaders in people strategy and workforce transformation.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
    {
      title: "Digital Marketing",
      subitle: "Engineer growth for digital economy",
      text: "Build expertise in performance marketing, social media strategy, SEO, analytics and digital brand management. Designed for leaders who want to dominate the digital economy.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
        {
      title: "International Business",
      subitle: "Lead across global markets",
      text: "Understand global trade, cross-border strategy and international market dynamics. Prepare to manage business operations in a globally interconnected environment.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
        {
      title: "Finance",
      subitle: "Power growth with financial insight",
      text: "Develop strong financial acumen in investment analysis, risk management, corporate finance and strategic decision-making. Built for those who aim to lead financial growth and governance.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
          {
      title: "Business Analytics",
      subitle: "Turn data into decisions",
      text: "Combine data, technology and strategy to drive smarter business decisions. Gain expertise in data interpretation, predictive analysis and evidence-based leadership.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">

      {/* Heading */}
      <h2 className="text-center text-[clamp(38px,5vw,38px)] font-extrabold mb-8">
        <span className="text-orange-500">Specialisations</span>{" "}
        <span className="text-gray-800">We Offer</span>
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm"
          >

            {/* Accordion Button */}
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center text-black font-semibold text-lg"
            >
              {item.title}
              <span className="text-xxl text-orange-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Smooth Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 border-t">

                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-4 w-full h-auto hidden md:block"
                    /> */}

                    {/* Mobile Image */}
                    <Image
                    src={item.mobileImage}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-4 w-full h-auto block md:hidden"
                    />

                  <h3 className="text-xl font-semibold mb-2 text-orange-500">
                    {item.subitle}
                  </h3>

                  <p className="text-gray-600">
                    {item.text}
                  </p>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}