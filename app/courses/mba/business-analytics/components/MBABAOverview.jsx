'use client';

const DOMAINS = [
  {
    tag:'Major I · Sem III',
    title:'Predictive Analytics & Business Intelligence',
    desc:'Statistical modelling, BI dashboards, and predictive analytics built on a live business dataset.',
    pills:['Predictive Modelling','BI Dashboards','Statistical Analysis'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    tag:'Major II · Sem IV',
    title:'Advanced Data Strategy & AI-Driven Decision Making',
    desc:'Data governance, advanced analytics strategy, and the leadership skills to run an analytics function.',
    pills:['Data Strategy','AI-Driven Decisions','Leadership'],
    icon:(
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
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
        <path d="M21.21 15.89A9 9 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
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
  'Strategic Management','Business Statistics','Financial Accounting','Predictive Modelling',
  'Data Visualization','Machine Learning for Business','AI for Analytics','Big Data Fundamentals',
  'Business Intelligence','Marketing Analytics','Financial Analytics','Data-Driven Decision Making',
];

export default function MBABAOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabaov-sec{padding:110px 7%;background:#fff}
        .cl-mbabaov-wrap{max-width:1280px;margin:0 auto}
        .cl-mbabaov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-mbabaov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbabaov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbabaov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbabaov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbabaov-zoom 18s ease-in-out infinite alternate}
        .cl-mbabaov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbabaov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbabaov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbabaov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-mbabaov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbabaov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbabaov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbabaov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabaov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbabaov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbabaov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-mbabaov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbabaov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbabaov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbabaov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbabaov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabaov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-mbabaov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbabaov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbabaov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbabaov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbabaov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbabaov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbabaov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbabaov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbabaov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbabaov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbabaov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-mbabaov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbabaov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbabaov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mbabaov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbabaov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbabaov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){
          .cl-mbabaov-split{grid-template-columns:1fr;gap:70px}
          .cl-mbabaov-visual{height:380px}
          .cl-mbabaov-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-mbabaov-sec{padding:70px 5%}
          .cl-mbabaov-grid{grid-template-columns:1fr}
          .cl-mbabaov-badge{left:0;right:0;bottom:-30px;justify-content:center}
        }
      `}}/>
      <section className="cl-mbabaov-sec" id="overview">
        <div className="cl-mbabaov-wrap">
          <div className="cl-mbabaov-split">
            <div className="cl-mbabaov-visual">
              <div className="cl-mbabaov-img-wrap">
                <img src="/courses/bjmc/courseOutcomes.png" alt="MBA Business Analytics at Tulas Institute"/>
              </div>
              <div className="cl-mbabaov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-mbabaov-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-mbabaov-h2">Where Strategy<br/><em>Meets Data</em></h2>
              <p className="cl-mbabaov-lead">The MBA in Business Analytics at Tulas Institute prepares data-driven managers to turn business data into strategic decisions.</p>
              <p className="cl-mbabaov-body">Students master the management core — strategy, marketing, finance, operations — alongside applied business analytics, predictive modelling, and data-driven decision making. A live analytics project runs across Semester II, an Industry Live Analytics Project in Semester III, and a data strategy capstone in the final semester.</p>
              <blockquote className="cl-mbabaov-quote">"Job-ready by Semester II — graduates leave placeable across analytics teams, business intelligence consulting, or a data strategy leadership track."</blockquote>
            </div>
          </div>

          <div className="cl-mbabaov-domain-head">
            <div className="cl-mbabaov-domain-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mbabaov-domain-h2">Two Majors, Three Minors<br/><em>One Analytics Core</em></h2>
            <p className="cl-mbabaov-domain-desc">Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.</p>
          </div>

          <div className="cl-mbabaov-grid">
            {DOMAINS.map(d=>(
              <div className="cl-mbabaov-card" key={d.tag}>
                <div className="cl-mbabaov-card-vis">
                  <span className="cl-mbabaov-card-tag">{d.tag}</span>
                  <span className="cl-mbabaov-card-icon">{d.icon}</span>
                  <span className="cl-mbabaov-card-title">{d.title}</span>
                </div>
                <div className="cl-mbabaov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-mbabaov-pill-row">
                    {d.pills.map(p=><span key={p} className="cl-mbabaov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-mbabaov-core">
              <div className="cl-mbabaov-core-cap">Built On Core<br/>Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>

          <div className="cl-mbabaov-cla-title">Core Learning Areas</div>
          <div className="cl-mbabaov-cla-row">
            {CORE_AREAS.map(a=><span key={a} className="cl-mbabaov-cla-chip">{a}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
