import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import amazon from "../public/TopRecruiter/amazon.png";
import Microsoft from "../public/TopRecruiter/Microsoft.png";
import hcl from "../public/TopRecruiter/hcl.png";
import lg from "../public/TopRecruiter/lg.png";
import wipro from "../public/TopRecruiter/wipro.png";
import vivo from "../public/TopRecruiter/vivo.png";
import jbm from "../public/TopRecruiter/jbm.png";
import tata from "../public/TopRecruiter/tata.png";
import samsung from "../public/TopRecruiter/samsung.png";
import itc from "../public/TopRecruiter/itc.png";
import oracle from "../public/TopRecruiter/oracle.png";
import cumins from "../public/TopRecruiter/cumins.png";
import aon from "../public/TopRecruiter/aon.png";
import honda from "../public/TopRecruiter/honda.png";
import hexaware from "../public/TopRecruiter/hexaware.png";
import ais from "../public/TopRecruiter/ais.png";
import Image from "next/image";

function TopRecruiter() {
  const crouselImages = [
    [amazon, Microsoft, hcl, lg, wipro, vivo, jbm, tata],
    [samsung, itc, oracle, cumins, aon, honda, hexaware, ais],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); // Ref for swiper instance

  // Change index manually every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % crouselImages.length; // Cycle through the slides
      setCurrentIndex(nextIndex);

      // Move to the next slide using swiper instance
      if (swiperRef.current && swiperRef.current.slideToLoop) {
        swiperRef.current.slideToLoop(nextIndex); // Use slideToLoop for infinite looping
      }
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, crouselImages.length]);

  return (
    <div className="py-8 md:py-14 bg-white w-full h-fit mb-10 md:mb-20 flex flex-col items-center justify-center relative">
      <h3 className="text-[#760135] pb-8 md:pb-14 text-[25px] md:text-[40px] font-[CarotSlab]">
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
                  className="w-[60px] md:w-[8%] h-fit object-cover grayscale"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots for carousel */}
      <div className="flex z-10 gap-2 pt-8 md:pt-14 self-center items-center">
        {crouselImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)} // Manually change index on dot click
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
