"use client";
import React from "react";
import filmFestival from "../../../public/campus-life/celebrities/filmFestival.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/campus-life/celebrities/background.png";
import Image from "next/image";
import Vision from "@/component/Programs/Vision";
import talkShows from "../../../public/campus-life/celebrities/talkShows.png";
import starNights from "../../../public/campus-life/celebrities/starNights.png";

import Footer from "@/component/Footer";
function Celebrities() {
  const sections = [
    {
      title: "Talk Shows",
      description:
        "The Celebrity Talk Show at Tula’s Institute is a canvas event where celebrities from various industries, particularly Bollywood, grace our campus to share their invaluable experiences with students. This unique interaction provides a supreme opportunity for students to gain insights into the lives and careers of their idols. From directors and actors to producers and singers, these celebrated guests engage in candid conversations, offering wisdom, inspiration, and a glimpse into the glamorous world of entertainment.",
      image: talkShows,
    },
    {
      title: "Star Nights",
      description: (
        <>
          At Tula’s Institute, Celebrity Nights during the annual cultural fest,
          Sanskriti, are nothing short of spectacular. Each year, this grand
          event features performances by some of Bollywood’s most renowned
          singers, transforming our campus into a hub of electrifying music and
          unforgettable memories.
          <br />
          <br />
          These star-studded evenings bring an unmatched level of excitement, as
          students gather to witness their favorite artists perform live. From
          soulful songs to high-energy tracks, the diverse musical genres cater
          to all tastes, ensuring an enthralling experience for everyone.
          Celebrity Nights not only provide entertainment but also inspire
          students by showcasing the incredible talent and dedication of these
          celebrated performers.{" "}
        </>
      ),
      image: starNights,
    },
  ];
  return (
    <>
      <head>
        <title>
          Celebrities at Tula's Institute | Film Festivals, Star Nights & Talk
          Shows
        </title>
        <meta
          name="description"
          content="Experience the excitement of celebrity events at Tula's Institute, Dehradun's top engineering college. From the Dehradun International Film Festival to Star Nights and exclusive talk shows, our campus comes alive with inspiring encounters with Bollywood stars, directors, and performers."
        />
      </head>
      <body>
        <Navbar />
        <div className="h-fit w-full z-40 bg-white">
          <div className="h-[80vh] md:h-[71vh] w-full relative">
            <Image
              src={BannerImg}
              alt=""
              className="w-full h-full object-cover absolute"
            />
            <div className="bottom-4 md:bottom-10 z-10 absolute mx-4 md:ml-16">
              <h3 className="font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)] text-[#007A83] z-10 font-[CarotSlab]">
                Celebrities
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            DEHRADUN INTERNATIONAL FILM FESTIVAL
          </h3>
          <Image
            src={filmFestival}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%]  mx-auto mb-4"
          />
          <p className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            The{" "}
            <span className="font-black text-[#007A83] font-[TTChocolatesBold]">
              Tulas Institute{" "}
            </span>
            hosts the prestigious
            <span className="font-black text-[#3D001B] font-[TTChocolatesBold]">
              {" "}
              Dehradun International Film Festival{" "}
            </span>
            annually, a highlight in the colleges cultural calendar. This
            star-studded event attracts renowned Bollywood celebrities,
            including popular directors, actors, producers, and singers, who
            engage with students and share their invaluable experiences. The
            festival provides a unique opportunity for students to gain insights
            into the film industry, foster connections, and be inspired by the
            journeys of these celebrated figures. Its an annual celebration of
            regional cinema, creativity, and learning at
            <span className="font-black text-[#007A83] font-[TTChocolatesBold]">
              {" "}
              Tulas Institute.
            </span>
          </p>
        </div>

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

export default Celebrities;
