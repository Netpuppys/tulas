"use client";
import React from "react";
import BannerImg from "../../../public/courses/bjmc/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import TopRecruiter from "../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import CrouselBackground from "../../../public/courses/bjmc/CrouselBackground.png";
import exploreCrouselBackground from "../../../public/courses/bjmc/exploreCrouselBackground.png";
import {
  cards,
  heading,
  sideImages,
  quotes,
  content,
  facultyData,
  hod,
  HODcontent,
  items,
  itemsClubs,
  sections,
  selectedCard1,
  semesterData,
} from "./data/data";
import bjmcImage2Desktop from "../../../public/courses/bjmc/bjmcImage2Desktop.png";
import bjmcImage2 from "../../../public/courses/bjmc/bjmcImage2.png";
import BannerProgram from "@/component/Programs/BannerProgram";
import PlacementProgram from "@/component/Programs/PlacementProgram";
function BAJMC() {
  return (
    <>
      <head>
        <title>
          B.J.M.C (Bachelor of Journalism & Mass Communications) in Dehradun
        </title>
        <meta
          name="description"
          content="Register Now! & Become a part of the best BJMC College in Dehradun. Tula's Institute has been awarded as the best Engineering & Management College in North India."
        />
      </head>
      <body>
        <div>
          <Navbar />
          <BannerProgram
            image={BannerImg}
            title=<>BA(Hons.) JMC</>
            titleColor={""}
            description={""}
          />
          <Program
            sideImages={sideImages}
            content={content}
            heading={heading}
            quotes={quotes}
          />
          <CarouselProgram
            heading={"About the Program"}
            items={items}
            color={true}
            background={CrouselBackground}
            backgroundCrousel={CrouselBackground}
          />
          <Vision color={true} sections={sections} />
          <div className="w-[90%] pb-8 md:pb-[3%] mx-auto flex flex-col md:flex-row justify-center items-center">
            <Image
              src={bjmcImage2Desktop}
              alt=""
              className="w-full hidden md:block"
            />
            <Image src={bjmcImage2} alt="" className="w-full md:hidden" />
          </div>
          <TableProgram
            cards={cards}
            hod={hod}
            HODcontent={HODcontent}
            selectedCard1={selectedCard1}
            semesterData={semesterData}
            facultyData={facultyData}
          />
          <PlacementProgram />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            backgroundCrousel={exploreCrouselBackground}
            background={exploreCrouselBackground}
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
