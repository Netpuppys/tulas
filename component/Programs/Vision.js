import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function Vision({ sections }) {
  return (
    <div>
      <div className="py-8 md:py-20 bg-transparent overflow-hidden px-3 md:px-0 w-full h-fit flex gap-8 md:gap-0 flex-col items-center justify-between">
        {sections.map((section, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });
          return (
            <div
              ref={ref}
              key={index}
              className={`flex flex-col gap-8 md:gap-0 md:flex-row ${
                sections.length === 1 ? "" : "mb-8 md:mb-20"
              } justify-between w-full md:w-[95%] h-fit items-center ${
                index % 2 !== 0
                  ? "md:flex-row-reverse md:mr-[5%]"
                  : "md:ml-[5%]"
              } `}
            >
              <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
                <div className="w-full block">
                  <h3 className="px-4 md:px-10 text-white font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[clamp(20px,2.5vw,50px)] border-l-4 border-white">
                    {section.title}
                  </h3>
                  <br />
                  <h5 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
                    {section.description}
                  </h5>
                </div>
              </Fade>
              <Fade className="w-full md:w-[45%]">
                <Image
                  src={section.image}
                  alt=""
                  className={`w-full h-fit  ${
                    inView
                      ? index % 2 !== 0
                        ? "md:animate-translateLeftImage rounded-xl md:rounded-none md:rounded-e-3xl"
                        : "md:animate-translateRightImage rounded-xl md:rounded-none md:rounded-s-3xl"
                      : "opacity-0 "
                  }`}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vision;
