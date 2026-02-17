import React from "react";
import Image from "next/image";

function BannerLandingPage({ bannerImg }) {
  return (
    <div className="w-full pt-[110px] md:pt-[120px] flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[1920px]">
        <Image
          src={bannerImg}
          alt="Banner"
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}


export default BannerLandingPage;
