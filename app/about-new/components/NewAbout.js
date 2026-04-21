"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/component/Navbar/Navbar";
const Footer = dynamic(() => import("@/component/Footer"), { ssr: false });
const Video = dynamic(() => import("../../Component/Video"), { ssr: false });
const Virtual = dynamic(() => import("../../Component/Virtual"), { ssr: false });
const VirtualTour = dynamic(() => import("../../Component/VirtualTour"), {
  ssr: false,
});
const MegaMenu = dynamic(() => import("@/component/Navbar/MegaMenu"), {
  ssr: false,
});
const Courses = dynamic(() => import("../../Component/Courses"), { ssr: false });
const CampusLife = dynamic(() => import("../../Component/CampusLife"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../../Component/Testimonials"), {
  ssr: false,
});
const Accreditation = dynamic(() => import("../../Component/Accreditation"), {
  ssr: false,
});
const AwardsCrousel = dynamic(() => import("../../Component/AwardsCrousel"), {
  ssr: false,
});
const LifeAtTulas = dynamic(() => import("../../Component/LifeAtTulas"), {
  ssr: false,
});
const MeetOurManagement = dynamic(
  () => import("../../Component/MeetOurManagement"),
  { ssr: false }
);
const Famous = dynamic(() => import("../../Component/Famous"), { ssr: false });
const Placement = dynamic(() => import("../../Component/Placement"), {
  ssr: false,
});
const AccreditationLogo = dynamic(
  () => import("../../Component/AccreditationLogo"),
  { ssr: false }
);

const EventsAndActivites = dynamic(
  () => import("../../Component/EventsAndActivites"),
  { ssr: false }
);
const BannerHome = dynamic(() => import("../../Component/BannerHome"), {
  ssr: false,
});
const StatsAndNews = dynamic(() => import("../../Component/LatestAction"), {
  ssr: false,
});
const CoursesNew = dynamic(() => import("../../Component/CoursesNew"), {
  ssr: false,
});
const AboutTulasForm = dynamic(() => import("../../Component/AboutTulasForm"), {
  ssr: false,
});
import AbhishekPandy from "../../../public/graduate-school-of-business/bba/AbhishekPandy.png";
import AdilAhmed from "../../../public/graduate-school-of-business/bba/AdilAhmed.png";
import AdityaPandey from "../../../public/graduate-school-of-business/bba/AdityaPandey.png";
import JasmineBatham from "../../../public/graduate-school-of-business/bba/JasmineBatham.png";
import GautamSinghChauhan from "../../../public/graduate-school-of-business/bba/GautamSinghChauhan.png";
import KumariPriya from "../../../public/graduate-school-of-business/bba/KumariPriya.png";
import DivyaShankar from "../../../public/graduate-school-of-business/bba/DivyaShankar.png";
import NainseeSingh from "../../../public/graduate-school-of-business/bba/NainseeSingh.png";
import PriyankaDhiman from "../../../public/graduate-school-of-business/bba/PriyankaDhiman.png";
import RahulBauri from "../../../public/graduate-school-of-business/bba/RahulBauri.png";
import RajniMondi from "../../../public/graduate-school-of-business/bba/RajniMondi.png";
import ShambhaviRajChauhan from "../../../public/graduate-school-of-business/bba/ShambhaviRajChauhan.png";
import RomaKumari from "../../../public/graduate-school-of-business/bba/RomaKumari.png";
import SrishtiGupta from "../../../public/graduate-school-of-business/bba/SrishtiGupta.png";
import SushantTrivedi from "../../../public/graduate-school-of-business/bba/SushantTrivedi.png";
import UjjwalPratik from "../../../public/graduate-school-of-business/bba/UjjwalPratik.png";
import rishitaPatel from "../../../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../../../public/courses/bcom/santosiPanwar.png";
import anshikaPundir from "../../../public/courses/bca/anshikaPundir.png";
import ashutosh from "../../../public/courses/bca/ashutosh.png";
import gauravSrivastava from "../../../public/courses/bca/gauravSrivastava.png";
import prathamNautiyal from "../../../public/courses/bca/prathamNautiyal.png";
import rohitKotnala from "../../../public/courses/bca/rohitKotnala.png";
import saurabhRawat from "../../../public/courses/bca/saurabhRawat.png";
import desktopbanner1 from "../../../public/Homepage/BannerHome/newbanner.jpg";
import mobilebanner1 from "../../../public/Homepage/BannerHome/newbannermobile.jpg";
import desktopbanner2 from "../../../public/Homepage/BannerHome/newbanner1.jpg";
import mobilebanner2 from "../../../public/Homepage/BannerHome/newbannermobile1.jpg";
import desktopbanner3 from "../../../public/Homepage/BannerHome/newbanner2.jpg";
import mobilebanner3 from "../../../public/Homepage/BannerHome/newbannermobile2.jpg";

