"use client";
import React from "react";
import BannerImg from "../../public/diploma-computer-science-engineering/banner.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  sections,
  semesterData,
  hod,
  HODcontent,
  heading,
  selectedCardTable,
  sideImages,
  quotes,
  features,
} from "./data/data";
import { facultyDataCSE } from "../courses/btech/facultyDataCSE";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Diploma in Computer Science and Engineering in Dehradun | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Enroll in Tula's Institute for a Diploma in Computer Science and Engineering in Dehradun. Gain hands-on experience, industry-relevant skills, and prepare for a successful tech career with our comprehensive diploma program."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>DIPLOMA IN COMPUTER SCIENCE ENGINEERING</>
        />
        <Program
          heading={heading}
          content={content}
          belowSpacequotes={true}
          sideImages={sideImages}
          quotes={quotes}
        />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCardTable={selectedCardTable}
          semesterData={semesterData}
          facultyData={facultyDataCSE}
          hod={hod}
          HODcontent={HODcontent}
        />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <Footer />
      </body>
    </>
  );
}

export default BAJMC;
