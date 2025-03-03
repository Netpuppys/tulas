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
import marketingIcon from "../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../public/graduate-school-of-business/mba/entreprenurship.png";
import BusinessAnalytics from "../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../public/graduate-school-of-business/mba/AgriBusiness.png";
import healthCare from "../../public/graduate-school-of-business/mba/healthCare.png";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../public/graduate-school-of-business/mba/globalAccredetation.png";
import Accreditation from "@/app/Component/Accreditation";
import rishitaPatel from "../../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../../public/courses/bcom/santosiPanwar.png";
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
      image: rishitaPatel,
      image2: santosiPanwar,
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
      icon: finance,
    },
    {
      title: "Agriculture",
      icon: marketingIcon,
    },
    {
      title: "Engineering",
      icon: HumanResource,
    },
    {
      title: "Mass Communication",
      icon: entreprenurship,
    },
    {
      title: "Computer Application",
      icon: BusinessAnalytics,
    },

    {
      title: "B.Pharma",
      icon: InternationalBusiness,
    },
    {
      title: "D.Pharma",
      icon: AgriBusiness,
    },
    {
      title: "Engineering (PG)",
      icon: healthCare,
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
          {/* <div className="pt-8 md:pt-[4%]"></div> */}
          {/* <Journey /> */}
          {/* <div className="w-full h-full flex flex-col pt-8 pb-8 md:pt-[4%] md:pb-[2%] gap-4 items-center ">
            <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
              Our Recruiters
            </h8>
            <h4 className="px-8 text-center w-full font-[TTChocolates] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
              Give your career a boost with lucrative national & international
              internship and placement opportunities at Tula's Graduate School
              of Business.
            </h4>
          </div>
          <Accreditation /> */}
          <div className="pt-8 md:pt-[4%]"></div>
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
