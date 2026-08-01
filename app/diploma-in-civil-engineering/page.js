"use client";
import React from "react";
import BannerImg from "../../public/diploma-in-civil-engineering/banner.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import TopRecruiter from "../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  facultyData,
  features,
  heading,
  quotes,
  sections,
  selectedCardTable,
  semesterData,
  sideImages,
} from "./data/data";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import { hod, HODcontent } from "../courses/btech/civil-engineering/data/data";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";
function BAJMC() {
  return (
    <>

        {/* <Navbar /> */}
        <div className="hidden md:block">
          <MegaMenu />
        </div>
        
        <div className="block md:hidden">
          <NewNavbar fullBanner={true}/>
        </div>
        <BannerProgram
          image={BannerImg}
          title=<>DIPLOMA IN CIVIL ENGINEERING</>
        />
        <Program
          content={content}
          sideImages={sideImages}
          heading={heading}
          quotes={quotes}
          belowSpacequotes={true}
        />
        <Vision color={true} sections={sections} />
        <TableProgram
          cards={cards}
          selectedCardTable={selectedCardTable}
          hod={hod}
          HODcontent={HODcontent}
          semesterData={semesterData}
          facultyData={facultyData}
        />
        <PlacementProgram features={features} />
        <TopRecruiter />
        <NewFooter />
      
    </>
  );
}

export default BAJMC;
