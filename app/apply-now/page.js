"use client";

import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidgetGray.png";
import { IoIosArrowRoundUp } from "react-icons/io";
import Image from "next/image";
import CampusLife from "@/app/Component/CampusLife";
import NavbarLanding from "@/app/graduate-school-of-business/Component/NavbarLanding";
import CarouselContent from "@/app/graduate-school-of-business/Component/CarouselContent";
import CuttingEdge from "@/app/graduate-school-of-business/Component/CuttingEdge";
import WhyChoose from "@/app/graduate-school-of-business/Component/WhyChoose";
import FacultyDataLandingPage from "@/app/graduate-school-of-business/Component/FacultyDataLandingPage";
import campus from "../../public/graduate-school-of-business/mba/campus1.webp";
import Placement from "@/app/graduate-school-of-business/Component/Placement";
import { UtmContext } from "@/component/utmParams";
import bannerImage from "../../public/Homepage/BannerHome/BannerImage2.webp";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import industryReleventSkills from "../../public/graduate-school-of-business/mba/industryReleventSkills.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import globalAccredetation from "../../public/graduate-school-of-business/mba/globalAccredetation.png";
import AbhishekPandy from "../../public/graduate-school-of-business/bba/AbhishekPandy.png";
import AdilAhmed from "../../public/graduate-school-of-business/bba/AdilAhmed.png";
import AdityaPandey from "../../public/graduate-school-of-business/bba/AdityaPandey.png";
import DivyaShankar from "../../public/graduate-school-of-business/bba/DivyaShankar.png";
import GautamSinghChauhan from "../../public/graduate-school-of-business/bba/GautamSinghChauhan.png";
import JasmineBatham from "../../public/graduate-school-of-business/bba/JasmineBatham.png";
import KumariPriya from "../../public/graduate-school-of-business/bba/KumariPriya.png";
import NainseeSingh from "../../public/graduate-school-of-business/bba/NainseeSingh.png";
import PriyankaDhiman from "../../public/graduate-school-of-business/bba/PriyankaDhiman.png";
import RahulBauri from "../../public/graduate-school-of-business/bba/RahulBauri.png";
import RajniMondi from "../../public/graduate-school-of-business/bba/RajniMondi.png";
import RomaKumari from "../../public/graduate-school-of-business/bba/RomaKumari.png";
import ShambhaviRajChauhan from "../../public/graduate-school-of-business/bba/ShambhaviRajChauhan.png";
import SrishtiGupta from "../../public/graduate-school-of-business/bba/SrishtiGupta.png";
import SushantTrivedi from "../../public/graduate-school-of-business/bba/SushantTrivedi.png";
import UjjwalPratik from "../../public/graduate-school-of-business/bba/UjjwalPratik.png";
import rishitaPatel from "../../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../../public/courses/bcom/santosiPanwar.png";
import anshikaPundir from "../../public/courses/bca/anshikaPundir.png";
import ashutosh from "../../public/courses/bca/ashutosh.png";
import gauravSrivastava from "../../public/courses/bca/gauravSrivastava.png";
import prathamNautiyal from "../../public/courses/bca/prathamNautiyal.png";
import rohitKotnala from "../../public/courses/bca/rohitKotnala.png";
import saurabhRawat from "../../public/courses/bca/saurabhRawat.png";
import PlacementProgram from "@/component/Programs/PlacementProgram";
import { facultyDataCSE } from "../courses/btech/facultyDataCSE";
import { useInView } from "react-intersection-observer";
import { IoCheckmarkSharp } from "react-icons/io5";
import ApplyBanner from "./components/ApplyBanner";
import LandingAlumniSuccessStories from "../department-of-engineering/Component/LandingAlumniSuccessStories";
import HomePerks from "../newhome-components/HomePerks";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";


