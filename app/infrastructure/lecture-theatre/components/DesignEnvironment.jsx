'use client';

const SPECS = [
  { label: 'Seating Capacity', val: '70',        highlight: '70',        rest: ' Students' },
  { label: 'AV Equipment',     val: 'Advanced',   highlight: 'Advanced',  rest: ' Grade' },
  { label: 'Seating Type',     val: 'Tiered',     highlight: 'Tiered',    rest: ' & Ergonomic' },
  { label: 'Acoustics',        val: 'Optimised',  highlight: 'Optimised', rest: ' Design' },
  { label: 'Lighting',         val: 'Glare-Free', highlight: 'Glare-Free',rest: ' Setup' },
  { label: 'Environment',      val: 'Comfortable',highlight: 'Comfortable',rest: ' & Ventilated' },
];

const BADGES = [
  'Interactive Learning',
  'Student-Centred Design',
  'Faculty-Friendly',
  'Fully Equipped',
];

export default function DesignEnvironment() {
  return (
    <section className="bg-[#1e1e1e] py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Left — image */}
        <div>
          <img
            src="https://tulas.edu.in/_next/static/media/img3.0c27ce26.webp"
            alt="Lecture Theatre Design"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block"
          />
        </div>

        {/* Right — text + specs */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Learning Environment
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-white mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            An Environment<br />
            <em className="text-[#f26522] not-italic">Built to Inspire</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-white/52">
            The lecture theatres at Tulas are more than rooms — they are carefully crafted learning environments where architecture, technology, and comfort come together to inspire academic excellence. Every detail, from sight-lines to air circulation, has been designed with the student experience in mind.
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 max-[600px]:gap-[10px] mt-8 max-[600px]:mt-6">
            {SPECS.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] hover:border-[#f26522] rounded-[12px] px-4 py-[18px] max-[600px]:px-3 max-[600px]:py-3 transition-colors duration-200"
              >
                <div className="text-[0.72rem] max-[600px]:text-[0.68rem] text-white/40 tracking-[0.08em] uppercase mb-[6px]">{s.label}</div>
                <div className="font-montserrat font-bold text-[1.05rem] max-[600px]:text-[0.95rem] text-white">
                  <em className="text-[#f26522] not-italic">{s.highlight}</em>{s.rest}
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex gap-[10px] flex-wrap mt-6 max-[600px]:gap-2">
            {BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-[7px] bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-[7px] max-[600px]:px-3 max-[600px]:py-[6px] text-[0.79rem] max-[600px]:text-[0.74rem] text-white/68 font-medium"
              >
                <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full flex-shrink-0 block" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
