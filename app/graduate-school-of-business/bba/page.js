"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import ScrollImage from "../../../public/Homepage/BannerHome/scrollWidgetGray.png";
import { IoIosArrowRoundUp } from "react-icons/io";
import Image from "next/image";
import CampusLife from "@/app/Component/CampusLife";
import NavbarLanding from "@/app/graduate-school-of-business/Component/NavbarLanding";
import BannerLandingPage from "@/app/graduate-school-of-business/Component/BannerLandingPage";
import FormLandingPage from "@/app/graduate-school-of-business/Component/FormLandingPage";
import CarouselContent from "@/app/graduate-school-of-business/Component/CarouselContent";
import CuttingEdge from "@/app/graduate-school-of-business/Component/CuttingEdge";
import WhyChoose from "@/app/graduate-school-of-business/Component/WhyChoose";
import FacultyDataLandingPage from "@/app/graduate-school-of-business/Component/FacultyDataLandingPage";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { facultyData, selectedCard1 } from "@/app/courses/bba/data/data";
import { UtmContext } from "@/component/utmParams";
import bbaBannerImg from "../../../public/landingPage/bbaBannerImg.webp";
import marketingIcon from "../../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../../public/graduate-school-of-business/mba/finance.png";
import HumanResource from "../../../public/graduate-school-of-business/mba/HumanResource.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import TableProgram from "@/component/Programs/tableProgram";
import AbhishekPandy from "../../../public/graduate-school-of-business/bba/AbhishekPandy.png";
import AdilAhmed from "../../../public/graduate-school-of-business/bba/AdilAhmed.png";
import AdityaPandey from "../../../public/graduate-school-of-business/bba/AdityaPandey.png";
import DivyaShankar from "../../../public/graduate-school-of-business/bba/DivyaShankar.png";
import GautamSinghChauhan from "../../../public/graduate-school-of-business/bba/GautamSinghChauhan.png";
import JasmineBatham from "../../../public/graduate-school-of-business/bba/JasmineBatham.png";
import KumariPriya from "../../../public/graduate-school-of-business/bba/KumariPriya.png";
import NainseeSingh from "../../../public/graduate-school-of-business/bba/NainseeSingh.png";
import PriyankaDhiman from "../../../public/graduate-school-of-business/bba/PriyankaDhiman.png";
import RahulBauri from "../../../public/graduate-school-of-business/bba/RahulBauri.png";
import RajniMondi from "../../../public/graduate-school-of-business/bba/RajniMondi.png";
import RomaKumari from "../../../public/graduate-school-of-business/bba/RomaKumari.png";
import ShambhaviRajChauhan from "../../../public/graduate-school-of-business/bba/ShambhaviRajChauhan.png";
import SrishtiGupta from "../../../public/graduate-school-of-business/bba/SrishtiGupta.png";
import SushantTrivedi from "../../../public/graduate-school-of-business/bba/SushantTrivedi.png";
import UjjwalPratik from "../../../public/graduate-school-of-business/bba/UjjwalPratik.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
const page = () => {
  const { utmParams } = useContext(UtmContext);
  const handleScrollArrow = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  const features = [
    {
      image: AbhishekPandy,
      image2: AdilAhmed,
    },
    {
      image: AdityaPandey,
      image2: DivyaShankar,
    },
    {
      image: GautamSinghChauhan,
      image2: JasmineBatham,
    },
    {
      image: KumariPriya,
      image2: NainseeSingh,
    },
    {
      image: PriyankaDhiman,
      image2: RahulBauri,
    },
    {
      image: RajniMondi,
      image2: RomaKumari,
    },
    {
      image: ShambhaviRajChauhan,
      image2: SrishtiGupta,
    },
    {
      image: SushantTrivedi,
      image2: UjjwalPratik,
    },
  ];
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 0.3;
      const sixtyVH = window.innerHeight * threshold;

      if (window.scrollY > sixtyVH) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const department = [
    {
      title: "Finance",
      icon: finance,
    },
    {
      title: "Marketing",
      icon: marketingIcon,
    },
    {
      title: "Human Resource Management",
      icon: HumanResource,
    },
  ];
  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Comprehensive Curriculum",
      description: "Covers leadership, management, finance & marketing.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry Relevant Skills",
      description:
        "Hands-on training through internships, projects & workshops.",
    },
    {
      icon: highCareerDemand,
      title: "High Career Demand",
      description:
        "Prepares for careers in corporate, entrepreneurship & business leadership.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Tech-Driven Learning",
      description: "Engage in real-world case studies & business simulations.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Diverse Specializations",
      description:
        "Choose from Finance, Marketing, HRM, International Business & more.",
    },
    {
      icon: globalAccredetation,
      title: "Global Accreditation",
      description: "NAAC A+, AICTE & UGC-approved program.",
    },
  ];
  const journeyQuote =
    "Step into the Corporate World with a BBA from Tula’s Institute!";
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
          <NavbarLanding handleScrollArrow={handleScrollArrow} />
          {/* <NavbarLandingPage /> */}
          {/* banner */}
          <BannerLandingPage bannerImg={bbaBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={1}
              formHeading={"BBA Admissions Open 2025"}
              thankYOu={`/graduate-school-of-business/bba/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          <CuttingEdge
            scrollRef={scrollRef}
            heading={"Tula’s BBA Specialisations"}
            department={department}
            journey={journey}
            journeyHeading={"Your BBA Journey at Tula’s Institute"}
            journeyQuote={journeyQuote}
          />
          {/* Why Choose Tulas */}
          <WhyChoose />
          {/* At a glance */}
          {/* <AtGlance /> */}
          <CampusLife />
          <TableProgram selectedCard1={selectedCard1} />
          {/*Faculty */}
          <div className="pt-8 md:pt-[4%] px-4 md:px-6 flex flex-col items-center justify-center w-full">
            <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
              Our Professors
            </h8>
            <h4 className="px-8 w-full my-4 md:my-8 text-center font-[TTChocolates] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
              With every lesson, professors are shaping minds and paving the way
              for future innovations.
            </h4>
          </div>
          <div className="pb-8 md:pb-[4%] px-4 w-full">
            <FacultyDataLandingPage facultyData={facultyData} />
          </div>
          {/* Accreditations */}
          {/* <Accreditations /> */}
          {/* Placement */}
          <div className="pb-8 md:pb-[3%]">
            <PlacementProgram features={features} />
          </div>
          <Placement scrollRef={scrollRef} />
          {scrolled && (
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
          )}
        </div>
      </body>
    </>
  );
};

export default page;
