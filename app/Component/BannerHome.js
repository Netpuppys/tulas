"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import bannerImage1 from "../../public/Homepage/BannerHome/BannerImage1.webp";
import bannerImage2 from "../../public/Homepage/BannerHome/BannerImage2.webp";
import bannerImage3 from "../../public/Homepage/BannerHome/BannerImage3.webp";
import bannerImage4 from "../../public/Homepage/BannerHome/BannerImage4.webp";
import bannerImage5 from "../../public/Homepage/BannerHome/BannerImage5.webp";
import bannerImage6 from "../../public/Homepage/BannerHome/BannerImage6.webp";
import RankedBannerMobile from "../../public/Homepage/BannerHome/RankedBannerMobile.webp";
import RankedBannerDesktop from "../../public/Homepage/BannerHome/RankedBannerDesktop.webp";
import SanskritiBannerDesktop from "../../public/Homepage/BannerHome/SanskritiBannerDesktop.webp";

const bannerImagesDesktop = [RankedBannerDesktop, SanskritiBannerDesktop];
const bannerImagesMobile = [RankedBannerMobile, SanskritiBannerDesktop];

function BannerHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollToSection, setScrollToSection] = useState(1);
  const maxSections = 15;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < bannerImagesDesktop.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
    <>
      {/* Desktop Banner */}
      <div
        style={{
          backgroundImage: `url(${bannerImagesDesktop[currentIndex].src})`,
        }}
        className="hidden md:flex bg-cover bg-center w-full mt-28 md:mt-10 md:h-full aspect-[2745/1329] transition-all duration-1000 relative z-0"
      >
        <button
          onClick={handleScrollArrow}
          className="bottom-10 right-10 absolute z-10 w-[100px] aspect-square"
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

      {/* Mobile Banner */}
      <div
        style={{
          backgroundImage: `url(${bannerImagesMobile[currentIndex].src})`,
        }}
        className="flex md:hidden bg-cover bg-center w-full mt-20 aspect-[1088/1350] transition-all duration-1000 relative z-0"
      >
        {/* Optional: mobile scroll button if needed */}
      </div>
    </>
  );
}

export default BannerHome;
