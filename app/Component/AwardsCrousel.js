import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Award1 from "../../public/Homepage/awards/Award1.png";
import Award2 from "../../public/Homepage/awards/Award2.png";
import Award3 from "../../public/Homepage/awards/Award3.png";
import Award4 from "../../public/Homepage/awards/Award4.png";
import Ranking1 from "../../public/Homepage/awards/Ranking1.jpg";
import Ranking2 from "../../public/Homepage/awards/Ranking2.jpg";
import Ranking3 from "../../public/Homepage/awards/Ranking3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function AwardsCrousel() {
  const features = [
    {
      image: Ranking1,
      name: "Ranked 65th for Engineering by Outlook",
      date: "2024",
      name2: "Institute with best placements by Indian Education Awards",
      date2: "2024",
      image2: Award2,
    },
    {
      image: Ranking2,
      name: "Ranked Amongst Top 50 Private College in India",
      date: "March 2025",
      image2: Award1,
      name2:
        "HNN awarded Tulas as Best Engineering college by Former Chief Minister Trivendra Singh Rawat",
      date2: "2023",
    },
    {
      image: Ranking3,
      name: "Tula's Ranked 86th by Times B School of India",
      date: "2025",
      name2:
        "Best Enginneering College in North India by Famous author Chetan Bhagat",
      image2: Award4,
      date2: "2019",
    },
    // {
    //   image: Award3,
    //   name: "Merit Awards awarded Tulas as Best Engineering college by famous Actress Kirron Kher",
    //   date: "2022",
    // },
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
      <h3 className="font-[CarotSlab] pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap  z-10 text-center">
        RANKINGS & AWARDS
      </h3>
      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row py-4 md:py-[3%] px-4 w-full md:w-[85%] md:px-0 gap-4 md:gap-12 mx-auto">
                <div className="w-full md:w-[50%] flex flex-col justify-between">
                  <Image
                    src={feature.image}
                    alt=""
                    loading="lazy"
                    className="rounded-xl md:rounded-2xl h-fit object-cover"
                  />
                  <div className="h-fit w-full">
                    <h2 className="leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535] font-[TTChocolates] font-extrabold border-b border-[#353535] py-2 md:py-4">
                      {feature.name}
                    </h2>
                    <p2 className="text-[#353535]">{feature.date}</p2>
                  </div>
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-between">
                  <Image
                    src={feature.image2}
                    alt=""
                    loading="lazy"
                    className="rounded-xl md:rounded-3xl h-fit object-cover"
                  />
                  <div className="h-fit w-full">
                    <h2 className="leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535] font-[TTChocolates] font-extrabold border-b border-[#353535] py-2 md:py-4">
                      {feature.name2}
                    </h2>
                    <p2 className="text-[#353535]">{feature.date2}</p2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex space-x-6 md:space-x-10 justify-center self-center">
          <button
            onClick={handlePrevClick}
            className={`pointer-events-auto shadow-2xl text-white h-[60px] w-[60px] bg-[#760135] rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNextClick}
            className={`pointer-events-auto shadow-2xl text-white h-[60px] w-[60px] bg-[#760135] rounded-full flex items-center justify-center text-[40px] ${
              activeIndex === features.length - 1
                ? "cursor-not-allowed opacity-50"
                : "active:scale-90"
            }`}
            disabled={activeIndex === features.length - 1}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AwardsCrousel;
