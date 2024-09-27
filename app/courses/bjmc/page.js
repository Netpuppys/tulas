"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
import Image from "next/image";
import BJMC from "./Components/BJMC";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/BannerProgram/BannerProgram";
import Carousel from "./Components/Crousel";
import Vision from "./Components/Vision";
import Table from "./Components/table";
import ClubsCrousel from "./Components/ClubsCrousel";
import TopRecruiter from "../../../component/topRecruiter";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <div className="w-full h-fit bg-white">
        <Navbar position={true} />
      </div>
      <BannerProgram
        image={BannerImg}
        title={"BA."}
        titleColor={"JMC"}
        description={
          "Bachelor of Journalism & Mass Communication is a three year interdisciplinary program in which students learn holistically about media and its various aspects. Students learn the underpinning theories related to media, its history, and its legal and ethical obligations."
        }
      />

      <BJMC parentRef={parentRef} />
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

export default BAJMC;
