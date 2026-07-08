'use client';

const DOMAINS = [
  {
    tag:'Major I · Sem III',
    title:'Marketing Strategy & Consumer Insights',
    desc:'Consumer behaviour, market research, and strategic positioning built on a live client brief.',
    pills:['Consumer Insights','Market Research','Positioning'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    tag:'Major II · Sem IV',
    title:'Brand Leadership & Retail Management',
    desc:'Brand equity management, retail strategy, and the leadership skills to run a marketing function.',
    pills:['Brand Equity','Retail Strategy','Leadership'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    tag:'Minor Track I',
    title:'Business Analytics & Data Strategy',
    desc:'Attribution, dashboards, cohort analysis and cross-functional data governance.',
    pills:['Attribution','Dashboards','Forecasting'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    tag:'Minor Track II',
    title:'Finance & FinTech',
    desc:'P&L ownership, ROI analysis, and FinTech strategy applicable across functions.',
    pills:['P&L Ownership','ROI Analysis','FinTech'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    tag:'Minor Track III',
    title:'Operations & Supply Chain',
    desc:'Cross-functional operations alignment, tech stack fluency, and operations transformation.',
    pills:['Ops Alignment','Tech Stack','Transformation'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Strategic Management','Brand Management','Financial Accounting','Business Analytics',
  'Consumer Behaviour','Marketing Research','AI for Marketing','Retail Management',
  'Sales Management','Brand P&L','Campaign Management','Market Research',
];

export default function MBAMktOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbamktov-sec{padding:110px 7%;background:#fff}
        .cl-mbamktov-wrap{max-width:1280px;margin:0 auto}
        .cl-mbamktov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-mbamktov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbamktov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbamktov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbamktov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbamktov-zoom 18s ease-in-out infinite alternate}
        .cl-mbamktov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbamktov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbamktov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbamktov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-mbamktov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbamktov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbamktov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbamktov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbamktov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbamktov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbamktov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-mbamktov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbamktov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbamktov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbamktov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbamktov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-mbamktov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-mbamktov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbamktov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbamktov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbamktov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbamktov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbamktov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbamktov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbamktov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbamktov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbamktov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbamktov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-mbamktov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbamktov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbamktov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mbamktov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbamktov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbamktov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-mbamktov-split{grid-template-columns:1fr;gap:60px}.cl-mbamktov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbamktov-sec{padding:70px 5%}.cl-mbamktov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbamktov-sec" id="overview">
        <div className="cl-mbamktov-wrap">
          <div className="cl-mbamktov-split">
            <div className="cl-mbamktov-visual">
              <div className="cl-mbamktov-img-wrap">
                <img src="/courses/bjmc/programEducational.png" alt="MBA Marketing Overview at Tulas Institute"/>
              </div>
              <div className="cl-mbamktov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-mbamktov-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-mbamktov-h2">Where Strategy<br/><em>Meets Consumers</em></h2>
              <p className="cl-mbamktov-lead">The MBA in Marketing at Tulas Institute, Dehradun prepares brand and marketing leaders to think strategically about consumers, channels, and growth.</p>
              <p className="cl-mbamktov-body">Students master the management core — strategy, finance, analytics, operations — alongside applied marketing strategy, consumer insights, and brand leadership. A live market research project runs across Semester II, an Industry Live Brand Project in Semester III, and a leadership capstone in the final semester.</p>
              <blockquote className="cl-mbamktov-quote">"Job-ready by Semester II — graduates leave placeable across brand teams, retail and sales leadership, or marketing consulting practice."</blockquote>
            </div>
          </div>

          <div className="cl-mbamktov-domain-head">
            <div className="cl-mbamktov-domain-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mbamktov-domain-h2">Two Majors, Three Minors<br/><em>One Marketing Core</em></h2>
            <p className="cl-mbamktov-domain-desc">Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.</p>
          </div>

          <div className="cl-mbamktov-grid">
            {DOMAINS.map((d,i)=>(
              <div className="cl-mbamktov-card" key={i}>
                <div className="cl-mbamktov-card-vis">
                  <span className="cl-mbamktov-card-tag">{d.tag}</span>
                  <span className="cl-mbamktov-card-icon">{d.icon}</span>
                  <div className="cl-mbamktov-card-title">{d.title}</div>
                </div>
                <div className="cl-mbamktov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-mbamktov-pill-row">{d.pills.map((p,j)=><span className="cl-mbamktov-pill" key={j}>{p}</span>)}</div>
                </div>
              </div>
            ))}
            <div className="cl-mbamktov-core">
              <div className="cl-mbamktov-core-cap">Built On Core<br/>Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>

          <div className="cl-mbamktov-cla-title">Core Learning Areas</div>
          <div className="cl-mbamktov-cla-row">
            {CORE_AREAS.map((c,i)=><span className="cl-mbamktov-cla-chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
