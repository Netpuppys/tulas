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
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { UtmContext } from "@/component/utmParams";
import dpharmaBannerImg from "../../../public/courses/dpharm/dpharmaBanner.jpg";
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
import { selectedCard1 } from "@/app/courses/dpharma/data";

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
        "Build a solid foundation in pharmaceutics, pharmacology, and medicinal chemistry through a dynamic, industry-aligned syllabus.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Focused Training",
      description:
        "Gain real-world skills through hands-on learning in labs, hospitals, and pharmaceutical industries.",
    },
    {
      icon: highCareerDemand,
      title: "In-Demand Career Paths",
      description:
        "Step confidently into roles in hospitals, community pharmacies, and pharmaceutical companies as a licensed pharmacist.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Competitive Edge",
      description:
        "Start your career early with a diploma that prepares you for immediate employment and future academic growth.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Versatile Applications",
      description:
        "Apply your knowledge in patient care, drug dispensing, regulatory affairs, and manufacturing.",
    },
    {
      icon: globalAccredetation,
      title: "Globally Accredited Program",
      description:
        "Earn credentials that qualify you for higher education and employment opportunities across borders.",
    },
  ];
  const journeyQuote =
    "D.Pharm. at Tula’s Institute is where your journey into healthcare begins—with hands-on skills";
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
          <BannerLandingPage bannerImg={dpharmaBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={122}
              formHeading={"D.Pharm. Admissions Open 2025"}
              thankYOu={`/institute-of-pharmacy/dpharma/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}

          <CarouselContent
      title="About Us"
      description={
        <>
        <div className="mt-4 md:mt-[1%]"></div>
            <p>
Tula's Institute has been a trusted name in quality education since its inception in 2006. With a commitment to shaping future healthcare professionals, our Diploma in Pharmacy program offers a strong foundation in pharmaceutical sciences, practical training, and ethical practices.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
Recognized among the leading pharmacy colleges in Dehradun, we focus on delivering hands-on experience through well-equipped labs, expert faculty, and industry-aligned curriculum. Whether you aim to work in hospitals, retail pharmacies, or pharmaceutical companies, our program prepares you for a rewarding career.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
If you're exploring options for D Pharma in Uttarakhand, Tula's Institute offers an ideal learning environment that blends academic excellence with real-world application. With pharmacy diploma admission now open, this is the perfect time to take the first step toward your professional journey.
      </p>
<div className="mt-4 md:mt-[1%]"></div>
      <p>
Don’t miss your chance—D Pharma admission 2025 at Tula's Institute is your gateway to a future in healthcare
      </p>
        </>
      }
    /> 
          {/* Cutting Edge */}
          {/* <CuttingEdge scrollRef={scrollRef} heading={"Tula’s BCA"} /> */}
          <div className="pt-8 md:pt-[4%]"></div>
          <Journey
            heading={"Your D.Pharm. Journey at Tula’s Institute"}
            journey={journey}
            journeyQuotes={journeyQuote}
          />
          <TableProgram selectedCard1={selectedCard1} />
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
