"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../../public/courses/bjmc/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/Programs/BannerProgram";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
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
          COMPUTER SCIENCE{" "}
          <span className="text-[#760135]">& ENGINEERING (AI & ML)</span>
        </>
        titleColor={""}
        description={
          "AI and ML Fundamentals: Introduce students to the fundamental principles and techniques of artificial intelligence and machine learning, covering areas like supervised and unsupervised learning, deep learning, reinforcement learning, and natural language processing."
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
        selectedCardTable={selectedCardTable}
        facultyData={facultyDataCSE}
        hod={hod}
        HODcontent={HODcontent}
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
