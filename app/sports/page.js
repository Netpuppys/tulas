"use client";
import Banner from "@/component/Banner";
import React, { useRef } from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import SportsScroll from "./Component/Sport";
import background from "../../public/infrastructure/HostelMess/background.png";
import Image from "next/image";
function Sports() {
  const parentRef = useRef(null);
  return (
    <>
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
        <div className="relative">
          <Image
            src={background}
            className="absolute bottom-0 left-0 w-full"
            alt=""
          />
          <Image src={background} className="absolute left-0 w-full" alt="" />
          <SportsScroll parentRef={parentRef} />
        </div>

        <div className="w-full h-screen bg-blue ">dbif</div>
      </div>
      <Footer color={true} />
    </>
  );
}

export default Sports;
