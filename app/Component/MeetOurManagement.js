"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollTulas from "../../public/Homepage/ScrollSection/WhyTulas.png";
import Image from "next/image";
import sunil from "../../public/About/sunil.png";
import silky from "../../public/About/silky.png";
import raghav from "../../public/About/raghav.png";
import raunak from "../../public/About/raunak.png";
import sandip from "../../public/About/sandip.png";
import sunilSemwal from "../../public/About/sunilSemwal.png";
import nishant from "../../public/About/nishant.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMobile } from "@/component/IsMobileContext";
import ComputerCenter from "../../public/Homepage/ScrollSection/ComputerCenter.png";
import { useInView } from "react-intersection-observer";

const title = "15 REASONS TO CHOOSE TULA'S";
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

const cards = [
  {
    image: sunil,
    name: "Sunil Kumar Jain",
    profile: "Chairman - Tula's Group",
    description:
      "True leadership lies in empowering others to dream more, learn more, and achieve more.",
  },
  {
    image: silky,
    name: "Silky Jain Marwah",
    profile: "Executive Director",
    description:
      "Education isn't just about lessons, it's about shaping lives and inspiring change.",
  },
  {
    image: raunak,
    name: "Raunak Jain",
    profile: "Vice Chairman",
    description:
      "Greatness begins when we push boundaries and strive for excellence every single day.",
  },
  {
    image: raghav,
    name: "Dr. Raghav Garg",
    profile: "Vice President Technology",
    description:
      "Technology is not the future of education, it's the present, driving innovation at every step.",
  },
];

const cardsFaculty = [
  {
    image: nishant,
    name: "Prof. Nishant Saxena",
    profile: "Dean Academics",
    id: 4,
    description:
      "Academic success isn't about grades, it's about creating thinkers who make a difference.",
  },
  {
    image: sandip,
    id: 1,
    name: "Prof. Sandip Vijay",
    profile: "Director",
    description:
      "A great institution doesn't just teach—it transforms, empowers, and inspires.",
  },
  {
    image: sunilSemwal,
    name: "Dr. Sunil Semwal",
    id: 3,
    profile: "Dean R&D",
    description:
      "Research bridges the gap between imagination and reality, creating solutions that shape the world.",
  },
];

const InternalSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative z-20">
      {/* <div className="w-fit h-fit relative">
                <p className="font-[carotSlab] text-[2.6rem] text-center leading-tight font-medium ">
                    Meet Out Management
                </p>
                <div className="w-[60%] left-[20%] bg-[#E69706] rounded-full h-[0.25rem] absolute top-full"></div>
            </div> */}
      <div className="font-[CarotSlab] text-center py-8 md:py-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-white w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Meet Out Management
        <div className="h-[4px] bg-[#E69706] w-[80%] mx-auto rounded-full"></div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-[3%]">
        <div className="w-[calc(100%-2rem)] md:w-[70%] mx-auto flex flex-row flex-wrap md:flex-row gap-4 md:gap-[2%] items-start justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col w-[calc(50%-1rem)] md:w-[20%] hover:opacity-90 grid-item md:hover:scale-105 transition-all ease-linear duration-300 cursor-pointer`}
            >
              <div className="rounded-xl relative image-overlay mb-2 w-full h-full object-cover">
                <Image
                  src={card.image}
                  alt=""
                  className="rounded-xl top-0 image-overlay w-full h-full object-cover"
                />
                <div className="rounded-xl absolute top-0 flip-image w-full h-full bg-[#760135] flex items-center justify-center px-2 md:px-[5%]">
                  <h6 className="textShow relative z-10 text-center text-wrap font-[MontserratLight] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-white">
                    {card.description}
                  </h6>
                </div>
              </div>
              <h2 className="font-[MontserratMedium] mt-2 text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.5vw,75px)] leading-[1.2] text-center">
                {card.name}
              </h2>
              <h4 className="font-[MontserratLight] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-center">
                {card.profile}
              </h4>
            </div>
          ))}
        </div>

        <div className="w-[calc(100%-2rem)] md:w-[70%] mx-auto flex flex-row flex-wrap md:flex-row gap-4 md:gap-[2%] items-start justify-center pb-8 md:pb-[3%]">
          {cardsFaculty.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col w-[calc(50%-1rem)] md:w-[20%] hover:opacity-90 grid-item md:hover:scale-105 transition-all ease-linear duration-300 cursor-pointer`}
            >
              <div className="rounded-xl relative image-overlay mb-2 w-full h-full object-cover">
                <Image
                  src={card.image}
                  alt=""
                  className="rounded-xl top-0 image-overlay w-full h-full object-cover"
                />
                <div className="rounded-xl absolute top-0 flip-image w-full h-full bg-[#760135] flex items-center justify-center px-2 md:px-[5%]">
                  <h6 className="textShow relative z-10 text-center text-wrap font-[MontserratLight] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-white">
                    {card.description}
                  </h6>
                </div>
              </div>
              <h2 className="font-[MontserratMedium] mt-2 text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.5vw,75px)] leading-tight text-center">
                {card.name}
              </h2>
              <h4 className="font-[MontserratLight] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-center">
                {card.profile}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function MeetOurManagement({ parentRef }) {
  // const scrollRef = useRef();
  const childRef = useRef(null);

  const { isMobile } = useMobile();

  const [clipPathValue, setClipPathValue] = useState(25); // Initial clip-path value

  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Thresholds: 0.0, 0.1, ..., 1.0
  });

  useEffect(() => {
    if (inView && entry) {
      const scrollProgress = entry.intersectionRatio; // Intersection ratio ranges from 0 to 1
      setClipPathValue(25 + scrollProgress * 70); // Dynamically calculate the clip-path value
    }
  }, [entry, inView]);

  return (
    <div className="bg-white w-full h-full">
      <div ref={childRef} className="relative w-full h-fit min-h-[100vh]">
        <section
          style={{
            clipPath: `circle(${
              clipPathValue * (isMobile ? 1.5 : 1)
            }% at center center)`,
            transition: "clip-path 0.3s ease-in-out", // Smooth transition for clip-path
          }}
          ref={ref}
          className={`top-0 w-full h-fit flex clip-circle-50px section backgroundScroll`}
        >
          <InternalSection />
        </section>

        {/* <section
            style={{
                clipPath: `circle(${clipPathValue*1.5}% at center center)`,
                transition: "clip-path 0.3s ease-in-out", // Smooth transition for clip-path
            }}
            ref={ref}
            className={`top-0 w-full h-fit flex md:hidden clip-circle-50px section backgroundScroll`}
        >
            <InternalSection />
        </section> */}

        {/* <div className="hidden bg-[#760135] w-full h-fit">
            <InternalSection />
        </div> */}
      </div>
    </div>
  );
}

export default MeetOurManagement;
