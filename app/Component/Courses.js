"use client";

import React, { useEffect, useRef, useState } from "react";
import BackgroundCourses from "../../public/Homepage/Courses/Courses.png";
import BackgroundLeaf from "../../public/Homepage/Courses/CoursesLeaf.png";
import CoursesLeafMobile from "../../public/Homepage/Courses/CoursesLeafMobile.png";
import CardCourses from "./CardCourses";
import { useMobile } from "@/component/IsMobileContext";
import Stars from "../../public/Homepage/Accreditation/Stars.png";
import Image from "next/image";

function Courses({ parentRef }) {
  const [scale, setScale] = useState(1);
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [componentHeight, setComponentHeight] = useState();
  const { isMobile } = useMobile();

  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
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
    if (childRef.current) {
      const compHeight = childRef.current.getBoundingClientRect().height;
      setComponentHeight(compHeight);
      console.log(compHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && childRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;
        const childTop = childRef.current.getBoundingClientRect().top;

        const positionFromTop = childTop - parentTop;
        const scrollValue = Math.max(window.scrollY - positionFromTop, 0);
        const scroll = Math.min(scrollValue, componentHeight);

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
  }, [componentHeight]);

  return (
    <div ref={childRef} className="w-full h-fit">
      <div className="w-full h-[350vh] md:h-[222vh] relative bg-[#3D001B] overflow-hidden">
        <div
          className={`${
            scrollY > 0 && scrollY < componentHeight && opacity !== 0
              ? "fixed"
              : "absolute"
          } top-0 left-0 w-full h-screen z-[11] bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url(${
              isMobile ? CoursesLeafMobile.src : BackgroundLeaf.src
            })`,
            transform: `scale(${scaleLeaf})`,
            opacity: opacity,
          }}
        ></div>

        <div
          className={`${
            scrollY > 0 && scrollY < componentHeight && opacity !== 0
              ? "fixed"
              : "absolute"
          } top-0 left-0 flex items-center justify-center w-full h-screen z-10 bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url(${BackgroundCourses.src})`,
            transform: `scale(${scale})`,
            opacity: opacity,
          }}
        >
          <h3 className="font-[Dynalight] text-[40px] leading-none md:text-[clamp(30px,3vw,120px)] text-white z-20 text-center md:leading-[5.8vw]">
            Our
            <br />
            <span className="font-[DKAppelstroop] text-white text-[80px] md:text-[clamp(70px,8vw,250px)] font-normal">
              Courses
            </span>
          </h3>
        </div>
        

        {/* <div
          className={`w-full h-[100vh] flex flex-col gap-2 justify-end items-center transition-opacity duration-300 ease-in-out 
          ${isInView ? "absolute bottom-0" : "fixed"} ${
            opacity < 0.09 ? "opacity-100 translate-in" : "opacity-0"
          }`}
        >
          <div className="font-[ExtraWide] text-[35px] md:text-[42px] text-white text-center">
            Courses
          </div>
          <div className="bg-white w-[1px] h-[8vh]"></div>
          <h5
            className={`w-full px-4 max-w-[50rem] text-white font-[TTChocolates] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] text-center transition-opacity duration-300 ease-in-out ${
              opacity < 0.001 ? "opacity-100 translate-in" : "opacity-0"
            }`}
          >
            The Institute provides excellent infrastructural and ICT facilities
            with well-equipped
          </h5>
          <div className="h-[20vh]">
            <div
              className={`bg-white w-[1px] h-[20vh] ${
                opacity < 0.0001 ? `opacity-100 translate-in` : "opacity-0"
              }`}
            ></div>
          </div>
        </div> */}
        <div
        ref={ref}
        className="w-full h-fit z-40 absolute bottom-0 md:bottom-[22vh] flex flex-col items-center"
      >
        {/* <div className="w-[1px] md:min-h-[20vh] bg-white"></div> */}
        <div className="w-full mx-auto py-8 md:py-0 md:pt-8">
          <CardCourses />
        </div>
        <Image
        src={Stars}
        className="hidden md:block absolute bottom-0 translate-y-14 z-50 left-0 w-32 pointer-events-none"
        alt=""
      />
      </div>
        
      </div>
      
    </div>
  );
}

export default Courses;
