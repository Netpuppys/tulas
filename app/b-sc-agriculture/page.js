"use client";
import React, { useRef } from "react";
import BannerProgram from "@/component/Programs/BannerProgram";
import BannerImg from "../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../public/bsc-agriculture/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
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
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import TopRecruiter from "@/component/topRecruiter";

function BSCAgriculture() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <div className="w-full h-fit bg-white">
        <Navbar position={true} />
      </div>
      <BannerProgram
        image={BannerImg}
        title={"BSc."}
        titleColor={"Agriculture"}
        description={
          "B.Sc. Agriculture is a four-year UG (Undergraduate) degree program that focuses on theoretical and practical training in various agricultural techniques. B.Sc. Agriculture offers a wide range of opportunities for graduates to work in various sectors of agriculture, from technical aspects to commercial opportunities, and from production to sales."
        }
      />

      <Program parentRef={parentRef} images={images} content={content} />
      <CarouselProgram heading={"Discover"} items={items} />
      <Vision sections={sections} />
      <TableProgram
        cards={cards}
        selectedCard1={selectedCard1}
        semesterData={semesterData}
        facultyData={facultyData}
      />
      <TopRecruiter />
      <CarouselProgram heading={"Explore More"} items={itemsClubs} />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Footer color={true} />
    </div>
  );
}

export default BSCAgriculture;
