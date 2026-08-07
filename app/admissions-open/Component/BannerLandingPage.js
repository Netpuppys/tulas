import React, { useRef, useContext } from "react";
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";

/**
 * Banner props may be either a statically imported image (an object with a
 * `.src`) or a plain path string, depending on the calling page. Accept both.
 */
const srcOf = (img) => (typeof img === "string" ? img : img?.src);

function BannerLandingPage({ bannerImg, bannerImgDesktop }) {
  const scrollRef = useRef(null);
  const { utmParams } = useContext(UtmContext);

  return (
    <>
      {/* Banner */}
      <div className="w-full pt-[110px] md:pt-[120px] flex justify-center overflow-hidden">
        <div className="relative w-full max-w-[1920px]">

          {/*
            Hero banner.

            This previously rendered TWO next/image tags -- one hidden with
            `md:hidden`, the other with `hidden md:block`. CSS display:none
            does not stop a browser downloading an image, so every visitor
            fetched BOTH the mobile and the desktop banner. Vercel logged
            matching request counts for the two files, confirming it.

            A single <picture> lets the browser pick one <source> and fetch
            only that file. Layout classes are preserved.
          */}
          <picture className="block w-full">
            <source media="(min-width: 768px)" srcSet={srcOf(bannerImgDesktop)} />
            <img
              src={srcOf(bannerImg)}
              alt="Banner"
              fetchPriority="high"
              decoding="async"
              className="block w-full h-auto md:h-[690px] md:object-cover"
            />
          </picture>

          {/* Desktop Form Overlay */}
          <div className="hidden md:flex absolute inset-0 items-center justify-end pr-0">
            <div className="w-[600px] ">
              
              <LandingFormNew
                // course={3}
                formHeading={"Admissions Open 2026"}
                thankYOu={`/admissions-open/thank-you/${utmParams}`}
              />

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Form (unchanged) */}
      <div ref={scrollRef} className="md:hidden">
        <LandingFormNew
          // course={3}
          formHeading={"Admissions Open 2026"}
          thankYOu={`/admissions-open/thank-you/${utmParams}`}
        />
      </div>
    </>
  );
}

export default BannerLandingPage;