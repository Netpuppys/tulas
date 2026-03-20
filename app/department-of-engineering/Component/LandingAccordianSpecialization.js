"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Civil Engineering (CE)",
      subitle: "Build the foundations of tomorrow",
      text: "Design and build the infrastructure that powers cities and communities. Develop expertise in structural design, construction management and sustainable development to lead large-scale projects with precision.",
      mobileImage: "/btechimage/btechspecial.jpg",
      image: "/btechimage/btechspecial.jpg",
    },
    {
      title: `Computer Science & Engineering (CSE)`,
      subitle: "Create technology powering digital world",
      text: "Step into the world of computing, software development, and advanced technologies. The programme focuses on programming, system architecture, and emerging technologies, enabling students to design scalable digital solutions and build careers in software, product development, and technology innovation.",
      mobileImage: "/btechimage/btechspecial1.jpg",
      image: "/btechimage/btechspecial1.jpg",
    },
    {
      title: "Data Science",
      subitle: "Turn data into futuristic decisions",
      text: "Learn to turn complex data into meaningful insights that drive decision-making. The programme covers data analytics, machine learning, visualization, and statistical modelling, equipping students to solve real-world problems across industries such as technology, finance, healthcare, and business.",
      mobileImage: "/btechimage/btechspecial2.jpg",
      image: "/btechimage/btechspecial2.jpg",
    },
    {
      title: "Cyber Security",
      subitle: "Secure the Digital World",
      text: "As digital systems expand, protecting data and networks has become critical. This programme provides practical knowledge in ethical hacking, network security, digital forensics, and cyber defence strategies to prepare students for roles that safeguard digital infrastructure and information systems.",
      mobileImage: "/btechimage/btechspecial3.jpg",
      image: "/btechimage/btechspecial3.jpg",
    },
    {
      title: `Artificial Intelligence & Machine Learning (AI & ML)`,
      subitle: "Build Machines that Think",
      text: "Explore technologies that are shaping the future of automation and intelligent systems. The programme focuses on machine learning, deep learning, neural networks, and data-driven decision systems, enabling students to develop smart technologies used across industries.",
      mobileImage: "/btechimage/btechspecial4.jpg",
      image: "/btechimage/btechspecial4.jpg",
    },
    {
      title: `Electronics & Communication Engineering (ECE)`,
      subitle: "Connect the World Through Technology",
      text: "Build expertise in electronic systems, communication networks, and embedded technologies. The programme prepares students to work across telecommunications, consumer electronics, and emerging fields such as IoT and smart communication systems.",
      mobileImage: "/btechimage/btechspecial5.jpg",
      image: "/btechimage/btechspecial5.jpg",
    },
        {
      title: `Electrical & Electronics Engineering (EEE)`,
      subitle: "Power the Next Generation",
      text: "Gain a strong foundation in power systems, electrical machines, and modern energy technologies. Students learn to work with smart grids, automation systems, and industrial electrical solutions that power industries and infrastructure.",
      mobileImage: "/btechimage/btechspecial6.jpg",
      image: "/btechimage/btechspecial6.jpg",
    },
        {
      title: `Mechanical Engineering (ME)`,
      subitle: "Engineer the Machines of Tomorrow",
      text: "Develop the engineering principles that drive machines, manufacturing, and automation. The programme covers thermodynamics, design engineering, manufacturing processes, and robotics, preparing students for careers across automotive, production, aerospace, and industrial sectors.",
      mobileImage: "/btechimage/btechspecial7.jpg",
      image: "/btechimage/btechspecial7.jpg",
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