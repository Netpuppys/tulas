import Image from "next/image";
import React from "react";

function Banner({ image, belowTitle, belowPara, title, description }) {
  return (
    <div className="md:min-h-screen w-full z-40 bg-white">
      <div className="h-[80vh] md:h-[71vh] w-full relative">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <div className="bottom-4 md:bottom-10 z-10 absolute mx-4 md:ml-16">
          <h3 className="text-[40px] md:text-[60px] text-white z-10 font-[CarotSlab]">
            {title}
          </h3>
          <h4 className="w-full md:w-[50%] text-white text-sm md:text-lg font-[TTChocolates]">
            {description}
          </h4>
        </div>
      </div>
      <div className="min-h-fit py-8 md:py-20 h-fit md:min-h-[29vh] w-full overflow-hidden flex flex-col justify-center max-w-[835px] px-8 mx-auto">
        <h3 className="text-2xl font-[CarotSlab] font-medium md:text-4xl text-[#760135] text-left mb-3">
          {belowTitle}
        </h3>
        <h4 className="text-sm font-[TTChocolates] md:text-xl text-[#404040]">
          {belowPara}
        </h4>
      </div>
    </div>
  );
}

export default Banner;
