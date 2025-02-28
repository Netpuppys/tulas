"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import bannerImg from "../../../public/graduate-school-of-business/mba/bannerImg.webp";
import BannerLandingPage from "../Component/BannerLandingPage";
import FormLandingPage from "../Component/FormLandingPage";
import CarouselContent from "../Component/CarouselContent";
import CuttingEdge from "../Component/CuttingEdge";
import WhyChoose from "../Component/WhyChoose";
import AtGlance from "../Component/AtGlance";
import Accreditations from "../Component/Accreditations";
import Placement from "../Component/Placement";
import ScrollImage from "../../../public/Homepage/BannerHome/scrollWidgetGray.png";
import { facultyData, selectedCard1 } from "@/app/courses/mba/data/data";
import { IoIosArrowRoundUp } from "react-icons/io";
import Image from "next/image";
import NavbarLanding from "../Component/NavbarLanding";
import CampusLife from "@/app/Component/CampusLife";
import FacultyDataLandingPage from "../Component/FacultyDataLandingPage";
import marketingIcon from "../../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../../public/graduate-school-of-business/mba/entreprenurship.png";
import BusinessAnalytics from "../../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../../public/graduate-school-of-business/mba/AgriBusiness.png";
import healthCare from "../../../public/graduate-school-of-business/mba/healthCare.png";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import { UtmContext } from "@/component/utmParams";
import TableProgram from "@/component/Programs/tableProgram";
import placement3 from "../../../public/Homepage/Placement/placement3.png";
import placement4 from "../../../public/Homepage/Placement/placement4.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import AccreditationImg from "../../../public/Homepage/Accreditation/accreditationMBA.webp";
import AccreditationImgMobile from "../../../public/Homepage/Accreditation/accreditationMobileMBA.webp";
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
      image: placement3,
      image2: placement4,
    },
    {
      image: placement3,
      image2: placement4,
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
    // {
    //   title: "Entreprenuership",
    //   icon: entreprenurship,
    // },
    {
      title: "Business Analytics",
      icon: BusinessAnalytics,
    },

    {
      title: "International Business",
      icon: InternationalBusiness,
    },
    {
      title: "Supply Chain Management",
      icon: AgriBusiness,
    },
    // {
    //   title: "Health Care",
    //   icon: healthCare,
    // },
  ];
  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Comprehensive Business Curriculum",
      description:
        "Master leadership, management, finance, marketing & strategic decision-making.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Aligned Specializations",
      description:
        "Specialized tracks in Marketing, Human Resources, Finance, Business Analytics, International Business, and other emerging fields.",
    },
    {
      icon: highCareerDemand,
      title: "Hands-on Learning",
      description:
        "Case studies, industry-driven projects, live simulations, and internships.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Global Business Exposure",
      description:
        "interactions with corporate leaders, participation in global seminars, industry visits, and collaborative research initiatives.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Diverse Career Opportunities",
      description:
        "Prepare for leadership roles in corporate, startups, and entrepreneurship.",
    },
    {
      icon: globalAccredetation,
      title: "Accredited & Recognized",
      description: "NAAC A+, AICTE & UGC-approved program.",
    },
  ];
  const journeyQuote =
    "Transform Your Business Acumen with an MBA from Tula's Institute!";
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
          <BannerLandingPage bannerImg={bannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={1}
              formHeading={"MBA Admissions Open 2025"}
              thankYOu={`/graduate-school-of-business/mba/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          <CuttingEdge
            scrollRef={scrollRef}
            heading={"Tula’s MBA Specialisations"}
            department={department}
            journey={journey}
            journeyHeading={"Your MBA Journey at Tula’s Institute"}
            journeyQuote={journeyQuote}
            accreditation={false}
          />
          <div className="w-full pb-8 md:pb-[4%] bg-white sticky z-10 h-full">
            <div className="w-full">
              <Image
                src={AccreditationImg}
                alt=""
                className="w-full hidden md:flex h-fit"
              />
              <Image
                src={AccreditationImgMobile}
                alt=""
                className="md:hidden w-full h-fit"
              />
            </div>
          </div>
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
