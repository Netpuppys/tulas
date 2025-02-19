import React from "react";
import rankingIcon from "../../../public/graduate-school-of-business/mba/rankingIcon.png";
import alumniIcon from "../../../public/graduate-school-of-business/mba/alumniIcon.png";
import CIRE from "../../../public/graduate-school-of-business/mba/CIRE.png";
import placementIcon from "../../../public/graduate-school-of-business/mba/placementIcon.png";
import library from "../../../public/graduate-school-of-business/mba/library.png";
import incubator from "../../../public/graduate-school-of-business/mba/incubator.png";
import Image from "next/image";
function WhyChoose() {
  const whyData = [
    {
      icon: rankingIcon,
      title: "Rankings",
      description:
        "Ranked among the Top 50 Private Colleges in India for 8 consecutive years.",
    },
    {
      icon: alumniIcon,
      title: "Alumni",
      description: "A global network of 7,000+ successful alumni.",
    },
    {
      icon: CIRE,
      title: "CIRE",
      description:
        "Industry-Supported Center for Innovation, Research & Entrepreneurship (CIRE)",
    },
    {
      icon: placementIcon,
      title: "Placement",
      description:
        "700+ campus placement drives and 25+ industrial tie-ups ensuring high-quality recruitment opportunities.",
    },
    {
      icon: library,
      title: "Library",
      description:
        "Library with 70,000+ books, 2,500+ journals,1,500+ recorded lectures and excellent digital resources.",
    },
    {
      icon: incubator,
      title: "Incubator",
      description:
        "Tula’s Technology Business Incubator Foundation (TTBIF) approved by MSME & StartUP Uttarakhand for innovation and startups.",
    },
  ];
  return (
    <div className="px-4 md:px-6 flex flex-col items-center justify-center w-full">
      <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
        Why Choose TULA’s
      </h8>
      <div className="w-full h-fit mt-4 rounded-xl p-8 md:pt-[3%] bg-[#007A83]">
        <div className="flex flex-wrap gap-8 w-full md:w-[90%] mx-auto">
          {whyData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(33.33%-2rem)] mb-[2%] relative"
            >
              <div className="flex flex-col items-start w-full h-full">
                <div className="rounded-md px-4 md:px-10 font-semibold border-l-4">
                  <Image
                    src={card.icon}
                    alt=""
                    className="w-[90px] aspect-square"
                  />
                </div>
                <h3 className="text-[#FFFFFF] px-4 md:px-10 mt-4 leading-tight text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[TTChocolatesMedium] font-normal">
                  {card.title}
                </h3>
                <h3 className="text-[#FFFFFF] px-4 md:px-10 mt-2 text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-wrap font-[TTChocolates] font-normal">
                  {card.description}
                </h3>
              </div>
              <div className="bg-white w-[calc(100%-32px)] md:w-[calc(100%-80px)] mx-auto mt-2 h-[1px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
