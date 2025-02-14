"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/lectureTheater/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/lectureTheater/background.png";
import img1 from "../../../public/infrastructure/lectureTheater/img1.png";
import img3 from "../../../public/infrastructure/lectureTheater/img3.png";
import img2 from "../../../public/infrastructure/lectureTheater/img2.png";
import GalleryCrousel from "@/component/GalleryCrousel";
import lecture from "../../../public/infrastructure/lectureTheater/lecture.png";
import Vision from "@/component/Programs/Vision";

function LectureTheater() {
  const sections = [
    {
      title: "Lecture Theatre",
      description:
        "Tula's Institute is having spacious and fully equipped lecture halls which are unique of their kind, these lecture halls can accommodate 70 students. These are designed to provide complete comfort for the intense hours of the classroom teaching and interaction.",
      image: lecture,
    },
  ];
  const images = [{ image: img1 }, { image: img2 }, { image: img3 }];
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
        <Navbar />
        <div className="flex flex-col items-center">
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
          <h3
            className={`px-4 md:px-10 text-center text-white border-white font-[MontserratMedium] rounded-md font-semibold text-[30px] md:text-[clamp(10px,2.5vw,50px)] border-l-4 `}
          >
            Gallery
          </h3>
          <div className="py-8 md:py-20 w-full h-fit">
            <GalleryCrousel images={images} />
          </div>
          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default LectureTheater;
