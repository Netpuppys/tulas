"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Programming & Data Structures",
      // subitle: "Build the foundations of tomorrow",
      text: "Build a strong foundation in programming through languages and structured problem-solving approaches. Learn data structures, algorithms and logic development to write efficient and scalable code. Develop the ability to solve real-world problems by designing optimised solutions, which forms the core of software development and technical decision-making.",
      mobileImage: "/bcaimage/bcaimg.png",
      image: "/bcaimage/bcaimg.png",
    },
    {
      title: `Database Management Systems`,
      // subitle: "Create technology powering digital world",
      text: "Understand how data is stored, organised and managed within applications. Learn database design, SQL and data handling techniques used in real-world systems. Develop the ability to create, manage and retrieve structured data efficiently, supporting application development and business decision-making processes.",
      mobileImage: "/bcaimage/bcaimg1.png",
      image: "/bcaimage/bcaimg1.png",
    },
    {
      title: "Web Development",
      // subitle: "Turn data into futuristic decisions",
      text: "Learn to design and develop responsive websites and web applications. Gain exposure to front-end and back-end technologies, user interface design and application functionality. Develop practical skills to build interactive, user-friendly and scalable web platforms used across industries.",
      mobileImage: "/bcaimage/bcaimg2.png",
      image: "/bcaimage/bcaimg2.png",
    },
    {
      title: "Software Engineering",
      // subitle: "Secure the Digital World",
      text: "Understand the complete software development lifecycle, including planning, design, development, testing and maintenance. Learn structured methodologies and best practices to build reliable and efficient software systems. Develop the ability to manage software projects and deliver quality solutions.",
      mobileImage: "/bcaimage/bcaimg3.png",
      image: "/bcaimage/bcaimg3.png",
    },
    {
      title: `Computer Networks`,
      // subitle: "Build Machines that Think",
      text: "Gain knowledge of networking concepts, communication protocols and system connectivity. Understand how computers and devices interact, share data and function across networks. Develop a foundational understanding of network architecture and security in digital environments.",
      mobileImage: "/bcaimage/bcaimg4.png",
      image: "/bcaimage/bcaimg4.png",
    },
    {
      title: `Operating Systems`,
      // subitle: "Connect the World Through Technology",
      text: "Understand how computer systems function at a fundamental level. Learn about process management, memory management, file systems and system operations. Develop the ability to work with and optimise system-level performance that supports software applications.",
      mobileImage: "/bcaimage/bcaimg5.png",
      image: "/bcaimage/bcaimg5.png",
    },
    {
      title: `Application Development`,
      // subitle: "Connect the World Through Technology",
      text: "Build practical skills in designing and developing software applications. Work on real-world projects to create functional programs and systems. Develop hands-on experience in integrating multiple technologies to build complete, usable and efficient applications.",
      mobileImage: "/bcaimage/bcaimg6.png",
      image: "/bcaimage/bcaimg6.png",
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
        <span className="text-gray-800">Technical Domains</span>
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
                height={500}
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