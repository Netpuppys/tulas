'use client';

import { useState } from 'react';

const USPS = [
  'You graduate with real apps — a deployed personal website in Year 1, a full-stack web app in Year 2, an AI-powered industry project in Year 3, and a final internship or capstone.',
  'Core + specialisation architecture — master the full stack, then choose one Minor track: Full Stack Web Development, AI Tools & Applications, or Data Analytics.',
  'Freelancing and placement readiness built in — Freelancing Fundamentals, Quantitative Aptitude preparation for TCS/Infosys/Wipro tests, and Career Readiness.',
  'A dedicated NEP 2020 Life Skills & Digital Citizenship course covering financial literacy, developer wellness, data privacy by design, and building a GitHub/LinkedIn profile.',
  'AI-native learning via LEAP, with 9 certifications from NVIDIA, Google, GitHub, freeCodeCamp, DeepLearning.AI, and IIT Kanpur E&ICT Academy.',
  'A Minor track capstone presented to an industry panel.',
  'Dedicated placement support across the final year of the programme.',
];

const CO_ROWS = [
  { sem: 'Semester I',   outcome: 'Write basic Python programs, build simple static web pages, and apply foundational computing and mathematical concepts to solve computing problems.' },
  { sem: 'Semester II',  outcome: 'Design and query relational databases, apply data structures, and deploy a first live personal portfolio website using JavaScript and web fundamentals.' },
  { sem: 'Semester III', outcome: 'Apply object-oriented programming, cloud computing basics, and project management to build a full-stack mini project, while learning freelancing fundamentals.' },
  { sem: 'Semester IV',  outcome: 'Apply machine learning fundamentals and React to build and deploy a full-stack web application within a chosen Minor Specialisation.' },
  { sem: 'Semester V',   outcome: 'Integrate AI tools, backend development, and responsible AI practices into an industry project within the advanced Minor Specialisation.' },
  { sem: 'Semester VI',  outcome: 'Design, build, and deploy a complete AI-powered product, and demonstrate career readiness through an internship or capstone project reviewed by an industry panel.' },
];

const PO_ROWS = [
  { po: 'PO1 · Computing Knowledge', outcome: 'Apply programming, web development, and AI fundamentals to build functional digital applications.' },
  { po: 'PO2 · Problem Solving',     outcome: 'Break a user problem into steps, write code to solve each step, test the result, and fix what does not work.' },
  { po: 'PO3 · Design & Build',      outcome: 'Build complete web applications — the part users see, the part that runs on a server, and the database.' },
  { po: 'PO4 · AI Application',      outcome: 'Use AI tools and services to add intelligent features — chatbots, smart search, content generation, recommendations.' },
  { po: 'PO5 · Tool Usage',          outcome: 'Use industry tools — version control, cloud hosting, development environments, and AI APIs — as a working developer would.' },
  { po: 'PO6 · Communication',       outcome: 'Explain technical work clearly — to teammates, to clients, and in written documentation.' },
  { po: 'PO7 · Collaboration',       outcome: 'Work effectively with other developers — sharing code, reviewing each other\'s work, building software together.' },
  { po: 'PO8 · Ethics',              outcome: 'Apply responsible practices — protecting user data, writing honest code, and using AI tools appropriately.' },
  { po: 'PO9 · Entrepreneurship',    outcome: 'Apply development skills in a freelance or startup context — finding clients, scoping work, delivering on time.' },
  { po: 'PO10 · Life-Long Learning', outcome: 'Keep learning as technology changes — new languages, new AI tools, new ways of building applications.' },
];

const PSO_ITEMS = [
  { id: 'PSO1', text: 'Write Python and JavaScript code to build functional web applications that solve real problems.' },
  { id: 'PSO2', text: 'Build and deploy complete web applications — with a user interface, a working backend, and a database — live on the internet.' },
  { id: 'PSO3', text: 'Use machine learning concepts and AI tools to add intelligent features to web and software applications.' },
  { id: 'PSO4', text: 'Work with databases — storing, retrieving, and managing data for web applications.' },
  { id: 'PSO5', text: 'Graduate with at least two live deployed applications in a portfolio that any employer or client can access and test.' },
];

