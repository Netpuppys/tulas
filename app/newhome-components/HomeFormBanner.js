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
    {
      title: "School Of Management",
      courses: [
        { name: "Bachelor in Business Administration (BBA)",                        href: "/courses/bba" },
        { name: "Bachelor in Business Administration (Digital Marketing)",           href: "/courses/bba" },
        { name: "Bachelor in Business Administration (Business Analytics)",          href: "/courses/bba" },
        { name: "Master in Business Administration (MBA)",                           href: "/courses/mba" },
        { name: "Master in Business Administration (Marketing)",                     href: "/courses/mba/marketing" },
        { name: "Master in Business Administration (Human Resource Management)",     href: "/courses/mba/human-resource-managment" },
        { name: "Master in Business Administration (International Business)",        href: "/courses/mba/international-business" },
        { name: "Master in Business Administration (Finance)",                       href: "/courses/mba/finance" },
        { name: "Master in Business Administration (Agri-Business Management)",      href: "/courses/mba/agri-business" },
        { name: "Master in Business Administration (Digital Marketing)",             href: "/courses/mba/digital-marketing" },
        { name: "Master in Business Administration (Business Analytics)",            href: "/courses/mba/business-analytics" },
      ],
    },
    {
      title: "Department Of Engineering",
      courses: [
        { name: "Civil Engineering (CE)",                                href: "/courses/btech/civil-engineering/" },
        { name: "Computer Science & Engineering (CSE)",                  href: "/courses/btech/computer-science" },
        { name: "Computer Science & Engineering (AI&ML)",                href: "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning" },
        { name: "Computer Science & Engineering (Cyber Security)",       href: "/courses/btech/computer-science-engineering-cyber-security" },
        { name: "Computer Science & Engineering (Data Science)",         href: "/courses/btech/computer-science-engineering-data-science" },
        { name: "Computer Science & Engineering (Fullstack Development)", href: "/courses/btech/computer-science" },
        { name: "Electronics & Communication Engineering (ECE)",         href: "/courses/btech/electronics-and-communication-engg" },
        { name: "Electrical & Electronics Engineering (EEE)",            href: "/courses/btech/electrical-and-electronics-engg/" },
        { name: "Mechanical Engineering (ME)",                           href: "/courses/btech/mechanical-engineering/" },
        { name: "Master of Technology (M.Tech)",                         href: "/mtech" },
        { name: "Diploma in Civil Engineering",                          href: "/diploma-in-civil-engineering" },
        { name: "Diploma in Mechanical Engineering",                     href: "/diploma-mechanical-engineering" },
        { name: "Diploma in Computer Science Engineering",               href: "/diploma-computer-science-engineering" },
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
        { name: "Bachelor in Computer Applications (BCA)",                              href: "/courses/bca/" },
        { name: "Bachelor in Computer Applications (Full Stack Software Development)",  href: "/courses/bca/" },
        { name: "Bachelor in Computer Applications (AI & ML)",                          href: "/courses/bca/" },
        { name: "Masters in Computer Applications (MCA)",                               href: "/courses/mca" },
        { name: "Masters in Computer Applications (Full Stack Software Development)",   href: "/courses/mca" },
        { name: "Masters in Computer Applications (AI & ML)",                           href: "/courses/mca" },
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

                  {/* DROPDOWN */}
                  {openIndex === index && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl p-4 text-sm space-y-2 shadow-xl border z-50">
                      {dept.courses.map((course, i) => (
                        <Link
                          key={i}
                          href={course.href}
                          className="block hover:text-orange-600 text-black transition font-medium"
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
