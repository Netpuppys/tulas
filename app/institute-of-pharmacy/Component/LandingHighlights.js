"use client";

import Image from "next/image";

const images = [
  "/landingPage/highlight6.png",
  "/landingPage/highlight4.png",
  "/landingPage/highlight2.png",
  "/landingPage/highlight5.png",
  "/landingPage/highlight3.png",
  "/landingPage/highlight1.png",
];

export default function LandingHighlights() {
  return (
    <section className="w-full py-14 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          <span className="text-orange-500">Tula’s</span>{" "}
          <span className="text-black">Highlights</span>
        </h2>

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