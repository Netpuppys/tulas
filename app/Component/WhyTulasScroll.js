"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollTulas from "../../public/Homepage/ScrollSection/WhyTulas.png";
import Image from "next/image";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
import Card1 from "../../public/Homepage/ScrollSection/Card1.png";
import Card2 from "../../public/Homepage/ScrollSection/Card2.png";
import Card3 from "../../public/Homepage/ScrollSection/Card3.png";
import Card4 from "../../public/Homepage/ScrollSection/Card4.png";
import Card5 from "../../public/Homepage/ScrollSection/Card5.png";
import Card6 from "../../public/Homepage/ScrollSection/Card6.png";
import Card7 from "../../public/Homepage/ScrollSection/Card7.png";
import Card8 from "../../public/Homepage/ScrollSection/Card8.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const title = "WHY TULA’S";
const paragraph =
  "The Institute provides excellent infrastructural and ICT facilities with well-equipped laboratories, a modern computer centre, spacious and well-furnished classrooms, seminar hall, library, workshop, and fully airconditioned & spacious auditorium.";
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

function WhyTulasScroll({ parentRef }) {
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
    <div className="bg-white w-full h-full">
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
          } top-0 w-full h-screen flex clip-circle-50px section backgroundScroll`}
        >
          <div className="mt-14 md:mt-0 relative w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-[CarotSlab] text-[clamp(20px,7vw,55px)] md:text-[70px] h-[75px] text-[#E69706] w-full whitespace-nowrap absolute top-0  z-10 pt-10 text-center">
              {title}
            </h3>
            <h4 className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-semibold font-[TTChocolates] absolute top-3 z-10 pt-[calc(5vh+3rem)] md:pt-[calc(5vh+5rem)] h-[calc(23vh-5rem)] w-full px-6 md:px-[25vw] mx-auto text-center text-white">
              {paragraph}
            </h4>
            {/* card scroll btns */}
            <div className="absolute w-fit top-[42%] z-30 mt-[340px] md:mt-0 mx-auto  md:ml-0 md:mr-auto md:left-0 flex items-center justify-start">
              <div className="flex w-full md:w-40 md:flex-col text-[30px] gap-3 items-center justify-center">
                <button
                  className={`pointer-events-auto aspect-square p-3 rounded-full border-2 border-white text-white shadow-2xl ${
                    index === 0
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-white hover:text-[#007A83]"
                  }`}
                  onClick={handleForwardClick}
                  disabled={index === 0}
                >
                  <IoIosArrowForward />
                </button>
                <button
                  className={`pointer-events-auto aspect-square p-3 rounded-full border-2 border-white bg-white text-[#007A83] shadow-2xl ${
                    index === images.length - 1
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-transparent hover:text-white"
                  }`}
                  onClick={handleBackClick}
                  disabled={index === images.length - 1}
                >
                  <IoIosArrowBack />
                </button>
              </div>
            </div>

            {/* cards container */}
            <div className="w-[calc(100%-3rem)] top-[32%] md:w-[calc(100%-10rem)]  right-0 absolute py-10 innerText">
              <div
                style={{ transform: `translateX(-${index * (width + 48)}px)` }}
                className="w-fit"
              >
                <div className="flex w-fit h-fit gap-12">
                  {images.map((image, index) => (
                    <div
                      ref={scrollRef}
                      key={index}
                      className="group rounded-xl w-[20rem] h-full aspect-[16/11] overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-110"
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

export default WhyTulasScroll;
