"use client";
import React, { useEffect, useRef, useState } from "react";
import BackgroundCourses from "../../public/Homepage/Courses/Courses.png";
import BackgroundLeaf from "../../public/Homepage/Courses/CoursesLeaf.png";
import Engineering from "../../public/Homepage/Courses/Engineering.png";
import Business from "../../public/Homepage/Courses/Business.png";
import Agriculture from "../../public/Homepage/Courses/Agriculture.png";
import MassCoummunication from "../../public/Homepage/Courses/MassCommunication.png";
import computeApplication from "../../public/Homepage/Courses/ComputerApplication.png";
import Image from "next/image";
function CoursesScroll() {
  const [scale, setScale] = useState(1);
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const cardsCourses = [
    { src: Engineering, title: "DEPARTMENT OF ENGINEERING" },
    { src: Business, title: "GRADUATE SCHOOL OF BUSINESS" },
    { src: Agriculture, title: "DEPARTMENT OF AGRICULTURE" },
    { src: MassCoummunication, title: "DEPARTMENT OF MASS COMUNICATION" },
    { src: computeApplication, title: "DEPARTMENT OF COMPUTER APPLICATION" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is in the viewport
        setIsInView(entry.isIntersecting);
        console.log(entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger the observer when at least 10% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
    <>
      <div className="w-full h-[250vh] bg-[#3D001B] relative overflow-hidden">
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
            className={`w-full max-w-[50rem] font-[TT Chocolates] text-[25px] text-center transition-opacity duration-300 ease-in-out ${
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

        <div
          className="fixed w-full h-[100vh] z-20 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundLeaf.src})`,
            transform: `scale(${scaleLeaf})`,
            opacity: opacity,
          }}
        ></div>
      </div>
      <div ref={ref} className="w-full h-[100vh] z-50 bg-[#3D001B] relative">
        <div className="w-[1px] h-[20vh] bg-white relative top-0 left-1/2 -translate-x-1/2"></div>
        <div className="w-full mx-auto pt-8">
          <div className="flex items-center justify-center w-full h-fit gap-6">
            {cardsCourses.map((image, index) => (
              <div
                key={index}
                className="w-[18vw] h-full overflow-hidden shadow-lg transform transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt=""
                  className="z-20 object-cover w-full h-full hover:brightness-75"
                  layout="responsive"
                />
                <div className="text-white absolute z-30 w-fit text-center p-2 bottom-0">
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesScroll;
