"use client";
import React, { useRef } from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  images,
  sections,
  semesterData,
  hod,
  HODcontent,
  selectedCardTable,
} from "./data/data";
import { facultyDataCSE } from "../courses/btech/facultyDataCSE";
import Banner from "@/component/Banner";
function BAJMC() {
  const parentRef = useRef(null);

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
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>
              DIPLOMA IN COMPUTER SCIENCE ENGINEERING
            </>
            titleColor={""}
            // description={
            //   "The Diploma program in Computer Science and Engineering program is a three-year undergraduate program. The Diploma program in Computer Science & Engineering stands out as one of the most coveted engineering program, shaping individuals for thriving careers in the IT industry."
            // }
          />
          <Program parentRef={parentRef} images={images} content={content} />

          <Vision color={true} sections={sections} />
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyDataCSE}
            hod={hod}
            HODcontent={HODcontent}
          />
          <TopRecruiter />

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
