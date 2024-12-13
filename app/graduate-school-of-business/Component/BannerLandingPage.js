import React from "react";
import IMG1 from "../../../public/graduate-school-of-business/mba/IMG1.webp";
import IMG2 from "../../../public/graduate-school-of-business/mba/IMG2.webp";
import IMG3 from "../../../public/graduate-school-of-business/mba/IMG3.webp";
import IMG4 from "../../../public/graduate-school-of-business/mba/IMG4.webp";
import IMG5 from "../../../public/graduate-school-of-business/mba/IMG5.webp";
import Image from "next/image";
function BannerLandingPage() {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];
  return (
    <div className="w-full h-screen overflow-hidden flex top-0 left-0">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className="w-1/3 bg-black md:hidden h-full cursor-pointer animate-decreaseWidth hover:animate-increaseWidth min-w-0 hover:w-2/3 overflow-hidden flex items-center justify-center relative"
        >
          <Image
            src={image}
            className="h-full opacity-40 object-cover w-full"
            alt=""
          />
        </div>
      ))}
      {images.map((image, index) => (
        <div
          key={index}
          className="w-1/3 bg-black h-full hidden cursor-pointer animate-decreaseWidth hover:animate-increaseWidth min-w-0 hover:w-2/3 overflow-hidden md:flex items-center justify-center relative"
        >
          <Image
            src={image}
            className="h-full opacity-40 object-cover w-full"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default BannerLandingPage;
