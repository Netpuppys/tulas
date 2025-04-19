"use client";

import React from "react";
import dpharmaBanner from "../../../public/courses/dpharm/dpharmaBanner.jpg";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import TableProgram from "@/component/Programs/tableProgram";
import programPdf from "../../../public/courses/dpharm/Program-Structure-D.Pharmacy.pdf";
import {
  cards,
  content,
  facultyData,
  features,
  heading,
  hod,
  HODcontent,
  items,
  quotes,
  selectedCard1,
  semesterData,
  sideImages,
} from "./data";
import BannerProgram from "@/component/Programs/BannerProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import DPharmaFee from "../../../public/FeeStructure/DPharma.pdf";
function DPharma() {
  return (
    <>
      <head>
        <title>Diploma In Pharmacy (D. Pharm.) in Dehradun</title>
        <meta
          name="description"
          content="Register Now! & Become a part of the best BJMC College in Dehradun. Tula's Institute has been awarded as the best Engineering & Management College in North India."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={dpharmaBanner}
          title={<>Diploma In Pharmacy (D. Pharm.)</>}
          titleColor={""}
          description={""}
        />
        <Program
          heading={heading}
          content={content}
          quotes={quotes}
          sideImages={sideImages}
        />
        <CarouselProgram
          heading={"Discover"}
          items={items}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
          pdf={programPdf}
          downloadBtnText={"Program Structure (D.Pharm)"}
        />
        <div className="w-full pt-8 md:pt-[4%]"></div>
        <TableProgram
          cards={cards}
          hod={hod}
          HODcontent={HODcontent}
          selectedCard1={selectedCard1}
          semesterData={semesterData}
          facultyData={facultyData}
        />
        <DownloadFeeStructure pdf={DPharmaFee} />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <Footer />
      </body>
    </>
  );
}

export default DPharma;
