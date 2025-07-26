import React from "react";
import logo1 from "../../public/Homepage/AccreditationLogo/1.png";
import logo2 from "../../public/Homepage/AccreditationLogo/2.png";
import logo3 from "../../public/Homepage/AccreditationLogo/3.png";
import logo4 from "../../public/Homepage/AccreditationLogo/4.png";
import logo5 from "../../public/Homepage/AccreditationLogo/5.png";
import logo6 from "../../public/Homepage/AccreditationLogo/6.png";
import logo7 from "../../public/Homepage/AccreditationLogo/7.png";
import Image from "next/image";

function AccreditationLogo() {
  const crouselImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="pt-8 md:pt-[3%] bg-white w-full h-fit flex flex-col items-center justify-center relative">
      <h3 className="text-[#760135] font-[CarotSlab] text-center px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Affiliations & Accreditations
      </h3>
      {/* Swiper for image carousel */}
      <div className="w-full md:w-[95%] mx-auto flex items-center justify-around flex-wrap">
        {crouselImages.map((group, index) => (
          <Image
            src={group}
            key={index}
            loading="lazy"
            alt="Top Recruiter"
            className="w-[29.33%] md:w-[11%] h-fit object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default AccreditationLogo;
