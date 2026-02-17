"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import bannerImg from "../../../public/graduate-school-of-business-v2/mba/bannerimg.png";
import BannerLandingPage from "../Component/BannerLandingPage";
import FormLandingPage from "../Component/FormLandingPage";
import CarouselContent from "../Component/CarouselContent";
import CuttingEdge from "../Component/CuttingEdge";
import WhyChoose from "../Component/WhyChoose";
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
import BusinessAnalytics from "../../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../../public/graduate-school-of-business/mba/AgriBusiness.png";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import { UtmContext } from "@/component/utmParams";
import TableProgram from "@/component/Programs/tableProgram";

import PlacementProgram from "@/component/Programs/PlacementProgram";
import AccreditationImg from "../../../public/Homepage/Accreditation/accreditationMBA.webp";
import AccreditationImgMobile from "../../../public/Homepage/Accreditation/mbapagestop.webp";
import DiptanuDebnath from "../../../public/courses/mba/PlacementDesign/DiptanuDebnath.webp";
import MayankSrivastava from "../../../public/courses/mba/PlacementDesign/MayankSrivastava.webp";
import JatinSobti from "../../../public/courses/mba/PlacementDesign/JatinSobti.webp";
import TausifRaza from "../../../public/courses/mba/PlacementDesign/TausifRaza.webp";
import PrakharSrivastava from "../../../public/courses/mba/PlacementDesign/PrakharShrivastava.webp";
import PriyankaPriya from "../../../public/courses/mba/PlacementDesign/PriyankaPriya.webp";
import ShubhamSaxena from "../../../public/courses/mba/PlacementDesign/ShubhamSaxena.webp";

import CarouselLanding from "../Component/CarouselLandingPage";

// images
import Banner1 from "../../../public/landingPage/1.jpg";
import Banner2 from "../../../public/landingPage/2.jpg";
import Banner3 from "../../../public/landingPage/4.jpg";
import Banner4 from "../../../public/landingPage/6.jpg";
import Banner5 from "../../../public/landingPage/9.jpg";

import Bannermd1 from "../../../public/landingPage/1md.jpg";
import Bannermd2 from "../../../public/landingPage/2md.jpg";
import Bannermd3 from "../../../public/landingPage/4md.jpg";
import Bannermd4 from "../../../public/landingPage/6md.jpg";
import Bannermd5 from "../../../public/landingPage/9md.jpg";

import mbaimg1 from "../../../public/graduate-school-of-business-v2/mba/choosemba1.png";
import mbaimg2 from "../../../public/graduate-school-of-business-v2/mba/choosemba2.png";
import mbaimg3 from "../../../public/graduate-school-of-business-v2/mba/choosemba1.png";
import mbaimg4 from "../../../public/graduate-school-of-business-v2/mba/choosemba2.png";

import LandingReadmore from "../Component/LandingReadmore";
import LandingAccredition from "../Component/LandingAccredition";
import LandingAdmissionEligibility from "../Component/LandingAdmissionEligibility";
import SpecialisationsCarousel from "../Component/SpecialisationsCarousel";
import LandingPerks from "../Component/LandingPerks";
// images
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
      image: DiptanuDebnath,
      image2: MayankSrivastava,
    },
    {
      image: JatinSobti,
      image2: TausifRaza,
    },
    {
      image: PrakharSrivastava,
      image2: PriyankaPriya,
    },
    {
      image: ShubhamSaxena,
      image2: TausifRaza,
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

  const bannerImagesDesktop = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    // desktopbanner2,
  ];
  const bannerImagesMobile = [
    Bannermd1,
    Bannermd2,
    Bannermd3,
    Bannermd4,
    Bannermd5,
    // mobilebanner2,
  ];

const placementSlides = [
  {
    image: mbaimg1,
    image2: mbaimg2,
  },
    {
    image: mbaimg3,
    image2: mbaimg4,
  },
];


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

          {/* carousel */}
        {/* <div className="hidden md:block pt-[34px] md:pt-[90px]">
          <CarouselLanding bannerImages={bannerImagesDesktop} scrollButton={true} />
        </div>
        <div className="block md:hidden pt-[64px] md:pt-[80px]">
          <CarouselLanding bannerImages={bannerImagesMobile} scrollButton={true} />
        </div>   */}
         {/* carousel */}
                {/* Form */}
          {/* <div ref={scrollRef}>
            <FormLandingPage
              course={1}
              formHeading={"MBA Admissions Open 2026"}
              thankYOu={`/graduate-school-of-business/mba/thank-you/${utmParams}`}
            />
          </div> */}
          {/* Content One */}

          <LandingReadmore/>

          <LandingAccredition/>
          
          <LandingAdmissionEligibility/>

          <SpecialisationsCarousel/>

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

          <LandingPerks perksSlides={placementSlides} />


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
