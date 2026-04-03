import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Award1 from "../../public/Homepage/awards/Award1.png";
import Award2 from "../../public/Homepage/awards/Award2.png";
import Award4 from "../../public/Homepage/awards/Award4.png";

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
    <div className="flex w-full md:w-1/2 flex-col items-center">

      <h3 className="font-[CarotSlab] pt-8 px-4 text-[clamp(20px,2.3vw,40px)] text-[#242424] text-center">
        {title}
      </h3>

      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col py-4 px-4 gap-4 mx-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl object-cover"
                />

                <div>
                  <h2 className="text-lg font-bold border-b pb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex space-x-6 justify-center mt-4">
          <button
            onClick={handlePrevClick}
            className="h-[50px] w-[50px] bg-[#760135] text-white rounded-full flex items-center justify-center"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNextClick}
            className="h-[50px] w-[50px] bg-[#760135] text-white rounded-full flex items-center justify-center"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeAwards = () => {
  const swiperRefAwards = useRef();
  const [activeIndexAwards, setActiveIndexAwards] = useState(0);

  const awards = [
    {
      image: Award2,
      name: "Institute with best placements by Indian Education Awards",
      date: "2024",
    },
    {
      image: Award1,
      name: "HNN awarded Tulas as Best Engineering college",
      date: "2023",
    },
    {
      image: Award4,
      name: "Best Engineering College in North India",
      date: "2019",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row">

      {/* ✅ RANKINGS (STATIC) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10">

        <h3 className="text-[clamp(28px,3vw,40px)] font-bold text-[#242424] mb-4">
          AWARDS
        </h3>

        <h4 className="text-xl font-semibold text-orange-500 mb-3">
          Recognized Excellence Across India
        </h4>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Tulas Institute has consistently earned recognition among the top
          private institutions in India. With strong academic performance,
          industry-oriented curriculum, and excellent placement records, the
          institute continues to secure notable positions in national rankings.
          These achievements reflect our commitment to quality education,
          innovation, and student success.
        </p>

      </div>

      {/* ✅ AWARDS (CAROUSEL SAME AS BEFORE) */}
      <CarouselSection
        data={awards}
        swiperRef={swiperRefAwards}
        activeIndex={activeIndexAwards}
        setActiveIndex={setActiveIndexAwards}
      />

    </div>
  );
};

export default HomeAwards;