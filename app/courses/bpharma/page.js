"use client";

import React, { useRef } from "react";
import Navbar from "@/component/Navbar/Navbar";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import pharmacyPdf from "../../../public/courses/bpharm/Program-Structure-B. Pharmacy.pdf";
import bpharmacy from "../../../public/courses/bpharm/B.Pharm.pdf";
import TableProgram from "@/component/Programs/tableProgram";
import bpharmaBanner from "../../../public/courses/bpharm/bpharmaBanner.jpg";
import {
  cards,
  content,
  facultyData,
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  selectedCard1,
  semesterData,
  heading,
  sideImages,
} from "./data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";


function BPharma() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>Bachelor of Pharmacy (B. Pharm.) in Dehradun</title>
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
            image={bpharmaBanner}
            title={<>Bachelor of Pharmacy (B. Pharm.)</>}
            titleColor={""}
            description={""}
          />
          <Program
            parentRef={parentRef}
            images={images}
            content={content}
            sideImages={sideImages}
            heading={heading}
          />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={CrouselBackground}
            backgroundCrousel={CrouselBackground}
            pdf={pharmacyPdf}
            downloadBtnText={"Program Structure (B.Pharm)"}
          />
          <div className="w-full h-10 md:h-40"></div>
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
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={exploreCrouselBackground}
            backgroundCrousel={exploreCrouselBackground}
            pdf={bpharmacy}
            downloadBtnText={"Bachelor in Pharmacy"}
          />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BPharma;
