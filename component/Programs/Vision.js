import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function Vision({ sections, color = false }) {
  return (
    <div>
      <div className="py-8 md:py-20 bg-transparent overflow-hidden px-8 md:px-0 w-full h-fit flex gap-8 md:gap-0 flex-col items-center justify-between">
        {sections.map((section, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });
          return (
            <div
              ref={ref}
              key={index}
              className={`flex flex-col gap-8 md:gap-0 md:flex-row mb-8 md:mb-20 last:mb-0 justify-between w-full md:w-[95%] h-fit items-center ${
                index % 2 !== 0
                  ? "md:flex-row-reverse md:mr-[5%]"
                  : "md:ml-[5%]"
              } `}
            >
              <div className="w-full md:px-0 md:w-[45%]">
                <div className="w-full block">
                  <h3
                    className={`px-4 md:px-10 ${
                      color
                        ? "text-black border-black"
                        : "text-white border-white"
                    } font-[TTChocolatesBold] rounded-md font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)] border-l-4 `}
                  >
                    {section.title}
                  </h3>
                  <br />
                  <h5
                    className={`text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates] ${
                      color ? "text-black" : "text-white"
                    }`}
                  >
                    {section.description}
                  </h5>
                </div>
              </div>
              <div className="w-full md:w-[45%]">
                {section.image && (
                  <Image
                    src={section.image}
                    alt=""
                    className={`w-full h-fit ${
                      inView
                        ? index % 2 !== 0
                          ? "md:animate-translateLeftImage rounded-xl md:rounded-none md:rounded-e-3xl"
                          : "md:animate-translateRightImage rounded-xl md:rounded-none md:rounded-s-3xl"
                        : "rounded-xl md:opacity-0"
                    }`}
                  />
                )}
                {!section.image && (
                  <div
                    className={`bg-black bg-opacity-40 w-full h-96  ${
                      inView
                        ? index % 2 !== 0
                          ? "md:animate-translateLeftImage rounded-xl md:rounded-none md:rounded-e-3xl"
                          : "md:animate-translateRightImage rounded-xl md:rounded-none md:rounded-s-3xl"
                        : "opacity-0 "
                    }`}
                  ></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vision;
