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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setShowLoader(false);
    };

    if (document.readyState === "complete") {
      // Page has already loaded
      handlePageLoad();
    } else {
      // Wait for the load event
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <>
      <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
        {showLoader && (
          <div className="w-screen min-h-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9999] bg-white bg-opacity-80">
            <Image src={loader} alt="" className="w-40" />
          </div>
        )}

        <Navbar setState={setIsChecked} />
        <BannerHome isChecked={isChecked} />
        <div className="min-h-fit py-16 h-fit md:min-h-[21vh] w-full overflow-hidden flex flex-col justify-center max-w-full md:max-w-[70%] px-8 mx-auto">
          <h3 className="text-2xl uppercase font-[CarotSlab] font-medium md:text-4xl text-[#760135] text-center mb-6">
            Tula's Institute
          </h3>
          <h4 className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] text-center font-[TTChocolates] text-[#404040]">
            {bannerText}
          </h4>
        </div>
        <AboutTulas />
        <Courses parentRef={parentRef} />
        <WhyTulasScroll parentRef={parentRef} />
        <Accreditation />
        <Virtual />
        <VirtualTour />
        <Video />
        <CampusLife />
        <Testimonials />
        {/* <RankBanner /> */}
        <div className="pb-[6vh] relative">
          <AwardsCrousel />
        </div>
        {/* <Awards /> */}
        <div className="-mt-[6vh]">
          <Footer />
        </div>
      </div>
    </>
  );
}
