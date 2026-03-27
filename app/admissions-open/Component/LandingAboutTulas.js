"use client";

import Image from "next/image";

export default function LandingAboutTulas() {
  return (
    <section className="w-full bg-white py-10 flex justify-center">
      <div className="w-full max-w-6xl px-4">

        {/* Heading */}
        <h2 className="text-center text-[clamp(28px,5vw,40px)] font-bold mb-8">
          <span className="text-orange-500">About</span>{" "}
          <span className="text-gray-800">Tulas</span>
        </h2>

        {/* Card */}
        <div className="bg-[#fbf4ee] rounded-[30px] p-4 md:p-6">

          {/* Image */}
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] rounded-[25px] overflow-hidden mb-6">
            <Image
              src="/landingbanner/generic/whytulas.jpg" // 👈 replace with your image
              alt="Tulas Campus"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed space-y-4 px-1 md:px-2">
            
            <p>
              Tulas Institute, established in 2006 under the Rishabh Educational Trust, has built a strong reputation for delivering quality education with a future-focused approach. Backed by UGC recognition and NAAC A+ accreditation, the institute maintains high academic standards while continuously evolving to meet the demands of a changing world.
            </p>

            <p>
              At Tulas, education goes beyond traditional learning. With a modern, industry-aligned curriculum, integration of emerging technologies, and a strong emphasis on innovation and practical exposure, students are equipped with the skills, mindset, and confidence needed to succeed across diverse career paths. From academic excellence to career readiness, every aspect of the Tulas experience is designed to prepare students not just for their first job but for long-term growth, adaptability, and leadership in an ever-evolving professional landscape.
            </p>

          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-sm mt-8">
          Copyright © 2026 Tulas Institute, Dehradun | All Rights Reserved
        </p>

      </div>
    </section>
  );
}