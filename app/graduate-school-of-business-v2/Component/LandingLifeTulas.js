"use client";

import React, { useState } from "react";
import Image from "next/image";

import love1 from "../../../public/Homepage/LifeAtTulas/collegevibes.png";
import placements1 from "../../../public/Homepage/LifeAtTulas/hotelndmess.png";
import events1 from "../../../public/Homepage/LifeAtTulas/infrastructure.png";
import celebrities1 from "../../../public/Homepage/LifeAtTulas/sports.png";

function LandingLifeTulas() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "College Vibes",
    "Hotel & Mess",
    "Infrastructure",
    "Sports",
  ];

  const tabImages = [
    love1,
    placements1,
    events1,
    celebrities1,
  ];

  return (
    <section className="bg-[#fbf4ee] pt-5 pb-16">

      <h3 className="text-center text-[clamp(29px,5.5vw,34px)] font-medium mb-6">
        <span className="text-orange-500">Vibe At</span>{" "}
        <span className="text-gray-800 font-light">Tula’s</span>
      </h3>

      <div className="max-w-7xl mx-auto px-3">

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-3 mb-6 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition
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

        {/* Horizontal Scroll Image */}
        <div className="overflow-x-auto rounded-xl shadow-sm bg-white scrollbar-hide">
          <div className="min-w-[1200px]">
            <Image
              src={tabImages[activeTab]}
              alt={tabs[activeTab]}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default LandingLifeTulas;