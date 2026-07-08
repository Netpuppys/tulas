'use client';
import { useState } from 'react';

const USPS = [
  '4-year, 8-semester programme with 120+ credits under NEP 2020 OBE — with ABC credit exit points at every year.',
  'Four full stack tracks: MERN, Django+React, Spring Boot+React, and Laravel+React — you master all four.',
  'Six live project deliverables across four years — from your first React app in Year 2 to a cloud-deployed capstone in Year 4.',
  'IIT Kanpur E&ICT Academy collaboration for advanced curriculum, certifications, and research access.',
  '8 industry certifications including IIT Kanpur (×3), MongoDB, GitHub, Meta, AWS/Google Cloud, and Docker/Postman.',
  'Cloud deployment and DevOps pipeline labs from Semester V — Docker, CI/CD, AWS/GCP, and container orchestration.',
  'AI integration built into the curriculum — intelligent feature labs in Semester VI across all backend frameworks.',
  'Dual pathway in Semester VII–VIII: long-term industry internship OR in-house capstone reviewed by an industry panel.',
  'Research & Entrepreneurship Ecosystem: Tulas i-Hub access, startup incubation, patent support, and mentorship.',
  'Strong computing core: C, C++, Python, Java, Data Structures, DBMS, Operating Systems, Computer Networks.',
  'Dedicated placement support with quantitative aptitude training and MCA/M.Tech/PhD pathway guidance.',
];

const CO_ROWS = [
  { sem:'Semester I–II',   outcome:'Write procedural and object-oriented programs in C, C++, and Java; build the first static web pages using HTML, CSS, and JavaScript.' },
  { sem:'Semester III',    outcome:'Design and query relational databases, manage operating system resources, and build the first React.js frontend application.' },
  { sem:'Semester IV',     outcome:'Build RESTful backend services using Node.js/Express and Django; integrate with MongoDB and deploy a first full stack MERN or Django application.' },
  { sem:'Semester V',      outcome:'Develop production-ready backends using Spring Boot and Laravel; deploy web applications on cloud platforms using Docker and CI/CD pipelines.' },
  { sem:'Semester VI',     outcome:'Implement network security measures, integrate AI/ML features into web applications, and build a complete AI-powered full stack product.' },
  { sem:'Semester VII',    outcome:'Apply enterprise architecture patterns, web security practices, and conduct an industry internship or advanced full stack project with real clients.' },
  { sem:'Semester VIII',   outcome:'Design, build, and deploy a capstone full stack application across a chosen stack; present to an industry panel and demonstrate portfolio readiness.' },
  { sem:'Programme-Wide',  outcome:'Demonstrate professional communication, project management, DevOps practices, and entrepreneurial thinking through all four years of coursework.' },
];

const PO_ROWS = [
  { po:'PO1 · Computing Knowledge', outcome:'Apply programming, web development, and computer science fundamentals to build functional full stack applications.' },
  { po:'PO2 · Problem Analysis',    outcome:'Analyse complex web system requirements and decompose them into structured, implementable solutions using appropriate data structures and algorithms.' },
  { po:'PO3 · Design & Build',      outcome:'Design and build complete web applications — covering frontend, backend, database, and cloud deployment layers.' },
  { po:'PO4 · Investigation',       outcome:'Conduct research and experimentation to evaluate web frameworks, architectural approaches, and cloud-native tools.' },
  { po:'PO5 · Modern Tools',        outcome:'Use modern IDEs, version control (Git), cloud platforms, container tools (Docker), and DevOps pipelines as a working developer.' },
  { po:'PO6 · Society & Ethics',    outcome:'Understand the societal impact of web technologies, user data privacy, digital security, and responsible AI integration.' },
  { po:'PO7 · Collaboration',       outcome:'Work effectively in development teams — sharing code, reviewing peers, following agile workflows, and meeting deadlines.' },
  { po:'PO8 · Communication',       outcome:'Document and present technical work clearly — to teammates, clients, and in academic or industry reports.' },
];

const PSO_ITEMS = [
  { id:'PSO1', title:'Full Stack Proficiency', text:'Demonstrate end-to-end capability to build, test, and deploy full stack web applications using at least two major stacks — MERN, Django+React, Spring Boot+React, or Laravel+React — with integrated cloud and DevOps practices.' },
  { id:'PSO2', title:'AI-Integrated Development', text:'Design and implement web applications that leverage AI/ML APIs, intelligent automation, and data-driven features, positioning graduates at the intersection of full stack development and artificial intelligence.' },
  { id:'PSO3', title:'Enterprise & Security Readiness', text:'Develop enterprise-grade, secure web systems adhering to industry standards for authentication, authorisation, network security, and scalable architecture, meeting the demands of large-scale production environments.' },
];

