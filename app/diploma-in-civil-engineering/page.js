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
  facultyData,
  images,
  sections,
  selectedCardTable,
} from "./data/data";
import Banner from "@/component/Banner";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Diploma in Civil Engineering | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Earn a Diploma in Civil Engineering at Tula's Institute, the best diploma college in Dehradun, Uttarakhand. Build a solid foundation for your career in civil engineering with our comprehensive program."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full relative">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>DIPLOMA IN CIVIL ENGINEERING</>
            titleColor={""}
            // description={
            //   "Department of Civil engineering Offers Diploma in Civil Engineering of a duration of 3 years. With rapidly booming infrastructure developments all around, civil engineers today are in much higher demand than ever before."
            // }
          />
          <Program parentRef={parentRef} images={images} content={content} />

          <Vision color={true} sections={sections} />
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            facultyData={facultyData}
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
