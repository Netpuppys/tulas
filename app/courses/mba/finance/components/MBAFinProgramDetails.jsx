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
  'Job-ready by Semester II — a real financial modelling and valuation project run in Year 1.',
  'Multiple career pathways built in — corporate finance teams, banking and financial services, or an independent advisory practice.',
  'AI Tools for Finance Professionals runs across three semesters, building working fluency with AI-driven modelling and risk tools.',
  'Business Analytics for Finance and advanced Financial Accounting so every recommendation is backed by data and defensible to a CFO.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure finance roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — NSE Academy, Bloomberg Market Concepts, CFA Institute Investment Foundations and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live Finance Project in Semester III and a capital-markets capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO = [
  { k:'Semester I', v:'Apply core management concepts — strategy, communication, financial accounting, and business economics — to capital-facing problems, while building first-level fluency with AI tools for finance.' },
  { k:'Semester II', v:'Integrate finance, marketing and operations management with business analytics and AI foundations to plan and run a live valuation project.' },
  { k:'Semester III', v:'Apply strategic management and digital transformation frameworks within Corporate Finance & Investment Strategy and a Minor Track, executed through an Industry Live Finance Project.' },
  { k:'Semester IV', v:'Demonstrate financial leadership, career readiness, and capstone-level capital markets strategy through Financial Risk & Capital Markets Leadership, an internship or capstone project, and a leadership panel review.' },
];

const PO = [
  { k:'PO1 · Financial Knowledge',  v:'Apply advanced financial management concepts — valuation, capital structure, risk — to complex business problems.' },
  { k:'PO2 · Problem Analysis',     v:'Analyse financial statements, market data, and risk indicators to generate actionable investment and financing recommendations.' },
  { k:'PO3 · Design & Development', v:'Design and execute financial models and capital allocation strategies with measurable outcomes.' },
  { k:'PO4 · AI Tool Usage',        v:'Use AI tools for modelling, risk scoring, and financial productivity — responsibly and effectively.' },
  { k:'PO5 · Leadership',           v:'Demonstrate financial leadership — P&L ownership, treasury management, and senior stakeholder communication.' },
  { k:'PO6 · Communication',        v:'Communicate financial strategy, portfolio performance, and risk insights clearly to leadership, investors, and auditors.' },
  { k:'PO7 · Ethics',               v:'Apply regulatory compliance, fiduciary responsibility, and responsible AI use in financial decision-making.' },
  { k:'PO8 · Project Management',   v:'Manage financial planning, budget allocation, timelines, and reporting cycles.' },
  { k:'PO9 · Innovation',           v:'Drive financial innovation — FinTech adoption, new financing structures, and digital banking strategy.' },
  { k:'PO10 · Life-Long Learning',  v:'Engage in lifelong learning in the evolving finance, regulatory, and AI landscape.' },
];

const PSO = [
  { code:'PSO1', v:'Build and interpret financial models — valuation, capital budgeting, and forecasting — for real business decisions.' },
  { code:'PSO2', v:'Manage financial risk — market, credit, and operational risk — using appropriate frameworks and tools.' },
  { code:'PSO3', v:'Use AI tools for finance — automated modelling, risk scoring, and market sentiment analysis — with appropriate governance.' },
  { code:'PSO4', v:'Analyse capital markets data — equities, debt, and derivatives — and present investment recommendations to a leadership team.' },
  { code:'PSO5', v:'Lead finance teams and stakeholder relationships — briefing investors, managing banking relationships, and presenting strategy to senior management.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable as financial analysts, finance managers, and investment leads across banking, corporate finance, and consulting organisations.' },
  { code:'PEO2', v:'Enable data-driven financial practice — using analytics, AI tools, and risk measurement to make better capital allocation decisions.' },
  { code:'PEO3', v:'Develop financial leadership capability — P&L management, treasury relationships, and C-suite communication.' },
  { code:'PEO4', v:'Instil professional ethics, regulatory compliance, responsible AI use in finance, and a commitment to fiduciary responsibility.' },
];

export default function MBAFinProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbafinpd-inner{max-width:1280px;margin:0 auto}
        .cl-mbafinpd-head{margin-bottom:48px}
        .cl-mbafinpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbafinpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mbafinpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mbafinpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbafinpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbafinpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mbafinpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mbafinpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mbafinpd-tab.active{background:#001F4C;color:#fff}
        .cl-mbafinpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbafinpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbafinpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbafinpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mbafinpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbafinpd-point:last-child{border-bottom:none}
        .cl-mbafinpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbafinpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mbafinpd-tbl{width:100%;border-collapse:collapse}
        .cl-mbafinpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mbafinpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mbafinpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbafinpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbafinpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbafinpd-sec" id="program-details">
        <div className="cl-mbafinpd-inner">
          <div className="cl-mbafinpd-head">
            <span className="cl-mbafinpd-eyebrow">MBA Finance · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mbafinpd-grid">
            <nav className="cl-mbafinpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mbafinpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbafinpd-content">
              {active==='usps'&&<>
                <div className="cl-mbafinpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mbafinpd-point" key={i}><div className="cl-mbafinpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mbafinpd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mbafinpd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mbafinpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mbafinpd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-mbafinpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-mbafinpd-point" key={i}><div className="cl-mbafinpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-mbafinpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mbafinpd-point" key={i}><div className="cl-mbafinpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
