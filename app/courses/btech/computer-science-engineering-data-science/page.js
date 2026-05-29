"use client";
import React from "react";
import BannerImg from "../../../../public/courses/btech/computer-science-engineering-data-science/bannerImg.webp";
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
  sideImages,
} from "./data/data";

import { facultyDataCSE } from "../facultyDataCSE";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import BTechFee from "../../../../public/FeeStructure/CSE.pdf";
import CSEDataFaculty from "../../../../public/courses/all-faculty/CSE-data-science.pdf";
import ReadFaculty from "@/component/Programs/ReadFaculty";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Best Computer Science & Engineering( Data Science) College in
          Dehradun, Uttarakhand | Tulas
        </title>
        <meta
          name="description"
          content="Tulas Is the Best Computer Science & Engineering( Data Science) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (data Science) for Aspiring Professionals. Visit Now!"
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
          title=<>COMPUTER SCIENCE & ENGINEERING (Data Science)</>
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
        <ReadFaculty pdf={CSEDataFaculty}/>
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

export default BAJMC;
