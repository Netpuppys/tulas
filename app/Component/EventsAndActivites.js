import React, { useRef } from "react";
import AlumniInteractionSession from "../../public/Homepage/Events/AlumniInteractionSession.webp";
import AlumniInteractionSessionFalguniGupta from "../../public/Homepage/Events/AlumniInteractionSessionFalguniGupta.webp";
import AlumniInteractionSessionGSB from "../../public/Homepage/Events/AlumniInteractionSessionGSB.webp";
import AndroidAppDevelopment from "../../public/Homepage/Events/AndroidAppDevelopment.webp";
import BakeryTraining from "../../public/Homepage/Events/BakeryTraining.webp";
import Image from "next/image";
function EventsAndActivites() {
  const swiperRef = useRef();
  const sports = [
    AlumniInteractionSession,
    AlumniInteractionSessionFalguniGupta,
    AlumniInteractionSessionGSB,
    AndroidAppDevelopment,
    BakeryTraining,
  ];

  return (
    <div className="flex bg-[#760135] mt-8 md:mt-[3%] flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-white w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Career & Skill Events at Tula's
        <div className="h-[4px] bg-white w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="py-6 flex gap-2 md:py-[3%] w-[90%] overflow-scroll">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="min-w-full max-w-full w-full md:min-w-10 md:w-[calc(20%-0.5rem)] flex flex-col md:flex-row gap-4"
          >
            <div className="relative p-2 overflow-hidden rounded-xl bg-white w-full h-full mx-auto">
              <div className="w-full h-full aspect-[2/1] flex flex-col justify-between">
                <Image
                  src={sport}
                  alt=""
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => (window.location.href = "/career-and-skill-events")}
        className="px-10 mb-6 md:mb-[3%] flex items-center bg-[#007A83] font-[TTChocolatesMedium] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14 hover:bg-white hover:shadow-lg hover:text-[#007A83] transition-all duration-300 ease-in-out"
      >
        See More Career & Skill Events
      </button>
    </div>
  );
}

export default EventsAndActivites;
