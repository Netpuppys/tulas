"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/bsc-agriculture/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/Programs/BannerProgram";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  images,
  items,
  itemsClubs,
  sections,
  selectedCard1,
  semesterData,
} from "./data/data";
import Banner from "@/component/Banner";
function BBA() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best BBA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's is the Best BBA College in Dehradun, Uttarakhand, Tula's is the Top BBA College in all over Uttarakhand 100% placements record in top-level MNC companies, for more info call on admission helpline."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit bg-white">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>
              BB<span className="text-[#760135]">A</span>
            </>
            titleColor={""}
            description={
              "A three-year Bachelor of Business Administration (BBA) program at the Graduate School of Business redefines traditional business education. The program offers a cutting-edge leadership curriculum, personalized mentorship, and hands-on projects, designed to tackle real-world business challenges."
            }
          />

          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            color={true}
            background={background}
          />
          <Vision color={true} sections={sections} />
          <TableProgram
            cards={cards}
            selectedCard1={selectedCard1}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            color={true}
            background={background}
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

export default BBA;
