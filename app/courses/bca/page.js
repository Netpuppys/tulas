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
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
} from "./data/data";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
function BBA() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best BCA College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Is the Best Private BCA College in Dehradun, Uttarakhand, 3yrs BCA Program, Experienced faculties, 100% Placement, Affiliated to Sri Dev Suman University."
        />
      </head>
      <body>
        <div ref={parentRef}>
          <Navbar />
          <BannerProgram
            image={BannerImg}
            title=<>Bachelor of Computer Applications (BCA)</>
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
            selectedCardTable={selectedCardTable}
            semesterData={semesterData}
            facultyData={facultyData}
            hod={hod}
            HODcontent={HODcontent}
          />
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
      </body>
    </>
  );
}

export default BBA;
