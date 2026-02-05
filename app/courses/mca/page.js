"use client";
import React from "react";
import BannerImg from "../../../public/courses/mca/bannerImg.webp";
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
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  hod,
  HODcontent,
  semesterData,
  features,
  sideImages,
  quotes,
  heading,
} from "./data/data";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import MCAFee from "../../../public/FeeStructure/CSE.pdf";
import StudentPlacement from "@/component/Programs/StudentPlacement";

import MCAstudentplaced from "../../../public/courses/mca/placement-mca.pdf";
import MCAstudentlist from "../../../public/courses/mca/student-list-mca.pdf";
import MCAfacultylist from "../../../public/courses/mca/faculty-mca.pdf";
function MCA() {
  return (
    <>
      <head>
        <title>
          Best Private MCA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the Best MCA College in Dehradun, Uttarakhand, India that provides valuable educational practices to its students with the help of experienced faculty."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>Masters in Computer Applications (MCA)</>
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
        />
        <DownloadFeeStructure pdf={MCAFee} />
         <div className="flex flex-col md:flex-row justify-center gap-4">
        <StudentPlacement buttonText="Top Placed Students" pdf={MCAstudentplaced}/>
        <StudentPlacement buttonText="Students List" pdf={MCAstudentlist}/>
        <StudentPlacement buttonText="Faculty List" pdf={MCAfacultylist}/>
        </div>
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

export default MCA;
