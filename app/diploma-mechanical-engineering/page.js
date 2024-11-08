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
  sections,
  selectedCardTable,
  semesterData,
} from "./data/data";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import TopRecruiter from "@/component/topRecruiter";

function BSCAgriculture() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Diploma in Mechanical Engineering in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="We offer 3 Years Diploma course in Mechanical Engineering through creative and comprehensive education in Dehradun, Uttarakhand."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit bg-white">
            <Navbar position={true} />
          </div>
          <BannerProgram
            image={BannerImg}
            title=<>
              DIPLOMA IN{" "}
              <span className="text-[#760135]">MECHANICAL ENGINEERING</span>
            </>
            titleColor={""}
            description={
              "The Mechanical Engineering department of Tula’s Institute offers a three-year diploma in Mechanical Engineering, approved by AICTE and affiliated to Uttarakhand Board of Technical Education, Roorkee."
            }
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <Vision sections={sections} />
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <TopRecruiter />
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default BSCAgriculture;
