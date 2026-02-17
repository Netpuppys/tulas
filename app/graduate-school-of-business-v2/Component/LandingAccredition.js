"use client";
import React from "react";
import Image from "next/image";

import logo1 from "../../../public/Homepage/AccreditationLogo/1.png";
import logo2 from "../../../public/Homepage/AccreditationLogo/2.png";
import logo3 from "../../../public/Homepage/AccreditationLogo/3.png";
import logo4 from "../../../public/Homepage/AccreditationLogo/4.png";
import logo5 from "../../../public/Homepage/AccreditationLogo/5.png";
import logo6 from "../../../public/Homepage/AccreditationLogo/6.png";
import logo7 from "../../../public/Homepage/AccreditationLogo/7.png";

function LandingAccredition() {
  const items = [
    { img: logo1, title: "NAAC", subtitle: "Accredited A+" },
    { img: logo2, title: "NBA", subtitle: "National Board of Accreditation" },
    { img: logo3, title: "UBTER", subtitle: "Uttarakhand Board of Technical Education" },
    { img: logo4, title: "AICTE", subtitle: "Approved Institution" },
    { img: logo5, title: "UGC", subtitle: "Recognized University" },
    { img: logo6, title: "ISO", subtitle: "Certified Institute" },
    { img: logo7, title: "NIRF", subtitle: "Ranked Institution" },
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      {/* Heading */}
      <h3 className="text-center text-[clamp(18px,6vw,36px)] font-light text-orange-400 mb-10">
        Accreditations <span className="text-gray-800">&amp;</span> Recognitions
      </h3>

      {/* Scroll area */}
      <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-scroll-slow gap-6 md:gap-16 px-4 md:px-10">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
className="flex flex-col items-center text-center min-w-[140px] md:min-w-[220px]"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="h-24 w-auto object-contain mb-4"
                loading="lazy"
              />

              <p className="text-sm font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingAccredition;
