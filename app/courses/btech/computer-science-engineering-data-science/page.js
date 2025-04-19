"use client";
import React from "react";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.webp";
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
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/CSE.pdf";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Best Computer Science & Engineering( Data Science) College in
          Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute Is the Best Computer Science & Engineering( Data Science) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (data Science) for Aspiring Professionals. Visit Now!"
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>COMPUTER SCIENCE & ENGINEERING (Data Science)</>
          titleColor={""}
        />
        <Program content={content} heading={heading} quotes={quotes} />
        <CarouselProgram
          heading={"Discover"}
          items={items}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
        />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCardTable={selectedCardTable}
          facultyData={facultyDataCSE}
          hod={hod}
          HODcontent={HODcontent}
        />
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
