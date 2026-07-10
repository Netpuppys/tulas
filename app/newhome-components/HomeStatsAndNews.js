"use client";

import React, { useRef } from "react"; 
import Image from "next/image";

import newformatimg25 from "../../public/Homepage/LatestNews/newformatimg25.jpeg";
import newformatimg26 from "../../public/Homepage/LatestNews/newformatimg26.jpeg";
import newformatimg27 from "../../public/Homepage/LatestNews/newformatimg27.jpeg";
import newformatimg28 from "../../public/Homepage/LatestNews/newformatimg28.jpeg";

import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";

function HomeStatsAndNews() {
  const swiperRef = useRef();

  const sports = [
    {
      image: newformatimg28,
    },
    {
      image: newformatimg27,
    },
    {
      image: newformatimg26,
    },
    {
      image: newformatimg25,
    },
  ];

  return (
    <div className="relative mt-0 flex flex-col justify-center items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/landingPage/landingwhy-desktop.jpg" // 👈 add this image in public/images
        alt="background"
        fill
        priority
        className="object-cover grayscale"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* HEADING */}
        <div className="text-center pt-8 md:pt-[3%] px-4">
          <h2 className="text-[clamp(28px,5vw,40px)] font-extrabold text-black">
            <span className="text-orange-500">Happenings</span>{" "}
            <span>at Tulas</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="pt-6 flex gap-4 md:pt-[3%] w-[90%] overflow-x-auto no-scrollbar">

          {sports.map((sport, index) => (
            <div
              key={index}
              className="min-w-[85%] md:min-w-[23%] flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg">

                {/* IMAGE */}
                <div className="w-full h-[390px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={sport.image}
                    alt=""
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                {/* <div className="p-4">

                  <h2 className="text-[clamp(14px,1vw,18px)] line-clamp-2 text-[#353535] font-semibold leading-tight">
                    {sport.name}
                  </h2>

                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">

                    {sport.date && (
                      <span className="flex items-center gap-1">
                        <MdDateRange className="text-orange-500"  /> {sport.date}
                      </span>
                    )}

                    {sport.time && (
                      <span className="flex items-center gap-1">
                        <MdTimer className="text-orange-500"  /> {sport.time}
                      </span>
                    )}
                  </div>

                  {sport.location && (
                    <div className="mt-2 text-xs text-gray-600 flex items-center gap-1">
                      <MdLocationPin className="text-orange-500"  /> {sport.location}
                    </div>
                  )}

                </div> */}
              </div>
            </div>
          ))}

        </div>

        {/* BUTTON */}
        <button
          onClick={() => (window.location.href = "/latest-news")}
          className="mt-6 mb-8 px-8 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base hover:bg-white hover:text-[#007A83] transition-all duration-300 shadow-md"
        >
          See More News & Updates
        </button>

      </div>
    </div>
  );
}

export default HomeStatsAndNews;