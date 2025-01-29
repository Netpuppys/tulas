import React, { useRef, useState } from "react";
import Image from "next/image";
import mbaBackground from "../../../public/graduate-school-of-business/mba/mbaBackground.png";
import placement1 from "../../../public/graduate-school-of-business/mba/placement1.webp";
import placement2 from "../../../public/graduate-school-of-business/mba/placement2.webp";
import placement3 from "../../../public/graduate-school-of-business/mba/placement3.webp";
import placement4 from "../../../public/graduate-school-of-business/mba/placement4.webp";
import placement5 from "../../../public/graduate-school-of-business/mba/placement5.webp";
import placement6 from "../../../public/graduate-school-of-business/mba/placement6.webp";
import placement7 from "../../../public/graduate-school-of-business/mba/placement7.webp";
import placement8 from "../../../public/graduate-school-of-business/mba/placement8.webp";
import placement9 from "../../../public/graduate-school-of-business/mba/placement9.webp";
import place1 from "../../../public/graduate-school-of-business/mba/place1.webp";
import place2 from "../../../public/graduate-school-of-business/mba/place2.webp";
import place3 from "../../../public/graduate-school-of-business/mba/place3.webp";
import place4 from "../../../public/graduate-school-of-business/mba/place4.webp";
import place5 from "../../../public/graduate-school-of-business/mba/place5.webp";
import place6 from "../../../public/graduate-school-of-business/mba/place6.webp";
import place7 from "../../../public/graduate-school-of-business/mba/place7.webp";
import place8 from "../../../public/graduate-school-of-business/mba/place8.webp";
import place9 from "../../../public/graduate-school-of-business/mba/place9.webp";
import byjus from "../../../public/graduate-school-of-business/mba/byjus.png";
import tcs from "../../../public/graduate-school-of-business/mba/tcs.png";
import kpmg from "../../../public/graduate-school-of-business/mba/kpmg.png";
import ibm from "../../../public/graduate-school-of-business/mba/ibm.png";
import reliance from "../../../public/graduate-school-of-business/mba/reliance.png";
import makeMyTrip from "../../../public/graduate-school-of-business/mba/makeMyTrip.png";
import deutsche from "../../../public/graduate-school-of-business/mba/deutsche.png";
import sbi from "../../../public/graduate-school-of-business/mba/sbi.png";
import icici from "../../../public/graduate-school-of-business/mba/icici.png";
import extraMark from "../../../public/graduate-school-of-business/mba/extraMark.png";
import wipro from "../../../public/graduate-school-of-business/mba/wipro.png";
import intership from "../../../public/graduate-school-of-business/mba/intership.png";
import placementInternship from "../../../public/graduate-school-of-business/mba/placementInternship.png";
import placements from "../../../public/graduate-school-of-business/mba/placements.png";
import highest from "../../../public/graduate-school-of-business/mba/highest.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMobile } from "@/component/IsMobileContext";

