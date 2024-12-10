import Image from "next/image";
import React from "react";

function Banner({ image, belowTitle, belowPara, title, description }) {
  return (
    <div className={`${(belowPara || belowTitle)? "md:min-h-screen" : ""}  w-full z-40 bg-white`}>
      <div className="h-[100vh] md:h-[79vh] w-full relative">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <div className="bottom-8 px-8 md:bottom-10 z-10 absolute ">
          <h3 className="font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)] text-white z-10 font-[CarotSlab]">
            {title}
          </h3>
          <h4 className="w-full md:w-[50%] text-white text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates]">
            {description}
          </h4>
        </div>
      </div>
      {(belowPara || belowTitle) && <div className="min-h-fit py-16 h-fit md:min-h-[21vh] w-full overflow-hidden flex flex-col justify-center max-w-[835px] px-8 mx-auto">
        <h3 className="text-2xl font-[CarotSlab] font-medium md:text-4xl text-[#760135] text-left mb-3">
          {belowTitle}
        </h3>
        <h4 className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates] text-[#404040]">
          {belowPara}
        </h4>
      </div>}
    </div>
  );
}

export default Banner;
