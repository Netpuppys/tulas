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

function IICEvents() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <head>
        <title>
          IIC Events | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover the exciting events organized by the Institute Innovation Council (IIC) at Tula's Institute. Engage in workshops, seminars, and networking opportunities that foster innovation, research, and entrepreneurship among students."
        />
      </head>
      <body>
        <div className="flex flex-col items-center overflow-hidden">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                Tula's Institute's Innovation{" "}
                <span className="text-[#007A83]">
                  Council (Tula's-IIC) Events
                </span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <>
                In 2018, the Ministry of Education (Government of India)
                launched the Institute’s Innovation Council (IIC) programme in
                collaboration with AICTE for Higher Education Institutions
                (HEIs) to encourage the creative energy of our student
                population as well as to systematically foster the culture of
                innovation and start-up/entrepreneurial ecosystem in educational
                institutions.
                <br />
                <br />
                To enhance the innovation and start-up/entrepreneurial ecosystem
                with in the institute. Tula’s Institute’s Innovation Council
                (Tula’s-IIC) organizes events with in the institute. Tula’s-IIC
                events are listed below:
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
