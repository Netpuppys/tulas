'use client';
import { useState } from 'react';

const USPS = [
  'Job-ready by Semester II — a real business statistics and analytics project run in Year 1.',
  'Multiple career pathways built in — analytics teams, business intelligence consulting, or a data strategy leadership track.',
  'AI Tools for Business Analysts runs across three semesters, building working fluency with AI-driven modelling and visualisation tools.',
  'Business Analytics and advanced Financial Accounting so every recommendation is backed by data and defensible to leadership.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure analytics roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — Google Data Analytics, Microsoft Power BI, Tableau, IBM Data Science and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live Analytics Project in Semester III and a data strategy capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO_ROWS = [
  { sem:'Semester I',   outcome:'Apply core management concepts — strategy, communication, financial analysis, and business economics — to data-facing problems, while building first-level fluency with AI tools for analytics.' },
  { sem:'Semester II',  outcome:'Integrate analytics, marketing and operations management with business statistics and AI foundations to plan and run a live analytics project.' },
  { sem:'Semester III', outcome:'Apply strategic management and digital transformation frameworks within Predictive Analytics & Business Intelligence and a Minor Track, executed through an Industry Live Analytics Project.' },
  { sem:'Semester IV',  outcome:'Demonstrate data leadership, career readiness, and capstone-level analytics strategy through Advanced Data Strategy & AI-Driven Decision Making, an internship or capstone project, and a leadership panel review.' },
];

const PO_ROWS = [
  { po:'PO1 · Analytical Knowledge', outcome:'Apply advanced statistical and analytical concepts — predictive modelling, data visualization, business intelligence — to complex business problems.' },
  { po:'PO2 · Problem Analysis',     outcome:'Analyse business data, model outputs, and market signals to generate actionable strategic recommendations.' },
  { po:'PO3 · Design & Development', outcome:'Design and execute analytics solutions and dashboards with measurable business outcomes.' },
  { po:'PO4 · AI Tool Usage',        outcome:'Use AI tools for modelling, forecasting, and analytics productivity — responsibly and effectively.' },
  { po:'PO5 · Leadership',           outcome:'Demonstrate analytics leadership — data governance, team leadership, and senior stakeholder communication.' },
  { po:'PO6 · Communication',        outcome:'Communicate analytical findings, model performance, and business insights clearly to non-technical stakeholders.' },
  { po:'PO7 · Ethics',               outcome:'Apply data privacy, responsible AI use, and ethical data governance in analytics practice.' },
  { po:'PO8 · Project Management',   outcome:'Manage analytics project planning, data pipelines, timelines, and reporting cycles.' },
  { po:'PO9 · Innovation',           outcome:'Drive analytics innovation — new modelling techniques, automation, and AI-driven decision systems.' },
  { po:'PO10 · Life-Long Learning',  outcome:'Engage in lifelong learning in the evolving analytics, data science, and AI landscape.' },
];

const PSO_ITEMS = [
  { id:'PSO1', text:'Build and interpret predictive models and dashboards for real business decisions across functions.' },
  { id:'PSO2', text:'Apply statistical methods and machine learning concepts to business datasets for actionable insight.' },
  { id:'PSO3', text:'Use AI tools for analytics — automated modelling, natural language querying, and decision intelligence — with appropriate governance.' },
  { id:'PSO4', text:'Analyse cross-functional business data — marketing, financial, and operational — and present recommendations to a leadership team.' },
  { id:'PSO5', text:'Lead analytics teams and stakeholder relationships — translating data into strategy for senior management.' },
];

const PEO_ITEMS = [
  { id:'PEO1', text:'Produce graduates employable as business analysts, analytics managers, and data strategy leads across technology, consulting, and financial services organisations.' },
  { id:'PEO2', text:'Enable data-driven managerial practice — using analytics, AI tools, and predictive modelling to make better business decisions.' },
  { id:'PEO3', text:'Develop analytics leadership capability — data governance, team leadership, and senior stakeholder communication.' },
  { id:'PEO4', text:'Instil professional ethics, data privacy awareness, responsible AI use, and a commitment to honest analytical reporting.' },
];

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

