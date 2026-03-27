"use client";

import { useState } from "react";
import Image from "next/image";

const data = {
  ug: {
    tabs: ["B Tech", "BBA", "BCA"],
    courses: {
      "B Tech": [
        {
          title: "Civil Engineering",
          img: "/courses/civil.jpg",
          desc: "Learn to design and build infrastructure",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
        {
          title: "Computer Science",
          img: "/courses/cs.jpg",
          desc: "Create software & solve real-world problems",
        },
      ],
      BBA: [
        {
          title: "Business Admin",
          img: "/courses/bba.jpg",
          desc: "Master business fundamentals",
        },
      ],
      BCA: [
        {
          title: "Computer Applications",
          img: "/courses/bca.jpg",
          desc: "Build IT & software skills",
        },
      ],
    },
  },
  pg: {
    tabs: ["MBA", "MCA"],
    courses: {
      MBA: [
        {
          title: "Finance",
          img: "/courses/mba.jpg",
          desc: "Advanced financial strategies",
        },
      ],
      MCA: [
        {
          title: "Software Dev",
          img: "/courses/mca.jpg",
          desc: "Advanced programming skills",
        },
      ],
    },
  },
};

export default function LandingProgramsSection() {
  const [activeMain, setActiveMain] = useState("ug");
  const [activeSub, setActiveSub] = useState(data.ug.tabs[0]);

  const current = data[activeMain];

  return (
    <section className="w-full bg-[#fbf4ee] py-10 flex justify-center">
      <div className="max-w-6xl w-full px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          <span className="text-orange-500">Programs</span>{" "}
          <span className="text-gray-800">Offered</span>
        </h2>

        {/* MAIN TABS */}
        <div className="flex justify-center gap-4 mb-6">
          {["ug", "pg"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveMain(item);
                setActiveSub(data[item].tabs[0]);
              }}
              className={`px-5 py-2 rounded font-medium transition ${
                activeMain === item
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800"
              }`}
            >
              {item === "ug" ? "Undergraduate" : "Post Graduate"}
            </button>
          ))}
        </div>

        {/* SUB TABS */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {current.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSub(tab)}
              className={`px-4 py-2 rounded whitespace-nowrap transition ${
                activeSub === tab
                  ? "bg-white border border-orange-500 text-orange-500"
                  : "bg-gray-800 text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {current.courses[activeSub].map((course, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0"
            >
              {/* Image */}
              <div className="relative w-full h-[140px] rounded-xl overflow-hidden mb-3">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-orange-500 mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {course.desc}
              </p>

              {/* Meta */}
              <div className="text-xs text-gray-500 mb-3">
                <p>Eligibility: 10+2</p>
                <p>Duration: 4 years</p>
              </div>

              {/* Button */}
              <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                Explore Programme
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}