"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/journal/background.png";
import { useInView } from "react-intersection-observer";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import TableComponent from "./data/tableData";
import patent1 from "../../../../public/research/patents/patent1.jpg";
import patent2 from "../../../../public/research/patents/patent2.png";
import patent3 from "../../../../public/research/patents/patent3.png";
import patent4 from "../../../../public/research/patents/patent4.png";
import patent5 from "../../../../public/research/patents/patent5.png";
import patent6 from "../../../../public/research/patents/patent6.png";
import patent7 from "../../../../public/research/patents/patent7.png";
import patent8 from "../../../../public/research/patents/patent8.png";
import patent9 from "../../../../public/research/patents/patent9.png";
import patent10 from "../../../../public/research/patents/patent10.jpg";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import SlidingCarousel from "./components/SlidingCarousel";

function Patent() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const patentImages = [
    patent1,
    patent2,
    patent3,
    patent4,
    patent5,
    patent6,
    patent7,
    patent8,
    patent9,
    patent10,
  ];

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />
      <Banner
        image={BannerImg}
        title={<>Patents</>}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            A patent is an exclusive right awarded for an invention, which is a
            product or a technique that offers an alternative technological
            solution to a problem or provides a unique way of doing something in
            general. Technical information concerning the innovation must be
            submitted to the patent authority in a patent application format in
            order to get a patent. Patents aren’t simply abstract ideas; they
            are also extremely useful in everyday life. Patents support the
            development of breakthroughs and new technology in all fields by
            rewarding ideas. The details of Patents awarded to our institute are
            listed below.
          </>
        }
      />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="p-8 md:p-32">
        <div className="h-[90vh] px-5 overflow-auto w-[100vw] md:w-auto flex items-start justify-start">
          <TableComponent />
        </div>
      </div>
      <div className="px-8md:px-32 pb-8  md:pb-32 w-full flex flex-col items-center justify-center">
        <h3 className="font-[CarotSlab] text-[clamp(25px,3vw,75px)]">
          ALL PATENTS
        </h3>
      </div>
      <div className="w-full">
        <SlidingCarousel
          items={patentImages}
        />
      </div>
      <div className="w-full h-fit z-50">
        <Footer color={true} />
      </div>
    </div>
  );
}

export default Patent;
