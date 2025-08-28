"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TopPlacements() {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const placements = [
    {
      id: 1,
      name: "Mayank Shrivastava",
      degree: "M.B.A",
      company: "KPMG",
      img: "/placements/tp2.png",
      bg: "bg-teal-800",
    },
    {
      id: 2,
      name: "Diptanu Debnath",
      degree: "M.B.A",
      company: "Deloitte",
      img: "/placements/tp3.png",
      bg: "bg-[#800033]",
    },
    {
      id: 3,
      name: "Gaurav Sugandh",
      degree: "B.Tech-M.E",
      company: "KPMG",
      img: "/placements/tp4.png",
      bg: "bg-teal-800",
    },
    {
      id: 4,
      name: "Saikat Sinha",
      degree: "B.Tech-E.C.E",
      company: "KIMO",
      img: "/placements/tp5.png",
      bg: "bg-[#800033]",
    },
    {
      id: 5,
      name: "Tarun Kumar",
      degree: "B.Tech-M.E",
      company: "GEP",
      img: "/placements/tp6.png",
      bg: "bg-teal-800",
    },
    {
      id: 6,
      name: "Prateek Mehta",
      degree: "B.Tech-C.S.E",
      company: "Publicis Sapient",
      img: "/placements/tp7.png",
      bg: "bg-[#800033]",
    },
    {
      id: 7,
      name: "Shivangi Gupta",
      degree: "B.Tech-E.C.E",
      company: "Adobe",
      img: "/placements/tp8.png",
      bg: "bg-teal-800",
    },
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full py-16">
      {/* Half background gradient from bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#800033] via-[#4b0023] to-[#007A83]" />

      <div className="relative z-10 w-full md:w-[85%] mx-auto">
        <h2 className="text-center text-4xl font-bold text-teal-900 mb-10 font-serif">
          Some of Our <span className="text-[#800033]">Top Placements</span>
        </h2>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={isMobile ? 1.2 : 5}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            className="pb-10"
          >
            {placements.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  className={`${p.bg} rounded-xl shadow-lg p-4 flex flex-col items-center text-white`}
                >
                  <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 bg-">
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-center">{p.name}</h3>
                  <p className="text-sm text-center">{p.degree}</p>
                  <p className="mt-2 text-xs font-medium uppercase">
                    {p.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg">
            <FaChevronLeft className="text-[#800033]" />
          </button>
          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg">
            <FaChevronRight className="text-[#800033]" />
          </button>
        </div>
      </div>

      {/* Pagination styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #800033;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #800033;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
