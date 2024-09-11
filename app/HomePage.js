"use client";

import React, { useRef, useState } from "react";
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

export default function HomePage() {
  const parentRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
      <Navbar setState={setIsChecked} />
      <BannerHome isChecked={isChecked} />
      <AboutTulas />
      <WhyTulasScroll parentRef={parentRef} />
      <Courses parentRef={parentRef} />
      <Virtual />
      <VirtualTour />
      <Video />
      <CampusLife />
      <Testimonials />
      <RankBanner />
      <Footer />
    </div>
  );
}
