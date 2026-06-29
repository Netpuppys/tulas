'use client';

const SPECS = [
  {
    tag: 'Core',
    name: 'Network & Systems Security',
    desc: 'The complete foundation — firewalls, IDS/IPS, VPNs and secure network architecture.',
    pills: ['Firewalls', 'IDS / IPS', 'VPNs'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
  },
  {
    tag: 'Offensive',
    name: 'Ethical Hacking & Pentesting',
    desc: 'Penetration testing, exploitation and red-team operations to find weaknesses first.',
    pills: ['Pentesting', 'Red Team', 'Exploits'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
      </svg>
    ),
  },
  {
    tag: 'Industry Ready',
    name: 'Digital Forensics & IR',
    desc: 'Investigate breaches, analyze malware, and lead incident response after attacks.',
    pills: ['Forensics', 'Incident Response', 'Malware'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l4 4" />
      </svg>
    ),
  },
  {
    tag: 'Future Tech',
    name: 'Cloud & Application Security',
    desc: 'Secure cloud workloads and software pipelines with DevSecOps practices.',
    pills: ['Cloud Security', 'DevSecOps', 'AppSec'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 1118 18H7z" />
      </svg>
    ),
  },
  {
    tag: 'High Demand',
    name: 'Cryptography, Risk & GRC',
    desc: 'Cryptography, governance, risk and compliance to protect data and meet standards.',
    pills: ['Cryptography', 'GRC', 'Compliance'],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <rect x="5" y="10" width="14" height="10" rx="2" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10V7a4 4 0 018 0v3" />
      </svg>
    ),
  },
];

const CORE_AREAS = [
  'Network Security','Ethical Hacking','Cryptography','Digital Forensics',
  'Malware Analysis','Cloud Security','Penetration Testing','Incident Response',
  'Security Operations','Secure Coding',
];

