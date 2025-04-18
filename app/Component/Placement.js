import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
function Placement({ features }) {
  const swiperRef = useRef();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-none z-10">
        Placements Overview
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <h2 className="text-[#2F2F2F] text-center font-[LevSerif] text-[clamp(10px,4.5vw,55px)] pt-6 md:text-[clamp(10px,1.5vw,55px)]">
        <strong className="font-[LevSerifBold]"> World’s Leading Brands</strong>{" "}
        Hire Our Talented Students
      </h2>
      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={1}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row pt-4 md:pt-[3%] h-full px-4 w-full md:w-[85%] md:px-0 gap-4 md:gap-12 mx-auto">
                <div className="w-full md:w-[50%] h-full relative flex flex-col justify-between">
                  <Image
                    src={feature.image}
                    alt=""
                    loading="lazy"
                    className="rounded-xl md:rounded-2xl h-fit object-cover"
                  />
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-between">
                  <Image
                    src={feature.image2}
                    loading="lazy"
                    alt=""
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Placement;
