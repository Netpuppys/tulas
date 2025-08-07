"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

function TopRecruiter({ crouselImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); // Ref for swiper instance

  // Function to manually navigate slides
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.slideToLoop) {
      swiperRef.current.slideToLoop(index); // Move to selected slide
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.realIndex !== undefined) {
        const nextIndex =
          (swiperRef.current.realIndex + 1) % crouselImages.length;
        goToSlide(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [crouselImages.length]);

  return (
    <div className="py-8 md:py-10 bg-white w-full h-fit flex flex-col items-center justify-center relative">
      <h3 className="text-[#760135] pb-8 text-[25px] md:text-[40px] font-[CarotSlab]">
        TOP RECRUITERS
      </h3>

      {/* Swiper for image carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Track active slide
        slidesPerView={1} // Display one group of images at a time
        loop={true} // Infinite looping
        className="w-full"
      >
        {crouselImages.map((group, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center max-w-[90%} flex-wrap"
          >
            <div className="flex flex-wrap gap-10 md:gap-16 justify-center items-center">
              {group.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt="Top Recruiter"
                  className="w-[60px] md:w-[8%] h-fit object-cover"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots for carousel */}
      <div className="flex z-10 gap-2 pt-8 self-center items-center">
        {crouselImages.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div
              className={`w-[10px] h-[10px] md:w-[19px] bg-[#36091F80] bg-opacity-50 md:h-[19px] rounded-full ${
                index === currentIndex
                  ? "w-[16px] md:w-[26px] h-[16px] md:h-[26px]"
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRecruiter;
