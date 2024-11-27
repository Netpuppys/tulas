"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const ImagePopUp = ({ activeImage, setActiveImage }) => {
  return (
    <div className="w-screen h-screen overflow-y-scroll px-40 pointer-events-auto overflow-scroll fixed top-0 z-[9999] left-1/2 -translate-x-1/2 backdrop-blur-sm flex flex-col items-center justify-start">
      <div className="w-full h-full flex items-center justify-center overflow-scroll relative py-5">
        <button
          onClick={() => setActiveImage(null)}
          className="w-16 aspect-square bg-white rounded-full absolute top-5 right-10 flex items-center justify-center text-[#007A83] border-2 text-4xl border-[#007A83]"
        >
          <IoMdClose />
        </button>

        <Image
          src={activeImage}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

const SlidingCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleScrollRight = () => {
    if (carouselRef.current && activeIndex < items.length - 1) {
      setDisabled(true);
      setActiveIndex((prev) => prev + 1);
      carouselRef.current.scrollBy({
        left: 392,
        behavior: "smooth",
      });
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current && activeIndex > 0) {
      setDisabled(true);
      setActiveIndex((prev) => prev - 1);
      carouselRef.current.scrollBy({
        left: -392,
        behavior: "smooth",
      });
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    // Handle wheel event for desktop devices
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > 0) {
        e.preventDefault(); // Prevent horizontal scroll
      }
      // Allow vertical scrolling (deltaY)
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // Handle touch start (mobile)
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    // Handle touch move (mobile)
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // If horizontal swipe is greater than vertical swipe, prevent horizontal scrolling
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault(); // Prevent horizontal scrolling
      } else {
        // Allow vertical scroll, no need to preventDefault here
      }

      touchStartX = touchEndX;
      touchStartY = touchEndY;
    };

    // Add wheel event listener for desktop
    carouselElement.addEventListener("wheel", handleWheel, { passive: false });

    // Add touch event listeners for mobile devices
    carouselElement.addEventListener("touchstart", handleTouchStart);
    carouselElement.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      // Clean up event listeners
      carouselElement.removeEventListener("wheel", handleWheel);
      carouselElement.removeEventListener("touchstart", handleTouchStart);
      carouselElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="w-full h-full md:h-[35rem] my-4 md:my-10 flex flex-col-reverse md:flex-row">
      {activeImage && (
        <ImagePopUp activeImage={activeImage} setActiveImage={setActiveImage} />
      )}

      <div className="w-full md:min-w-[20rem] md:w-[20rem] px-10 h-full flex md:flex-col items-center justify-end md:justify-center gap-6">
        <button
          onClick={handleScrollLeft}
          disabled={disabled}
          className={`border-2 disabled:cursor-not-allowed border-white hover:bg-white hover:text-[#007A83] rounded-full w-16 aspect-square flex items-center justify-center text-3xl text-white
          ${activeIndex === 0 ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <HiArrowLongLeft />
        </button>
        <button
          onClick={handleScrollRight}
          disabled={disabled}
          className={`border-2 disabled:cursor-not-allowed border-white hover:bg-white hover:text-[#007A83] rounded-full w-16 aspect-square flex items-center justify-center text-3xl text-white
          ${
            activeIndex === items.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <HiArrowLongRight />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="max-w-[calc(100%-20rem)] pl-10 w-[calc(100%-20rem)] overflow-scroll h-full flex items-center md:items-start justify-start gap-10 pr-[100vw] overflow-y-visible pb-4 md:py-10"
      >
        {items.map((card, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(card)}
            className={`bg-white h-full min-w-[22rem] w-[22rem] ${
              activeIndex === index ? "md:animate-scaleUp md:scale-110" : ""
            }`}
          >
            <Image
              src={card}
              className="w-full h-[27rem] md:h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingCarousel;
