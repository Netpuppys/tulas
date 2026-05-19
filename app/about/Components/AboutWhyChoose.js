"use client";

import Image from "next/image";
import AboutPerks from "./AboutPerks";

import mbaimg1 from "../../../public/graduate-school-of-business-v2/mba/choosemba1.png";
import mbaimg2 from "../../../public/graduate-school-of-business-v2/mba/choosemba2.png";
import mbaimg3 from "../../../public/graduate-school-of-business-v2/mba/tulasstat1.png";
import mbaimg4 from "../../../public/graduate-school-of-business-v2/mba/tulasstat2.png";
import mbaimg5 from "../../../public/graduate-school-of-business-v2/mba/tulasstat3.png";
import mbaimg6 from "../../../public/graduate-school-of-business-v2/mba/tulasstat4.png";

const images = [
  "/landingPage/highlight6.png",
  "/landingPage/highlight4.png",
  "/landingPage/highlight2.png",
  "/landingPage/highlight5.png",
  "/landingPage/highlight3.png",
  "/landingPage/highlight1.png",
]; 

export default function AboutWhyChoose() {
      const placementSlides = [
  {
    image: mbaimg1,
    image2: mbaimg2,
    image3: mbaimg3,
  },
    {
    image: mbaimg4,
    image2: mbaimg5,
    image3: mbaimg6,
  },
];
  return (
    <section className="w-full py-14">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
              <h3 className="text-[clamp(38px,6vw,38px)] font-extrabold mb-5" style={{ textAlign: "center" }}>
          <span className="text-orange-500">Why Choose</span>{" "}
          <span className="text-gray-800">Tulas ?</span>
        </h3>

        <AboutPerks perksSlides={placementSlides}/>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`highlight-${index}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}