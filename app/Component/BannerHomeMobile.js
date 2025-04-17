"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import RankedBannerMobile from "../../public/Homepage/BannerHome/RankedBannerMobile.webp";
import SanskritiBannerMobile from "../../public/Homepage/BannerHome/SanskritiBannerMobile.webp";
const bannerImages = [
  RankedBannerMobile,
  SanskritiBannerMobile,
  RankedBannerMobile,
  SanskritiBannerMobile,
  RankedBannerMobile,
  SanskritiBannerMobile,
  RankedBannerMobile,
  SanskritiBannerMobile,
  RankedBannerMobile,
  SanskritiBannerMobile,
  RankedBannerMobile,
  SanskritiBannerMobile,
];

function BannerHomeMobile() {
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
      className="w-full mt-20 md:mt-10 aspect-[1088/1350] md:aspect-[2745/1329] md:h-full transition-all duration-1000 relative bg-black bg-opacity-50 flex items-start z-0"
    >
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

export default BannerHomeMobile;
