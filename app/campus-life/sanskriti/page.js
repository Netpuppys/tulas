"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/campus-life/sanskriti/background.png";
import img1 from "../../../public/campus-life/sanskriti/img1.png";
import img2 from "../../../public/campus-life/sanskriti/img2.png";
import img3 from "../../../public/campus-life/sanskriti/img3.png";
import Image from "next/image";
import Vision from "@/component/Programs/Vision";
import sanskriti from "../../../public/campus-life/sanskriti/sanskriti.png";
import Footer from "@/component/Footer";
import GalleryCrousel from "@/component/GalleryCrousel";
function Sanskriti() {
  const images = [{ image: img1 }, { image: img2 }, { image: img3 }];
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
          title={<>Sanskriti- Cultural Fest</>}
          // description={<></>}
          // belowTitle={<></>}
          // belowPara={
          //   "Sanskriti – the annual cultural fest at Tula's Institute, Dehradun – is the ultimate celebration of creativity, talent, and excitement! A lively fusion of students, faculty, and Bollywood stars, it promises an unforgettable mix of music, dance, and dazzling performances."
          // }
        />
        {/* fixed background */}
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[clamp(10px,7vw,30px)] md:text-[clamp(10px,2.5vw,45px)] text-center w-full font-[CarotSlab] leading-tight text-[#007A83] mb-4">
            Sanskriti Fest
          </h3>
          <Image
            src={sanskriti}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <div className="text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] w-[90%] md:w-[70%] font-[MontserratLight] mx-auto text-[#353535] leading-tight">
            Sanskriti is much more than just an event; it’s a platform where
            students can showcase their creativity and push their artistic
            boundaries. With performances that span from dance and singing to
            fashion shows, the fest is an explosion of talent and energy. The
            star-studded celebrity shows add an extra touch of magic, as
            Bollywood singers and musicians captivate the audience with their
            incredible performances.
            <br />
            <br />
            Look out for:
            <br />
            <ul className="ml-5 list-disc">
              <li>Spectacular dance and music performances</li>
              <li>Glamorous fashion shows</li>
              <li>Interactive workshops to explore new creative skills</li>
            </ul>
          </div>
        </div>
        <div className="py-8 md:py-20">
          <GalleryCrousel images={images} />
        </div>
        {/* <Vision sections={sections} /> */}
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Sanskriti;
