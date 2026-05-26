'use client';

export default function FreshersCTABanner() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg,#E06B1B 0%,#c95e16 100%)',
        minHeight: '500px',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%,rgba(255,255,255,.1) 0%,transparent 50%)' }}
      />
      {/* Diagonal stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,.03) 30px,rgba(255,255,255,.03) 60px)' }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-[7%] py-[60px] max-w-[900px] mx-auto">
        <h2
          className="text-white mb-6 leading-[.95] tracking-[.02em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,6vw,6.5rem)', textShadow: '0 4px 20px rgba(0,0,0,.2)' }}
        >
          Your Journey<br />
          Starts Here
        </h2>
        <p
          className="text-[1.18rem] leading-[1.8] mb-10 font-medium"
          style={{ color: 'rgba(255,255,255,.9)' }}
        >
          Join a community where every student finds their place, their passion, and their purpose. Welcome to Tula&apos;s University.
        </p>
        <div className="flex gap-[18px] justify-center flex-wrap max-[600px]:flex-col max-[600px]:items-center">
          <a
            href="/campus-life"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] font-extrabold text-[0.95rem] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(0,0,0,.25)]"
            style={{ background: '#fff', color: '#E06B1B', boxShadow: '0 4px 16px rgba(0,0,0,.15)' }}
          >
            Explore Campus Life →
          </a>
          <a
            href="https://tulas.edu.in/virtual-tour/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] font-bold text-[0.95rem] text-white transition-all duration-300 hover:bg-white hover:text-[#E06B1B]"
            style={{ border: '2px solid #fff' }}
          >
            🏛 Visit Campus
          </a>
        </div>
      </div>
    </section>
  );
}
