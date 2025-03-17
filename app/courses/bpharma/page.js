"use client";

import React from "react";
import Navbar from "@/component/Navbar/Navbar";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import pharmacyPdf from "../../../public/courses/bpharm/Program-Structure-B. Pharmacy.pdf";
import bpharmacy from "../../../public/courses/bpharm/B.Pharm.pdf";
import TableProgram from "@/component/Programs/tableProgram";
import bpharmaBanner from "../../../public/courses/bpharm/bpharmaBanner.jpg";
import {
  cards,
  content,
  facultyData,
  hod,
  HODcontent,
  items,
  itemsClubs,
  selectedCard1,
  semesterData,
  heading,
  sideImages,
  features,
} from "./data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

function BPharma() {
  return (
    <>
      <head>
        <title>Bachelor of Pharmacy (B. Pharm.) in Dehradun</title>
        <meta
          name="description"
          content="Register Now! & Become a part of the best BJMC College in Dehradun. Tula's Institute has been awarded as the best Engineering & Management College in North India."
        />
      </head>
      <body>
        <Navbar />
        <BannerProgram
          image={bpharmaBanner}
          title={<>Bachelor of Pharmacy (B. Pharm.)</>}
          titleColor={""}
          description={""}
        />
        <Program content={content} sideImages={sideImages} heading={heading} />
        <CarouselProgram
          heading={"Discover"}
          items={items}
          background={CrouselBackground}
          backgroundCrousel={CrouselBackground}
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
        {bpharmacy && (
          <div
            className={`relative pt-3  z-[9] flex space-x-4 ${
              items.length > 4
                ? "pl-8 md:pl-[5%]"
                : "pl-8 md:pl-0 md:justify-center"
            }`}
          >
            <Link
              href={bpharmacy}
              target="_blank"
              className={`py-3 bg-[#007A83] group relative px-10 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full `}
            >
              <div className="absolute z-10 bg-white w-1/2 h-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] transition-all duration-300 rounded-full"></div>
              <p className="z-20 flex items-center text-white group-hover:text-[#007A83] transition-all duration-200 justify-center gap-2 text-[clamp(10px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)]">
                Bachelor in Pharmacy <FaDownload />
              </p>
            </Link>
          </div>
        )}
        <PlacementProgram features={features} />
        <TopRecruiter />

        <Footer />
      </body>
    </>
  );
}

export default BPharma;