function Placement({ scrollRef }) {
  const { isMobile } = useMobile();
  const placement = [
    placement1,
    placement2,
    placement3,
    placement4,
    placement5,
    placement6,
    placement7,
    placement8,
    placement9,
  ];
  const placementDesktop = [
    place1,
    place2,
    place3,
    place4,
    place5,
    place6,
    place7,
    place8,
    place9,
  ];
  const selectedPlacement = isMobile ? placement : placementDesktop;
  const logo = [
    byjus,
    tcs,
    kpmg,
    ibm,
    reliance,
    makeMyTrip,
    deutsche,
    sbi,
    icici,
    extraMark,
    wipro,
    sbi,
  ];
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const internship = [
    {
      icon: intership,
      value: "100%",
      title: "INTERNSHIP OFFERS",
      desc: "Global opportunities to work and gain exposure with dream companies.",
    },
    {
      icon: placements,
      value: "100%",
      title: "PLACEMENTS",
      desc: "750+ companies including Fortune 500 companies as our hiring partners.",
    },
    {
      icon: highest,
      value: "36.6 LPA",
      title: "HIGHEST PACKAGE",
      desc: "We believe in providing dream jobs with handsome salary packages.",
    },
  ];

  return (
    <div className="w-full relative">
      <Image
        src={mbaBackground}
        alt=""
        className="w-full h-full absolute object-cover -z-10"
      />
      <div className="relative z-20 ">
        <div className="pt-8 md:pt-10 w-full">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            ref={swiperRef}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
          >
            {selectedPlacement.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-fit flex gap-20">
                  <Image src={card} alt="" className="w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex w-fit mx-auto pt-8 md:pt-10 gap-2 self-center items-center">
            {selectedPlacement.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  swiperRef.current.swiper.slideToLoop(index); // Correctly navigate to logical index
                  setActiveIndex(index); // Update active index state
                }}
                className={`cursor-pointer`}
              >
                <div
                  className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full ${
                    activeIndex === index
                      ? "bg-[#FFFFFF] bg-opacity-100"
                      : "bg-[#C5C5C5] bg-opacity-50"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8 px-4 md:px-6 md:py-20 w-full md:w-[80%] mx-auto flex flex-col justify-center items-center">
          <Image
            src={placementInternship}
            alt=""
            className="w-full md:max-w-[60vw] relative z-10 rounded-xl mx-auto h-fit -mb-[39px]"
          />
          <div className="relative w-[95%] bg-[#FFFFFF] md:w-full rounded-xl overflow-hidden z-20 h-full">
            <div className="w-full h-full flex flex-col py-8 md:py-20 md:pb-10 gap-10 items-center ">
              <h8 className="text-[#101010] flex flex-col md:flex-row items-center justify-center leading-none gap-6 text-[40px] md:text-[clamp(20px,3vw,100px)] font-[Helvetica] font-light">
                Placements &
                <span className="text-[40px] md:text-[clamp(20px,3.2vw,100px)] text-[#007A83] font-[GoudyCatalogue] ">
                  Internships
                </span>
              </h8>
              <h4 className="px-8 md:px-0 w-full md:max-w-[85%] md:text-justify mx-auto font-[Helvetica] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-black">
                The primary objective of the Training and Placement Cell at
                Tula’s Institute is to prepare and empower students for
                successful campus recruitment. Our goal is to equip students
                with the necessary skills and confidence to excel in interviews
                and secure rewarding career opportunities. We provide training
                that focuses on:
              </h4>
              <ul className="flex flex-col md:flex-row font-bold list-disc px-8 md:px-0 w-full md:max-w-[85%] font-[Helvetica] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-black justify-between">
                <li>Communication Skills</li>
                <li>Personal and Professional Grooming</li>
                <li>Aptitude Development</li>
              </ul>
              <button
                style={{
                  boxShadow:
                    "10.677px 17.349px 33.364px 0px rgba(0, 122, 131, 0.51)",
                }}
                onClick={() =>
                  scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className={`w-[calc(100%-32px)] md:w-[30%] mx-auto max-w-[400px] bg-[#007A83] text-[#FFFFFF] cursor-pointer py-3 rounded-[8px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.1vw,45px)]`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] px-4 md:px-6 mx-auto flex flex-col md:flex-row gap-3 md:gap-[10%]">
          {internship.map((card, index) => (
            <div
              key={index}
              className="w-full px-5 py-3 bg-[#F5F5F5] rounded-md overflow-hidden"
            >
              <div className="w-full h-fit flex gap-20 justify-between items-center">
                <div className="w-full">
                  <h3 className="text-[25px] md:text-[clamp(10px,1.7vw,100px)] leading-tight text-[#830C44] font-bold">
                    {card.value}
                  </h3>
                  <h3 className="font-[TTChocolatesBold] text-[14px] md:text-[clamp(10px,1vw,100px)] leading-tight text-[#000000] font-extrabold">
                    {card.title}
                  </h3>
                </div>
                <Image
                  src={card.icon}
                  alt=""
                  className="w-[65px] md:w-[3vw] h-fit"
                />
              </div>
              <h3 className="font-[TTChocolatesBold] mt-2 text-[14px] md:text-[clamp(10px,1vw,100px)] leading-tight text-[#000000] font-normal">
                {card.desc}
              </h3>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex flex-col py-8 md:py-20 md:pb-10 gap-4 md:gap-10 items-center ">
          <h8 className="text-[#FFFFFF] flex flex-col md:flex-row items-center justify-center leading-none gap-6 text-[40px] md:text-[clamp(20px,3vw,100px)] font-[Helvetica] font-light">
            Our
            <span className="text-[40px] md:text-[clamp(20px,3.2vw,100px)] text-[#FFFFFF] font-[GoudyCatalogue] ">
              Recruiters
            </span>
          </h8>
          <h4 className="px-8 md:px-0 text-center md:text-start w-full md:max-w-[55%] font-[Helvetica] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-white">
            Give your career a boost with lucrative national & international
            internship and placement opportunities at Tula's Graduate School of
            Business.
          </h4>
        </div>
        <div className="flex px-4 pr-1 md:px-6 md:pr-3 flex-wrap gap-3 w-full h-full py-8 md:py-20 md:pb-14">
          {logo.map((card, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0px 6.099px 61.141px 0px rgba(0, 0, 0, 0.25) inset",
              }}
              className="w-[calc(50%-12px)] md:w-[calc(16.666%-12px)] px-[3%] py-[2%] flex justify-center items-center bg-[#F5F5F5] rounded-md overflow-hidden"
            >
              <Image src={card} alt="" className="w-full h-fit" />
            </div>
          ))}
        </div>
        <h4 className="px-8 md:px-0 text-center w-full pb-8 font-[Helvetica] text-[clamp(15px,4vw,30px)] md:text-[clamp(12px,1vw,45px)] text-white">
          Copyright ©2024 All Rights Reserved for TULAS
        </h4>
      </div>
    </div>
  );
}

export default Placement;
