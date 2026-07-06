'use client';

import { useState } from 'react';

const TABS = [
  { id: 'usps', num: '01', label: 'USPs' },
  { id: 'co',   num: '02', label: 'Course Outcomes' },
  { id: 'po',   num: '03', label: 'Program Outcomes' },
  { id: 'pso',  num: '04', label: 'Program Specific Outcomes' },
  { id: 'peo',  num: '05', label: 'Program Educational Objectives' },
];

const USPS = [
  'Job-ready by Semester II — a real multi-channel live brand campaign run in Year 1.',
  'Three career paths built in — a corporate marketing team, an independent consulting practice, or a founder\'s track into your own digital agency, each with dedicated Semester IV modules.',
  'AI Tools for Marketers runs across three semesters, building working fluency with AI-driven content, campaign and analytics tools.',
  'Business Analytics for Marketers and Financial Accounting for Marketers so every recommendation is backed by data and defensible on a brand P&L.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure marketing roles, ASCI advertising standards, and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — Google, Meta, HubSpot, DeepLearning.AI and IIT Kanpur E&ICT Academy — prepared for within regular coursework, not bolted on afterward.',
  'An Industry Live Brand Project in Semester III and a CMO-panel capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO_ROWS = [
  { sem: 'Semester I',   outcome: 'Apply core management concepts — strategy, communication, financial analysis, and business economics — to brand-facing problems, while building first-level fluency with AI tools for marketers.' },
  { sem: 'Semester II',  outcome: 'Integrate marketing, financial and operations management with business analytics and AI foundations to plan and run a live, multi-channel brand campaign.' },
  { sem: 'Semester III', outcome: 'Apply strategic management and digital transformation frameworks within a Major Specialisation and a Minor Track, executed through an Industry Live Brand Project.' },
  { sem: 'Semester IV',  outcome: 'Demonstrate agency leadership, career readiness, and capstone-level brand strategy through an advanced Major Specialisation, an internship or capstone brand project, and a CMO-panel review.' },
];

const PO_ROWS = [
  { po: 'PO1 · Marketing Knowledge',  outcome: 'Apply advanced marketing management concepts — brand equity, consumer behaviour, digital strategy — to complex brand and business problems.' },
  { po: 'PO2 · Problem Analysis',     outcome: 'Analyse campaign data, consumer insights, and market research to generate actionable brand and marketing recommendations.' },
  { po: 'PO3 · Design & Development', outcome: 'Design and execute integrated marketing campaigns across digital and traditional channels with measurable outcomes.' },
  { po: 'PO4 · AI Tool Usage',        outcome: 'Use AI tools for content, campaign optimisation, segmentation, and productivity — responsibly and effectively.' },
  { po: 'PO5 · Leadership',           outcome: 'Demonstrate marketing leadership — brand P&L ownership, agency management, team leadership, and CMO-level communication.' },
  { po: 'PO6 · Communication',        outcome: 'Communicate brand strategy, campaign performance, and insights clearly to C-suite, agency partners, and non-marketing stakeholders.' },
  { po: 'PO7 · Ethics',               outcome: 'Apply consumer privacy, responsible advertising, truthful brand communication, and responsible AI use in marketing.' },
  { po: 'PO8 · Project Management',   outcome: 'Manage campaign planning, budget allocation, timelines, agency briefing, and performance reporting.' },
  { po: 'PO9 · Innovation',           outcome: 'Drive brand innovation — launches, brand extensions, growth hacking, influencer strategy, and social commerce.' },
  { po: 'PO10 · Life-Long Learning',  outcome: 'Engage in lifelong learning in the evolving digital marketing, AI, and brand management landscape.' },
];

const PSO = [
  { code: 'PSO1', text: 'Plan and execute integrated digital marketing campaigns — brief to live campaign to performance report — across paid, owned, and earned channels.' },
  { code: 'PSO2', text: 'Build and manage brand strategy — positioning, brand architecture, equity measurement, and brand P&L accountability.' },
  { code: 'PSO3', text: 'Use AI tools for marketing — content at scale, campaign optimisation, audience targeting, and journey personalisation — with appropriate governance.' },
  { code: 'PSO4', text: 'Analyse marketing data — attribution, customer lifetime value, cohort analysis, funnel performance — and present to a marketing leadership team.' },
  { code: 'PSO5', text: 'Lead marketing teams and agency relationships — briefing creatives, managing media agencies, setting OKRs, and presenting strategy to senior management.' },
];

