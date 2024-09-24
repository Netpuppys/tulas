import Image from "next/image";
import React from "react";

function BannerProgram({ image, title, titleColor, description }) {
  return (
    <div className="w-full z-40 px-4 md:px-16 bg-white">
      <div className="h-[80vh] md:h-[65vh] w-full relative">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover absolute rounded-3xl"
        />
      </div>
      <div className="-mt-[10vh] w-fit z-10 relative">
        <h3 className="text-[40px] md:text-[60px] text-black z-10 font-[CarotSlab]">
          {title} <span className="text-[#760135]">{titleColor}</span>
        </h3>
        <h4 className="w-full md:w-[50%] text-sm md:text-lg text-black font-[TTChocolates]">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default BannerProgram;
