import Image from "next/image";
import React from "react";

function Journey({ heading, journey, journeyQuotes }) {
  return (
    <div className="px-4 md:px-6 flex flex-col items-center justify-center w-full">
      <h8 className="text-[#007A83] px-4 text-center text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)] font-[GoudyCatalogue] font-semibold">
        {heading}
      </h8>
      <div className="flex flex-wrap gap-4 w-full pt-8 md:pt-[3%] md:w-[95%] mx-auto">
        {journey.map((card, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row md:w-[calc(16.66%-1rem)] mb-[2%] relative"
          >
            <div className="flex flex-col justify- items-start w-full h-full">
              <div className="rounded-md px-4 font-semibold">
                <Image
                  src={card.icon}
                  alt=""
                  className="w-[80px] aspect-square"
                />
              </div>
              <h3 className="text-[#4E4E4E] px-4 mt-4 leading-tight text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1vw,45px)] text-wrap font-[TTChocolatesMedium] font-normal">
                {card.title}
              </h3>
              <h3 className="text-[#4E4E4E] px-4 mt-2 text-[clamp(10px,3.8vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-wrap font-[TTChocolates] font-normal">
                {card.description}
              </h3>
            </div>
            {journey.length - 1 != index && (
              <div className="bg-[#4E4E4E] border-dotted h-[1px] w-[calc(100%-32px)] md:w-[1px] md:h-auto mx-auto mt-2"></div>
            )}
          </div>
        ))}
      </div>
      <h8 className="text-[#353535] pt-8 md:pt-[1%] px-4 text-center text-[clamp(10px,4.5vw,50px)] leading-tight md:text-[clamp(10px,1.3vw,50px)] font-[LevSerif] font-normal italic">
        “{journeyQuotes}”
      </h8>
    </div>
  );
}

export default Journey;