const PEO = [
  { code: 'PEO1', text: 'Produce graduates employable as brand managers, digital marketing leads, and marketing directors across FMCG, agencies, e-commerce, and consulting organisations.' },
  { code: 'PEO2', text: 'Enable data-driven marketing practice — using analytics, AI tools, and campaign measurement to make better brand and media decisions.' },
  { code: 'PEO3', text: 'Develop marketing leadership capability — brand P&L management, agency relationships, team leadership, and C-suite communication.' },
  { code: 'PEO4', text: 'Instil professional ethics, responsible AI use in marketing, consumer privacy awareness, and a commitment to honest brand communication.' },
];

export default function MBADMProgramDetails() {
  const [active, setActive] = useState('usps');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-dmpd-wrap{max-width:1280px;margin:0 auto}
        .cl-dmpd-eyebrow-pill{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-dmpd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5vw,4.8rem);color:#001F4C;line-height:.92;margin-bottom:48px}
        .cl-dmpd-h2 em{font-style:normal;color:#DF5400}
        .cl-dmpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-dmpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-dmpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s}
        .cl-dmpd-tab:hover{background:rgba(0,31,76,.06)}
        .cl-dmpd-tab.active{background:#001F4C;color:#fff}
        .cl-dmpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-dmpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-dmpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-dmpd-content-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-dmpd-content-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px}
        .cl-dmpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-dmpd-point:last-child{border-bottom:none}
        .cl-dmpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-dmpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        .cl-dmpd-point p strong{color:#001F4C}
        .cl-dmpd-table{width:100%;border-collapse:collapse}
        .cl-dmpd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        .cl-dmpd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-dmpd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap}

        @media(max-width:800px){
          .cl-dmpd-grid{grid-template-columns:1fr}
        }
        @media(max-width:640px){
          .cl-dmpd-sec{padding:70px 5%}
          .cl-dmpd-table td.k{white-space:normal}
        }
      `}} />

      <section className="cl-dmpd-sec" id="program-details">
        <div className="cl-dmpd-wrap">
          <span className="cl-dmpd-eyebrow-pill">MBA DM · Academic Framework</span>
          <h2 className="cl-dmpd-h2">Program <em>Details</em></h2>

          <div className="cl-dmpd-grid">
            {/* Nav */}
            <nav className="cl-dmpd-nav">
              {TABS.map(t => (
                <button
                  key={t.id}
                  className={`cl-dmpd-tab${active === t.id ? ' active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  <span className="num">{t.num}</span>
                  {t.label}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="cl-dmpd-content">

              {/* USPs */}
              {active === 'usps' && (
                <>
                  <div className="cl-dmpd-content-lbl">Unique Selling Points</div>
                  <h3 className="cl-dmpd-content-h3">USPs</h3>
                  {USPS.map((u, i) => (
                    <div key={i} className="cl-dmpd-point">
                      <div className="cl-dmpd-dot" />
                      <p>{u}</p>
                    </div>
                  ))}
                </>
              )}

              {/* Course Outcomes */}
              {active === 'co' && (
                <>
                  <div className="cl-dmpd-content-lbl">Semester-Wise Course Outcomes</div>
                  <h3 className="cl-dmpd-content-h3">Course Outcomes</h3>
                  <table className="cl-dmpd-table">
                    <thead>
                      <tr><th>Semester</th><th>Outcome</th></tr>
                    </thead>
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

              {/* Program Outcomes */}
              {active === 'po' && (
                <>
                  <div className="cl-dmpd-content-lbl">Programme Outcomes</div>
                  <h3 className="cl-dmpd-content-h3">Program Outcomes</h3>
                  <table className="cl-dmpd-table">
                    <thead>
                      <tr><th>PO</th><th>Outcome</th></tr>
                    </thead>
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

              {/* PSO */}
              {active === 'pso' && (
                <>
                  <div className="cl-dmpd-content-lbl">Programme Specific Outcomes</div>
                  <h3 className="cl-dmpd-content-h3">Program Specific Outcomes</h3>
                  {PSO.map(p => (
                    <div key={p.code} className="cl-dmpd-point">
                      <div className="cl-dmpd-dot" />
                      <p><strong>{p.code}</strong> — {p.text}</p>
                    </div>
                  ))}
                </>
              )}

              {/* PEO */}
              {active === 'peo' && (
                <>
                  <div className="cl-dmpd-content-lbl">Programme Educational Objectives</div>
                  <h3 className="cl-dmpd-content-h3">Program Educational Objectives</h3>
                  {PEO.map(p => (
                    <div key={p.code} className="cl-dmpd-point">
                      <div className="cl-dmpd-dot" />
                      <p><strong>{p.code}</strong> — {p.text}</p>
                    </div>
                  ))}
                </>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
