"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Advanced Crop Production & Agronomy",
      text: "This subject focuses on modern crop production techniques and agronomy practices, helping students understand cropping systems and yield optimisation across different agro-climatic conditions. It builds the foundation for sustainable agriculture while enabling students to improve productivity through scientific farming methods.",
      mobileImage: "/landingbanner/msc/advancedcrop1.png",
      image: "/landingbanner/msc/advancedcrop1.png",
    },
    {
      title: `Soil Fertility & Nutrient Management`,
      text: "Students gain in-depth knowledge of soil fertility, soil health, and nutrient management techniques essential for maintaining long-term agricultural sustainability. The subject covers fertiliser management and integrated approaches that support efficient crop growth and resource utilisation.",
      mobileImage: "/landingbanner/msc/soil.png",
      image: "/landingbanner/msc/soil.png",
    },
    {
      title: `Precision Farming & Smart Agriculture`,
      text: "This area introduces precision farming and smart agriculture practices using modern tools like GIS, remote sensing, and data-driven agriculture techniques. Students learn how technology can enhance farm efficiency, optimise inputs, and improve decision-making in modern agri-tech environments.",
      mobileImage: "/landingbanner/msc/precision.png",
      image: "/landingbanner/msc/precision.png",
    },
     {
      title: "Agrometeorology & Climate-Smart Agriculture",
      text: "Focusing on agrometeorology, this subject explores how weather and climate impact crop performance. Students are trained in climate-smart agriculture practices and climate resilience strategies to manage risks and ensure sustainable farming in changing environmental conditions.",
      mobileImage: "/landingbanner/msc/agrometeorology.png",
      image: "/landingbanner/msc/agrometeorology.png",
    },
    {
      title: "Research Methodology & Field Experimentation",
      text: "This subject develops strong capabilities in agricultural research through field experimentation, crop trials, and data analysis. Students learn how to design experiments and interpret results, preparing them for careers in research, consultancy, and innovation within the agricultural sector.",
      mobileImage: "/landingbanner/msc/research.png",
      image: "/landingbanner/msc/research.png",
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
                className="rounded-lg mb-5 w-full h-[360px] md:h-[320px] object-cover"
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