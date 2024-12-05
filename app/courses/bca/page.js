"use client";
import React, { useRef } from "react";
import BannerImg from "../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
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
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
  semesterData,
} from "./data/data";
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
          <div className="w-full h-fit bg-white">
            <Navbar position={true} />
          </div>
          <BannerProgram
            image={BannerImg}
            title=<>
              Bachelor of Computer{" "}
              <span className="text-[#760135]"> Applications (BCA)</span>
            </>
            titleColor={""}
            description={
              "The Bachelor of Computer Applications (BCA) is a dynamic, cutting-edge program designed for aspiring tech professionals who want to dive into the fast-paced world of information technology. This three-year course blends the fundamentals of computer science with hands-on training in software development, data management, web design, and networking. From learning the latest programming languages to mastering database management and exploring the intricacies of artificial intelligence, BCA opens doors to countless possibilities. Whether you're dreaming of becoming a software developer, a cybersecurity specialist, or even an entrepreneur with your own tech start-up, BCA offers the perfect foundation to kickstart your journey in the digital age."
            }
          />

          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={background}
          />
          <Vision sections={sections} />
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
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BBA;
