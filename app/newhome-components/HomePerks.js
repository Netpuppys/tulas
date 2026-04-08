"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

function HomePerks() {
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
                <h3 className="text-[clamp(43px,6vw,42px)] font-extrabold mb-3" style={{ textAlign: "center" }}>
          <span className="text-orange-500">Shape Your</span>{" "}
          <span className="text-gray-800">Future at Tulas</span>
        </h3>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[55%_45%] gap-8 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-orange-500">Shape Your</span>{" "}
            <span className="text-gray-900">Future at Tulas</span>
          </h2> */}

          <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
            Tulas Institute, established in 2006 under the Rishabh Educational Trust, has built a strong reputation for delivering quality education with a future-focused approach. Backed by UGC recognition and NAAC A+ accreditation, the institute maintains high academic standards while continuously evolving to meet the demands of a changing world.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
           At Tulas, education goes beyond traditional learning. With a modern, industry-aligned curriculum, integration of emerging technologies, and a strong emphasis on innovation and practical exposure, students are equipped with the skills, mindset, and confidence needed to succeed across diverse career paths. From academic excellence to career readiness, every aspect of the Tulas experience is designed to prepare students not just for their first job but for long-term growth, adaptability, and leadership in an ever-evolving professional landscape.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="h-[420px]">

          <Swiper
            direction="vertical"
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            modules={[Autoplay]}
            className="h-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
  <div className="h-[180px] md:h-[200px] flex items-center justify-center">
    <Image
      src={card.image}
      alt=""
      width={600}
      height={300}
      className="w-full h-full object-contain scale-[0.95]"
    />
  </div>
</SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}

export default HomePerks;