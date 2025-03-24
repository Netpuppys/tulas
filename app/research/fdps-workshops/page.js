"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/research/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import { useInView } from "react-intersection-observer";
import TableComponent from "./data/tableData";

function RAndFDPS() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <head>
        <title>
          FDPs & Workshops | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the Faculty Development Programs (FDPs) and workshops at Tula's Institute, a top engineering college in Dehradun. Our programs empower faculty and students with the latest knowledge and skills in technology and education."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                FDPs &<span className="text-[#007A83]">Workshops</span>
              </>
            }
            description={<></>}
            belowPara={
              <>
                The FDP offers a collaborative learning strategy in the form of
                workshops and seminars. Participants are encouraged to gain
                knowledge of curriculum development and academic administration.
                The FDP necessitates a significant amount of effort from
                participants in terms of individual preparation as well as a
                group activity. As faculty members visit the other campuses and
                interact with people from various backgrounds, they gain more
                than simply classroom experiences. Participants are frequently
                given the opportunity to tour industrial sites, attend research
                seminars, special guest lectures, and workshops. Participants
                are strongly encouraged to generate their own cases or research
                projects on their own initiative. The list of the same is given
                below:
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

export default RAndFDPS;