const PEO_ITEMS = [
  { id:'PEO1', title:'Industry Leadership', text:'Graduates will establish themselves as competent full stack developers, technical leads, or solution architects in leading technology organisations, contributing meaningfully to digital product development.' },
  { id:'PEO2', title:'Lifelong Learning', text:'Graduates will continuously upskill in emerging web technologies, cloud paradigms, and AI tools, pursuing postgraduate programmes (MCA, M.Tech) or advanced certifications to remain industry-relevant.' },
  { id:'PEO3', title:'Entrepreneurship & Innovation', text:'Graduates will leverage their full stack expertise to launch technology ventures, contribute to open-source projects, or innovate within organisations as intrapreneurs driving digital transformation.' },
];

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

export default function BCFSProgramDetails() {
  const [active, setActive] = useState('usps');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfspd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-bcfspd-wrap{max-width:1280px;margin:0 auto}
        .cl-bcfspd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-bcfspd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92;margin-bottom:48px}
        .cl-bcfspd-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfspd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-bcfspd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-bcfspd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;font-family:inherit;transition:background .2s,color .2s}
        .cl-bcfspd-tab:hover{background:#e8ecf4}
        .cl-bcfspd-tab.active{background:#001F4C;color:#fff}
        .cl-bcfspd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0}
        .cl-bcfspd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-bcfspd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-bcfspd-ch-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-bcfspd-ch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.8rem,3vw,2.4rem);color:#001F4C;line-height:.95;margin-bottom:24px}
        .cl-bcfspd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-bcfspd-point:last-child{border-bottom:none}
        .cl-bcfspd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-bcfspd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        table.cl-bcfspd-tbl{width:100%;border-collapse:collapse}
        table.cl-bcfspd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        table.cl-bcfspd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        table.cl-bcfspd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-bcfspd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcfspd-sec{padding:70px 5%}}
      `}} />

      <section className="cl-bcfspd-sec" id="program-details">
        <div className="cl-bcfspd-wrap">
          <div className="cl-bcfspd-eyebrow">BCA Full Stack Development · Academic Framework</div>
          <h2 className="cl-bcfspd-h2">Program <em>Details</em></h2>

          <div className="cl-bcfspd-grid">
            <nav className="cl-bcfspd-nav">
              {TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  className={`cl-bcfspd-tab${active === tab.id ? ' active' : ''}`}
                  onClick={() => setActive(tab.id)}
                >
                  <span className="num">0{i + 1}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="cl-bcfspd-content">

              {active === 'usps' && (
                <>
                  <div className="cl-bcfspd-ch-lbl">Unique Selling Points</div>
                  <div className="cl-bcfspd-ch-h3">USPs</div>
                  <div>
                    {USPS.map((u, i) => (
                      <div key={i} className="cl-bcfspd-point">
                        <div className="cl-bcfspd-dot" />
                        <p>{u}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'co' && (
                <>
                  <div className="cl-bcfspd-ch-lbl">Semester-Wise Course Outcomes</div>
                  <div className="cl-bcfspd-ch-h3">Course Outcomes</div>
                  <table className="cl-bcfspd-tbl">
                    <thead><tr><th>Semester</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO_ROWS.map(r => (
                        <tr key={r.sem}><td className="k">{r.sem}</td><td>{r.outcome}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {active === 'po' && (
                <>
                  <div className="cl-bcfspd-ch-lbl">Programme Outcomes</div>
                  <div className="cl-bcfspd-ch-h3">Program Outcomes</div>
                  <table className="cl-bcfspd-tbl">
                    <thead><tr><th>PO</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {PO_ROWS.map(r => (
                        <tr key={r.po}><td className="k">{r.po}</td><td>{r.outcome}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {active === 'pso' && (
                <>
                  <div className="cl-bcfspd-ch-lbl">Programme Specific Outcomes</div>
                  <div className="cl-bcfspd-ch-h3">Program Specific Outcomes</div>
                  <div>
                    {PSO_ITEMS.map(item => (
                      <div key={item.id} className="cl-bcfspd-point">
                        <div className="cl-bcfspd-dot" />
                        <p><strong style={{color:'#001F4C'}}>{item.id} — {item.title}:</strong> {item.text}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'peo' && (
                <>
                  <div className="cl-bcfspd-ch-lbl">Programme Educational Objectives</div>
                  <div className="cl-bcfspd-ch-h3">Program Educational Objectives</div>
                  <div>
                    {PEO_ITEMS.map(item => (
                      <div key={item.id} className="cl-bcfspd-point">
                        <div className="cl-bcfspd-dot" />
                        <p><strong style={{color:'#001F4C'}}>{item.id} — {item.title}:</strong> {item.text}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
