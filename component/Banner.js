import Image from "next/image";
import React from "react";

function Banner({ image, belowTitle, belowPara, title, description }) {
  return (
    <div className="h-screen w-full">
      <div className="h-[71vh] w-full relative">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <div className="bottom-4 md:bottom-10 z-10 absolute mx-4 md:ml-16">
          <h3 className="text-[38px] md:text-[60px] text-white z-10 font-[CarotSlab]">
            {title}
          </h3>
          <h4 className="w-full md:w-[50%] text-sm md:text-lg font-[TTChocolates]">
            {description}
          </h4>
        </div>
      </div>
      <div className="h-[29vh] w-full flex flex-col justify-center max-w-[735px] px-4 mx-auto">
        <h3 className="font-[CarotSlab] font-medium text-4xl text-[#760135] text-left mb-3">
          {belowTitle}
        </h3>
        <h4 className="font-[TTChocolates] text-xl text-[#404040]">
          {belowPara}
        </h4>
      </div>
    </div>
  );
}

export default Banner;
