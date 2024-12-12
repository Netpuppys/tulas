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
      description: (
        <>
          Sanskriti is much more than just an event; it’s a platform where
          students can showcase their creativity and push their artistic
          boundaries. With performances that span from dance and singing to
          fashion shows, the fest is an explosion of talent and energy. The
          star-studded celebrity shows add an extra touch of magic, as Bollywood
          singers and musicians captivate the audience with their incredible
          performances.
          <br />
          <br />
          Look out for:
          <br />
          <ul className="ml-5 list-disc">
            <li>Spectacular dance and music performances</li>
            <li>Glamorous fashion shows</li>
            <li>Interactive workshops to explore new creative skills</li>
          </ul>
        </>
      ),
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
            "Sanskriti – the annual cultural fest at Tula's Institute, Dehradun – is the ultimate celebration of creativity, talent, and excitement! A lively fusion of students, faculty, and Bollywood stars, it promises an unforgettable mix of music, dance, and dazzling performances."
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
