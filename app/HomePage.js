"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/component/Navbar/Navbar";
import AboutTulas from "./Component/AboutTulas";
import Video from "./Component/Video";
import Virtual from "./Component/Virtual";
import VirtualTour from "./Component/VirtualTour";
import Footer from "@/component/Footer";
import Courses from "./Component/Courses";
import WhyTulasScroll from "./Component/WhyTulasScroll";
import BannerHome from "@/app/Component/BannerHome";
import CampusLife from "./Component/CampusLife";
import Testimonials from "./Component/Testimonials";
import RankBanner from "./Component/RankBanner";
import Awards from "./Component/Awards";
import Accreditation from "./Component/Accreditation";
import AwardsCrousel from "./Component/AwardsCrousel";
import loader from "../public/loading.svg";
import Image from "next/image";
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
const bannerText = (
  <>
    <span className=" font-[TTChocolatesMedium] font-semibold">
      Tula's Institute
    </span>{" "}
    was established in 2006, under the aegis of{" "}
    <span className=" font-[TTChocolatesMedium] font-semibold">
      Rishabh Educational Trust
    </span>
    , Dehradun with the vision of offering excellent academics along with
    fostering the professional and personal personas of every student of the
    Institution. Tula's is dedicated to serve the communities by recognizing the
    diverse needs of individuals.
  </>
);
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

  return (
    <>
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        <Navbar setState={setIsChecked} fullBanner={true} />
        <BannerHome isChecked={isChecked} />
        <AboutTulas />
        <LifeAtTulas />
        <StatsAndNews/>
        <Courses parentRef={parentRef} />
        <Accreditation />
        <Placement features={features} />
        <CampusLife />
        <Virtual />
        <VirtualTour />
        <Famous />
        <Video />
        <MeetOurManagement parentRef={parentRef} />
        <Testimonials />
        <AwardsCrousel />
        <Footer />
      </div>
    </>
  );
}
