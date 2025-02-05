import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SATC from "../../../../public/research/Collaborators/SATC.png";
import AICTE from "../../../../public/research/Collaborators/AICTE.png";
import MOSAT from "../../../../public/research/Collaborators/MOSAT.png";
import IITR from "../../../../public/research/Collaborators/IITR.png";
import AWaDH from "../../../../public/research/Collaborators/AWaDH.png";
import TEQIP from "../../../../public/research/Collaborators/TEQIP.png";
import IEEE from "../../../../public/research/Collaborators/IEEE.png";
import NMICPS from "../../../../public/research/Collaborators/NMICPS.png";
import VMSBUTUD from "../../../../public/research/Collaborators/VMSBUTUD.png";
import USERC from "../../../../public/research/Collaborators/USERC.png";

import Image from "next/image";

function Collaborators() {
  const crouselImages = [
    [SATC, AICTE, MOSAT, IITR, AWaDH],
    [TEQIP, IEEE, NMICPS, VMSBUTUD, USERC],
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
    <div className="py-8 md:py-[4%] bg-white w-full h-fit flex flex-col items-center justify-center relative">
      <h3 className="text-[#760135] pb-8 md:pb-14 text-[25px] md:text-[40px] font-[CarotSlab]">
        Collaborators
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
                  className="w-[100px] md:w-[10%] h-fit object-cover"
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

export default Collaborators;
