import Image from "next/image";
import React from "react";

function Placementbanner({ image, mobileImage, title, titleColor, description }) {
  return (
<div className="relative w-full pt-[100px] md:pt-[120px]">
  {/* Banner Image */}
  <Image
    src={mobileImage || image}
    alt=""
    className="w-full h-auto object-cover block md:hidden mt-5"
  />
  <Image
    src={image}
    alt=""
    className="w-full h-auto object-cover hidden md:block"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h3 className="text-white font-[CarotSlab] text-[clamp(16px,6vw,48px)] leading-tight drop-shadow-lg">
      {title} <span className="text-[#760135]">{titleColor}</span>
    </h3>
    <h4 className="text-white font-[TTChocolates] text-[clamp(12px,4vw,24px)] leading-tight drop-shadow-lg">
      {description}
    </h4>
  </div>
</div>

  );
}

export default Placementbanner;
