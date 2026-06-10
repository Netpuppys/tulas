'use client';

export default function LeadershipFestCTA() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '650px' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80"
          alt="Campus celebration"
          className="w-full h-full object-cover"
          style={{ filter: 'contrast(1.06) brightness(.95)' }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.93) 0%,rgba(0,31,76,.88) 40%,rgba(223,84,0,.8) 100%)' }}
      />

      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          opacity: '.05',
          background: 'repeating-linear-gradient(45deg,transparent,transparent 65px,rgba(255,255,255,.7) 65px,rgba(255,255,255,.7) 66px)',
        }}
      />

      {/* Content */}
      <div className="relative z-[3] text-center py-[90px] px-[7%]">
        {/* Tag */}
        <div
          className="inline-block mb-7 px-[22px] py-[10px] rounded-[12px] text-[.76rem] font-extrabold tracking-[.14em] uppercase text-white"
          style={{ background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.3)' }}
        >
          🌟 Your Story Begins Here
        </div>

        {/* Title */}
        <h2
          className="font-black text-white mb-[26px] leading-[.92] tracking-[-0.015em]"
          style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(3rem,7vw,6.5rem)' }}
        >
          Every Day Becomes<br />
          <em
            className="not-italic block"
            style={{ color: '#ff6b1a', textShadow: '0 6px 40px rgba(223,84,0,.7)' }}
          >
            A Memory.
          </em>
        </h2>

        {/* Sub */}
        <p
          className="text-[1.25rem] leading-[1.8] max-w-[750px] mx-auto mb-[45px] font-medium"
          style={{ color: 'rgba(255,255,255,.85)' }}
        >
          Join a community where every celebration, workshop, and spontaneous moment shapes your university experience. This is where friendships are forged, passions are discovered, and memories are made.
        </p>

        {/* Buttons */}
        <div className="flex gap-[18px] justify-center flex-wrap">
          <a
            href="https://tulas.edu.in/admissions-open/"
            className="inline-flex items-center gap-2 px-[38px] py-4 rounded-[12px] font-bold text-[.95rem] text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#001F4C' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#001635'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,31,76,.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#001F4C'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Join The Community
          </a>
          <a
            href="https://tulas.edu.in/virtual-tour/"
            className="inline-flex items-center gap-2 px-[38px] py-4 rounded-[12px] font-bold text-[.95rem] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.5)' }}
          >
            Visit Campus
          </a>
        </div>
      </div>
    </div>
  );
}
