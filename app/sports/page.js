"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../public/sports/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import squash from "../../public/sports/squash.png";
import athletics from "../../public/sports/athletics.png";
import badminton from "../../public/sports/badminton.png";
import basketball from "../../public/sports/basketball.png";
import cricket from "../../public/sports/cricket.png";
import football from "../../public/sports/football.png";
import volleyball from "../../public/sports/volleyball.png";
import chess from "../../public/sports/chess.png";
import tableTennis from "../../public/sports/tableTennis.png";
import carrom from "../../public/sports/carrom.png";
import background from "../../public/infrastructure/HostelMess/background.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useMobile } from "@/component/IsMobileContext";
import GalleryCrousel from "@/component/GalleryCrousel";
import Vision from "@/component/Programs/Vision";

// const TextBanner = ({ filledText }) => {
//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-transparent">
//       <p
//         style={
//           filledText
//             ? {
//                 color: "#ffffff",
//                 textShadow: "0px 0.83px 8.295px rgba(0, 0, 0, 0.40)",
//               }
//             : {
//                 color: "transparent",
//                 WebkitTextStrokeColor: "#fff",
//                 WebkitTextStrokeWidth: "0.1px",
//               }
//         }
//         className="font-[TTChocolatesbold] text-center text-[3.5rem] md:text-[6rem] font-black tracking-[0.10369rem] leading-[4rem] md:leading-[2.38494rem]"
//       >
//         EXPLORE MORE
//         <span className="text-[4.5rem] md:text-[7rem] block md:leading-[7.64388rem]">
//           Sports
//         </span>
//       </p>
//     </div>
//   );
// };

