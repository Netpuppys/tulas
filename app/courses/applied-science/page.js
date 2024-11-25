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
  sections,
} from "./data/data";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Department of Applied Sciences & Humanities | Best Engineering College
          in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Department of Applied Sciences & Humanities at Tula’s Institute, the leading engineering college in Dehradun, Uttarakhand. Learn about our innovative programs, research opportunities, and dedicated faculty."
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
              Department of{" "}
              <span className="text-[#760135]">
                Applied Science and Humanities
              </span>
            </>
            titleColor={""}
            description={
              "Department of Applied Sciences and Humanities at Tula's Institute, Dehradun, is a foundational learning and interdisciplinary growth hub. The Department caters to introductory science courses like Physics, Chemistry, Mathematics, Environmental studies, and English, laying the groundwork for students across engineering and management programs to excel in their chosen fields."
            }
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={background}
          />
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
      </body>
    </>
  );
}

export default BAJMC;
