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
        "Quick reflexes, sharp focus—this game is all about precision.",
    },

    {
      title: "Chess",
      description: "Outsmart your opponent, one strategic move at a time.",
    },
    {
      title: "Carrom",
      description: "A classic game where skill and finesse meet in every shot.",
    },

    {
      title: "Squash",
      description: "A fast-paced challenge where every shot counts.",
    },
    {
      title: "Cricket",
      description: "Swing for the fences or bowl a perfect delivery.",
    },
    {
      title: "Football",
      description:
        "Sprint, pass, and score—football’s where the real action is.",
    },
    {
      title: "Basketball",
      description:
        "Sprint down the court, make the play, and score when it counts.",
    },
    {
      title: "Volleyball",
      description: "Jump, spike, and work as a team to claim victory.",
    },
    {
      title: "Badminton",
      description: "Fast rallies and lightning moves to keep you on your toes.",
    },
    {
      title: "Athletics",
      description:
        "Push your limits in races and field events that test strength and speed.",
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
              <h3 className="text-[40px] md:text-[60px] text-white z-10 font-[CarotSlab]">
                Victree <span className="text-[#007A83]">- Sports Club</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            Victree Sports Club - Where the Game’s Always On!
          </h3>
          <Image
            src={vibgyorMain}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <p className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            At Tula’s Institute, Victree Sports Club is where energy,
            competition, and camaraderie collide. With over 10 sports available,
            students can dive into everything from strategy-driven indoor games
            to action-packed outdoor matches.
            <br />
            <br />
            Our campus is built for everyone who loves sports. With expansive
            fields, courts, and activity spaces, it’s the perfect place to
            engage in your favorite sports. The infrastructure here allows each
            student to challenge themselves, connect with others, and celebrate
            the spirit of sports.
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
        <Vision sections={sections.slice(0, 3)} />
        <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-white">
          Outdoor Games
        </h3>
        <Vision sections={sections.slice(3)} />
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <p className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            At Victree, it's not just about playing—it's about being part of
            something that brings out the best in you. With every match, every
            practice, you’ll find new ways to challenge yourself, connect with
            others, and simply enjoy the game. Here, every moment counts, and
            every game is a chance to grow, laugh, and make memories. So, step
            in and be part of the journey—because at Victree, the best is yet to
            come.
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
