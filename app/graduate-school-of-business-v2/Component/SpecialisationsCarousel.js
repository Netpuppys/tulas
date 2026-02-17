"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import AnalyticsImg from "../../../public/graduate-school-of-business-v2/mba/buisnessanys.png";

const data = [
  {
    image: AnalyticsImg,
    tag: "BUSINESS ANALYTICS",
    title: "TURNING DATA INTO DECISIONS",
    desc:
      "Designed for a data-driven economy, this course goes beyond dashboards. Gain hands-on experience with analytics tools, real-world datasets, and case studies.",
  },
  {
    image: AnalyticsImg,
    tag: "FINANCE",
    title: "MASTERING FINANCIAL STRATEGY",
    desc:
      "Build expertise in financial analysis, investment planning, risk management, and corporate finance.",
  },
  {
    image: AnalyticsImg,
    tag: "MARKETING",
    title: "BUILDING POWERFUL BRANDS",
    desc:
      "Learn consumer behavior, digital marketing strategies, brand management, and growth marketing.",
  },
];

export default function SpecialisationsCarousel() {
  const swiperRef = useRef();

  return (
    <section className="bg-white py-5 px-4 overflow-visible">
      {/* Heading */}
     <h2 className="text-[clamp(32px,6vw,48px)] font-light mb-6 text-[#1a1a1a] leading-[1.25] tracking-wide">
      SPECIALISATIONS <br /> WE OFFER
     </h2>


      {/* Slider */}
      <div className="relative">
        <Swiper
        ref={swiperRef}
        spaceBetween={24}
        slidesPerView={1}
        className="px-1 md:px-0"
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SpecialisationCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows (desktop only like design) */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 z-20 pointer-events-none">
          <Arrow onClick={() => swiperRef.current.swiper.slidePrev()}>
            <IoIosArrowBack />
          </Arrow>
          <Arrow onClick={() => swiperRef.current.swiper.slideNext()}>
            <IoIosArrowForward />
          </Arrow>
        </div>
      </div>
    </section>
  );
}
function SpecialisationCard({ item }) {
  return (
    <div className="flex flex-col">
      {/* Image card */}
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.tag}
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 bg-orange-500 rounded-full" />
          <p className="text-sm font-light text-[#1a1a1a]">{item.tag}</p>
        </div>

        <h3 className="text-2xl font-light mb-4 text-[#1a1a1a]">
          {item.title}
        </h3>

        <p className="text-gray-600 font-light leading-relaxed">
          {item.desc}
        </p>

        <button className="mt-6 w-full bg-[#1f1f1f] text-orange-500 py-4 text-lg font-semibold">
          APPLY NOW
        </button>
      </div>
    </div>
  );
}
const Arrow = ({ onClick, children }) => (
<button
  onClick={onClick}
  className="pointer-events-auto bg-white shadow-xl w-14 h-14 rounded-full flex items-center justify-center text-3xl active:scale-90 transition"
>
    {children}
  </button>
);
