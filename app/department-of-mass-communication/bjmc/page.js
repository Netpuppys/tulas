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
import { facultyData, selectedCard1 } from "@/app/courses/bjmc/data/data";
import bjmcBannerImg from "../../../public/landingPage/bjmcBannerImg.webp";
import Journey from "@/app/graduate-school-of-business/Component/Journey";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import Accreditation from "@/app/Component/Accreditation";
import { UtmContext } from "@/component/utmParams";
import TableProgram from "@/component/Programs/tableProgram";
import placement3 from "../../../public/Homepage/Placement/placement3.png";
import placement4 from "../../../public/Homepage/Placement/placement4.png";
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

  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Comprehensive Media Curriculum",
      description:
        "Master journalism, digital media, advertising & public relations.",
    },
    {
      icon: industryReleventSkills,
      title: "Practical Industry Exposure",
      description:
        "Hands-on training in news writing, filmmaking, photography & media production.",
    },
    {
      icon: highCareerDemand,
      title: "Real-World Learning",
      description:
        "Engage in live projects, media internships & interactive sessions with industry experts.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Cutting-Edge Facilities",
      description:
        "Access modern studios, editing labs & state-of-the-art media equipment.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Diverse Career Opportunities",
      description:
        "Build a future in journalism, broadcasting, PR, digital marketing & content creation.",
    },
    {
      icon: globalAccredetation,
      title: "Global Accreditation",
      description: "NAAC A++, AICTE & UGC-approved program.",
    },
  ];
  const journeyQuote =
    "Turn Your Passion for Media into a Powerful Career with B.A (Hons.) JMC at Tula’s Institute!";

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
          <BannerLandingPage bannerImg={bjmcBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={5}
              formHeading={"BA.JMC Admissions Open 2025"}
              thankYOu={`/department-of-mass-communication/bjmc/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
<CarouselContent
      title="Tula's Institute: Crafting Communicators for a Changing World"
      description={
        <>
            <p>
Since 2006, under the Rishabh Educational Trust, Tula’s Institute has stood for academic
excellence and industry-driven learning. In an era where storytelling, media, and digital
communication shape global narratives, our BA in Journalism and Mass Communication
program equips students to lead, inform, and inspire.
      </p>

      <p>
Ranked among the top BA JMC colleges in Dehradun, Tula’s offers a rich blend of
classroom learning, field assignments, studio experience, and internships. From news
reporting and film production to digital content creation and public relations, we prepare
students for diverse and dynamic careers in media.
      </p>

      <p>
With a curriculum designed to meet global standards, we are proud to be recognized for
offering one of the most comprehensive mass communication courses in Uttarakhand. Our
expert faculty and modern media labs foster creativity, critical thinking, and ethical
journalism.
      </p>

      <p>
With journalism admission 2025 now open, aspiring media professionals can begin their
journey at the best BA in Journalism & Media college—Tula’s Institute, where your voice
meets purpose.
      </p>
        </>
      }
    />           {/* Cutting Edge */}
          {/* <CuttingEdge scrollRef={scrollRef} heading={"Tula’s BA(Hons.)JMC"} /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your B.A (Hons.) JMC Journey at Tula’s Institute"}
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
