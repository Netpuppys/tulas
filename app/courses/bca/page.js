"use client";
import React from "react";
import BannerImg from "../../../public/courses/bca/bannerImg.webp";
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
  hod,
  HODcontent,
  features,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
  heading,
  quotes,
  sideImages,
} from "./data/data";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
function BBA() {
  return (
    <>
      <head>
        <title>
          Best BCA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Is the Best Private BCA College in Dehradun, Uttarakhand, 3yrs BCA Program, Experienced faculties, 100% Placement, Affiliated to Sri Dev Suman University."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>Bachelor of Computer Applications (BCA)</>
          titleColor={""}
          description={""}
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
        />
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

export default BBA;
