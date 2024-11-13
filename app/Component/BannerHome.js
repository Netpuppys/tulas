"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Banner1 from "../../public/Homepage/BannerHome/Banner1.webp";
import Banner2 from "../../public/Homepage/BannerHome/Banner1.webp";
import Banner3 from "../../public/Homepage/BannerHome/Banner1.webp";
import Banner4 from "../../public/Homepage/BannerHome/Banner1.webp";
import Banner5 from "../../public/Homepage/BannerHome/Banner1.webp";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";
function BannerHome({ isChecked }) {
  const title = (
    <>
      <span className="text-[#007A83]">UNLOCK</span> NEW <br />
      PATHWAYS TO <span className="text-[#007A83]">SUCCESS</span>
    </>
  );
  const paragraph =
    "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun with the vision of offering excellent academics along with fostering the professional and personal personas of every student of the institute.";
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const maxSections = 13;
  const [scrollToSection, setScrollToSection] = useState(1);

  const changeImage = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 300); // Duration of fade out/in
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      changeImage(index);
      resetInterval();
    }
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    changeImage(currentIndex);
  }, [currentIndex]);

  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection((prev) => prev + 1);
    }

    if (scrollToSection < maxSections) {
      const element = document.getElementById(`${scrollToSection}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative flex items-start z-0"
    >
      {/* background */}
      <div
        className={`-z-10 w-full h-full inset-0 transition-opacity duration-500 overflow-hidden ${
          fade ? "opacity-20" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt=""
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="flex z-10 flex-col self-center items-center pt-4 absolute top-1/2 gap-2 transform -translate-y-1/2 right-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${
              index === currentIndex
                ? "border-2 border-white p-[2px] rounded-full"
                : "border-none"
            } `}
          >
            <div
              className={`w-[10px] h-[10px] md:w-[15px] z-10 md:h-[15px] rounded-full flex items-center justify-center cursor-pointer ${
                index === currentIndex
                  ? " bg-white"
                  : " bg-gray-400 blur-[0.6px]"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div
        className={`bottom-10 md:bottom-10 md:pr-[140px] z-10 absolute mx-10 md:ml-16 ${
          isChecked ? "md:pl-[440px] md:animate-translateLeftMenu" : "pl-0"
        }`}
      >
        <h2 className="text-[38px] md:text-[clamp(20px,4.2vw,70px)] text-white z-10 font-[CarotSlab]">
          {title}
        </h2>
        <h4 className="w-full text-justify md:max-w-[800px] text-[clamp(15px,4.5vw,30px)] text-white md:text-[clamp(12px,1.2vw,30px)] font-[TTChocolates]">
          {paragraph}
        </h4>
      </div>
      <button
        onClick={handleScrollArrow}
        className="hidden md:block bottom-10 right-10 absolute z-10 w-[100px] aspect-square"
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <Image
            className="animate-scrollSpin absolute w-full h-fit text-white"
            src={ScrollImage}
            alt=""
          />
          <IoIosArrowRoundDown className="absolute text-[40px] font-thin" />
        </div>
      </button>
    </div>
  );
}

export default BannerHome;
