import React from "react";
import Image from "next/image";
import TulasLogo from "../../public/Homepage/Virtual/TulasLogo.png";
import Link from "next/link";
function Virtual() {
  return (
    <div className="py-8 md:py-0 md:min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-[10%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:gap-16">
        <div className="w-[60%] md:w-[30%] h-full">
          <Image src={TulasLogo} alt="" className="w-full h-fit" />
        </div>
        <div className="w-full md:w-[70%] px-4 py-4 md:px-8 md:py-8 border-t-2 md:border-t-0 md:border-l-2 border-black font-[TTChocolates]">
          <h5 className="text-black text-[18px] md:text-[20px]">
            Being the capital city, Dehradun is well-connected by roads, rail
            and air and is easily accessible from most parts of the country. It
            is 235 km away from India’s capital, New Delhi. Dehradun is easy to
            reach and an accessible destination that you can visit any time of
            the year.
          </h5>
          <br />
          <h6 className="text-[#007A83] text-[20px] font-[TTChocolates]">
            Being the capital city, Dehradun is well-connected by roads, rail
            and air and is easily accessible from most parts of the country. It
            is 235 km away from India’s capital, New Delhi. Dehradun is easy to
            reach and an accessible destination that you can visit any time of
            the year.
          </h6>
          <br />

          <h5 className="text-black font-[TTChocolatesBold] text-[20px]">
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
