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
  'Hub of excellence in Electronics & Communication Engineering since 2006 — over 18 years of academic and research leadership.',
  'Outstanding teaching faculty combined with advanced laboratories for VLSI, Embedded Systems, Microwave Engineering, and Antenna research.',
  'Curriculum built around the technologies shaping the connected world — 5G, 6G, VoIP, IoT, and Robotics.',
  'Practical, project-based learning approach with real hardware, simulation tools, and industry-grade development environments.',
  'Research-driven environment with opportunities to contribute to cutting-edge ECE projects and publications.',
  'Strong career pathways in Telecom, Automation, Embedded Systems, and Semiconductor sectors.',
  'A certification stack — Cisco CCNA, ARM Embedded, and FPGA/VLSI — building industry-ready skills recognised by top recruiters.',
  'Association with IIT Kanpur E&ICT Academy adding national credibility and elite technical training to your B.Tech degree.',
  'Outstanding placement record with 100% placement assistance and 750+ recruiting companies across ECE domains.',
];

const CO = [
  { k:'Year 1', v:'Apply circuit theory, semiconductor physics, and engineering fundamentals to basic electronic design problems.' },
  { k:'Year 2', v:'Apply digital logic design, microprocessors, microcontrollers, and analog-digital communication knowledge to core ECE tasks.' },
  { k:'Year 3', v:'Apply microwave engineering, antenna theory, and embedded systems principles through live industry projects and internships.' },
  { k:'Year 4', v:'Design and evaluate 5G/IoT/VLSI solutions and complete a capstone project demonstrating professional readiness in ECE.' },
];

const PO = [
  { k:'PO1 · Engineering Knowledge',        v:'Apply knowledge of mathematics, science, and ECE fundamentals to the solution of complex engineering problems.' },
  { k:'PO2 · Problem Analysis',             v:'Identify, formulate, and analyse complex ECE problems using first principles of mathematics, natural sciences, and engineering sciences.' },
  { k:'PO3 · Design/Development',           v:'Design circuits, systems, or processes that meet specified needs with appropriate consideration for public health, safety, and the environment.' },
  { k:'PO4 · Investigations',               v:'Use research-based knowledge and methods, including design of experiments and analysis of data, to provide valid conclusions.' },
  { k:'PO5 · Modern Tool Usage',            v:'Create, select, and apply appropriate techniques and modern ECE tools, including MATLAB, VLSI EDA, and simulation environments.' },
  { k:'PO6 · Engineer & Society',           v:'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to ECE practice.' },
  { k:'PO7 · Environment & Sustainability', v:'Understand the impact of ECE solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.' },
  { k:'PO8 · Ethics',                       v:'Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.' },
  { k:'PO9 · Individual & Team Work',       v:'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
  { k:'PO10 · Communication',               v:'Communicate effectively on complex engineering activities, including preparing reports, documentation, and giving clear presentations.' },
  { k:'PO11 · Project Management & Finance',v:'Demonstrate knowledge and understanding of engineering and management principles, and apply these to manage projects in multidisciplinary environments.' },
  { k:'PO12 · Life-Long Learning',          v:'Recognise the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.' },
];

const PSO = [
  { code:'PSO1', v:'Design electronic circuits, embedded systems, and VLSI circuits for a variety of real-world engineering applications.' },
  { code:'PSO2', v:'Apply analog & digital communication, microwave engineering, and antenna design principles to modern communication systems.' },
  { code:'PSO3', v:'Develop solutions using IoT, 5G/6G networks, robotics, and AI-assisted signal processing for connected intelligent systems.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable in Telecom, Embedded Systems, Semiconductor, and Automation industries across India and globally.' },
  { code:'PEO2', v:'Enable innovation in 5G, IoT, and VLSI — empowering graduates to lead the development of next-generation products and systems.' },
  { code:'PEO3', v:'Develop professional ethics, effective teamwork, and excellent communication skills for multidisciplinary engineering environments.' },
  { code:'PEO4', v:'Prepare graduates for higher studies, research, and lifelong professional development in a rapidly evolving technology landscape.' },
];

export default function BTechECEProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechecepd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btechecepd-inner{max-width:1280px;margin:0 auto}
        .cl-btechecepd-head{margin-bottom:48px}
        .cl-btechecepd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-btechecepd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-btechecepd-head h2 em{font-style:normal;color:#DF5400}
        .cl-btechecepd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-btechecepd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-btechecepd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-btechecepd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-btechecepd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-btechecepd-tab.active{background:#001F4C;color:#fff}
        .cl-btechecepd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-btechecepd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-btechecepd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-btechecepd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-btechecepd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-btechecepd-point:last-child{border-bottom:none}
        .cl-btechecepd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-btechecepd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-btechecepd-tbl{width:100%;border-collapse:collapse}
        .cl-btechecepd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-btechecepd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btechecepd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-btechecepd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-btechecepd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-btechecepd-sec" id="program-details">
        <div className="cl-btechecepd-inner">
          <div className="cl-btechecepd-head">
            <span className="cl-btechecepd-eyebrow">B.Tech Electronics &amp; Communication Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-btechecepd-grid">
            <nav className="cl-btechecepd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-btechecepd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-btechecepd-content">
              {active==='usps'&&<>
                <div className="cl-btechecepd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-btechecepd-point" key={i}><div className="cl-btechecepd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-btechecepd-ch"><div className="lbl">Year-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-btechecepd-tbl"><thead><tr><th>Year</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-btechecepd-ch"><div className="lbl">Programme Outcomes (NBA Graduate Attributes)</div><h3>Program Outcomes</h3></div>
                <table className="cl-btechecepd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-btechecepd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-btechecepd-point" key={i}><div className="cl-btechecepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-btechecepd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-btechecepd-point" key={i}><div className="cl-btechecepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
