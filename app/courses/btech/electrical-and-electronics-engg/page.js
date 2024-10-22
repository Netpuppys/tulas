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
  facultyData,
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
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
          Department of Electrical{" "}
          <span className="text-[#760135]">& Electronics Engineering</span>
        </>
        titleColor={""}
        description={
          "Department of Electrical and Electronics Engineering started since inception of the institute i.e. 2006, with a vision to become a leading Centre of Excellence for Education for creating employability in field of  Power Systems, Power Electronics, Automation, VLSI, Control Systems, Electric Vehicles, Computer Vision, and Artificial Intelligence, Renewable Energy resources, Smart Grids and IoT networks."
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
