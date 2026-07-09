"use client";
import React from "react";
import BannerImg from "../../../../public/courses/mba/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
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
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import MBAFee from "../../../../public/FeeStructure/MBA.pdf";
import StudentPlacement from "@/component/Programs/StudentPlacement";

import MBAstudentplaced from "../../../../public/courses/mba/placement-mba.pdf";
import MBAstudentlist from "../../../../public/courses/mba/student-list-mba.pdf";
import MBAfacultylist from "../../../../public/courses/mba/faculty-mba.pdf";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";

function MBA() {
  return (
    <>
      <head>
        <title>
          Best MBA College in Dehradun, Uttarakhand | Tulas
        </title>
        <meta
          name="description"
          content="Tulas is leading in Best MBA College in Dehradun. We are recognized as Top private MBA College in Dehradun. We have rated best Management and top B Schools of Dehradun India is looking for."
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
          title=<>MBA in Human Resource Management (AI-Integrated)</>
          titleColor={""}
          description={""}
        />
                    <h2
            className="font-montserrat text-center mt-5 font-extrabold leading-[1.1] text-[#111111] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 1.8rem)' }}
          >
            Shape the Future of Work with Human Intelligence<br />
            <em className="text-[#f26522] not-italic">+ Artificial Intelligence</em>
          </h2>
            <h4
            className="text-center mt-5 leading-[1.1] text-[#111111] max-[600px]:text-[0.95rem]"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 1.2rem)' }}
          >
            NBA Accredited MBA
            Designed for future leaders
          </h4>
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

export default MBA;
