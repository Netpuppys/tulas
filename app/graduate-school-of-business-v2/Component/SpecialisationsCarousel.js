"use client";

import Image from "next/image";
import { useRef } from "react";

export default function SpecialisationsCarousel() {
  const scrollRef = useRef(null);

  const alumniCards = [
    "/Homepage/special/special1.png",
    "/Homepage/special/special2.png",
    "/Homepage/special/special3.png",
    "/Homepage/special/special4.png",
    "/Homepage/special/special5.png",
    "/Homepage/special/special6.png",
    "/Homepage/special/special7.png",
    "/Homepage/special/special8.png",
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12">
      {/* Heading */}
      <div className="px-4 md:px-12">
        <h3 className="text-[clamp(38px,6vw,36px)] text-center font-extrabold mb-3">
          <span className="text-orange-500">Be A Part</span>{" "}
          <span className="text-gray-800">of Industry Ready MBA</span>
        </h3>

        <p className="text-gray-600 text-sm md:text-base mb-8">
          At Tulas Institute, focused training and placement support prepares students for on campus careers. Our alumni are part of leading organisations across industries.
        </p>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-5 px-4 md:px-12">
          {alumniCards.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[82%] sm:w-[60%] md:w-[380px] h-[420px] rounded-3xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Alumni story ${index + 1}`}
                width={380}
                height={420}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA + Arrows */}
      <div className="flex items-center justify-center gap-6 mt-6 px-4">
        
        {/* Left Arrow (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-gray-300"
        >
          ←
        </button>

        {/* Apply Button */}
        <button onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
         className="w-full md:w-auto bg-orange-500 text-white py-2 px-10 rounded-[10px] text-lg font-semibold">
          APPLY NOW
        </button>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-gray-300"
        >
          →
        </button>
      </div>
    </section>
  );
}