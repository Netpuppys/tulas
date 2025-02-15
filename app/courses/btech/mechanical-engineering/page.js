"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/courses/btech/mechanical-engineering/bannerImg.webp";
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
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
  facultyData,
  specialization,
  sideImages,
  heading,
  quotes,
} from "./data/data";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best Mechanical Engineering College in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the best Mechanical Engineering College in Dehradun, Uttarakhand, Among a myriad of engineering activities, the Mechanical Engineering Department has been a focal point of the Tula's Institute, Dehradun top engineering colleges Dehradun."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <BannerProgram
            image={BannerImg}
            title=<>Department of MECHANICAL ENGINEERING (ME)</>
            titleColor={""}
            // description={
            //   "The Mechanical Engineering Department of Tula’s Institute is one of the oldest department since its inception in 2006. The department offers Diploma, Undergraduate, and Postgraduate programs in mechanical engineering. The main goal of the curriculum is to impart quality education to the students to develop technical skills, improve their problem-solving abilities, and encourage them to become a competitive mechanical engineer. "
            // }
          />
          <Program
            content={content}
            sideImages={sideImages}
            heading={heading}
            quotes={quotes}
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
            specialization={specialization}
          />
          <PlacementProgram />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            color={true}
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
      </body>
    </>
  );
}

export default BAJMC;
