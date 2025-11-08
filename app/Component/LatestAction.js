import React, { useRef } from "react";
 
import newformatimg12 from "../../public/Homepage/LatestNews/newformatimg12.webp";
import newformatimg13 from "../../public/Homepage/LatestNews/newformatimg13.webp";
import newformatimg14 from "../../public/Homepage/LatestNews/newformatimg14.webp";
import newformatimg15 from "../../public/Homepage/LatestNews/newformatimg15.webp";

import Image from "next/image";

import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";
function StatsAndNews() {
  const swiperRef = useRef();
  const sports = [
    {
      image: newformatimg15,
      name: "Department of computer applications is organizing a workshop on cyber security",
      date: "10th-11th Nov-2025",
      location: "New seminar hall and pharmacy block",  
      time: "10:30 am Onwards",  
    },
    {
      image: newformatimg14,
      name: "Campus Placement Drive - Btech CSE, MBA, BBA, BCA, MCA, Bcom(Hons) 2026 Batch",
      date: "10-Nov-2025",
      location: "Tula's Institiute",    
    },
    {
      image: newformatimg13,
      name: "A decade of glory - 10th diff deheradun international film festival",
      date: "08-Nov-2025",
      location: "Tula's Auditorium",    
    },
    {
      image: newformatimg12,
      name: "Department of civil engineering is organizing an Inter - Department Copmetition",
      date: "07-Nov-2025",
      time: "10:00 am Onwards",
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
