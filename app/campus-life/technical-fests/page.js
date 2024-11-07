"use client";
import React from "react";
import background from "../../../public/campus-life/technical-fests/background.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Banner from "@/component/Banner";
import Image from "next/image";
import Footer from "@/component/Footer";
import fest from "../../../public/campus-life/technical-fests/technical-fest.png";
import Vision from "@/component/Programs/Vision";
function TechnicalFest() {
  const sections = [
    {
      title: "Technical Fests",
      description: (
        <>
          Tula’ Institute proudly hosts Utkrisht, the highly anticipated annual
          technical fest. This inter-college event attracts students from across
          the country, eager to showcase their innovative projects and compete
          in thrilling technical challenges. Participants engage in various
          activities, including model displays, robot wars, coding competitions,
          and technical quizzes.
          <br />
          <br />
          Utkrisht provides a platform for young minds to demonstrate their
          technical ability, foster creativity, and collaborate on
          groundbreaking ideas. It’s an exciting opportunity for students to
          learn from each other, gain exposure to cutting-edge technologies, and
          network with industry experts.
        </>
      ),
      image: fest,
    },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            Technical<span className="text-[#007A83]"> Fests</span>
          </>
        }
        belowPara={
          "Tula’ Institute proudly hosts Utkrisht, the highly anticipated annual technical fest. This inter-college event attracts students from across the country, eager to showcase their innovative projects and compete in thrilling technical challenges. Participants engage in various activities, including model displays, robot wars, coding competitions, and technical quizzes."
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
        <Footer color={true} />
      </div>
    </div>
  );
}

export default TechnicalFest;
