"use client";

import {
  FaGraduationCap,
  FaShieldAlt,
  FaFileSignature,
  FaFemale,
  FaMapMarkedAlt,
  FaMountain,
  FaQuoteLeft,
} from "react-icons/fa";

const scholarships = [
  {
    icon: <FaGraduationCap />,
    title: "Academic Merit Scholarship",
    desc: "Based on your performance in Class XII/qualifying examination.",
    note: "The higher your academic score, the greater your support, because hard work deserves recognition.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Shaurya Scholarship",
    desc: "For the wards of Defence & Uniformed Services personnel who serve the nation.",
    list: [
      "Indian Army",
      "Indian Air Force",
      "Indian Navy",
      "CRPF",
      "BSF",
      "CISF",
      "ITBP",
      "SSB",
      "State Police",
    ],
    note: "Also includes NCC, NSS & other uniformed services scholarship for active participants.",
  },
  {
    icon: <FaFileSignature />,
    title: "JEE Mains/CAT/MAT Scholarship",
    desc: "Special scholarships for students who have demonstrated their potential through JEE Mains/CAT/MAT performance.",
    note: "Your effort. Our Support.",
  },
  {
    icon: <FaFemale />,
    title: "Girl Child Scholarship",
    desc: "Encouraging young women to pursue quality higher education and build a brighter future.",
    note: "Because empowered women build stronger communities and a better tomorrow.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Region Diversity Scholarship",
    desc: "Support students from different regions of India to ensure equal opportunities in equal education.",
  },
  {
    icon: <FaMountain />,
    title: "Uttarakhand Domicile Scholarship",
    desc: "Special Scholarship benefits for eligible students holding Uttarakhand domicile, in accordance with university norms.",
  },
];

export default function HomeScholarship() {
  return (
    <section className="w-full bg-white py-12 md:py-16 flex justify-center">
      <div className="max-w-6xl w-full px-4 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
        {/* Left: content (sticky on large screens) */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-40">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-orange-500">
            SCHOLARSHIPS
          </h2>
          <div className="w-20 h-1 bg-orange-500 my-3" />
          <h3 className="text-2xl md:text-4xl font-extrabold text-[#0b1f3a] leading-tight">
            BECAUSE YOUR DREAMS <br className="hidden md:block" />
            <span className="text-orange-500">DESERVE SUPPORT</span>
          </h3>

          <p className="text-gray-600 mt-5 leading-relaxed">
            At Tulas University, we believe that financial constraints should
            never limit your potential. Our scholarship programmes are
            designed to support meritorious students, recognise achievements
            and celebrate diversity because every dream deserves a chance.
          </p>

          {/* Disclaimer */}
          <div className="mt-8 border-l-4 border-[#0b1f3a] bg-[#fbf4ee] px-5 py-4 rounded-r-lg">
            <p className="text-xs md:text-sm italic text-gray-600">
              Scholarships are subject to eligibility, verification and
              university terms & conditions. Multiple scholarships may not
              necessarily be clubbed. The final scholarship applicable will
              be determined as per university policy.
            </p>
          </div>
        </div>

        {/* Right: cards */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
          {scholarships.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-3xl shadow-[0_4px_20px_rgba(11,31,58,0.06)] p-6 pt-8 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(11,31,58,0.14)] hover:border-orange-200"
            >
              {/* top accent bar */}
              <span className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-[#0b1f3a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              {/* decorative index number */}
              <span className="absolute top-2 right-2 text-6xl font-black text-orange-100">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* icon badge */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b1f3a] to-[#16345f] text-white flex items-center justify-center text-2xl mb-5 shadow-lg shadow-[#0b1f3a]/20 group-hover:from-orange-500 group-hover:to-orange-400 group-hover:shadow-orange-500/30 transition-all duration-300">
                {item.icon}
              </div>

              <h4 className="relative z-10 font-bold text-[#0b1f3a] text-lg leading-snug mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {item.title}
              </h4>

              <p className="relative z-10 text-sm text-gray-500 leading-relaxed mb-4">
                {item.desc}
              </p>

              {item.list && (
                <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
                  {item.list.map((li, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#0b1f3a] bg-orange-50 border border-orange-100 rounded-full px-2.5 py-1"
                    >
                      {li}
                    </span>
                  ))}
                </div>
              )}

              {item.note && (
                <div className="relative z-10 mt-auto pt-4 border-t border-dashed border-gray-200 flex gap-2">
                  <FaQuoteLeft className="text-orange-300 text-xs mt-0.5 shrink-0" />
                  <p className="text-xs italic text-gray-500 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
