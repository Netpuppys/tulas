"use client";
import React from "react";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
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
  specialization,
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
          Best EEE Engineering College in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the best EEE Colleges in Dehradun with a good campus placement record in Electrical and Electronics Engg, the Best engineering college in Dehradun, for students applying for both undergraduate and post-graduate programs."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>Department of Electrical & Electronics Engineering (EEE)</>
          titleColor={""}
          description={""}
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
          background={exploreCrouselBackground}
          backgroundCrousel={exploreCrouselBackground}
        />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
