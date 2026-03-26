"use client";
import { useState } from "react";
import Image from "next/image";

export default function LandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    // {
    //   title: "Advanced Programming & Data Structures",
    //   text: "Develop advanced programming skills using structured approaches to data structures and algorithms. Learn to apply logical thinking and problem-solving techniques to design efficient solutions for complex computing challenges. This domain builds a strong foundation for software development and helps students understand how scalable applications are developed and optimised in real-world environments.",
    //   mobileImage: "/bcaimage/bcaimg.png",
    //   image: "/bcaimage/bcaimg.png",
    // },
    // {
    //   title: `Database Management Systems`,
    //   text: "Gain in-depth understanding of database design, data modelling and management systems. Learn to organise, store and retrieve data efficiently using structured query techniques. Develop the ability to work with large datasets and understand how databases support application development and business systems in practical environments.",
    //   mobileImage: "/bcaimage/bcaimg1.png",
    //   image: "/bcaimage/bcaimg1.png",
    // },
    // {
    //   title: "Software Engineering",
    //   text: "Understand the complete software development lifecycle, including requirement analysis, system design, development, testing and maintenance. Learn structured methodologies and best practices used in the industry to build reliable and efficient software systems. This domain helps students develop a systematic approach to software development and project execution.",
    //   mobileImage: "/bcaimage/bcaimg2.png",
    //   image: "/bcaimage/bcaimg2.png",
    // },
    // {
    //   title: "Web Technologies & Application Development",
    //   text: "Develop knowledge of web technologies used to design and build modern applications. Learn how front-end and back-end systems work together to create functional and user-friendly web platforms. Gain practical exposure to application development processes used across industries.",
    //   mobileImage: "/bcaimage/bcaimg3.png",
    //   image: "/bcaimage/bcaimg3.png",
    // },
    // {
    //   title: `Computer Networks`,
    //   text: "Understand the fundamentals of network architecture, communication protocols and system connectivity. Learn how data is transmitted across networks and how systems interact in connected environments. Develop a foundational understanding of networking concepts used in modern computing systems.",
    //   mobileImage: "/bcaimage/bcaimg4.png",
    //   image: "/bcaimage/bcaimg4.png",
    // },
    // {
    //   title: `Operating Systems`,
    //   text: "Gain understanding of how computer systems function at a system level. Learn about process management, memory handling and system operations that support application performance. This domain helps students understand the interaction between hardware and software in computing environments.",
    //   mobileImage: "/bcaimage/bcaimg5.png",
    //   image: "/bcaimage/bcaimg5.png",
    // },
    // {
    //   title: `Application Architecture & System Design`,
    //   text: "Learn to design and structure complete software systems by integrating multiple technologies. Understand application architecture, system components and scalability considerations required to build efficient and reliable software solutions in real-world scenarios.",
    //   mobileImage: "/bcaimage/bcaimg6.png",
    //   image: "/bcaimage/bcaimg6.png",
    // },
        {
      title: `Full Stack Software Development (AI Integrated)`,
      // subitle: "Connect the World Through Technology",
      text: "This specialisation focuses on developing advanced expertise in full stack software engineering with AI integrated across application architecture. The curriculum covers advanced front-end and back-end frameworks, system design, scalable architectures, cloud deployment and software engineering practices, along with AI-driven application development and automation. Students learn to design, optimise and deploy intelligent, scalable systems. Work on complex applications, APIs and AI-integrated solutions aligned with industry-level development practices.",
      mobileImage: "/bcaimage/bcaimg.png",
      image: "/bcaimage/bcaimg.png",
    },
        {
      title: `Artificial Intelligence & Machine Learning (AI & ML) `,
      // subitle: "Connect the World Through Technology",
      text: "This specialisation focuses on developing advanced knowledge and application of artificial intelligence and machine learning for complex problem-solving. The curriculum covers advanced machine learning algorithms, deep learning, data modelling, optimisation techniques and AI system development. Students work on large datasets, build high-performance models and understand real-world AI deployment. Develop the ability to design intelligent systems and deliver data-driven solutions across domains.",
      mobileImage: "/bcaimage/bcaimg3.png",
      image: "/bcaimage/bcaimg3.png",
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