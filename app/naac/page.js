"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import AQAR from "../../public/FooterPDf/AQAR.pdf";
import SSR from "../../public/FooterPDf/SSR.pdf";
import IIQA from "../../public/FooterPDf/IIQA.pdf";
import STRATEGIC from "../../public/FooterPDf/STRATEGIC.pdf";

function NAAC() {
  const button = [
    { title: "Strategic Plan", linkTo: STRATEGIC },
    { title: "IIQA", linkTo: IIQA },
    { title: "SSR", linkTo: SSR },
    { title: "AQAR", linkTo: AQAR },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={"NAAC"}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Tula’s Institute is dedicated to advancing Research and Development initiatives, driven by a clear vision and mission to explore and advance research in cutting-edge technologies and various fields of Engineering. To foster an environment conducive to such pursuits, the Institute has established the Centre for Innovation, Research, and Entrepreneurship (CIRE)."
        }
      />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="py-8 md:py-20 w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
        {button.map((button, index) => (
          <button
            key={index}
            onClick={() => (window.location.href = `${button.linkTo || "#"}`)}
            className="py-2 w-[210px] md:w-[400px] rounded-full bg-white text-[clamp(15px,1.2vw,50px)] text-[#007A83]"
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default NAAC;
