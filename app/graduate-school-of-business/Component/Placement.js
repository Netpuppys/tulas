import React, { useRef, useState } from "react";
import Image from "next/image";
import mbaBackground from "../../../public/graduate-school-of-business/mba/mbaBackground.png";
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
import { Autoplay } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Placement({ scrollRef, features }) {
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
      <div className="relative z-20">
        <div className="w-full md:w-[85%] mx-auto overflow-hidden">
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
                <div className="flex flex-col md:flex-row pt-4 md:pt-[2%] h-full px-4 w-full md:w-[85%] md:px-0 gap-4 md:gap-12 mx-auto">
                  <div className="w-full md:w-[50%] h-full relative flex flex-col justify-between">
                    <Image
                      src={feature.image}
                      alt=""
                      className="rounded-xl w-full md:rounded-2xl h-fit object-cover"
                    />
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col justify-between">
                    <Image
                      src={feature.image2}
                      alt=""
                      className="rounded-xl w-full md:rounded-3xl h-fit object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-8 px-4 md:px-6 md:py-[4%] w-full md:w-[80%] mx-auto flex flex-col justify-center items-center">
          <Image
            src={placementInternship}
            alt=""
            className="w-full md:max-w-[60vw] aspect-[1.6/1] md:aspect-auto object-cover relative z-10 rounded-xl mx-auto h-fit -mb-4 md:-mb-[39px]"
          />
          <div className="relative w-[95%] bg-[#FFFFFF] md:w-full rounded-xl overflow-hidden z-20 h-full">
            <div className="w-full h-full flex flex-col py-8 md:py-[4%] md:pb-[2%] gap-6 items-center ">
              <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight  md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
                Placements & Internships
              </h8>
              <h4 className="px-8 md:px-0 w-full md:max-w-[85%] md:text-justify mx-auto font-[TTChocolates] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
                The primary objective of the Training and Placement Cell at
                Tula’s Institute is to prepare and empower students for
                successful campus recruitment. Our goal is to equip students
                with the necessary skills and confidence to excel in interviews
                and secure rewarding career opportunities. We provide training
                that focuses on:
              </h4>
              <ul className="flex flex-col md:flex-row font-bold list-disc px-8 md:px-0 w-full md:max-w-[85%] font-[TTChocolates] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535] justify-between">
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
                className={`w-[calc(100%-32px)] md:w-[30%] mx-auto max-w-[400px] bg-[#007A83] text-[#FFFFFF] cursor-pointer py-3 rounded-[8px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.1vw,45px)]`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-[80%] px-4 md:px-6 mx-auto flex flex-col md:flex-row gap-3 md:gap-[10%]">
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
                  <h3 className="font-[TTChocolatesMedium] text-[14px] md:text-[clamp(10px,1vw,100px)] leading-tight text-[#000000] font-extrabold">
                    {card.title}
                  </h3>
                </div>
                <Image
                  src={card.icon}
                  alt=""
                  className="w-[65px] md:w-[3vw] h-fit"
                />
              </div>
              <h3 className="font-[TTChocolatesMedium] mt-2 text-[14px] md:text-[clamp(10px,1vw,100px)] leading-tight text-[#000000] font-normal">
                {card.desc}
              </h3>
            </div>
          ))}
        </div> */}

        {/* <div className="flex px-4 pr-1 md:px-6 md:pr-3 flex-wrap gap-3 w-full h-full py-8 md:py-20 md:pb-14">
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
        </div> */}
        <h4 className="px-8 md:px-0 text-center w-full pb-16 md:pb-8 font-[TTChocolates] text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] text-white">
          Copyright ©2024 All Rights Reserved for TULAS
        </h4>
      </div>
    </div>
  );
}

export default Placement;
