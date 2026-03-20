import React from "react";
import Image from "next/image";
function BannerLandingPage({ bannerImg }) {
  return (
    <div className="w-full h-screen overflow-hidden flex top-0 left-0">
      <Image src={bannerImg} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default BannerLandingPage;
