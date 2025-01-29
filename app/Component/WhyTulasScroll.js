"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollTulas from "../../public/Homepage/ScrollSection/WhyTulas.png";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMobile } from "@/component/IsMobileContext";
import ComputerCenter from "../../public/Homepage/ScrollSection/ComputerCenter.png";
const title = "15 REASONS TO CHOOSE TULA’S";
// const paragraph =
//   "The Institute provides excellent infrastructural and ICT facilities with well-equipped laboratories, a modern computer centre, spacious and well-furnished classrooms, seminar hall, library, workshop, and fully airconditioned & spacious auditorium.";
const images = [
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-9.png",
    title: "Ranking",
    text: "Ranked among the Top 50 Private Colleges in India for 8 consecutive years.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-4.png",
    title: "Faculty",
    text: "Highly esteemed faculty recognized for innovation in teaching, novel research, and patents.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-2+(1).png",
    title: "Incubator",
    text: "Tula’s Technology Business Incubator Foundation (TTBIF) approved by MSME & StartUP Uttarakhand for innovation and startups.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-3+(1).png",
    title: "Placement",
    text: "700+ campus placement drives and 25+ industrial tie-ups ensuring high-quality recruitment opportunities.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-5.png",
    title: "Alumni",
    text: "A global network of 7,000+ successful alumni.",
  },
  {
    src: ComputerCenter,
    title: "Infrastructure",
    text: "ICT facilities with modern labs, classrooms, and air-conditioned auditoriums.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-1+(1).png",
    title: "Patents & Awards",
    text: "2000+ highly cited research papers, 30+ patents, 15+ government-funded projects, and 20+ prestigious awards.",
  },

  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-6.png",
    title: "NCC",
    text: "NCC 29 UK battalion at Tula’s led by the Government of India, Ministry of Defence.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-7.png",
    title: "FDPs & IEEE",
    text: "100+ FDPs and IEEE conferences conducted annually",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-8.png",
    title: "Library",
    text: "Library with 70,000+ books, 2,500+ journals,1,500+ recorded lectures and excellent digital resources.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image+(1).png",
    title: "CIRE",
    text: "Industry-Supported Center for Innovation, Research & Entrepreneurship (CIRE).",
  },

  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-10.png",
    title: "NSS",
    text: "NSS Unit at Tula’s led by the Government of India, Ministry of Youth Affairs & Sports.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-11.png",
    title: "Medical assistance",
    text: "24×7 on-campus medical assistance with qualified doctors and medical insurance for all.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-12.png",
    title: "Sports",
    text: "Comprehensive indoor and outdoor sports infrastructure.",
  },
  {
    src: "https://tulas-assets.s3.ap-south-1.amazonaws.com/why-tulas/image-13.png",
    title: "Yoga Kendra",
    text: "Heartfulness Yoga Kendra for mindfulness and wellness.",
  },
];

