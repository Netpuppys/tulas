"use client";
import React from "react";
import NavbarLandingPage from "../Component/NavbarLandingPage";
import BannerLandingPage from "../Component/BannerLandingPage";
import FormLandingPage from "../Component/FormLandingPage";
import CarouselContent from "../Component/CarouselContent";
import CuttingEdge from "../Component/CuttingEdge";
import WhyChoose from "../Component/WhyChoose";
import AtGlance from "../Component/AtGlance";
import Accreditations from "../Component/Accreditations";
import Placement from "../Component/Placement";
import ScrollImage from "../../../public/Homepage/BannerHome/scrollWidgetGray.png";
import FacultyData from "@/component/Programs/facultyData";
import { facultyData } from "@/app/courses/mba/data/data";
import { IoIosArrowRoundUp } from "react-icons/io";
import Image from "next/image";

const page = () => {
  const handleScrollArrow = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <>
      <head>
        <title>Tula's Institute is best to pursue a career in MBA</title>
        <meta
          name="description"
          content="Join Tula's Institute. Excel in MBA and more with industry-focused programs and dedicated faculty. Become a future leader today"
        />
      </head>
      <body>
        <div className="w-full min-h-screen h-full relative">
          {/* Navbar */}
          <NavbarLandingPage />
          {/* banner */}
          <BannerLandingPage />
          {/* Form */}
          <FormLandingPage />
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          <CuttingEdge />
          {/* Why Choose Tulas */}
          <WhyChoose />
          {/* At a glance */}
          <AtGlance />
          {/*Faculty */}
          <div className="px-4 md:px-6 flex flex-col items-center justify-center w-full">
            <h8 className="text-[#646464] flex flex-col md:flex-row items-center justify-center leading-none gap-6 text-[40px] md:text-[clamp(20px,3vw,100px)] font-[Helvetica] font-light">
              Our
              <span className="text-[40px] text-[#007A83] md:text-[clamp(20px,3.2vw,100px)] font-[GoudyCatalogue] ">
                Professors
              </span>
            </h8>
            <h4 className="px-8 md:px-0 w-full my-8 md:max-w-[55%] font-[Helvetica] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] text-black">
              With every lesson, professors are shaping minds and paving the way
              for future innovations.
            </h4>
          </div>
          <div className="pb-8 md:pb-20 px-4 w-full max-w-[1200px] mx-auto">
            <FacultyData facultyData={facultyData} />
          </div>
          {/* Accreditations */}
          <Accreditations />
          {/* Placement */}
          <Placement />
          <button
            onClick={handleScrollArrow}
            className="hidden md:block bottom-10 left-10 fixed z-50 w-[100px] aspect-square"
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                className="animate-scrollSpin absolute w-full h-fit"
                src={ScrollImage}
                alt=""
              />
              <IoIosArrowRoundUp className="absolute text-[40px] font-thin text-[#292929]" />
            </div>
          </button>
        </div>
      </body>
    </>
  );
};

export default page;
