'use client';

const PILLS = [
  { bold: '4-Year',        rest: ' B.Tech Program'       },
  { bold: 'AI-Integrated', rest: ' Curriculum'           },
  { bold: null,            rest: 'Industry Certifications' },
  { bold: null,            rest: 'Project-Based Learning'  },
  { bold: 'Up to ₹60 LPA',rest: ' Highest Package'       },
];

export default function CSEHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes cl-cse-zoom{from{transform:scale(1)}to{transform:scale(1.08)}}
        .cl-cse-bg img{width:100%;height:100%;object-fit:cover;animation:cl-cse-zoom 20s ease-in-out infinite alternate}
      `}} />

      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{  minHeight: 'calc(100vh - 80px)' }}
      >
        {/* Background */}
        <div className="cl-cse-bg absolute inset-0 z-0">
          <img src="/courses/bca/bannerImg.webp" alt="Computer Science & Engineering at Tulas" />
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
          <div className="flex items-center gap-[10px] justify-center mb-[22px] text-[.82rem] font-medium" style={{ color: 'rgba(255,255,255,.65)' }}>
            Home / Programs / B.Tech / <span style={{ color: '#FFF3D7' }}>Computer Science &amp; Engineering</span>
          </div>

          {/* Tag */}
          <div
            className="inline-flex items-center gap-[10px] rounded-[32px] px-[28px] py-[10px] font-bold text-[.76rem] uppercase tracking-[.16em] text-white mb-[26px]"
            style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.25)' }}
          >
            B.Tech CSE · NBA Accredited
          </div>

          {/* Title */}
          <h1
            className="text-white mb-[24px] tracking-[.02em]"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(2.2rem,5vw,5.5rem)',
              lineHeight: '.9',
              textShadow: '0 8px 50px rgba(0,0,0,.6)',
            }}
          >
            Build The Future With<br />
            <em className="not-italic" style={{ color: '#FFF3D7', filter: 'drop-shadow(0 4px 16px rgba(255,243,215,.5))' }}>Computer Science</em>
          </h1>

          {/* Sub */}
          <p className="text-[1.14rem] leading-[1.9] max-w-[840px] mx-auto mb-[30px]" style={{ color: 'rgba(255,255,255,.92)' }}>
            Study Computer Science &amp; Engineering at Tulas and gain expertise in software development, artificial intelligence, data science, cyber security and emerging technologies — through an AI-integrated curriculum.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-[10px] justify-center max-w-[880px] mx-auto mb-[34px]">
            {PILLS.map((pill, i) => (
              <span
                key={i}
                className="px-[18px] py-[9px] rounded-[30px] text-[.8rem] font-semibold text-white"
                style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.22)' }}
              >
                {pill.bold && <strong style={{ color: '#FFF3D7', fontWeight: 800 }}>{pill.bold}</strong>}
                {pill.rest}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-[18px] justify-center flex-wrap">
            <a
              href="https://tulas.edu.in/apply-now/"
              className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300 hover:-translate-y-[2px]"
              style={{ background: '#DF5400', boxShadow: '0 4px 16px rgba(223,84,0,.4)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(223,84,0,.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(223,84,0,.4)'}
            >
              Apply Now →
            </a>
            {[ 'Contact Admissions'].map((label, i) => (
              <a
                key={i}
                href="https://tulas.edu.in/contact/"
                className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300"
                style={{ background: 'transparent', border: '2px solid rgba(255,255,255,.5)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.5)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
