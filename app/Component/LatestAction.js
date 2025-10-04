import React, { useRef } from "react";
import newformatimg1 from "../../public/Homepage/LatestNews/newformatimg1.webp";
import newformatimg2 from "../../public/Homepage/LatestNews/newformatimg2.webp";
import newformatimg3 from "../../public/Homepage/LatestNews/newformatimg3.webp";

import Campusplacmentmca from "../../public/Homepage/LatestNews/Campusplacmentmca.webp";
import Campusplacmentbsc from "../../public/Homepage/LatestNews/Campusplacmentbsc.webp";
import Image from "next/image";

import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";
function StatsAndNews() {
  const swiperRef = useRef();
  const sports = [
       {
      image: newformatimg3,
      name: "One Day Skill Development Workshop On Value Addition Of Holy Indian Basil/Tulsi",
      date: "06-Oct-2025",
      time: "11:00 am Onwards",
      location: "Agriculture Research Farm",
    },
            {
      image: newformatimg2,
      name: "Veer Madho Singh Bhandari Uttrakhand Technical University Intercollege kabaddi League (Boys/Girls)",
      date: "04-Oct - 05-Oct-2025",
      time: "10:30 am Onwards",
      location: "Tula's Campus",
    },
            {
      image: newformatimg1,
      name: "Ad - Spark Design Thinking Organized By  Nexus-CISM Buisness Simulation Club, Gradute School of Buisness",
      date: "04-Oct-2025",
      time: "9:45 am - 12:30 am",
      location: "Lab 8 G-Block",
    },
        {
      image: Campusplacmentbsc,
      name: "Campus Placement Drive B.Sc. (Hons) Agriculture - 2026 Batch",
      date: "30-Sept-2025",
      location: "TRC Lab, Tula's Institute",
    },
        {
      image: Campusplacmentmca,
      name: "Campus Placement Drive MCA - 2026 Batch",
      date: "29-Sept-2025",
      location: "TRC Lab, Tula's Institute",
    },
  ];

  return (
    <div className="flex bg-[#760135] mt-8 md:mt-[3%] flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-white w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Latest News & Updates
        <div className="h-[4px] bg-white w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="pt-6 flex gap-2 md:pt-[3%] w-[90%] overflow-scroll">
        {sports.slice(0, 4).map((sport, index) => (
          <div
            key={index}
            className="min-w-full max-w-full w-full md:min-w-10 md:w-[calc(25%-0.5rem)] h-full flex flex-col md:flex-row gap-4"
          >
            <div className="relative p-2 overflow-hidden rounded-xl bg-white w-full h-full flex flex-col justify-between mx-auto">
              <div className="w-full flex flex-col justify-between">
                <Image
                  src={sport.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="p-[3%] w-full h-fit">
                <h2 className="text-[clamp(10px,4vw,50px)] line-clamp-2 text-wrap md:text-[clamp(10px,1vw,50px)] text-[#353535] font-[TTChocolates] leading-tight font-extrabold">
                  {sport.name}
                </h2>
                <div className="flex gap-2 items-center">
                  <h2
                    className={`${
                      sport.date ? "opacity-100" : "opacity-0"
                    } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                  >
                    <MdDateRange /> {sport.date}
                  </h2>

                  <h2
                    className={`${
                      sport.time ? "opacity-100" : "opacity-0"
                    } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                  >
                    <MdTimer /> {sport.time}
                  </h2>
                </div>
                <h2
                  className={`${
                    sport.location ? "opacity-100" : "opacity-0"
                  } mt-2 flex items-center gap-1 line-clamp-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                >
                  <MdLocationPin /> {sport.location}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => (window.location.href = "/latest-news")}
        className="mt-3 md:mt-[3%] px-10 mb-6 md:mb-[3%] flex items-center bg-[#007A83] font-[TTChocolatesMedium] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14 hover:bg-white hover:shadow-lg hover:text-[#007A83] transition-all duration-300 ease-in-out"
      >
        See More News & Updates
      </button>
    </div>
  );
}

export default StatsAndNews;
