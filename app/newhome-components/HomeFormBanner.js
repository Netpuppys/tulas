"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";
import { IoChevronDown } from "react-icons/io5";

function HomeFormBanner() {
  const { utmParams } = useContext(UtmContext);
  const [openIndex, setOpenIndex] = useState(null);

  const departments = [
    // {
    //   title: "School Of Management",
    //   courses: [
    //     { name: "Bachelor in Business Administration (BBA)",                        href: "/courses/bba" },
    //     { name: "Bachelor in Business Administration (Digital Marketing)",           href: "/courses/bba" },
    //     { name: "Bachelor in Business Administration (Business Analytics)",          href: "/courses/bba" },
    //     { name: "Master in Business Administration (MBA)",                           href: "/courses/mba" },
    //     { name: "Master in Business Administration (Marketing)",                     href: "/courses/mba/marketing" },
    //     { name: "Master in Business Administration (Human Resource Management)",     href: "/courses/mba/human-resource-managment" },
    //     { name: "Master in Business Administration (International Business)",        href: "/courses/mba/international-business" },
    //     { name: "Master in Business Administration (Finance)",                       href: "/courses/mba/finance" },
    //     { name: "Master in Business Administration (Agri-Business Management)",      href: "/courses/mba/agri-business" },
    //     { name: "Master in Business Administration (Digital Marketing)",             href: "/courses/mba/digital-marketing" },
    //     { name: "Master in Business Administration (Business Analytics)",            href: "/courses/mba/business-analytics" },
    //   ],
    // },
    {
  title: "School Of Management",
  courses: [
    { name: "BBA", href: "/courses/bba" },
    { name: "BBA in Digital Marketing", href: "/courses/bba" },
    { name: "BBA in Business Analytics", href: "/courses/bba" },

    { name: "MBA", href: "/courses/mba" },
    { name: "MBA in Marketing", href: "/courses/mba/marketing" },
    { name: "MBA in Human Resource Management", href: "/courses/mba/human-resource-managment" },
    { name: "MBA in International Business", href: "/courses/mba/international-business" },
    { name: "MBA in Finance", href: "/courses/mba/finance" },
    { name: "MBA in Agri-Business Management", href: "/courses/mba/agri-business" },
    { name: "MBA in Digital Marketing", href: "/courses/mba/digital-marketing" },
    { name: "MBA in Business Analytics", href: "/courses/mba/business-analytics" },
  ],
},
    {
  title: "Department Of Engineering",
  courses: [
    { name: "B.Tech CSE", href: "/courses/btech/computer-science" },
    { name: "B.Tech CSE in AI & ML", href: "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning" },
    { name: "B.Tech CSE in Cyber Security", href: "/courses/btech/computer-science-engineering-cyber-security" },
    { name: "B.Tech CSE in Data Science", href: "/courses/btech/computer-science-engineering-data-science" },
    { name: "B.Tech CSE in Full Stack Development", href: "/courses/btech/computer-science" },
    { name: "B.Tech ECE", href: "/courses/btech/electronics-and-communication-engg" },
    { name: "B.Tech EEE", href: "/courses/btech/electrical-and-electronics-engg/" },
    { name: "B.Tech Civil Engineering", href: "/courses/btech/civil-engineering/" },
    { name: "B.Tech Mechanical Engineering", href: "/courses/btech/mechanical-engineering/" },
    { name: "M.Tech", href: "/mtech" },
    { name: "Diploma in Civil Engineering", href: "/diploma-in-civil-engineering" },
    { name: "Diploma in Mechanical Engineering", href: "/diploma-mechanical-engineering" },
    { name: "Diploma in CSE", href: "/diploma-computer-science-engineering" },
  ],
},
    {
      title: "Department Of Commerce",
      courses: [
        { name: "Bachelor in Commerce (B.Com)",       href: "/courses/bcom/" },
        { name: "Bachelor in Commerce (Hons.)",       href: "/courses/bcom/" },
      ],
    },
    {
  title: "Department Of Computer Applications",
  courses: [
    { name: "BCA", href: "/courses/bca/" },
    { name: "BCA in Full Stack Software Development", href: "/courses/bca/" },
    { name: "BCA in AI & ML", href: "/courses/bca/" },

    { name: "MCA", href: "/courses/mca" },
    { name: "MCA in Full Stack Software Development", href: "/courses/mca" },
    { name: "MCA in AI & ML", href: "/courses/mca" },
  ],
},
    {
      title: "Department Of Mass Comm. & Journalism",
      courses: [
        { name: "BAJMC",          href: "/courses/bjmc/" },
        { name: "BA (Hons.) JMC", href: "/courses/bjmc/" },
      ],
    },
    {
      title: "Department Of Pharmacy",
      courses: [
        { name: "Bachelor in Pharmacy (B.Pharma)", href: "/courses/bpharma/" },
        { name: "Diploma in Pharmacy (D.Pharma)",  href: "/courses/dpharma" },
      ],
    },
    {
      title: "School of Law",
      courses: [
        { name: "LL.B (Bachelor of Legislative Law)", href: "/courses/llb/" },
        { name: "B.B.A LL.B (Hons.)",                href: "/courses/llb/" },
        { name: "B.A LL.B (Hons.)",                  href: "/courses/llb/" },
      ],
    },
    {
      title: "Department of Agriculture",
      courses: [
        { name: "B.Sc.(Hons.) Agriculture", href: "/b-sc-agriculture/" },
        { name: "M.Sc. Agronomy",           href: "/courses/msc-agronomy" },
      ],
    },
  ];

  return (
    <section className="w-full py-6 flex justify-center mt-2">
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
                    className="w-full bg-[#eeeeee] hover:bg-white transition-all duration-200 rounded-xl px-5 py-3 flex justify-between text-sm md:text-[16px] font-semibold text-gray-800 shadow-sm"
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

                 {openIndex === index && (
  <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl p-4 text-sm shadow-xl border z-50">
    {dept.courses.map((course, i) => (
      <Link
        key={i}
        href={course.href}
        className="block hover:text-orange-600 text-black transition font-medium py-2 border-b border-gray-100 last:border-b-0"
      >
        {course.name}
      </Link>
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
          <div className="" id="Homeform">
            <LandingFormNew
              formHeading={"Apply Now"}
              thankYOu={`/admissions-open/thank-you/${utmParams}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeFormBanner;
