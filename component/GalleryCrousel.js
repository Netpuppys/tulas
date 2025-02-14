import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useMobile } from "@/component/IsMobileContext";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { FreeMode } from "swiper/modules";
function GalleryCrousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const { isMobile } = useMobile();
  const swiperRef = useRef();
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      setActiveIndex(swiperRef.current.swiper.realIndex); // Update to logical index
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setActiveIndex(swiperRef.current.swiper.realIndex); // Update to logical index
    }
  };
  return (
    <div className="overflow-hidden px-8 md:px-0 w-full">
      <Swiper
        // loop={true}
        freeMode={true}
        modules={FreeMode}
        slidesPerView={isMobile ? 1 : 2.5}
        spaceBetween={"4%"}
        centeredSlides={true}
        grabCursor={true}
        ref={swiperRef}
        initialSlide={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="w-[33%] h-full">
            <div
              className={`w-full h-full gap-8 transition-transform duration-300 ${
                index === activeIndex ? "scale-100" : "scale-75"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <h3 className="text-center py-6 text-[30px] md:text-[clamp(10px,2.5vw,50px)] font-[MontserratMedium]">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-[4%]">
        <button
          onClick={handlePrevClick}
          className={`pointer-events-auto shadow-2xl transition-all ease-in duration-300 text-white hover:text-[#007A83] h-[40px] border-2 border-white md:h-[60px] md:min-w-[60px] md:max-w-[60px] aspect-square hover:bg-white rounded-full flex items-center justify-center text-[25px] md:text-[40px] active:scale-90`}
        >
          <PiCaretLeftThin />
        </button>
        <div className="flex z-10 gap-2 self-center items-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                swiperRef.current.swiper.slideToLoop(index); // Correctly navigate to logical index
                setActiveIndex(index); // Update active index state
              }}
              className={`cursor-pointer`}
            >
              <div
                className={`w-[7px] h-[7px] md:w-[12px] md:h-[12px] transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "bg-[#BABABA] scale-125 bg-opacity-100"
                    : "bg-[#D9D9D9] bg-opacity-50"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className={`pointer-events-auto shadow-2xl transition-all ease-in duration-300 text-white hover:text-[#007A83] h-[40px] md:h-[60px] border-2 border-white md:min-w-[60px] md:max-w-[60px] aspect-square hover:bg-white rounded-full flex items-center justify-center text-[25px] md:text-[40px] active:scale-90`}
        >
          <PiCaretRightThin />
        </button>
      </div>
    </div>
  );
}

export default GalleryCrousel;
