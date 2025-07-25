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
import marketingIcon from "../../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../../public/graduate-school-of-business/mba/entreprenurship.png";
import BusinessAnalytics from "../../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../../public/graduate-school-of-business/mba/AgriBusiness.png";
import healthCare from "../../../public/graduate-school-of-business/mba/healthCare.png";
import btechBannerImg from "../../../public/landingPage/btechBannerImg.webp";
import { facultyDataCSE } from "@/app/courses/btech/facultyDataCSE";
import comprehensiveCurriculam from "../../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../../public/graduate-school-of-business/mba/globalAccredetation.png";
import { UtmContext } from "@/component/utmParams";
import { selectedCardTable } from "@/app/courses/btech/computer-science/data/data";
import TableProgram from "@/component/Programs/tableProgram";
import AmaanAnsari from "../../../public/courses/btech/CSE-PlacementDesign/AmaanAnsari.webp";
import AshutoshMalik from "../../../public/courses/btech/CSE-PlacementDesign/AshutoshMalik.webp";
import HarshKahiwal from "../../../public/courses/btech/CSE-PlacementDesign/HarshKahiwal.webp";
import MohitJaiswal from "../../../public/courses/btech/CSE-PlacementDesign/MohitJaiswal.webp";
import RichaMunola from "../../../public/courses/btech/CSE-PlacementDesign/RichaMunola.webp";
import SahilSah from "../../../public/courses/btech/CSE-PlacementDesign/SahilSah.webp";
import SnehshishTiwari from "../../../public/courses/btech/CSE-PlacementDesign/SnehshishTiwari.webp";
import VijayKumar from "../../../public/courses/btech/CSE-PlacementDesign/VijayKumar.webp";
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
      image: AmaanAnsari,
      image2: AshutoshMalik,
    },
    {
      image: HarshKahiwal,
      image2: MohitJaiswal,
    },
    {
      image: RichaMunola,
      image2: SahilSah,
    },
    {
      image: SnehshishTiwari,
      image2: VijayKumar,
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
      title: "Civil Engineering",
      icon: marketingIcon,
    },
    {
      title: "Computer Science & Engineering",
      icon: finance,
    },
    {
      title: "Data Science",
      icon: entreprenurship,
    },
    {
      title: "Cyber Security",
      icon: BusinessAnalytics,
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: HumanResource,
    },
    {
      title: "Electronics & Communication Engineering",
      icon: InternationalBusiness,
    },
    {
      title: "Electrical & Electronics Engineering",
      icon: AgriBusiness,
    },
    {
      title: "Mechanical Engineering",
      icon: healthCare,
    },
  ];
  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Cutting-Edge Curriculum",
      description:
        "Covers core engineering disciplines with emerging technologies.",
    },
    {
      icon: industryReleventSkills,
      title: "Industry-Focused Learning",
      description:
        "Hands-on training in AI, Robotics, IoT & Data Science and many more in the emerging areas as an ADD on courses.",
    },
    {
      icon: highCareerDemand,
      title: "High Career Demand",
      description:
        "Opens doors to top industries like IT, Automotive, and Manufacturing.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Innovation & Research",
      description:
        "Participate in live projects, hackathons, research publications & technical competitions and incentivized from the Tula’s research policy on every research activity performed.",
    },
    {
      icon: diverseIndustryApplications,
      title: "State-of-the-Art Facilities",
      description: "Access 30+ advanced labs & modern research centers.",
    },
    {
      icon: globalAccredetation,
      title: "Global Accreditation",
      description:
        "NAAC A+ Accreditation, NBA Accreditation, AICTE & UGC-approved program.",
    },
  ];
  const journeyQuote =
    "Engineer the Future with a B.Tech from Tula’s Institute!";
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
          <NavbarLanding handleScrollArrow={handleScrollArrow} nba={true} />
          {/* <NavbarLandingPage /> */}
          {/* banner */}
          <BannerLandingPage bannerImg={btechBannerImg} />
          {/* Form */}
          <div ref={scrollRef}>
            <FormLandingPage
              course={3}
              formHeading={"B.Tech Admissions Open 2025"}
              thankYOu={`/department-of-engineering/btech/thank-you/${utmParams}`}
            />
          </div>
          {/* Content One */}
                      <CarouselContent
      title="Tula's Institute: Shaping Future Engineers Since 2006"
      description={
        <>
                  <div className="mt-4 md:mt-[1%]"></div>
            <p>
Established under the Rishabh Educational Trust, Tula's Institute has grown into one of the
top BTech colleges in Dehradun, known for academic excellence and holistic development.
As a leading private engineering college, we focus not just on imparting theoretical
knowledge but on nurturing practical skills that prepare students for real-world challenges.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
With BTech admissions 2025 now open, aspiring engineers have the opportunity to join a
campus that blends innovation, industry exposure, and a student-centric approach. Our
curriculum is designed to foster critical thinking, strategic problem-solving, and leadership,
traits essential in today's rapidly evolving tech landscape.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
Recognized as the best engineering college in Uttarakhand, Tula's stands out for its
commitment to quality education and career-focused learning. As a private BTech college
with placements, we ensure that students are not only job-ready but future-ready, with top
recruiters visiting us every year.
      </p>
          <div className="mt-4 md:mt-[1%]"></div>
      <p>
If you're exploring engineering colleges in Dehradun that offer a perfect blend of academics,
infrastructure, and industry connections, Tula's Institute is your destination.
      </p>
        </>
      }
    />          {/* Cutting Edge */}
          <CuttingEdge
            scrollRef={scrollRef}
            heading={"Tula’s B.Tech Specialisations"}
            department={department}
            journey={journey}
            journeyHeading={"Your B.Tech Journey at Tula’s Institute"}
            journeyQuote={journeyQuote}
          />
          {/* Why Choose Tulas */}
          <WhyChoose />
          {/* At a glance */}
          {/* <AtGlance /> */}
          <CampusLife />
          <TableProgram selectedCardTable={selectedCardTable} />
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
