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
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages]);

  useEffect(() => {
    setCurrentImage(bannerImages[currentIndex]);
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
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full relative ${
        screen
          ? "h-[80vh] md:h-screen"
          : "aspect-[1088/1350] md:aspect-[2745/1329] mt-20 md:mt-14 md:h-full"
      } transition-all duration-1000 bg-black bg-opacity-50 flex items-start z-0`}
    >
      {scrollButton && (
        <button
          onClick={handleScrollArrow}
          className="hidden md:block bottom-10 right-10 absolute z-10 w-[100px] aspect-square"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              className="animate-scrollSpin absolute w-full h-fit text-white"
              src={ScrollImage}
              loading="lazy"
              alt=""
            />
            <IoIosArrowRoundDown className="absolute text-[40px] font-thin" />
          </div>
        </button>
      )}
      {title && (
        <div className="absolute bottom-4 md:bottom-[2%] px-8 md:px-[2%]  w-full z-20">
          <h3 className="w-fulll text-white z-10 font-[CarotSlab] leading-tight text-[clamp(10px,6.5vw,50px)] md:text-[clamp(10px,3vw,100px)] font-normal">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
}

export default BannerHome;
