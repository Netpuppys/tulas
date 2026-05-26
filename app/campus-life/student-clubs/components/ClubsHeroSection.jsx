'use client';

const COLLAGE_IMGS = [
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
  'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=400',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
];

const PILLS = [
  { icon: '🎤', sub: 'Find Your',    bold: 'Voice',       pos: 'top-[18%] left-[7%]',    delay: '0s'    },
  { icon: '🎨', sub: 'Create With',  bold: 'Passion',     pos: 'top-[25%] right-[8%]',   delay: '-2s'   },
  { icon: '💡', sub: 'Lead With',    bold: 'Purpose',     pos: 'bottom-[35%] left-[9%]', delay: '-4s'   },
  { icon: '⚡', sub: 'Grow Through', bold: 'Experiences', pos: 'bottom-[32%] right-[10%]',delay: '-1.5s' },
];

const STATS = [
  { val: '11+',   lbl: 'Active Clubs'    },
  { val: '1000+', lbl: 'Members'         },
  { val: '150+',  lbl: 'Events Annually' },
  { val: '100%',  lbl: 'Participation'   },
];

export default function ClubsHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`.cl-clubs-collage{position:absolute;inset:0;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,1fr);gap:4px;opacity:.5;z-index:0}@media(max-width:968px){.cl-clubs-collage{grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}}.cl-col-cell{overflow:hidden}.cl-col-cell img{width:100%;height:100%;object-fit:cover;transform:scale(1.05);animation:cl-clubs-zoom 12s ease-in-out infinite alternate}.cl-col-cell:nth-child(odd) img{animation-delay:-6s}.cl-col-cell:nth-child(3n) img{animation-delay:-3s}@keyframes cl-clubs-zoom{from{transform:scale(1.05)}to{transform:scale(1.15)}}.cl-clubs-pill{animation:cl-clubs-float 6s ease-in-out infinite}@keyframes cl-clubs-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}} />

      <div
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ height: 'calc(100vh - 70px)', minHeight: '600px' }}
      >
        {/* Collage background */}
        <div className="cl-clubs-collage">
          {COLLAGE_IMGS.map((src, i) => (
            <div key={i} className="cl-col-cell">
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to top,rgba(27,45,91,.96) 0%,rgba(27,45,91,.7) 40%,rgba(27,45,91,.3) 70%,transparent 100%)' }}
        />

        {/* Diagonal texture */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.02]"
          style={{ background: 'repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(255,255,255,.8) 30px,rgba(255,255,255,.8) 31px)' }}
        />

        {/* Floating pills — hidden on mobile */}
        {PILLS.map((pill, i) => (
          <div
            key={i}
            className={`cl-clubs-pill absolute z-[4] hidden md:flex items-center gap-[10px] rounded-[16px] px-5 py-[14px] text-[0.75rem] font-semibold text-white ${pill.pos}`}
            style={{
              background: 'rgba(255,255,255,.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,.15)',
              animationDelay: pill.delay,
            }}
          >
            <span className="text-[1.3rem]">{pill.icon}</span>
            <div>
              <span className="block text-[0.6rem] mb-[2px] tracking-[.06em] uppercase" style={{ color: 'rgba(255,255,255,.5)' }}>{pill.sub}</span>
              <strong>{pill.bold}</strong>
            </div>
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-[5] px-[7%] max-[600px]:px-[5%]">
          <div className="pb-0">
            {/* Tag */}
            <div
              className="inline-flex items-center mb-5 rounded-[7px] px-[15px] py-[6px] text-[0.68rem] font-bold tracking-[.14em] uppercase text-white"
              style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
            >
              Student Communities
            </div>

            {/* Title */}
            <h1
              className="text-white mb-[22px] leading-[.95] tracking-[.01em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,8vw,6.5rem)' }}
            >
              Where Every Passion<br />
              <em className="not-italic" style={{ color: '#E06B1B' }}>Finds Its People.</em>
            </h1>

            {/* Subtitle */}
            <p className="text-[1.08rem] leading-[1.75] max-w-[620px] mb-8" style={{ color: 'rgba(255,255,255,.7)' }}>
              At Tula&apos;s, clubs and committees create opportunities for leadership, creativity, collaboration and growth beyond classrooms. This is where students discover themselves through experiences that shape personalities and build communities.
            </p>

            {/* Buttons */}
            <div className="flex gap-[14px] flex-wrap mb-[50px] max-[600px]:mb-8">
              <a
                href="#clubs"
                className="inline-flex items-center gap-2 px-[30px] py-[13px] rounded-[10px] font-bold text-[0.9rem] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(224,107,27,.35)]"
                style={{ background: '#E06B1B', fontFamily: "'Syne', sans-serif" }}
              >
                Explore Clubs →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-[30px] py-[13px] rounded-[10px] font-semibold text-[0.9rem] text-white transition-all duration-[250ms] hover:border-[#E06B1B] hover:text-[#E06B1B]"
                style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.4)', fontFamily: "'Syne', sans-serif" }}
              >
                Join The Community
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-4 max-[600px]:grid-cols-2"
            style={{ background: '#1B2D5B', borderTop: '2px solid rgba(224,107,27,.4)' }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="py-5 text-center"
                style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none' }}
              >
                <span
                  className="block font-extrabold text-[1.7rem] leading-[1] mb-[5px]"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#E06B1B' }}
                >
                  {s.val}
                </span>
                <span className="block text-[0.68rem] tracking-[.09em] uppercase mt-1" style={{ color: 'rgba(255,255,255,.45)' }}>
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
