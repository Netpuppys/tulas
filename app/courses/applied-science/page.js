"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/Programs/BannerProgram";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  images,
  items,
  itemsClubs,
  sections,
} from "./data/data";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <div className="w-full h-fit bg-white">
        <Navbar position={true} />
      </div>
      <BannerProgram
        image={BannerImg}
        title=<>
          DEPARTMENT OF{" "}
          <span className="text-[#760135]">APPLIED SCIENCES & ENGINEERING</span>
        </>
        titleColor={""}
        description={
          "The Department of Applied Sciences & Engineering is an initiating and supporting department for the Institute’s engineering and other departments. Mathematics, Physics, Chemistry, Environmental Science, foundation of Engineering and Professional Communication are among the core courses covered by the department."
        }
      />
      <Program parentRef={parentRef} images={images} content={content} />
      <CarouselProgram heading={"Discover"} items={items} />
      <Vision sections={sections} />
      <TableProgram cards={cards} facultyData={facultyData} />
      <TopRecruiter />
      
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
