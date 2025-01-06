"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/courses/bjmc/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
// import Image from "next/image";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
// import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import bjmcImage from "../../../public/courses/bjmc/bjmcImage.png";
import programPdf from "../../../public/courses/dpharm/Program-Structure-D.Pharmacy.pdf"
import Banner from "@/component/Banner";
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
  selectedCard1,
  semesterData,
} from "./data";

function DPharma() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
        Diploma In Pharmacy (D. Pharm.) in Dehradun
        </title>
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
          <Banner
            image={BannerImg}
            title={<>Diploma In Pharmacy (D. Pharm.)</>}
            titleColor={""}
            description={""}
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={background}
            pdf={programPdf}
          />
          {/* <Vision color={true} sections={sections} /> */}
          {/* <Image
            src={bjmcImage}
            alt=""
            className="w-full h-fit mb-8 md:mb-20"
          /> */}
          <div className="w-full h-40"></div>
          <TableProgram
            cards={cards}
            hod={hod}
            HODcontent={HODcontent}
            selectedCard1={selectedCard1}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <TopRecruiter />
          {/* <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={background}
          /> */}
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

export default DPharma;
