'use client';

const DOMAINS = [
  {
    tag:'Major I · Sem III',
    title:'Corporate Finance & Investment Strategy',
    desc:'Capital budgeting, valuation, and investment strategy built on a live company brief.',
    pills:['Capital Budgeting','Valuation','Investment Strategy'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    tag:'Major II · Sem IV',
    title:'Financial Risk & Capital Markets Leadership',
    desc:'Risk management, capital markets operations, and the leadership skills to run a finance function.',
    pills:['Risk Management','Capital Markets','Leadership'],
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
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
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
  'Strategic Management','Financial Accounting','Corporate Finance','Business Analytics',
  'Financial Modelling','Investment Analysis','AI for Finance','Risk Management',
  'Capital Markets','Banking & Insurance','Financial Reporting','Business Economics',
];

export default function MBAFinOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinov-sec{padding:110px 7%;background:#fff}
        .cl-mbafinov-wrap{max-width:1280px;margin:0 auto}
        .cl-mbafinov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-mbafinov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbafinov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbafinov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbafinov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbafinov-zoom 18s ease-in-out infinite alternate}
        .cl-mbafinov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbafinov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbafinov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbafinov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-mbafinov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbafinov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbafinov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbafinov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbafinov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbafinov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbafinov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-mbafinov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbafinov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbafinov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbafinov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbafinov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-mbafinov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-mbafinov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbafinov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbafinov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbafinov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbafinov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbafinov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbafinov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbafinov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbafinov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbafinov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbafinov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-mbafinov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbafinov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbafinov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mbafinov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbafinov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbafinov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-mbafinov-split{grid-template-columns:1fr;gap:60px}.cl-mbafinov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbafinov-sec{padding:70px 5%}.cl-mbafinov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbafinov-sec" id="overview">
        <div className="cl-mbafinov-wrap">
          <div className="cl-mbafinov-split">
            <div className="cl-mbafinov-visual">
              <div className="cl-mbafinov-img-wrap">
                <img src="/graduate-school-of-business/bcom/specialdesktop.png" alt="MBA Finance Overview at Tulas Institute"/>
              </div>
              <div className="cl-mbafinov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-mbafinov-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-mbafinov-h2">Where Strategy<br/><em>Meets Capital</em></h2>
              <p className="cl-mbafinov-lead">The MBA in Finance at Tulas Institute, Dehradun prepares financial leaders to make capital allocation and risk decisions with rigour.</p>
              <p className="cl-mbafinov-body">Students master the management core — strategy, marketing, analytics, operations — alongside applied corporate finance, financial modelling, and capital markets. A live valuation project runs across Semester II, an Industry Live Finance Project in Semester III, and a capital-markets capstone in the final semester.</p>
              <blockquote className="cl-mbafinov-quote">"Job-ready by Semester II — graduates leave placeable across corporate finance teams, banking and financial services, or an independent advisory practice."</blockquote>
            </div>
          </div>

          <div className="cl-mbafinov-domain-head">
            <div className="cl-mbafinov-domain-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mbafinov-domain-h2">Two Majors, Three Minors<br/><em>One Finance Core</em></h2>
            <p className="cl-mbafinov-domain-desc">Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.</p>
          </div>

          <div className="cl-mbafinov-grid">
            {DOMAINS.map((d,i)=>(
              <div className="cl-mbafinov-card" key={i}>
                <div className="cl-mbafinov-card-vis">
                  <span className="cl-mbafinov-card-tag">{d.tag}</span>
                  <span className="cl-mbafinov-card-icon">{d.icon}</span>
                  <div className="cl-mbafinov-card-title">{d.title}</div>
                </div>
                <div className="cl-mbafinov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-mbafinov-pill-row">{d.pills.map((p,j)=><span className="cl-mbafinov-pill" key={j}>{p}</span>)}</div>
                </div>
              </div>
            ))}
            <div className="cl-mbafinov-core">
              <div className="cl-mbafinov-core-cap">Built On Core<br/>Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>

          <div className="cl-mbafinov-cla-title">Core Learning Areas</div>
          <div className="cl-mbafinov-cla-row">
            {CORE_AREAS.map((c,i)=><span className="cl-mbafinov-cla-chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
