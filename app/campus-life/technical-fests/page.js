"use client";
import React from "react";
import background from "../../../public/campus-life/technical-fests/background.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Banner from "@/component/Banner";
import Image from "next/image";
import Footer from "@/component/Footer";
import fest from "../../../public/campus-life/technical-fests/technical-fest.png";
import Vision from "@/component/Programs/Vision";
function TechnicalFest() {
  const sections = [
    {
      title: "Utkrisht",
      description: (
        <>
          This isn't just your average technical fest – it’s a playground for
          the curious, a platform for the bold, and a space where groundbreaking
          ideas come to life. At Utkrisht, you’ll dive into a wide array of
          challenges that push the boundaries of what’s possible. Whether you’re
          building futuristic robots, developing complex software, or solving
          real-world tech problems, there’s something for every aspiring
          technologist.
          <br />
          <br />
          Why Utkrisht?
          <br />
          <br />
          Collaborate and Compete: Take part in team-based challenges, and
          collaborate with peers from across India.
          <br />
          <br />
          Real-World Impact: Engage with projects that aren’t just theoretical —
          they’re designed to solve real-life problems.
          <br />
          <br />
          Inspiring and Educating: Attend workshops, panel discussions, and
          talks from industry leaders who will share the knowledge shaping the
          future of tech.
          <br />
          <br />
          Celebrate Innovation: Whether you're a coder, builder, or inventor,
          this is where you’ll see technology take on new forms and new
          possibilities.
        </>
      ),
      image: fest,
    },
  ];
  return (
    <>
      <head>
        <title>Technical Fests - Utkrisht at Tula’s Institute, Dehradun</title>
        <meta
          name="description"
          content="Join the excitement of Utkrisht, Tula’s Institute’s annual technical fest. Engage in robot wars, coding competitions, technical quizzes, and more. A platform for students to showcase innovative projects, learn from experts, and explore cutting-edge technologies."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              Technical<span className="text-[#007A83]"> Fests</span>
            </>
          }
          belowTitle={"Utkrisht – The Ultimate Technical Challenge"}
          belowPara={
            "Welcome to Utkrisht, the ultimate gathering for tech enthusiasts, innovators, and problem-solvers. Every year, students from across the nation come together to compete, collaborate, and celebrate the ever-evolving world of technology."
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
      </body>
    </>
  );
}

export default TechnicalFest;
