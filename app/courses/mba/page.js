"use client";
import React from "react";
import BannerImg from "../../../public/courses/mba/bannerImg.webp";
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
  hod,
  HODcontent, 
} from "./data/data";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import MBAFee from "../../../public/FeeStructure/MBA.pdf";
import StudentPlacement from "@/component/Programs/StudentPlacement";

import MBAstudentplaced from "../../../public/courses/mba/placement-mba.pdf";
import MBAstudentlist from "../../../public/courses/mba/student-list-mba.pdf";
import MBAfacultylist from "../../../public/courses/mba/faculty-mba.pdf";

function MBA() {
  return (
    <>
      <head>
        <title>
          Best MBA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is leading in Best MBA College in Dehradun. We are recognized as Top private MBA College in Dehradun. We have rated best Management and top B Schools of Dehradun India is looking for."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={BannerImg}
          title=<>MBA</>
          titleColor={""}
          description={""}
        />
        <Program content={content} />
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
          semesterData={semesterData}
          facultyData={facultyData}
          hod={hod}
          HODcontent={HODcontent}
        />
        <DownloadFeeStructure pdf={MBAFee} />
        <div className="flex flex-col md:flex-row justify-center gap-4">
        <StudentPlacement buttonText="Top Placed Students" pdf={MBAstudentplaced}/>
        <StudentPlacement buttonText="Students List" pdf={MBAstudentlist}/>
        <StudentPlacement buttonText="Faculty List" pdf={MBAfacultylist}/>
        </div>
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

export default MBA;
