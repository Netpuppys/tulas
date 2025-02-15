import React from "react";
import Image from "next/image";
import glance1 from "../../../public/graduate-school-of-business/mba/glance1.png";
import glance2 from "../../../public/graduate-school-of-business/mba/glance2.png";
import glance3 from "../../../public/graduate-school-of-business/mba/glance3.png";
import glance4 from "../../../public/graduate-school-of-business/mba/glance4.png";
import glance5 from "../../../public/graduate-school-of-business/mba/glance5.png";
import glance6 from "../../../public/graduate-school-of-business/mba/glance6.png";
function AtGlance() {
  const images = [glance1, glance2, glance3, glance4, glance5, glance6];
  return (
    <div className="pb-8 px-4 md:px-6 md:pb-20 flex flex-col items-center justify-center w-full">
      <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
        At a Glance
      </h8>
      <h4 className="px-8 md:px-0 w-full my-8 md:max-w-[55%] font-[MontserratLight] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
        Here’s a glimpse of life at Tula’s! From academic milestones to moments
        of pure fun, this is where students thrive, grow, and make lasting
        memories.
      </h4>
      <div className="w-[95%] md:w-[70%] flex flex-wrap md:gap-3">
        {images.map((card, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              index === 2 || index === 3
                ? "w-full md:w-[calc(33.33%-12px)]"
                : "w-1/2 md:w-[calc(33.33%-12px)]"
            }`}
          >
            <Image
              src={card}
              alt=""
              className="w-full h-fit hover:scale-110 transition-all duration-300 ease-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AtGlance;
