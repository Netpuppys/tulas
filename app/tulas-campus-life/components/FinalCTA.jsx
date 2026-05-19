'use client';

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden text-center py-[100px] max-[960px]:py-16 px-[7%]"
      style={{ background: '#1e1e1e' }}
    >
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <img
          src="https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(4px)' }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg,rgba(17,17,17,.95) 0%,rgba(242,101,34,.15) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2]">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-[18px] py-[6px] text-[0.73rem] font-bold text-[#f26522] tracking-[0.1em] uppercase mb-[22px]"
          style={{ background: 'rgba(242,101,34,.15)', border: '1px solid rgba(242,101,34,.3)' }}
        >
          🎓 Admissions 2026 Open
        </div>

        {/* Title */}
        <h2
          className="text-white text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] mb-4 tracking-[0.01em]"
        >
          Your Best Years<br />
          <span className="text-[#f26522]">Start Here.</span>
        </h2>

        {/* Sub */}
        <p className="text-[1.05rem] text-white/60 max-w-[500px] mx-auto mb-10 leading-[1.7]">
          Join 7,000+ alumni whose most treasured memories, deepest friendships, and biggest opportunities all began right here — on this campus.
        </p>

        {/* Buttons */}
        <div className="flex gap-[14px] justify-center flex-wrap max-[600px]:flex-col max-[600px]:items-stretch">
          <a
            href="tel:+91-9837983721"
            className="inline-flex items-center justify-center gap-[7px] px-8 py-[13px] rounded-[10px] font-bold text-[0.92rem] text-white bg-[#111111] transition-all duration-200 hover:bg-[#333] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,.2)]"
          >
            Apply Now →
          </a>
          <a
            href="https://tulas.edu.in/programs/"
            className="inline-flex items-center justify-center gap-[7px] px-8 py-[13px] rounded-[10px] font-bold text-[0.92rem] text-[#f26522] transition-all duration-200 hover:bg-[#f26522] hover:text-white hover:-translate-y-0.5"
            style={{
              background: 'transparent',
              border: '2px solid #f26522',
            }}
          >
            Explore Programs
          </a>
          <a
            href="https://tulas.edu.in/virtual-tour/index.html"
            className="inline-flex items-center justify-center gap-[7px] px-8 py-[13px] rounded-[10px] font-semibold text-[0.84rem] text-white transition-all duration-200 hover:border-white"
            style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,.45)',
            }}
          >
            🏛 Visit Campus
          </a>
        </div>
      </div>
    </section>
  );
}
