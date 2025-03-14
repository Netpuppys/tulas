"use client";
import React from "react";
import filmFestival from "../../../public/campus-life/celebrities/filmFestival.png";
import BannerImg from "../../../public/campus-life/celebrities/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../public/campus-life/celebrities/background.png";
import Image from "next/image";
import Vision from "@/component/Programs/Vision";
import filmFestival1 from "../../../public/campus-life/celebrities/filmFestival.webp";
import filmFestival2 from "../../../public/campus-life/celebrities/filmFestival2.webp";
import img1 from "../../../public/campus-life/sanskriti/img1.png";
import img2 from "../../../public/campus-life/sanskriti/img2.png";
import img3 from "../../../public/campus-life/sanskriti/img3.png";
import Footer from "@/component/Footer";
import GalleryCrousel from "@/component/GalleryCrousel";
import Banner from "@/component/Banner";
function Celebrities() {
  const sections = [
    {
      title: "Lights, Camera, Festival!",
      description:
        "The Dehradun International Film Festival at Tula’s Institute is more than just an event—it’s a culturally enriching experience for students. Workshops, film screenings, and panel discussions provide valuable insights into the technical and creative processes behind filmmaking. Students are encouraged to think critically, develop new skills, and gain a deeper understanding of the industry's evolving trends.",
      image: filmFestival1,
    },
    {
      title: "How the Cine-World Inspires Learning",
      description: (
        <>
          The festival also serves as a learning opportunity by enabling
          students with:
          <br />
          <br />
          <ul className="list-disc ml-5">
            <li>Cultural Awareness</li>
            <li>Creativity and Critical Thinking</li>
            <li>Event Management Skills</li>
            <li>Networking Opportunities</li>
          </ul>
        </>
      ),
      image: filmFestival2,
    },
  ];
  const images = [{ image: img1 }, { image: img2 }, { image: img3 }];

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
        <Banner
          image={BannerImg}
          title={
            <>
              Dehradun International{" "}
              <span className="text-[#007A83]">Film Festival</span>
            </>
          }
        />

        <div className="bg-white w-full h-fit flex flex-col justify-center items-center py-8 md:py-20">
          {/* <h3 className="font-semibold text-[30px] md:text-[clamp(10px,2.5vw,50px)] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            DEHRADUN INTERNATIONAL FILM FESTIVAL
          </h3> */}
          <Image
            src={filmFestival}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <p className="leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-[#353535]">
            The{" "}
            <span className="font-black text-[#007A83] font-[TTChocolatesMedium]">
              Tula's Institute{" "}
            </span>
            hosts the prestigious
            <span className="font-black text-[#3D001B] font-[TTChocolatesMedium]">
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
            <span className="font-black text-[#007A83] font-[TTChocolatesMedium]">
              {" "}
              Tula's Institute.
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
        <div className="pb-8 md:pb-20">
          <GalleryCrousel images={images} />
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Celebrities;
