"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbView360Number } from "react-icons/tb";
import Link from "next/link";
import students from "../../public/Homepage/Virtual/students.png";
import faculty from "../../public/Homepage/Virtual/faculty.png";
import experience from "../../public/Homepage/Virtual/experience.png";
import alumni from "../../public/Homepage/Virtual/alumni.png";
import Image from "next/image";

function VirtualTour() {
  const [inView, setInView] = useState(false);
  const [stats, setStats] = useState([
    { img: students, start: 1000, end: 2000, title: "BRIGHT STUDENTS" },
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
    <div className="w-full h-screen backgroundVirtual flex flex-col">
      <div className="mt-[6rem] flex flex-col mr-[8rem] ml-auto text-center items-center">
        <Link href="/virtual-tour/index.html">
          <TbView360Number className="text-white text-[80px]" />
        </Link>
        <h5
          className="text-[31px] text-[#40E269]"
          style={{
            fontFamily: "Reem Kufi",
          }}
        >
          360 Degree Campus Tour
        </h5>
      </div>
      <div className="flex justify-around mt-auto mb-5" ref={statsRef}>
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={stat.img} alt={stat.title} />
            <h3
              className="text-[40px] text-white font-[TTChocolatesBold]"
              style={{
                textShadow: "0px 4px 26px #40E269",
              }}
            >
              {stat.animatedStatNo || stat.start}
              {"+"}
            </h3>
            <h3 className="text-[18px] text-white font-[TTChocolatesBold]">
              {stat.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualTour;
