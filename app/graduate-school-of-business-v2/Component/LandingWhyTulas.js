"use client";

import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

export default function LandingWhyTulas() {
  return (
    <section className="w-full py-6 bg-white">

      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-4xl md:max-w-6xl px-5 mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[clamp(36px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-extrabold">Why</span>{" "}
          <span className="text-gray-800 font-extrabold">Tula’s MBA?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-center mb-10">
          Tulas MBA is an industry-aligned postgraduate programme designed for accelerated career growth and leadership development. In-demand specialisations, corporate internships, live projects, and placement-focused training ensure real-world business readiness.
        </p>

        {/* Check Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">

          <div className="flex items-center gap-3 text-orange-500 text-2xl font-medium">
            <IoCheckmark className="text-2xl text-orange-500" />
            5+ Specialisations
          </div>

          <div className="flex items-center gap-3 text-orange-500 text-2xl font-medium">
            <IoCheckmark className="text-2xl text-orange-500" />
            250+ Global Recruiters
          </div>

          <div className="flex items-center gap-3 text-orange-500 text-2xl font-medium">
            <IoCheckmark className="text-2xl text-orange-500" />
            100% Paid Internships
          </div>

          <div className="flex items-center gap-3 text-orange-500 text-2xl font-medium">
            <IoCheckmark className="text-2xl text-orange-500" />
            100% Placement Support
          </div>

        </div>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-full rounded-[15px] md:rounded-[0px] overflow-hidden">

        {/* Mobile Image */}
        <Image
          src="/landingPage/landingwhy.jpg"
          alt="Tula's MBA Building"
          width={800}
          height={600}
          className="w-full h-auto object-cover md:hidden"
          priority
        />

        {/* Desktop Image */}
        <Image
          src="/landingPage/landingwhy-desktop-cropped.jpg"
          alt="Tula's MBA Building"
          width={1920}
          height={900}
          className="w-full h-auto object-cover hidden md:block"
          priority
        />

      </div>

      {/* BUTTON CONTAINER */}
      <div className="w-full max-w-4xl md:max-w-6xl px-5 mx-auto">

        {/* Enroll Button */}
        <div className="flex justify-center mt-10">
          <button onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            } 
    className="flex items-center gap-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-2 rounded-full shadow-lg text-lg">

            ENROLL NOW

            <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
              <IoArrowForward />
            </span>

          </button>
        </div>

      </div>

    </section>
  );
}