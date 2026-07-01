'use client';

const PILLARS = [
  {
    tag: 'Core',
    name: 'Machine Learning & AI',
    desc: 'Supervised, unsupervised and reinforcement learning to build models that predict and classify.',
    pills: ['Regression', 'Neural Nets', 'Modelling'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.95 16.95l1.41 1.41M5.64 18.36l1.42-1.42M16.95 7.05l1.41-1.41" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 013-3" />
      </svg>
    ),
  },
  {
    tag: 'High Demand',
    name: 'Big Data Engineering',
    desc: 'Distributed systems and pipelines to store, process and analyse data at massive scale.',
    pills: ['Hadoop', 'Spark', 'Pipelines'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
      </svg>
    ),
  },
  {
    tag: 'Industry Ready',
    name: 'Business Analytics & BI',
    desc: 'Statistical analysis and dashboards that translate data into business strategy.',
    pills: ['Power BI', 'Tableau', 'SQL'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-5 4 3 4-6" />
      </svg>
    ),
  },
  {
    tag: 'Future Tech',
    name: 'Deep Learning & Vision',
    desc: 'Neural networks for image, video and language — the engine behind modern AI.',
    pills: ['CNNs', 'NLP', 'Vision'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l2 2M16 6l2-2M6 18l2-2M16 18l2 2" />
      </svg>
    ),
  },
  {
    tag: 'Essential Skill',
    name: 'Visualization & Storytelling',
    desc: 'Turn complex findings into clear, compelling visual stories for any audience.',
    pills: ['Dashboards', 'D3.js', 'Reporting'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeLinejoin="round" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeLinejoin="round" />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Python & R', 'Statistics & Probability', 'Machine Learning', 'Data Structures',
  'Big Data', 'Deep Learning', 'Data Mining', 'Data Visualization',
  'SQL & NoSQL', 'Cloud Data Platforms',
];

export default function DSOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dso-sec{padding:110px 7%;background:#fff}
        .cl-dso-wrap{max-width:1280px;margin:0 auto}

        /* split */
        .cl-dso-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-dso-imgwrap{position:relative}
        .cl-dso-img{border-radius:20px;width:100%;height:520px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22);position:relative}
        .cl-dso-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-dso-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2)}
        .cl-dso-badge .big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-dso-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-dso-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dso-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dso-h2{margin-bottom:22px;line-height:.95;letter-spacing:.01em;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-dso-h2 em{font-style:normal;color:#DF5400}
        .cl-dso-lead{font-size:1.18rem;font-weight:600;line-height:1.7;margin-bottom:20px;color:#001F4C}
        .cl-dso-body{font-size:1rem;line-height:1.9;margin-bottom:20px;color:#5a6a8a}
        .cl-dso-quote{padding-left:22px;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;border-left:4px solid #DF5400;color:#001F4C}

        /* section head */
        .cl-dso-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dso-head .cl-dso-eyebrow{justify-content:center}
        .cl-dso-head p{font-size:1.08rem;line-height:1.9;max-width:850px;margin:0 auto;color:#5a6a8a}

        /* pillar grid */
        .cl-dso-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-dso-card{background:#fff;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .4s,box-shadow .4s}
        .cl-dso-card:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,31,76,.14)}
        .cl-dso-card-img{position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-dso-card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-dso-card-img svg{width:60px;height:60px;color:rgba(255,243,215,.85);position:relative;z-index:1}
        .cl-dso-card-tag{position:absolute;top:14px;left:14px;z-index:3;padding:6px 14px;border-radius:20px;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,243,215,.95);color:#001F4C}
        .cl-dso-card-name{position:absolute;bottom:14px;left:18px;right:18px;z-index:3;font-weight:800;font-size:1.15rem;color:#fff;line-height:1.25}
        .cl-dso-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-dso-card-body p{font-size:.9rem;line-height:1.7;margin-bottom:16px;color:#5a6a8a}
        .cl-dso-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-dso-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-dso-core-card{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;color:#fff;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-dso-core-card .t{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1.05;margin-bottom:12px}
        .cl-dso-core-card p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        /* core areas */
        .cl-dso-areas{margin-top:70px}
        .cl-dso-areas h3{text-align:center;font-size:1.5rem;font-weight:800;margin-bottom:36px;color:#001F4C}
        .cl-dso-tag-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:900px;margin:0 auto}
        .cl-dso-tag{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .25s;cursor:default}
        .cl-dso-tag:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-2px)}

        @media(max-width:1200px){.cl-dso-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){
          .cl-dso-split{grid-template-columns:1fr;gap:40px}
          .cl-dso-badge{left:0}
        }
        @media(max-width:640px){
          .cl-dso-sec{padding:70px 5%}
          .cl-dso-grid{grid-template-columns:1fr}
          .cl-dso-core-card{grid-column:span 1}
        }
      `}} />

      <section className="cl-dso-sec" id="overview">
        <div className="cl-dso-wrap">

          {/* Split */}
          <div className="cl-dso-split">
            <div className="cl-dso-imgwrap">
              <div className="cl-dso-img">
                <img src="/courses/btech/computer-science-engineering-data-science/contentLeft.webp" alt="Data Science students at Tulas" />
              </div>
              <div className="cl-dso-badge">
                <span className="big">AICTE</span>
                <span className="lbl">Approved<br />Program</span>
              </div>
            </div>
            <div>
              <div className="cl-dso-eyebrow"><span className="bar" />Department of Data Science</div>
              <h2 className="cl-dso-h2">Where Data Meets<br /><em>Decisions</em></h2>
              <p className="cl-dso-lead">The B.Tech in Data Science at Tulas is designed to create future-ready professionals who turn raw data into intelligent decisions.</p>
              <p className="cl-dso-body">The program builds a deep understanding of statistics, programming, machine learning, big data engineering and artificial intelligence. With a strong emphasis on hands-on learning, students gain practical experience across the full data lifecycle — collecting, cleaning, modelling, visualizing and deploying — all aligned with current industry trends in analytics and AI.</p>
              <blockquote className="cl-dso-quote">"Learn to question data, build models that matter, and turn information into impact with the B.Tech in Data Science at Tulas."</blockquote>
            </div>
          </div>

          {/* Pillars heading */}
          <div className="cl-dso-head">
            <div className="cl-dso-eyebrow" style={{ justifyContent: 'center' }}><span className="bar" />Focus Areas</div>
            <h2 className="cl-dso-h2">Five Pillars, One Strong<br /><em>Data Foundation</em></h2>
            <p>Every focus area is built on a strong foundation of mathematics, statistics and programming, enhanced through AI-integrated learning.</p>
          </div>

          {/* Pillar grid */}
          <div className="cl-dso-grid">
            {PILLARS.map((p) => (
              <div className="cl-dso-card" key={p.name}>
                <div className="cl-dso-card-img">
                  {p.icon}
                  <span className="cl-dso-card-tag">{p.tag}</span>
                  <span className="cl-dso-card-name">{p.name}</span>
                </div>
                <div className="cl-dso-card-body">
                  <p>{p.desc}</p>
                  <div className="cl-dso-pills">
                    {p.pills.map((t) => <span className="cl-dso-pill" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-dso-core-card">
              <div className="t">Built On Core<br />Data Science</div>
              <p>Mathematics · Statistics · Programming · Databases · Machine Learning · Big Data · Visualization</p>
            </div>
          </div>

          {/* Core areas */}
          <div className="cl-dso-areas">
            <h3>Core Learning Areas</h3>
            <div className="cl-dso-tag-row">
              {CORE_AREAS.map((a) => <span className="cl-dso-tag" key={a}>{a}</span>)}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
