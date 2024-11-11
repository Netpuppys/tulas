"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import bubble1 from "../../public/sports/bubbles/bubble1.webp"
import bubble2 from "../../public/sports/bubbles/bubble2.webp"
import bubble3 from "../../public/sports/bubbles/bubble3.webp"
import bubble4 from "../../public/sports/bubbles/bubble4.webp"
import bubble5 from "../../public/sports/bubbles/bubble5.webp"
import bubble6 from "../../public/sports/bubbles/bubble6.webp"
import bubble7 from "../../public/sports/bubbles/bubble7.webp"
import bubble8 from "../../public/sports/bubbles/bubble8.webp"
import background from "../../public/infrastructure/HostelMess/background.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useMobile } from "@/component/IsMobileContext";

const TextBanner = ({ filledText }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-transparent">
      <p
        style={
          filledText
            ? {
                color: "#ffffff",
                textShadow: "0px 0.83px 8.295px rgba(0, 0, 0, 0.40)",
              }
            : {
                color: "transparent",
                WebkitTextStrokeColor: "#fff",
                WebkitTextStrokeWidth: "0.1px",
              }
        }
        className="font-[TTChocolatesbold] text-center text-[3.5rem] md:text-[6rem] font-black tracking-[0.10369rem] leading-[4rem] md:leading-[2.38494rem]"
      >
        EXPLORE MORE
        <span className="text-[4.5rem] md:text-[7rem] block md:leading-[7.64388rem]">Sports</span>
      </p>
    </div>
  );
};

function Sports() {
  const parentRef = useRef(null);
  const contactRef = useRef(null);

  const { isMobile } = useMobile()

  const [ isInView, setIsInView ] = useState(false);
  const [ position, setPosition ] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo({ 
      top: 0,
      behavior: "smooth"
    });
  }, []);  

  function mouseMove(event) {
    const newX = Math.floor((event.clientX * 100) / window.innerWidth);
    const newY = Math.floor((event.clientY * 100) / window.innerHeight);
    setPosition({ x: newX, y: newY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const calculateMovement = (axis, direction, distance) => {
    return axis === "x" ? direction * distance : direction * distance;
  };

  const movementFactor = 15;

  const movementX = !isMobile && calculateMovement("x", 1, position.x / movementFactor);

  const movementY = !isMobile && calculateMovement("y", 1, position.y / movementFactor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // uses viewport as root
        threshold: 0, // adjust as needed
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

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
        <div ref={parentRef} className="w-full h-fit overflow-x-hidden">
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
            belowPara="Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit.Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers"
          />

          <div className="relative min-h-screen h-fit">
            <Image
              src={background}
              className="fixed top-0 -z-10 left-0 w-full h-full object-cover"
              alt=""
            />

            <div ref={contactRef} className="w-screen absolute top-[100vh] h-[calc(100%-200vh)] opacity-0"></div>

            <div className={`${isInView? "fixed" : "absolute"} top-0 left-0 z-[10]`}>
              <TextBanner
                filledText={true}
              />
            </div>

            <div className={`${isInView? "fixed" : "absolute"} top-0 left-0 z-[50]`}>
              <TextBanner
                filledText={false}
              />
            </div>
            
            {!isInView &&
            <div className={`${isInView? "fixed" : "absolute"} bottom-0 left-0 z-[10]`}>
              <TextBanner
                filledText={true}
              />
            </div>}

            {!isInView &&
            <div className={`${isInView? "fixed" : "absolute"} bottom-0 left-0 z-[50]`}>
              <TextBanner
                filledText={false}
              />
            </div>}

            <div className="w-full h-fit flex pt-10 md:pt-0 flex-col md:flex-row flex-wrap md:gap-y-[5rem] z-[30] relative">

                <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                  <div 
                    style={{
                      transform: `translate(-${movementX}rem, ${movementY}rem)`,
                      transition: "transform 0.2s",
                    }}
                    className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                  >
                    <Image
                      src={bubble1}
                      className="w-full h-fit"
                      alt="bubble"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                  <div 
                    style={{
                      transform: `translate(${movementX}rem, ${movementY+2}rem)`,
                      transition: "transform 0.2s",
                    }}
                    className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                  >
                    <Image
                      src={bubble2}
                      className="w-full h-fit"
                      alt="bubble"
                    />
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
                    <Image
                      src={bubble3}
                      className="w-full h-fit"
                      alt="bubble"
                    />
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
                    <Image
                      src={bubble4}
                      className="w-full h-fit"
                      alt="bubble"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-start md:justify-center">
                  <div 
                    style={{
                      transform: `translate(${movementX+1}rem, ${movementY}rem)`,
                      transition: "transform 0.2s",
                    }}
                    className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                  >
                    <Image
                      src={bubble5}
                      className="w-full h-fit"
                      alt="bubble"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                  <div 
                    style={{
                      transform: `translate(-${movementX}rem, ${movementY-1}rem)`,
                      transition: "transform 0.2s",
                    }}
                    className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                  >
                    <Image
                      src={bubble6}
                      className="w-full h-fit"
                      alt="bubble"
                    />
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
                    <Image
                      src={bubble7}
                      className="w-full h-fit"
                      alt="bubble"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 py-5 px-5 md:px-0 md:py-0 md:h-[50vh] relative flex items-center justify-end md:justify-center">
                  <div 
                    style={{
                      transform: `translate(-${movementX-2}rem, ${movementY}rem)`,
                      transition: "transform 0.2s",
                    }}
                    className="rounded-full bg-transparent w-56 md:w-80 aspect-square "
                  >
                    <Image
                      src={bubble8}
                      className="w-full h-fit"
                      alt="bubble"
                    />
                  </div>
                </div>
            </div>
            
            <div className="w-full px-5 py-20 flex flex-col items-center justify-center gap-6">
                <p className="text-sm md:text-[1.175rem] font-[TTChocolates] text-white text-opacity-90 text-center max-w-[57rem]">
                  Availability of 24Hrs Wi-Fi internet access in the campus with 205 mbps speed and Comprehensive e-learning environment provided in the campus, enables all the students and faculty members to be connected which is essential for effective learning.
                </p>
                <p className="text-sm md:text-[1.175rem] font-[TTChocolates] text-white text-opacity-90 text-center max-w-[55rem]">
                  Our Digital library has over 5800+ e-books available round the clock through a FTP server on the intranet. Students can access the material and books anytime from anywhere on the campus.
                </p>
            </div>
          </div>
        </div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default Sports;