import React, { useRef } from "react";
import Image from "next/image";
import mbaBackground from "../../../public/graduate-school-of-business/mba/mbaBackground.png";
import placementInternship from "../../../public/graduate-school-of-business/mba/placementInternship.webp";

function Placement({ scrollRef }) {
  const swiperRef = useRef();

  return (
    <div className="w-full relative">
      <Image
        src={mbaBackground}
        alt=""
        className="w-full h-full absolute object-cover -z-10"
      />
      <div className="relative z-20">
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
                    block: "center",
                  })
                }
                className={`w-[calc(100%-32px)] md:w-[30%] mx-auto max-w-[400px] bg-[#007A83] text-[#FFFFFF] cursor-pointer py-3 rounded-[8px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.1vw,45px)]`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <h4 className="px-8 md:px-0 text-center w-full pb-16 md:pb-8 font-[TTChocolates] text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] text-white">
          Copyright ©2024 All Rights Reserved for TULAS
        </h4>
      </div>
    </div>
  );
}

export default Placement;
