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
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/CSE.pdf";
import CSEAIFaculty from "../../../../public/courses/all-faculty/CSE-AI-ML.pdf";
import ReadFaculty from "@/component/Programs/ReadFaculty";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";
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
          Machine Learning) College in Dehradun, Uttarakhand | Tulas 
        </title>
        <meta
          name="description"
          content="Tulas Is the Best Computer Science & Engineering( Artificial Intelligence and Machine Learning) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (artificial Intelligence and Machine Learning) for Aspiring Professionals. Visit Now!"
        />
      </head>
      <body>
        {/* <Navbar /> */}
        <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
        <BannerProgram
          image={BannerImg}
          title={<>COMPUTER SCIENCE & ENGINEERING (AI & ML)</>}
          titleColor={""}
        />
                <h2
            className="font-montserrat text-center mt-5 font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 1.8rem)' }}
          >
            Industry-Oriented B.Tech <br />
            <em className="text-[#f26522] not-italic">CSE with NBA Accreditation</em>
          </h2>
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
        <ReadFaculty pdf={CSEAIFaculty}/>
        <DownloadFeeStructure pdf={BTechFee} />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <CarouselProgram
          heading={"Explore More"}
          items={itemsClubs}
          background={exploreCrouselBackground}
          backgroundCrousel={exploreCrouselBackground}
        />
        <NewFooter />
      </body>
    </>
  );
}

export default page;
