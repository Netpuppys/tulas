"use client";

import React, { useState } from "react";
import Image from "next/image";

import love1 from "../../public/Homepage/LifeAtTulas/collegevibes.png";
import placements1 from "../../public/Homepage/LifeAtTulas/hotelndmess.png";
import events1 from "../../public/Homepage/LifeAtTulas/infrastructure.png";
import celebrities1 from "../../public/Homepage/LifeAtTulas/sports.png";
import gym from "../../public/Homepage/LifeAtTulas/gym.png";

function HomeLifeTulas() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Fests",
    "Hostel",
    "Infrastructure",
    "Sports",
    "Wellness"
  ];

  const tabImages = [
    love1,
    placements1,
    events1,
    celebrities1,
    gym
  ];

  return (
    <section className="bg-[#fbf4ee] pt-5 pb-16">

      <h3 className="text-center text-[clamp(39px,5.5vw,34px)] font-extrabold mb-6">
        <span className="text-orange-500">Life</span>{" "}
        <span className="text-gray-800">at Tulas</span>
      </h3>

      <div className="max-w-7xl mx-auto px-3">

        {/* Tabs */}
        <div className="flex md:justify-center gap-3 overflow-x-auto whitespace-nowrap pb-3 mb-6 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-semibold transition border
                ${
                  activeTab === index
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable Image with fixed height */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-start">

            <div className="h-[580px] sm:h-[500px] md:h-[680px] flex-shrink-0">
              <Image
                src={tabImages[activeTab]}
                alt={tabs[activeTab]}
                className="h-full w-auto object-contain"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeLifeTulas;