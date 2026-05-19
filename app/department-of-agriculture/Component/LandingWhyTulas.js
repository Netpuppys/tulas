"use client";

import Image from "next/image";
import { IoCheckmark, IoCheckmarkSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import CarouselLanding from "./CarouselLandingPage";

// images
import Banner1 from "../../../public/landingPage/landingwhy-desktop.jpg";
import Banner2 from "../../../public/landingPage/whytulas1.jpg";
import Banner3 from "../../../public/landingPage/whytulas2.png";

import Bannermd1 from "../../../public/landingPage/1md.jpg";
import Bannermd2 from "../../../public/landingPage/2md.jpg";
import Bannermd3 from "../../../public/landingPage/4md.jpg";
import Bannermd4 from "../../../public/landingPage/6md.jpg";
import Bannermd5 from "../../../public/landingPage/9md.jpg";

export default function LandingWhyTulas() {

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
    <section className="w-full py-6 bg-white">

      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-4xl md:max-w-6xl px-5 mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[clamp(36px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-extrabold">Why</span>{" "}
          <span className="text-gray-800 font-extrabold">Tulas M.Sc Agronomy ?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-center mb-10">
          M.Sc Agronomy from Tulas University combines scientific knowledge with field-based learning, research, and modern agricultural practices to prepare students for the future of farming. With a focus on sustainability and innovation, the program enables graduates to enhance crop productivity, manage resources efficiently, and drive impact in the agricultural sector.
        </p>

        {/* Check Points */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">

  <div className="flex items-center gap-3 text-2xl font-medium text-black">
    <IoCheckmarkSharp className="text-2xl text-orange-500" />
    <span className="text-orange-500 font-bold">350+</span> Global Recruiters
  </div>
  
  <div className="flex items-center gap-3 text-2xl font-medium text-black">
    <IoCheckmarkSharp className="text-2xl text-orange-500" />
    <span className="text-orange-500 font-bold">Industry</span> Collaboration
  </div>

  <div className="flex items-center gap-3 text-2xl font-medium text-black">
    <IoCheckmarkSharp className="text-2xl text-orange-500" />
    <span className="text-orange-500 font-bold">100+</span> Alumni in Govt Sector
  </div>

  <div className="flex items-center gap-3 text-2xl font-medium text-black">
    <IoCheckmarkSharp className="text-2xl text-orange-500" />
    <span className="text-orange-500 font-bold">100%</span> Placement Support
  </div>

</div>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-full rounded-[15px] md:rounded-[0px] overflow-hidden">

        {/* Mobile Image */}
        {/* <Image
          src="/landingPage/landingwhy.jpg"
          alt="Tula's MBA Building"
          width={800}
          height={600}
          className="w-full h-auto object-cover md:hidden"
          priority
        /> */}

        {/* Desktop Image */}
        {/* <Image
          src="/landingPage/landingwhy-desktop-cropped.jpg"
          alt="Tula's MBA Building"
          width={1920}
          height={900}
          className="w-full h-auto object-cover hidden md:block"
          priority
        /> */}

                  {/* carousel */}
        <div className="hidden md:block pt-[34px] md:pt-[90px]">
          <CarouselLanding bannerImages={bannerImagesDesktop} scrollButton={true} />
        </div>
        <div className="block md:hidden pt-[64px] md:pt-[80px]">
          <CarouselLanding bannerImages={bannerImagesMobile} scrollButton={true} />
        </div>  
         {/* carousel */}

      </div>

      {/* BUTTON CONTAINER */}
      <div className="w-full max-w-4xl md:max-w-6xl px-5 mx-auto">

        {/* Enroll Button */}
        <div className="flex justify-center mt-10">
          <button onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            } 
    className="flex items-center gap-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-2 rounded-full shadow-lg text-lg">

            ENROLL NOW

            <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
              <IoArrowForward />
            </span>

          </button>
        </div>

      </div>

    </section>
  );
}