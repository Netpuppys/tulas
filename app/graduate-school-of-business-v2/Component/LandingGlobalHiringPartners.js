"use client";

import Image from "next/image";

export default function LandingGlobalHiringPartners() {
  const partners = [
    { name: "Aditya Birla Group", logo: "/Homepage/AccreditationLogo/1.png" },
    { name: "Amazon", logo: "/Homepage/AccreditationLogo/2.png" },
    { name: "SpiceJet", logo: "/Homepage/AccreditationLogo/3.png" },
    { name: "Google", logo: "/Homepage/AccreditationLogo/4.png" },
    { name: "Cognizant", logo: "/Homepage/AccreditationLogo/5.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/6.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/7.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/8.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/9.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/10.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/11.png" },
    { name: "BMW", logo: "/Homepage/AccreditationLogo/12.png" },
  ];

  // split into two rows
  const row1 = partners.filter((_, i) => i % 2 === 0);
  const row2 = partners.filter((_, i) => i % 2 !== 0);

  return (
    <section className="w-full pt-10 overflow-hidden">
      {/* Heading */}
      <h3 className="text-center text-[clamp(26px,5.5vw,34px)] font-medium mb-8">
        <span className="text-orange-500">750</span>{" "}
        <span className="text-gray-800 font-light">
          Global Hiring Partners
        </span>
      </h3>

      {/* ROW 1 */}
      <div className="overflow-hidden mb-4">
        <div className="flex gap-4 animate-scroll">
          {[...row1, ...row1].map((partner, index) => (
            <LogoCard key={`r1-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {[...row2, ...row2].map((partner, index) => (
            <LogoCard key={`r2-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* animation */}
      <style jsx>{`
        .animate-scroll {
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function LogoCard({ partner }) {
  return (
    <div
      className="
        min-w-[120px] md:min-w-[170px]
        h-[120px]
        bg-white
        border border-gray-200
        rounded-xl
        flex items-center justify-center
        shadow-sm
      "
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={100}
        height={50}
        className="object-contain"
      />
    </div>
  );
}