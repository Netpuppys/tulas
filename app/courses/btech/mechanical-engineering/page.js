"use client";
import React from "react";
import BannerImg from "../../../../public/courses/btech/mechanical-engineering/bannerImg.webp";
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
  hod,
  HODcontent,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
  facultyData,
  specialization,
  sideImages,
  heading,
  quotes,
  features,
} from "./data/data";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/BTech.pdf";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Best Mechanical Engineering College in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the best Mechanical Engineering College in Dehradun, Uttarakhand, Among a myriad of engineering activities, the Mechanical Engineering Department has been a focal point of the Tula's Institute, Dehradun top engineering colleges Dehradun."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>Department of MECHANICAL ENGINEERING (ME)</>
          titleColor={""}
        />
        <Program
          content={content}
          sideImages={sideImages}
          heading={heading}
          quotes={quotes}
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
          facultyData={facultyData}
          hod={hod}
          HODcontent={HODcontent}
          specialization={specialization}
        />
        <DownloadFeeStructure pdf={BTechFee} />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <CarouselProgram
          heading={"Explore More"}
          items={itemsClubs}
          color={true}
          background={exploreCrouselBackground}
          backgroundCrousel={exploreCrouselBackground}
        />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
