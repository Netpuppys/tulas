"use client";
import React from "react";
import background from "../../../public/campus-life/victree/background.png";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import Image from "next/image";
import Navbar from "@/component/Navbar/Navbar";
import vibgyorMain from "../../../public/campus-life/victree/victreeMain.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
function Victree() {
  const sections = [
    {
      title: "Table Tennis",
      description:
        "Test your reflexes and precision in fast-paced table tennis matches.",
    },
    {
      title: "Badminton",
      description:
        " Enjoy thrilling rallies and sharpen your agility with badminton.",
    },
    {
      title: "Chess",
      description:
        "Engage in strategic battles and enhance your cognitive skills with chess.",
    },
    {
      title: "Carrom",
      description:
        "Showcase your carrom skills and enjoy this classic tabletop game.",
    },
    {
      title: "Squash",
      description: "Push your limits in the high-energy game of squash.",
    },
    {
      title: "Cricket",
      description:
        "Join our cricket team and experience the thrill of hitting sixes and taking wickets.",
    },
    {
      title: "Football",
      description:
        "Show off your dribbling and goal-scoring prowess on the football field.",
    },
    {
      title: "Basketball",
      description:
        "Dunk, dribble, and shoot your way to victory in our basketball matches.",
    },
    {
      title: "Volleyball",
      description: "Enjoy the teamwork and excitement of volleyball.",
    },
    {
      title: "Athletics",
      description:
        "Participate in track and field events to test your speed, endurance, and strength.",
    },
  ];
  return (
    <>
      <head>
        <title>Victree - Sports Club at Tula's Institute, Dehradun</title>
        <meta
          name="description"
          content="Join Victree, the dynamic sports club at Tula’s Institute, Dehradun. Explore a wide range of indoor and outdoor games like Table Tennis, Badminton, Football, and more, promoting fitness, teamwork, and sportsmanship on campus."
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
              <h3 className="text-[40px] md:text-[60px] text-[#007A83] z-10 font-[CarotSlab]">
                Victree
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            Victree Sports Club at Tula’s Institute
          </h3>
          <Image
            src={vibgyorMain}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%]  mx-auto mb-4"
          />
          <p className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            <span className="font-black text-[#007A83] font-[TTChocolatesBold]">
              Victree,{" "}
            </span>
            the vibrant sports club of{" "}
            <span className="font-black text-[#3D001B] font-[TTChocolatesBold]">
              {" "}
              Tula’s Institute,{" "}
            </span>{" "}
            is where athletic passion meets unparalleled dedication. This
            dynamic club is at the heart of promoting physical fitness,
            teamwork, and sportsmanship among students. Whether you're an
            enthusiastic athlete or just looking to stay active, Victree offers
            a plethora of indoor and outdoor games to cater to all interests and
            skill levels.
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
        <h3 className="text-[30px] pt-8 md:pt-20 md:text-[42px] text-center w-full font-[CarotSlab] text-white">
          Indoor Games
        </h3>
        <Vision sections={sections.slice(0, 4)} />
        <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-white">
          Outdoor Games
        </h3>
        <Vision sections={sections.slice(4)} />
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <p className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            Victree Sports Club not only promotes physical well-being but also
            fosters a sense of community and camaraderie among students. Our
            club regularly organizes tournaments, practice sessions, and
            friendly matches to keep the competitive spirit alive and ensure
            that every student can pursue their athletic interests.
          </p>
        </div>
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Victree;
