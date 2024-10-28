"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/research/r-and-cell/background.png";
import BestPractices from "../../public/FooterPDf/BestPractices.pdf";

function IQAC() {
  const button = [
    { title: "About", linkTo: "/about-iqac/" },
    { title: "Vision & Mission", linkTo: "/iqac-vision-mission/" },
    { title: "Structure", linkTo: "/iqac-structure/" },
    { title: "Minutes Of Meeting", linkTo: "/minutes-of-meeting/" },
    { title: "Annual Report", linkTo: "/annual-report/" },
    { title: "Audited Statements", linkTo: "/audit-statements/" },
    { title: "Feedback", linkTo: "/feedback/" },
    { title: "Best Practices", linkTo: BestPractices },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={<>IQAC</>}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            Tula’s Institute is dedicated to advancing Research and Development
            initiatives, driven by a clear vision and mission to explore and
            advance research in cutting-edge technologies and various fields of
            Engineering. To foster an environment conducive to such pursuits,
            the Institute has established the Centre for Innovation, Research,
            and Entrepreneurship (CIRE).
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
      <div className="py-8 md:py-20 w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
        {button.map((button, index) => (
          <button
            key={index}
            onClick={() => (window.location.href = `${button.linkTo || "#"}`)}
            className="py-2 w-[210px] md:w-[400px] rounded-full bg-white text-[clamp(15px,1.2vw,50px)] text-[#760135]"
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="w-full h-fit z-50">
        <Footer color={true} />
      </div>
    </div>
  );
}

export default IQAC;
