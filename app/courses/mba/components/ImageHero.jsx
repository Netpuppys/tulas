"use client";

import Image from "next/image";
import Link from "next/link";

export default function ImageHero() {
  return (
    <div className="w-full">
      {/* Desktop Image */}
      <Link href="/apply-now" className="hidden md:block w-full">
        <Image
          src="/courses/mba/mba-desktop.jpg"
          alt="Build The Future With Computer science Study Computer Science Engineering at Tulas and gain expertise in software development, artificial intelligence, data science, cyber security and emerging technologies — through an AI-integrated curriculum."
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />
      </Link>

      {/* Mobile Image */}
      <Link href="/apply-now" className="block md:hidden w-full pt-8">
        <Image
          src="/courses/mba/mba-mobile.jpg"
          alt="Build The Future With Computer science Study Computer Science Engineering at Tulas and gain expertise in software development, artificial intelligence, data science, cyber security and emerging technologies — through an AI-integrated curriculum."
          width={768}
          height={1000}
          className="w-full h-auto pt-10"
          priority
        />
      </Link>
    </div>
  );
}