"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/lectureTheater/background.png";
import { Fade } from "react-awesome-reveal";
import lecture from "../../../public/infrastructure/lectureTheater/lecture.png";
import Vision from "@/component/Programs/Vision";

function LectureTheater() {
  const sections = [
    {
      title: "Lecture Theatre",
      description:
        "TULA’S Institute is having spacious and fully equipped lecture halls which are unique of their kind, these lecture halls can accommodate 70 students. These are designed to provide complete comfort for the intense hours of the classroom teaching and interaction.",
      image: lecture,
    },
  ];
  return (
    <>
      <head>
        <title>
          Lecture Theatre of Tula's Dehradun,Uttarakhand |Top College Dehradun
        </title>
        <meta
          name="description"
          content="Tula's is one of the best b.tech college in Uttarakhand, Dehradun. 100% placements records."
        />
      </head>
      <body>
        <div className="flex flex-col items-center">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
             <span className="text-[#007A83]">LECTURE THEATRE</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "The lecture theatres at Tula's Institute are spacious and well-equipped with advanced audio-visual aids, offering an optimal setting for interactive learning and discussions. They are designed to facilitate a comfortable and engaging educational experience for students."
            }
          />
          {/* fixed background */}
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Vision sections={sections} />
          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default LectureTheater;
