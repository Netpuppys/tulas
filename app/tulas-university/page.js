"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/Homepage/campusLife/infrastructure3.webp";
import background from "../../public/footer/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import TUDPR from "../../public/FooterPDf/TU-DPR.pdf";
import TUSTATE from "../../public/FooterPDf/TU-STATE-GOV.pdf";
import TUDC from "../../public/FooterPDf/TU_DETAILS-COURSE.pdf";
import TUUGC from "../../public/FooterPDf/TU-UGC.pdf";
import Link from "next/link";

function TulasUniversity() {
  const button = [
    { title: "State Govt, Act", linkTo: TUSTATE },
    { title: "UGC's Recognition", linkTo: TUUGC },
    { title: "Approvals", linkTo: TUDC },
    { title: "Detailed Project Report", linkTo: TUDPR },
  ];
  return (
    <>
      <head>
        <title>
          Tula's University | Best Engineering College in Dehradun, Uttarakhand
        </title>
        <meta
          name="description"
          content="Explore Tula's University, Dehradun, showcasing our dedication to quality education and academic standards. Learn about our commitment to continuous improvement and excellence in higher education."
        />
      </head>
      <body>
        <Navbar />
              <div className="h-[85vh] md:h-[100vh] w-full relative">
                <Image
                  src={BannerImg}
                  alt=""
                  className="w-full h-full object-cover absolute"
                />
                <div className="bottom-8 px-8 md:bottom-10 z-10 absolute ">
                  <h3 className="font-semibold text-[30px] md:text-[clamp(10px,2.5vw,50px)] text-white z-10 font-[CarotSlab]">
                    Tula's University
                  </h3>
                </div>
              </div>

        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="py-8 md:py-20 w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
          {button.map((button, index) => (
            <Link
              target="_blank"
              key={index}
              href={`${button.linkTo}`}
              className="py-2 w-[210px] text-center md:w-[400px] rounded-full bg-white text-[clamp(10px,1.2vw,50px)] text-[#007A83]"
            >
              {button.title}
            </Link>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default TulasUniversity;
