"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";

function BannerHome({
  bannerImages,
  title,
  scrollButton = false,
  screen = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(bannerImages[0]);
  const [scrollToSection, setScrollToSection] = useState(1);
  const maxSections = 15;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < bannerImages.length - 1 ? prevIndex + 1 : 0
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, [bannerImages]);

  useEffect(() => {
    setCurrentImage(bannerImages[currentIndex]);
  }, [currentIndex]);

  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection((prev) => prev + 1);
    }

    const element = document.getElementById(`${scrollToSection}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full relative ${
        screen
          ? "h-[80vh] md:h-screen"
          : "aspect-[1088/1350] md:aspect-[2745/1329] mt-20 md:mt-14 md:h-full"
      } transition-all duration-1000 flex items-start z-0`}
    >
      {/* Scroll Button */}
      {scrollButton && (
        <button
          onClick={handleScrollArrow}
          className="absolute bottom-10 right-10 z-20 w-[100px] aspect-square"
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
      )}

      {/* Title */}
      {title && (
        <div className="absolute bottom-4 md:bottom-[2%] px-8 md:px-[2%] w-full z-20">
          <h3 className="text-white z-10 font-[CarotSlab] leading-tight text-[clamp(16px,7vw,60px)] md:text-[clamp(20px,4vw,120px)] font-semibold drop-shadow-md">
            {title}
          </h3>
        </div>
      )}

      {/* Left & Right Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? bannerImages.length - 1 : prev - 1
          )
        }
  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-30 text-6xl font-thin"
      >
        ‹
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === bannerImages.length - 1 ? 0 : prev + 1
          )
        }
  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-30 text-6xl font-thin"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {bannerImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-white" : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerHome;
