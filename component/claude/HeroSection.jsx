"use client";

const rankings = [
  { rank: "122nd", label: "Engineering Excellence", source: "TIMES ENGINEERING" },
  { rank: "32nd", label: "Private Emerging Institute", source: "THE WEEK" },
  { rank: "65th", label: "Engineering Excellence", source: "Outlook" },
  { rank: "2nd", label: "Best Engineering Uttarakhand", source: "THE WEEK" },
  { rank: "Top 20", label: "Private Engineering College", source: "Career Links" },
  { rank: "AAA", label: "Engineering Excellence", source: "CAREERS360" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full min-h-[85vh] bg-gradient-to-b from-sky-300 via-sky-200 to-amber-100 flex flex-col"
        style={{
          backgroundImage: "url('/campus-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-transparent to-amber-50/60" />

        {/* Accreditation badges */}
        <div className="relative z-10 flex flex-col items-center pt-10 pb-4">
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-blue-700 text-white font-black text-xl px-3 py-1 rounded">NBA</div>
              <span className="text-xs text-gray-600 mt-1 text-center">Accredited<br />Programs</span>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="flex items-center gap-1">
              <span className="font-black text-2xl text-pink-600">NAAC</span>
              <span className="bg-pink-600 text-white font-black text-lg px-1.5 rounded">A+</span>
            </div>
          </div>
          <p className="mt-3 text-gray-800 font-semibold text-sm text-center">
            Ranked | Recognized | Trusted by 1000s of Student Nationwide
          </p>
        </div>

        {/* Ranking Cards */}
        <div className="relative z-10 flex justify-center gap-4 px-6 mt-4 flex-wrap">
          {rankings.map((r, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex flex-col items-center shadow-lg min-w-[130px] max-w-[150px] border border-orange-100"
            >
              <div className="text-orange-300 text-2xl mb-1">🏅</div>
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                {r.rank === "Top 20" ? "Top" : "Ranked"}
              </div>
              <div className="font-black text-3xl text-orange-500 leading-none">
                {r.rank === "Top 20" ? "20" : r.rank}
              </div>
              <div className="text-gray-700 text-xs font-semibold text-center mt-2 leading-tight">{r.label}</div>
              <div className="mt-2 text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">{r.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Open Marquee */}
      <div className="bg-orange-500 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-white font-bold text-sm uppercase tracking-wider">
              <span>🎓</span> ADMISSION OPEN 2026
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
