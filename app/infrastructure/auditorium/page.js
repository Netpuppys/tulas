"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/auditorium/background.png";
import { Fade } from "react-awesome-reveal";
import biggestAuditorium from "../../../public/infrastructure/auditorium/biggestAuditorium.png";
import multiUse from "../../../public/infrastructure/auditorium/multiUse.png";
import Vision from "@/component/Programs/Vision";

function Auditorium() {
  const sections = [
    {
      title: "Biggest Auditorium",
      description:
        "Tula’s Institute takes pride in exhibiting a state of art auditorium, located at the heart of the campus. It has been constructed keeping in mind the smallest of details and is well equipped with the latest technology. It portraits a perfect example of modern Architecture and is certainly one of its kind in the entire Northern India. As a result of the world-class infrastructure Tula’s Institute over the years has been ranked among the ‘Top 10 engineering college in Uttarakhand’.",
      image: biggestAuditorium,
    },
    {
      title: "Multi-use Concert Hall",
      description:
        "Auditorium is a multi-use concert hall with wonderful acoustics and a warm and welcoming ambience. It is a perfect venue for non – academic and academic events such as musical, dance and theatre performances, as well as lectures, conferences, videos respectively. The Auditorium has a seating capacity of 550 people and is centrally air-conditioned. It contains state-of-the-art lighting and a full range of audiovisual equipment. It houses a Dolby surround sound system and has a very powerful and specially imported projector for multiple uses ranging from showing slides to watching motivational videos and high resolution movies.",
      image: multiUse,
    },
  ];
  return (
    <>
      <head>
        <title>Tula's | Biggest Auditorium in Dehradun,Uttarakhand</title>
        <meta
          name="description"
          content="The Tula's Institute provides computerised library, auditorium having a 500 seating capacity, Microsoft innovation centre, computer centre."
        />
      </head>
      <body>
        <div className="flex flex-col items-center">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                OUR <span className="text-[#007A83]">AUDITORIUM</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "The auditorium at Tulas Institute in Dehradun is a modern facility designed to host a variety of events, including seminars, conferences, and cultural programs. It is equipped with state-of-the-art audio-visual technology, providing an ideal environment for both academic and extracurricular activities."
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
      </body>
    </>
  );
}

export default Auditorium;
