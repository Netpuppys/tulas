"use client";

import React from "react";
import Image from "next/image";
import visionImg from "../../../public/About/vision.jpg";
import missionImg from "../../../public/About/mission.jpg";

const sections = [
  {
    tag: "Our Vision",
    heading: "Shaping the Leaders of Tomorrow",
    body: "At Tulas Institute, we envision a future where every student is empowered to think boldly, lead confidently, and contribute meaningfully to society. Our vision is to be a globally recognized institution that nurtures holistic development — blending academic excellence with real-world readiness, ethical values, and a spirit of relentless innovation. We strive to create an environment where curiosity is celebrated, potential is unlocked, and every graduate leaves equipped to make a lasting impact on the world.",
    image: visionImg, // replace with visionImg
    imageLeft: true,
  },
  {
    tag: "Our Mission",
    heading: "Committed to Excellence in Education",
    body: "Our mission is to deliver transformative education through industry-aligned curricula, world-class infrastructure, and a faculty dedicated to both teaching and research. We are committed to fostering an inclusive learning ecosystem that encourages critical thinking, practical skills, and entrepreneurial mindset. By building strong connections with industry leaders and global institutions, we prepare our students not just for jobs, but for careers that define industries and inspire generations.",
    image: missionImg, // replace with missionImg
    imageLeft: false,
  },
];

const VisionMissionSection = ({ tag, heading, body, image, imageLeft }) => {
  const ImageBlock = (
    <div className="w-full md:w-[48%] aspect-[4/3] rounded-2xl overflow-hidden bg-[#cacdd2] relative flex-shrink-0 shadow-[0_4px_24px_0_rgba(0,0,0,0.10)]">
      {image && (
        <Image
          src={image}
          alt={tag}
          fill
          className="object-cover object-top"
        />
      )}
    </div>
  );

  const TextBlock = (
    <div className="w-full md:w-[48%] flex flex-col justify-center gap-4">
      {/* Tag pill */}
      <span className="w-fit px-4 py-1 rounded-full bg-[#E07820]/10 text-[#E07820] font-semibold text-[clamp(11px,0.9vw,14px)] tracking-wide uppercase">
        {tag}
      </span>

      {/* Heading */}
      <h2 className="font-bold text-[#1a1a1a] text-[clamp(20px,2.2vw,36px)] leading-snug">
        {heading}
      </h2>

      {/* Orange divider */}
      <div className="w-14 h-1 rounded-full bg-[#E07820]" />

      {/* Body */}
      <p className="text-gray-500 text-[clamp(13px,1vw,16px)] leading-relaxed">
        {body}
      </p>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
        imageLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      {ImageBlock}
      {TextBlock}
    </div>
  );
};

export default function AboutVision() {
  return (
    <div className="w-full bg-white py-7 md:py-10 px-4">
      {/* Header */}
      <div className="text-center mb-7 md:mb-10">
        <h1 className="font-bold text-[clamp(28px,4vw,46px)] leading-tight">
          <span className="text-orange-500">Vision </span>
          <span className="text-[#1a1a1a]">&amp; Mission</span>
        </h1>
        <p className="text-gray-800 text-[clamp(12px,1.1vw,17px)] mt-3 font-light">
          The guiding principles behind everything we do at Tulas Institute
        </p>
      </div>

      {/* Alternating sections */}
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 md:gap-18">
        {sections.map((section, index) => (
          <VisionMissionSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
