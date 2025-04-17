"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import sunil from "../../public/About/sunil.png";
import silky from "../../public/About/silky.png";
import raghav from "../../public/About/raghav.png";
import raunak from "../../public/About/raunak.png";
import shailendra from "../../public/About/shailendra.png";
import deepak from "../../public/About/deepak.png";
import vijay from "../../public/About/vijay.png";
import sunilSemwal from "../../public/About/sunilSemwal.png";
import nishant from "../../public/About/nishant.png";
import { useMobile } from "@/component/IsMobileContext";
import { useInView } from "react-intersection-observer";

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
    image: shailendra,
    id: 1,
    name: "Prof. (Dr.) Shailendra Kumar Tiwary",
    profile: "Director",
    description:
      "Tula’s Institute aspires to prepare tomorrow’s successful professionals, leaders and innovators",
  },
  {
    image: deepak,
    id: 2,
    name: "Dr. Deepak Nanda",
    profile: "Director of Pharmacy",
    description:
      "Tula’s Institute of Pharmacy remains steadfast in its mission to prepare students for the dynamic and ever-evolving field of pharmacy. ",
  },
  {
    image: vijay,
    id: 3,
    name: "Dr. Vijay Kumar Upadhyay",
    profile: "Registrar",
    description:
      "We believe education will play a significant role in accomplishing future productivity, economic goals, and higher standards of living throughout the world.",
  },
  {
    image: nishant,
    name: "Prof. Nishant Saxena",
    profile: "Dean Academics",
    id: 4,
    description:
      "Academic success isn't about grades, it's about creating thinkers who make a difference.",
  },
  {
    image: sunilSemwal,
    name: "Dr. Sunil Semwal",
    id: 5,
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
              className={`flex flex-col w-[calc(50%-1rem)] md:w-[18%] hover:opacity-90 grid-item md:hover:scale-105 transition-all ease-linear duration-300 cursor-pointer`}
            >
              <div className="rounded-xl relative image-overlay mb-2 w-full h-full object-cover">
                <Image
                  src={card.image}
                  alt=""
                  className="rounded-xl top-0 image-overlay w-full h-full object-cover"
                />
                <div className="rounded-xl absolute top-0 flip-image w-full h-full bg-[#760135] flex items-center justify-center px-2 md:px-[5%]">
                  <h6 className="textShow relative z-10 text-center text-wrap font-[TTChocolates] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-white">
                    {card.description}TTChocolates
                  </h6>
                </div>
              </div>
              <h2 className="font-[TTChocolatesMedium] mt-2 text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.4vw,75px)] leading-[1.2] text-center">
                {card.name}
              </h2>
              <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-center">
                {card.profile}
              </h4>
            </div>
          ))}
        </div>

        <div className="w-[calc(100%-2rem)] md:w-[70%] mx-auto flex flex-row flex-wrap md:flex-row gap-4 md:gap-[2%] items-start justify-center pb-8 md:pb-[3%]">
          {cardsFaculty.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col w-[calc(50%-1rem)] md:w-[18%] hover:opacity-90 grid-item md:hover:scale-105 transition-all ease-linear duration-300 cursor-pointer`}
            >
              <div className="rounded-xl relative image-overlay mb-2 w-full h-full object-cover">
                <Image
                  src={card.image}
                  alt=""
                  className="rounded-xl top-0 image-overlay w-full h-full object-cover"
                />
                <div className="rounded-xl absolute top-0 flip-image w-full h-full bg-[#760135] flex items-center justify-center px-2 md:px-[5%]">
                  <h6 className="textShow relative z-10 text-center text-wrap font-[TTChocolates] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-white">
                    {card.description}
                  </h6>
                </div>
              </div>
              <h2 className="font-[TTChocolatesMedium] mt-2 text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.4vw,75px)] leading-tight text-center">
                {card.name}
              </h2>
              <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-center">
                {card.profile}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function MeetOurManagement() {
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
      </div>
    </div>
  );
}

export default MeetOurManagement;
