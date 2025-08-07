import Image from "next/image";
import React from "react";

function NewBannerProgram({ image, mobileImage, title, titleColor, description }) {
  return (
    <div className="w-full h-[80vh] md:h-[100vh] relative">
      {/* Desktop Image */}
      <Image
        src={image}
        alt=""
        className="hidden md:block w-full h-full object-cover pt-[120px]"
      />

      {/* Mobile Image */}
      <Image
        src={mobileImage || image}
        alt=""
        className="block md:hidden w-full h-full object-cover pt-[120px]"
      />

      {/* Overlay content */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-end px-8 md:px-[2%] pt-[80px]">
        <h3 className="text-white z-10 font-[CarotSlab] leading-tight text-[clamp(10px,6.5vw,50px)] md:text-[clamp(10px,3vw,100px)] textShadowProgram font-normal">
          {title} <span className="text-[#760135]">{titleColor}</span>
        </h3>
        <h4 className="w-full text-white leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] font-normal">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default NewBannerProgram;
