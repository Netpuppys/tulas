"use client";

export default function LandingHighlights() {

  const cards = [
    {
      title: "Specialisation Of Choice",
      desc: "Over 6 programs and specializations across management designed to align with evolving industry",
    },
    {
      title: "Placement Focused Program",
      desc: "100% placement assistance for eligible students, with 750+ recruiters participating in campus drives.",
    },
    {
      title: "Alumni Network",
      desc: "7,000+ strong alumni community spread across geographies helping with mentorship and industry connections.",
    },
    {
      title: "Incubator & Entrepreneurship",
      desc: "Innovation & Incubation Center to support student ventures and practical innovation.",
    },
    {
      title: "Library Bank",
      desc: "8,118+ Book Titles, 62,382+ Volumes, 18,383+ E-Books, 3,338+ E-Journals, Reading Room & Multimedia PCs.",
    },
    {
      title: "Learn from Industry Experts",
      desc: "Gain academic depth with industry exposure, supported by guest lectures and corporate workshops.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-[clamp(32px,5vw,44px)] font-extrabold">
          <span className="text-orange-500">Tulas</span>{" "}
          <span className="text-gray-900">Highlights</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-10xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 shadow-md border border-orange-500 overflow-hidden
            min-h-[150px] sm:min-h-[170px] lg:min-h-[260px] flex flex-col justify-between"
          >

            {/* Orange gradient background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#f97316_0%,#ea580c_35%,#fb923c_60%)]"></div>

            {/* Bottom white fade */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10">

              <h3 className="text-white font-bold text-lg leading-snug mb-3">
                {card.title}
              </h3>

              <p className="text-gray-800 text-sm leading-relaxed">
                {card.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}