"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidgetGray.png";
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
import Accreditations from "@/app/graduate-school-of-business/Component/Accreditations";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { UtmContext } from "@/component/utmParams";
import bcomBannerImg from "../../public/landingPage/bcomBannerImg.webp";
import bcaIcon from "../../public/admissions-open/bcaIcon.png";
import bjmcIcon from "../../public/admissions-open/bjmcIcon.png";
import bPharmaIcon from "../../public/admissions-open/bPharmaIcon.png";
import dPharmaIcon from "../../public/admissions-open/dPharmaIcon.png";
import bscIcon from "../../public/admissions-open/bscIcon.png";
import mTechIcon from "../../public/admissions-open/mTechIcon.png";
import bTechIcon from "../../public/admissions-open/bTechIcon.png";
import managementIcon from "../../public/admissions-open/managementIcon.png";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../public/graduate-school-of-business/mba/globalAccredetation.png";
import AbhishekPandy from "../../public/graduate-school-of-business/bba/AbhishekPandy.png";
import AdilAhmed from "../../public/graduate-school-of-business/bba/AdilAhmed.png";
import AdityaPandey from "../../public/graduate-school-of-business/bba/AdityaPandey.png";
import DivyaShankar from "../../public/graduate-school-of-business/bba/DivyaShankar.png";
import GautamSinghChauhan from "../../public/graduate-school-of-business/bba/GautamSinghChauhan.png";
import JasmineBatham from "../../public/graduate-school-of-business/bba/JasmineBatham.png";
import KumariPriya from "../../public/graduate-school-of-business/bba/KumariPriya.png";
import NainseeSingh from "../../public/graduate-school-of-business/bba/NainseeSingh.png";
import PriyankaDhiman from "../../public/graduate-school-of-business/bba/PriyankaDhiman.png";
import RahulBauri from "../../public/graduate-school-of-business/bba/RahulBauri.png";
import RajniMondi from "../../public/graduate-school-of-business/bba/RajniMondi.png";
import RomaKumari from "../../public/graduate-school-of-business/bba/RomaKumari.png";
import ShambhaviRajChauhan from "../../public/graduate-school-of-business/bba/ShambhaviRajChauhan.png";
import SrishtiGupta from "../../public/graduate-school-of-business/bba/SrishtiGupta.png";
import SushantTrivedi from "../../public/graduate-school-of-business/bba/SushantTrivedi.png";
import UjjwalPratik from "../../public/graduate-school-of-business/bba/UjjwalPratik.png";
import rishitaPatel from "../../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../../public/courses/bcom/santosiPanwar.png";
import anshikaPundir from "../../public/courses/bca/anshikaPundir.png";
import ashutosh from "../../public/courses/bca/ashutosh.png";
import gauravSrivastava from "../../public/courses/bca/gauravSrivastava.png";
import prathamNautiyal from "../../public/courses/bca/prathamNautiyal.png";
import rohitKotnala from "../../public/courses/bca/rohitKotnala.png";
import saurabhRawat from "../../public/courses/bca/saurabhRawat.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import { facultyDataCSE } from "../courses/btech/facultyDataCSE";

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
    {
      image: rishitaPatel,
      image2: santosiPanwar,
    },
    {
      image: anshikaPundir,
      image2: ashutosh,
    },
    {
      image: gauravSrivastava,
      image2: prathamNautiyal,
    },
    {
      image: rohitKotnala,
      image2: saurabhRawat,
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
      title: "Management",
      icon: managementIcon,
    },
    {
      title: "Agriculture",
      icon: bscIcon,
    },
    {
      title: "Engineering",
      icon: bTechIcon,
    },
    {
      title: "Mass Communication",
      icon: bjmcIcon,
    },
    {
      title: "Computer Application",
      icon: bcaIcon,
    },

    {
      title: "B.Pharma",
      icon: bPharmaIcon,
    },
    {
      title: "D.Pharma",
      icon: dPharmaIcon,
    },
    {
      title: "Engineering (PG)",
      icon: mTechIcon,
    },
  ];

  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Comprehensive Curriculum",
      description: "Accounting, Finance, Banking, and Corporate Law.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry Relevant Skills",
      description:
        "Practical applications in taxation, auditing, financial reporting, and business management.",
    },
    {
      icon: highCareerDemand,
      title: "High Career Demand",
      description:
        "Prepares for careers in corporate finance, banking & commerce.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Pathway to Professional Certifications",
      description:
        "Chartered Accountancy (CA), Company Secretary (CS), and Chartered Financial Analyst (CFA) exams.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Diverse Industry Applications",
      description:
        "Public and private sectors, including banking institutions, multinational corporations, regulatory bodies, and financial consulting firms.",
    },
    {
      icon: globalAccredetation,
      title: "Global Accreditation",
      description: "NAAC A+, AICTE & UGC-approved program.",
    },
  ];

  const journeyQuote = "Build a Strong Foundation from Tula's Institute!";

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
          <BannerLandingPage bannerImg={bcomBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={0}
              showCourse={true}
              formHeading={"Admissions Open 2025"}
              thankYOu={`/admissions-open/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          <CuttingEdge
            scrollRef={scrollRef}
            heading={"Courses we Offered"}
            department={department}
            journeyHeading={"Your Journey at Tula’s Institute"}
            journey={journey}
            journeyQuotes={journeyQuote}
          />

          {/* Why Choose Tulas */}
          <WhyChoose />
          {/* At a glance */}
          {/* <AtGlance /> */}
          <CampusLife />
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
            <FacultyDataLandingPage facultyData={facultyDataCSE} />
          </div>
          {/* Accreditations */}
          <Accreditations />
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
