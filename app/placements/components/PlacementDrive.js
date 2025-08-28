// components/PlacementDrive.js
"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PlacementDrive() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max <= 0 ? 0 : (el.scrollLeft / max) * 100);
  };

  useEffect(() => {
    updateProgress();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollByOneCard = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = (card ? card.clientWidth : 520) + 24; // 24 = gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const drives = [
{ id: 1, img: "/placements/pdrive1.jpg" },
  { id: 2, img: "/placements/pdrive2.jpg" },
  { id: 3, img: "/placements/pdrive3.jpg" },
  { id: 4, img: "/placements/pdrive4.jpg" },
  { id: 5, img: "/placements/pdrive5.jpg" },
  { id: 6, img: "/placements/pdrive6.jpg" },
  { id: 7, img: "/placements/pdrive7.jpg" },
  { id: 8, img: "/placements/pdrive8.jpg" },
  { id: 9, img: "/placements/pdrive9.jpg" },
  { id: 10, img: "/placements/pdrive10.jpg" },
  { id: 11, img: "/placements/pdrive11.jpg" },
  { id: 12, img: "/placements/pdrive12.jpg" },
  { id: 13, img: "/placements/pdrive13.jpg" },
  { id: 14, img: "/placements/pdrive14.jpg" },
  { id: 15, img: "/placements/pdrive15.jpg" },
  { id: 16, img: "/placements/pdrive16.jpg" },
  { id: 17, img: "/placements/pdrive17.jpg" },
  { id: 18, img: "/placements/pdrive18.jpg" },
  { id: 19, img: "/placements/pdrive19.jpg" },
  { id: 20, img: "/placements/pdrive20.jpg" },
  ];

  return (
    <section className="w-full my-12">
      <h3 className="text-[#760135] text-center pb-8 text-[25px] md:text-[40px] font-[CarotSlab]">
        PLACEMENT DRIVE
      </h3>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scrollByOneCard(-1)}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow hover:shadow-md"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-4"
        >
          {drives.map((d) => (
            <div
              key={d.id}
              data-card
              className="snap-start w-[420px] md:w-[560px] flex-shrink-0 rounded-xl shadow-lg bg-white overflow-hidden"
            >
              <Image
                src={d.img}
                alt="Placement Drive"
                width={560}
                height={315}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollByOneCard(1)}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow hover:shadow-md"
          aria-label="Scroll right"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mt-6">
        <div
          className="absolute top-0 left-0 h-2 bg-[#800033] rounded-full transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
