'use client';

export default function NCCCTABanner() {
  return (
    <div
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600"
          alt="Leadership moment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg,rgba(27,45,91,.92) 0%,rgba(224,107,27,.82) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-[7%] py-[60px] w-full max-w-[900px] mx-auto">
        {/* Tag */}
        <div
          className="inline-block mb-6 rounded-[8px] px-[18px] py-2 text-[0.75rem] font-bold tracking-[.12em] uppercase text-white"
          style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)' }}
        >
          🎯 Join The Movement
        </div>

        {/* Title */}
        <h2
          className="text-white mb-6 leading-[.95] tracking-[.01em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,7vw,6rem)' }}
        >
          Lead With<br />
          <em className="not-italic" style={{ color: '#E06B1B' }}>Purpose.</em>
        </h2>

        {/* Subtitle */}
        <p
          className="text-[1.12rem] leading-[1.75] max-w-[680px] mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,.8)' }}
        >
          Every leader starts with one decision—to serve, to learn, to grow. Your journey of leadership and social impact begins here.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap max-[600px]:flex-col max-[600px]:items-center">
          <a
            href="/campus-life/tulas-experiences"
            className="inline-flex items-center gap-2 px-[30px] py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(224,107,27,.45)]"
            style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
          >
            Explore Campus Life →
          </a>
          <a
            href="/apply-now"
            className="inline-flex items-center gap-2 px-[30px] py-[14px] rounded-[10px] font-semibold text-[0.92rem] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)', fontFamily: "'Syne', sans-serif" }}
          >
            Join The Community
          </a>
        </div>
      </div>
    </div>
  );
}
