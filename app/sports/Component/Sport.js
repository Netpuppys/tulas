"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollTulas from "../../../public/sports/SPORTS FACILITIES.png";
import Image from "next/image";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
import Card1 from "../../../public/Homepage/ScrollSection/Card1.png";
import Card2 from "../../../public/Homepage/ScrollSection/Card2.png";
import Card3 from "../../../public/Homepage/ScrollSection/Card3.png";
import Card4 from "../../../public/Homepage/ScrollSection/Card4.png";
import Card5 from "../../../public/Homepage/ScrollSection/Card5.png";
import Card6 from "../../../public/Homepage/ScrollSection/Card6.png";
import Card7 from "../../../public/Homepage/ScrollSection/Card7.png";
import Card8 from "../../../public/Homepage/ScrollSection/Card8.png";
import background from "../../../public/infrastructure/computerScience/background.png";

const title = "Sports";
const paragraph = (
  <>
    Availability of 24Hrs Wi-Fi internet access in the campus with 205 mbps
    speed and Comprehensive e-learning environment provided in the campus,
    enables all the students and faculty members to be connected which is
    essential for effective learning.
    <br />
    <br />
    Our Digital library has over 5800+ e-books available round the clock through
    a FTP server on the intranet. Students can access the material and books
    anytime from anywhere on the campus.
  </>
);
const images = [
  { src: Card1, text: "Distinguished Faculty Credited with Numerous Patents" },
  { src: Card2, text: "Well Stocked Library with E-books and E-journals" },
  { src: Card3, text: "Sports Complex" },
  { src: Card4, text: "Industry Driven Curriculum" },
  { src: Card5, text: "22 Acre of Lush Green Campus" },
  { src: Card6, text: "Corporate Interaction" },
  { src: Card7, text: "Separate Boys’ & Girl’s Hostels" },
  { src: Card8, text: "36.5 LPA Highest Salary Package" },
];

function SportsScroll({ parentRef }) {
  const scrollRef = useRef();
  const childRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [distanceFromTop, setDistanceFromTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && childRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;
        const childTop = childRef.current.getBoundingClientRect().top;

        const positionFromTop = childTop - parentTop;
        setDistanceFromTop(positionFromTop);

        const value = Math.max(window.scrollY - positionFromTop, 0);
        const clipValue = Math.max(100, value);
        setScrollY(value);

        setComponentHeight(childRef.current.offsetHeight);

        document.querySelector(".section").style.clipPath = `circle(${Math.max(
          100,
          clipValue
        )}px at center center)`;

        document.querySelector(".innerText").style.paddingLeft = `${
          100 - value / 8
        }%`;

        // Rotate the image based on scroll value
        const rotationDegree = (value % 360) / 10;
        document.querySelector(
          ".rotatingImage"
        ).style.transform = `rotate(${rotationDegree}deg)`;

        // Reduce opacity of the image based on scroll value
        const opacityValue = Math.max(1 - value / 1000, 0); // Adjust 1000 to control the rate of opacity reduction
        document.querySelector(".rotatingImage").style.opacity = opacityValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setWidth(scrollRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleForwardClick = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleBackClick = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const changePosition = () => {
    const distAndHeight = distanceFromTop + componentHeight;
    if (scrollY > 0 && scrollY < distAndHeight) {
      return true;
    }

    return false;
  };

  return (
    <div className="bg-transparent w-full h-full">
      <div ref={childRef} className="relative w-full h-[250vh]">
        <div
          className={`${
            changePosition() ? "fixed" : "absolute"
          } w-full z-40 top-0 h-full flex pt-[30vh] justify-center pointer-events-none`}
        >
          <Image
            src={ScrollTulas}
            alt=""
            className="z-10 w-fit h-[40vh] rotatingImage"
          />
        </div>
        <section
          style={{ clipPath: "circle(100px at center center)" }}
          className={`${
            changePosition() ? "fixed" : "absolute"
          } top-0 w-full h-screen flex clip-circle-50px section backgroundScrollSports`}
        >
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-[CarotSlab] text-3xl md:text-[70px] h-[75px] text-white w-full whitespace-nowrap absolute top-0 z-10 pt-10  text-center">
              {title}
            </h3>
            <h4 className="text-lg md:text-2xl font-[Rothwood] absolute top-0 z-10 pt-[calc(5vh+3rem)] md:pt-[calc(5vh+5rem)] h-[calc(23vh-5rem)] w-full px-6 md:px-[20vw] mx-auto text-center text-white">
              {paragraph}
            </h4>
            {/* card scroll btns */}
            <div className="absolute w-fit z-30 top-3/4 left-0 md:top-[52.5%] flex items-center justify-start">
              <div className="flex w-full md:w-40 md:flex-col text-[60px] items-center justify-center">
                <button
                  className={`pointer-events-auto shadow-2xl ${
                    index === 0 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={handleForwardClick}
                  disabled={index === 0}
                >
                  <IoArrowForwardCircleOutline />
                </button>
                <button
                  className={`pointer-events-auto shadow-2xl ${
                    index === images.length - 1
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={handleBackClick}
                  disabled={index === images.length - 1}
                >
                  <IoArrowBackCircleOutline />
                </button>
              </div>
            </div>
            {/* cards container */}
            <div className="w-[calc(100%-10rem)] right-0 absolute top-[40%] py-10 innerText">
              <div
                style={{ transform: `translateX(-${index * (width + 48)}px)` }}
                className="w-fit"
              >
                <div className="flex w-fit h-fit gap-16">
                  {images.map((image, index) => (
                    <div
                      ref={scrollRef}
                      key={index}
                      className="group rounded-xl w-[25rem] h-full overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-125"
                    >
                      <Image
                        src={image.src}
                        alt=""
                        className="z-20 object-cover w-full h-full"
                        layout="responsive"
                      />
                      <div className="absolute inset-0 bg-[#760135] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="text-white hidden group-hover:flex absolute z-30 w-fit text-center p-2 bottom-0">
                        {image.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SportsScroll;
