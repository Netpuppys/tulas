"use client";
import React, { useRef } from "react";
import BannerImg from "../../public/bsc-agriculture/bannerImgbsc.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../public/bsc-agriculture/background.png";
import Footer from "@/component/Footer";
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
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import TopRecruiter from "@/component/topRecruiter";
import Banner from "@/component/Banner";

function BSCAgriculture() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best B.Sc Agriculture College in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="Are looking for Best B.Sc Agriculture College in Dehradun then Tula's Institute is the best place for Agricultural Courses in Dehradun, Uttrakhand, Ranked as No-1 Agriculture College."
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
              BSc. Agriculture
            </>
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
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BSCAgriculture;
