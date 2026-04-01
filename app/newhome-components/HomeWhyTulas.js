"use client";

import Image from "next/image";
import { IoCheckmark, IoCheckmarkSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import CarouselLanding from "./CarouselLandingPage";

// images
import Banner1 from "../../public/landingPage/landingwhy-desktop.jpg";
import Banner2 from "../../public/landingPage/whytulas1.jpg";
import Banner3 from "../../public/landingPage/whytulas2.png";

import Bannermd1 from "../../public/landingPage/1md.jpg";
import Bannermd2 from "../../public/landingPage/2md.jpg";
import Bannermd3 from "../../public/landingPage/4md.jpg";
import Bannermd4 from "../../public/landingPage/6md.jpg";
import Bannermd5 from "../../public/landingPage/9md.jpg";

export default function HomeWhyTulas() {

    const bannerImagesDesktop = [
    Banner1,
    Banner2,
    Banner3,
  ];
  const bannerImagesMobile = [
    Bannermd1,
    Bannermd2,
    Bannermd3,
    Bannermd4,
    Bannermd5,
    // mobilebanner2,
  ];
  return (
    <section className="px-6 py-6 bg-white">


      {/* FULL WIDTH IMAGE */}
      <div className="rounded-[15px] overflow-hidden">

                  {/* carousel */}
        <div className="hidden md:block rounded-[10px]">
          <CarouselLanding bannerImages={bannerImagesDesktop} scrollButton={true} />
        </div>
        <div className="block md:hidden rounded-[10px]">
          <CarouselLanding bannerImages={bannerImagesMobile} scrollButton={true} />
        </div>  
         {/* carousel */}

      </div>

    </section>
  );
}