"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import TableComponent from "./data/tableData";

function RAndDFunded() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            Funded <span className="text-[#007A83]">Projects and Grants</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            Research projects provide opportunities for academic individuals to
            acquire and use their skills in a variety of fields. It will be
            pertinent and graceful if a project gets funded by some Govt./Other
            agency and will certainly meet all the expenditure to be met out
            during the tenure of that project. It also allows students to
            collaborate with their faculty members on research projects. AICTE,
            ISRO, DST, UCOST, SERB and other national and international
            financial bodies offer sponsored initiatives under various research
            schemes to the aspirants.
            <br />
            <br />
            Various projects and research grants awarded to our institute are
            listed below:
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

      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default RAndDFunded;
