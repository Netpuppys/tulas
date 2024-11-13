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

const bannerText = (
  <>
    <span className="text-[#007A83] font-[TTChocolatesBold] font-semibold">
      Tula's Institute
    </span>{" "}
    was established in 2006, under the aegis of{" "}
    <span className="text-[#007A83] font-[TTChocolatesBold] font-semibold">
      Rishabh Educational Trust, Dehradun
    </span>{" "}
    with the vision of offering excellent academics along with fostering the
    professional and personal personas of every student of the institute. Tulas
    Institute is dedicated to serve the communities by recognizing the diverse
    needs of individuals.
  </>
);

export default function HomePage() {
  const parentRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {/* <script src="https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/tulas/ee-form-widget/form-14/widget.js" /> */}
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        <Navbar setState={setIsChecked} />
        <BannerHome isChecked={isChecked} />
        <div className="w-full py-16 flex items-center justify-center px-10">
          <p className="text-[#404040] text-[clamp(15px,4.5vw,30px)] text-justify md:text-xl font-[TTChocolates] max-w-[40rem] text-wrap">
            {bannerText}
          </p>
        </div>
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
    </>
  );
}
