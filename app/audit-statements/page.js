"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/research/r-and-cell/background.png";
import AuditStatement2022 from "../../public/FooterPDf/AuditStatement2022.pdf";
import AuditStatement2021 from "../../public/FooterPDf/AuditStatement2021.pdf";
import AuditStatement2020 from "../../public/FooterPDf/AuditStatement2020.pdf";

function AuditStatement() {
  const button = [
    { title: "Audited Statement 2022-2023", linkTo: AuditStatement2022 },
    { title: "Audited Statement 2021-2022", linkTo: AuditStatement2021 },
    { title: "Audited Statement 2020-2021", linkTo: AuditStatement2020 },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            Audited <span className="text-[#005D64]">Statement</span>
          </>
        }
        description={<></>}
        belowTitle={""}
        belowPara={
          "Please Click on Audited Statement for viewing  Detail Report"
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
            onClick={() => (window.location.href = `${button.linkTo}`)}
            className="py-2 w-[210px] md:w-[400px] rounded-full bg-white text-[clamp(15px,1.2vw,50px)] text-[#007A83]"
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

export default AuditStatement;