export default function MBABAProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabapd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbabapd-wrap{max-width:1280px;margin:0 auto}
        .cl-mbabapd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbabapd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92;margin-bottom:48px}
        .cl-mbabapd-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabapd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbabapd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbabapd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;font-family:inherit;transition:background .2s,color .2s}
        .cl-mbabapd-tab:hover{background:#e8ecf4}
        .cl-mbabapd-tab.active{background:#001F4C;color:#fff}
        .cl-mbabapd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0}
        .cl-mbabapd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbabapd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbabapd-ch-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbabapd-ch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px}
        .cl-mbabapd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbabapd-point:last-child{border-bottom:none}
        .cl-mbabapd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbabapd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a}
        table.cl-mbabapd-tbl{width:100%;border-collapse:collapse}
        table.cl-mbabapd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        table.cl-mbabapd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        table.cl-mbabapd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbabapd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbabapd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbabapd-sec" id="program-details">
        <div className="cl-mbabapd-wrap">
          <div className="cl-mbabapd-eyebrow">MBA Business Analytics · Academic Framework</div>
          <h2 className="cl-mbabapd-h2">Program <em>Details</em></h2>
          <div className="cl-mbabapd-grid">
            <nav className="cl-mbabapd-nav">
              {TABS.map((tab,i)=>(
                <button key={tab.id} className={`cl-mbabapd-tab${active===tab.id?' active':''}`} onClick={()=>setActive(tab.id)}>
                  <span className="num">0{i+1}</span>{tab.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbabapd-content">
              {active==='usps'&&(<>
                <div className="cl-mbabapd-ch-lbl">Unique Selling Points</div>
                <div className="cl-mbabapd-ch-h3">USPs</div>
                <div>{USPS.map((u,i)=>(<div key={i} className="cl-mbabapd-point"><div className="cl-mbabapd-dot"/><p>{u}</p></div>))}</div>
              </>)}
              {active==='co'&&(<>
                <div className="cl-mbabapd-ch-lbl">Semester-Wise Course Outcomes</div>
                <div className="cl-mbabapd-ch-h3">Course Outcomes</div>
                <table className="cl-mbabapd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead>
                  <tbody>{CO_ROWS.map(r=>(<tr key={r.sem}><td className="k">{r.sem}</td><td>{r.outcome}</td></tr>))}</tbody></table>
              </>)}
              {active==='po'&&(<>
                <div className="cl-mbabapd-ch-lbl">Programme Outcomes</div>
                <div className="cl-mbabapd-ch-h3">Program Outcomes</div>
                <table className="cl-mbabapd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead>
                  <tbody>{PO_ROWS.map(r=>(<tr key={r.po}><td className="k">{r.po}</td><td>{r.outcome}</td></tr>))}</tbody></table>
              </>)}
              {active==='pso'&&(<>
                <div className="cl-mbabapd-ch-lbl">Programme Specific Outcomes</div>
                <div className="cl-mbabapd-ch-h3">Program Specific Outcomes</div>
                <div>{PSO_ITEMS.map(item=>(<div key={item.id} className="cl-mbabapd-point"><div className="cl-mbabapd-dot"/><p><strong style={{color:'#001F4C'}}>{item.id}</strong> — {item.text}</p></div>))}</div>
              </>)}
              {active==='peo'&&(<>
                <div className="cl-mbabapd-ch-lbl">Programme Educational Objectives</div>
                <div className="cl-mbabapd-ch-h3">Program Educational Objectives</div>
                <div>{PEO_ITEMS.map(item=>(<div key={item.id} className="cl-mbabapd-point"><div className="cl-mbabapd-dot"/><p><strong style={{color:'#001F4C'}}>{item.id}</strong> — {item.text}</p></div>))}</div>
              </>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
