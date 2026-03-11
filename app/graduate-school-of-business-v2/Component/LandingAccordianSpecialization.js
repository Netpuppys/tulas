"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Human Resource Management",
      text: "Comprehensive support and care during pregnancy with expert guidance and medical supervision.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
    {
      title: "International Business",
      text: "Helping new parents with newborn care, feeding guidance, and sleep routines.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
    {
      title: "Marketing",
      text: "Special programs designed for mothers to recover and regain strength after delivery.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
        {
      title: "Finance",
      text: "Special programs designed for mothers to recover and regain strength after delivery.",
      mobileImage: "/graduate-school-of-business-v2/mba/buisnessanys.png",
      image: "/graduate-school-of-business-v2/mba/testing.jpg",
    },
        {
      title: "Digital Marketing",
      text: "Special programs designed for mothers to recover and regain strength after delivery.",
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
      <h2 className="text-center text-[clamp(26px,5vw,38px)] font-medium mb-8">
        <span className="text-orange-500 font-semibold">Specializations</span>{" "}
        <span className="text-gray-800 font-light">We Offer</span>
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

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-4 w-full h-auto hidden md:block"
                    />

                    {/* Mobile Image */}
                    <Image
                    src={item.mobileImage}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-4 w-full h-auto block md:hidden"
                    />

                  <h3 className="text-xl font-semibold mb-2 text-orange-500">
                    {item.title}
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