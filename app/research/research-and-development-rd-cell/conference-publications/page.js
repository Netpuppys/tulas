"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndDConferencePublication() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <head>
        <title>
          Conference Publications | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover the conference publications from Tula's Institute, showcasing cutting-edge research and innovations presented at various academic and industry conferences."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Books, Conference
                <span className="text-[#007A83]"> & Book Chapters</span>
              </>
            }
            description={<></>}
            belowPara={
              <>
                At Tula’s Institute, we recognize the importance of Books, book
                chapters and conference publication as a significant aspect of
                academic learning and research. We encourage our faculty,
                researchers, and students to actively participate in conferences
                relevant to their areas of expertise and share their research
                findings with the wider academic community.
                <br />
                <br />
                List of books, book chapter and Conferences are listed below:
              </>
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
        </div>
      </body>
    </>
  );
}

export default RAndDConferencePublication;
