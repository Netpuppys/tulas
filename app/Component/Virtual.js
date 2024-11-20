import React from "react";
import Link from "next/link";
import { TbView360Number } from "react-icons/tb";
function Virtual() {
  return (
    <div className="py-8 md:py-24 h-fit w-full flex flex-col justify-center items-center px-4 md:px-[10%]">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-16">
        <Link
          href="/virtual-tour/index.html"
          className="w-[80%] md:w-[30%] aspect-square relative bg-black rounded-2xl overflow-hidden mb-8 md:mb-0"
        >
          <iframe
            className="w-full h-full absolute opacity-40 bg-black"
            allow="autoplay"
            allowvr="true"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://s3.ap-south-1.amazonaws.com/tulas.edu/tour.html"
          />
          <div className="absolute flex flex-col justify-center w-full h-full text-center items-center">
            <TbView360Number className="text-white text-[80px]" />

            <h5
              className="text-[31px] text-white"
              style={{
                fontFamily: "Reem Kufi",
              }}
            >
              360 Degree Campus Tour
            </h5>
          </div>
        </Link>
        <div className="w-full md:w-[70%] px-4 py-4 md:px-8 md:py-8 border-t-2 md:border-t-0 md:border-l-2 border-black font-[TTChocolates]">
          <h5 className="text-black text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]">
            Being the capital city, Dehradun is well-connected by roads, rail
            and air and is easily accessible from most parts of the country. It
            is 235 km away from India’s capital, New Delhi. Dehradun is easy to
            reach and an accessible destination that you can visit any time of
            the year.
          </h5>
          <br />
          <h6 className="text-[#007A83] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates]">
            Being the capital city, Dehradun is well-connected by roads, rail
            and air and is easily accessible from most parts of the country. It
            is 235 km away from India’s capital, New Delhi. Dehradun is easy to
            reach and an accessible destination that you can visit any time of
            the year.
          </h6>
          <br />

          <h5 className="text-black font-[TTChocolatesBold] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]">
            Get a detailed tour of our campus through our 360 Degree Tour
            <br />
            <br />
            <Link href="/virtual-tour/index.html">Read More</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Virtual;
