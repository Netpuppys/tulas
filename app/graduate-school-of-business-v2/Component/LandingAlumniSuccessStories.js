"use client";

import Image from "next/image";

export default function LandingAlumniSuccessStories() {
  const alumniCards = [
    "/Homepage/Alumni/alumni1.jpg",
    "/Homepage/Alumni/alumni1.jpg",
    "/Homepage/Alumni/alumni1.jpg",
  ];

  return (
    <section className="w-full pt-12">
      {/* Heading */}
      <div className="px-4 md:px-12 max-w-4xl">
        <h3 className="text-[clamp(28px,6vw,36px)] text-center font-medium mb-3">
          <span className="text-orange-500">Alumni</span>{" "}
          <span className="text-gray-800 font-light">Success Stories</span>
        </h3>

        <p className="text-gray-600 text-sm md:text-base mb-8">
          At Tula’s University, focused training and placement support prepare
          students for on-campus careers. Our alumni are part of leading
          organizations across industries.
        </p>
      </div>

      {/* Scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div
          className="
            flex gap-5
            px-4 md:px-12
            scroll-smooth snap-x snap-mandatory
          "
        >
          {alumniCards.map((src, index) => (
            <div
              key={index}
              className="
                snap-start
                min-w-[82%] sm:min-w-[60%] md:min-w-[380px]
                rounded-3xl
                overflow-hidden
                shadow-md
                bg-white
              "
            >
              <Image
                src={src}
                alt={`Alumni story ${index + 1}`}
                width={400}
                height={520}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-5 px-4">
        <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-[10px] text-lg font-semibold">
          APPLY NOW
        </button>
      </div>
    </section>
  );
}