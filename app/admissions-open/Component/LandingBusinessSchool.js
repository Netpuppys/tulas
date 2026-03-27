"use client";

import Image from "next/image";

export default function LandingInternshipSection() {
  return (
    <section className="bg-white pb-6 mt-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-10">

          <div className="w-full">
            {/* Heading */}
            <h2 className="text-center text-[clamp(36px,5vw,36px)] font-medium mb-10 leading-snug">
              <span className="text-orange-500 font-extrabold">Ranked Among</span>{" "}
              <br/>
              <span className="text-gray-800 font-extrabold">India’s Leading Institutes</span>
            </h2>

{/* MOBILE IMAGE */}
<div className="w-[80%] mx-auto md:hidden mb-6">
  <Image
    src="/landingPage/rankingmobile.png"
    alt="Internship Mobile"
    width={800}
    height={1200}
    className="w-full h-auto object-cover rounded-xl"
    priority
  />
</div>

            {/* DESKTOP IMAGE (unchanged) */}
            <div className="relative w-full aspect-[21/9] hidden md:block rounded-2xl overflow-hidden mb-6">
              <Image
                src="/landingPage/rankingdesktop.png"
                alt="Internship Desktop"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}