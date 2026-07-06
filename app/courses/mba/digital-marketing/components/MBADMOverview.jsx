'use client';

const DOMAINS = [
  {
    tag: 'Major I · Sem III',
    title: 'Performance Marketing & Brand Strategy',
    desc: 'Paid media, campaign optimisation, and brand positioning built on a live client brief.',
    pills: ['Paid Media', 'Brand Strategy', 'Campaign Ops'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    tag: 'Major II · Sem IV',
    title: 'Advanced Digital Marketing & Agency Leadership',
    desc: 'Agency operations, advanced digital channels, and the leadership skills to run them.',
    pills: ['Agency Ops', 'Advanced Digital', 'Leadership'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    tag: 'Minor Track I',
    title: 'Business Analytics & Data Strategy',
    desc: 'Attribution, dashboards, cohort analysis and marketing data governance.',
    pills: ['Attribution', 'Dashboards', 'Forecasting'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    tag: 'Minor Track II',
    title: 'Finance & FinTech',
    desc: 'Brand P&L ownership, marketing ROI, and FinTech brand strategy.',
    pills: ['Brand P&L', 'Marketing ROI', 'FinTech'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    tag: 'Minor Track III',
    title: 'Operations & Supply Chain',
    desc: 'Marketing-operations alignment, MarTech stack, and operations transformation.',
    pills: ['MarTech Stack', 'Ops Alignment', 'Transformation'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14M12 2v2m0 16v2M2 12h2m16 0h2"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Strategic Management', 'Brand Management', 'Financial Accounting',
  'Business Analytics', 'Consumer Behaviour', 'Digital Marketing',
  'AI for Marketing', 'Marketing Analytics', 'Agency Leadership',
  'Brand P&L', 'Campaign Management', 'Market Research',
];

export default function MBADMOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        /* Overview section */
        .cl-dmov-sec{padding:110px 7%;background:#fff}
        .cl-dmov-wrap{max-width:1280px;margin:0 auto}

        /* Split */
        .cl-dmov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        /* Image side */
        .cl-dmov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-dmov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-dmov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-dmov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-dmov-zoom 18s ease-in-out infinite alternate}
        .cl-dmov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-dmov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-dmov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-dmov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        /* Text */
        .cl-dmov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-dmov-h2 em{font-style:normal;color:#DF5400}
        .cl-dmov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-dmov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-dmov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        /* Domain grid */
        .cl-dmov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-dmov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-dmov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-dmov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-dmov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-dmov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-dmov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-dmov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-dmov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-dmov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-dmov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-dmov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-dmov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-dmov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-dmov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        /* Core card */
        .cl-dmov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-dmov-core:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.2)}
        .cl-dmov-core-icon{color:rgba(255,243,215,.35);margin-bottom:16px;line-height:0}
        .cl-dmov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-dmov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        /* Core Learning Areas */
        .cl-dmov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-dmov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto}
        .cl-dmov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){
          .cl-dmov-split{grid-template-columns:1fr;gap:70px}
          .cl-dmov-visual{height:380px}
          .cl-dmov-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-dmov-sec{padding:70px 5%}
          .cl-dmov-grid{grid-template-columns:1fr}
          .cl-dmov-badge{left:0;right:0;bottom:-30px;justify-content:center}
        }
      `}} />

      <section className="cl-dmov-sec" id="overview">
        <div className="cl-dmov-wrap">

          {/* Split layout */}
          <div className="cl-dmov-split">

            {/* Image left */}
            <div className="cl-dmov-visual">
              <div className="cl-dmov-img-wrap">
                <img
                  src="/courses/btech/CourseOutcomes.png"
                  alt="MBA Digital Marketing students at Tulas Institute"
                />
              </div>
              <div className="cl-dmov-badge">
                <span className="yr">v4.0</span>
                <span className="lbl">NEP 2020<br />OBE Framework</span>
              </div>
            </div>

            {/* Text right */}
            <div>
              <div className="cl-dmov-eyebrow"><span className="bar" />School of Management</div>
              <h2 className="cl-dmov-h2">Where Marketing<br /><em>Meets AI</em></h2>
              <p className="cl-dmov-lead">
                The MBA in Digital Marketing using AI at Tulas Institute, Dehradun prepares brand and marketing leaders for an AI-driven industry.
              </p>
              <p className="cl-dmov-body">
                Students master the management core — strategy, finance, analytics, operations — alongside applied digital marketing, AI tools for marketers, and brand leadership. A live brand campaign runs across Semester II, an Industry Live Brand Project in Semester III, and a CMO-panel capstone in the final semester.
              </p>
              <blockquote className="cl-dmov-quote">
                "Job-ready by Semester II — graduates leave placeable across a corporate marketing team, an independent consulting practice, or their own digital agency."
              </blockquote>
            </div>
          </div>

          {/* Domain section header */}
          <div className="cl-dmov-domain-head">
            <div className="cl-dmov-domain-eyebrow"><span className="bar" />Domains You'll Study</div>
            <h2 className="cl-dmov-domain-h2">Two Majors, Three Minors<br /><em>One Marketing Core</em></h2>
            <p className="cl-dmov-domain-desc">
              Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.
            </p>
          </div>

          {/* Domain cards + core card */}
          <div className="cl-dmov-grid">
            {DOMAINS.map(d => (
              <div className="cl-dmov-card" key={d.tag}>
                <div className="cl-dmov-card-vis">
                  <span className="cl-dmov-card-tag">{d.tag}</span>
                  <span className="cl-dmov-card-icon">{d.icon}</span>
                  <span className="cl-dmov-card-title">{d.title}</span>
                </div>
                <div className="cl-dmov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-dmov-pill-row">
                    {d.pills.map(p => <span key={p} className="cl-dmov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}

            {/* Core management card */}
            <div className="cl-dmov-core">
              <div className="cl-dmov-core-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="cl-dmov-core-cap">Built On Core<br />Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>

          {/* Core Learning Areas */}
          <div className="cl-dmov-cla-title">Core Learning Areas</div>
          <div className="cl-dmov-cla-row">
            {CORE_AREAS.map(a => (
              <span key={a} className="cl-dmov-cla-chip">{a}</span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
