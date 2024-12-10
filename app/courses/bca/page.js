"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
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
import Banner from "@/component/Banner";
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
          <div className="w-full h-fit">
            <Navbar />
          </div>
          <Banner
            image={BannerImg}
            title=<>
              Bachelor of Computer{" "}
              <span className="text-[#760135]"> Applications (BCA)</span>
            </>
            titleColor={""}
            description={
              "The Bachelor of Computer Applications (BCA) is a three-year program blending computer science fundamentals with practical training in software development, web design, and networking. It covers programming, database management, and AI, preparing students for roles like software developer or cybersecurity specialist. BCA lays a strong foundation for careers in IT or tech entrepreneurship."
            }
          />

          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
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
