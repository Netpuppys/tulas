"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/bsc-agriculture/background.png";
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
  selectedCardTable,
  hod,
  HODcontent,
  semesterData,
} from "./data/data";
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
          MC<span className="text-[#760135]">A</span>
        </>
        titleColor={""}
        description={
          "MCA is a two-year master’s degree program in computer applications. The need for computer professionals is constantly rising globally due to the rapid expansion of the IT industry."
        }
      />
      <Program parentRef={parentRef} images={images} content={content} />
      <CarouselProgram
        heading={"Discover"}
        items={items}
        color={true}
        background={background}
      />
      <Vision sections={sections} />
      <TableProgram
        cards={cards}
        selectedCardTable={selectedCardTable}
        semesterData={semesterData}
        facultyData={facultyData}
        hod={hod}
        HODcontent={HODcontent}
      />
      <TopRecruiter />
      <CarouselProgram
        heading={"Explore More"}
        items={itemsClubs}
        color={true}
        background={background}
      />

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

export default MBA;
