"use client";
import React, { useContext } from "react";
import Link from "next/link";
import icon360 from "../../public/Homepage/Virtual/360icon.png";
import { UtmContext } from "@/component/utmParams";
import Image from "next/image";
function Virtual() {
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="py-8 md:py-[4%] h-fit w-full flex flex-col justify-center items-center px-4 md:px-0">
      <div className="font-[CarotSlab] pb-8 md:pb-[3%] px-4 text-wrap text-[clamp(20px,5.3vw,55px)] md:text-[clamp(20px,1.8vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-none z-10 text-center">
        Virtual Walkthrough of Campus with 360-degree tour
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="flex w-full md:w-[85%] flex-col md:flex-row justify-between items-center md:gap-16">
        <Link
          href={`/virtual-tour/index.html${utmParams}`}
          className="w-full md:w-[85%] mx-auto h-[35vh] min-h-[250px] relative bg-black rounded-xl overflow-hidden mb-8 md:mb-0"
        >
          <iframe
            className="w-full h-full absolute opacity-40 bg-black"
            allow="autoplay"
            allowvr="true"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://s3.ap-south-1.amazonaws.com/tulas.edu/tour.html"
          />
          <div className="absolute flex flex-col justify-center w-full h-full text-center items-center">
            <Image src={icon360} className="text-white text-[80px]" />

            <h5
              className="text-[31px] text-white"
              style={{
                fontFamily: "Reem Kufi",
              }}
            >
              360 Degree Campus Tour
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Virtual;
