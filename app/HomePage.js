"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/component/Navbar/Navbar";
const Footer = dynamic(() => import("@/component/Footer"), { ssr: false });
const Video = dynamic(() => import("./Component/Video"), { ssr: false });
const Virtual = dynamic(() => import("./Component/Virtual"), { ssr: false });
const VirtualTour = dynamic(() => import("./Component/VirtualTour"), {
  ssr: false,
});
const Courses = dynamic(() => import("./Component/Courses"), { ssr: false });
const CampusLife = dynamic(() => import("./Component/CampusLife"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("./Component/Testimonials"), {
  ssr: false,
});
const Accreditation = dynamic(() => import("./Component/Accreditation"), {
  ssr: false,
});
const AwardsCrousel = dynamic(() => import("./Component/AwardsCrousel"), {
  ssr: false,
});
const LifeAtTulas = dynamic(() => import("./Component/LifeAtTulas"), {
  ssr: false,
});
const MeetOurManagement = dynamic(
  () => import("./Component/MeetOurManagement"),
  { ssr: false }
);
const Famous = dynamic(() => import("./Component/Famous"), { ssr: false });
const Placement = dynamic(() => import("./Component/Placement"), {
  ssr: false,
});
const AccreditationLogo = dynamic(
  () => import("./Component/AccreditationLogo"),
  { ssr: false }
);

const EventsAndActivites = dynamic(
  () => import("./Component/EventsAndActivites"),
  { ssr: false }
);
const BannerHome = dynamic(() => import("./Component/BannerHome"), {
  ssr: false,
});
const StatsAndNews = dynamic(() => import("./Component/LatestAction"), {
  ssr: false,
});
const CoursesNew = dynamic(() => import("./Component/CoursesNew"), {
  ssr: false,
});
const AboutTulasForm = dynamic(() => import("./Component/AboutTulasForm"), {
  ssr: false,
});
import AbhishekPandy from "../public/graduate-school-of-business/bba/AbhishekPandy.png";
import AdilAhmed from "../public/graduate-school-of-business/bba/AdilAhmed.png";
import AdityaPandey from "../public/graduate-school-of-business/bba/AdityaPandey.png";
import JasmineBatham from "../public/graduate-school-of-business/bba/JasmineBatham.png";
import GautamSinghChauhan from "../public/graduate-school-of-business/bba/GautamSinghChauhan.png";
import KumariPriya from "../public/graduate-school-of-business/bba/KumariPriya.png";
import DivyaShankar from "../public/graduate-school-of-business/bba/DivyaShankar.png";
import NainseeSingh from "../public/graduate-school-of-business/bba/NainseeSingh.png";
import PriyankaDhiman from "../public/graduate-school-of-business/bba/PriyankaDhiman.png";
import RahulBauri from "../public/graduate-school-of-business/bba/RahulBauri.png";
import RajniMondi from "../public/graduate-school-of-business/bba/RajniMondi.png";
import ShambhaviRajChauhan from "../public/graduate-school-of-business/bba/ShambhaviRajChauhan.png";
import RomaKumari from "../public/graduate-school-of-business/bba/RomaKumari.png";
import SrishtiGupta from "../public/graduate-school-of-business/bba/SrishtiGupta.png";
import SushantTrivedi from "../public/graduate-school-of-business/bba/SushantTrivedi.png";
import UjjwalPratik from "../public/graduate-school-of-business/bba/UjjwalPratik.png";
import rishitaPatel from "../public/courses/bcom/rishitaPatel.png";
import santosiPanwar from "../public/courses/bcom/santosiPanwar.png";
import anshikaPundir from "../public/courses/bca/anshikaPundir.png";
import ashutosh from "../public/courses/bca/ashutosh.png";
import gauravSrivastava from "../public/courses/bca/gauravSrivastava.png";
import prathamNautiyal from "../public/courses/bca/prathamNautiyal.png";
import rohitKotnala from "../public/courses/bca/rohitKotnala.png";
import saurabhRawat from "../public/courses/bca/saurabhRawat.png";
import SanskritiBannerDesktop from "../public/Homepage/BannerHome/SanskritiBannerDesktop.webp";
import RankedBannerDesktop from "../public/Homepage/BannerHome/RankedBannerDesktop.webp";
import MahakumbhBannerDesktop from "../public/Homepage/BannerHome/MahakumbhBannerDesktop.webp";
import PlacementBannerDesktop from "../public/Homepage/BannerHome/PlacementBannerDesktop.webp";
import RankedBannerMobile from "../public/Homepage/BannerHome/RankedBannerMobile.webp";
import SanskritiBannerMobile from "../public/Homepage/BannerHome/SanskritiBannerMobile.webp";
import MahakumbhBannerMobile from "../public/Homepage/BannerHome/MahakumbhBannerMobile.webp";
import PlacementBannerMobile from "../public/Homepage/BannerHome/PlacementBannerMobile.webp";
import Aictedeskstop from "../public/Homepage/BannerHome/Aictedeskstop.jpg";
import Aictemobile from "../public/Homepage/BannerHome/Aictemobile.jpg";
import desktopbanner1 from "../public/Homepage/BannerHome/desktopbanner1.jpg";
import mobilebanner1 from "../public/Homepage/BannerHome/mobilebanner1.jpg";
import desktopbanner2 from "../public/Homepage/BannerHome/desktopbanner2.jpg";
import mobilebanner2 from "../public/Homepage/BannerHome/mobilebanner2.jpg";

import desktopbanner3 from "../public/Homepage/BannerHome/filmfestival.webp";
import mobilebanner3 from "../public/Homepage/BannerHome/filmfestivalmobile.webp";

import { ThreeDots } from "react-loader-spinner";

export default function HomePage() {
  const parentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

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
    desktopbanner3,
    SanskritiBannerDesktop,
    RankedBannerDesktop,
    MahakumbhBannerDesktop,
    PlacementBannerDesktop,
    Aictedeskstop,
    desktopbanner1,
    // desktopbanner2,
  ];
  const bannerImagesMobile = [
    mobilebanner3,
    RankedBannerMobile,
    SanskritiBannerMobile,
    MahakumbhBannerMobile,
    PlacementBannerMobile,
    Aictemobile,
    mobilebanner1,
    // mobilebanner2,
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
        <Navbar fullBanner={true} />
        <div className="hidden md:block">
          <BannerHome bannerImages={bannerImagesDesktop} scrollButton={true} />
        </div>
        <div className="block md:hidden">
          <BannerHome bannerImages={bannerImagesMobile} scrollButton={true} />
        </div>

        <div className="relative overflow-hidden ">
          {/* Blurred sides */}
          <div className="pointer-events-none absolute top-0 left-0 w-[10%] h-full z-10  bg-gradient-to-r from-[#007A83] to-transparent" />
          {/* Scrolling text */}
          <marquee
            direction="left"
            scrollamount="10"
            className="ml-[7%] w-[93%]"
          >
            <div className="w-fit py-2 md:py-6 flex gap-4 md:gap-[2%] whitespace-nowrap">
              {name.map((item, index) => (
                <div key={index} className="relative w-fit mx-auto">
                  <h2 className="text-[clamp(10px,3.5vw,50px)] text-center md:text-[clamp(10px,1.2vw,50px)] bg-gradient-to-r from-[#E69706] via-[#760135] to-[#007A83] text-transparent bg-clip-text font-[TTChocolates] leading-tight font-extrabold">
                    {item}
                  </h2>
                </div>
              ))} 
            </div>
          </marquee>
        </div>
        <AccreditationLogo />
        <AboutTulasForm />
        <Accreditation />
        <Placement features={features} />
        <StatsAndNews />
        <Courses parentRef={parentRef} />
        <CoursesNew />
        <Famous />
        <LifeAtTulas />
        <CampusLife />
        <Virtual />
        <VirtualTour />
        <MeetOurManagement parentRef={parentRef} />
        <AwardsCrousel />
        <EventsAndActivites />
        {/*
        <Testimonials />
        <Video />
        */}
        <Footer />
      </div>
    </>
  );
}
