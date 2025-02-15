"use client";
import React from "react";
import background from "../../../public/campus-life/ncc/background.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Banner from "@/component/Banner";
import Image from "next/image";
import Footer from "@/component/Footer";
import ncc from "../../../public/campus-life/ncc/ncc.png";
import Vision from "@/component/Programs/Vision";
import img1 from "../../../public/campus-life/ncc/img1.png";
import img2 from "../../../public/campus-life/ncc/img2.png";
import img3 from "../../../public/campus-life/ncc/img3.png";
import GalleryCrousel from "@/component/GalleryCrousel";

function NCC() {
  // const sections = [
  //   {
  //     title: "National Cadet Corps (NCC)",
  //     description: (
  //       <>
  //         The National Cadet Corps (NCC) at Tula’s Institute plays a pivotal
  //         role in shaping disciplined and responsible citizens. Our NCC unit is
  //         dedicated to fostering qualities of leadership, patriotism, and
  //         selfless service among students. Through a structured program of
  //         physical training, drills, adventure activities, and community
  //         service, cadets develop a strong sense of duty and resilience.
  //         <br />
  //         <br />
  //         The NCC at Tula’s Institute offers students the opportunity to
  //         participate in various national and state-level camps, parades, and
  //         competitions, providing them with a platform to showcase their skills
  //         and dedication. These experiences not only build character but also
  //         establish a deep sense of national pride and civic responsibility.
  //         <br />
  //         <br />
  //         By being a part of the NCC, students at Tula’s Institute gain
  //         invaluable life skills, leadership qualities, and a commitment to
  //         serving the nation. The NCC program is a cornerstone of our
  //         institute’s commitment to holistic education and personal development.
  //       </>
  //     ),
  //     image: ncc,
  //   },
  // ];
  const images = [
    { title: "Football Ground", image: img1 },
    { title: "Cricket Ground", image: img2 },
    { title: "Atheletics", image: img3 },
  ];
  return (
    <>
      <head>
        <title>
          NCC at Tula's Institute | Building Leadership & Patriotism
        </title>
        <meta
          name="description"
          content="Explore the National Cadet Corps (NCC) at Tula's Institute, Dehradun’s leading engineering college. Our NCC program fosters leadership, patriotism, and resilience through physical training, drills, and community service. Join us to build character and gain invaluable life skills in service to the nation."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={<span className="text-[#007A83]">NCC</span>}
          // belowPara={
          //   "At Tula’s, the NCC isn’t just a program—it’s a transformative journey! Behind every great leader is a story of discipline, resilience, and purpose—this is what NCC at Tula’s delivers."
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
          <h3 className="text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2.3vw,50px)] text-center w-full font-[CarotSlab] leading-tight text-[#007A83] mb-4">
            NATIONAL CADET CORPS
          </h3>
          <Image
            src={ncc}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <p className="text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight w-[90%] md:w-[70%] font-[MontserratLight] mx-auto text-center text-[#353535]">
            The National Cadet Corps (NCC) at Tula’s Institute plays a pivotal
            role in shaping disciplined and responsible citizens. Our NCC unit
            is dedicated to fostering qualities of leadership, patriotism, and
            selfless service among students. Through a structured program of
            physical training, drills, adventure activities, and community
            service, cadets develop a strong sense of duty and resilience.
            <br />
            <br />
            The NCC at Tula’s Institute offers students the opportunity to
            participate in various national and state-level camps, parades, and
            competitions, providing them with a platform to showcase their
            skills and dedication. These experiences not only build character
            but also establish a deep sense of national pride and civic
            responsibility.
            <br />
            <br />
            By being a part of the NCC, students at Tula’s Institute gain
            invaluable life skills, leadership qualities, and a commitment to
            serving the nation. The NCC program is a cornerstone of our
            institute’s commitment to holistic education and personal
            development.
          </p>
        </div>
        {/* <Vision sections={sections} /> */}
        <div className="py-8 md:py-20">
          <GalleryCrousel images={images} />
        </div>
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default NCC;
