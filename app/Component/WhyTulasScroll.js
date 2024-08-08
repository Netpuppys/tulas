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

function WhyTulasScroll() {
  const scrollRef = useRef();
  const [index, setIndex] = useState(1);
  const images = [
    { src: Card1 },
    { src: Card2 },
    { src: Card3 },
    { src: Card4 },
    { src: Card1 },
    { src: Card2 },
    { src: Card3 },
    { src: Card4 },
    { src: Card1 },
    { src: Card2 },
    { src: Card3 },
    { src: Card4 },
  ];
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      let clipValue = Math.max(100, value); // Set minimum value for clipPath to 100
      document.querySelector(
        ".section"
      ).style.clipPath = `circle(${clipValue}px at center center)`;

      document.querySelector(".innerText").style.left = `${100 - value / 15}%`;

      // Rotate the image based on scroll value
      const rotationDegree = value % 360;
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

  const handleForwardClick = () => {
    if (scrollRef.current && index < images.length) {
      scrollRef.current.scroll({
        top: 288 * index,
        behavior: "smooth",
      });
      setIndex((prev) => prev + 1);
    }
  };
  const handleBackClick = () => {
    if (scrollRef.current && index !== 1) {
      scrollRef.current.scroll({
        top: -288 * index,
        behavior: "smooth",
      });
      setIndex((prev) => prev - 1);
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
        <section className="fixed  top-0 w-full h-screen flex clip-circle-50px section backgroundScroll">
          <h3
            style={{
              fontFamily: "Carot Slab",
            }}
            className="text-[70px] h-[75px] text-[#E69706] w-full whitespace-nowrap fixed z-10 pt-[2vh] text-center"
          >
            WHY TULA’S
          </h3>
          <h4 className="text-2xl font-[Rothwood] fixed z-10 pt-[calc(5vh+5rem)] h-[calc(23vh-5rem)] w-full px-[20vw] mx-auto text-center text-white">
            The Institute provides excellent infrastructural and ICT facilities
            with well-equipped laboratories, a modern computer centre, spacious
            and well-furnished classrooms, seminar hall, library, workshop, and
            fully airconditioned & spacious auditorium.
          </h4>
          <div className="flex fixed flex-col text-[60px] transform -translate-y-1/2 left-[7vw] top-1/2">
            <IoArrowForwardCircleOutline onClick={handleForwardClick} />
            <IoArrowBackCircleOutline onClick={handleBackClick} />
          </div>
          <div
            ref={scrollRef}
            className="fixed z-20 top-1/2 left-full max-w-screen transform -translate-y-1/2 innerText"
          >
            <div className="flex w-fit h-fit gap-12">
              {images.map((image, index) => (
                <div
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyTulasScroll;