const PEO_ITEMS = [
  { id: 'PEO1', text: 'Produce graduates who can write code, build web applications, and use AI tools to create functional digital products that work in the real world.' },
  { id: 'PEO2', text: 'Develop practical AI and machine learning skills — understanding how AI models work, how to use them in applications, and when to apply them to a problem.' },
  { id: 'PEO3', text: 'Build professional readiness — version control, project management, client communication, and the ability to work independently or as part of a team.' },
  { id: 'PEO4', text: 'Instil responsible technology practices — data privacy, ethical AI use, secure coding, and honest professional conduct.' },
];

const TABS = [
  { id: 'usps', label: 'USPs' },
  { id: 'co',   label: 'Course Outcomes' },
  { id: 'po',   label: 'Program Outcomes' },
  { id: 'pso',  label: 'Program Specific Outcomes' },
  { id: 'peo',  label: 'Program Educational Objectives' },
];

export default function BCAIProgramDetails() {
  const [active, setActive] = useState('usps');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaipd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-bcaipd-wrap{max-width:1280px;margin:0 auto}
        .cl-bcaipd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-bcaipd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3vw,3rem);color:#001F4C;line-height:.92;margin-bottom:48px}
        .cl-bcaipd-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaipd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-bcaipd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-bcaipd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;font-family:inherit;transition:background .2s,color .2s}
        .cl-bcaipd-tab:hover{background:#e8ecf4}
        .cl-bcaipd-tab.active{background:#001F4C;color:#fff}
        .cl-bcaipd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0}
        .cl-bcaipd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-bcaipd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-bcaipd-ch-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-bcaipd-ch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px}
        .cl-bcaipd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-bcaipd-point:last-child{border-bottom:none}
        .cl-bcaipd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-bcaipd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        table.cl-bcaipd-tbl{width:100%;border-collapse:collapse}
        table.cl-bcaipd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        table.cl-bcaipd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        table.cl-bcaipd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-bcaipd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcaipd-sec{padding:70px 5%}}
      `}} />

      <section className="cl-bcaipd-sec" id="program-details">
        <div className="cl-bcaipd-wrap">
          <div className="cl-bcaipd-eyebrow">BCA AI &amp; ML · Academic Framework</div>
          <h2 className="cl-bcaipd-h2">Program <em>Details</em></h2>

          <div className="cl-bcaipd-grid">
            <nav className="cl-bcaipd-nav">
              {TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  className={`cl-bcaipd-tab${active === tab.id ? ' active' : ''}`}
                  onClick={() => setActive(tab.id)}
                >
                  <span className="num">0{i + 1}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="cl-bcaipd-content">

              {active === 'usps' && (
                <>
                  <div className="cl-bcaipd-ch-lbl">Unique Selling Points</div>
                  <div className="cl-bcaipd-ch-h3">USPs</div>
                  <div>
                    {USPS.map((u, i) => (
                      <div key={i} className="cl-bcaipd-point">
                        <div className="cl-bcaipd-dot" />
                        <p>{u}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'co' && (
                <>
                  <div className="cl-bcaipd-ch-lbl">Semester-Wise Course Outcomes</div>
                  <div className="cl-bcaipd-ch-h3">Course Outcomes</div>
                  <table className="cl-bcaipd-tbl">
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
                  <div className="cl-bcaipd-ch-lbl">Programme Outcomes</div>
                  <div className="cl-bcaipd-ch-h3">Program Outcomes</div>
                  <table className="cl-bcaipd-tbl">
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
                  <div className="cl-bcaipd-ch-lbl">Programme Specific Outcomes</div>
                  <div className="cl-bcaipd-ch-h3">Program Specific Outcomes</div>
                  <div>
                    {PSO_ITEMS.map(item => (
                      <div key={item.id} className="cl-bcaipd-point">
                        <div className="cl-bcaipd-dot" />
                        <p><strong style={{ color: '#001F4C' }}>{item.id}</strong> — {item.text}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'peo' && (
                <>
                  <div className="cl-bcaipd-ch-lbl">Programme Educational Objectives</div>
                  <div className="cl-bcaipd-ch-h3">Program Educational Objectives</div>
                  <div>
                    {PEO_ITEMS.map(item => (
                      <div key={item.id} className="cl-bcaipd-point">
                        <div className="cl-bcaipd-dot" />
                        <p><strong style={{ color: '#001F4C' }}>{item.id}</strong> — {item.text}</p>
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
