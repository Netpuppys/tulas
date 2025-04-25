"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundUp } from "react-icons/io";
import { UtmContext } from "@/component/utmParams";
import CampusLife from "@/app/Component/CampusLife";
import Accreditation from "@/app/Component/Accreditation";
import TableProgram from "@/component/Programs/tableProgram";
import mcaBannerImg from "../../../public/landingPage/mcaBannerImg.webp";
import Journey from "@/app/graduate-school-of-business/Component/Journey";
import { facultyData, selectedCardTable } from "@/app/courses/mca/data/data";
import WhyChoose from "@/app/graduate-school-of-business/Component/WhyChoose";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import ScrollImage from "../../../public/Homepage/BannerHome/scrollWidgetGray.png";
import NavbarLanding from "@/app/graduate-school-of-business/Component/NavbarLanding";
import FormLandingPage from "@/app/graduate-school-of-business/Component/FormLandingPage";
import CarouselContent from "@/app/graduate-school-of-business/Component/CarouselContent";
import BannerLandingPage from "@/app/graduate-school-of-business/Component/BannerLandingPage";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import FacultyDataLandingPage from "@/app/graduate-school-of-business/Component/FacultyDataLandingPage";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import AayushRaj from "../../../public/courses/mca/PlacementDesign/AayushRaj.webp";
import DheerajKumar from "../../../public/courses/mca/PlacementDesign/DheerajKumar.webp";
import JyotiPriya from "../../../public/courses/mca/PlacementDesign/JyotiPriya.webp";
import Nitin from "../../../public/courses/mca/PlacementDesign/Nitin.webp";
import PriyankaKumari from "../../../public/courses/mca/PlacementDesign/PriyankaKumari.webp";
import RanjanKumar from "../../../public/courses/mca/PlacementDesign/RanjanKumar.webp";
import RishabhSingh from "../../../public/courses/mca/PlacementDesign/RishabhSingh.webp";
import TanyaChauhan from "../../../public/courses/mca/PlacementDesign/TanyaChauhan.webp";

export
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
      image: AayushRaj,
      image2: DheerajKumar,
    },
    {
      image: JyotiPriya,
      image2: Nitin,
    },
    {
      image: PriyankaKumari,
      image2: RanjanKumar,
    },
    {
      image: RishabhSingh,
      image2: TanyaChauhan,
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
      title: "Advanced Tech Curriculum",
      description:
        "Artificial Intelligence, Data Science, Cybersecurity, and Software Development.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Driven Learning",
      description:
        "Live case studies, industry collaborations, and problem-solving exercises.",
    },
    {
      icon: highCareerDemand,
      title: "High-Growth Career Path",
      description:
        "IT, FinTech, EdTech, Healthcare Tech, and other emerging technology sectors.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Innovation & Research",
      description:
        "Work on live projects, compete in coding challenges, and collaborate with industry leaders.",
    },
    {
      icon: diverseIndustryApplications,
      title: "State-of-the-Art Facilities",
      description:
        "Access high-tech labs, cloud computing resources, AI research centres and high-performance computing (HPC) environments",
    },
    {
      icon: globalAccredetation,
      title: "Globally Recognized Accreditation",
      description: "NAAC A+, AICTE, and UGC-approved program.",
    },
  ];

  const journeyQuote =
    "Step into the digital revolution—advance your career with Tula's Institute!";

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
          <BannerLandingPage bannerImg={mcaBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={7}
              formHeading={"MCA Admissions Open 2025"}
              thankYOu={`/department-of-computer-application/mca/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          {/* <CuttingEdge
            scrollRef={scrollRef}
            heading={"Tula’s MCA"}
          /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your MCA Journey at Tula’s Institute"}
            journey={journey}
            journeyQuotes={journeyQuote}
          />
          <TableProgram selectedCardTable={selectedCardTable} />
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
