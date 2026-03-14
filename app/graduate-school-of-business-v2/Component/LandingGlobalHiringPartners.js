"use client";

import Image from "next/image";

export default function LandingGlobalHiringPartners() {
  const partners = [
    { name: "Aditya Birla Group", logo: "/Homepage/partners/Academor.png" },
    { name: "Amazon", logo: "/Homepage/partners/Acxiom Consulting.png" },
    { name: "SpiceJet", logo: "/Homepage/partners/Amazon Web Services.png" },
    { name: "Google", logo: "/Homepage/partners/Arrise.png" },
    { name: "Cognizant", logo: "/Homepage/partners/Artech.png" },
    { name: "BMW", logo: "/Homepage/partners/ASC International.png" },
    { name: "BMW", logo: "/Homepage/partners/BMW.png" },
    { name: "BMW", logo: "/Homepage/partners/CK (Calvin Klein).png" },
    { name: "BMW", logo: "/Homepage/partners/Cywarden.png" },
    { name: "BMW", logo: "/Homepage/partners/Easemytrip.png" },
    { name: "BMW", logo: "/Homepage/partners/ESAF BANK.png" },
    { name: "BMW", logo: "/Homepage/partners/Fitelo.png" },

    { name: "Aditya Birla Group", logo: "/Homepage/partners/Glowlogics.png" },
    { name: "Amazon", logo: "/Homepage/partners/Google.png" },
    { name: "SpiceJet", logo: "/Homepage/partners/Grant thornton.png" },
    { name: "Google", logo: "/Homepage/partners/Hero.png" },
    { name: "Cognizant", logo: "/Homepage/partners/Hikeedu.png" },
    { name: "BMW", logo: "/Homepage/partners/HSBC.png" },
    { name: "BMW", logo: "/Homepage/partners/Intel.png" },
    { name: "BMW", logo: "/Homepage/partners/Learning Routes.png" },
    { name: "BMW", logo: "/Homepage/partners/Movidu.png" },
    { name: "BMW", logo: "/Homepage/partners/MWIDM.png" },
    { name: "BMW", logo: "/Homepage/partners/Prodesk it.png" },
    { name: "BMW", logo: "/Homepage/partners/Reality Assitant.png" },

    { name: "Amazon", logo: "/Homepage/partners/Relinns Technologies.png" },
    { name: "SpiceJet", logo: "/Homepage/partners/Root Analysis.png" },
    { name: "Google", logo: "/Homepage/partners/Siemens.png" },
    { name: "Cognizant", logo: "/Homepage/partners/Silverspace.png" },
    { name: "BMW", logo: "/Homepage/partners/Stellaraa Edu Tech.png" },
    { name: "BMW", logo: "/Homepage/partners/Step2gen.png" },
    { name: "BMW", logo: "/Homepage/partners/Talbros.png" },
    { name: "BMW", logo: "/Homepage/partners/The times of india.png" },
    { name: "BMW", logo: "/Homepage/partners/Verizon.png" },
  ];

  // split into two rows
  const row1 = partners.filter((_, i) => i % 2 === 0);
  const row2 = partners.filter((_, i) => i % 2 !== 0);

  return (
    <section className="w-full pt-10 overflow-hidden">
      {/* Heading */}
      <h3 className="text-center text-[clamp(38px,5.5vw,34px)] font-extrabold mb-2">
        <span className="text-orange-500">250+ MBA</span>{" "}
        <span className="text-gray-800">
          Hiring Partners
        </span>
      </h3>

      <h5 className="text-center font-light text-2xl text-orange-500 mb-8">Reserve Your Seat Among Top MNCs.</h5>

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
        border border-gray-600
        rounded-xl
        flex items-center justify-center
        shadow-md
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