"use client";

import React, { useEffect, useRef, useState } from "react";
import BackgroundCourses from "../../public/Homepage/Courses/Courses.png";
import BackgroundLeaf from "../../public/Homepage/Courses/CoursesLeaf.png";
import CardCourses from "./CardCourses";
import Accreditation from "./Accreditation";

function Courses({ parentRef }) {
  const [scale, setScale] = useState(1);
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [ scrollY, setScrollY ] = useState(0)
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const childRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (parentRef.current && childRef.current) {
            const parentTop = parentRef.current.getBoundingClientRect().top;
            const childTop = childRef.current.getBoundingClientRect().top;

            const positionFromTop = childTop - parentTop;
            const scroll = Math.max(window.scrollY - positionFromTop, 0);
            setScrollY(scroll);
            setScale(1 + scroll * 0.0001);
            setScaleLeaf(1 + scroll * 0.001);
            setOpacity(Math.max(1 - scroll * 0.001, 0));
        }
    };

      window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={childRef} className="w-full">
      <div className="w-full h-[250vh] relative bg-[#3D001B] overflow-hidden">

        <div
            className={`${(scrollY>0)? "fixed" : "absolute"} top-0 left-0 w-full h-[100vh] z-[11] bg-no-repeat bg-cover bg-center`}
            style={{
                backgroundImage: `url(${BackgroundLeaf.src})`,
                transform: `scale(${scaleLeaf})`,
                opacity: opacity,
            }}
        ></div>

        <div
            className={`${(scrollY>0)? "fixed" : "absolute"} top-0 left-0 flex items-center justify-center w-full h-[100vh] z-10 bg-no-repeat bg-cover bg-center`}
            style={{
                backgroundImage: `url(${BackgroundCourses.src})`,
                transform: `scale(${scale})`,
                opacity: opacity,
            }}
        >
          <h3 className="font-[Dynalight] text-[74px] z-20 text-center leading-[100px]">
            Our
            <br />
            <span className="font-[DKAppelstroop] text-[150px] font-normal">
              Courses
            </span>
          </h3>
        </div>

        <div
          className={`w-full h-[100vh] flex flex-col gap-2 justify-end items-center transition-opacity duration-300 ease-in-out 
          ${isInView ? "absolute bottom-0" : "fixed"} ${
            opacity < 0.09 ? "opacity-100 translate-in" : "opacity-0"
          }`}
        >
          <div className="font-[ExtraWide] text-[42px] text-center">
            Courses
          </div>
          <div className="bg-white w-[1px] h-[8vh]"></div>
          <h5
            className={`w-full max-w-[50rem] font-[TTChocolates] text-[25px] text-center transition-opacity duration-300 ease-in-out ${
              opacity < 0.001 ? "opacity-100 translate-in" : "opacity-0"
            }`}
          >
            The Institute provides excellent infrastructural and ICT facilities
            with well-equipped laboratories, a modern computer centre, spacious
            and well-furnished classrooms, seminar hall, library, workshop, and
            fully airconditioned &amp; spacious auditorium.
          </h5>
          <div className="h-[20vh]">
            <div
              className={`bg-white w-[1px] h-[20vh] ${
                opacity < 0.0001 ? `opacity-100 translate-in` : "opacity-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div ref={ref} className="w-full h-[75vh] z-50 bg-[#3D001B] relative">
        <div className="w-[1px] h-[20vh] bg-white relative top-0 left-1/2 -translate-x-1/2"></div>
        <div className="w-full mx-auto pt-8">
          <CardCourses />
        </div>
      </div>

      <Accreditation />
    </div>
  );
}

export default Courses;