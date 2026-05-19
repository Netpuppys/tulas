'use client';

const CHIPS = [
  { icon: '🪑',  label: '550-Seat Capacity' },
  { icon: '❄️', label: 'Central Air Conditioning' },
  { icon: '🔊', label: 'Dolby Surround Sound' },
  { icon: '📽️', label: 'HD Imported Projector' },
  { icon: '💡', label: 'State-of-the-Art Lighting' },
  { icon: '🎭', label: 'Multi-Purpose Venue' },
  { icon: '🏛️', label: 'Modern Architecture' },
  { icon: '🎵', label: 'Excellent Acoustics' },
];

export default function OverviewSection() {
  return (
    <section className="bg-[#f7f8fc] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Image frame */}
        <div className="relative rounded-[20px] overflow-visible">
          {/* Orange corner accent — top-left */}
          <div className="absolute -top-3 -left-3 w-[100px] h-[100px] border-t-4 border-l-4 border-[#f26522] rounded-[4px] pointer-events-none z-10 max-[600px]:hidden" />

          <img
            src="https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png"
            alt="Tulas Auditorium"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
          />

          {/* Badge */}
          <div className="absolute -bottom-5 -right-5 max-[960px]:right-0 max-[960px]:-bottom-4 max-[600px]:static max-[600px]:flex max-[600px]:items-center max-[600px]:gap-[14px] max-[600px]:text-left max-[600px]:rounded-[12px] max-[600px]:mt-4 max-[600px]:w-fit z-10 bg-[#111111] text-white rounded-[14px] px-[22px] py-[18px] max-[600px]:px-[18px] max-[600px]:py-[14px] font-montserrat font-extrabold shadow-[0_12px_32px_rgba(0,0,0,0.22)] min-w-[140px] max-[600px]:min-w-0 text-center">
            <span className="text-[1.9rem] max-[600px]:text-[1.7rem] leading-none text-[#f26522] block">550</span>
            <span className="text-[0.68rem] max-[600px]:text-[0.67rem] text-white/55 tracking-[0.07em] uppercase mt-1 max-[600px]:mt-0 block">Seat Capacity<br />Auditorium</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            About the Auditorium
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            Biggest Auditorium in<br />
            <em className="text-[#f26522] not-italic">Dehradun</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            Tula&apos;s Institute takes pride in exhibiting a state-of-the-art auditorium, located at the very heart of the campus. It has been constructed keeping in mind the smallest of details and is equipped with the latest technology — a perfect example of modern architecture, certainly one of its kind in the entire Northern India.
          </p>
          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280] mt-[14px]">
            As a result of this world-class infrastructure, Tulas Institute has consistently been ranked among the Top 10 Engineering Colleges in Uttarakhand by independent surveys, making it a top choice for students across India.
          </p>

          {/* Chips */}
          <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-3 mt-8 max-[600px]:mt-6">
            {CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] bg-white border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:shadow-[0_4px_16px_rgba(242,101,34,0.12)] hover:-translate-y-0.5 rounded-[10px] px-4 py-3 text-[0.84rem] max-[600px]:text-[0.83rem] text-[#1e1e1e] font-medium transition-all duration-200"
              >
                <span className="text-[1.05rem] flex-shrink-0">{chip.icon}</span>
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
