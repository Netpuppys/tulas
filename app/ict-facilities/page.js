"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../public/ict-facilities/background.png";
import { Fade } from "react-awesome-reveal";
import ICTImage from "../../public/ict-facilities/ict-facilities.png";
import { useInView } from "react-intersection-observer";
import lcd from "../../public/ict-facilities/lcd.png";
import lan from "../../public/ict-facilities/lan.png";
import whiteBoard from "../../public/ict-facilities/white-board.png";
import wifi from "../../public/ict-facilities/wifi.png";
import Vision from "@/component/Programs/Vision";

function ICTFacilities() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const sections = [
    {
      title: "ICT Facilities",
      description: (
        <>
          In addition to traditional method of teaching, the faculty members are
          using the IT enabled learning tools such as PPT, Video clippings,
          online classes, online sources, to expose the students for advanced
          knowledge and practical learning. Internet with capacity of over 205
          Mbps is made available.
          <br />
          <br />
          Classrooms & Seminar halls with ICT enabled facilities Tula's
          Institute has a state-of-the-art infrastructure, creating an ideal
          environment for progressive learning and resource development. To meet
          the academic needs of the students we have well equipped Classrooms,
          Tutorial rooms and laboratories that meet the AICTE specifications.
          With an aim to fill the gap between the curriculum and the industry
          expectations from a graduate engineer the college has provided, apart
          from the regular Laboratories, industry tie-ups etc.
          <br />
          <br />
          Labs are equipped with adequate hardware and licensed software to run
          curriculum specific programs. Adequate numbers of personal computers
          are available for the smooth conduct of the Labs.
          <br />
          <br />
          Institute consists of the adequate numbers of Seminar Halls and class
          rooms with ICT enabled facilities like:
        </>
      ),
      image: ICTImage,
    },
  ];

  const data = [
    {
      title: "LCD Projectors",
      image: lcd,
      description:
        "LCD Projectors: – It allows the teacher to interact with students better, to use a multimodal form of teaching and to provide more entertaining ways to teach and get ",
    },
    {
      title: "LAN",
      image: lan,
      description:
        "LAN (Local area network) – is a computer network that interconnects computers within a limited area. It controls the flow of information, such as software, ",
    },
    {
      title: "WIFI",
      image: wifi,
      description:
        "Wi-Fi (Wireless fidelity) – It serves as a significant tool to communicate, discuss, and even explore various information from a different world and reference.",
    },
    {
      title: "Smart board",
      image: whiteBoard,
      description:
        "Smart board – It is an electronic whiteboard, is a classroom tool that allows images from a computer screen to be displayed onto a classroom board.",
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            ICT <span className="text-[#007A83]">FACILITIES</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Tula’s has implemented ICT to support advanced learning and assessment. The institute has adequate classrooms to meet the need of the various programs being run. Presently all lecture rooms, tutorial rooms and seminar halls are equipped with projectors and Wi-Fi/LAN connectivity for the use of ICT during teaching.Computer assisted learning and digital materials are made available to the students to supplementclassroom teaching."
        }
      />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Vision sections={sections} />
      <Fade delay={300}>
        <div className="w-full px-2 md:px-10 flex flex-wrap justify-center gap-6 md:gap-12 items-center py-20 pt-0 h-fit">
          {data.map((card, index) => (
            <div
              key={index}
              style={{
                borderRadius: "26px",
                border: "1px solid #A3A3A3",
              }}
              className="bg-transparent w-[9rem] md:w-[16rem] h-fit relative rounded-xl flex flex-col items-center justify-start group hover:shadow-2xl transition-all ease-in-out delay-50 duration-200"
            >
              <Image
                src={card.image}
                alt="logo"
                className="rounded-2xl w-full"
              />
              <p className="font-semibold text-white text-center text-base md:text-xl tracking-tight p-3">
                {card.title}
              </p>
              <p className="text-[#D3D3D3] text-[12px] md:text-[15px] text-center p-3 pt-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Fade>
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ICTFacilities;
