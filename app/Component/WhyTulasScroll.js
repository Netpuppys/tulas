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

function WhyTulasScroll() {
  const [scrollY, setScrollY ] = useState(0)
  const title = "WHY TULA’S";
  const paragraph =
    "The Institute provides excellent infrastructural and ICT facilities with well-equipped laboratories, a modern computer centre, spacious and well-furnished classrooms, seminar hall, library, workshop, and fully airconditioned & spacious auditorium.";
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState();
  const images = [
    {
      src: Card1,
      text: "Distinguished Faculty Credited with Numerous Patents",
    },
    { src: Card2, text: "Well Stocked Library with E-books and E-journals" },
    { src: Card3, text: "Sports Complex" },
    { src: Card4, text: "Industry Driven Curriculum" },
    { src: Card5, text: "22 Acre of Lush Green Campus" },
    { src: Card6, text: "Corporate Interaction" },
    { src: Card7, text: "Separate Boys’ & Girl’s Hostels" },
    { src: Card8, text: "36.5 LPA Highest Salary Package" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      setScrollY(value)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {

      let value = window.scrollY;
      let clipValue = Math.max(100, value); // Set minimum value for clipPath to 100
      document.querySelector(
        ".section"
      ).style.clipPath = `circle(${Math.max(100, clipValue) }px at center center)`;

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

  return (
    <div className="bg-white w-full h-full">
      <div className="w-full h-[200vh]">
        <div className="w-full h-full flex pt-[30vh] justify-center ">
          <Image
            src={ScrollTulas}
            alt=""
            className="z-10 w-fit h-[40vh] fixed rotatingImage pointer-events-none"
          />
        </div>
        <section 
          style={{ clipPath: "circle(100px at center center)"}}
          className="fixed top-0 w-full h-screen flex clip-circle-50px section backgroundScroll"
        >
          <h3
            style={{
              fontFamily: "Carot Slab",
            }}
            className="text-[70px] h-[75px] text-[#E69706] w-full whitespace-nowrap fixed z-10 pt-[2vh] text-center"
          >
            {title}
          </h3>
          <h4 className="text-2xl font-[Rothwood] fixed z-10 pt-[calc(5vh+5rem)] h-[calc(23vh-5rem)] w-full px-[20vw] mx-auto text-center text-white">
            {paragraph}
          </h4>
          <div className="fixed w-screen -translate-y-1/2 z-30 top-1/2 flex items-center justify-start">
            <div className="flex w-40 flex-col text-[60px] items-center justify-center">
              <button
                className={`${
                  index === 0 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={handleForwardClick}
                disabled={index === 0}
              >
                <IoArrowForwardCircleOutline />
              </button>
              <button
                className={`${
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

            <div className="w-[calc(100%-10rem)] pl-[100vw] overflow-x-hidden py-10 innerText">
              <div
                style={{ transform: `translateX(-${index * (width + 48)}px)` }}
                className="w-fit"
              >
                <div className="flex w-fit h-fit gap-12">
                  {images.map((image, index) => (
                    <div
                      ref={scrollRef}
                      key={index}
                      className="group rounded-xl w-[20rem] h-full overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-125"
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
