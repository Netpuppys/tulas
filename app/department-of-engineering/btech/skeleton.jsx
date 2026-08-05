"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import bannerImg from "../../../public/landingbanner/btech/btechmobile.jpg";
import bannerImgDesktop from "../../../public/landingbanner/btech/btechdesktop.jpg";
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
import mbaimg3 from "../../../public/graduate-school-of-business-v2/mba/tulasstat1.png";
import mbaimg4 from "../../../public/graduate-school-of-business-v2/mba/tulasstat2.png";
import mbaimg5 from "../../../public/graduate-school-of-business-v2/mba/tulasstat3.png";
import mbaimg6 from "../../../public/graduate-school-of-business-v2/mba/tulasstat4.png";
import LandingReadmore from "../Component/LandingReadmore";
import LandingAccredition from "../Component/LandingAccredition";
import LandingAdmissionEligibility from "../Component/LandingAdmissionEligibility";
import SpecialisationsCarousel from "../Component/SpecialisationsCarousel";
import LandingPerks from "../Component/LandingPerks";
import LandingHighlights from "../Component/LandingHighlights";
import LandingCareerPathSlider from "../Component/LandingCareerPathSlider";
import LandingInternshipSection from "../Component/LandingInternshipSection";
import LandingLifeTulas from "../Component/LandingLifeTulas";
import LandingAccordionCard from "../Component/LandingAccordionCard";
import LandingGlobalHiringPartners from "../Component/LandingGlobalHiringPartners";
import LandingAlumniSuccessStories from "../Component/LandingAlumniSuccessStories";
import LandingFormNew from "../Component/LandingFormNew";
import LandingBusinessSchool from "../Component/LandingBusinessSchool";
import LandingWhyTulas from "../Component/LandingWhyTulas";
import LandingEligibilitySection from "../Component/LandingEligibilitySection";
import LandingAccordianSpecialization from "../Component/LandingAccordianSpecialization";