import { ThreeDots } from "react-loader-spinner";
import LandingAccredition from "../../graduate-school-of-business/Component/LandingAccredition";
import LandingAcademicNotifications from "../../newhome-components/LandingAcademicNotifications";
import HomeBusinessSection from "../../newhome-components/HomeBusinessSchool";
import HomeWhyTulas from "../../newhome-components/HomeWhyTulas";
import HomeAlumniSuccessStories from "../../newhome-components/HomeAlumniSuccessStories";
import HomeProgramsSection from "../../newhome-components/HomeProgramsSection";
import HomeGlobalHiringPartners from "../../newhome-components/HomeGlobalHiringPartners";
import HomeEligibilitySection from "../../newhome-components/HomeEligibilitySection";
import HomeInternshipSection from "../../newhome-components/HomeInternshipSection";
import HomeVirtual from "../../newhome-components/HomeVirtual";
import HomeHighlights from "../../newhome-components/HomeHighlights";
import HomeLifeTulas from "../../newhome-components/HomeLifeTulas";
import HomeMainBanner from "../../newhome-components/HomeMainBanner";
import HomeFormBanner from "../../newhome-components/HomeFormBanner";
import HomePerks from "../../newhome-components/HomePerks";
import HomeStatsAndNews from "../../newhome-components/HomeStatsAndNews";
import HomeCelebrities from "../../newhome-components/HomeCelebrities";
import NewNavbar from "@/component/Navbar/NewNavbar";
import HomeAwards from "../../newhome-components/HomeAwards";
import NewFooter from "@/component/NewFooter";
import AboutWhy from "./AboutWhy";
import AboutWhyChoose from "./AboutWhyChoose";
// import MegaMenu from "@/component/Navbar/MegaMenu";

export default function NewAbout() {
  const parentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

    const handleScrollArrow = () => {
    window.scrollTo({
      top: 1400, // Scroll to the top of the page
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
      image2: JasmineBatham,
    },
    {
      image: GautamSinghChauhan,
      image2: KumariPriya,
    },
    {
      image: DivyaShankar,
      image2: NainseeSingh,
    },
    {
      image: PriyankaDhiman,
      image2: RahulBauri,
    },
    {
      image: RajniMondi,
      image2: ShambhaviRajChauhan,
    },
    {
      image: RomaKumari,
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

  const bannerImagesDesktop = [
    desktopbanner1,
    desktopbanner2,
    desktopbanner3,
  ];
  const bannerImagesMobile = [
    mobilebanner1,
    mobilebanner2,
    mobilebanner3,
  ];
  const name = [
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
    "Ranked 86th by Times of B School in India.",
    "Ranked Amongst Top 50 Private College in India.",
    "NAAC A+ Highest Ranking in Uttrakhand.",
    "65th best Engineering Colleges in India by Outlook.",
  ];
  return (
    <>
      {isLoading && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 z-[9999999] hidden md:flex justify-center items-center">
          <div className="">
            <ThreeDots color="#FFF" />
          </div>
        </div>
      )}
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        {/* <NewNavbar fullBanner={true}  handleScrollArrow={handleScrollArrow} /> */}
        {/* <MegaMenu/> */}
        {/* Desktop Navbar */}
<div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true} handleScrollArrow={handleScrollArrow} />
</div>
        <div className="hidden md:block">
          <HomeMainBanner bannerImages={bannerImagesDesktop} scrollButton={true} />
        </div>
        <div className="block md:hidden">
          <HomeMainBanner bannerImages={bannerImagesMobile} scrollButton={true} />
        </div>

        {/* <div className="relative overflow-hidden ">
          <marquee
            direction="left"
            scrollamount="10"
            className=" w-[100%] bg-orange-500"
          >
            <div className="w-fit py-2 md:py-3 flex gap-4 md:gap-[2%] whitespace-nowrap">
              {name.map((item, index) => (
                <div key={index} className="relative w-fit mx-auto">
                  <h2 className="text-[clamp(10px,3.5vw,50px)] text-center capitalize md:text-[clamp(10px,1.2vw,50px)] font-[TTChocolates] leading-tight font-extrabold">
                    {item}
                  </h2>
                </div>
              ))} 
            </div>
          </marquee>
        </div> */}

        {/* <LandingAcademicNotifications/> */}

        {/* <HomeWhyTulas/> */}

        <AboutWhy/>
 
        <HomeBusinessSection/>

        <AboutWhyChoose/>

        <HomeGlobalHiringPartners/>

        <HomeEligibilitySection/>

        <HomeAlumniSuccessStories/>

        <HomeInternshipSection/>

        <HomeVirtual/>
        <VirtualTour />

        <HomeHighlights/>

        <HomeStatsAndNews/>

        <HomeLifeTulas/>

        <HomeAwards/>

        <LandingAccredition/>

        {/* <Footer /> */}
        <NewFooter/>
      </div>
    </>
  );
}
