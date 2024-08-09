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
      // Adjust the multiplier and scale factor as needed
      const scrollY = window.scrollY;
      setScale(1 + scrollY * 0.0001); // Increase scale based on scroll position
      setScaleLeaf(1 + scrollY * 0.001);
      // Adjust opacity based on scroll position, ensuring it stays within 0-1 range
      setOpacity(Math.max(1 - scrollY * 0.001, 0)); // Decrease opacity based on scroll position
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
          <span className="font-[DKAppelstroop] text-[150px]  font-normal">
            Courses
          </span>
        </h3>
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
