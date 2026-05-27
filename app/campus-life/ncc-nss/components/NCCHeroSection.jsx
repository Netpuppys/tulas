'use client';

const MOSAIC_IMGS = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400',
  'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=400',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
  'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400',
  'https://images.unsplash.com/photo-1523301551780-cd17359a95d0?w=400',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400',
];

const PILLS = [
  { icon: '🎯', sub: 'Mission',  bold: 'Service Culture',   pos: 'top-[18%] left-[6%]',     delay: '0s'    },
  { icon: '🤝', sub: 'Impact',   bold: '5,000+ Lives',      pos: 'top-[24%] right-[7%]',    delay: '-2.5s' },
  { icon: '⚡', sub: 'Focus',    bold: 'Character Building', pos: 'bottom-[28%] left-[5%]',  delay: '-4s'   },
  { icon: '🌟', sub: 'Growth',   bold: 'Real Leadership',   pos: 'bottom-[24%] right-[6%]', delay: '-1.5s' },
];

export default function NCCHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-ncc-mosaic{position:absolute;inset:0;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(3,1fr);gap:2px;opacity:.52;z-index:0}@media(max-width:968px){.cl-ncc-mosaic{grid-template-columns:repeat(3,1fr)}}.cl-ncc-cell{overflow:hidden}.cl-ncc-cell img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);animation:cl-ncc-zoom 12s ease-in-out infinite alternate}.cl-ncc-cell:nth-child(2n) img{animation-delay:-6s}.cl-ncc-cell:nth-child(3n) img{animation-delay:-3s}@keyframes cl-ncc-zoom{from{transform:scale(1.08)}to{transform:scale(1.16)}}.cl-ncc-pill{animation:cl-ncc-float 6s ease-in-out infinite}@keyframes cl-ncc-float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-12px) scale(1.02)}}`}} />

      <div
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ height: 'calc(100vh - 70px)', minHeight: '600px' }}
      >
        {/* Mosaic background */}
        <div className="cl-ncc-mosaic">
          {MOSAIC_IMGS.map((src, i) => (
            <div key={i} className="cl-ncc-cell">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to top,rgba(27,45,91,.96) 0%,rgba(27,45,91,.65) 40%,rgba(0,0,0,.22) 100%)' }}
        />

        {/* Diagonal lines texture */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.018]"
          style={{ background: 'repeating-linear-gradient(-55deg,transparent,transparent 45px,rgba(255,255,255,.7) 45px,rgba(255,255,255,.7) 46px)' }}
        />

        {/* Floating pills — hidden on mobile */}
        {PILLS.map((pill, i) => (
          <div
            key={i}
            className={`cl-ncc-pill absolute z-[4] hidden md:flex items-center gap-[10px] rounded-[16px] px-[18px] py-[13px] text-[0.75rem] font-semibold text-white ${pill.pos}`}
            style={{
              background: 'rgba(255,255,255,.12)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,.2)',
              boxShadow: '0 8px 24px rgba(0,0,0,.15)',
              animationDelay: pill.delay,
            }}
          >
            <span className="text-[1.2rem] leading-none">{pill.icon}</span>
            <div>
              <span className="block text-[0.58rem] mb-[2px] tracking-[.06em] uppercase font-bold" style={{ color: 'rgba(255,255,255,.5)' }}>{pill.sub}</span>
              <strong>{pill.bold}</strong>
            </div>
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-[5] px-[7%] max-[600px]:px-[5%]">
          <div className="pb-12 max-[600px]:pb-8">
            {/* Tag */}
            <div
              className="inline-flex items-center mb-5 rounded-[7px] px-[15px] py-[6px] text-[0.68rem] font-bold tracking-[.14em] uppercase text-white"
              style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif", boxShadow: '0 4px 16px rgba(224,107,27,.4)' }}
            >
              NCC &amp; NSS at Tula&apos;s
            </div>

            {/* Title */}
            <h1
              className="text-white mb-5 leading-[.9] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.2rem,9vw,9rem)' }}
            >
              Leadership<br />
              <em className="not-italic block" style={{ color: '#E06B1B' }}>Beyond Classrooms.</em>
            </h1>

            {/* Sub */}
            <p className="text-[1.08rem] leading-[1.75] max-w-[640px] mb-9 font-normal" style={{ color: 'rgba(255,255,255,.7)' }}>
              At Tula&apos;s,{' '}
              <strong className="text-white font-semibold">leadership is shaped through responsibility, teamwork, service and real-world experiences.</strong>{' '}
              We build character, discipline and purpose through action-driven learning.
            </p>

            {/* Buttons */}
            <div className="flex gap-[14px] flex-wrap max-[600px]:flex-col max-[600px]:gap-3">
              <a
                href="#experiences"
                className="inline-flex items-center gap-2 px-[30px] py-[14px] rounded-[10px] font-bold text-[0.92rem] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(224,107,27,.45)]"
                style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
              >
                Explore Leadership &amp; Service →
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-[30px] py-[14px] rounded-[10px] font-semibold text-[0.92rem] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)', fontFamily: "'Syne', sans-serif" }}
              >
                View Activities
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
