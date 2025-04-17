"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import AboutTulas from "./Component/AboutTulas";
import Video from "./Component/Video";
import Virtual from "./Component/Virtual";
import VirtualTour from "./Component/VirtualTour";
import Footer from "@/component/Footer";
import Courses from "./Component/Courses";
import BannerHome from "@/app/Component/BannerHome";
import CampusLife from "./Component/CampusLife";
import Testimonials from "./Component/Testimonials";
import Accreditation from "./Component/Accreditation";
import AwardsCrousel from "./Component/AwardsCrousel";
import LifeAtTulas from "./Component/LifeAtTulas";
import MeetOurManagement from "./Component/MeetOurManagement";
import Placement from "./Component/Placement";
import Famous from "./Component/Famous";
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
import StatsAndNews from "./Component/LatestAction";
import CoursesNew from "./Component/CoursesNew";
import AccreditationLogo from "./Component/AccreditationLogo";
import EventsAndActivites from "./Component/EventsAndActivites";

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

export default function HomePage() {
  const parentRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 2; // Speed of scrolling
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to start for continuous effect
        }
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  const name = [
    {
      title: "Ranked 86th by Times of B School in India.",
    },
    {
      title: "Ranked Amongst Top 50 Private College in India.",
    },
    {
      title: "NAAC A+ Highest Ranking in Uttrakhand.",
    },
    {
      title: "65th best Engineering Colleges in India by Outlook.",
    },
    {
      title: "Ranked 86th by Times of B School in India.",
    },
    {
      title: "Ranked Amongst Top 50 Private College in India.",
    },
    {
      title: "NAAC A+ Highest Ranking in Uttrakhand.",
    },
    {
      title: "65th best Engineering Colleges in India by Outlook.",
    },
    {
      title: "Ranked 86th by Times of B School in India.",
    },
    {
      title: "Ranked Amongst Top 50 Private College in India.",
    },
    {
      title: "NAAC A+ Highest Ranking in Uttrakhand.",
    },
    {
      title: "65th best Engineering Colleges in India by Outlook.",
    },
  ];
  return (
    <>
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        <Navbar setState={setIsChecked} fullBanner={true} />
        <BannerHome isChecked={isChecked} />
        <div
          ref={scrollContainerRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="w-full py-2 md:py-6 flex gap-4 md:gap-[6%] whitespace-nowrap"
        >
          {name.map((item, index) => (
            <div key={index} className="relative w-fit mx-auto">
              <h2 className="text-[clamp(10px,3.5vw,50px)] text-center md:text-[clamp(10px,1.2vw,50px)] text-black font-[TTChocolates] leading-tight font-extrabold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        {/* <AccreditationLogo /> */}
        <AboutTulas />
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
        <Testimonials />
        <Video />
        <AwardsCrousel />
        <EventsAndActivites />
        <Footer />
      </div>
    </>
  );
}
