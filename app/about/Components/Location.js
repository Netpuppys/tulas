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
      className="w-full py-14 h-fit bg-white text-black flex justify-center items-center gap-8 px-3 overflow-hidden"
    >
      <Image
        src={location}
        alt=""
        className={`transition-transform duration-1000 ${
          inView ? "animate-translateLeft" : "opacity-0"
        }`}
      />
      <h3
        className={`font-[CarotSlab] font-medium text-black text-[40px] transition-transform duration-1000 ${
          inView ? "animate-translateLeft" : "opacity-0"
        }`}
      >
        LOCATION
      </h3>
      <p
        className={`font-[TTChocolates] font-normal text-[#007A83] transition-transform duration-1000 text-[22px] px-20 max-w-[1000px] ${
          inView ? "animate-translateRight" : "opacity-0"
        }`}
      >
        Dehradun is located 255 km north of India’s capital New Delhi. The Doon
        Valley has a sub-tropical climate with moderate Winters, pleasant
        Spring, hot Summers and heavy Monsoons. Tula’s Institute is a friendly,
        welcoming place to study with a good reputation for offering outstanding
        support to our students for their holistic development.
      </p>
    </div>
  );
}

export default Location;
