"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../../public/research/r-and-cell/journal/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";

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
          Uttarakhand | Tulas University
        </title>
        <meta
          name="description"
          content="Explore the journal publications from Tulas University faculty and students, showcasing cutting-edge research and academic contributions across various disciplines."
        />
      </head>
      <body>
        {/* <Navbar /> */}
        <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                Journal <span className="text-[#f97316]">Publications</span>
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
            <NewFooter/>
          </div>
        </div>
      </body>
    </>
  );
}

export default RAndDFunded;
