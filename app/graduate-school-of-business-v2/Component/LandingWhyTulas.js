"use client";

import Image from "next/image";

export default function LandingWhyTulas() {
  return (
    <section className="w-full py-6 bg-white flex justify-center">
      <div className="w-full max-w-4xl md:max-w-6xl px-5">

        {/* Heading */}
        <h2 className="text-center text-[clamp(26px,5vw,38px)] font-medium mb-6">
          <span className="text-orange-500 font-semibold">Why</span>{" "}
          <span className="text-gray-800 font-light">Tula’s MBA?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed md:text-left mb-10">
          Tula’s MBA is an industry-aligned postgraduate programme designed for 
          accelerated career growth and leadership development. In-demand 
          specialisations, corporate internships, live projects, and placement-focused 
          training ensure real-world business readiness.
        </p>

        {/* Image */}
        <div className="w-full rounded-[15px] overflow-hidden">

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
            src="/landingPage/landingwhy-desktop.jpg"
            alt="Tula's MBA Building"
            width={1200}
            height={800}
            className="w-full h-auto object-cover hidden md:block"
            priority
          />

        </div>

      </div>
    </section>
  );
}