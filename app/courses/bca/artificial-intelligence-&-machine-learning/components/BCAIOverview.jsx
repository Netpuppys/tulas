'use client';

const DOMAINS = [
  {
    tag: 'Minor Track I',
    title: 'Full Stack Web Development',
    desc: 'Authentication, payments, production features, and advanced React app design.',
    pills: ['Authentication', 'Payments', 'Production React'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    tag: 'Minor Track II',
    title: 'AI Tools & Applications',
    desc: 'AI APIs, chatbots, semantic search, RAG pipelines, and AI features at scale.',
    pills: ['AI APIs', 'Chatbots', 'RAG Pipelines'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="15" x2="23" y2="15"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="15" x2="4" y2="15"/>
      </svg>
    ),
  },
  {
    tag: 'Minor Track III',
    title: 'Data Analytics',
    desc: 'Pandas, visualisation, dashboards, and prediction — turning data into decisions.',
    pills: ['Pandas', 'Visualisation', 'Prediction'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Python', 'JavaScript', 'React', 'Data Structures',
  'Database Management & SQL', 'Object-Oriented Programming',
  'Cloud Computing', 'Machine Learning Fundamentals',
  'AI Tools for Developers', 'Backend Development',
  'Ethics, Privacy & Responsible AI', 'Freelancing Fundamentals',
];

export default function BCAIOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaiov-sec{padding:110px 7%;background:#fff}
        .cl-bcaiov-wrap{max-width:1280px;margin:0 auto}
        .cl-bcaiov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-bcaiov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-bcaiov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-bcaiov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-bcaiov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-bcaiov-zoom 18s ease-in-out infinite alternate}
        .cl-bcaiov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-bcaiov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-bcaiov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-bcaiov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-bcaiov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaiov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaiov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaiov-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaiov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-bcaiov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-bcaiov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-bcaiov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-bcaiov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaiov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaiov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaiov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaiov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-bcaiov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-bcaiov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-bcaiov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-bcaiov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-bcaiov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-bcaiov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-bcaiov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-bcaiov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-bcaiov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-bcaiov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-bcaiov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-bcaiov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-bcaiov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-bcaiov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-bcaiov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-bcaiov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-bcaiov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){
          .cl-bcaiov-split{grid-template-columns:1fr;gap:70px}
          .cl-bcaiov-visual{height:380px}
          .cl-bcaiov-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-bcaiov-sec{padding:70px 5%}
          .cl-bcaiov-grid{grid-template-columns:1fr}
          .cl-bcaiov-badge{left:0;right:0;bottom:-30px;justify-content:center}
        }
      `}} />

      <section className="cl-bcaiov-sec" id="overview">
        <div className="cl-bcaiov-wrap">

          <div className="cl-bcaiov-split">
            <div className="cl-bcaiov-visual">
              <div className="cl-bcaiov-img-wrap">
                <img src="/courses/bca/content1.webp" className="object-top" alt="BCA AI & ML students at Tulas Institute" />
              </div>
              <div className="cl-bcaiov-badge">
                <span className="yr">3Y</span>
                <span className="lbl">NEP 2020<br />OBE Framework</span>
              </div>
            </div>

            <div>
              <div className="cl-bcaiov-eyebrow"><span className="bar" />School of Computing</div>
              <h2 className="cl-bcaiov-h2">Where Code<br /><em>Meets AI</em></h2>
              <p className="cl-bcaiov-lead">
                The BCA in AI &amp; ML at Tulas Institute teaches you to build real software — not just study it.
              </p>
              <p className="cl-bcaiov-body">
                You start by writing code and building web pages, then build full-stack apps, then add AI features, and finish with a complete AI-powered product. By graduation you have at least two live, deployed applications any employer or client can open and test, plus placement preparation and freelancing skills.
              </p>
              <blockquote className="cl-bcaiov-quote">
                "You graduate with real apps — a deployed personal website in Year 1, a full-stack web app in Year 2, an AI-powered industry project in Year 3, and a final internship or capstone."
              </blockquote>
            </div>
          </div>

          <div className="cl-bcaiov-domain-head">
            <div className="cl-bcaiov-domain-eyebrow"><span className="bar" />Domains of Study</div>
            <h2 className="cl-bcaiov-domain-h2">Core Stack, Then<br /><em>One Minor Track</em></h2>
            <p className="cl-bcaiov-domain-desc">
              Master the full developer stack, then choose one Minor track running across Years 2 and 3, ending in an industry-panel capstone.
            </p>
          </div>

          <div className="cl-bcaiov-grid">
            {DOMAINS.map(d => (
              <div className="cl-bcaiov-card" key={d.tag}>
                <div className="cl-bcaiov-card-vis">
                  <span className="cl-bcaiov-card-tag">{d.tag}</span>
                  <span className="cl-bcaiov-card-icon">{d.icon}</span>
                  <span className="cl-bcaiov-card-title">{d.title}</span>
                </div>
                <div className="cl-bcaiov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-bcaiov-pill-row">
                    {d.pills.map(p => <span key={p} className="cl-bcaiov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-bcaiov-core">
            <div className="cl-bcaiov-core-cap">Built On The Full Developer Stack</div>
            <p>Python · JavaScript · React · Databases &amp; SQL · Cloud Computing · AI Tools</p>
          </div>

          {/* <div className="cl-bcaiov-cla-title">Core Learning Areas</div>
          <div className="cl-bcaiov-cla-row">
            {CORE_AREAS.map(a => (
              <span key={a} className="cl-bcaiov-cla-chip">{a}</span>
            ))}
          </div> */}

        </div>
      </section>
    </>
  );
}