function Sports() {
  const images = [
    { title: "Chess", image: chess },
    { title: "Table Tennis", image: tableTennis },
    { title: "Carrom", image: carrom },
    // { title: "Carrom", image: carrom },
    // { title: "Carrom", image: carrom },
    // { title: "Carrom", image: carrom },
  ];
  const sections = [
    {
      title: "Squash",
      image: squash,
      description:
        "Our squash courts are ready for action, with the perfect flooring and lighting for fast games. It’s the ideal place to practice and improve your skills while having fun!",
    },
    {
      title: "Cricket",
      image: cricket,
      description:
        "We’ve got well-kept cricket pitches and practice nets where you can perfect your batting and bowling. Whether you’re just starting or playing competitively, you’ll have the space to grow.",
    },
    {
      title: "Football",
      image: football,
      description:
        "Our football field is equipped with top-notch turf and markings, making it perfect for practice or a friendly match. It’s designed to help you improve your game and enjoy every kick.",
    },
    {
      title: "Basketball",
      image: basketball,
      description:
        "Our basketball courts are spacious, with great flooring and hoops for smooth, fast games. Whether you're practicing or playing with friends, it’s the best place to sharpen your skills.",
    },
    {
      title: "Atheletics",
      image: athletics,
      description:
        "Our athletics track is perfect for running, jumping, and all your field events. With great markings and top facilities, it’s designed to help you train and perform at your best.",
    },
    {
      title: "Badminton",
      image: badminton,
      description:
        "Our badminton courts are ready for quick rallies, with perfect flooring and lighting to make every game enjoyable. It’s the best spot to work on your reflexes and have fun!",
    },
    {
      title: "Volleyball",
      image: volleyball,
      description:
        "Our volleyball courts are built for fun and competition, with the right surface and net height. It’s a great space to practice, improve, and enjoy every game",
    },
  ];
  // const parentRef = useRef(null);
  // const contactRef = useRef(null);

  // const { isMobile } = useMobile();

  // const [isInView, setIsInView] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  // function mouseMove(event) {
  //   const newX = Math.floor((event.clientX * 100) / window.innerWidth);
  //   const newY = Math.floor((event.clientY * 100) / window.innerHeight);
  //   setPosition({ x: newX, y: newY });
  // }

  // useEffect(() => {
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const calculateMovement = (axis, direction, distance) => {
  //   return axis === "x" ? direction * distance : direction * distance;
  // };

  // const movementFactor = 15;

  // const movementX =
  //   !isMobile && calculateMovement("x", 1, position.x / movementFactor);

  // const movementY =
  //   !isMobile && calculateMovement("y", 1, position.y / movementFactor);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsInView(entry.isIntersecting);
  //     },
  //     {
  //       root: null, // uses viewport as root
  //       threshold: 0, // adjust as needed
  //     }
  //   );

  //   if (contactRef.current) {
  //     observer.observe(contactRef.current);
  //   }

  //   return () => {
  //     if (contactRef.current) {
  //       observer.unobserve(contactRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
      <head>
        <title>
          Sports | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Discover the vibrant sports culture at Tula's Institute, offering state-of-the-art facilities and opportunities for students to excel in various sports and physical activities."
        />
      </head>
      <body>
        <div
          // ref={parentRef}
          className="w-full h-fit overflow-x-hidden"
        >
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                SPORTS <span className="text-[#007A83]">FACILITIES</span>
              </>
            }
            description={<></>}
            belowTitle="SPORTS INFRASTRUCTURE"
            belowPara=<>
              We all have dreams don't we? To continue playing the sports we
              played as school kids or to finally find a sport that gets our
              adrenaline pumping? But then college happens and our dreams fizzle
              out.
              <br />
              <br />
              But not at Tula's!
              <br />
              <br />
              Here we have a 22-acre campus designed with everything the sports
              lover in you has ever dreamt of. We go beyond academics because we
              understand confident and successful students are built when an
              equal amount of time is spent in and beyond classrooms.
              <br />
              <br />
              Craving for a field or pitch that brings out the finest in you?
              Join Tula's, an institution that nurtures and nourishes all parts
              of you!
            </>
          />

          <div className="relative min-h-screen h-fit">
            <Image
              src={background}
              className="fixed top-0 -z-10 left-0 w-full h-full object-cover"
              alt=""
            />
            {/* <div
              ref={contactRef}
              className="w-screen absolute top-[100vh] h-[calc(100%-200vh)] opacity-0"
            ></div> */}
            <div className="w-full px-5 py-8 md:py-20 flex flex-col items-center justify-center gap-6">
              <h3 className=" text-center text-[30px] md:text-[clamp(20px,2.5vw,50px)] underline underline-offset-4 md:underline-offset-[15px]">
                The Perfect Indoor Space for Play and Progress
              </h3>
              <p className="leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-white text-center md:text-justify text-opacity-90 md:max-w-[65vw]">
                Having the right space to relax, have fun, and grow is super
                important. With the great facilities at Tula’s, indoor
                activities become more than just games—they help you sharpen
                your mind, improve focus, and work on your skills. Whether it's
                planning your next move in chess, reacting quickly in table
                tennis, or enjoying a friendly game of carrom, these spaces make
                it easy for students to learn, play, and have a blast!
              </p>
            </div>

            {/* <div
              className={`${
                isInView ? "fixed" : "absolute"
              } top-0 left-0 z-[10]`}
            >
              <TextBanner filledText={true} />
            </div>

            <div
              className={`${
                isInView ? "fixed" : "absolute"
              } top-0 left-0 z-[50]`}
            >
              <TextBanner filledText={false} />
            </div>

            {!isInView && (
              <div
                className={`${
                  isInView ? "fixed" : "absolute"
                } bottom-0 left-0 z-[10]`}
              >
                <TextBanner filledText={true} />
              </div>
            )}

            {!isInView && (
              <div
                className={`${
                  isInView ? "fixed" : "absolute"
                } bottom-0 left-0 z-[50]`}
              >
                <TextBanner filledText={false} />
              </div>
            )}

            <div className="w-full h-fit flex pt-10 md:pt-0 flex-col md:flex-row flex-wrap md:gap-y-[5rem] z-[30] relative">
              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                <div
                  style={{
                    transform: `translate(-${movementX}rem, ${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble1} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                <div
                  style={{
                    transform: `translate(${movementX}rem, ${
                      movementY + 2
                    }rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble2} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                <div
                  style={{
                    transform: `translate(-${movementX}rem, ${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble3} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                <div
                  style={{
                    transform: `translate(-${movementX}rem, -${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble4} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                <div
                  style={{
                    transform: `translate(${
                      movementX + 1
                    }rem, ${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble5} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                <div
                  style={{
                    transform: `translate(-${movementX}rem, ${
                      movementY - 1
                    }rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble6} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                <div
                  style={{
                    transform: `translate(-${movementX}rem, -${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble7} className="w-full h-fit" alt="bubble" />
                </div>
              </div>

              <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                <div
                  style={{
                    transform: `translate(-${
                      movementX - 2
                    }rem, ${movementY}rem)`,
                    transition: "transform 0.2s",
                  }}
                  className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                >
                  <Image src={bubble8} className="w-full h-fit" alt="bubble" />
                </div>
              </div>
            </div> */}
            <GalleryCrousel images={images} />
            <div className="w-full px-5 py-8 md:py-20 flex flex-col items-center justify-center gap-6">
              <h3 className=" text-center text-[30px] md:text-[clamp(20px,2.5vw,50px)] underline underline-offset-4 md:underline-offset-[15px]">
                Spaces Built for Sports Under the Sky
              </h3>
              <p className="leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-white text-center md:text-justify text-opacity-90 md:max-w-[65vw]">
                The outdoor sports facilities at Tula’ are designed to give
                students the perfect space for all kinds of action. With
                well-maintained fields and tracks, it's the ideal environment to
                train, compete, and enjoy the outdoors
              </p>
            </div>
            <Vision sections={sections} />
          </div>
        </div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default Sports;
