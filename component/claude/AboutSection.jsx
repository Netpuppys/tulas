"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/graduate-school-of-business-v2/mba/choosemba1.png",
  "/graduate-school-of-business-v2/mba/choosemba2.png",
  "/graduate-school-of-business-v2/mba/tulasstat1.png",
  "/graduate-school-of-business-v2/mba/tulasstat2.png",
  "/graduate-school-of-business-v2/mba/tulasstat3.png",
  "/graduate-school-of-business-v2/mba/tulasstat4.png",
];

export default function AboutSection() {
  // Show 2 images at a time, fade between pairs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 2) % images.length);
        setFading(false);
      }, 600); // fade out duration
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const img1 = images[currentIndex % images.length];
  const img2 = images[(currentIndex + 1) % images.length];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Shape Your</span>{" "}
          <span className="text-gray-900">Future at Tulas</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - Text */}
          <div className="flex-1 space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              Tulas Institute, established in 2006 under the Rishabh Educational Trust, has built a strong
              reputation for delivering quality education with a future-focused approach. Backed by UGC
              recognition and NAAC A+ accreditation, the institute maintains high academic standards while
              continuously evolving to meet the demands of a changing world.
            </p>
            <p>
              At Tulas, education goes beyond traditional learning. With a modern, industry-aligned
              curriculum, integration of emerging technologies, and a strong emphasis on innovation and
              practical exposure, students are equipped with the skills, mindset, and confidence needed to
              succeed across diverse career paths. From academic excellence to career readiness, every
              aspect of the Tulas experience is designed to prepare students not just for their first job
              but for long-term growth, adaptability, and leadership in an ever-evolving professional
              landscape.
            </p>
          </div>

          {/* Right - Fading Image Pair */}
          <div className="w-full lg:w-[420px] flex flex-col gap-4">
            {/* Image 1 */}
            <div
              className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-md transition-opacity duration-500"
              style={{ opacity: fading ? 0 : 1 }}
            >
              <Image
                src={img1}
                alt="Tulas campus"
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>

            {/* Image 2 */}
            <div
              className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-md transition-opacity duration-500"
              style={{ opacity: fading ? 0 : 1 }}
            >
              <Image
                src={img2}
                alt="Tulas campus"
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {Array(Math.ceil(images.length / 2)).fill(null).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * 2)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i * 2
                      ? "bg-orange-500 w-5"
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