function WhyTulasScroll({ parentRef }) {
  // const scrollRef = useRef();
  const childRef = useRef(null);
  const [index, setIndex] = useState(0);
  // const [width, setWidth] = useState(352);
  const [scrollY, setScrollY] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const { isMobile } = useMobile();
  const [windowWidth, setWindowWidth] = useState(0);
  const [changePositionValue, setChangePositionValue] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize(); // Set initial width
      window.addEventListener("resize", handleResize); // Update on resize

      return () => window.removeEventListener("resize", handleResize); // Cleanup
    }
  }, []);
  const width = isMobile ? windowWidth - 96 : windowWidth / 5;
  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && childRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;
        const childTop = childRef.current.getBoundingClientRect().top;

        const positionFromTop = childTop - parentTop;
        setDistanceFromTop(positionFromTop);

        const value = Math.max(window.scrollY - positionFromTop, 0);
        const clipValue = Math.max(100, value);
        setScrollY(value);

        setComponentHeight(childRef.current.offsetHeight);

        document.querySelector(".section").style.clipPath = `circle(${Math.max(
          100,
          clipValue
        )}px at center center)`;

        document.querySelector(".innerText").style.paddingLeft = `${
          100 - value / 8
        }%`;

        // Rotate the image based on scroll value
        const rotationDegree = (value % 360) / 10;
        document.querySelector(
          ".rotatingImage"
        ).style.transform = `rotate(${rotationDegree}deg)`;

        // Reduce opacity of the image based on scroll value
        const opacityValue = Math.max(1 - value / 1000, 0); // Adjust 1000 to control the rate of opacity reduction
        document.querySelector(".rotatingImage").style.opacity = opacityValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleForwardClick = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleBackClick = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const changePosition = () => {
    if (typeof window !== "undefined") {
      // if (!window) {
      //   return;
      // }
      const compHeight = window.innerHeight * 3;
      if (scrollY > 0 && scrollY < compHeight) {
        // console.log("true");
        return true;
      }

      // console.log("false");
      return false;
    }
  };

  return (
    <div className="bg-white w-full h-full">
      <div ref={childRef} className="relative w-full min-h-[300vh]">
        <div
          className={`${
            changePosition() ? "fixed" : "absolute"
          } w-full z-40 top-0 h-screen flex justify-center items-center pointer-events-none`}
        >
          <Image
            src={ScrollTulas}
            alt=""
            className="z-10 w-fit h-[350px] rotatingImage"
          />
        </div>

        <section
          style={{ clipPath: "circle(100px at center center)" }}
          className={`${
            changePosition() ? "fixed" : "absolute"
          } top-0 w-full h-screen flex clip-circle-50px section backgroundScroll`}
        >
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <h3 className="mt-10 md:mt-[12vh] font-[CarotSlab] px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-white w-full whitespace-nowrap absolute top-0  z-10 pt-10 text-center">
              {title}
            </h3>
            {/* card scroll btns */}
            <div className="absolute w-fit top-[50%] -translate-y-1/2 z-30 mt-[30vh] md:mt-0 mx-auto  md:ml-0 md:mr-auto md:left-0 flex items-center justify-start">
              <div className="flex w-full md:w-40 md:flex-col text-[30px] gap-3 items-center justify-center">
                <button
                  className={`pointer-events-auto aspect-square p-3 rounded-full border-2 border-white text-white shadow-2xl ${
                    index === 0
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-white hover:text-[#007A83]"
                  }`}
                  onClick={handleForwardClick}
                  disabled={index === 0}
                >
                  <IoIosArrowBack />
                </button>
                <button
                  className={`pointer-events-auto aspect-square p-3 rounded-full border-2 border-white bg-white text-[#007A83] shadow-2xl ${
                    index === images.length - 1
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-transparent hover:text-white"
                  }`}
                  onClick={handleBackClick}
                  disabled={index === images.length - 1}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>

            {/* cards container */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(100%-10rem)] right-0 absolute py-10 innerText">
              <div
                style={{
                  transform: `translateX(-${index * (width + 48)}px)`,
                  transition: "transform 0.3s ease-in-out",
                }}
                className="w-fit"
              >
                <div className="flex w-fit h-fit gap-12">
                  {images.map((image, index) => (
                    <div
                      // ref={scrollRef}
                      key={index}
                      className="group relative flex flex-col items-center justify-center w-[calc(100vw-96px)] md:w-[20vw] shadow-lg transform transition-all duration-500 md:hover:scale-110"
                    >
                      <Image
                        src={image.src}
                        alt=""
                        className="z-20 rounded-xl md:rounded-3xl object-cover bg-[#3D001B] w-full h-full aspect-square"
                        layout="responsive"
                        width={1000}
                        height={1000}
                      />
                      <div className="w-full opacity-100 h-full bg-gradient-custom-black absolute bottom-0 left-0 rounded-xl md:rounded-3xl z-20"></div>
                      {/* <div className="absolute inset-0 bg-[#760135] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div> */}
                      <div className="text-white flex flex-col absolute z-30 w-fit p-2 bottom-[42px] translate-y-[100%]">
                        <h2 className="text-center font-[TTChocolatesBold] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)]">
                          {image.title}
                        </h2>
                        <h6 className="font-[TTChocolates] md:hidden group-hover:block text-center text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,0.9vw,45px)]">
                          {image.text}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyTulasScroll;
