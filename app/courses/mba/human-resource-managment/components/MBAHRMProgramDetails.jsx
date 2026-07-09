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
  'Job-ready by Semester II — a real organisational diagnosis and talent audit project run in Year 1.',
  'Multiple career pathways built in — HR business partner roles, talent acquisition leadership, or an independent HR consulting practice.',
  'AI Tools for HR Professionals runs across three semesters, building working fluency with AI-driven recruitment and people-analytics tools.',
  'HR Analytics and advanced Financial Accounting so every people decision is backed by data and defensible to leadership.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure HR roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — SHRM, LinkedIn Learning People Analytics, HRCI and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live HR Project in Semester III and an HR leadership capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO = [
  { k:'Semester I', v:'Apply core management concepts — strategy, communication, financial analysis, and business economics — to people-facing problems, while building first-level fluency with AI tools for HR.' },
  { k:'Semester II', v:'Integrate HR, marketing and operations management with people analytics and AI foundations to plan and run a live talent audit project.' },
  { k:'Semester III', v:'Apply strategic management and digital transformation frameworks within Talent Management & Organisational Behaviour and a Minor Track, executed through an Industry Live HR Project.' },
  { k:'Semester IV', v:'Demonstrate HR leadership, career readiness, and capstone-level people strategy through HR Analytics & Strategic HR Leadership, an internship or capstone project, and a leadership panel review.' },
];

const PO = [
  { k:'PO1 · HR Knowledge',      v:'Apply advanced HR management concepts — talent strategy, organisational behaviour, compensation — to complex people problems.' },
  { k:'PO2 · Problem Analysis',  v:'Analyse workforce data, engagement metrics, and attrition trends to generate actionable HR recommendations.' },
  { k:'PO3 · Design & Development', v:'Design and execute talent management and organisational development strategies with measurable outcomes.' },
  { k:'PO4 · AI Tool Usage',     v:'Use AI tools for recruitment, people analytics, and HR productivity — responsibly and effectively.' },
  { k:'PO5 · Leadership',        v:'Demonstrate HR leadership — talent strategy ownership, team leadership, and senior stakeholder communication.' },
  { k:'PO6 · Communication',     v:'Communicate HR strategy, workforce performance, and people insights clearly to leadership and employees.' },
  { k:'PO7 · Ethics',            v:'Apply labour law compliance, fair employment practices, and responsible AI use in HR decision-making.' },
  { k:'PO8 · Project Management',v:'Manage HR project planning, budget allocation, timelines, and reporting cycles.' },
  { k:'PO9 · Innovation',        v:'Drive HR innovation — future-of-work practices, HR technology adoption, and employee experience design.' },
  { k:'PO10 · Life-Long Learning',v:'Engage in lifelong learning in the evolving HR, labour law, and AI landscape.' },
];

const PSO = [
  { code:'PSO1', v:'Design and execute talent acquisition and organisational development strategies for real business needs.' },
  { code:'PSO2', v:'Apply HR analytics — attrition modelling, engagement measurement, workforce planning — to people decisions.' },
  { code:'PSO3', v:'Use AI tools for HR — automated screening, sentiment analysis, and predictive attrition modelling — with appropriate governance.' },
  { code:'PSO4', v:'Analyse workforce and compensation data and present recommendations to a leadership team.' },
  { code:'PSO5', v:'Lead HR teams and stakeholder relationships — managing employee relations, vendor partnerships, and presenting strategy to senior management.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable as HR business partners, talent acquisition leads, and HR managers across industry, consulting, and technology organisations.' },
  { code:'PEO2', v:'Enable data-driven HR practice — using people analytics, AI tools, and workforce measurement to make better talent decisions.' },
  { code:'PEO3', v:'Develop HR leadership capability — talent strategy ownership, employee relations, and C-suite communication.' },
  { code:'PEO4', v:'Instil professional ethics, labour law compliance, responsible AI use in HR, and a commitment to fair employment practice.' },
];

export default function MBAHRMProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbahrmpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbahrmpd-inner{max-width:1280px;margin:0 auto}
        .cl-mbahrmpd-head{margin-bottom:48px}
        .cl-mbahrmpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbahrmpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mbahrmpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mbahrmpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbahrmpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbahrmpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mbahrmpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mbahrmpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mbahrmpd-tab.active{background:#001F4C;color:#fff}
        .cl-mbahrmpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbahrmpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbahrmpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbahrmpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mbahrmpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbahrmpd-point:last-child{border-bottom:none}
        .cl-mbahrmpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbahrmpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mbahrmpd-tbl{width:100%;border-collapse:collapse}
        .cl-mbahrmpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mbahrmpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mbahrmpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbahrmpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbahrmpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbahrmpd-sec" id="program-details">
        <div className="cl-mbahrmpd-inner">
          <div className="cl-mbahrmpd-head">
            <span className="cl-mbahrmpd-eyebrow">MBA HRM · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mbahrmpd-grid">
            <nav className="cl-mbahrmpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mbahrmpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbahrmpd-content">
              {active==='usps'&&<>
                <div className="cl-mbahrmpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mbahrmpd-point" key={i}><div className="cl-mbahrmpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mbahrmpd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mbahrmpd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mbahrmpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mbahrmpd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-mbahrmpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-mbahrmpd-point" key={i}><div className="cl-mbahrmpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-mbahrmpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mbahrmpd-point" key={i}><div className="cl-mbahrmpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
