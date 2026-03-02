"use client";

import love1 from "../../../public/Homepage/LifeAtTulas/pharmacy.png";
import love2 from "../../../public/Homepage/LifeAtTulas/lifetulas1.jpg";
import love3 from "../../../public/Homepage/LifeAtTulas/love3.webp";
import love4 from "../../../public/Homepage/LifeAtTulas/love4.webp";
import placements1 from "../../../public/Homepage/LifeAtTulas/placements1.webp";
import placements2 from "../../../public/Homepage/LifeAtTulas/placements2.webp";
import placements3 from "../../../public/Homepage/LifeAtTulas/placements3.webp";
import placements4 from "../../../public/Homepage/LifeAtTulas/placements4.webp";
import events1 from "../../../public/Homepage/LifeAtTulas/events1.webp";
import events2 from "../../../public/Homepage/LifeAtTulas/events2.webp";
import events3 from "../../../public/Homepage/LifeAtTulas/events3.webp";
import events4 from "../../../public/Homepage/LifeAtTulas/events4.webp";
import celebrities1 from "../../../public/Homepage/LifeAtTulas/celebrities1.webp";
import celebrities2 from "../../../public/Homepage/LifeAtTulas/celebrities2.webp";
import celebrities3 from "../../../public/Homepage/LifeAtTulas/celebrities3.webp";
import celebrities4 from "../../../public/Homepage/LifeAtTulas/celebrities4.webp";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

function LandingLifeTulas() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "College Vibes",
    "Placements",
    "Events",
    "Celebrities",
  ];

  const swiper = [
    [
      {
        title: "I Love TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love1,
      },
      {
        title: "I Love TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love2,
      },
      {
        title: "I Love TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love3,
      },
      {
        title: "I Love TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love4,
      },
    ],
    [
      {
        title: "Placements At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements1,
      },
      {
        title: "Placements At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements2,
      },
      {
        title: "Placements At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements3,
      },
      {
        title: "Placements At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements4,
      },
    ],
    [
      {
        title: "Events At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events1,
      },
      {
        title: "Events At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events2,
      },
      {
        title: "Events At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events3,
      },
      {
        title: "Events At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events4,
      },
    ],
    [
      {
        title: "Celebrities At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities1,
      },
      {
        title: "Celebrities At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities2,
      },
      {
        title: "Celebrities At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities3,
      },
      {
        title: "Celebrities At TULA's",
        description:
          "Tula's Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities4,
      },
    ],
  ];

  return (
    <section className="bg-[#fbf4ee] pt-5 pb-16">
      <h3 className="text-center text-[clamp(29px,5.5vw,34px)] font-bold">
        <span className="text-orange-500">Vibe At</span>{" "}
        <span className="text-gray-800">Tula’s</span>
      </h3>
      <div className="max-w-7xl mx-auto px-2">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === index
                    ? "bg-orange-500 text-white"
                    : "bg-white text-[#1a1a1a] border"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        

{/* Gallery – True Masonry */}
{/* Gallery – Clean Mobile Masonry */}
<div className="columns-2 md:columns-2 gap-2">
  {swiper[activeTab].map((slide, idx) => (
    <div
      key={idx}
      className="mb-2 break-inside-avoid overflow-hidden bg-white shadow-sm"
    >
      <Image
        src={slide.image}
        alt={slide.title}
        className="w-full h-auto"
        sizes="(max-width: 768px) 50vw, 33vw"
        priority={idx < 2}
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default LandingLifeTulas;
