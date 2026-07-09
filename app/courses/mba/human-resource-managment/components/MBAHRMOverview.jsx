'use client';

const DOMAINS = [
  {
    tag:'Major I · Sem III',
    title:'Talent Management & Organisational Behaviour',
    desc:'Talent acquisition, organisational design, and behavioural frameworks for building high-performance teams.',
    pills:['Talent Acquisition','Org. Behaviour','Org. Design'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    tag:'Major II · Sem IV',
    title:'HR Analytics & Strategic HR Leadership',
    desc:'Data-driven HR decision-making, compensation strategy, and leadership skills to run the people function.',
    pills:['HR Analytics','Compensation Strategy','Leadership'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    tag:'Minor Track I',
    title:'Business Analytics & Data Strategy',
    desc:'Attribution, dashboards, cohort analysis and cross-functional data governance for HR decision-making.',
    pills:['Attribution','Dashboards','Forecasting'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    tag:'Minor Track II',
    title:'Finance & FinTech',
    desc:'P&L ownership, ROI analysis, and FinTech strategy to partner effectively with business and finance teams.',
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
    desc:'Cross-functional operations alignment, tech stack fluency, and operations transformation from an HR lens.',
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
  'Strategic Management','Organisational Behaviour','Financial Accounting','HR Analytics',
  'Talent Acquisition','Compensation & Benefits','AI for HR','Labour Law',
  'Learning & Development','Industrial Relations','Performance Management','Business Economics',
];

export default function MBAHRMOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbahrmov-sec{padding:110px 7%;background:#fff}
        .cl-mbahrmov-wrap{max-width:1280px;margin:0 auto}
        .cl-mbahrmov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-mbahrmov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbahrmov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbahrmov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbahrmov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbahrmov-zoom 18s ease-in-out infinite alternate}
        .cl-mbahrmov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbahrmov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbahrmov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbahrmov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-mbahrmov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbahrmov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbahrmov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbahrmov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbahrmov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbahrmov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbahrmov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-mbahrmov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbahrmov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbahrmov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbahrmov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbahrmov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-mbahrmov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-mbahrmov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbahrmov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbahrmov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbahrmov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbahrmov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbahrmov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbahrmov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbahrmov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbahrmov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbahrmov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbahrmov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-mbahrmov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbahrmov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbahrmov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mbahrmov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbahrmov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbahrmov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-mbahrmov-split{grid-template-columns:1fr;gap:60px}.cl-mbahrmov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbahrmov-sec{padding:70px 5%}.cl-mbahrmov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbahrmov-sec" id="overview">
        <div className="cl-mbahrmov-wrap">
          <div className="cl-mbahrmov-split">
            <div className="cl-mbahrmov-visual">
              <div className="cl-mbahrmov-img-wrap">
                <img src="/courses/bjmc/programSpecificOutcomes.png" alt="MBA HRM Overview at Tulas Institute"/>
              </div>
              <div className="cl-mbahrmov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-mbahrmov-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-mbahrmov-h2">Where Strategy<br/><em>Meets People</em></h2>
              <p className="cl-mbahrmov-lead">The MBA in Human Resource Management at Tulas Institute, Dehradun prepares strategic HR leaders to manage talent, drive culture, and align people strategy with business objectives.</p>
              <p className="cl-mbahrmov-body">Students master the management core — strategy, finance, analytics, operations — alongside applied HR strategy, talent management, and people analytics. A live organisational diagnosis runs across Semester I, a Live Talent Audit in Semester II, an Industry Live HR Project in Semester III, and a Talent Strategy Capstone in the final semester.</p>
              <blockquote className="cl-mbahrmov-quote">"Job-ready by Semester II — graduates leave placeable across HR business partner roles, talent acquisition leadership, or an independent HR consulting practice."</blockquote>
            </div>
          </div>

          <div className="cl-mbahrmov-domain-head">
            <div className="cl-mbahrmov-domain-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mbahrmov-domain-h2">Two Majors, Three Minors<br/><em>One People Core</em></h2>
            <p className="cl-mbahrmov-domain-desc">Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.</p>
          </div>

          <div className="cl-mbahrmov-grid">
            {DOMAINS.map((d,i)=>(
              <div className="cl-mbahrmov-card" key={i}>
                <div className="cl-mbahrmov-card-vis">
                  <span className="cl-mbahrmov-card-tag">{d.tag}</span>
                  <span className="cl-mbahrmov-card-icon">{d.icon}</span>
                  <div className="cl-mbahrmov-card-title">{d.title}</div>
                </div>
                <div className="cl-mbahrmov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-mbahrmov-pill-row">{d.pills.map((p,j)=><span className="cl-mbahrmov-pill" key={j}>{p}</span>)}</div>
                </div>
              </div>
            ))}
            <div className="cl-mbahrmov-core">
              <div className="cl-mbahrmov-core-cap">Built On Core<br/>Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>

          <div className="cl-mbahrmov-cla-title">Core Learning Areas</div>
          <div className="cl-mbahrmov-cla-row">
            {CORE_AREAS.map((c,i)=><span className="cl-mbahrmov-cla-chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
