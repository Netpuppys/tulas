"use client";

import Image from "next/image";

export default function LandingBusinessSchool() {
  return (
    <section className="w-full py-5 bg-white flex justify-center">
      <div className="w-full max-w-2xl md:max-w-6xl px-4">

        {/* Heading */}
        <h2 className="text-center text-[clamp(36px,5vw,36px)] font-medium mb-10 leading-snug">
          <span className="text-orange-500 font-extrabold">Ranked Among</span>{" "}
          <br/>
          <span className="text-gray-800 font-extrabold">India's Top B-Schools</span>
        </h2>

        {/* Card */}
        <div className="bg-gray-200 rounded-[40px] px-6 py-8">

          {/* Mobile layout (same as before) */}
          <div className="space-y-5 md:hidden text-center">

            <div className="flex justify-center">
              <Image
                src="/Homepage/Accreditation/ranking2.png"
                alt="Times B School"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-gray-800 font-medium text-sm">
              Top 100 Management Institutes in India
            </p>

            <div className="flex justify-center">
              <Image
                src="/Homepage/Accreditation/ranking1.png"
                alt="The Week"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-gray-800 font-medium text-sm">
              All India | Private B-School | North Zone
            </p>

            <div className="flex justify-center">
              <Image
                src="/Homepage/Accreditation/ranking4.png"
                alt="MDRA"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-gray-800 font-medium text-sm">
              Recognised for Academic Leadership
            </p>

          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between text-center">

            <div className="flex flex-col items-center gap-3">
              <Image
                src="/Homepage/Accreditation/ranking2.png"
                alt="Times B School"
                width={200}
                height={60}
                className="object-contain"
              />
              <p className="text-gray-800 font-medium text-sm">
                Top 100 Management Institutes in India
              </p>
            </div>

                       <div className="flex flex-col items-center gap-3">
              <Image
                src="/Homepage/Accreditation/ranking4.png"
                alt="MDRA"
                width={180}
                height={60}
                className="object-contain"
              />
              <p className="text-gray-800 font-medium text-sm">
                Recognised for Academic Leadership
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Image
                src="/Homepage/Accreditation/ranking1.png"
                alt="The Week"
                width={200}
                height={60}
                className="object-contain"
              />
              <p className="text-gray-800 font-medium text-sm">
                All India | Private B-School | North Zone
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}