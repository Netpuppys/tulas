import React, { useRef, useContext } from "react";
import Image from "next/image";
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";
import BcomLandingForm from "./BcomLandingForm";

function BcomBannerLandingPage({ bannerImg, bannerImgDesktop }) {
  const scrollRef = useRef(null);
  const { utmParams } = useContext(UtmContext);

  return (
    <>
      {/* Banner */}
      <div className="w-full pt-[110px] md:pt-[120px] flex justify-center overflow-hidden">
        <div className="relative w-full max-w-[1920px]">

          {/* Mobile Banner */}
          <Image
            src={bannerImg}
            alt="Banner"
            className="w-full h-auto md:hidden"
            priority
          />

          {/* Desktop Banner */}
          <Image
            src={bannerImgDesktop}
            alt="Banner"
            className="hidden md:block w-full h-[690px] object-cover"
            priority
          />

          {/* Desktop Form Overlay */}
          <div className="hidden md:flex absolute inset-0 items-center justify-end pr-0">
            <div className="w-[600px] ">
              
              <BcomLandingForm
                course={140}
                formHeading={"Start Your MBA Application"}
                thankYOu={`/school-of-law/ba-llb/thank-you/${utmParams}`}
              />

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Form (unchanged) */}
      <div ref={scrollRef} className="md:hidden">
        <BcomLandingForm
          course={140}
          formHeading={"MBA Admissions Open 2026"}
          thankYOu={`/school-of-law/ba-llb/thank-you/${utmParams}`}
        />
      </div>
    </>
  );
}

export default BcomBannerLandingPage;