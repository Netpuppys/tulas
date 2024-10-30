"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import TableComponent from "./data/tableData";

function IAQCStructure() {
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            IQAC <span className="text-[#005D64]">Structure</span>
          </>
        }
        description={<></>}
        belowTitle={""}
        belowPara={
          "The Internal Quality Assurance Cell (IQAC) was established in 2014 at Tula’s Institute, Dehradun as an accreditation quality measure. The IQAC has been constituted as per the recommendations of the National Assessment and Accreditation Council (NAAC). The IQAC ensures the effective implementation of quality initiatives through continuous reviews and periodic meetings. The IQAC works towards attaining excellence in all academic and administrative endeavors of the institution."
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
        <div className="h-full px-5 overflow-auto w-full md:w-auto flex flex-col items-start justify-start">
          <TableComponent />
        </div>
      </div>
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default IAQCStructure;
