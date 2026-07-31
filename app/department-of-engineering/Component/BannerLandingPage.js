import React, { useRef, useContext } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ import added
import LandingFormNew from "./LandingFormNew";
import { UtmContext } from "@/component/utmParams";

function BannerLandingPage({
  bannerImg,
  bannerImgDesktop,
  title = "btech computer science",
  highlight = <>Where Engineering meets </>,
  change = false,
}) {
  const scrollRef = useRef(null);
  const { utmParams } = useContext(UtmContext);
  const pathname = usePathname();

  // ✅ Compute the thank‑you URL based on change
  const thankYouUrl = change
    ? `${pathname}/thank-you/${utmParams}`   // current route + /thank-you/ + utmParams
    : `/department-of-engineering/btech/thank-you/${utmParams}`;
console.log(title)

  return (
    <>
      {/* Banner */}
      <div
        className={`w-full ${
          change
            ? "pt-[110px] md:pt-0 md:min-h-screen"
            : "pt-[110px] md:pt-[120px]"
        } overflow-hidden`}
      >
        <div className="relative">
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
            className={`hidden md:block w-full ${
              change ? "h-full" : "h-[690px]"
            } object-cover`}
            priority
          />

          {change && (
            <div className="text-black absolute px-3 top-[20%] md:top-[28%] 5xl:top-[30%] max-w-[200px] md:max-w-[270px] xl:max-w-[300px] 4xl:max-w-[450px] left-[45%] md:left-[35%] lg:left-[40%] w-full">
              <h1 className="text-sm md:text-sm xl:text-2xl 4xl:text-4xl capitalize font-bold">
                {title}
                <hr className="h-0.5 w-[80%] bg-orange-500 xl:my-2" />
                <span className="text-[9px] sm:text-xs xl:text-md 2xl:text-lg md:max-w-auto text-orange-500">
                  {highlight}
                </span>
              </h1>
            </div>
          )}

          {/* Desktop Form Overlay */}
          <div
            className={`hidden ${
              change
                ? "bottom-[0%] -right-10 xl:flex"
                : "inset-0 md:flex"
            } absolute items-center justify-end pr-0`}
          >
            <div className="w-[600px]">
              <LandingFormNew
                course={3}
                formHeading={"Start Your Btech Application"}
                thankYOu={thankYouUrl} // ✅ using computed URL
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Form */}
      <div
        ref={scrollRef}
        className={`${change ? "xl:hidden" : "md:hidden"}`}
      >
        <LandingFormNew
          course={3}
          formHeading={"MBA Admissions Open 2026"}
          thankYOu={thankYouUrl} // ✅ using computed URL
        />
      </div>
    </>
  );
}

export default BannerLandingPage;