"use client";

import React from "react";
import Image from "next/image";
import sunil from "../../../public/About/sunil.png";
import silky from "../../../public/About/silky.png";
import raghav from "../../../public/About/raghav.png";
import raunak from "../../../public/About/raunak.png";
import shailendra from "../../../public/About/shailendra.png";
import deepak from "../../../public/About/deepak.png";
import vijay from "../../../public/About/vijay.png";
import sunilSemwal from "../../../public/About/sunilSemwal.png";
import nishant from "../../../public/About/nishant.png";

const leadershipCards = [
  {
    image: sunil,
    name: "Dr. Sunil Kumar Jain",
    profile: "Chairman - Tulas Group",
    description:
      "True Leadership lies in empowering others to dream more, learn more & achieve more",
  },
  {
    image: silky,
    name: "Silky Jain Marwah",
    profile: "Executive Director",
    description:
      "Education isn't just about lessons, it's about shaping lives and inspiring change",
  },
  {
    image: raunak,
    name: "Raunak Jain",
    profile: "Vice Chairman",
    description:
      "Greatness Begins when we push boundaries and strive for excellence every single day",
  },
];

const managementCards = [
  {
    image: raghav,
    name: "Dr. Raghav Garg",
    profile: "Vice President Technology",
    description: "Technology is the present of education, driving innovation at every step.",
  },
  {
    image: shailendra,
    name: "Prof. (Dr.) Shailendra Tiwary",
    profile: "Director",
    description: "Tulas University aspires to prepare tomorrow's successful professionals and innovators.",
  },
  {
    image: vijay,
    name: "Dr. Vijay Kumar Upadhyay",
    profile: "Registrar",
    description: "Education will play a significant role in accomplishing future productivity and higher standards.",
  },
  {
    image: nishant,
    name: "Prof. Nishant Saxena",
    profile: "Dean, Academics",
    description: "Academic success isn't about grades, it's about creating thinkers who make a difference.",
  },
  {
    image: sunilSemwal,
    name: "Dr. Sunil Semwal",
    profile: "Dean, R&D",
    description: "Research bridges the gap between imagination and reality, creating solutions that shape the world.",
  },
];

const LeadershipCard = ({ card }) => (
  <div className="group flex flex-col w-[calc(33.33%-1.5rem)] min-w-[240px] bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_0_rgba(0,0,0,0.10)] cursor-pointer">
    {/* Image + hover overlay */}
    <div className="w-full aspect-square bg-[#E07820] relative overflow-hidden">
      <Image
        src={card.image}
        alt={card.name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      {/* Orange description overlay */}
      {card.description && (
        <div className="absolute inset-0 bg-[#E07820] flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
          <p className="text-white text-center text-[clamp(12px,1.1vw,17px)] leading-relaxed font-medium">
            &ldquo;{card.description}&rdquo;
          </p>
        </div>
      )}
    </div>

    {/* Name + role */}
    <div className="px-5 pt-4 pb-5 text-center flex flex-col gap-1">
      <h2 className="font-bold text-[#1a1a1a] text-[clamp(13px,1.2vw,18px)] leading-snug">
        {card.name}
      </h2>
      <p className="text-[#E07820] font-semibold text-[clamp(11px,0.95vw,15px)]">
        {card.profile}
      </p>
    </div>
  </div>
);

const ManagementCard = ({ card }) => (
  <div className="group flex flex-col w-[calc(20%-1rem)] min-w-[160px] bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_0_rgba(0,0,0,0.09)] cursor-pointer">
    {/* Image + hover overlay */}
    <div className="w-full aspect-square bg-[#dce0e8] relative overflow-hidden">
      <Image
        src={card.image}
        alt={card.name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      {/* Orange description overlay */}
      {card.description && (
        <div className="absolute inset-0 bg-[#E07820] flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
          <p className="text-white text-center text-[clamp(10px,0.85vw,13px)] leading-relaxed font-medium">
            &ldquo;{card.description}&rdquo;
          </p>
        </div>
      )}
    </div>

    {/* Name + role */}
    <div className="px-3 pt-3 pb-4 text-center flex flex-col gap-1">
      <h2 className="font-semibold text-[#1a1a1a] text-[clamp(10px,0.95vw,15px)] leading-snug">
        {card.name}
      </h2>
      <p className="text-[#E07820] font-semibold text-[clamp(9px,0.8vw,13px)]">
        {card.profile}
      </p>
    </div>
  </div>
);

const InternalSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-6 md:py-8">
      {/* Header */}
      <div className="text-center mb-2 px-4">
        <h1 className="font-bold text-[clamp(28px,4vw,45px)] leading-tight">
          <span className="text-orange-500">Our </span>
          <span className="text-[#1a1a1a]">Leadership</span>
        </h1>
        <p className="text-gray-400 text-[clamp(12px,1.1vw,17px)] mt-3 font-light">
          Meet the visionary leaders driving excellence and innovation at Tulas University
        </p>
      </div>

      {/* Leadership Cards */}
      <div className="w-full max-w-[1100px] mx-auto px-6 mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {leadershipCards.map((card, index) => (
            <LeadershipCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* Management Cards */}
      <div className="w-full max-w-[1300px] mx-auto px-6 mt-6 pb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {managementCards.map((card, index) => (
            <ManagementCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AboutManagment() {
  return (
    <div className="bg-white w-full h-full">
      <div className="relative w-full h-fit min-h-[100vh]">
        <section className="w-full">
          <InternalSection />
        </section>
      </div>
    </div>
  );
}
