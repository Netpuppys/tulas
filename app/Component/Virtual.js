"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { TbView360Number } from "react-icons/tb";
import { UtmContext } from "@/component/utmParams";
function Virtual() {
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="py-8 md:py-24 h-fit w-full flex flex-col justify-center items-center px-4 md:px-[10%]">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-16">
        <Link
          href={`/virtual-tour/index.html${utmParams}`}
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
            Dehradun, the capital city of Uttarakhand, boasts excellent
            connectivity by road, rail, and air, making it a breeze to access
            from most parts of India. Located just 235 km from New Delhi, it’s a
            convenient getaway for travelers. Whether it’s summer, winter, or
            the monsoon season, Dehradun welcomes you with open arms all year
            round.
          </h5>
          <br />
          <h6 className="text-[#007A83] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolates]">
            Nestled in this vibrant city is Tula's campus, a perfect blend of
            serene surroundings and modern amenities. The campus offers not just
            a place to study but a gateway to endless opportunities. With
            Dehradun’s seamless connectivity, your journey to Tula's is as
            effortless as the enriching experience that awaits you here.
          </h6>
          <br />

          <h5 className="text-black font-[TTChocolatesBold] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)]">
            Experience a virtual walkthrough of our campus with our 360-degree
            tour.
            {/* <br />
            <br />
            <Link href="/virtual-tour/index.html">Read More</Link> */}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Virtual;
