"use client";

import React from "react";
import BannerImg from "../../../../public/courses/btech/civil-engineering/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  features,
  heading,
  hod,
  HODcontent,
  items,
  itemsClubs,
  quotes,
  sections,
  selectedCardTable,
  semesterData,
  sideImages,
} from "./data/data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/BTech.pdf";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Best Civil Engineering Colleges in Dehradun | Best B.Tech College
        </title>
        <meta
          name="description"
          content="Tula’s Institute is a reputed Best Civil Engineering Colleges in Dehradun Uttarakhand. Department of Civil Engineering has evolved a comprehensive student-centric learning approach."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram image={BannerImg} title={<>CIVIL ENGINEERING (CE)</>} />
        <Program
          sideImages={sideImages}
          content={content}
          heading={heading}
          quotes={quotes}
        />
        <CarouselProgram
          heading={"Discover"}
          items={items}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
        />
        <Vision color={true} sections={sections} />
        <div className="w-full overflow-x-scroll">
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyData}
            hod={hod}
            HODcontent={HODcontent}
          />
        </div>
        <DownloadFeeStructure pdf={BTechFee} />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <CarouselProgram
          heading={"Explore More"}
          items={itemsClubs}
          background={exploreCrouselBackground}
          backgroundCrousel={exploreCrouselBackground}
        />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
