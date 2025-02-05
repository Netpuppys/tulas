"use client";

import React, { useRef } from "react";
import BannerImg from "../../../../public/courses/btech/civil-engineering/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
} from "./data/data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";

function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best Civil Engineering Colleges in Dehradun | Best B.Tech College
        </title>
        <meta
          name="description"
          content="Tula’s Institute is a reputed Best Civil Engineering Colleges in Dehradun Uttarakhand. Department of Civil Engineering has evolved a comprehensive student-centric learning approach."
        />
      </head>
      <body>
        <div className="max-w-full" ref={parentRef}>
          <Navbar />
          <BannerProgram
            image={BannerImg}
            title={<>CIVIL ENGINEERING (CE)</>}
            titleColor={""}
            // description={
            //   "The Civil Engineering Department of Tula's Institute came into existence in the year 2011. The department offers Diploma, Undergraduate, and Postgraduate programs in civil engineering."
            // }
          />
          <Program parentRef={parentRef} images={images} content={content} />

          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={CrouselBackground}
            backgroundCrousel={CrouselBackground}
          />

          <Vision color={true} sections={sections} />
          <div className="w-full overflow-x-scroll">
            <TableProgram
              cards={cards}
              selectedCardTable={selectedCardTable}
              semesterData={semesterData}
              facultyData={facultyData}
              hod={hod}
              HODcontent={HODcontent}
            />
          </div>
          <PlacementProgram />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={exploreCrouselBackground}
            backgroundCrousel={exploreCrouselBackground}
          />

          {/* <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div> */}

          <Footer />
        </div>
      </body>{" "}
    </>
  );
}

export default BAJMC;
