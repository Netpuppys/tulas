'use client';

export default function UGHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes cl-ugh-zoom{from{transform:scale(1)}to{transform:scale(1.08)}}
        .cl-ugh-bg img{width:100%;height:100%;object-fit:cover;animation:cl-ugh-zoom 20s ease-in-out infinite alternate}
      `}} />

      <section
        className="cl-ugh relative w-full overflow-hidden flex items-center justify-center"
        style={{ height: '52vh', minHeight: 400 }}
      >
        {/* Background */}
        {/* <div className="cl-ugh-bg absolute inset-0 z-0">
          <img src="assets/ABHI0044.JPG" alt="Programs at Tulas" />
        </div> */}

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.95) 0%,rgba(0,21,46,.9) 50%,rgba(223,84,0,.72) 100%)' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            opacity: .06,
            backgroundImage: 'linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-[5] text-center py-[40px] px-[7%] max-w-[1100px] w-full">
          {/* <div className="flex items-center gap-[10px] justify-center mb-[20px] text-[.82rem] font-medium" style={{ color: 'rgba(255,255,255,.65)' }}>
            Home / Academics / <span style={{ color: '#FFF3D7' }}>Undergraduate</span>
          </div> */}

          <div
            className="inline-flex items-center gap-[10px] rounded-[32px] px-[28px] py-[10px] font-bold text-[.76rem] uppercase tracking-[.16em] text-white mb-[22px]"
            style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)' }}
          >
            Browse By Schools
          </div>

          <h1
            className="text-white mb-[18px] tracking-[.02em]"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(2rem,6vw,5rem)',
              lineHeight: '.92',
              textShadow: '0 8px 50px rgba(0,0,0,.6)',
            }}
          >
            Undergraduate<br />
            <em className="not-italic" style={{ color: '#FFF3D7', filter: 'drop-shadow(0 4px 16px rgba(255,243,215,.5))' }}>Programs</em>
          </h1>

          <p className="text-[1.08rem] leading-[1.8] max-w-[720px] mx-auto" style={{ color: 'rgba(255,255,255,.92)' }}>
            Explore programs across every school at Tulas — discover specializations, durations and eligibility, and find the path that fits your future.
          </p>
        </div>
      </section>
    </>
  );
}
