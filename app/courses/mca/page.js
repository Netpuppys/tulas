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
  selectedCardTable,
  hod,
  HODcontent,
  semesterData,
} from "./data/data";
import Banner from "@/component/Banner";
function MBA() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best Private MCA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the Best MCA College in Dehradun, Uttarakhand, India that provides valuable educational practices to its students with the help of experienced faculty."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>Master of Computer Applications (MCA)</>
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
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyData}
            hod={hod}
            HODcontent={HODcontent}
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

export default MBA;