const imageUrl = "/landing_page/";
// images
const Skeleton = ({
  title = "btech computer science",
  highlight = "NAAC A+ Accredited | 100% Placement Support | Admissions Open for 2026",
}) => {
  const { utmParams } = useContext(UtmContext);

  const handleScrollArrow = () => {
    window.scrollTo({
      top: 500, // Scroll to the top of the page
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
      image3: mbaimg3,
    },
    {
      image: mbaimg4,
      image2: mbaimg5,
      image3: mbaimg6,
    },
  ];

  const faqs = [
    {
      title: "What B.Tech specialisations are offered at Tulas?",
      content: (
        <>
          <p className="mb-2 text-body">
            Tulas offers B.Tech programs in Computer Science & Engineering,
            Artificial Intelligence & Machine Learning, Data Science, Cyber
            Security, Civil Engineering, Mechanical Engineering, Electronics &
            Communication Engineering and Electrical & Electronics Engineering.
          </p>
        </>
      ),
    },
    {
      title: "What is the eligibility criteria for B.Tech admission?",
      content: (
        <>
          <p className="mb-2 text-body">
            Candidates must have passed 10+2 with Physics and Mathematics as
            compulsory subjects along with one additional subject such as
            Chemistry, Computer Science, Biotechnology or related subjects, with
            a minimum of 45% marks (40% for reserved categories).
          </p>
        </>
      ),
    },
    {
      title: "Does Tulas Universities provide any scholarships?",
      content: (
        <>
          <p className="mb-2 text-body">
            Yes, Tulas University offers up to 100% scholarships for different
            categories based on merit, Uttarakhand state domicile, defence
            background, sports achievements, and female students.
          </p>
        </>
      ),
    },
    {
      title:
        "Does Tulas provide internship and placement opportunities for B.Tech students?",
      content: (
        <>
          <p className="mb-2 text-body">
            Yes. The Training and Placement Cell provides internship
            opportunities, career training, mock interviews and connects
            students with leading recruiters through campus placement drives.
          </p>
        </>
      ),
    },
    {
      title: "Why Tulas is the best B.Tech college in Dehradun, Uttrakhand?",
      content: (
        <>
          <p className="mb-2 text-body">
            If you are looking for a B.Tech college in Uttarakhand, Dehradun
            then Tulas is suggested as it is UGC approved and NAAC A+
            Accredited. It has an amazing campus life, students club, annual
            fests and industry workshops on futuristic skills and courses that
            will help students get good placements. With a good alumni record,
            alumni of Tulas are working in different industries at good
            packages. B.Tech admissions 2026 are open. Apply now by filling the
            admission form
          </p>
        </>
      ),
    },
  ];

  const para = [
    "Tula's Institute to Tulas University - 20 Years of Academic Excellence",
    "From humble beginnings in 2006 to becoming a full-fledged state university in 2026, Tulas University has come a long way. As the world rapidly evolves, we're evolving with it. Our programs are designed to prepare you for the future and careers that don't even exist yet.",
    "Our curriculum is updated annually with industry insights, ensuring you're job-ready from day one. Get hands-on experience through live projects, internships, hackathons, and certifications valued by top companies.",
    "With a strong placement ecosystem, we've connected students with 350+ companies, including Microsoft, Adobe, Oracle, Infosys, and HCL. Our focus on skill-based training makes you industry-ready.",
    "Tulas University is NAAC A+ accredited, and its Btech CSE is NBA accredited. We're consistently ranked among the top universities in the country for our placements, curriculum, and industry exposure.",
    "Nestled in the foothills of the majestic Himalayas, our campus is a perfect blend of serene beauty and academic excellence. Experience vibrant campus life with fests like Utkrisht, sports, NCC, and alumni meets, just 250 km from Delhi.",
    "Tulas University - where academic excellence meets industry relevance.",
  ];

  // NOTE: this component must NOT render <head> or <body>.
  // The App Router already provides both in app/layout.js, so wrapping the
  // page in a second <body> produced "In HTML, <body> cannot be a child of
  // <body>" and broke hydration on every lp1-lp32 route.
  // Page title / description now come from the route's layout.js metadata,
  // which is also where they belong -- the old hardcoded <title> here said
  // "MBA" on B.Tech pages.
  return (
    <>
        <div className="w-full min-h-screen h-full relative ">
          {/* Navbar */}
          <NavbarLanding handleScrollArrow={handleScrollArrow} />
          {/* <NavbarLandingPage /> */}
          {/* banner */}
          <BannerLandingPage
            change
            bannerImgDesktop={imageUrl + "d1.jpg"}
            bannerImg={imageUrl + "m1.jpeg"}
            title={title}
            highlight={highlight}
          />

          {/* <div ref={scrollRef}>
            <LandingFormNew
              course={1}
              formHeading={"MBA Admissions Open 2026"}
              thankYOu={`/graduate-school-of-business-v2/mba/thank-you/${utmParams}`}
            />
          </div> */}

          {/* carousel */}
          {/* <div className="hidden md:block pt-[34px] md:pt-[90px]">
     
          {/* Content One */}

          <RankSection />

          <LandingReadmore paragraphs={para} />

          {/* <LandingAdmissionEligibility/> */}

          <LandingWhyTulas />

          <LandingPerks perksSlides={placementSlides} />

          <LandingAccordianSpecialization />

          <LandingEligibilitySection change />

          <LandingGlobalHiringPartners />

          {/* <div className="w-full pb-8 md:pb-[4%] bg-white sticky z-10 h-full">
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
          </div> */}

          <LandingAlumniSuccessStories change />

          {/* <SpecialisationsCarousel/> */}

          {/* <LandingCareerPathSlider/> */}
          <LandingHighlights />

          <LandingInternshipSection />

          <LandingAccredition />

          <LandingLifeTulas />

          <LandingAccordionCard data={faqs} />

          {/* <div className="pb-8 md:pb-[3%]">
            <PlacementProgram features={features} />
          </div> */}
          {/* <Placement scrollRef={scrollRef} /> */}
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
    </>
  );
};

export default Skeleton;

// ---------- Configuration ----------
const rankConfig = {
  ranks: [
    {
      image: "./logo/4.jpg",
      ranking: [
        { rank: "#1", desc: "Private ENGINEERING COLLEGE IN Dehradun" },
        { rank: "#21", desc: "Private ENGINEERING COLLEGE IN North India" },
      ],
    },
    {
      image: "./logo/1.jpg",
      ranking: [{ rank: "#20", desc: "Private ENGINEERING COLLEGE 2025" }],
    },
    {
      image: "./logo/2.jpg",
      ranking: [{ rank: "#37", desc: "Pvt. ENGINEERING COLLEGE IN Dehradun" }],
    },
    {
      image: "./logo/3.jpg",
      ranking: [{ rank: "#65", desc: "ENGINEERING Excellence 2025" }],
    },
    {
      image: "./logo/6.jpg",
      ranking: [{ rank: "#88", desc: "ENGINEERING Excellence 2026" }],
    },
  ],
};

// ---------- Rank Section Component ----------
function RankSection() {
  const rankItems = rankConfig.ranks;
  return (
    <section className="py-12 bg-brand-bgLight">
      {/*
        <style> is an HTML raw-text element: entities inside it are NOT
        decoded by the browser. Passing CSS as a normal JSX child made React
        escape the double quotes in font-family to &quot; on the server, so
        the server HTML contained invalid CSS and then mismatched the client
        on hydration ("Text content does not match server-rendered HTML").

        dangerouslySetInnerHTML is the correct way to emit style/script
        content in React -- it is not unsafe here, the string is a literal.
        The quotes around Nunito are also unnecessary for a single-word
        family name, so they are gone as well.

        Note: .brand-bgLight / .brand-orange / .brand-navy duplicate tokens
        that already exist in tailwind.config.js (theme.extend.colors.brand)
        and the markup uses the Tailwind utilities, so only .font-heading
        actually does anything here.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .brand-bgLight { background-color: #fbf8f5; }
            .brand-orange  { color: #f26522; }
            .brand-navy    { color: #121f38; }
            .font-heading  { font-family: Nunito, sans-serif; }
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-brand-orange font-extrabold uppercase text-xs tracking-widest font-heading">
            Perfect Choice
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy mt-1">
            India's Top Ranked University
          </h2>
        </div>

        {/* Ranking Cards */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-4">
          {rankItems.map((item, idx) => (
            <div key={idx} className="flex-1">
              {/* Logo */}
              <div className="mt-3 pt-3 border-t border-brand-orange w-full flex bg-white justify-center">
                <img
                  src={imageUrl + item.image}
                  alt="Ranking Logo"
                  className="w-auto object-contain max-h-[150px] h-[150px] w-full"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              {/* Ranking Details */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200/60 text-center hover:shadow-md transition flex flex-col items-center">
                <div className="flex justify-center gap-1 items-start w-full">
                  {item.ranking.map((r, i) => (
                    <div key={i} className="mt-0">
                      <div className="text-brand-orange text-xl font-black font-heading">
                        {r.rank}
                      </div>
                      <div className="text-[10px] font-bold text-gray-700 uppercase leading-tight">
                        {r.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
