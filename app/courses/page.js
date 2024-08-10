"use client";
import React, { useEffect, useState } from "react";
import BackgroundCourses from "../../public/Homepage/Courses/Courses.png";
import BackgroundLeaf from "../../public/Homepage/Courses/CoursesLeaf.png";

function CoursesScroll() {
  const [scale, setScale] = useState(1);
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScale(1 + scrollY * 0.0001);
      setScaleLeaf(1 + scrollY * 0.001);
      setOpacity(Math.max(1 - scrollY * 0.001, 0));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacity]);

  return (
    <div className="w-full h-[500vh] bg-[#3D001B] relative overflow-hidden">
      <div
        className="fixed w-full h-[100vh] z-10 bg-no-repeat bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${BackgroundCourses.src})`,
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        <h3 className="font-[Dynalight] text-[74px] text-center leading-[100px]">
          Our
          <br />
          <span className="font-[DKAppelstroop] text-[150px] font-normal">
            Courses
          </span>
        </h3>
      </div>
      <div
        className={`w-full h-[100vh] flex flex-col gap-2 justify-end items-center transition-opacity duration-300 ease-in-out fixed
         ${opacity < 0.09 ? "opacity-100 translate-in" : "opacity-0"}`}
      >
        <div className="font-[ExtraWide] text-[42px] text-center">Courses</div>
        <div className="bg-white w-[1px] h-[8vh]"></div>
        <h5
          className={`w-full max-w-[50rem] font-[TT Chocolates] text-[25px] text-center transition-opacity duration-300 ease-in-out ${
            opacity < 0.001 ? "opacity-100 translate-in" : "opacity-0"
          }`}
        >
          The Institute provides excellent infrastructural and ICT facilities
          with well-equipped laboratories, a modern computer centre, spacious
          and well-furnished classrooms, seminar hall, library, workshop, and
          fully airconditioned &amp; spacious auditorium.
        </h5>
        <div className="h-[30vh]">
          <div
            className={`bg-white w-[1px] h-[30vh] ${
              opacity < 0.0001 ? `opacity-100 translate-in` : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <div
        className="fixed w-full h-[100vh] z-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundLeaf.src})`,
          transform: `scale(${scaleLeaf})`,
          opacity: opacity,
        }}
      ></div>
    </div>
  );
}

export default CoursesScroll;
