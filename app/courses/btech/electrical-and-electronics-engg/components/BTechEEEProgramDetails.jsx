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
  'Committed to academic excellence, research, and innovation since the department\'s establishment in 2006.',
  'Comprehensive coverage of Power Systems, Power Electronics, Automation, VLSI, Control Systems, EVs, Renewable Energy, and Smart Grids.',
  'Strong emphasis on sustainability and energy efficiency — preparing engineers for a clean and green energy future.',
  'State-of-the-art laboratories, research facilities, and industry collaborations across power and energy sectors.',
  'Hands-on experience in modern electrical systems, automation technologies, and emerging energy solutions.',
  'Career pathways into power generation, renewable energy, industrial automation, smart grids, and electric mobility.',
  'A certification stack — Siemens Automation, Schneider Electric Power Systems, and PLC/SCADA — building industry-ready technical skills.',
  'Association with IIT Kanpur E&ICT Academy adding national credibility to the degree.',
  'Focus on developing responsible engineers capable of addressing global energy challenges sustainably.',
];

const CO = [
  { k:'Year 1', v:'Apply circuit theory, electromagnetic fields, and foundational electrical engineering concepts to basic design problems.' },
  { k:'Year 2', v:'Apply electrical machines, power systems analysis, and control systems knowledge to electrical design tasks.' },
  { k:'Year 3', v:'Apply power electronics, automation, and renewable energy principles to real engineering problems, supported by live projects and industry collaboration.' },
  { k:'Year 4', v:'Design and evaluate specialised solutions in Smart Grids, EVs, or VLSI, and complete a capstone/major project demonstrating professional readiness.' },
];

const PO = [
  { k:'PO1 · Engineering Knowledge',          v:'Apply knowledge of mathematics, science, and engineering fundamentals to the solution of complex engineering problems.' },
  { k:'PO2 · Problem Analysis',               v:'Identify, formulate, and analyse complex engineering problems using first principles of mathematics, natural sciences, and engineering sciences.' },
  { k:'PO3 · Design/Development of Solutions',v:'Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health, safety, and the environment.' },
  { k:'PO4 · Investigations',                 v:'Use research-based knowledge and research methods, including design of experiments, analysis and interpretation of data, to provide valid conclusions.' },
  { k:'PO5 · Modern Tool Usage',              v:'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering activities.' },
  { k:'PO6 · The Engineer & Society',         v:'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to professional engineering practice.' },
  { k:'PO7 · Environment & Sustainability',   v:'Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.' },
  { k:'PO8 · Ethics',                         v:'Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.' },
  { k:'PO9 · Individual & Team Work',         v:'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
  { k:'PO10 · Communication',                 v:'Communicate effectively on complex engineering activities, including preparing reports, documentation, and giving clear presentations.' },
  { k:'PO11 · Project Management & Finance',  v:'Demonstrate knowledge and understanding of engineering and management principles, and apply these to manage projects in multidisciplinary environments.' },
  { k:'PO12 · Life-Long Learning',            v:'Recognise the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.' },
];

const PSO = [
  { code:'PSO1', v:'Design and analyse power systems, electrical machines, and power electronic converters using modern simulation and design tools.' },
  { code:'PSO2', v:'Apply control systems, automation, and VLSI design principles to industrial and embedded electrical applications.' },
  { code:'PSO3', v:'Develop renewable energy, smart grid, and electric vehicle solutions for sustainable and efficient energy systems.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable in power generation, renewable energy, automation, and electric mobility industries.' },
  { code:'PEO2', v:'Enable innovation in smart grids, electric vehicles, and sustainable energy systems.' },
  { code:'PEO3', v:'Develop professional ethics, teamwork, and communication skills for multidisciplinary energy and automation environments.' },
  { code:'PEO4', v:'Prepare graduates for higher studies, research, and lifelong learning in evolving electrical engineering practice.' },
];

export default function BTechEEEProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeepd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btecheeepd-inner{max-width:1280px;margin:0 auto}
        .cl-btecheeepd-head{margin-bottom:48px}
        .cl-btecheeepd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-btecheeepd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-btecheeepd-head h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeepd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-btecheeepd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-btecheeepd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-btecheeepd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-btecheeepd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-btecheeepd-tab.active{background:#001F4C;color:#fff}
        .cl-btecheeepd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-btecheeepd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-btecheeepd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-btecheeepd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-btecheeepd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-btecheeepd-point:last-child{border-bottom:none}
        .cl-btecheeepd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-btecheeepd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-btecheeepd-tbl{width:100%;border-collapse:collapse}
        .cl-btecheeepd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-btecheeepd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btecheeepd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-btecheeepd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-btecheeepd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-btecheeepd-sec" id="program-details">
        <div className="cl-btecheeepd-inner">
          <div className="cl-btecheeepd-head">
            <span className="cl-btecheeepd-eyebrow">B.Tech Electrical &amp; Electronics Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-btecheeepd-grid">
            <nav className="cl-btecheeepd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-btecheeepd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-btecheeepd-content">
              {active==='usps'&&<>
                <div className="cl-btecheeepd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-btecheeepd-point" key={i}><div className="cl-btecheeepd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-btecheeepd-ch"><div className="lbl">Year-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-btecheeepd-tbl"><thead><tr><th>Year</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-btecheeepd-ch"><div className="lbl">Programme Outcomes (NBA Graduate Attributes)</div><h3>Program Outcomes</h3></div>
                <table className="cl-btecheeepd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-btecheeepd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-btecheeepd-point" key={i}><div className="cl-btecheeepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-btecheeepd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-btecheeepd-point" key={i}><div className="cl-btecheeepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
