"use client";
import React from "react";
import BannerImg from "../../../../public/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/bannerImg.webp";
import contentLeft from "../../../../public/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/contentLeft.webp";
import contentRight from "../../../../public/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/contentRight.webp";
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
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";

const sideImages = [
  contentLeft,
  contentRight
]

function page() {
  return (
    <>
      <head>
        <title>
          Best Computer Science & Engineering( Artificial Intelligence and
          Machine Learning) College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute Is the Best Computer Science & Engineering( Artificial Intelligence and Machine Learning) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (artificial Intelligence and Machine Learning) for Aspiring Professionals. Visit Now!"
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title={<>COMPUTER SCIENCE & ENGINEERING (AI & ML)</>}
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

export default page;