const page = () => {
  useLayoutEffect(() => {
    const loadScriptAndStyles = () => {
      window.ee_form_widget_baseurl = "https://eewidget.extraaedge.com/";

      if (!document.getElementById("__formWidgetCss")) {
        const linkElement = document.createElement("link");
        linkElement.id = "__formWidgetCss";
        linkElement.rel = "stylesheet";
        linkElement.href =
          window.ee_form_widget_baseurl + "css/stylesheet.min.css";
        linkElement.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(linkElement);
      }
      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src =
        window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
      scriptElement.onload = async function () {
        const _eeFormWidget = new eeFormWidget();
        await _eeFormWidget.init("tulas", "form-15", "ee-form-15");
      };

      document.getElementsByTagName("head")[0].appendChild(scriptElement);
    };

    loadScriptAndStyles();
  }, []);

  const { utmParams } = useContext(UtmContext);

  const handleScrollArrow = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  const features = [
    {
      image: AbhishekPandy,
      image2: AdilAhmed,
    },
    {
      image: AdityaPandey,
      image2: DivyaShankar,
    },
    {
      image: GautamSinghChauhan,
      image2: JasmineBatham,
    },
    {
      image: KumariPriya,
      image2: NainseeSingh,
    },
    {
      image: PriyankaDhiman,
      image2: RahulBauri,
    },
    {
      image: RajniMondi,
      image2: RomaKumari,
    },
    {
      image: ShambhaviRajChauhan,
      image2: SrishtiGupta,
    },
    {
      image: SushantTrivedi,
      image2: UjjwalPratik,
    },
    {
      image: rishitaPatel,
      image2: santosiPanwar,
    },
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
  const departments = [
    {
      title: "B.Tech",
      description:
        "Bachelor of Technology program aims to give students practical experience in a range of engineering fields as well as a solid technical foundation. Cyber Security, Data Science, Electronics & Communication Engineering (ECE), Electrical & Electronics Engineering (EEE), Mechanical Engineering (ME), Artificial Intelligence & Machine Learning (AI&ML), Civil Engineering, and Computer Science & Engineering (CSE) are among the specialisations available in the program. ",
    },
    {
      title: "M.Tech",
      description:
        "A specialised postgraduate degree that enhances technical proficiency and research abilities is the Master of Technology program. Tulas University gives students a competitive edge in research, industry applications, and technological developments through its M.Tech specialisations in Computer Science & Engineering, Thermal Engineering, and Civil Engineering.",
    },
    {
      title: "B.Com (Hons)",
      description:
        "This degree prepares students for professions in banking, taxes, and corporate sectors by giving them a thorough understanding of commerce, finance, and business management. It develops the strategic and analytical thinking abilities necessary for the changing financial environment.",
    },
    {
      title: "MBA",
      description:
        "This is a dynamic program that gives students superior leadership capabilities, strategic decision-making talents, and business acumen. Career progression and industry relevance are guaranteed by specialisations in marketing, finance, human resources, and information technology.",
    },
    {
      title: "BBA",
      description:
        "Designed for aspiring business leaders, the BBA program focuses on management principles, entrepreneurship, and leadership skills, offering a strong foundation for corporate roles or future MBA pursuits.",
    },
    {
      title: "B.Sc Agriculture",
      description:
        "Agronomy, horticulture, soil science, and agricultural economics are all covered in the multidisciplinary B.Sc.(Hons.) Agriculture degree. Students are prepared for jobs in agricultural research, agribusiness, and sustainable farming.",
    },
    {
      title: "BA (Hons) JMC",
      description:
        "A comprehensive program that blends journalism, digital media, and public relations, preparing students for careers in media houses, content creation, and corporate communication.",
    },
    {
      title: "BCA",
      description:
        "A technology-driven course focusing on programming, web development, and database management, preparing students for careers in software development and IT industries.",
    },
    {
      title: "MCA",
      description:
        "A postgraduate degree that honed skills in cloud computing, AI, advanced computing, and cybersecurity, leading to high-level IT positions.",
    },
    {
      title: "B. Pharm",
      description:
        "This curriculum prepares students for employment in pharmacy, research, and healthcare management by giving them a thorough understanding of pharmaceuticals, drug development, and healthcare. ",
    },
    {
      title: "D. Pharm",
      description:
        "This program focuses on pharmaceutical sciences, medical ethics, and clinical practices, ideal for those looking to enter the healthcare sector quickly.",
    },
  ];

  const journey = [
    {
      icon: comprehensiveCurriculam,
      title: "Global Curriculum",
      description:
        "Stay ahead with our globally aligned curriculum that integrates the latest industry trends, technology, and practical applications.",
    },
    {
      icon: industryReleventSkills,
      title: "Market Skills",
      description:
        "Gain market-relevant skills through hands-on training, industry collaborations, and real-world problem-solving.",
    },
    {
      icon: highCareerDemand,
      title: "100% Placement Assistance",
      description:
        "With thorough training and knowledgeable direction, our Career Innovation Centre (CIC) guarantees worldwide placement chances with leading MNCs.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Soft Skills Development",
      description:
        "Build confidence, leadership, and communication skills essential for success in today’s competitive world.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Campus Life",
      description:
        "Take in a lively campus that perfectly balances extracurricular activities, academics, and a vibrant student body.",
    },
    {
      icon: globalAccredetation,
      title: "Entrepreneurship Development",
      description:
        "Turn ideas into reality with startup support, expert mentorship, and incubation programs at Tulas University.",
    },
  ];

  const journeyQuote = "Build a Strong Foundation from Tulas University!";

  const sections = [
    {
      title: "About Tulas",
      description: (
        <>
          Tulas University, founded in 2006 under the Rishabh Educational Trust,
          is a premier hub for education in Dehradun. We are dedicated to
          developing future leaders. From engineers, journalists to tech gurus,
          we have all the courses you are looking for. We focus on providing a
          strong academic foundation while emphasizing critical thinking,
          strategic decision-making, and real-world skills, which are essential
          for success in today’s competitive world. Our approach is simple, we
          do not prepare you just for the industry, but for life.
          <div className="mt-4 md:mt-[1%]"></div>
          At Tulas, we prepare students to navigate complex challenges, drive
          innovation, and lead with confidence. All thanks to our hands-on
          approach to learning which ensures that students are not only equipped
          with theoretical knowledge but also practical experience. Tulas
          University Dehradun bridges the gap between the current job market and
          the skill they look for in modern candidates. Ensure you get your
          overall development at Tulas University Dehradun. Get inspired, get
          equipped, get started with Tulas today!
        </>
      ),
      image: campus,
    },
  ];
  return (
    <>
      <head>
        <title>Tulas University, Dehradun, Uttrakhand, India</title>
        <meta
          name="description"
          content="Apply for Btech, Mtech, Bba, Mba, Bca, Mca, Diploma in Best Engineering College in Dehradun.Tulas University, Dehradun, Uttrakhand, India' 9837983721."
        />
      </head>
      <body>
        {/* <NavbarLanding handleScrollArrow={handleScrollArrow} nba={true} /> */}
        <div className="hidden md:block">
                                  <MegaMenu />
                                </div>
                                
                                <div className="block md:hidden">
                                  <NewNavbar fullBanner={true}/>
                                </div>

        <ApplyBanner/>


                        <section className="w-full mt-12 py-6 bg-white flex justify-center">
                <div className="w-full max-w-6xl px-3">
          
                  {/* Wrapper */}
                  <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full flex justify-center items-center">
  <div className="w-full max-w-xl text-center flex flex-col items-center">

    {/* Heading */}
    <h2 className="text-[clamp(28px,5vw,38px)] font-medium mb-2" style={{ textAlign: "center" }}>
      <span className="text-orange-500 font-extrabold">
        Where Future-Ready
      </span>{" "}
      <span className="text-gray-800 font-extrabold">
        Careers Begin
      </span>
    </h2>

    {/* Description */}
    <p className="text-black text-[15px] md:text-[17px] leading-relaxed mb-5">
      At Tulas, a future-focused curriculum blends industry relevance, AI-driven learning, and innovation-led thinking, helping students build the skills, confidence, and clarity to lead, adapt, and succeed in a rapidly evolving world. Join Tulas if you are ready to move beyond learning into real-world impact.
    </p>

    {/* Check Points */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full">
      
      <div className="flex items-center gap-3 text-lg font-medium text-black justify-center md:justify-start">
        <IoCheckmarkSharp className="text-2xl text-orange-500" />
        <span className="text-orange-500 font-bold">750+</span> Global Recruiters
      </div>

      <div className="flex items-center gap-3 text-lg font-medium text-black justify-center md:justify-start">
        <IoCheckmarkSharp className="text-2xl text-orange-500" />
        <span className="text-orange-500 font-bold">AI</span> Native Specialisations
      </div>

      <div className="flex items-center gap-3 text-lg font-medium text-black justify-center md:justify-start">
        <IoCheckmarkSharp className="text-2xl text-orange-500" />
        <span className="text-orange-500 font-bold">100%</span> Paid Internships
      </div>

      <div className="flex items-center gap-3 text-lg font-medium text-black justify-center md:justify-start">
        <IoCheckmarkSharp className="text-2xl text-orange-500" />
        <span className="text-orange-500 font-bold">100%</span> Placement Support
      </div>

    </div>

  </div>
</div>
          
                    {/* CTA SECTION */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
  <div id="ee-form-15" className="w-full max-w-md mx-auto"></div>
</div>
          
                  </div>
          
                </div>
              </section>
        
        <div className="w-full min-h-screen overflow-x-hidden relative">
              <LandingAlumniSuccessStories/>
              
              <HomePerks/>

              <NewFooter/>

              <div className="w-full flex justify-center items-center py-4">
  <p className="text-sm text-gray-600">
    Copyright © 2026 Tulas University, Dehradun | All Rights Reserved
  </p>
</div>


{/* 
          <div className="py-8 md:py-[4%] bg-transparent overflow-hidden px-8 md:px-0 w-full h-fit flex gap-8 md:gap-0 flex-col items-center justify-between">
            {sections.map((section, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });
              return (
                <div
                  ref={ref}
                  key={index}
                  className={`flex flex-col gap-8 md:gap-0 md:flex-row md:mb-[4%] last:mb-0 justify-between w-full md:w-[95%] h-fit items-center md:ml-[5%]`}
                >
                  <div className="w-full md:px-0 md:w-[47%]">
                    <div className="w-full block">
                      <h3
                        className={`
                      text-[#007A83] px-4 font-[GoudyCatalogue] text-center md:text-start rounded-md font-semibold text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)]`}
                      >
                        {section.title}
                      </h3>
                      <h5
                        className={`text-[clamp(10px,4vw,30px)] text-justify md:text-left md:text-[clamp(10px,1.1vw,45px)] leading-tight text-wrap font-[TTChocolates] text-[#4E4E4E]`}
                      >
                        {section.description}
                      </h5>
                    </div>
                  </div>
                  <div className="w-full md:w-[47%]">
                    {section.image && (
                      <Image
                        src={section.image}
                        alt=""
                        className={`w-full h-fit  ${
                          inView
                            ? "md:animate-translateRightImage rounded-xl md:rounded-none md:rounded-s-3xl"
                            : "rounded-xl md:opacity-0"
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div> */}


          {/* <CarouselContent section={false} /> */}
          {/* Cutting Edge */}
          {/* <CuttingEdge
            scrollRef={scrollRef}
            heading={"Courses we Offered"}
            departments={departments}
            journeyHeading={"Your Journey at Tula’s Institute"}
            journey={journey}
            journeyQuote={journeyQuote}
          /> */}

          {/* Why Choose Tulas */}
          {/* <WhyChoose /> */}
          {/* At a glance */}
          {/* <AtGlance /> */}
          {/* <CampusLife /> */}
          {/*Faculty */}
          {/* <div className="pt-8 md:pt-[4%] px-4 md:px-6 flex flex-col items-center justify-center w-full">
            <h8
              style={{
                textAlign: "center",
              }}
              className="text-[#007A83] px-4 text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold"
            >
              Our Professors
            </h8>
            <h4
              style={{
                textAlign: "center",
              }}
              className="px-8 w-full my-4 md:my-8 font-[TTChocolates] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]"
            >
              With every lesson, professors are shaping minds and paving the way
              for future innovations.
            </h4>
          </div>
          <div className="pb-8 md:pb-[4%] px-4 w-full">
            <FacultyDataLandingPage facultyData={facultyDataCSE} />
          </div> */}
          {/* Accreditations */}
          {/* <Accreditations /> */}
          {/* Placement */}
          {/* <div className="pb-8 md:pb-[3%]">
            <PlacementProgram features={features} />
          </div> */}
          {/* <Placement scrollRef={scrollRef} />
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
          )} */}
        </div>
      </body>
    </>
  );
};

export default page;
