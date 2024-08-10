"use client";
import React, { useEffect, useState } from "react";
import BackgroundCourses from "../../public/Homepage/Courses/Courses.png";
import BackgroundLeaf from "../../public/Homepage/Courses/CoursesLeaf.png";

function CoursesScroll() {
  const [scale, setScale] = useState(1);
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [height, setHeight] = useState(); // New state for height

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScale(1 + scrollY * 0.0001); // Increase scale based on scroll position
      setScaleLeaf(1 + scrollY * 0.001);

      // Adjust opacity based on scroll position, ensuring it stays within 0-1 range
      setOpacity(Math.max(1 - scrollY * 0.001, 0)); // Decrease opacity based on scroll position
      const newHeight = Math.max(10, 30 - scrollY * 0.01); // Adjust height from 10vh to 30vh
      setHeight(newHeight);
      console.log(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the values on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[300vh] relative overflow-hidden">
      <div
        className="fixed w-full h-[100vh] z-10 bg-no-repeat bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${BackgroundCourses.src})`,
          transform: `scale(${scale})`,
          opacity: opacity, // Apply opacity based on scroll position
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
        className={`fixed w-full h-[100vh] flex flex-col gap-2 justify-end items-center transition-opacity duration-300 ease-in-out ${
          opacity < 0.09 ? "opacity-100 translate-in" : "opacity-0"
        }`}
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
            className={`bg-white w-[1px]  ${
              opacity < 0.001
                ? `opacity-100 translate-in h-[${height}vh]`
                : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <div
        className="fixed w-full h-[100vh] z-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundLeaf.src})`,
          transform: `scale(${scaleLeaf})`,
          opacity: opacity, // Apply opacity based on scroll position
        }}
      ></div>
    </div>
  );
}

export default CoursesScroll;
