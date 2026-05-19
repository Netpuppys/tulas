'use client';

const MOSAIC_IMAGES = [
  'https://tulas.edu.in/_next/static/media/biggestAuditorium.33536442.png',
  'https://tulas.edu.in/_next/static/media/bannerImgHostel.614f090d.webp',
  'https://tulas.edu.in/_next/static/media/bannerImgLibrary.76d93fb3.webp',
  'https://tulas.edu.in/_next/static/media/bannerImgComputer.71a0ea86.webp',
  'https://tulas.edu.in/_next/static/media/multiUse.4a21bb41.png',
  'https://tulas.edu.in/_next/static/media/mess.4e4d4218.png',
  'https://tulas.edu.in/_next/static/media/cafeteria.fcb5d881.png',
  'https://tulas.edu.in/_next/static/media/img3.ad931c1f.png',
  'https://tulas.edu.in/_next/static/media/library.7922f813.png',
  'https://tulas.edu.in/_next/static/media/img1.cdb374cf.webp',
  'https://tulas.edu.in/_next/static/media/medical.e0bf3fff.png',
  'https://tulas.edu.in/_next/static/media/img1.2971fc59.png',
];

const PILLS = [
  { icon: '🎭', sub: 'Last Night',     text: 'Sanskriti Fest',       pos: 'top-[26%] left-[55%]',  delay: '0s'    },
  { icon: '🏆', sub: 'Utkrisht',       text: '200+ Teams',           pos: 'top-[32%] right-[5%]', delay: '-2s'   },
  { icon: '🎬', sub: 'DIFF Edition 10',text: 'Cinema on campus',     pos: 'bottom-[30%] left-[56%]',delay: '-3.5s' },
  { icon: '⭐', sub: 'Celebrity Visit', text: '"Just got a selfie!"', pos: 'bottom-[26%] right-[6%]',delay: '-1s'  },
];

const STATS = [
  { val: '1,000+', lbl: 'Events Hosted'   },
  { val: '7,000+', lbl: 'Alumni Stories'  },
  { val: '50+',    lbl: 'Celebrity Visits' },
  { val: '11',     lbl: 'Student Clubs'   },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes cl-zb {
          from { transform: scale(1.1); }
          to   { transform: scale(1.18); }
        }
        @keyframes cl-fp {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-9px); }
        }
        .cl-mosaic-img {
          animation: cl-zb 9s ease-in-out infinite alternate;
        }
        .cl-mosaic-cell:nth-child(even) .cl-mosaic-img {
          animation-delay: -4.5s;
        }
        .cl-pill { animation: cl-fp 5s ease-in-out infinite; }
      `}</style>

      <div
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ height: 'calc(100vh - 70px)', minHeight: '560px' }}
      >
        {/* Mosaic background */}
        <div
          className="absolute inset-0 grid gap-[3px] opacity-[0.46] z-0"
          style={{ gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: 'repeat(3,1fr)' }}
        >
          {MOSAIC_IMAGES.map((src, i) => (
            <div key={i} className="cl-mosaic-cell overflow-hidden">
              <img
                src={src}
                alt=""
                className="cl-mosaic-img w-full h-full object-cover block"
                style={{ transform: 'scale(1.1)' }}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to top,rgba(0,0,0,.93) 0%,rgba(0,0,0,.52) 44%,rgba(0,0,0,.16) 100%)' }}
        />

        {/* Diagonal lines overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.025]"
          style={{ background: 'repeating-linear-gradient(-55deg,transparent,transparent 40px,rgba(255,255,255,.6) 40px,rgba(255,255,255,.6) 41px)' }}
        />

        {/* Floating pills — hidden on mobile */}
        {PILLS.map((pill, i) => (
          <div
            key={i}
            className={`cl-pill absolute z-[4] hidden max-[960px]:hidden md:flex items-center gap-[9px] rounded-[14px] px-[16px] py-[11px] text-[0.76rem] font-semibold text-white ${pill.pos}`}
            style={{
              background: 'rgba(255,255,255,.1)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,.18)',
              animationDelay: pill.delay,
            }}
          >
            <span className="text-[1.1rem]">{pill.icon}</span>
            <div>
              <span className="block text-[0.58rem] text-white/45 mb-[1px] tracking-[0.05em] uppercase">{pill.sub}</span>
              {pill.text}
            </div>
          </div>
        ))}

        {/* Text content pinned to bottom */}
        <div className="relative z-[5] px-[7%]">
          <div className="pb-10">
            {/* Breadcrumb */}
            {/* <div className="flex items-center gap-2 mb-[18px] text-[0.77rem] text-white/48 font-medium tracking-[0.05em] uppercase">
              <span>Home</span>
              <span className="opacity-30">/</span>
              <span className="text-[#f26522]">Campus Life</span>
            </div> */}

            {/* Tag */}
            <div className="inline-flex items-center mb-[18px] bg-[#f26522] rounded-[6px] px-[13px] py-[5px] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white">
              🎓 Campus Life at Tula&apos;s
            </div>

            {/* Title */}
            <h1
              className="text-white mb-[18px] text-[clamp(1.5rem,3vw,2.8rem)] font-extrabold leading-[1.1] tracking-[0.01em]"
              style={{
                fontSize: 'clamp(2rem,7vw,6rem)',
              }}
            >
              More Than<br />
              A Campus.<span className="text-[#f26522] block">A Whole Experience.</span>
            </h1>

            {/* Sub */}
            <p className="text-[1.05rem] leading-[1.7] text-white/68 max-w-[560px] mb-[30px]">
              At Tula&apos;s, learning begins in classrooms and grows through{' '}
              <strong className="text-white">experiences, friendships and opportunities.</strong>
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap mb-8 max-[600px]:flex-col max-[600px]:gap-2">
              <a
                href="#experiences"
                className="inline-flex items-center justify-center gap-[7px] px-7 py-3 rounded-[10px] font-bold text-[0.9rem] text-white bg-[#f26522] hover:bg-[#e05510] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(242,101,34,.4)]"
              >
                Explore Campus Life →
              </a>
              <a
                href="https://tulas.edu.in/virtual-tour/index.html"
                className="inline-flex items-center justify-center gap-[7px] px-7 py-3 rounded-[10px] font-semibold text-[0.9rem] text-white transition-all duration-200 hover:border-[#f26522] hover:text-[#f26522]"
                style={{ border: '1.5px solid rgba(255,255,255,.33)', background: 'transparent' }}
              >
                🏛 Visit Campus
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-4 max-[600px]:grid-cols-2"
            style={{ background: '#1e1e1e' }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="py-[18px] text-center"
                style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}
              >
                <span
                  className="block text-[#f26522] leading-[1] text-[1.6rem] font-extrabold"
                 
                >
                  {s.val}
                </span>
                <span className="block text-[0.69rem] text-white/40 tracking-[0.08em] uppercase mt-1">
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
