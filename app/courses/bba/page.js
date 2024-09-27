"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/bsc-agriculture/background.png";
import Image from "next/image";
import Bba from "./Components/Bba";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/BannerProgram/BannerProgram";
import Carousel from "./Components/Crousel";
import Vision from "./Components/Vision";
import Table from "./Components/table";
import ClubsCrousel from "./Components/ClubsCrousel";
import TopRecruiter from "../../../component/topRecruiter";
function BBA() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <div className="w-full h-fit bg-white">
        <Navbar position={true} />
      </div>
      <BannerProgram
        image={BannerImg}
        title=<>
          BB<span className="text-[#760135]">A</span>
        </>
        titleColor={""}
        description={
          "The three-year Bachelor of Business Administration (BBA) program is designed keeping in mind the needs of the bright students who are looking for a career in entrepreneurship, management profession or towards higher education in business administration."
        }
      />

      <Bba parentRef={parentRef} />
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

export default BBA;
