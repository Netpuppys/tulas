import Image from "next/image";
import React from "react";
import location from "../../../public/About/location.png";
import { useInView } from "react-intersection-observer";

function Location() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });

  return (
    <div
      ref={ref}
      className="w-full py-14 h-fit bg-white text-black flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 md:px-3 overflow-hidden"
    >
      <Image
        src={location}
        alt=""
        className={` md:w-fit w-16 transition-transform duration-1000 ${
          inView ? "md:animate-translateLeft" : "opacity-0"
        }`}
      />
      <h3
        className={`font-[CarotSlab] font-medium text-black text-[30px] md:text-[40px] transition-transform duration-1000 ${
          inView ? "md:animate-translateLeft" : "opacity-0"
        }`}
      >
        LOCATION
      </h3>
      <p
        className={`md:font-[TTChocolates] font-[TTChocolatesBold] font-bold md:font-normal text-[#007A83] transition-transform duration-1000 leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] md:text-left px-10 md:px-20 max-w-[1000px] ${
          inView ? "md:animate-translateRight" : "opacity-0"
        }`}
      >
        Dehradun is located 255 Km north of India’s capital New Delhi. The Doon
        Valley has a sub-tropical climate with moderate winters, pleasant
        spring, hot summers and heavy monsoons. Tula’s Institute is a friendly,
        welcoming place to study with a good reputation for offering outstanding
        support to our students for their holistic development.
      </p>
    </div>
  );
}

export default Location;
