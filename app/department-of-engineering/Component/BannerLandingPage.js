import React, { useRef, useContext } from "react";
import Image from "next/image";
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";

function BannerLandingPage({ bannerImg, bannerImgDesktop,title='btech computer science',highlight=<>Where Engineering meets </>, change=false }) {
  const scrollRef = useRef(null);
  const { utmParams } = useContext(UtmContext);

  return (
    <>
      {/* Banner */}
      <div className={`w-full ${change ? 'pt-[110px] md:pt-0 md:min-h-screen' :'pt-[110px] md:pt-[120px]'}  flex justify-center overflow-hidden`}>
        <div className="relative ">

          {/* Mobile Banner */}
          <Image
            src={bannerImg}
            alt="Banner"
            className="w-full h-full md:hidden"
            width={0}
  height={0}
          />

          {/* Desktop Banner */}
          <Image
            src={bannerImgDesktop}
            alt="Banner"
            width={0}
  height={0}
            className={`hidden md:block w-full ${change ? 'h-full': 'h-[690px]'}  object-cover`}
            priority
          />

      {change &&
      <div class="text-black absolute top-[20%] md:top-[30%] max-w-[270px] md:max-w-[370px] xl:max-w-[450px] left-[45%] md:left-[30%] lg:left-[37%] w-full">
        <h1 className='text-xl md:text-2xl xl:text-4xl capitalize  font-bold'>{title} 
          <hr className='h-0.5 w-[80%] bg-orange-500 xl:my-2' />
          <span className='text-xs md:text-lg xl:text-xl text-orange-500 '>
          {highlight}</span> </h1>
        </div>
      }

          {/* Desktop Form Overlay */}
          <div className={`hidden ${change ? 'bottom-[0%] -right-10 lg:flex': 'inset-0 md:flex'}  absolute items-center justify-end pr-0`}>
            <div className="w-[600px] ">
              
              <LandingFormNew
                course={3}
                formHeading={"Start Your Btech Application"}
                thankYOu={`/department-of-engineering/btech/thank-you/${utmParams}`}
              />

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Form (unchanged) */}
      <div ref={scrollRef} className={`${change ? " lg:hidden" :'md:hidden'} `}>
        <LandingFormNew
          course={3}
          formHeading={"MBA Admissions Open 2026"}
          thankYOu={`/department-of-engineering/btech/thank-you/${utmParams}`}
        />
      </div>
    </>
  );
}

export default BannerLandingPage;