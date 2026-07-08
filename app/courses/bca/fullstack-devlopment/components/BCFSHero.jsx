'use client';

const STATS = [
  { num: '4-Year',    label: 'Programme' },
  { num: '8',         label: 'Semesters' },
  { num: '8 Certs',   label: 'Industry Certifications' },
  { num: '4 Tracks',  label: 'MERN · Django · Spring Boot · Laravel' },
];

export default function BCFSHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes cl-bcfsh-zoom{from{transform:scale(1)}to{transform:scale(1.08)}}
        .cl-bcfsh-bg img{width:100%;height:100%;object-fit:cover;animation:cl-bcfsh-zoom 20s ease-in-out infinite alternate}
        .cl-bcfsh-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:920px;margin:0 auto;background:rgba(255,255,255,.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.18);border-radius:18px;overflow:hidden}
        @media(max-width:968px){.cl-bcfsh-strip{grid-template-columns:repeat(2,1fr)}.cl-bcfsh-si:nth-child(2){border-right:none}}
        @media(max-width:640px){.cl-bcfsh-strip{grid-template-columns:1fr}.cl-bcfsh-si{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.14)}}
      `}} />

      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="cl-bcfsh-bg absolute inset-0 z-0">
          <img src="/courses/bca/departmentalVision.webp" alt="BCA Full Stack Development at Tulas Institute" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg,rgba(0,31,76,.65) 0%,rgba(0,21,46,.6) 50%,rgba(223,84,0,.72) 100%)' }} />
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{ opacity:.06, backgroundImage:'linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%)', backgroundSize:'60px 60px' }} />

        <div className="relative z-[5] text-center py-[50px] px-[7%] max-w-[1200px] w-full">

          <div className="flex items-center gap-[10px] justify-center mb-[22px] text-[.82rem] font-medium flex-wrap" style={{ color:'rgba(255,255,255,.65)' }}>
            Home / Programs / BCA / <span style={{ color:'#FFF3D7' }}>Full Stack Development</span>
          </div>

          <div className="inline-flex items-center gap-[10px] rounded-[32px] px-[28px] py-[10px] font-bold text-[.76rem] uppercase tracking-[.16em] text-white mb-[26px]" style={{ background:'rgba(255,255,255,.14)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,.25)' }}>
            BCA · Full Stack Development · NEP 2020
          </div>

          <h1
            className="text-white mb-[24px] tracking-[.02em]"
            style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.2rem,7vw,5.5rem)', lineHeight:'.9', textShadow:'0 8px 50px rgba(0,0,0,.6)' }}
          >
            Build The Web,<br />
            <em className="not-italic" style={{ color:'#FFF3D7', filter:'drop-shadow(0 4px 16px rgba(255,243,215,.5))' }}>Front To Back</em>
          </h1>

          <p className="text-[1.12rem] leading-[1.9] max-w-[840px] mx-auto mb-[38px]" style={{ color:'rgba(255,255,255,.92)' }}>
            A strong foundation in computing, hands-on full stack development, and multiple specialization pathways — Tulas Institute's BCA in Full Stack Development is built for an industry-integrated, research-ready, future-ready graduate profile.
          </p>

          <div className="flex gap-[18px] justify-center flex-wrap mb-[50px]">
            <a href="https://tulas.edu.in/apply-now/" className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300 hover:-translate-y-[2px]"
              style={{ background:'#DF5400', boxShadow:'0 4px 16px rgba(223,84,0,.4)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 28px rgba(223,84,0,.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='0 4px 16px rgba(223,84,0,.4)'}>
              Apply Now →
            </a>
            <a href="https://tulas.edu.in/contact/" className="inline-flex items-center gap-2 px-[36px] py-[16px] rounded-[10px] font-bold text-[.94rem] text-white transition-all duration-300"
              style={{ background:'transparent', border:'2px solid rgba(255,255,255,.5)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='#fff'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,.5)'}>
              Contact Admissions
            </a>
          </div>

          <div className="cl-bcfsh-strip">
            {STATS.map((item, i) => (
              <div key={i} className="cl-bcfsh-si py-[24px] px-[18px] text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,.14)' : 'none' }}>
                <span className="block mb-[6px] leading-[1]" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', color:'#FFF3D7' }}>{item.num}</span>
                <span className="text-[.74rem] font-semibold" style={{ color:'rgba(255,255,255,.82)' }}>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
