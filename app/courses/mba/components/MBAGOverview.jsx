'use client';

const SPECS = [
  {
    tag: 'Core',
    title: 'Marketing Management',
    desc: 'Brand strategy, consumer behaviour, and integrated marketing communications.',
    pills: ['Brand Strategy', 'Consumer Behaviour', 'IMC'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
  },
  {
    tag: 'AI-Native',
    title: 'Digital Marketing using AI',
    desc: 'AI-powered campaigns, martech tools, and performance marketing at scale.',
    pills: ['AI Tools', 'Performance Marketing', 'MarTech'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    tag: 'People First',
    title: 'Human Resource Management',
    desc: 'Talent strategy, organisational behaviour, and HR analytics for the modern workplace.',
    pills: ['Talent Strategy', 'Org. Behaviour', 'HR Analytics'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    tag: 'Global',
    title: 'International Business',
    desc: 'Global trade, cross-border strategy, and international finance for globally-minded managers.',
    pills: ['Global Trade', 'Cross-Border Strategy', 'Trade Finance'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    tag: 'High Demand',
    title: 'Finance',
    desc: 'Corporate finance, investment banking foundations, and financial risk management.',
    pills: ['Corporate Finance', 'Investment Banking', 'Risk Management'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    tag: 'Data-Driven',
    title: 'Business Analytics',
    desc: 'Predictive modelling, BI dashboards, and data-driven decision making across functions.',
    pills: ['Predictive Modelling', 'BI Dashboards', 'Data Strategy'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Strategic Management', 'Financial Accounting', 'Business Analytics',
  'Organisational Behaviour', 'Marketing Management', 'Operations Management',
  'AI for Business', 'Business Communication', 'Business Economics',
  'Corporate Strategy', 'Data-Driven Decision Making', 'Leadership',
];

export default function MBAGOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagov-sec{padding:110px 7%;background:#fff}
        .cl-mbagov-wrap{max-width:1280px;margin:0 auto}

        .cl-mbagov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-mbagov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-mbagov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-mbagov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-mbagov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-mbagov-zoom 18s ease-in-out infinite alternate}
        .cl-mbagov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-mbagov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-mbagov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-mbagov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-mbagov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbagov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbagov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,4.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbagov-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-mbagov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-mbagov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-mbagov-spec-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbagov-spec-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbagov-spec-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbagov-spec-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbagov-spec-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagov-spec-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-mbagov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbagov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-mbagov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-mbagov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-mbagov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-mbagov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-mbagov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-mbagov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-mbagov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-mbagov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-mbagov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-mbagov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-mbagov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-mbagov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-mbagov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-mbagov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-mbagov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){
          .cl-mbagov-split{grid-template-columns:1fr;gap:70px}
          .cl-mbagov-visual{height:380px}
          .cl-mbagov-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-mbagov-sec{padding:70px 5%}
          .cl-mbagov-grid{grid-template-columns:1fr}
          .cl-mbagov-badge{left:0;right:0;bottom:-30px;justify-content:center}
        }
      `}} />

      <section className="cl-mbagov-sec" id="overview">
        <div className="cl-mbagov-wrap">

          {/* Split layout */}
          <div className="cl-mbagov-split">

            {/* Image left */}
            <div className="cl-mbagov-visual">
              <div className="cl-mbagov-img-wrap">
                <img
                  src="/courses/bba/business/mech.jpg"
                  alt="MBA students at Tulas Institute"
                />
              </div>
              <div className="cl-mbagov-badge">
                <span className="yr">2Y</span>
                <span className="lbl">NEP 2020<br />OBE Framework</span>
              </div>
            </div>

            {/* Text right */}
            <div>
              <div className="cl-mbagov-eyebrow"><span className="bar" />School of Management</div>
              <h2 className="cl-mbagov-h2">Where Business<br /><em>Meets AI</em></h2>
              <p className="cl-mbagov-lead">
                The MBA at Tulas Institute is designed to create future-ready managers and business leaders across every core function.
              </p>
              <p className="cl-mbagov-body">
                The program builds a strong management foundation — strategy, finance, economics, operations, organisational behaviour — and layers on AI tools, live business projects, and a specialization of your choice. With a strong emphasis on applied learning and industry exposure, students graduate ready to lead in their chosen function from day one.
              </p>
              <blockquote className="cl-mbagov-quote">
                "Build the business core, choose your specialization, and lead with data and AI — Tulas' MBA is designed for where business is headed, not where it's been."
              </blockquote>
            </div>
          </div>

          {/* Specializations section header */}
          <div className="cl-mbagov-spec-head">
            <div className="cl-mbagov-spec-eyebrow"><span className="bar" />Specializations</div>
            <h2 className="cl-mbagov-spec-h2">Six Paths, One Strong<br /><em>Management Core</em></h2>
            <p className="cl-mbagov-spec-desc">
              Every specialization is built on the same management foundation and enhanced through AI-integrated learning.
            </p>
          </div>

          {/* Specialization cards */}
          <div className="cl-mbagov-grid">
            {SPECS.map(s => (
              <div className="cl-mbagov-card" key={s.tag}>
                <div className="cl-mbagov-card-vis">
                  <span className="cl-mbagov-card-tag">{s.tag}</span>
                  <span className="cl-mbagov-card-icon">{s.icon}</span>
                  <span className="cl-mbagov-card-title">{s.title}</span>
                </div>
                <div className="cl-mbagov-card-body">
                  <p>{s.desc}</p>
                  <div className="cl-mbagov-pill-row">
                    {s.pills.map(p => <span key={p} className="cl-mbagov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core banner */}
          <div className="cl-mbagov-core">
            <div className="cl-mbagov-core-cap">Built On Core Management</div>
            <p>Strategy · Finance · Economics · Operations · Organisational Behaviour · Marketing Management</p>
          </div>

          {/* Core Learning Areas */}
          <div className="cl-mbagov-cla-title">Core Learning Areas</div>
          <div className="cl-mbagov-cla-row">
            {CORE_AREAS.map(a => (
              <span key={a} className="cl-mbagov-cla-chip">{a}</span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
