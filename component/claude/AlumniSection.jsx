"use client";
import Image from "next/image";
import { useRef } from "react";

const alumniCards = [
  "/Homepage/Alumni/alumni1.png",
  "/Homepage/Alumni/alumni2.png",
  "/Homepage/Alumni/alumni3.png",
  "/Homepage/Alumni/alumni4.png",
  "/Homepage/Alumni/alumni5.png",
  "/Homepage/Alumni/alumni6.png",
  "/Homepage/Alumni/alumni7.png",
  "/Homepage/Alumni/alumni8.png",
];

export default function AlumniSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-orange-500">Alumni</span>{" "}
          <span className="text-gray-900">Success Stories</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm leading-relaxed">
          At Tulas, practical learning, industry exposure, and career support prepare students for
          real-world opportunities. Our alumni work across industries such as IT and software development,
          banking and finance, pharmaceutical and healthcare, media and digital platforms, marketing and
          advertising, e-commerce, and emerging sectors like startups and analytics.
        </p>

        {/* Scroll container with arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-2"
          >
            {alumniCards.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative w-60 h-80">
                  <Image
                    src={src}
                    alt={`Alumni ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="240px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
