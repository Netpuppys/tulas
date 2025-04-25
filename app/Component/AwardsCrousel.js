import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Award1 from "../../public/Homepage/awards/Award1.png";
import Award2 from "../../public/Homepage/awards/Award2.png";
import Award3 from "../../public/Homepage/awards/Award3.png";
import Award4 from "../../public/Homepage/awards/Award4.png";
import Ranking1 from "../../public/Homepage/awards/Ranking1.jpg";
import Ranking2 from "../../public/Homepage/awards/Ranking2.jpg";
import Ranking3 from "../../public/Homepage/awards/Ranking3.jpg";

const CarouselSection = ({
  title,
  data,
  swiperRef,
  activeIndex,
  setActiveIndex,
}) => {
  const handlePrevClick = () => {
    if (activeIndex > 0) swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    if (activeIndex < data.length - 1) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="flex w-full md:w-1/2 h-full flex-col justify-center items-center">
      <h3 className="font-[CarotSlab] pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap z-10 text-center">
        {title}
      </h3>
      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row py-4 md:py-[3%] px-4 w-full md:w-[85%] md:px-0 gap-4 md:gap-12 mx-auto">
                <div className="w-full flex flex-col justify-between">
                  <Image
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                  <div className="h-fit w-full">
                    <h2 className="leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535] font-[TTChocolates] font-extrabold border-b border-[#353535] py-2 md:py-4">
                      {item.name}
                    </h2>
                    <p className="text-[#353535]">{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex space-x-6 md:space-x-10 justify-center self-center mt-4">
          <CarouselButton
            onClick={handlePrevClick}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack />
          </CarouselButton>
          <CarouselButton
            onClick={handleNextClick}
            disabled={activeIndex === data.length - 1}
          >
            <IoIosArrowForward />
          </CarouselButton>
        </div>
      </div>
    </div>
  );
};

const CarouselButton = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    className={`pointer-events-auto shadow-2xl text-white h-[60px] w-[60px] bg-[#760135] rounded-full flex items-center justify-center text-[40px] ${
      disabled ? "cursor-not-allowed opacity-50" : "active:scale-90"
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

const AwardsCrousel = () => {
  const swiperRefRankings = useRef();
  const swiperRefAwards = useRef();
  const [activeIndexRankings, setActiveIndexRankings] = useState(0);
  const [activeIndexAwards, setActiveIndexAwards] = useState(0);

  const rankings = [
    {
      image: Ranking1,
      name: "Ranked 65th for Engineering by Outlook",
      date: "2024",
    },
    {
      image: Ranking2,
      name: "Ranked Amongst Top 50 Private College in India",
      date: "March 2025",
    },
    {
      image: Ranking3,
      name: "Tula's Ranked 86th by Times B School of India",
      date: "2025",
    },
  ];

  const awards = [
    {
      image: Award2,
      name: "Institute with best placements by Indian Education Awards",
      date: "2024",
    },
    {
      image: Award1,
      name: "HNN awarded Tulas as Best Engineering college by Former CM Trivendra Singh Rawat",
      date: "2023",
    },
    {
      image: Award4,
      name: "Best Engineering College in North India by Chetan Bhagat",
      date: "2019",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <CarouselSection
        title="RANKINGS"
        data={rankings}
        swiperRef={swiperRefRankings}
        activeIndex={activeIndexRankings}
        setActiveIndex={setActiveIndexRankings}
      />
      <CarouselSection
        title="AWARDS"
        data={awards}
        swiperRef={swiperRefAwards}
        activeIndex={activeIndexAwards}
        setActiveIndex={setActiveIndexAwards}
      />
    </div>
  );
};

export default AwardsCrousel;
