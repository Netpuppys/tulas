"use client";

import React, { useState, useContext } from "react";
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";
import { IoChevronDown } from "react-icons/io5";

function HomeFormBanner() {
  const { utmParams } = useContext(UtmContext);
  const [openIndex, setOpenIndex] = useState(null);

  const departments = [
    {
      title: "School Of Management",
      courses: ["Bachelor in Business Administration (BBA)", "Master in Business Administration (MBA)"],
    },
    {
      title: "Department Of Engineering",
      courses: ["Civil Engineering", "Computer Science & Engineering (CSE)", "Computer Science & Engineering (AI&ML) ", "Computer Science & Engineering ( Cyber Security)", "Computer Science & Engineering ( Data Science)", "Electronics & Communication Engineering (ECE)", "Electrical & Electronics Engineering (EEE)", "Mechanical Engineering (ME)"],
    },
    {
      title: "Department Of Commerce",
      courses: ["Bachelor in Commerce", "Bachelor in Commerce (Hons.)"],
    },
    {
      title: "Department Of Computer Applications",
      courses: ["Bachelor in Computer Applications (BCA)", "Masters in Computer Applications (MCA)"],
    },
    {
      title: "Department Of Mass Comm. & Journalism",
      courses: ["BAJMC", "BA (Hons.) JMC"],
    },
    {
      title: "Department Of Pharmacy",
      courses: ["Bachelor in Pharmacy", "Diploma in Pharmacy"],
    },
  ];

  return (
    <section className="w-full py-6 flex justify-center mt-12">
    <div className="w-full max-w-8xl mx-auto grid md:grid-cols-[60%_40%] gap-6 px-4">
        {/* LEFT SIDE */}
        <div className="bg-[#d9d9d9] rounded-[28px] p-8 md:p-10">

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            <span className="text-orange-600">UNLOCK</span>
            <br />
            <span className="text-gray-900 font-medium">YOUR POTENTIAL</span>
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept, index) => {
  const words = dept.title.split(" ");

  return (
    <div key={index} className="relative">
      
      {/* BUTTON */}
      <button
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
        className="w-full bg-[#eeeeee] hover:bg-white transition-all duration-200 rounded-xl px-5 py-3 flex justify-between text-sm md:text-[18px] font-semibold text-gray-800 shadow-sm"
      >
        <span className="text-left leading-snug">
          {words.map((word, idx) => (
            <span key={idx}>
              {word}
              {idx === 0 && <br />}
              {idx !== words.length - 1 && " "}
            </span>
          ))}
        </span>

        <IoChevronDown
          className={`text-orange-600 text-2xl md:text-3xl transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {openIndex === index && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl p-4 text-sm space-y-2 shadow-xl border z-50">
          {dept.courses.map((course, i) => (
            <div
              key={i}
              className="hover:text-orange-600 text-black cursor-pointer transition font-medium"
            >
              {course}
            </div>
          ))}
        </div>
      )}

    </div>
  );
})}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full">
          <div className="">
            <LandingFormNew
              formHeading={"Start Your Tulas Application"}
              thankYOu={`/admissions-open/thank-you/${utmParams}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeFormBanner;