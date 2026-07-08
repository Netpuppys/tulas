'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

const USPS = [
  'Job-ready by Semester II — a real consumer research and brand campaign run in Year 1.',
  'Multiple career pathways built in — brand teams, retail and sales leadership, or marketing consulting practice.',
  'AI Tools for Marketers runs across three semesters, building working fluency with AI-driven insight and campaign tools.',
  'Business Analytics for Marketers and Financial Accounting for Marketers so every recommendation is backed by data and defensible on a brand P&L.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure marketing roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — Google, Meta, HubSpot and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live Brand Project in Semester III and a leadership capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO = [
  { k:'Semester I', v:'Apply core management concepts — strategy, communication, financial analysis, and business economics — to brand-facing problems, while building first-level fluency with AI tools for marketers.' },
  { k:'Semester II', v:'Integrate marketing, financial and operations management with business analytics and AI foundations to plan and run a live consumer research and brand project.' },
  { k:'Semester III', v:'Apply strategic management and digital transformation frameworks within Marketing Strategy & Consumer Insights and a Minor Track, executed through an Industry Live Brand Project.' },
  { k:'Semester IV', v:'Demonstrate brand leadership, career readiness, and capstone-level marketing strategy through Brand Leadership & Retail Management, an internship or capstone project, and a leadership panel review.' },
];

const PO = [
  { k:'PO1 · Marketing Knowledge',   v:'Apply advanced marketing management concepts — brand equity, consumer behaviour, strategy — to complex brand and business problems.' },
  { k:'PO2 · Problem Analysis',       v:'Analyse consumer insights, market research, and campaign data to generate actionable brand and marketing recommendations.' },
  { k:'PO3 · Design & Development',   v:'Design and execute integrated marketing strategies across digital and traditional channels with measurable outcomes.' },
  { k:'PO4 · AI Tool Usage',          v:'Use AI tools for content, insight generation, segmentation, and productivity — responsibly and effectively.' },
  { k:'PO5 · Leadership',             v:'Demonstrate marketing leadership — brand P&L ownership, team leadership, and senior stakeholder communication.' },
  { k:'PO6 · Communication',          v:'Communicate brand strategy, campaign performance, and insights clearly to leadership and non-marketing stakeholders.' },
  { k:'PO7 · Ethics',                 v:'Apply consumer privacy, responsible advertising, truthful brand communication, and responsible AI use in marketing.' },
  { k:'PO8 · Project Management',     v:'Manage campaign planning, budget allocation, timelines, and performance reporting.' },
  { k:'PO9 · Innovation',             v:'Drive brand innovation — launches, brand extensions, growth strategy, and social commerce.' },
  { k:'PO10 · Life-Long Learning',    v:'Engage in lifelong learning in the evolving marketing, AI, and brand management landscape.' },
];

const PSO = [
  { code:'PSO1', v:'Plan and execute integrated marketing strategies — brief to live campaign to performance report — across paid, owned, and earned channels.' },
  { code:'PSO2', v:'Build and manage brand strategy — positioning, brand architecture, equity measurement, and brand P&L accountability.' },
  { code:'PSO3', v:'Use AI tools for marketing — insight generation, campaign optimisation, audience targeting, and personalisation — with appropriate governance.' },
  { code:'PSO4', v:'Analyse marketing data — customer lifetime value, cohort analysis, funnel performance — and present to a marketing leadership team.' },
  { code:'PSO5', v:'Lead marketing and retail teams — briefing creatives, managing vendor relationships, setting OKRs, and presenting strategy to senior management.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable as brand managers, marketing leads, and retail/sales directors across FMCG, retail, and consulting organisations.' },
  { code:'PEO2', v:'Enable data-driven marketing practice — using analytics, AI tools, and campaign measurement to make better brand and media decisions.' },
  { code:'PEO3', v:'Develop marketing leadership capability — brand P&L management, team leadership, and senior stakeholder communication.' },
  { code:'PEO4', v:'Instil professional ethics, responsible AI use in marketing, consumer privacy awareness, and a commitment to honest brand communication.' },
];

export default function MBAMktProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbamktpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbamktpd-inner{max-width:1280px;margin:0 auto}
        .cl-mbamktpd-head{margin-bottom:48px}
        .cl-mbamktpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbamktpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mbamktpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mbamktpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbamktpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbamktpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mbamktpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mbamktpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mbamktpd-tab.active{background:#001F4C;color:#fff}
        .cl-mbamktpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbamktpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbamktpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbamktpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mbamktpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbamktpd-point:last-child{border-bottom:none}
        .cl-mbamktpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbamktpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mbamktpd-tbl{width:100%;border-collapse:collapse}
        .cl-mbamktpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mbamktpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mbamktpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbamktpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbamktpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbamktpd-sec" id="program-details">
        <div className="cl-mbamktpd-inner">
          <div className="cl-mbamktpd-head">
            <span className="cl-mbamktpd-eyebrow">MBA Marketing · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mbamktpd-grid">
            <nav className="cl-mbamktpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mbamktpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbamktpd-content">
              {active==='usps'&&<>
                <div className="cl-mbamktpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mbamktpd-point" key={i}><div className="cl-mbamktpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mbamktpd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mbamktpd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mbamktpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mbamktpd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-mbamktpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-mbamktpd-point" key={i}><div className="cl-mbamktpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-mbamktpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mbamktpd-point" key={i}><div className="cl-mbamktpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
