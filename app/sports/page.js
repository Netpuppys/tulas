"use client";

import Banner from "@/component/Banner";
import React, { useRef } from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import SportsScroll from "./Component/Sport";
import background from "../../public/infrastructure/HostelMess/background.png";
import Image from "next/image";

const TextBanner = ({ filledText }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-transparent">
      <p
        style={
          filledText
            ? {
                color: "#ffffff",
                textShadow: "0px 0.83px 8.295px rgba(0, 0, 0, 0.40)",
              }
            : {
                color: "transparent",
                WebkitTextStrokeColor: "#fff",
                WebkitTextStrokeWidth: "0.1px",
              }
        }
        className="font-[TTChocolatesbold] text-center text-[6rem] font-black tracking-[0.10369rem]  leading-[2.38494rem]"
      >
        EXPLORE MORE
        <span className="text-[7rem] block leading-[7.64388rem]">Sports</span>
      </p>
    </div>
  );
};

function Sports() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Sports | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Discover the vibrant sports culture at Tula's Institute, offering state-of-the-art facilities and opportunities for students to excel in various sports and physical activities."
        />
      </head>
      <body>
        <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                SPORTS <span className="text-[#007A83]">FACILITIES</span>
              </>
            }
            description={<></>}
            belowTitle="SPORTS INFRASTRUCTURE"
            belowPara="Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers"
          />

          <div className="relative min-h-screen h-fit">
            <Image
              src={background}
              className="absolute left-0 w-full h-fit object-cover"
              alt=""
            />

            {/* <div className="fixed top-0 left-0 z-[10]">
            <TextBanner
              filledText={true}
            />
          </div>

          <div className="fixed top-0 left-0 z-[50]">
            <TextBanner
              filledText={false}
            />
          </div>

          <div className="w-full h-fit flex flex-wrap z-[30] relative">
            {[1,1,1,1,1,1,1,1].map((_, index) => (
              <div className="w-1/2 h-80 relative">
                <div className="rounded-full bg-red-600 absolute top-10 left-1/2 w-60 aspect-square ">

                </div>
              </div>
            ))}
          </div> */}
          </div>
        </div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default Sports;
