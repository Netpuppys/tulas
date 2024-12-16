"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../../public/bsc-agriculture/background.png";
import Footer from "@/component/Footer";
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
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
import Banner from "@/component/Banner";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best Computer Science Engineering College in Dehradun | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is the Best Computer Science Engineering College in Dehradun for students who are applying for both undergraduate and post-graduate programs Tula's offers vast knowledge in the field of computer science to produce quality engineers graduates who can solve real-time problems."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>COMPUTER SCIENCE & ENGINEERING (CSE)</>
            titleColor={""}
            // description={
            //   "Bachelor of Technology in Computer Science & Engineering (B.Tech. CSE) is one of the most sought-after engineering degrees. The program teaches students about computer applications and systems in order to prepare them for a career in the IT industry."
            // }
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            color={true}
            background={background}
          />
          <Vision color={true} sections={sections} />
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyDataCSE}
            hod={hod}
            HODcontent={HODcontent}
          />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={background}
            color={true}
          />
          {/* <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div> */}
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BAJMC;
