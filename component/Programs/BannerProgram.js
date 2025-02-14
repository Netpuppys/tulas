import Image from "next/image";
import React from "react";

function BannerProgram({ image, title, titleColor, description }) {
  return (
    <div className="w-full h-[80vh] md:h-[100vh] z-40 relative bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_70.16%,rgba(0,0,0,0.80)_100%)]">
      <Image src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute bottom-4 md:bottom-[2%] px-8 md:px-[2%]  w-full z-20">
        <h3 className="w-fulll text-white z-10 font-[CarotSlab] leading-tight text-[clamp(10px,6.5vw,50px)] md:text-[clamp(10px,3vw,100px)] font-normal">
          {title} <span className="text-[#760135]">{titleColor}</span>
        </h3>
        <h4 className="w-full text-white leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] font-[MontserratLight] font-normal">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default BannerProgram;
