"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
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
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
function MBA() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best MBA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is leading in Best MBA College in Dehradun. We are recognized as Top private MBA College in Dehradun. We have rated best Management and top B Schools of Dehradun India is looking for."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <Navbar />
          <BannerProgram
            image={BannerImg}
            title=<>MBA</>
            titleColor={""}
            description={""}
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={CrouselBackground}
            backgroundCrousel={CrouselBackground}
          />
          <Vision color={true} sections={sections} />
          <TableProgram
            cards={cards}
            selectedCard1={selectedCard1}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <PlacementProgram/>
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={exploreCrouselBackground}
            backgroundCrousel={exploreCrouselBackground}
          />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default MBA;
