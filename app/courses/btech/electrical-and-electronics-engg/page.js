"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../../public/courses/bjmc/background.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
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
  specialization,
} from "./data/data";
import Banner from "@/component/Banner";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best EEE Engineering College in Dehradun | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute is one of the best EEE Colleges in Dehradun with a good campus placement record in Electrical and Electronics Engg, the Best engineering college in Dehradun, for students applying for both undergraduate and post-graduate programs."
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
              Department of Electrical{" "}
              <span className="text-[#760135]">& Electronics Engineering</span>
            </>
            titleColor={""}
            description={
              "Department of Electrical and Electronics Engineering started since inception of the institute i.e. 2006, with a vision to become a leading Centre of Excellence for Education for creating employability in field of  Power Systems, Power Electronics, Automation, VLSI, Control Systems, Electric Vehicles, Computer Vision, and Artificial Intelligence, Renewable Energy resources, Smart Grids and IoT networks."
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
            specialization={specialization}
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

export default BAJMC;
