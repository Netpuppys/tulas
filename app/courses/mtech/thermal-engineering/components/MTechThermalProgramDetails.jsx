'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', num:'01', label:'USPs' },
  { id:'co',   num:'02', label:'Course Outcomes' },
  { id:'po',   num:'03', label:'Program Outcomes' },
  { id:'pso',  num:'04', label:'Program Specific Outcomes' },
  { id:'peo',  num:'05', label:'Program Educational Objectives' },
];

const USPS = [
  "Future-Ready Curriculum covering Advanced Thermodynamics, Heat Transfer, CFD, Renewable Energy, Combustion, HVAC, and Hydrogen Technologies.",
  "Digital Engineering & Advanced Simulation using ANSYS, Siemens STAR-CCM+, MATLAB & Simulink, Python, and Digital Twin technologies.",
  "Research Excellence & Dissertation through interdisciplinary projects and funded research initiatives.",
  "Industry Collaboration through sponsored research, consultancy projects, internships, and plant visits.",
  "Sustainable Energy & Emerging Technologies including Hydrogen, Fuel Cells, Thermal Energy Storage, and Smart HVAC.",
  "Professional Certifications & Global Learning in CFD, Engineering Simulation, and Energy Management.",
  "Innovation, Patents & Technology Development through prototype development and startup incubation.",
  "World-Class Faculty & Research Mentorship from accomplished academicians and industry professionals.",
  "Advanced Laboratories & Research Infrastructure including CFD, combustion, and HVAC laboratories.",
  "Global Research & Academic Opportunities through SCI/Scopus-indexed publications and doctoral pathways.",
  "Career Advancement & Leadership Development through placement support and professional training.",
  "Innovation Ecosystem & Global Professional Network via ASHRAE, ISHRAE, SAE, ASME, and ISTE communities.",
];

const CO = [
  { k:'Semester I — Advanced Foundations',                   v:'Apply advanced thermodynamics, heat transfer, fluid flow, and numerical methods to next-generation thermal system design problems.' },
  { k:'Semester II — Thermal & Energy Systems',              v:'Apply thermal power, HVAC, refrigeration, and combustion engineering knowledge to energy auditing and system optimisation tasks.' },
  { k:'Semester III — Advanced Simulation & Research',       v:'Apply CFD, ANSYS, and MATLAB simulation techniques to experimental analysis and begin dissertation research.' },
  { k:'Semester IV — Future Energy Technologies & Dissertation', v:'Apply renewable energy, hydrogen, and AI-driven energy optimisation knowledge to complete a dissertation demonstrating research and industry readiness.' },
];

const PO = [
  { code:'PO1', desc:'An ability to independently carry out research/investigation and development work to solve practical problems.' },
  { code:'PO2', desc:'An ability to write and present a substantial technical report/document.' },
  { code:'PO3', desc:'Students should be able to demonstrate a degree of mastery over the area as per the specialisation of the programme, at a level higher than the requirements in the appropriate bachelor programme.' },
];

const PSO = [
  { code:'PSO1 — Advanced Thermal System Analysis',         desc:'Apply advanced knowledge of thermodynamics, heat transfer, fluid mechanics, combustion, and thermal system design to analyse, model, optimise, and develop efficient thermal and energy systems for industrial and societal applications.' },
  { code:'PSO2 — Computational Engineering & Research',     desc:'Utilise modern computational tools and research methodologies, including CFD, FEA, numerical modelling, simulation, optimisation, and artificial intelligence, to solve complex thermal engineering problems and conduct high-quality interdisciplinary research.' },
  { code:'PSO3 — Sustainable Energy & Professional Leadership', desc:'Design innovative and sustainable engineering solutions in renewable energy, hydrogen technologies, HVAC, and industrial decarbonisation, while demonstrating professional ethics, entrepreneurship, and leadership.' },
];

const PEO = [
  { code:'PEO1 — Advanced Technical Competence',             desc:'Graduates will demonstrate advanced knowledge and technical competence in Thermodynamics, Heat Transfer, Fluid Mechanics, CFD, and Thermal Engineering to analyse, design, optimise, and develop innovative thermal systems.' },
  { code:'PEO2 — Professional Excellence & Leadership',      desc:'Graduates will excel as engineering professionals, researchers, consultants, entrepreneurs, and academicians, demonstrating leadership, ethical responsibility, and project management skills.' },
  { code:'PEO3 — Sustainable Engineering & Lifelong Learning', desc:'Graduates will promote energy efficiency, renewable energy technologies, environmental sustainability, and continuous professional development.' },
];

export default function MTechThermalProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtte-pd-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-pd-head{margin-bottom:48px;}
        .cl-mtte-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-mtte-pd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-mtte-pd-h2 em{font-style:normal;color:#DF5400;}

        .cl-mtte-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-mtte-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-mtte-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-mtte-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-mtte-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-mtte-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-mtte-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-mtte-pd-content-head{margin-bottom:24px;}
        .cl-mtte-pd-content-head .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-mtte-pd-content-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-mtte-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-mtte-pd-point:last-child{border-bottom:none;}
        .cl-mtte-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-mtte-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}

        .cl-mtte-pd-table{width:100%;border-collapse:collapse;}
        .cl-mtte-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-mtte-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-mtte-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;max-width:200px;}

        @media(max-width:800px){.cl-mtte-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtte-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtte-pd-sec" id="program-details">
        <div className="cl-mtte-pd-wrap">
          <div className="cl-mtte-pd-head">
            <span className="cl-mtte-pd-eyebrow">M.Tech Thermal Engineering · Academic Framework</span>
            <h2 className="cl-mtte-pd-h2">Program <em>Details</em></h2>
          </div>
          <div className="cl-mtte-pd-grid">
            <nav className="cl-mtte-pd-nav">
              {TABS.map(t=>(
                <button
                  key={t.id}
                  className={`cl-mtte-pd-tab${active===t.id?' active':''}`}
                  onClick={()=>setActive(t.id)}
                >
                  <span className="num">{t.num}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mtte-pd-content">
              {active==='usps' && (
                <>
                  <div className="cl-mtte-pd-content-head"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-mtte-pd-point"><div className="cl-mtte-pd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co' && (
                <>
                  <div className="cl-mtte-pd-content-head"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                  <table className="cl-mtte-pd-table">
                    <thead><tr><th>Stage</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po' && (
                <>
                  <div className="cl-mtte-pd-content-head"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-mtte-pd-point">
                      <div className="cl-mtte-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='pso' && (
                <>
                  <div className="cl-mtte-pd-content-head"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                  {PSO.map((p,i)=>(
                    <div key={i} className="cl-mtte-pd-point">
                      <div className="cl-mtte-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='peo' && (
                <>
                  <div className="cl-mtte-pd-content-head"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-mtte-pd-point">
                      <div className="cl-mtte-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
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
