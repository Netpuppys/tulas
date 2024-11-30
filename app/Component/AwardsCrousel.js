import React, { useRef, useState } from "react";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Award1 from "../../public/Homepage/awards/Award1.png";
import Award2 from "../../public/Homepage/awards/Award2.png";
import Award3 from "../../public/Homepage/awards/Award3.png";
import Award4 from "../../public/Homepage/awards/Award4.png";
function AwardsCrousel() {
  const features = [
    {
      image: Award1,
      name: "HNN awarded Tulas as Best Engineering college by Former Chief Minister Trivendra Singh Rawat",
      date: "January 6, 2024",
      name2: "Institute with best placements by Indian Education Awards",
      date2: "January 6, 2024",
      image2: Award2,
    },
    {
      image: Award3,
      name: "Merit Awards awarded Tulas as Best Engineering college by famous Actress Kirron Kher",
      date: "January 6, 2024",
      name2:
        "Best Enginneering College in North India by Famous author Chetan Bhagat",
      image2: Award4,
      date: "January 6, 2024",
    },
  ];
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (activeIndex < features.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={background}
        className="w-full absolute h-full top-0 left-0 -z-10 object-cover"
        alt=""
      />
      <h3 className="font-[CarotSlab] pt-8 md:pt-16 px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-white w-full whitespace-nowrap  z-10 text-center">
        RANKINGS & AWARDS
      </h3>
      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row py-4 md:py-16 h-full px-4 w-full md:w-[85%] md:px-0 gap-4 md:gap-12 mx-auto">
                <div className="w-full md:w-[50%] h-full relative flex flex-col justify-between">
                  <Image
                    src={feature.image}
                    alt=""
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                  <div>
                    <h2 className="text-[clamp(16px,1.3vw,50px)] text-white font-[TTChocolates] font-extrabold border-b border-white py-2 md:py-4">
                      {feature.name}
                    </h2>
                    <p2 className>{feature.date}</p2>
                  </div>
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-between">
                  <Image
                    src={feature.image2}
                    alt=""
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                  <div>
                    <h2 className="text-[clamp(16px,1.3vw,50px)] text-white font-[TTChocolates] font-extrabold border-b border-white py-2 md:py-4">
                      {feature.name2}
                    </h2>
                    <p2 className>{feature.date}</p2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex space-x-6 md:space-x-10 pb-8 md:pb-16 justify-center self-center">
          <button
            onClick={handlePrevClick}
            className={`pointer-events-auto shadow-2xl text-[#007A83] h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === 0}
          >
            <HiMiniArrowLongLeft />
          </button>
          <button
            onClick={handleNextClick}
            className={`pointer-events-auto shadow-2xl text-[#007A83] h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === features.length - 1
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === features.length - 1}
          >
            <HiMiniArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AwardsCrousel;