export default function CyberSecOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cyo-sec{padding:110px 7%;background:#fff}
        .cl-cyo-wrap{max-width:1280px;margin:0 auto}

        /* split */
        .cl-cyo-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-cyo-imgwrap{position:relative}
        .cl-cyo-img{border-radius:20px;width:100%;height:520px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22);position:relative}
        .cl-cyo-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-cyo-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2)}
        .cl-cyo-badge .big{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-cyo-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}
        .cl-cyo-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-cyo-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-cyo-h2{margin-bottom:22px;line-height:.95;letter-spacing:.01em;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-cyo-h2 em{font-style:normal;color:#DF5400}
        .cl-cyo-lead{font-size:1.18rem;font-weight:600;line-height:1.7;margin-bottom:20px;color:#001F4C}
        .cl-cyo-body{font-size:1rem;line-height:1.9;margin-bottom:20px;color:#5a6a8a}
        .cl-cyo-quote{padding-left:22px;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;border-left:4px solid #DF5400;color:#001F4C}

        /* section head */
        .cl-cyo-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-cyo-head .cl-cyo-eyebrow{justify-content:center}
        .cl-cyo-head p{font-size:1.08rem;line-height:1.9;max-width:850px;margin:0 auto;color:#5a6a8a}

        /* spec grid */
        .cl-cyo-spec-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .cl-cyo-card{background:#fff;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 28px rgba(0,31,76,.07);transition:transform .4s,box-shadow .4s}
        .cl-cyo-card:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,31,76,.14)}
        .cl-cyo-card-img{position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-cyo-card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,31,76,.9) 0%,rgba(0,31,76,.15) 55%,transparent 100%)}
        .cl-cyo-card-img svg{width:60px;height:60px;color:rgba(255,243,215,.85);position:relative;z-index:1}
        .cl-cyo-card-tag{position:absolute;top:14px;left:14px;z-index:3;padding:6px 14px;border-radius:20px;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,243,215,.95);color:#001F4C}
        .cl-cyo-card-name{position:absolute;bottom:14px;left:18px;right:18px;z-index:3;font-weight:800;font-size:1.15rem;color:#fff;line-height:1.25}
        .cl-cyo-card-body{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-cyo-card-body p{font-size:.9rem;line-height:1.7;margin-bottom:16px;color:#5a6a8a}
        .cl-cyo-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-cyo-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-cyo-core-card{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;color:#fff;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-cyo-core-card .t{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;line-height:1.05;margin-bottom:12px}
        .cl-cyo-core-card p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        /* core areas */
        .cl-cyo-areas{margin-top:70px}
        .cl-cyo-areas h3{text-align:center;font-size:1.5rem;font-weight:800;margin-bottom:36px;color:#001F4C}
        .cl-cyo-tag-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:900px;margin:0 auto}
        .cl-cyo-tag{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .25s;cursor:default}
        .cl-cyo-tag:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-2px)}

        @media(max-width:1200px){.cl-cyo-spec-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:968px){
          .cl-cyo-split{grid-template-columns:1fr;gap:40px}
          .cl-cyo-badge{left:0}
        }
        @media(max-width:640px){
          .cl-cyo-sec{padding:70px 5%}
          .cl-cyo-spec-grid{grid-template-columns:1fr}
          .cl-cyo-core-card{grid-column:span 1}
        }
      `}} />

      <section className="cl-cyo-sec" id="overview">
        <div className="cl-cyo-wrap">

          {/* Split */}
          <div className="cl-cyo-split">
            <div className="cl-cyo-imgwrap">
              <div className="cl-cyo-img">
                <img src="/courses/btech/computer-science-engineering-cyber-security/contentLeft.webp" alt="Cyber Security students at Tulas" className="object-top"/>
              </div>
              <div className="cl-cyo-badge">
                <span className="big">NBA</span>
                <span className="lbl">Accredited<br />CSE Department (2024)</span>
              </div>
            </div>
            <div>
              <div className="cl-cyo-eyebrow"><span className="bar" />Department of Cyber Security</div>
              <h2 className="cl-cyo-h2">Where Security Meets<br /><em>Real-World Defense</em></h2>
              <p className="cl-cyo-lead">The B.Tech in Cyber Security at Tulas is designed to create future-ready defenders for the digital economy.</p>
              <p className="cl-cyo-body">The program provides an in-depth understanding of network security, ethical hacking, cryptography, digital forensics and cloud security. With a strong emphasis on hands-on labs, threat analysis and problem-solving, students gain practical experience in penetration testing, incident response, malware analysis, security operations and secure software development — all aligned with current industry trends.</p>
              <blockquote className="cl-cyo-quote">"Secure the future, outthink the attacker, and defend what matters with Tulas' B.Tech in Cyber Security."</blockquote>
            </div>
          </div>

          {/* Specs heading */}
          <div className="cl-cyo-head">
            <div className="cl-cyo-eyebrow" style={{ justifyContent: 'center' }}><span className="bar" />Specializations</div>
            <h2 className="cl-cyo-h2">Five Domains, One Strong<br /><em>Security Core</em></h2>
            <p>Every domain is built on a strong security foundation and reinforced through hands-on, lab-driven learning.</p>
          </div>

          {/* Spec grid */}
          <div className="cl-cyo-spec-grid">
            {SPECS.map((s) => (
              <div className="cl-cyo-card" key={s.name}>
                <div className="cl-cyo-card-img">
                  {s.icon}
                  <span className="cl-cyo-card-tag">{s.tag}</span>
                  <span className="cl-cyo-card-name">{s.name}</span>
                </div>
                <div className="cl-cyo-card-body">
                  <p>{s.desc}</p>
                  <div className="cl-cyo-pills">
                    {s.pills.map((p) => <span className="cl-cyo-pill" key={p}>{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-cyo-core-card">
              <div className="t">Built On Core<br />Security Principles</div>
              <p>Networking · Operating Systems · Cryptography · Linux · Scripting · Threat Analysis · Secure Coding</p>
            </div>
          </div>

          {/* Core areas */}
          <div className="cl-cyo-areas">
            <h3>Core Learning Areas</h3>
            <div className="cl-cyo-tag-row">
              {CORE_AREAS.map((a) => <span className="cl-cyo-tag" key={a}>{a}</span>)}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
