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
import { facultyData, selectedCardTable } from "@/app/courses/bca/data/data";
import { UtmContext } from "@/component/utmParams";
import bcaBannerImg from "../../../public/landingPage/bcaBannerImg.webp";
import Journey from "@/app/graduate-school-of-business/Component/Journey";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import Accreditation from "@/app/Component/Accreditation";
import TableProgram from "@/component/Programs/tableProgram";
import anshikaPundir from "../../../public/courses/bca/anshikaPundir.png";
import ashutosh from "../../../public/courses/bca/ashutosh.png";
import gauravSrivastava from "../../../public/courses/bca/gauravSrivastava.png";
import prathamNautiyal from "../../../public/courses/bca/prathamNautiyal.png";
import rohitKotnala from "../../../public/courses/bca/rohitKotnala.png";
import saurabhRawat from "../../../public/courses/bca/saurabhRawat.png";
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
  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Cutting-Edge Curriculum",
      description:
        "Covers software development, web design, networking, cyber security, Artificial Intelligence any many more",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Focused Training",
      description:
        "Develop proficiency in software engineering, various programming languages, database management, and cybersecurity.",
    },
    {
      icon: highCareerDemand,
      title: "In-Demand Career Paths",
      description:
        "Explore opportunities in IT, software development, and tech entrepreneurship.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Competitive Edge",
      description:
        "Participate in hackathons, appathons, tech-quizzes and coding challenges to sharpen your skills.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Versatile Applications",
      description:
        "Gain knowledge applicable to finance, healthcare, e-commerce, digital electronics and more.",
    },
    {
      icon: globalAccredetation,
      title: "Globally Accredited Program",
      description: "NAAC A+, AICTE, and UGC-approved for quality education.",
    },
  ];
  const journeyQuote =
    "Shape your tech career with Tula’s Institute – Where Innovation Meets Excellence";
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
          <BannerLandingPage bannerImg={bcaBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={7}
              formHeading={"BCA Admissions Open 2025"}
              thankYOu={`/department-of-computer-application/bca/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
            <CarouselContent
      title="Tula’s Institute: Empowering the Next Generation of Tech Innovators"
      description={
        <>
        <div className="mt-4 md:mt-[1%]"></div>
            <p>
        Since its inception in 2006 under the Rishabh Educational Trust, Tula’s Institute has been at
        the forefront of delivering industry-relevant education.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
        In today’s digital era, our Bachelor of Computer Applications (BCA) program is designed to
        develop tech-savvy professionals with the skills to thrive in a rapidly evolving IT landscape.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
        Recognized among the top BCA colleges in Dehradun, Tula’s combines strong academic
        foundations with hands-on training in programming, data structures, software development, and
        emerging technologies. We focus on real-world application to ensure students are industry-ready
        from day one.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
        As the best BCA college in Uttarakhand, we emphasize innovation, problem-solving, and a
        future-oriented mindset. With expert faculty, modern labs, and strong industry ties, our students
        gain a competitive edge in the tech world.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
        Admissions are now open for the BCA course admission 2025. If you're searching for reputed
        computer application colleges in Dehradun that deliver both knowledge and opportunity—Tula’s
        Institute is your destination for success.
      </p>
        </>
      }
    />
          {/* Cutting Edge */}
          {/* <CuttingEdge scrollRef={scrollRef} heading={"Tula’s BCA"} /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your BCA Journey at Tula’s Institute"}
            journey={journey}
            journeyQuotes={journeyQuote}
          />
          {/* <TableProgram selectedCardTable={selectedCardTable} /> */}
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
