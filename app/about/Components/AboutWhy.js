"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

function AboutWhy() {
  const cards = [
    { image: "/graduate-school-of-business-v2/mba/choosemba1.png" },
    { image: "/graduate-school-of-business-v2/mba/choosemba2.png" },
    { image: "/graduate-school-of-business-v2/mba/tulasstat1.png" }, // duplicate for smooth loop
    { image: "/graduate-school-of-business-v2/mba/tulasstat2.png" },
    { image: "/graduate-school-of-business-v2/mba/tulasstat3.png" },
    { image: "/graduate-school-of-business-v2/mba/tulasstat4.png" },

  ];

  return (
    <section className="py-10 bg-[#ffff]">
                <h3 className="text-[clamp(38px,6vw,38px)] font-extrabold mb-3" style={{ textAlign: "center" }}>
          <span className="text-orange-500">Shape Your</span>{" "}
          <span className="text-gray-800">Future at Tulas</span>
        </h3>
      <div className="max-w-7xl mx-auto px-4 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-orange-500">Shape Your</span>{" "}
            <span className="text-gray-900">Future at Tulas</span>
          </h2> */}

          <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
            Tulas University, established in 2006 under the Rishabh Educational Trust, has built a strong reputation for delivering quality education with a future-focused approach. Backed by UGC recognition and NAAC A+ accreditation, the university maintains high academic standards while continuously evolving to meet the demands of a changing world.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
           At Tulas, education goes beyond traditional learning. With a modern, industry-aligned curriculum, integration of emerging technologies, and a strong emphasis on innovation and practical exposure, students are equipped with the skills, mindset, and confidence needed to succeed across diverse career paths. From academic excellence to career readiness, every aspect of the Tulas experience is designed to prepare students not just for their first job but for long-term growth, adaptability, and leadership in an ever-evolving professional landscape.
          </p>
        </div>

    

      </div>
    </section>
  );
}

export default AboutWhy;