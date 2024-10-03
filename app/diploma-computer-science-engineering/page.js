"use client";
import React, { useRef } from "react";
import BannerImg from "../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../public/courses/bjmc/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/Programs/BannerProgram";
import TopRecruiter from "../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  images,
  sections,
  semesterData,
  hod,HODcontent,
  selectedCardTable,
} from "./data/data";
import { facultyDataCSE } from "../courses/btech/facultyDataCSE";
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
          DIPLOMA IN{" "}
          <span className="text-[#760135]">COMPUTER SCIENCE ENGINEERING</span>
        </>
        titleColor={""}
        description={
          "The Diploma program in Computer Science and Engineering program is a three-year undergraduate program. The Diploma program in Computer Science & Engineering stands out as one of the most coveted engineering program, shaping individuals for thriving careers in the IT industry."
        }
      />
      <Program parentRef={parentRef} images={images} content={content} />

      <Vision sections={sections} />
      <TableProgram
        cards={cards}
        selectedCardTable={selectedCardTable}
        semesterData={semesterData}
        facultyData={facultyDataCSE}
        hod={hod}
        HODcontent={HODcontent}
      />
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
