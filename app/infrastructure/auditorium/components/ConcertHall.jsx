'use client';

const FEATURES = [
  {
    icon: '🔊',
    title: 'Dolby Surround Sound System',
    text: 'The auditorium houses a professional-grade Dolby surround sound system, ensuring exceptional audio quality for performances, conferences, motivational talks, and cinematic screenings.',
  },
  {
    icon: '📽️',
    title: 'High-Resolution Imported Projector',
    text: 'A specially imported, powerful high-resolution projector supports everything from slideshows and presentations to full-scale HD movie screenings and motivational video sessions.',
  },
  {
    icon: '💡',
    title: 'Advanced Stage Lighting',
    text: 'State-of-the-art programmable lighting rigs transform the stage for any event — from intimate lectures to large-scale cultural performances and annual day celebrations.',
  },
];

export default function ConcertHall() {
  return (
    <section className="bg-white py-24 max-[960px]:py-16 max-[600px]:py-12 px-[7%] max-[960px]:px-[5%] max-[600px]:px-[4%]">
      <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-9 items-center">

        {/* Left — text */}
        <div>
          <div className="flex items-center gap-2 text-[0.73rem] font-bold text-[#f26522] uppercase tracking-[0.14em] mb-[14px]">
            <span className="block w-6 h-[2.5px] bg-[#f26522] rounded-[2px] flex-shrink-0" />
            Venue Capabilities
          </div>

          <h2
            className="font-montserrat font-extrabold leading-[1.1] text-[#111111] mb-[14px] max-[600px]:text-[1.65rem]"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            A Multi-Use<br />
            <em className="text-[#f26522] not-italic">Concert Hall</em>
          </h2>

          <p className="text-[0.97rem] leading-[1.78] text-[#6b7280]">
            The auditorium is a multi-use concert hall with wonderful acoustics and a warm, welcoming ambience. It is a perfect venue for both non-academic and academic events — from musical, dance, and theatre performances to lectures, conferences, and film screenings.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-4 mt-8 list-none">
            {FEATURES.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-4 max-[600px]:gap-3 py-[18px] max-[600px]:py-[14px] px-5 max-[600px]:px-4 bg-[#f7f8fc] border-[1.5px] border-[#e8e8e8] hover:border-[#f26522] hover:translate-x-1 rounded-[12px] transition-all duration-200"
              >
                <div className="w-10 h-10 max-[600px]:w-9 max-[600px]:h-9 bg-[#fff3ec] rounded-[10px] flex items-center justify-center text-[1.15rem] max-[600px]:text-[1rem] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[0.92rem] max-[600px]:text-[0.88rem] text-[#111111] mb-1">{f.title}</div>
                  <div className="text-[0.83rem] max-[600px]:text-[0.8rem] text-[#6b7280] leading-[1.6]">{f.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image */}
        <div className="relative">
          {/* Orange corner accent — bottom-right */}
          <div className="absolute -bottom-3 -right-3 w-[80px] h-[80px] border-b-4 border-r-4 border-[#f26522] rounded-[4px] pointer-events-none max-[600px]:hidden" />

          <img
            src="https://tulas.edu.in/_next/static/media/multiUse.4a21bb41.png"
            alt="Multi-use Concert Hall"
            className="w-full aspect-[4/3] object-cover rounded-[18px] block shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
          />

          {/* Float badge */}
          <div className="absolute top-5 left-5 max-[600px]:top-[14px] max-[600px]:left-[14px] bg-[#f26522] text-white rounded-[10px] px-[18px] py-[14px] max-[600px]:px-[14px] max-[600px]:py-[10px] font-montserrat font-extrabold shadow-[0_8px_24px_rgba(242,101,34,0.4)] text-center">
            <div className="text-[1.6rem] max-[600px]:text-[1.3rem] leading-none">550</div>
            <span className="text-[0.68rem] max-[600px]:text-[0.62rem] opacity-90 tracking-[0.06em] uppercase mt-0.5 block">Seats</span>
          </div>
        </div>
      </div>
    </section>
  );
}
