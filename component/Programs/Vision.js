import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function Vision({sections}) {
  
  return (
    <div>
      <div className="pt-8 md:pt-20 px-3 md:px-0 w-full md:w-[90%] mx-auto bg-transparent h-fit">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 md:gap-0 md:flex-row mb-8 md:mb-20 justify-between w-full h-fit items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } `}
          >
            <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
              <div className="w-full block">
                <h3 className="px-4 md:px-10 text-white font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
                  {section.title}
                </h3>
                <br />
                <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
                  {section.description}
                </h4>
              </div>
            </Fade>
            <Fade className="w-full md:w-[45%]">
              <Image
                src={section.image}
                alt=""
                className="w-full h-fit rounded-xl md:rounded-3xl"
              />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vision;
