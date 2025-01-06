"use client";

import React, { useRef } from "react";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/courses/bjmc/background.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import pharmacyPdf from "../../../public/courses/bpharm/Program-Structure-B. Pharmacy.pdf"
import bpharmacy from "../../../public/courses/bpharm/B.Pharm.pdf"
import TableProgram from "@/component/Programs/tableProgram";
import bpharmaBanner from "../../../public/courses/bpharm/bpharmaBanner.jpg"
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
  selectedCard1,
  semesterData,
} from "./data";

function BPharma() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
        Bachelor of Pharmacy (B. Pharm.) in Dehradun
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
            image={bpharmaBanner}
            title={<>Bachelor of Pharmacy (B. Pharm.)</>}
            titleColor={""}
            description={""}
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={background}
            pdf={pharmacyPdf}
            downloadBtnText={"Program Structure (B.Pharm)"}
          />
          <div className="w-full h-10 md:h-40"></div>
          <TableProgram
            cards={cards}
            hod={hod}
            HODcontent={HODcontent}
            selectedCard1={selectedCard1}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={background}
            pdf={bpharmacy}
            downloadBtnText={"Bachelor in Pharmacy"}
          />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BPharma;