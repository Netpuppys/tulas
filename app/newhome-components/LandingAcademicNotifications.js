"use client";

import { useRef } from "react";

export default function LandingAcademicNotifications() {
  const scrollRef = useRef(null);

  const notificationCards = [
    {
      tag: "Session 2026-27",
      title: "Admissions open for session 2026.",
      desc: "Last date to register 15th April 2026.",
    },
    {
      tag: "Semester Examinations",
      title: "Examination schedule to be",
      desc: "notified shortly on the University portal.",
    },
    {
      tag: "Session 2026-27",
      title: "Admissions open for session 2026.",
      desc: "Last date to register 15th April 2026.",
    },
    {
      tag: "Semester Examinations",
      title: "Examination schedule to be",
      desc: "notified shortly on the University portal.",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full pt-12">
      {/* Heading */}
      <div className="px-4 md:px-12 max-w-4xl">
        <h3 className="text-[clamp(25px,6vw,36px)] text-center font-medium mb-8">
          <span className="text-orange-500">Academic</span>{" "}
          <span className="text-gray-800 font-light">Notifications</span>
        </h3>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-6 px-4 md:px-12 scroll-smooth snap-x snap-mandatory">
          {notificationCards.map((card, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="snap-start min-w-[85%] sm:min-w-[60%] md:min-w-[420px] rounded-3xl bg-gray-100 pb-8"
              >
                {/* Tag */}
                <div
                  className={`w-full px-6 py-2 rounded-full text-white text-center text-sm font-medium mb-6 ${
                    isEven ? "bg-orange-500" : "bg-gray-500"
                  }`}
                >
                  {card.tag}
                </div>

                <p className="text-gray-800 text-lg font-semibold mb-2 px-6">
                  {card.title}
                </p>

                <p className="text-gray-600 mb-6 px-6">
                  {card.desc}
                </p>

                <button
                  className={`flex items-center gap-2 ml-6 px-5 py-2 rounded-full text-sm font-medium ${
                    isEven
                      ? "bg-gray-700 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  Read more <span>›</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          ‹
        </button>

        {/* Show All */}
        <button className="text-orange-500 font-semibold text-lg">
          View All Events
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}