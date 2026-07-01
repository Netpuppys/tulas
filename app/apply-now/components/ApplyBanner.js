"use client";

import Image from "next/image";

export default function ApplyBanner() {
  return (
    <div className="w-full">
      
      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image
          src="/landingPage/landingwhy-desktop-cropped.jpg" // replace with your desktop image
          alt="Banner Desktop"
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full pt-8">
        <Image
          src="/landingPage/landingwhy-desktop.jpg" // replace with your mobile image
          alt="Banner Mobile"
          width={768}
          height={1000}
          className="w-full h-auto"
          priority
        />
      </div>

    </div>
  );
}