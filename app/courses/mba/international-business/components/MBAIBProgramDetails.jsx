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
  'Job-ready by Semester II — a real global market research and market-entry project run in Year 1.',
  'Multiple career pathways built in — export-import operations, global trade consulting, or market-entry leadership.',
  'AI Tools for Global Business runs across three semesters, building working fluency with AI-driven trade insight and compliance tools.',
  'International Finance and Financial Accounting for International Business so every recommendation is backed by currency risk analysis and a defensible global P&L.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure global roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — World Trade Institute, export-import bodies, trade compliance, and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live Global Trade Project in Semester III and a global leadership capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO = [
  { k:'Semester I', v:'Apply core management concepts — cross-border strategy, communication, financial analysis, and international trade economics — to global business problems, while building first-level fluency with AI tools for global business.' },
  { k:'Semester II', v:'Integrate international marketing, financial and operations management with business analytics and AI foundations to plan and run a live global market research and market-entry project.' },
  { k:'Semester III', v:'Apply strategic management and digital transformation frameworks within Global Trade Strategy & Cross-Border Finance and a Minor Track, executed through an Industry Live Global Trade Project.' },
  { k:'Semester IV', v:'Demonstrate global leadership, career readiness, and capstone-level international business strategy through a Capstone Global Trade Project, internship, and a leadership panel review.' },
];

const PO = [
  { k:'PO1 · Global Business Knowledge', v:'Apply advanced international business concepts — global trade, cross-border strategy, currency risk, supply chain — to complex global business problems.' },
  { k:'PO2 · Problem Analysis',          v:'Analyse global market research, trade data, and cross-border campaign insights to generate actionable market-entry and business recommendations.' },
  { k:'PO3 · Design & Development',      v:'Design and execute integrated international business strategies across export-import and global supply chain channels with measurable outcomes.' },
  { k:'PO4 · AI Tool Usage',             v:'Use AI tools for trade documentation, market research, compliance automation, and productivity — responsibly and effectively.' },
  { k:'PO5 · Leadership',                v:'Demonstrate global business leadership — cross-border team leadership, international P&L ownership, and senior stakeholder communication.' },
  { k:'PO6 · Communication',             v:'Communicate international strategy, trade performance, and market-entry insights clearly to leadership and non-business stakeholders.' },
  { k:'PO7 · Ethics',                    v:'Apply trade compliance, responsible global business practice, cultural sensitivity, and responsible AI use in international operations.' },
  { k:'PO8 · Project Management',        v:'Manage global trade project planning, budget allocation, timelines, and cross-border performance reporting.' },
  { k:'PO9 · Innovation',                v:'Drive international business innovation — new market entry, product localisation, global supply chain transformation, and trade finance innovation.' },
  { k:'PO10 · Life-Long Learning',       v:'Engage in lifelong learning in the evolving international business, global trade, and AI-driven cross-border commerce landscape.' },
];

const PSO = [
  { code:'PSO1', v:'Plan and execute market-entry strategies — market research brief to live entry campaign to performance report — across export-import and global trade channels.' },
  { code:'PSO2', v:'Manage international finance and currency risk — trade finance, foreign exchange management, international P&L accountability, and cross-border investment analysis.' },
  { code:'PSO3', v:'Use AI tools for global business — trade documentation automation, market research, compliance monitoring, and cross-border logistics optimisation — with appropriate governance.' },
  { code:'PSO4', v:'Analyse global supply chain data — logistics performance, demand forecasting, trade compliance metrics — and present to a senior international business leadership team.' },
  { code:'PSO5', v:'Lead cross-border and international teams — briefing trade partners, managing compliance vendors, setting OKRs for global operations, and presenting strategy to senior management.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable as international business managers, export-import managers, and global trade consultants across manufacturing, logistics, trading houses, and consulting organisations.' },
  { code:'PEO2', v:'Enable data-driven global business practice — using trade analytics, AI tools, and market research to make better cross-border entry and trade decisions.' },
  { code:'PEO3', v:'Develop global leadership capability — international P&L management, cross-border team leadership, and senior stakeholder communication across cultures.' },
  { code:'PEO4', v:'Instil professional ethics, responsible AI use in global business, trade compliance awareness, and a commitment to honest international business practice.' },
];

export default function MBAIBProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaibpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbaibpd-inner{max-width:1280px;margin:0 auto}
        .cl-mbaibpd-head{margin-bottom:48px}
        .cl-mbaibpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbaibpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mbaibpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mbaibpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbaibpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbaibpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mbaibpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mbaibpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mbaibpd-tab.active{background:#001F4C;color:#fff}
        .cl-mbaibpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbaibpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbaibpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbaibpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mbaibpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbaibpd-point:last-child{border-bottom:none}
        .cl-mbaibpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbaibpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mbaibpd-tbl{width:100%;border-collapse:collapse}
        .cl-mbaibpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mbaibpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mbaibpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbaibpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbaibpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbaibpd-sec" id="program-details">
        <div className="cl-mbaibpd-inner">
          <div className="cl-mbaibpd-head">
            <span className="cl-mbaibpd-eyebrow">MBA International Business · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mbaibpd-grid">
            <nav className="cl-mbaibpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mbaibpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbaibpd-content">
              {active==='usps'&&<>
                <div className="cl-mbaibpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mbaibpd-point" key={i}><div className="cl-mbaibpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mbaibpd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mbaibpd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mbaibpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mbaibpd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-mbaibpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-mbaibpd-point" key={i}><div className="cl-mbaibpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-mbaibpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mbaibpd-point" key={i}><div className="cl-mbaibpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
