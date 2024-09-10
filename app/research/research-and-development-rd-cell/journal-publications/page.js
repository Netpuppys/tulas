"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndDFunded() {
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
            Journal <span className="text-[#007A83]">Publications</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            The faculty member’s research expertise and interests are reflected
            in the form of Research/Review paper/Books/Books Chapters
            publications. Our Institute encourages and incentivises its faculty
            members to publish their research in any form.
            <br />
            <br />
            The list of selected research papers published is given below:
          </>
        }
      />
      <div className="w-full relative overflow-hidden -mb-[6vh]">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="p-32 pb-50">
        <div className="h-[90vh] px-5 overflow-y-scroll">
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
