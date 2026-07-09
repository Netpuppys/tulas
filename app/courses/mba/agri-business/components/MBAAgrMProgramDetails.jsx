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
  'Job-ready by Semester II — a real farm-to-market research and agri-market project run in Year 1.',
  'Multiple career pathways built in — agribusiness corporates, agri supply chain operations, or rural development leadership roles.',
  'AI Tools for Agri-Business runs across three semesters, building working fluency with AI-driven yield forecasting and market analytics tools.',
  'Agri Finance and advanced Financial Accounting so every agribusiness decision is backed by data and defensible to leadership.',
  'A dedicated NEP 2020 Life Skills & Professional Wellness course addressing burnout in high-pressure agribusiness roles and civic responsibility for business leaders.',
  'AI-native learning through LEAP, a platform that personalises your path and tracks progress continuously.',
  'A certification stack — agri finance foundations, agricultural economics essentials, agribusiness value-chain coursework and IIT Kanpur E&ICT Academy — prepared for within regular coursework.',
  'An Industry Live Agri-Business Project in Semester III and a rural leadership capstone in the final semester.',
  'Dedicated placement support across the final year of the programme.',
];

const CO = [
  { k:'Semester I',   v:'Apply core management concepts — strategy, communication, financial analysis, and business economics — to agri-business problems, while building first-level fluency with AI tools for agriculture.' },
  { k:'Semester II',  v:'Integrate agricultural economics, marketing and operations management with agri analytics and AI foundations to plan and run a live agri-market project.' },
  { k:'Semester III', v:'Apply strategic management and digital transformation frameworks within Agricultural Economics & Agribusiness Strategy and a Minor Track, executed through an Industry Live Agri-Business Project.' },
  { k:'Semester IV',  v:'Demonstrate rural leadership, career readiness, and capstone-level agribusiness strategy through Agri Supply Chain & Rural Market Leadership, an internship or capstone project, and a leadership panel review.' },
];

const PO = [
  { k:'PO1 · Agri-Business Knowledge', v:'Apply advanced agribusiness management concepts — agricultural economics, value chains, rural markets — to complex agri-business problems.' },
  { k:'PO2 · Problem Analysis',         v:'Analyse agri-market data, crop economics, and rural consumer insights to generate actionable agribusiness recommendations.' },
  { k:'PO3 · Design & Development',     v:'Design and execute agri supply chain and rural marketing strategies with measurable outcomes.' },
  { k:'PO4 · AI Tool Usage',            v:'Use AI tools for yield forecasting, market analytics, and agribusiness productivity — responsibly and effectively.' },
  { k:'PO5 · Leadership',               v:'Demonstrate agribusiness leadership — value-chain ownership, team leadership, and senior stakeholder communication.' },
  { k:'PO6 · Communication',            v:'Communicate agribusiness strategy, value-chain performance, and market insights clearly to leadership and rural stakeholders.' },
  { k:'PO7 · Ethics',                   v:'Apply sustainable agriculture practices, fair-trade principles, and responsible AI use in agribusiness decision-making.' },
  { k:'PO8 · Project Management',       v:'Manage agribusiness project planning, budget allocation, timelines, and reporting cycles.' },
  { k:'PO9 · Innovation',               v:'Drive agribusiness innovation — agri-tech adoption, precision agriculture, and rural market growth strategy.' },
  { k:'PO10 · Life-Long Learning',      v:'Engage in lifelong learning in the evolving agribusiness, agri-tech, and AI landscape.' },
];

const PSO = [
  { code:'PSO1', v:'Design and execute agri supply chain and rural marketing strategies for real agribusiness needs.' },
  { code:'PSO2', v:'Apply agricultural economics and agri finance concepts to farm-to-market business decisions.' },
  { code:'PSO3', v:'Use AI tools for agribusiness — yield forecasting, market analytics, and precision agriculture — with appropriate governance.' },
  { code:'PSO4', v:'Analyse agri-market and value-chain data and present recommendations to a leadership team.' },
  { code:'PSO5', v:'Lead agribusiness teams and rural stakeholder relationships — managing farmer partnerships and presenting strategy to senior management.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable as agribusiness managers, agri supply chain leads, and rural development managers across agribusiness corporates and cooperatives.' },
  { code:'PEO2', v:'Enable data-driven agribusiness practice — using agri analytics, AI tools, and market measurement to make better agribusiness decisions.' },
  { code:'PEO3', v:'Develop agribusiness leadership capability — value-chain management, rural stakeholder relationships, and senior communication.' },
  { code:'PEO4', v:'Instil professional ethics, sustainable agriculture practices, responsible AI use, and a commitment to rural community welfare.' },
];

export default function MBAAgrMProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-pd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbaagrm-pd-inner{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-pd-head{margin-bottom:48px}
        .cl-mbaagrm-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mbaagrm-pd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mbaagrm-pd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mbaagrm-pd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mbaagrm-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mbaagrm-pd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mbaagrm-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mbaagrm-pd-tab.active{background:#001F4C;color:#fff}
        .cl-mbaagrm-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mbaagrm-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mbaagrm-pd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mbaagrm-pd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mbaagrm-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mbaagrm-pd-point:last-child{border-bottom:none}
        .cl-mbaagrm-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mbaagrm-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mbaagrm-pd-tbl{width:100%;border-collapse:collapse}
        .cl-mbaagrm-pd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mbaagrm-pd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mbaagrm-pd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mbaagrm-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mbaagrm-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mbaagrm-pd-sec" id="program-details">
        <div className="cl-mbaagrm-pd-inner">
          <div className="cl-mbaagrm-pd-head">
            <span className="cl-mbaagrm-pd-eyebrow">MBA Agri-Business · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mbaagrm-pd-grid">
            <nav className="cl-mbaagrm-pd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mbaagrm-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mbaagrm-pd-content">
              {active==='usps'&&<><div className="cl-mbaagrm-pd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>{USPS.map((u,i)=><div className="cl-mbaagrm-pd-point" key={i}><div className="cl-mbaagrm-pd-dot"/><p>{u}</p></div>)}</>}
              {active==='co'&&<><div className="cl-mbaagrm-pd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div><table className="cl-mbaagrm-pd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table></>}
              {active==='po'&&<><div className="cl-mbaagrm-pd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div><table className="cl-mbaagrm-pd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table></>}
              {active==='pso'&&<><div className="cl-mbaagrm-pd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>{PSO.map((r,i)=><div className="cl-mbaagrm-pd-point" key={i}><div className="cl-mbaagrm-pd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}</>}
              {active==='peo'&&<><div className="cl-mbaagrm-pd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>{PEO.map((r,i)=><div className="cl-mbaagrm-pd-point" key={i}><div className="cl-mbaagrm-pd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}</>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
