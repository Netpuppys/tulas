"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../../public/bsc-agriculture/background.png";
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
  semesterData,
  facultyData,
  specialization,
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
          Department of Electronics{" "}
          <span className="text-[#760135]">& Communication Engineering</span>
        </>
        titleColor={""}
        description={
          "The department started since inception of the institute i.e. 2006, with a vision to become a leading Centre of Excellence for Education, and Research.  Since then, it has been widely recognized for its excellent research and teaching capabilities. We offer Bachelor of Technology (B.Tech.) degree program in Electronics and Communication Engineering. "
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
        specialization={specialization}
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

export default BAJMC;
