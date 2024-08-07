"use client";
import React, { useEffect } from "react";
import ScrollTulas from "../../public/Homepage/ScrollSection/WhyTulas.png";
import Image from "next/image";
function WhyTulasScroll() {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      document.querySelector(
        ".section"
      ).style.clipPath = `circle(${value}px at center center)`;
      console.log(value);
      document.querySelector(".innerText").style.left = `${100 - value / 15}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-white w-full h-full">
      <div className="w-full h-[200vh]">
        <h3 className="text-4xl h-[2.5rem] w-full fixed z-10 pt-[5vh] text-center text-white">
          WHY TULA’S
        </h3>
        <h4 className="text-xl fixed z-10 pt-[calc(5vh+5rem)] h-[calc(23vh-5rem)] w-full px-[20vw] mx-auto text-center text-white">
          The Institute provides excellent infrastructural and ICT facilities
          with well-equipped laboratories, a modern computer centre, spacious
          and well-furnished classrooms, seminar hall, library, workshop, and
          fully airconditioned &amp; spacious auditorium.
        </h4>
        <div className="w-full h-full flex pt-[30vh] justify-center ">
          <Image
            src={ScrollTulas}
            alt=""
            className="z-10 w-fit h-[40vh] fixed"
          />
        </div>
        <section
          className="fixed top-0 w-full h-screen flex justify-center items-center clip-circle-50px section"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20)0%, rgba(0, 0, 0, 0.20)100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20)0%, rgba(0, 0, 0, 0.20)100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20)0%, rgba(0, 0, 0, 0.20)100%), linear-gradient(0deg, rgba(0, 122, 131, 0.80)0%, rgba(0, 122, 131, 0.80)100%), url(<path-to-image>) lightgray 50% / cover no-repeat",
          }}
        >
          <h2 className="fixed top-1/2 left-full transform -translate-y-1/2 whitespace-nowrap z-10 text-[10vw] text-white innerText">
            TULAS Animation
          </h2>
        </section>
      </div>
    </div>
  );
}

export default WhyTulasScroll;
