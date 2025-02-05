"use client";
import React from "react";
import BannerImg from "../../public/diploma-in-civil-engineering/banner.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  sections,
  selectedCardTable,
} from "./data/data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Diploma in Civil Engineering | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Earn a Diploma in Civil Engineering at Tula's Institute, the best diploma college in Dehradun, Uttarakhand. Build a solid foundation for your career in civil engineering with our comprehensive program."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>DIPLOMA IN CIVIL ENGINEERING</>
        />
        <Program content={content} belowSpace={true} />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCardTable={selectedCardTable}
          facultyData={facultyData}
        />
        <PlacementProgram />
        <TopRecruiter />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
