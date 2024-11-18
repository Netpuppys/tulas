"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import AnnualReport2022 from "../../public/FooterPDf/AnnualReport2022.pdf";
import AnnualReport2021 from "../../public/FooterPDf/AnnualReport2021.pdf";
import AnnualReport2020 from "../../public/FooterPDf/AnnualReport2020.pdf";

function AnnualReport() {
  const button = [
    { title: "Annual Report 2022-2023", linkTo: AnnualReport2022 },
    { title: "Annual Report 2021-2022", linkTo: AnnualReport2021 },
    { title: "Annual Report 2020-2021", linkTo: AnnualReport2020 },
  ];
  return (
    <>
      <head>
        <title>
          Annual Report | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Annual Report of Tula's Institute, the best engineering college in Dehradun, Uttarakhand. Gain insights into our academic achievements, research initiatives, student accomplishments, and community impact. Discover our commitment to excellence in engineering education."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              Annual <span className="text-[#005D64]">Report</span>
            </>
          }
          description={<></>}
          belowTitle={""}
          belowPara={"Please Click on Annual Report for viewing  Detail Report"}
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
              onClick={() => (window.location.href = `${button.linkTo}`)}
              className="py-2 w-[210px] md:w-[400px] rounded-full bg-white text-[clamp(15px,1.2vw,50px)] text-[#007A83]"
            >
              {button.title}
            </button>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AnnualReport;
