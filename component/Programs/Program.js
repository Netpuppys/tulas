import Image from "next/image";
import React from "react";
function Program({
  heading,
  content,
  sideImages,
  quotes,
  belowSpace = false,
  belowSpacequotes = false,
}) {
  return (
    <div className="w-full h-fit">
      <div className="w-[92%] mx-auto">
        {heading && (
          <h5 className="w-fit mx-auto text-[#353535] text-center px-4 py-8 md:py-[3%] leading-tight text-[clamp(10px,5.5vw,30px)] md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
            {heading}
            <div className="h-[4px] bg-[#007A83] w-[55%] mx-auto rounded-full"></div>
          </h5>
        )}
        <div
          className={`flex flex-col md:flex-row justify-center w-full items-start gap-4 md:gap-[2%] ${
            belowSpace ? "" : "pb-8 md:pb-[3%]"
          }  ${heading ? "" : "pt-8 md:pt-[3%]"}`}
        >
          {sideImages && (
            <Image
              src={sideImages[0]}
              alt=""
              className="w-full aspect-[1/1.5] md:aspect-auto object-cover md:w-[21%] rounded-lg"
            />
          )}
          <h5 className="w-full text-[#353535] md:w-[58%] px-4 text-justify mx-auto leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] font-normal">
            {content}
          </h5>
          {sideImages && (
            <Image
              src={sideImages[1]}
              alt=""
              className="w-full aspect-[1/1.5] md:aspect-auto object-cover md:w-[21%] rounded-lg"
            />
          )}
        </div>
        {quotes && (
          <h5
            className={`w-full ${
              belowSpacequotes ? "" : "pb-8 md:pb-[3%]"
            } text-[#353535] md:w-[70%] px-4 text-center mx-auto leading-tight text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] font-[LevSerif] font-normal italic`}
          >
            {quotes}
          </h5>
        )}
      </div>
    </div>
  );
}

export default Program;
