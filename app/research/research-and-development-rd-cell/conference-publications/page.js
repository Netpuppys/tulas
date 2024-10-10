"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndDConference() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            Books,
            <span className="text-[#007A83]">Conference & Book Chapters</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
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
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="p-8 md:p-32">
        <div className="h-[90vh] px-5 overflow-auto w-[100vw] md:w-auto flex flex-col items-start justify-start">
          <TableComponent />
        </div>
      </div>

      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default RAndDConference;
