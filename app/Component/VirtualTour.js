"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbView360Number } from "react-icons/tb";
import Link from "next/link";
import BackgroundVirtual from "../../public/Homepage/Virtual/BackgroundVirtual.jpg";
import students from "../../public/Homepage/Virtual/students.png";
import faculty from "../../public/Homepage/Virtual/faculty.png";
import experience from "../../public/Homepage/Virtual/experience.png";
import alumni from "../../public/Homepage/Virtual/alumni.png";
import Image from "next/image";

function VirtualTour() {
  const [inView, setInView] = useState(false);
  const [stats, setStats] = useState([
    { img: students, start: 2000, end: 3000, title: "BRIGHT STUDENTS" },
    { img: faculty, start: 0, end: 150, title: "FACULTY MEMBERS" },
    { img: experience, start: 0, end: 17, title: "YEARS OF EXPERIENCE" },
    { img: alumni, start: 6000, end: 7000, title: "GLORIUS ALUMNI" },
  ]);
  const statsRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the component is visible
    });
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          let start = stat.start;
          const end = stat.end;
          const duration = 1000; // 1 seconds
          const stepTime = Math.abs(Math.floor(duration / (end - start)));

          const timer = setInterval(() => {
            start += 1;
            setStats((prevStats) =>
              prevStats.map((item, i) =>
                i === index
                  ? { ...item, animatedStatNo: Math.min(start, end) }
                  : item
              )
            );
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        });
      };
      animateNumbers();
    }
  }, [inView]);

  return (
    <div>
      <div className="bg-black">
        <Image
          className="w-full h-[70vh] md:h-screen -z-10 bg-black opacity-70 object-cover"
          src={BackgroundVirtual}
          alt=""
        />
      </div>
      <div className="relative w-full h-full">
        <div
          className="flex -mt-[150px] justify-around backgroundVirtual mx-auto w-[95%] md:w-[80%] py-10 flex-wrap gap-y-5 mb-5"
          ref={statsRef}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-1/2 md:w-[25%] flex flex-col items-center"
            >
              <div className="px-4 py-4 rounded-full border-[#007A83] border shadow-[0px_4px_26px_2px_#007A83]">
                <Image
                  src={stat.img}
                  alt={stat.title}
                  className="w-[55px] h-[55px] "
                />
              </div>
              <h3 className="text-[30px] md:text-[40px] text-white textShadow font-[TTChocolatesBold]">
                {stat.animatedStatNo || stat.start}
                {"+"}
              </h3>
              <h3 className="text-[16px] md:text-[18px] text-white font-[TTChocolatesBold]">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualTour;
