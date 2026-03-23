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
import WhyChoose from "@/app/graduate-school-of-business/Component/WhyChoose";
import FacultyDataLandingPage from "@/app/graduate-school-of-business/Component/FacultyDataLandingPage";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { UtmContext } from "@/component/utmParams";
import bpharmaBannerImg from "../../../public/courses/bpharm/bpharmaBanner.jpg";
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
import { selectedCard1 } from "@/app/courses/bpharma/data";

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
        " Dive deep into drug formulation, pharmacology, and regulatory sciences through an innovative and comprehensive syllabus.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Focused Training",
      description:
        "Gain hands-on experience with real-world pharmaceutical practices, ensuring you're job-ready from day one.",
    },
    {
      icon: highCareerDemand,
      title: "In-Demand Career Paths",
      description:
        "Unlock diverse roles in healthcare, R&D, quality control, and pharmaceutical marketing.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Competitive Edge",
      description:
        " Stand out with a strong foundation in pharmaceutical sciences combined with practical exposure and global trends.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Versatile Applications",
      description:
        "Apply your knowledge across hospitals, research labs, production units, and entrepreneurial ventures.",
    },
    {
      icon: globalAccredetation,
      title: "Globally Accredited Program",
      description:
        "Earn a qualification recognized worldwide, opening doors for international education and employment.",
    },
  ];
  const journeyQuote =
    "Empowering future pharmacists with knowledge, innovation, and global opportunities";
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
          <BannerLandingPage bannerImg={bpharmaBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={122}
              formHeading={" B.Pharm. Admissions Open 2025"}
              thankYOu={`/institute-of-pharmacy/bpharma/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
<CarouselContent
      title="Tula's Institute: Nurturing the Future of Healthcare and Innovation"
      description={
        <>
        <div className="mt-4 md:mt-[1%]"></div>
            <p>
Established in 2006 under the Rishabh Educational Trust, Tula’s Institute is committed to
excellence in professional education. With a growing focus on healthcare and
pharmaceutical innovation, our B.Pharm program is designed to develop skilled
professionals ready to make an impact in the medical and research fields.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
As one of the leading BPharma colleges in Dehradun, Tula’s offers a curriculum that
combines pharmaceutical science with practical lab work, clinical exposure, and ethical
training. We prepare students not just for jobs—but for meaningful careers in drug
development, healthcare, and biotech industries.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
Recognized as a trusted pharmacy college in Uttarakhand, we emphasize research,
innovation, and real-world application to ensure our graduates are equipped for both higher
studies and immediate industry roles.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
With BPharma admission 2025 now open, take your first step toward a career that saves
lives and shapes the future—only at Tula’s Institute.
      </p>
        </>
      }
    />            {/* Cutting Edge */}
          {/* <CuttingEdge scrollRef={scrollRef} heading={"Tula’s BCA"} /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your  B.Pharm. Journey at Tula’s Institute"}
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

          {/* Accreditations */}
          {/* <Accreditations /> */}
          {/* Placement */}
          {/* <div className="pb-8 md:pb-[3%]">
            <PlacementProgram features={features} />
          </div> */}
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
