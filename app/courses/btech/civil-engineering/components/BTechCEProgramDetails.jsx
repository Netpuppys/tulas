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
  'Comprehensive B.Tech curriculum covering structural, geotechnical, environmental, and transportation engineering.',
  'Hands-on practical learning through advanced laboratories, industrial visits, and live projects.',
  'Strong emphasis on sustainability, eco-friendly construction, and smart city solutions.',
  'Interdisciplinary learning approach developing problem-solving skills and technical expertise.',
  'Expert mentorship connecting classroom learning to real infrastructure challenges.',
  'Graduate pathways into government sectors, private construction firms, urban planning agencies, and international infrastructure projects.',
  'A certification stack — AutoCAD/Revit, STAAD.Pro, and Primavera — building industry-ready software skills.',
  'Association with IIT Kanpur E&ICT Academy adding national credibility to the degree.',
  'Strong foundation for higher studies or research in civil engineering disciplines.',
];

const CO = [
  { k:'Year 1', v:'Apply engineering mathematics, mechanics, and foundational civil engineering concepts to basic design problems.' },
  { k:'Year 2', v:'Apply structural analysis, surveying, and building materials knowledge to structural design tasks.' },
  { k:'Year 3', v:'Apply geotechnical, transportation, and environmental engineering principles to real infrastructure problems, supported by live projects and industrial visits.' },
  { k:'Year 4', v:'Design and evaluate sustainable, smart infrastructure solutions and complete a capstone/major project demonstrating professional readiness.' },
];

const PO = [
  { k:'PO1 · Engineering Knowledge',        v:'Apply knowledge of mathematics, science, and engineering fundamentals to the solution of complex engineering problems.' },
  { k:'PO2 · Problem Analysis',             v:'Identify, formulate, and analyse complex engineering problems using first principles of mathematics, natural sciences, and engineering sciences.' },
  { k:'PO3 · Design/Development',           v:'Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health, safety, and the environment.' },
  { k:'PO4 · Investigations',               v:'Use research-based knowledge and research methods, including design of experiments, analysis and interpretation of data, to provide valid conclusions.' },
  { k:'PO5 · Modern Tool Usage',            v:'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering activities.' },
  { k:'PO6 · Engineer & Society',           v:'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to professional engineering practice.' },
  { k:'PO7 · Environment & Sustainability', v:'Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.' },
  { k:'PO8 · Ethics',                       v:'Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.' },
  { k:'PO9 · Individual & Team Work',       v:'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
  { k:'PO10 · Communication',               v:'Communicate effectively on complex engineering activities, including preparing reports, documentation, and giving clear presentations.' },
  { k:'PO11 · Project Management & Finance',v:'Demonstrate knowledge and understanding of engineering and management principles, and apply these to manage projects in multidisciplinary environments.' },
  { k:'PO12 · Life-Long Learning',          v:'Recognise the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.' },
];

const PSO = [
  { code:'PSO1', v:'Analyse, design, and evaluate structural, geotechnical, and transportation systems using standard codes of practice and modern software tools.' },
  { code:'PSO2', v:'Apply sustainable and smart-city engineering principles to construction and infrastructure projects with environmental responsibility.' },
  { code:'PSO3', v:'Plan, manage, and execute construction projects — from surveying and site investigation through to project delivery.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates employable in government infrastructure bodies, private construction firms, and urban planning agencies.' },
  { code:'PEO2', v:'Enable sustainable, innovative infrastructure design using modern digital and analytical tools.' },
  { code:'PEO3', v:'Develop professional ethics, teamwork, and communication skills for multidisciplinary construction environments.' },
  { code:'PEO4', v:'Prepare graduates for higher studies, research, and lifelong learning in evolving civil engineering practice.' },
];

export default function BTechCEProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechcepd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btechcepd-inner{max-width:1280px;margin:0 auto}
        .cl-btechcepd-head{margin-bottom:48px}
        .cl-btechcepd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-btechcepd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-btechcepd-head h2 em{font-style:normal;color:#DF5400}
        .cl-btechcepd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-btechcepd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-btechcepd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-btechcepd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-btechcepd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-btechcepd-tab.active{background:#001F4C;color:#fff}
        .cl-btechcepd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-btechcepd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-btechcepd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-btechcepd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-btechcepd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-btechcepd-point:last-child{border-bottom:none}
        .cl-btechcepd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-btechcepd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-btechcepd-tbl{width:100%;border-collapse:collapse}
        .cl-btechcepd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-btechcepd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btechcepd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-btechcepd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-btechcepd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-btechcepd-sec" id="program-details">
        <div className="cl-btechcepd-inner">
          <div className="cl-btechcepd-head">
            <span className="cl-btechcepd-eyebrow">B.Tech Civil Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-btechcepd-grid">
            <nav className="cl-btechcepd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-btechcepd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-btechcepd-content">
              {active==='usps'&&<>
                <div className="cl-btechcepd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-btechcepd-point" key={i}><div className="cl-btechcepd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-btechcepd-ch"><div className="lbl">Year-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-btechcepd-tbl"><thead><tr><th>Year</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-btechcepd-ch"><div className="lbl">Programme Outcomes (NBA Graduate Attributes)</div><h3>Program Outcomes</h3></div>
                <table className="cl-btechcepd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-btechcepd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-btechcepd-point" key={i}><div className="cl-btechcepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-btechcepd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-btechcepd-point" key={i}><div className="cl-btechcepd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
