"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbView360Number } from "react-icons/tb";
import Link from "next/link";
import BackgroundVirtual from "../../public/Homepage/Virtual/BackgroundVirtual.jpg";
import students from "../../public/Homepage/Virtual/students.png";
import faculty from "../../public/Homepage/Virtual/faculty.png";
import experience from "../../public/Homepage/Virtual/experience.png";
import alumni from "../../public/Homepage/Virtual/alumni.png";
import acre from "../../public/Homepage/Virtual/acre.png";
import Image from "next/image";

function VirtualTour() {
  const [inView, setInView] = useState(false);
  const [stats, setStats] = useState([
    { img: students, start: 3000, end: 4000, title: "BRIGHT STUDENTS" },
    { img: faculty, start: 0, end: 180, title: "FACULTY MEMBERS" },
    { img: experience, start: 0, end: 20, title: "YEARS OF EXPERIENCE" },
    { img: alumni, start: 6000, end: 7000, title: "GLORIOUS ALUMNI" },
    { img: acre, start: 0, end: 22, title: "ACRES CAMPUS" },
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
      <div className="w-full h-full">
        <Image
          className="w-full h-[50vh] md:h-screen -z-10 object-cover"
          src={BackgroundVirtual}
          alt=""
        />
      </div>
      <div className="relative -mt-[110px] w-full h-full">
        <div
          className="flex justify-around backgroundVirtual mx-auto w-[95%] md:w-[80%] px-[4%] py-6 flex-wrap gap-y-5"
          ref={statsRef}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-1/2 md:w-[15%] flex flex-col items-center"
            >
              <div className="px-4 py-4 rounded-full border-[#007A83] border shadow-[0px_4px_26px_2px_#007A83]">
                <Image
                  src={stat.img}
                  alt={stat.title}
                  className="w-[55px] h-[55px] "
                />
              </div>
              <h3 className="text-[clamp(8px,5.5vw,30px)] md:text-[clamp(10px,2.2vw,45px)] text-white textShadow font-[TTChocolatesMedium]">
                {stat.animatedStatNo || stat.start}
                {"+"}
              </h3>
              <h3 className="text-[clamp(8px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)] text-center text-white font-[TTChocolatesMedium]">
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
