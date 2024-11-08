"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/campus-life/sanskriti/background.png";
import Image from "next/image";
import Vision from "@/component/Programs/Vision";
import sanskriti from "../../../public/campus-life/sanskriti/sanskriti.png";
import Footer from "@/component/Footer";
function Sanskriti() {
  const sections = [
    {
      title: "Sanskriti",
      description:
        "Sanskriti is the vibrant and highly anticipated annual cultural fest of Tulas Institute, Dehradun, bringing together students, faculty, and renowned artists from bollywood in a joyous fusion of creativity and talent. The fest features a diverse display of cultural programs, from dance, singing, fashion show performances, as well as star-studded celebrity shows where popular singers and musicians mesmerize the audience with their exceptional talents. Sanskriti is more than just an event; its a platform for students to explore their creative potential, gain new experiences, and create lasting memories, celebrating culture, talent, and the spirit of togetherness.",
      image: sanskriti,
    },
  ];
  return (
    <>
      <head>
        <title>
          Sanskriti - Annual Cultural Fest at Tula’s Institute, Dehradun
        </title>
        <meta
          name="description"
          content="Experience the vibrant annual cultural fest, Sanskriti, at Tula’s Institute, Dehradun. From dance and fashion shows to star-studded performances by Bollywood artists, Sanskriti offers a platform for students to showcase their creativity and celebrate culture, talent, and unity."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              <span className="text-[#007A83]">Sanskriti</span>
            </>
          }
          description={<></>}
          belowTitle={<></>}
          belowPara={
            "Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit."
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
      </body>
    </>
  );
}

export default Sanskriti;
