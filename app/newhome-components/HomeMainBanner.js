"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";

function HomeMainBanner({
  bannerImages,
  title,
  scrollButton = false,
  screen = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [scrollToSection, setScrollToSection] = useState(1);
  const maxSections = 15;
  const autoSlideRef = useRef(null);
  const pauseTimeout = useRef(null);

  // === AUTO SLIDE ===
  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 2500);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    pauseTimeout.current = setTimeout(() => {
      startAutoSlide();
    }, 15000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, []);

  // === SWIPE ===
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    const minSwipe = 50;

    stopAutoSlide();

    if (swipeDistance > minSwipe) {
      goToNextSlide();
    } else if (swipeDistance < -minSwipe) {
      goToPrevSlide();
    }

    setTouchStartX(null);
  };

  // === SCROLL ===
  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection((prev) => prev + 1);
    }
    const element = document.getElementById(`${scrollToSection}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // === SLIDES ===
  const goToPrevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const goToSlide = (idx) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(idx);
    stopAutoSlide();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`w-full relative overflow-hidden ${
        screen
          ? "h-[100vh] md:h-screen"
          : "aspect-[788/1350] md:aspect-[2345/1329] mt-32 md:mt-[110px] md:h-full"
          // : "aspect-[1088/1350] md:aspect-[2745/1329] mt-20 md:mt-14 md:h-full"
      }`}
    >
      {/* Slides */}
      {bannerImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
  src={image.src}
  alt=""
  width={1920}
  height={1080}
  className="w-full h-auto object-contain"
/>
        </div>
      ))}

      {/* Scroll Button */}
      {/* {scrollButton && (
        <button
          onClick={handleScrollArrow}
          className="absolute bottom-10 right-10 z-20 w-[100px] aspect-square"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              className="animate-scrollSpin absolute w-full h-fit"
              src={ScrollImage}
              alt=""
            />
            <IoIosArrowRoundDown className="absolute text-[40px] text-white" />
          </div>
        </button>
      )} */}

      {/* Title */}
      {title && (
        <div className="absolute bottom-4 md:bottom-[2%] px-8 md:px-[2%] w-full z-20">
          <h3 className="text-white font-[CarotSlab] leading-tight text-[clamp(16px,7vw,60px)] md:text-[clamp(20px,4vw,120px)] font-semibold drop-shadow-md">
            {title}
          </h3>
        </div>
      )}

      {/* Arrows */}
      <button
        onClick={() => {
          goToPrevSlide();
          stopAutoSlide();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-30 text-6xl"
      >
        ‹
      </button>

      <button
        onClick={() => {
          goToNextSlide();
          stopAutoSlide();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-30 text-6xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === idx ? "bg-white" : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeMainBanner;