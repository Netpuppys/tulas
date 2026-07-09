'use client';

const DOMAINS = [
  {
    tag:'Major I · Sem III',
    title:'Agricultural Economics & Agribusiness Strategy',
    desc:'Agricultural economics, policy, and agribusiness strategy built on a live farm-to-market brief.',
    pills:['Agri Economics','Agri Policy','Agribusiness Strategy'],
    icon:(<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2c-2.76 4-2.76 12 0 20"/><path d="M12 2c2.76 4 2.76 12 0 20"/></svg>),
  },
  {
    tag:'Major II · Sem IV',
    title:'Agri Supply Chain & Rural Market Leadership',
    desc:'Agri supply chain management, rural marketing, and the leadership skills to run an agribusiness function.',
    pills:['Agri Supply Chain','Rural Marketing','Leadership'],
    icon:(<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14M5 8a2 2 0 1 0-4 0v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8m-14 0V6a2 2 0 1 1 4 0v2m4-2a2 2 0 0 1 4 0v2"/></svg>),
  },
  {
    tag:'Minor Track I',
    title:'Business Analytics & Data Strategy',
    desc:'Attribution, dashboards, cohort analysis and cross-functional data governance.',
    pills:['Attribution','Dashboards','Forecasting'],
    icon:(<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
  },
  {
    tag:'Minor Track II',
    title:'Finance & FinTech',
    desc:"P&L ownership, ROI analysis, and FinTech strategy applicable across functions.",
    pills:['P&L Ownership','ROI Analysis','FinTech'],
    icon:(<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
  {
    tag:'Minor Track III',
    title:'Operations & Supply Chain',
    desc:'Cross-functional operations alignment, tech stack fluency, and operations transformation.',
    pills:['Ops Alignment','Tech Stack','Transformation'],
    icon:(<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>),
  },
];

const CORE_AREAS = [
  'Strategic Management','Agricultural Economics','Financial Accounting','Agri Supply Chain',
  'Rural Marketing','Food Processing & Value Chains','AI for Agriculture','Farm Business Management',
  'Agri Finance','Sustainable Agriculture','Business Economics','Precision Agriculture',
];

export default function MBAAgrMOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-ov-sec{padding:110px 7%;background:#fff}
        .cl-mbaagrm-ov-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-ov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}
        .cl-mbaagrm-ov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbaagrm-ov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbaagrm-ov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbaagrm-ov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbaagrm-ov-zoom 18s ease-in-out infinite alternate}
        .cl-mbaagrm-ov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbaagrm-ov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbaagrm-ov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbaagrm-ov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-mbaagrm-ov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaagrm-ov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaagrm-ov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaagrm-ov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-ov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbaagrm-ov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbaagrm-ov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}
        .cl-mbaagrm-ov-dhead{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbaagrm-ov-deyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaagrm-ov-deyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaagrm-ov-dh2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaagrm-ov-dh2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-ov-ddesc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}
        .cl-mbaagrm-ov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbaagrm-ov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbaagrm-ov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbaagrm-ov-cvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbaagrm-ov-ctag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbaagrm-ov-cicon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbaagrm-ov-ctitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbaagrm-ov-cbody{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbaagrm-ov-cbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbaagrm-ov-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbaagrm-ov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-mbaagrm-ov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbaagrm-ov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbaagrm-ov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}
        .cl-mbaagrm-ov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbaagrm-ov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbaagrm-ov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        @media(max-width:900px){.cl-mbaagrm-ov-split{grid-template-columns:1fr;gap:60px}.cl-mbaagrm-ov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbaagrm-ov-sec{padding:70px 5%}.cl-mbaagrm-ov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbaagrm-ov-sec" id="overview">
        <div className="cl-mbaagrm-ov-wrap">
          <div className="cl-mbaagrm-ov-split">
            <div className="cl-mbaagrm-ov-visual">
              <div className="cl-mbaagrm-ov-img-wrap">
                <img src="/new-campus/orientation(3).jpg" alt="MBA Agri-Business Overview"/>
              </div>
              <div className="cl-mbaagrm-ov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-mbaagrm-ov-eyebrow"><span className="bar"/>School of Management</div>
              <h2 className="cl-mbaagrm-ov-h2">Where Strategy<br/><em>Meets Agriculture</em></h2>
              <p className="cl-mbaagrm-ov-lead">The MBA in Agri-Business Management at Tulas Institute, Dehradun prepares managers to lead agricultural value chains and rural markets.</p>
              <p className="cl-mbaagrm-ov-body">Students master the management core — strategy, marketing, finance, operations — alongside applied agricultural economics, agri supply chain management, and rural marketing. A live agri-market project runs across Semester II, an Industry Live Agri-Business Project in Semester III, and a rural leadership capstone in the final semester.</p>
              <blockquote className="cl-mbaagrm-ov-quote">"Job-ready by Semester II — graduates leave placeable across agribusiness corporates, agri supply chain operations, or rural development leadership roles."</blockquote>
            </div>
          </div>
          <div className="cl-mbaagrm-ov-dhead">
            <div className="cl-mbaagrm-ov-deyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mbaagrm-ov-dh2">Two Majors, Three Minors<br/><em>One Agri-Business Core</em></h2>
            <p className="cl-mbaagrm-ov-ddesc">Every domain is built on a strong management foundation and enhanced through AI-integrated learning across all four semesters.</p>
          </div>
          <div className="cl-mbaagrm-ov-grid">
            {DOMAINS.map((d,i)=>(
              <div className="cl-mbaagrm-ov-card" key={i}>
                <div className="cl-mbaagrm-ov-cvis">
                  <span className="cl-mbaagrm-ov-ctag">{d.tag}</span>
                  <span className="cl-mbaagrm-ov-cicon">{d.icon}</span>
                  <div className="cl-mbaagrm-ov-ctitle">{d.title}</div>
                </div>
                <div className="cl-mbaagrm-ov-cbody">
                  <p>{d.desc}</p>
                  <div className="cl-mbaagrm-ov-pills">{d.pills.map((p,j)=><span className="cl-mbaagrm-ov-pill" key={j}>{p}</span>)}</div>
                </div>
              </div>
            ))}
            <div className="cl-mbaagrm-ov-core">
              <div className="cl-mbaagrm-ov-core-cap">Built On Core<br/>Management</div>
              <p>Strategy · Finance · Economics · Operations · Consumer Behaviour · Brand Management</p>
            </div>
          </div>
          <div className="cl-mbaagrm-ov-cla-title">Core Learning Areas</div>
          <div className="cl-mbaagrm-ov-cla-row">
            {CORE_AREAS.map((c,i)=><span className="cl-mbaagrm-ov-cla-chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
