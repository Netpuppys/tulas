"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/lectureTheater/background.png";
import { Fade } from "react-awesome-reveal";
import lecture from "../../../public/infrastructure/lectureTheater/lecture.png";

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
    <div className="flex flex-col items-center">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            OUR <span className="text-[#007A83]">LECTURE THEATRE</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "The lecture theatres at Tulas Institute are spacious and well-equipped with advanced audio-visual aids, offering an optimal setting for interactive learning and discussions. They are designed to facilitate a comfortable and engaging educational experience for students."
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
      <div className="pt-8 md:pt-20 px-3 md:px-0 w-full md:w-[90%] mx-auto bg-transparent h-fit">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 md:gap-0 md:flex-row mb-8 md:mb-20 justify-between w-full h-fit items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } `}
          >
            <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
              <div className="w-full block">
                <h3 className="px-4 md:px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
                  {section.title}
                </h3>
                <br />
                <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
                  {section.description}
                </h4>
              </div>
            </Fade>
            <Fade className="w-full md:w-[45%]">
              <Image
                src={section.image}
                alt=""
                className="w-full h-fit rounded-xl md:rounded-3xl"
              />
            </Fade>
          </div>
        ))}
      </div>
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default LectureTheater;
