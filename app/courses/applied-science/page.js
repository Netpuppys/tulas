"use client";
import React from "react";
import BannerImg from "../../../public/courses/applied-science/bannerImg.webp";
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
  heading,
  hod,
  HODcontent,
  items,
  quotes,
  sections,
  selectedCard1,
  sideImages,
} from "./data/data";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import ASHFaculty from "../../../public/courses/all-faculty/ASH.pdf";
import ReadFaculty from "@/component/Programs/ReadFaculty";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Department of Applied Sciences & Humanities | Best Engineering College
          in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Department of Applied Sciences & Humanities at Tula’s Institute, the leading engineering college in Dehradun, Uttarakhand. Learn about our innovative programs, research opportunities, and dedicated faculty."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>Department of Applied Sciences and Humanities</>
          titleColor={""}
          description={""}
        />
        <Program
          content={content}
          sideImages={sideImages}
          quotes={quotes}
          heading={heading}
        />
        <CarouselProgram
          heading={"Discover"}
          items={items}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
        />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCard1={selectedCard1}
          facultyData={facultyData}
          hod={hod}
          HODcontent={HODcontent}
        />
        <ReadFaculty pdf={ASHFaculty}/>
        <PlacementProgram features={features} />
        <TopRecruiter />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
