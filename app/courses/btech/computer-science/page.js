"use client";

import React from "react";
import Navbar from "@/component/Navbar/Navbar";
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
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
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import contentLeft from "../../../../public/courses/btech/computer-science/contentLeft.webp";
import contentRight from "../../../../public/courses/btech/computer-science/contentRight.webp";
import topBanner from "../../../../public/courses/btech/computer-science/topBanner.webp";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/CSE.pdf";
import CSEFaculty from "../../../../public/courses/all-faculty/CSE.pdf";
import ReadFaculty from "@/component/Programs/ReadFaculty";
const sideImages = [contentLeft, contentRight];

function page() {
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
        <Navbar />
        <BannerProgram
          image={topBanner}
          title={<>COMPUTER SCIENCE & ENGINEERING (CSE)</>}
          titleColor={""}
        />

        <Program
          content={content}
          heading={heading}
          quotes={quotes}
          sideImages={sideImages}
        />

        <CarouselProgram
          heading={"Discover"}
          items={items}
          color={true}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
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
        <ReadFaculty pdf={CSEFaculty}/>
        <DownloadFeeStructure pdf={BTechFee} />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <CarouselProgram
          heading={"Explore More"}
          items={itemsClubs}
          background={exploreCrouselBackground}
          backgroundCrousel={exploreCrouselBackground}
          color={true}
        />
        <Footer />
      </body>
    </>
  );
}

export default page;
