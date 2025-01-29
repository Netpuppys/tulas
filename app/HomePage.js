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

const bannerText = (
  <>
    <span className=" font-[TTChocolatesBold] font-semibold">
      Tula's Institute
    </span>{" "}
    was established in 2006, under the aegis of{" "}
    <span className=" font-[TTChocolatesBold] font-semibold">
      Rishabh Educational Trust
    </span>
    , Dehradun with the vision of offering excellent academics along with
    fostering the professional and personal personas of every student of the
    Institution. Tula's is dedicated to serve the communities by recognizing the
    diverse needs of individuals.
  </>
);

export default function HomePage() {
  const parentRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        <Navbar setState={setIsChecked} fullBanner={true} />
        <BannerHome isChecked={isChecked} />
        {/* <div className="min-h-fit py-16 h-fit md:min-h-[21vh] w-full overflow-hidden flex flex-col justify-center max-w-full md:max-w-[70%] px-8 mx-auto">
          <h3 className="text-2xl uppercase font-[CarotSlab] font-medium md:text-4xl text-[#760135] text-center mb-6">
            Tula's Institute
          </h3>
          <h4 className="leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-center font-[TTChocolates] text-[#404040]">
            {bannerText}
          </h4>
        </div> */}
        <AboutTulas />
        <LifeAtTulas />
        <Courses parentRef={parentRef} />
        {/* <WhyTulasScroll parentRef={parentRef} /> */}
        <Accreditation />
        <Placement />
        <CampusLife />
        <Virtual />
        <VirtualTour />
        {/* <Famous /> */}
        <Video />
        <MeetOurManagement parentRef={parentRef} />
        <Testimonials />
        {/* <RankBanner /> */}
        <AwardsCrousel />
        {/* <Awards /> */}
        <Footer />
      </div>
    </>
  );
}
