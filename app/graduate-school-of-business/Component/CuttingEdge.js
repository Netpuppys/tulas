import React from "react";
import mbaImage from "../../../public/graduate-school-of-business/mba/mbaImage.webp";
import cuttingEdgeBackground from "../../../public/graduate-school-of-business/mba/cuttingEdgeBackground.png";
import Image from "next/image";
import Accreditation from "@/app/Component/Accreditation";
function CuttingEdge({ scrollRef, heading, department }) {
  return (
    <div className="py-8 px-4 md:px-6 md:py-[4%] w-full flex flex-col justify-center items-center">
      <Image
        src={mbaImage}
        alt=""
        className="w-full md:max-w-[60vw] aspect-[1.3/1] md:aspect-auto object-cover rounded-xl -z-10 mx-auto h-fit -mb-4 md:-mb-[39px]"
      />
      <div className="relative w-[95%] md:w-full rounded-xl overflow-hidden z-20 h-full">
        <Image
          src={cuttingEdgeBackground}
          alt=""
          className="w-full absolute -z-10 h-full object-cover"
        />
        <div className="w-full h-full flex flex-col py-8 md:py-[4%] gap-8 items-center ">
          <h8 className="text-white px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
            {heading}
          </h8>
          {department && (
            <div className="flex items-start flex-wrap gap-y-8 w-[90%] mx-auto">
              {department.map((card, index) => (
                <div
                  key={index}
                  className="w-full md:w-[25%] items-start justify-start flex"
                >
                  <div className="flex gap-8 justify-start items-center w-full h-full">
                    <Image
                      src={card.icon}
                      alt=""
                      className="bg-white p-2 w-[65px] aspect-square rounded-xl"
                    />
                    <h3 className="text-[#FFFFFF] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[Helvetica] font-normal">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            style={{
              boxShadow:
                "10.677px 17.349px 33.364px 0px rgba(0, 122, 131, 0.51)",
            }}
            onClick={() =>
              scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className={`w-[calc(100%-32px)] md:w-[30%] mx-auto max-w-[400px] bg-[#007A83] text-[#FFFFFF] cursor-pointer py-3 rounded-[8px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold`}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col py-8 md:py-[2%] gap-4 items-center ">
        <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
          Our Recruiters
        </h8>
        <h4 className="px-8 text-center w-full font-[Helvetica] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-black">
          Give your career a boost with lucrative national & international
          internship and placement opportunities at Tula's Graduate School of
          Business.
        </h4>
      </div>
      <Accreditation />
    </div>
  );
}

export default CuttingEdge;
