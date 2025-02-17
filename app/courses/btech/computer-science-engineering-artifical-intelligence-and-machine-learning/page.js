"use client";
import React from "react";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import CrouselBackground from "../../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../../public/courses/bjmc/exploreCrouselBackground.png";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  heading,
  hod,
  HODcontent,
  items,
  itemsClubs,
  quotes,
  sections,
  selectedCardTable,
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import BannerProgram from "@/component/Programs/BannerProgram";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          Best Computer Science & Engineering( Artificial Intelligence and
          Machine Learning) College in Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute Is the Best Computer Science & Engineering( Artificial Intelligence and Machine Learning) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (artificial Intelligence and Machine Learning) for Aspiring Professionals. Visit Now!"
        />
      </head>
      <body>
        <div className="w-full h-fit">
          <Navbar />
        </div>
        <BannerProgram
          image={BannerImg}
          title=<>COMPUTER SCIENCE & ENGINEERING (AI & ML)</>
          titleColor={""}
          // description={
          //   "AI and ML Fundamentals: Introduce students to the fundamental principles and techniques of artificial intelligence and machine learning, covering areas like supervised and unsupervised learning, deep learning, reinforcement learning, and natural language processing."
          // }
        />
        <Program content={content} heading={heading} quotes={quotes} />
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
          facultyData={facultyDataCSE}
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
      </body>
    </>
  );
}

export default BAJMC;
