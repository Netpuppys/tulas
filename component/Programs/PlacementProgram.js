import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import placementBackground from "../../public/courses/bjmc/placementBackground.png";
import { Autoplay } from "swiper/modules";
function PlacementProgram({ features }) {
  const swiperRef = useRef();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-none z-10">
        Top Placed <span className="text-[#760135]">Students</span>
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>

      <div className="w-full md:w-[85%] relative z-10 -mb-[7%] overflow-hidden">
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
                    className="rounded-xl md:rounded-2xl h-fit object-cover"
                  />
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-between">
                  <Image
                    src={feature.image2}
                    alt=""
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative w-full h-full pt-[10%] pb-8 md:pb-[3%]">
        <Image
          src={placementBackground}
          alt=""
          className="w-full h-full absolute top-0 -z-10 object-cover"
        />
        <h5 className="w-full text-white md:w-[70%] px-4 text-center mx-auto leading-tight text-[clamp(10px,4.8vw,30px)] md:text-[clamp(10px,1.5vw,45px)] font-[LevSerif] font-normal italic">
          <strong>World’s Leading Brands</strong> Hire Our Talented Students
        </h5>
      </div>
    </div>
  );
}

export default PlacementProgram;
