'use client';

const DOMAINS = [
  {
    tag: 'Frontend',
    title: 'Frontend Development',
    desc: 'Build responsive, accessible UIs with React.js, modern CSS, and component-driven design patterns.',
    pills: ['React.js', 'Responsive UI', 'Component Design'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    tag: 'Backend',
    title: 'Backend Development',
    desc: 'Design and build server-side systems with Node.js, Django, Spring Boot, and Laravel.',
    pills: ['Node.js & Express', 'Django', 'Spring Boot', 'Laravel'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    tag: 'Full Stack Tracks',
    title: 'End-to-End Project Tracks',
    desc: 'Build and deploy complete applications across four major stacks from frontend to database.',
    pills: ['MERN', 'Django+React', 'Spring Boot+React', 'Laravel+React'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    tag: 'Cloud & DevOps',
    title: 'Cloud, DevOps & Deployment',
    desc: 'Deploy production apps using Docker, CI/CD pipelines, and AWS or Google Cloud infrastructure.',
    pills: ['Cloud Deployment', 'DevOps', 'Version Control'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    tag: 'AI-Integrated',
    title: 'AI-Powered Web Development',
    desc: 'Integrate machine learning APIs and intelligent features into full stack web applications.',
    pills: ['AI Integration', 'Intelligent Features'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
  },
  {
    tag: 'Security & Enterprise',
    title: 'Web Security & Enterprise Dev',
    desc: 'Implement authentication, encryption, and enterprise-grade architecture for large-scale systems.',
    pills: ['Web App Security', 'Enterprise Development'],
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Problem Solving Using C', 'OOP with C++ & Java', 'Data Structures',
  'Database Management Systems', 'Software Engineering', 'Operating Systems',
  'Computer Networks', 'Design & Analysis of Algorithms',
  'Theory of Computation', 'Compiler Design', 'Network Security', 'Web Technology',
];

export default function BCFSOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfsov-sec{padding:110px 7%;background:#fff}
        .cl-bcfsov-wrap{max-width:1280px;margin:0 auto}
        .cl-bcfsov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}

        .cl-bcfsov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;box-shadow:0 24px 60px rgba(0,31,76,.22);flex-shrink:0}
        .cl-bcfsov-img-wrap{position:absolute;inset:0;border-radius:20px;overflow:hidden}
        @keyframes cl-bcfsov-zoom{from{transform:scale(1)}to{transform:scale(1.06)}}
        .cl-bcfsov-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;animation:cl-bcfsov-zoom 18s ease-in-out infinite alternate}
        .cl-bcfsov-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,31,76,.55) 100%);border-radius:20px}
        .cl-bcfsov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-bcfsov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-bcfsov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-bcfsov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfsov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfsov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfsov-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfsov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-bcfsov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-bcfsov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-bcfsov-domain-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-bcfsov-domain-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfsov-domain-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfsov-domain-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfsov-domain-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfsov-domain-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-bcfsov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-bcfsov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .35s,box-shadow .35s}
        .cl-bcfsov-card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,31,76,.13)}
        .cl-bcfsov-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-bcfsov-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-bcfsov-card-icon{position:absolute;top:12px;right:14px;color:rgba(255,255,255,.28);line-height:0}
        .cl-bcfsov-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-bcfsov-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-bcfsov-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-bcfsov-pill-row{display:flex;flex-wrap:wrap;gap:7px}
        .cl-bcfsov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}

        .cl-bcfsov-core{margin-top:24px;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-bcfsov-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-bcfsov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-bcfsov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-bcfsov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto}
        .cl-bcfsov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){
          .cl-bcfsov-split{grid-template-columns:1fr;gap:70px}
          .cl-bcfsov-visual{height:380px}
          .cl-bcfsov-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-bcfsov-sec{padding:70px 5%}
          .cl-bcfsov-grid{grid-template-columns:1fr}
          .cl-bcfsov-badge{left:0;right:0;bottom:-30px;justify-content:center}
        }
      `}} />

      <section className="cl-bcfsov-sec" id="overview">
        <div className="cl-bcfsov-wrap">

          <div className="cl-bcfsov-split">
            <div className="cl-bcfsov-visual">
              <div className="cl-bcfsov-img-wrap">
                <img src="/courses/bca/content2.webp" alt="BCA Full Stack students at Tulas Institute" />
              </div>
              <div className="cl-bcfsov-badge">
                <span className="yr">4Y</span>
                <span className="lbl">NEP 2020<br />OBE Framework</span>
              </div>
            </div>

            <div>
              <div className="cl-bcfsov-eyebrow"><span className="bar" />School of Computing</div>
              <h2 className="cl-bcfsov-h2">Where Code<br /><em>Meets Craft</em></h2>
              <p className="cl-bcfsov-lead">
                The BCA Full Stack Development programme trains you to build real web products — not just study them.
              </p>
              <p className="cl-bcfsov-body">
                You start with core CS fundamentals, then master frontend with React.js, then build complete backends with Node.js, Django, Spring Boot, and Laravel — all while deploying on cloud with Docker and CI/CD. By graduation, you have four stacks under your belt and a capstone project live in production.
              </p>
              <blockquote className="cl-bcfsov-quote">
                "You graduate fluent in four full stack tracks — MERN, Django+React, Spring Boot+React, and Laravel+React — with a live deployed capstone project any employer can test."
              </blockquote>
            </div>
          </div>

          <div className="cl-bcfsov-domain-head">
            <div className="cl-bcfsov-domain-eyebrow"><span className="bar" />Domains of Study</div>
            <h2 className="cl-bcfsov-domain-h2">Six Pillars of<br /><em>Full Stack Mastery</em></h2>
            <p className="cl-bcfsov-domain-desc">
              From pixel-perfect frontends to hardened enterprise backends — every layer of the modern web stack, taught end-to-end.
            </p>
          </div>

          <div className="cl-bcfsov-grid">
            {DOMAINS.map(d => (
              <div className="cl-bcfsov-card" key={d.tag}>
                <div className="cl-bcfsov-card-vis">
                  <span className="cl-bcfsov-card-tag">{d.tag}</span>
                  <span className="cl-bcfsov-card-icon">{d.icon}</span>
                  <span className="cl-bcfsov-card-title">{d.title}</span>
                </div>
                <div className="cl-bcfsov-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-bcfsov-pill-row">
                    {d.pills.map(p => <span key={p} className="cl-bcfsov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-bcfsov-core">
            <div className="cl-bcfsov-core-cap">Built On Core Computing</div>
            <p>C · C++ · Python · Java · Data Structures · DBMS · Operating Systems · Computer Networks</p>
          </div>

          <div className="cl-bcfsov-cla-title">Core Learning Areas</div>
          <div className="cl-bcfsov-cla-row">
            {CORE_AREAS.map(a => (
              <span key={a} className="cl-bcfsov-cla-chip">{a}</span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
