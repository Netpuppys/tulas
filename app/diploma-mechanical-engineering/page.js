"use client";
import React from "react";
import BannerImg from "../../public/diploma-in-mechanical-engineering/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import {
  cards,
  content,
  facultyData,
  hod,
  HODcontent,
  images,
  sections,
  selectedCardTable,
  semesterData,
} from "./data/data";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import TopRecruiter from "@/component/topRecruiter";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";

function BSCAgriculture() {
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
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>DIPLOMA IN MECHANICAL ENGINEERING</>
        />
        <Program images={images} content={content} belowSpace={true} />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCardTable={selectedCardTable}
          semesterData={semesterData}
          hod={hod}
          HODcontent={HODcontent}
          facultyData={facultyData}
        />
        <PlacementProgram />
        <TopRecruiter />
        <Footer />
      </body>
    </>
  );
}

export default BSCAgriculture;
