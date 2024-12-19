"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../public/ict-facilities/bannerImg.png";
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
          Tula’s Institute integrates traditional teaching with IT-enabled
          learning tools such as PPTs, video clippings, online classes, and
          digital resources to enhance practical learning and advanced
          knowledge. With over 205 Mbps internet connectivity, students have
          seamless access to online resources.
          <br />
          <br />
          The institute offers state-of-the-art infrastructure, including
          ICT-enabled classrooms, seminar halls, tutorial rooms, and
          AICTE-compliant laboratories. To bridge the gap between academic
          curriculum and industry expectations, the college collaborates with
          industries and provides advanced laboratories.
          <br />
          <br />
          The labs are equipped with modern hardware, licensed software, and
          ample personal computers to ensure smooth lab operations and
          curriculum-specific learning.
          <br />
          <br />
          Some of ICT enabled facilities in the campus are:
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
    <>
      <head>
        <title>
          ICT Facilities | Best Engineering College in Dehradun, Uttarakhand |
          Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the advanced ICT facilities at Tula's Institute, Dehradun. Our state-of-the-art computer labs, high-speed internet, and digital resources support a dynamic learning environment, empowering students with cutting-edge technology"
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
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
              "Tula’s has implemented ICT to support advanced learning and assessment. The institute has adequate classrooms to meet the need of the various programs being run. Presently all lecture rooms, tutorial rooms and seminar halls are equipped with projectors and Wi-Fi/LAN connectivity for the use of ICT during teaching. Computer assisted learning and digital materials are made available to the students to supplement classroom teaching."
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
                  className="bg-transparent w-[calc(50%-1.5rem)] md:w-[16rem] h-fit relative rounded-xl flex flex-col items-center justify-start group hover:shadow-2xl transition-all ease-in-out delay-50 duration-200"
                >
                  <Image
                    src={card.image}
                    alt="logo"
                    className="rounded-2xl w-full"
                  />
                  <p className="font-semibold text-white text-center text-base md:text-xl tracking-tight p-3">
                    {card.title}
                  </p>
                  <p className="text-[#D3D3D3] h-[138px] md:h-fit text-[12px] md:text-[15px] text-center p-3 pt-0">
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
      </body>
    </>
  );
}

export default ICTFacilities;
