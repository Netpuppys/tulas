'use client';

const STATS = [
  { num: '2-Year',        label: 'MBA Program' },
  { num: '6',             label: 'Specializations' },
  { num: 'AI-Integrated', label: 'Curriculum' },
  { num: '₹60 LPA',       label: 'Highest Package' },
];

export default function MBAGHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes cl-mbagh-zoom{from{transform:scale(1)}to{transform:scale(1.08)}}
        .cl-mbagh-bg img{width:100%;height:100%;object-fit:cover;animation:cl-mbagh-zoom 20s ease-in-out infinite alternate}
        .cl-mbagh-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:920px;margin:0 auto;background:rgba(255,255,255,.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.18);border-radius:18px;overflow:hidden}
        @media(max-width:968px){.cl-mbagh-strip{grid-template-columns:repeat(2,1fr)}.cl-mbagh-si:nth-child(2){border-right:none}}
        @media(max-width:640px){.cl-mbagh-strip{grid-template-columns:1fr}.cl-mbagh-si{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.14)}}
      `}} />

      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        {/* Background image */}
        <div className="cl-mbagh-bg absolute inset-0 z-0">
          <img
            src="/courses/mba/bannerImg.webp"
            alt="MBA at Tulas Institute Dehradun"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.65) 0%,rgba(0,21,46,.6) 50%,rgba(223,84,0,.72) 100%)' }}
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
        <div className="relative z-[5] text-center py-[50px] px-[7%] max-w-[1200px] w-full">

          {/* Breadcrumb */}
          <div
            className="flex items-center gap-[10px] justify-center mb-[22px] text-[.82rem] font-medium flex-wrap"
            style={{ color: 'rgba(255,255,255,.65)' }}
          >
            Home / Programs / <span style={{ color: '#FFF3D7' }}>MBA</span>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-[10px] rounded-[32px] px-[28px] py-[10px] font-bold text-[.76rem] uppercase tracking-[.16em] text-white mb-[26px]"
            style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)' }}
          >
            MBA · 6 Specializations · NEP 2020
          </div>

          {/* Title */}
          <h1
            className="text-white mb-[24px] tracking-[.02em]"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(1.5rem,6vw,4.5rem)',
              lineHeight: '.9',
              textShadow: '0 8px 50px rgba(0,0,0,.6)',
            }}
          >
            Master The Business<br />
            <em
              className="not-italic"
              style={{ color: '#FFF3D7', filter: 'drop-shadow(0 4px 16px rgba(255,243,215,.5))' }}
            >
              Of Tomorrow
            </em>
          </h1>

          {/* Description */}
          <p
            className="text-[1.12rem] leading-[1.9] max-w-[840px] mx-auto mb-[38px]"
            style={{ color: 'rgba(255,255,255,.92)' }}
          >
            A two-year, AI-integrated MBA at Tulas Institute, Dehradun — build the management core, choose from six industry-facing specializations, and graduate placement-ready with live projects and a capstone under your belt.
          </p>

          {/* Buttons */}
          <div className="flex gap-[18px] justify-center flex-wrap mb-[50px]">
            <a
              href="https://tulas.edu.in/apply-now/"
              className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300 hover:-translate-y-[2px]"
              style={{ background: '#DF5400', boxShadow: '0 4px 16px rgba(223,84,0,.4)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(223,84,0,.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(223,84,0,.4)'}
            >
              Apply Now →
            </a>
            <a
              href="https://tulas.edu.in/contact/"
              className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,.15)]"
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.5)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.5)'}
            >
              Contact Admissions
            </a>
          </div>

          {/* Stats strip */}
          <div className="cl-mbagh-strip">
            {STATS.map((item, i) => (
              <div
                key={i}
                className="cl-mbagh-si py-[24px] px-[18px] text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,.14)' : 'none' }}
              >
                <span
                  className="block mb-[6px] leading-[1]"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', color: '#FFF3D7' }}
                >
                  {item.num}
                </span>
                <span className="text-[.74rem] font-semibold" style={{ color: 'rgba(255,255,255,.82)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
