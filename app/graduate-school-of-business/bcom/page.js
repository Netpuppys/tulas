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
import Accreditations from "@/app/graduate-school-of-business/Component/Accreditations";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { facultyData, selectedCard1 } from "@/app/courses/bcom/data/data";
import { UtmContext } from "@/component/utmParams";
import bcomBannerImg from "../../../public/landingPage/bcomBannerImg.webp";
import Journey from "../Component/Journey";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import Accreditation from "@/app/Component/Accreditation";
import TableProgram from "@/component/Programs/tableProgram";
import rishitaPatel from "../../../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../../../public/courses/bcom/santosiPanwar.png";
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

  const journeyQuote =
    "Build a Strong Foundation in Business & Finance with a B.Com (Hons.) from Tula's Institute!";

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
              course={1}
              formHeading={"B.Com Admissions Open 2025"}
              thankYOu={`/graduate-school-of-business/bcom/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
<CarouselContent
      title="Tula's Institute: Building Strong Foundations in Commerce"
      description={
        <>
        <div className="mt-4 md:mt-[1%]"></div>
            <p>
Established in 2006 under the Rishabh Educational Trust, Tula's Institute has consistently
delivered quality education with a future-forward vision. With a growing demand for business
and finance professionals, our commerce programs are designed to equip students with
analytical skills, ethical values, and practical knowledge.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
As one of the leading BCom (Hons) colleges in Dehradun, we provide a curriculum that
blends core concepts of accounting, finance, economics, and business law with hands-on
learning experiences. Our mission is to prepare students for dynamic careers in commerce,
entrepreneurship, and financial services.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
Tula's is recognized among the best commerce colleges in Uttarakhand, offering a
learning environment that encourages innovation, strategic thinking, and professional
growth. As a private commerce college in Dehradun, we take pride in our personalized
mentorship, industry exposure, and strong academic framework.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
With BCom Hons admission 2025 now open, it's the perfect time to take the next step
toward a successful career in commerce with Tula's Institute.
      </p>
        </>
      }
    />            {/* Cutting Edge */}
          {/* <CuttingEdge scrollRef={scrollRef} heading={"Tula’s B.Com"} /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your B.Com (Hons.) Journey at Tula’s Institute"}
            journey={journey}
            journeyQuotes={journeyQuote}
          />
          {/* <TableProgram selectedCard1={selectedCard1} /> */}
          <div className="w-full h-full flex flex-col pt-8 pb-8 md:pt-[4%] md:pb-[2%] gap-4 items-center ">
            <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
              Our Recruiters
            </h8>
            <h4 className="px-8 text-center w-full font-[TTChocolates] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
              Give your career a boost with lucrative national & international
              internship and placement opportunities at Tula's Graduate School
              of Business.
            </h4>
          </div>
          <Accreditation />
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
