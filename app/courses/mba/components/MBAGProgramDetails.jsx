'use client';

import { useState } from 'react';

const CO_ROWS = [
  { sem: 'Semester I', outcome: 'Apply core management concepts — strategy, communication, financial analysis, and business economics — while building first-level fluency with AI tools for business.' },
  { sem: 'Semester II', outcome: 'Integrate marketing, financial and operations management with business analytics and AI foundations to execute a live business project.' },
  { sem: 'Semester III', outcome: 'Apply strategic management and specialization-specific frameworks through a Major Specialisation and an Industry Live Project.' },
  { sem: 'Semester IV', outcome: 'Demonstrate functional leadership, career readiness, and capstone-level strategic thinking through an advanced specialization, internship or capstone project, and CXO-panel review.' },
];

const PO_ROWS = [
  { po: 'PO1 · Management Knowledge', outcome: 'Apply advanced management concepts across strategy, finance, marketing, HR and operations to complex business problems.' },
  { po: 'PO2 · Problem Analysis', outcome: 'Analyse business data, market research, and organisational context to generate actionable recommendations.' },
  { po: 'PO3 · Design & Execution', outcome: 'Design and execute functional strategies and business projects with measurable outcomes.' },
  { po: 'PO4 · AI Tool Usage', outcome: 'Use AI tools for analysis, forecasting, content, and productivity across business functions — responsibly and effectively.' },
  { po: 'PO5 · Leadership', outcome: 'Demonstrate leadership across teams, functions, and stakeholder groups, up to CXO-level communication.' },
  { po: 'PO6 · Communication', outcome: 'Communicate strategy, performance, and insights clearly to leadership, clients, and non-specialist stakeholders.' },
  { po: 'PO7 · Ethics', outcome: 'Apply professional ethics, data privacy, and responsible AI use across business decision-making.' },
  { po: 'PO8 · Project Management', outcome: 'Manage project planning, budgeting, timelines, and performance reporting across functions.' },
  { po: 'PO9 · Innovation', outcome: 'Drive innovation — new products, processes, market entry, and growth strategy — within a chosen specialization.' },
  { po: 'PO10 · Life-Long Learning', outcome: 'Engage in lifelong learning in the evolving business, technology, and AI landscape.' },
];

const PSO_ITEMS = [
  { id: 'PSO1', text: 'Apply specialization-specific frameworks and tools — marketing, HR, international business, finance, or analytics — to real business problems.' },
  { id: 'PSO2', text: 'Use AI and data tools relevant to the chosen specialization for forecasting, optimisation, and decision support.' },
  { id: 'PSO3', text: 'Plan and execute a live business or industry project from brief to outcome, within a specialization context.' },
  { id: 'PSO4', text: 'Present strategy, analysis, and recommendations to a senior leadership or CXO-panel audience.' },
  { id: 'PSO5', text: 'Lead cross-functional teams and stakeholder relationships within the chosen area of specialization.' },
];

const PEO_ITEMS = [
  { id: 'PEO1', text: 'Produce graduates employable as managers and specialists across marketing, HR, international business, finance, and analytics functions.' },
  { id: 'PEO2', text: 'Enable data- and AI-driven business practice across every functional specialization.' },
  { id: 'PEO3', text: 'Develop leadership capability — team management, stakeholder relationships, and senior-level communication.' },
  { id: 'PEO4', text: 'Instil professional ethics, responsible AI use, and a commitment to sound business practice.' },
];

const USPS = [
  'Six industry-facing specializations — Marketing, Digital Marketing using AI, HRM, International Business, Finance, and Business Analytics — on one shared management core.',
  'AI tools integrated across the curriculum via LEAP, an AI-native learning platform that personalises your path.',
  'Live business projects and an Industry Live Project embedded across both years of the programme.',
  'A certification stack — Google, Meta, Microsoft, HubSpot, SAP, and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course covering burnout, ethics, and professional workplace navigation.',
  'A CXO-panel capstone in the final semester, reviewed by senior industry practitioners.',
  'Dedicated placement support across the final year of the programme.',
  'Highest package of ₹60 LPA achieved by MBA graduates.',
  'Strong faculty and industry mentorship across every specialization track.',
];

