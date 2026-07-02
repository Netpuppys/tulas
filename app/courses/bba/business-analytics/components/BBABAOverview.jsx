'use client';

const SPECS = [
  {
    tag: 'Core',
    name: 'Business Intelligence',
    desc: 'Transform raw business data into actionable insights using modern analytics platforms.',
    pills: ['Power BI', 'Tableau', 'Dashboards'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <rect x="2" y="13" width="4" height="8" rx="1" strokeLinejoin="round" />
        <rect x="9" y="9" width="4" height="12" rx="1" strokeLinejoin="round" />
        <rect x="16" y="4" width="4" height="17" rx="1" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10l5-4 5 3 5-5" />
      </svg>
    ),
  },
  {
    tag: 'High Demand',
    name: 'Data Analytics',
    desc: 'Analyse business data to identify trends, patterns, and growth opportunities.',
    pills: ['Excel', 'SQL', 'Data Visualization'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-5 4 3 4-6" />
      </svg>
    ),
  },
  {
    tag: 'Future Ready',
    name: 'Predictive Analytics',
    desc: 'Forecast business performance using statistical models and AI-powered insights.',
    pills: ['Forecasting', 'Regression', 'Predictive Models'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s4-7 10-7 10 7 10 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l3 3 3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10" />
        <circle cx="12" cy="12" r="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: 'Industry Ready',
    name: 'Financial & Marketing Analytics',
    desc: 'Evaluate business performance through financial metrics, customer analytics, and campaign performance.',
    pills: ['ROI Analysis', 'Customer Analytics', 'Business Metrics'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v1m0 8v1M9.5 9.5A2.5 2.5 0 0112 8a2.5 2.5 0 010 5 2.5 2.5 0 000 5 2.5 2.5 0 002.5-1.5" />
      </svg>
    ),
  },
  {
    tag: 'Essential Skill',
    name: 'AI for Business',
    desc: 'Use Artificial Intelligence to automate reporting, generate insights, and improve business decisions.',
    pills: ['Generative AI', 'AI Analytics', 'Automation'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M9.5 16a5 5 0 005 0" />
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Principles of Management','Business Analytics','Statistics','Business Intelligence',
  'Data Visualization','Microsoft Excel','SQL','Power BI',
  'Tableau','Predictive Analytics','Financial Analytics','Marketing Analytics',
  'AI for Business','Entrepreneurship',
];

export default function BBABAOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bao-sec{padding:110px 7%;background:#fff}
        .cl-bao-wrap{max-width:1280px;margin:0 auto}

        .cl-bao-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-bao-imgwrap{position:relative}
        .cl-bao-img{border-radius:20px;width:100%;height:520px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22);position:relative}
        .cl-bao-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-bao-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2)}
        .cl-bao-badge .big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-bao-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-bao-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bao-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bao-h2{margin-bottom:22px;line-height:.95;letter-spacing:.01em;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-bao-h2 em{font-style:normal;color:#DF5400}
        .cl-bao-lead{font-size:1.18rem;font-weight:600;line-height:1.7;margin-bottom:20px;color:#001F4C}
        .cl-bao-body{font-size:1rem;line-height:1.9;margin-bottom:20px;color:#5a6a8a}
        .cl-bao-quote{padding-left:22px;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;border-left:4px solid #DF5400;color:#001F4C}

        .cl-bao-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bao-head .cl-bao-eyebrow{justify-content:center}
        .cl-bao-head p{font-size:1.08rem;line-height:1.9;max-width:850px;margin:0 auto;color:#5a6a8a}

        .cl-bao-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-bao-card{background:#fff;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .4s,box-shadow .4s}
        .cl-bao-card:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,31,76,.14)}
        .cl-bao-card-img{position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-bao-card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-bao-card-img svg{width:60px;height:60px;color:rgba(255,243,215,.85);position:relative;z-index:1}
        .cl-bao-card-tag{position:absolute;top:14px;left:14px;z-index:3;padding:6px 14px;border-radius:20px;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,243,215,.95);color:#001F4C}
        .cl-bao-card-name{position:absolute;bottom:14px;left:18px;right:18px;z-index:3;font-weight:800;font-size:1.15rem;color:#fff;line-height:1.25}
        .cl-bao-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-bao-card-body p{font-size:.9rem;line-height:1.7;margin-bottom:16px;color:#5a6a8a}
        .cl-bao-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-bao-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-bao-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;color:#fff;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-bao-core .t{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1.05;margin-bottom:12px}
        .cl-bao-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-bao-areas{margin-top:70px}
        .cl-bao-areas h3{text-align:center;font-size:1.5rem;font-weight:800;margin-bottom:36px;color:#001F4C}
        .cl-bao-tag-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:1000px;margin:0 auto}
        .cl-bao-tag{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .25s;cursor:default}
        .cl-bao-tag:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-2px)}

        @media(max-width:1200px){.cl-bao-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){
          .cl-bao-split{grid-template-columns:1fr;gap:40px}
          .cl-bao-badge{left:0}
        }
        @media(max-width:640px){
          .cl-bao-sec{padding:70px 5%}
          .cl-bao-grid{grid-template-columns:1fr}
          .cl-bao-core{grid-column:span 1}
        }
      `}} />

      <section className="cl-bao-sec" id="overview">
        <div className="cl-bao-wrap">

          <div className="cl-bao-split">
            <div className="cl-bao-imgwrap">
              <div className="cl-bao-img">
                <img src="/courses/bba/business/bba2.jpg" alt="BBA Business Analytics students at Tulas" />
              </div>
              <div className="cl-bao-badge">
                <span className="big">BBA</span>
                <span className="lbl">Business<br />Analytics</span>
              </div>
            </div>
            <div>
              <div className="cl-bao-eyebrow"><span className="bar" />School of Management</div>
              <h2 className="cl-bao-h2">Where Business Meets<br /><em>Intelligent Decision Making</em></h2>
              <p className="cl-bao-lead">The BBA in Business Analytics at Tulas is designed for students who want to solve business challenges using data, technology, and analytical thinking.</p>
              <p className="cl-bao-body">The programme combines business management with analytics, statistics, visualization, AI tools, business intelligence, forecasting, and strategic decision-making. Students work with real business datasets, dashboards, and live industry projects to become future-ready business analysts and data-driven leaders.</p>
              <blockquote className="cl-bao-quote">"The best business decisions begin with the right data."</blockquote>
            </div>
          </div>

          <div className="cl-bao-head">
            <div className="cl-bao-eyebrow" style={{ justifyContent: 'center' }}><span className="bar" />Specialization Areas</div>
            <h2 className="cl-bao-h2">Five Specializations, One Strong<br /><em>Analytics Core</em></h2>
            <p>Each specialization is built on strong business and analytics fundamentals, enhanced through AI-integrated, project-driven learning.</p>
          </div>

          <div className="cl-bao-grid">
            {SPECS.map((s) => (
              <div className="cl-bao-card" key={s.name}>
                <div className="cl-bao-card-img">
                  {s.icon}
                  <span className="cl-bao-card-tag">{s.tag}</span>
                  <span className="cl-bao-card-name">{s.name}</span>
                </div>
                <div className="cl-bao-card-body">
                  <p>{s.desc}</p>
                  <div className="cl-bao-pills">
                    {s.pills.map((p) => <span className="cl-bao-pill" key={p}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-bao-core">
              <div className="t">Built on Business<br />Fundamentals</div>
              <p>Management · Finance · Analytics · Economics · Entrepreneurship · AI</p>
            </div>
          </div>

          <div className="cl-bao-areas">
            <h3>Core Learning Areas</h3>
            <div className="cl-bao-tag-row">
              {CORE_AREAS.map((a) => <span className="cl-bao-tag" key={a}>{a}</span>)}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
