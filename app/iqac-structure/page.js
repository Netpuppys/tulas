"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.webp";
import background from "../../public/footer/background.png";
import TableComponent from "./data/tableData";

function IAQCStructure() {
  return (
    <>
      <head>
        <title>
          IQAC Structure | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the structure of the Internal Quality Assurance Cell (IQAC) at Tula's Institute, Dehradun. Understand how our organized framework ensures continuous quality enhancement and academic excellence across all departments."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              IQAC <span className="text-[#005D64]">Structure</span>
            </>
          }
          description={<></>}
          belowPara={
            "The Internal Quality Assurance Cell (IQAC) was established in 2014 at Tula’s Institute, Dehradun as an accreditation quality measure. The IQAC has been constituted as per the recommendations of the National Assessment and Accreditation Council (NAAC). The IQAC ensures the effective implementation of quality initiatives through continuous reviews and periodic meetings. The IQAC works towards attaining excellence in all academic and administrative endeavors of the institution."
          }
        />
        {/* <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div> */}
        <div className="pb-8 px-8 md:px-[8%] md:pb-[3%] w-full">
          <div className="h-full overflow-auto w-full">
            <TableComponent />
          </div>
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default IAQCStructure;