const TABS = [
  { id: 'usps', label: 'USPs' },
  { id: 'co',   label: 'Course Outcomes' },
  { id: 'po',   label: 'Program Outcomes' },
  { id: 'pso',  label: 'Program Specific Outcomes' },
  { id: 'peo',  label: 'Program Educational Objectives' },
];

export default function MBAGProgramDetails() {
  const [active, setActive] = useState('usps');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbagpd-wrap{max-width:1280px;margin:0 auto}
        .cl-mbagpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbagpd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,3.2rem);color:#001F4C;line-height:.92;margin-bottom:48px}
        .cl-mbagpd-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbagpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbagpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;font-family:inherit;transition:background .2s,color .2s}
        .cl-mbagpd-tab:hover{background:#e8ecf4}
        .cl-mbagpd-tab.active{background:#001F4C;color:#fff}
        .cl-mbagpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0}
        .cl-mbagpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbagpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbagpd-ch-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbagpd-ch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px}
        .cl-mbagpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbagpd-point:last-child{border-bottom:none}
        .cl-mbagpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbagpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        table.cl-mbagpd-tbl{width:100%;border-collapse:collapse}
        table.cl-mbagpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        table.cl-mbagpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        table.cl-mbagpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbagpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbagpd-sec{padding:70px 5%}}
      `}} />

      <section className="cl-mbagpd-sec" id="program-details">
        <div className="cl-mbagpd-wrap">
          <div className="cl-mbagpd-eyebrow">MBA · Academic Framework</div>
          <h2 className="cl-mbagpd-h2">Program <em>Details</em></h2>

          <div className="cl-mbagpd-grid">
            {/* Tab navigation */}
            <nav className="cl-mbagpd-nav">
              {TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  className={`cl-mbagpd-tab${active === tab.id ? ' active' : ''}`}
                  onClick={() => setActive(tab.id)}
                >
                  <span className="num">0{i + 1}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Tab content */}
            <div className="cl-mbagpd-content">

              {active === 'usps' && (
                <>
                  <div className="cl-mbagpd-ch-lbl">Unique Selling Points</div>
                  <div className="cl-mbagpd-ch-h3">USPs</div>
                  <div>
                    {USPS.map((u, i) => (
                      <div key={i} className="cl-mbagpd-point">
                        <div className="cl-mbagpd-dot" />
                        <p>{u}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'co' && (
                <>
                  <div className="cl-mbagpd-ch-lbl">Semester-Wise Course Outcomes</div>
                  <div className="cl-mbagpd-ch-h3">Course Outcomes</div>
                  <table className="cl-mbagpd-tbl">
                    <thead><tr><th>Semester</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO_ROWS.map(r => (
                        <tr key={r.sem}>
                          <td className="k">{r.sem}</td>
                          <td>{r.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {active === 'po' && (
                <>
                  <div className="cl-mbagpd-ch-lbl">Programme Outcomes</div>
                  <div className="cl-mbagpd-ch-h3">Program Outcomes</div>
                  <table className="cl-mbagpd-tbl">
                    <thead><tr><th>PO</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {PO_ROWS.map(r => (
                        <tr key={r.po}>
                          <td className="k">{r.po}</td>
                          <td>{r.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {active === 'pso' && (
                <>
                  <div className="cl-mbagpd-ch-lbl">Programme Specific Outcomes</div>
                  <div className="cl-mbagpd-ch-h3">Program Specific Outcomes</div>
                  <div>
                    {PSO_ITEMS.map(item => (
                      <div key={item.id} className="cl-mbagpd-point">
                        <div className="cl-mbagpd-dot" />
                        <p><strong style={{ color: '#001F4C' }}>{item.id}</strong> — {item.text}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === 'peo' && (
                <>
                  <div className="cl-mbagpd-ch-lbl">Programme Educational Objectives</div>
                  <div className="cl-mbagpd-ch-h3">Program Educational Objectives</div>
                  <div>
                    {PEO_ITEMS.map(item => (
                      <div key={item.id} className="cl-mbagpd-point">
                        <div className="cl-mbagpd-dot" />
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
