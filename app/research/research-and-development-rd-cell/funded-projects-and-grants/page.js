"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import TableComponent from "./data/tableData";

function RAndDFunded() {
  return (
    <>
      <head>
        <title>
          Funded Research Projects | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover the funded research projects at Tula's Institute, supporting innovative research and academic excellence in various fields of engineering and technology."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Funded{" "}
                <span className="text-[#007A83]">Projects and Grants</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <>
                Research projects provide opportunities for academic individuals
                to acquire and use their skills in a variety of fields. It will
                be pertinent and graceful if a project gets funded by some
                Govt./Other agency and will certainly meet all the expenditure
                to be met out during the tenure of that project. It also allows
                students to collaborate with their faculty members on research
                projects. AICTE, ISRO, DST, UCOST, SERB and other national and
                international financial bodies offer sponsored initiatives under
                various research schemes to the aspirants.
                <br />
                <br />
                Various projects and research grants awarded to our institute
                are listed below:
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
          <div className="p-8 md:p-32 w-full">
            <div>
              {/* <TableComponent /> */}
              <iframe
                className="h-[90vh] md:px-5 overflow-auto w-full mx-auto md:max-w-[1223px] flex items-start justify-center"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBKPOOfj3CNTfcv7o3fObHitzKNciKJ0ST7pjfLFtqSMhDU5TxQu99iTdZMGOlvUPEUFH6x4TQixAa/pubhtml?gid=0&single=true&widget=true&headers=false"
              />
            </div>
          </div>

          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default RAndDFunded;
