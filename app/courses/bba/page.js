"use client";
import React from "react";
import BannerImg from "../../../public/courses/bba/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  features,
  items,
  itemsClubs,
  sections,
  selectedCard1,
  semesterData,
} from "./data/data";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BBAFee from "../../../public/FeeStructure/BBA.pdf";
function BBA() {
  return (
    <>
      <head>
        <title>
          Best BBA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's is the Best BBA College in Dehradun, Uttarakhand, Tula's is the Top BBA College in all over Uttarakhand 100% placements record in top-level MNC companies, for more info call on admission helpline."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>BBA</>
          titleColor={""}
          description={""}
        />
        <Program content={content} />
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
          selectedCard1={selectedCard1}
          semesterData={semesterData}
          facultyData={facultyData}
        />
        <DownloadFeeStructure pdf={BBAFee} />
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

export default BBA;
