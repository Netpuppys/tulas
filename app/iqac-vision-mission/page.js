"use client";
import React from "react";
import DepartmentalVission from "../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../public/courses/bjmc/departmentalMission.png";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Vision from "@/component/Programs/Vision";
import BannerImg from "../../public/infrastructure/library/bannerImg.webp";
import background from "../../public/research/r-and-cell/background.png";
import Footer from "@/component/Footer";

function IQACVision() {
  const sections = [
    {
      title: "Vision",
      description:
        "To ensure quality culture as the prime concern for Tula’s Institute, Dehradun through institutionalizing and internalizing all the initiatives taken with internal and external support.",
      image: DepartmentalVission,
    },
    {
      title: "Mission",
      description: (
        <ol className="ml-5 list-decimal">
          <li>
            To Channelize the efforts and measures of the institute for the
            academic excellence.
          </li>
          <li>
            To act as the driving force for steering the quality to remove
            deficiencies and enhance quality.
          </li>
        </ol>
      ),
      image: DepartmentalMission,
    },
  ];
  return (
    <>
      <head>
        <title>
          IQAC Vision & Mission | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover the vision and mission of the Internal Quality Assurance Cell (IQAC) at Tula's Institute, Dehradun. Learn how our commitment to quality drives academic and institutional excellence, fostering a culture of continuous improvement."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={<>IQAC</>}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            <>
              Tula’s Institute is dedicated to advancing Research and
              Development initiatives, driven by a clear vision and mission to
              explore and advance research in cutting-edge technologies and
              various fields of Engineering. To foster an environment conducive
              to such pursuits, the Institute has established the Centre for
              Innovation, Research, and Entrepreneurship (CIRE).
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
        <Vision sections={sections} />
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default IQACVision;
