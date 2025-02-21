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
const bannerImages = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
  bannerImage6,
];
const title = [
  <p className="text-white">
    <span className="text-[#E69706]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#E69706]">SUCCESS</span>
  </p>,
  <p className="text-[#353535]">
    <span className="text-[#760135]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#760135]">SUCCESS</span>
  </p>,
  <p className="text-[#E69706]">
    <span className="text-[#760135]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#760135]">SUCCESS</span>
  </p>,
  <p className="text-white">
    <span className="text-[#007A83]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#007A83]">SUCCESS</span>
  </p>,
  <p className="text-white">
    <span className="text-[#E69706]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#E69706]">SUCCESS</span>
  </p>,
  <p className="text-white">
    <span className="text-[#007A83]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#007A83]">SUCCESS</span>
  </p>,
];

function BannerHome({ isChecked }) {
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
      className="w-full aspect-[1/1] md:aspect-auto md:h-screen transition-all duration-1000 relative bg-black bg-opacity-50 flex items-start z-0"
    >

      <div
        className={`bottom-4 md:bottom-10 md:pr-[140px] z-10 absolute mx-4 md:ml-16 
        ${isChecked ? "md:pl-[440px] md:animate-translateLeftMenu" : "pl-0"}
        `}
      >
        <h2 className="text-[clamp(10px,7vw,70px)] md:text-[clamp(10px,4.2vw,70px)] z-10 leading-[1.1] font-[CarotSlab]">
          {title[currentIndex]}
        </h2>
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