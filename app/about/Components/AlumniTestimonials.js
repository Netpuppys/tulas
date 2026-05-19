"use client";

import React from "react";
import Image from "next/image";

const alumni = [
  {
    image: null, // replace with: import rahul from "../../../public/Alumni/rahul.png"
    avatar: null,
    name: "Rahul Malhotra",
    batch: "Class of 2018 - B.Tech CSE",
    company: "Software Engineer at Google",
    quote:
      "Tulas gave me the technical foundation and confidence to pursue my dreams. The faculty's guidance and industry exposure prepared me perfectly for my career at one of the world's leading tech companies.",
  },
  {
    image: null,
    avatar: null,
    name: "Priyanka Sharma",
    batch: "Class of 2019 - MBA",
    company: "Senior Manager at Deloitte",
    quote:
      "The management program at Tulas equipped me with strategic thinking and leadership skills. The internships and live projects gave me real-world experience that set me apart in the corporate world.",
  },
  {
    image: null,
    avatar: null,
    name: "Amit Kumar",
    batch: "Class of 2017 - B.Tech ME",
    company: "Product Lead at Mahindra",
    quote:
      "Tulas fostered my passion for innovation. The research facilities and mentorship from experienced faculty members helped me develop the skills needed to work on cutting-edge automotive technology.",
  },
  {
    image: null,
    avatar: null,
    name: "Neha Agarwal",
    batch: "Class of 2020 - B.Pharma",
    company: "Research Scientist at Pfizer",
    quote:
      "The pharmaceutical program's emphasis on research and practical training prepared me excellently for my career in drug development. I'm proud to be contributing to global healthcare innovations.",
  },
  {
    image: null,
    avatar: null,
    name: "Vikram Singh",
    batch: "Class of 2016 - Agriculture",
    company: "Founder, AgriTech Startup",
    quote:
      "Tulas' agriculture program combined traditional knowledge with modern technology. The entrepreneurship support helped me launch my own agritech venture, now serving thousands of farmers.",
  },
  {
    image: null,
    avatar: null,
    name: "Ananya Kapoor",
    batch: "Class of 2021 - B.Tech ECE",
    company: "AI Engineer at Microsoft",
    quote:
      "The comprehensive curriculum and hands-on projects in AI and machine learning at Tulas gave me a competitive edge. I landed my dream job straight out of campus with an amazing package.",
  },
];

const AlumniTestimonials = () => {
  return (
    <div className="w-full bg-white py-14 md:py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-bold text-[clamp(28px,4vw,45px)] leading-tight">
          <span className="text-[#E07820]">Alumni </span>
          <span className="text-[#1a1a1a]">Testimonials</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_0_rgba(0,0,0,0.09)] hover:shadow-[0_6px_28px_0_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Large Image Area */}
            <div className="w-full aspect-[4/3] bg-[#cacdd2] relative overflow-hidden flex-shrink-0">
              {person.image && (
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              )}
            </div>

            {/* Card Content */}
            <div className="px-5 py-4 flex flex-col gap-2">
              {/* Avatar + Name + Batch */}
              <div className="flex items-center gap-3">
                {/* Avatar Circle */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#cacdd2] border-2 border-[#b0b4ba] overflow-hidden relative">
                  {person.avatar && (
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>
                {/* Name + Batch */}
                <div>
                  <h3 className="font-bold text-[#1a1a1a] text-[clamp(13px,1.1vw,17px)] leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-gray-400 text-[clamp(10px,0.8vw,13px)] leading-tight">
                    {person.batch}
                  </p>
                </div>
              </div>

              {/* Company / Role */}
              <p className="text-[#E07820] font-semibold text-[clamp(11px,0.9vw,14px)]">
                {person.company}
              </p>

              {/* Quote */}
              <p className="text-gray-500 text-[clamp(11px,0.85vw,14px)] leading-relaxed">
                &ldquo;{person.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTestimonials;
