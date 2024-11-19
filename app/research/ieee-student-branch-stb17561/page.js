"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/r-and-cell/journal/background.png";
import TableComponent from "./data/tableData";

function IICEvents() {
  return (
    <>
      <head>
        <title>
          IEEE Student Branch (STB17561) | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover the IEEE Student Branch at Tula's Institute, a platform for innovation and technological excellence. The branch organizes workshops, talks, and events to bridge the gap between academia and industry, fostering skill development and networking opportunities for students."
        />
      </head>
      <body>
        <div className="flex flex-col items-center overflow-hidden">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                IEEE Student{" "}
                <span className="text-[#007A83]">Branch (STB17561)</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <>
                IEEE is the world’s largest professional association advancing
                innovation and technological excellence for the benefit of
                humanity. IEEE-Tula's Student Branch organizes talks, tutorials,
                hands-on workshops, industrial visits and distinguishes lectures
                with an intention to reach out to students, faculties and
                industry professionals. The programs are an exercise in life
                long learning and are offered for the continuing education and
                skill upgradation of professionals. IEEE-Tula's Student Branch
                aims to create an awareness among the students community about
                the recent advancements and to make them aware of the industry
                standards and expectations; thereby bridging the gap between
                academia and industry. To provide a platform for networking with
                industry experts and to simulate critical and logical thinking
                amongst the students.
                <br />
                <br />
                Tula’s IEEE SB consist of various student bodies some of which
                are IEEE WIE Affinity Group, IEEE Computer Society, IEEE PES,
                IEEE Sensors Council etc. To know more visit:
                <br />
                <a href="https://edu.ieee.org/in-tiemc/">
                  https://edu.ieee.org/in-tiemc/
                </a>
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

export default IICEvents;
