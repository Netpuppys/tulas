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
  selectedCard1,
  semesterData,
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
          BA.<span className="text-[#760135]">JMC</span>
        </>
        titleColor={""}
        description={
          "Bachelor of Journalism & Mass Communication is a three year interdisciplinary program in which students learn holistically about media and its various aspects. Students learn the underpinning theories related to media, its history, and its legal and ethical obligations."
        }
      />
      <Program parentRef={parentRef} images={images} content={content} />
      <CarouselProgram
        heading={"Discover"}
        items={items}
        background={background}
      />
      <Vision sections={sections} />
      <TableProgram
        cards={cards}
        selectedCard1={selectedCard1}
        semesterData={semesterData}
        facultyData={facultyData}
      />
      <TopRecruiter />
      <CarouselProgram
        heading={"Explore More"}
        items={itemsClubs}
        background={background}
      />
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
