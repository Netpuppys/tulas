'use client';

export default function ClubsCTABanner() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '550px' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600"
          alt="Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg,rgba(27,45,91,.92) 0%,rgba(224,107,27,.85) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-[7%] py-[60px] max-w-[900px] mx-auto">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mb-6 rounded-[8px] px-[18px] py-2 text-[0.72rem] font-bold tracking-[.1em] uppercase text-white"
          style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)' }}
        >
          🎓 Your Journey Awaits
        </div>

        {/* Title */}
        <h2
          className="text-white mb-6 leading-[1.05] tracking-[.02em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,6vw,3rem)' }}
        >
          Find Your Community.<br />
          <em className="not-italic text-white block">Discover Experiences Beyond Academics.</em>
        </h2>

        {/* Subtitle */}
        <p
          className="text-[1.1rem] leading-[1.8] mb-9 font-normal"
          style={{ color: 'rgba(255,255,255,.85)' }}
        >
          Join thousands of students who&apos;ve found their passion, built lasting friendships, and created unforgettable memories through Tula&apos;s vibrant club ecosystem. Your story begins here.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap max-[600px]:flex-col max-[600px]:items-center">
          <a
            href="/campus-life"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.9rem] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(27,45,91,.3)]"
            style={{ background: '#1B2D5B', fontFamily: "'Syne', sans-serif" }}
          >
            Explore Campus Life
          </a>
          <a
            href="#clubs"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-bold text-[0.9rem] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(224,107,27,.35)]"
            style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
          >
            Join Student Clubs →
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-[10px] font-semibold text-[0.9rem] text-white transition-all duration-[250ms] hover:border-[#E06B1B] hover:text-[#E06B1B]"
            style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)', fontFamily: "'Syne', sans-serif" }}
          >
            View Activities
          </a>
        </div>
      </div>
    </div>
  );
}
