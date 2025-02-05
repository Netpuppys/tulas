"use client";

import React, { useRef } from "react";
import dpharmaBanner from "../../../public/courses/dpharm/dpharmaBanner.jpg";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import TableProgram from "@/component/Programs/tableProgram";
import programPdf from "../../../public/courses/dpharm/Program-Structure-D.Pharmacy.pdf";
import Banner from "@/component/Banner";
import {
  cards,
  content,
  facultyData,
  hod,
  HODcontent,
  images,
  items,
  selectedCard1,
  semesterData,
} from "./data";
import BannerProgram from "@/component/Programs/BannerProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
function DPharma() {
  const parentRef = useRef(null);

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
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <BannerProgram
            image={dpharmaBanner}
            title={<>Diploma In Pharmacy (D. Pharm.)</>}
            titleColor={""}
            description={""}
          />
          <Program parentRef={parentRef} images={images} content={content} />
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
          <PlacementProgram />
          <TopRecruiter />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default DPharma;
