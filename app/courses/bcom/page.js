"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/bsc-agriculture/background.png";
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
          Best B.Com (Hons.) College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the best B.Com (Hons.) College in Dehradun. The college holds merit not only on academic grounds but also on extracurricular activities."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title={"B.COM (HONS)"}
            titleColor={""}
            description={
              ""
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
          <Footer  />
        </div>
      </body>
    </>
  );
}

export default BBA;
