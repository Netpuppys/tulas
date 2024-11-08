"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/journal/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndDFunded() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <head>
        <title>
          Journal Publications | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the journal publications from Tula's Institute faculty and students, showcasing cutting-edge research and academic contributions across various disciplines."
        />
      </head>
      <body>
        <div className="flex flex-col items-center overflow-hidden">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                Journal <span className="text-[#007A83]">Publications</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <>
                The faculty member’s research expertise and interests are
                reflected in the form of Research/Review paper/Books/Books
                Chapters publications. Our Institute encourages and incentivises
                its faculty members to publish their research in any form.
                <br />
                <br />
                The list of selected research papers published is given below:
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
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default RAndDFunded;
