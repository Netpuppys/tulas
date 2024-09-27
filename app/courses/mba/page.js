"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
import Image from "next/image";
import Mba from "./Components/MBA";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/BannerProgram/BannerProgram";
import Carousel from "./Components/Crousel";
import Vision from "./Components/Vision";
import Table from "./Components/table";
import ClubsCrousel from "./Components/ClubsCrousel";
import TopRecruiter from "../../../component/topRecruiter";
function MBA() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <div className="w-full h-fit bg-white">
        <Navbar position={true} />
      </div>
      <BannerProgram
        image={BannerImg}
        title=<>
          MB<span className="text-[#760135]">A</span>
        </>
        titleColor={""}
        description={
          "Master of Business Administration (MBA) program is a two year degree program planned to encourage the capacities expected from world class managers and entrepreneurs. The scope of MBA aspirant, regardless, isn’t limited rigidly to the business world but also to the public region, government, private industry, and various areas."
        }
      />

      <Mba parentRef={parentRef} />
      <Carousel />
      <Vision />
      <Table />
      <TopRecruiter />
      <ClubsCrousel />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default MBA;
