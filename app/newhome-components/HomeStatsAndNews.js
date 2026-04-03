"use client";

import React, { useRef } from "react";
import Image from "next/image";

import newformatimg20 from "../../public/Homepage/LatestNews/newformatimg20.webp";
import newformatimg21 from "../../public/Homepage/LatestNews/newformatimg21.webp";
import newformatimg22 from "../../public/Homepage/LatestNews/newformatimg22.webp";
import newformatimg23 from "../../public/Homepage/LatestNews/newformatimg23.webp";

import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";

function HomeStatsAndNews() {
  const swiperRef = useRef();

  const sports = [
    {
      image: newformatimg23,
      name: "Campus Placement Drive: B.tech Civil 2026 Batch",
      date: "14th Feb 2026",
      location: "Tulas's Institute",
    },
    {
      image: newformatimg22,
      name: "Guest lecture on AI tools in higher education and research",
      date: "30th Jan 2026",
      location: "Old seminar hall",
      time: "10:00 am Onwards",
    },
    {
      image: newformatimg21,
      name: "Masterclass on data-driven sustainblility strategies",
      date: "17th Nov-2025",
      location: "F-404 Tula's institute",
      time: "11:30 am Onwards",
    },
    {
      image: newformatimg20,
      name: "Add-on certificate program on Fullstack development",
      date: "17th-28th Nov-2025",
      location: "G-404 Tula's institute",
      time: "11:30 am - 4:00 pm",
    },
  ];

  return (
    <div className="relative mt-8 md:mt-[3%] flex flex-col justify-center items-center overflow-hidden">

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
          <h2 className="text-[clamp(28px,5vw,50px)] font-extrabold text-black">
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
                <div className="p-4">

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

                </div>
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