'use client';
import { useState } from 'react';

const USPS = [
  'Specialised training in advanced structural analysis, earthquake engineering, wind engineering, and finite element modelling.',
  'Exposure to cutting-edge software tools (ETABS, STAAD Pro, ANSYS, SAP2000) for real-world applications.',
  'Strong emphasis on independent research, dissertation work, and publications in reputed journals.',
  'More opportunities to innovate in areas like smart materials, sustainable construction, and resilient infrastructure.',
  'Curriculum aligned with national and international design codes (IS, Eurocode, ACI).',
  'Industry collaborations, internships, and consultancy projects that bridge academia and practice.',
  'Specialised modules on earthquake-resistant design and disaster risk reduction, aligned with national initiatives (NIDM, NDMA) for disaster management and resilience.',
  'Training that prepares graduates for global opportunities in design firms, construction companies, and research institutions.',
  'Development of leadership, project management, and communication skills for professional excellence.',
];

const CO = [
  { year:'Year 1 — Foundation & Advanced Core Learning', outcome:'Apply advanced structural analysis, structural design, and construction materials knowledge to foundational structural engineering problems, building mastery in core structures.' },
  { year:'Year 2 — Specialisation, Research & Professional Practice', outcome:'Apply earthquake engineering, wind engineering, digital twin modelling, and AI/ML applications to a dissertation-based research project, demonstrating professional and research readiness.' },
];

const PO = [
  { code:'PO1', text:'An ability to independently carry out research/investigation and development work to solve practical problems.' },
  { code:'PO2', text:'An ability to write and present a substantial technical report/document.' },
  { code:'PO3', text:'Students should be able to demonstrate a degree of mastery over the area as per the specialisation of the programme, at a level higher than the requirements in the appropriate bachelor programme.' },
];

const PSO = [
  { code:'PSO1 — Advanced Structural Design and Analysis', text:'Apply advanced theories of structural mechanics, computational modelling, and design codes to analyse, design, and optimise complex structures such as high-rise buildings, bridges, and industrial facilities, ensuring safety, sustainability, and resilience.' },
  { code:'PSO2 — Research, Innovation, and Disaster Resilience', text:'Conduct independent research in structural engineering, develop innovative solutions using modern materials and technologies, and contribute to disaster-resilient infrastructure through expertise in earthquake engineering, wind engineering, and risk mitigation strategies.' },
];

const PEO = [
  { code:'PEO1 — Professional Expertise and Leadership', text:'Graduates will excel as structural engineering professionals, applying advanced knowledge of analysis, design, and construction to deliver safe, sustainable, and resilient infrastructure. They will demonstrate leadership in multidisciplinary teams, uphold ethical standards, and contribute to the advancement of the civil engineering profession.' },
  { code:'PEO2 — Research, Innovation, and Lifelong Learning', text:'Graduates will engage in cutting-edge research and innovation in structural engineering, addressing emerging challenges such as disaster resilience, smart materials, and sustainable infrastructure. They will pursue lifelong learning, adapt to evolving technologies, and contribute to academic, industrial, and societal development through publications, patents, and professional practice.' },
];

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

export default function MTechStructuralProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtse-pd-wrap{max-width:1280px;margin:0 auto;}
        .cl-mtse-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-mtse-pd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;margin-bottom:48px;}
        .cl-mtse-pd-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-mtse-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-mtse-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s;}
        .cl-mtse-pd-tab:hover{background:rgba(0,31,76,.06);}
        .cl-mtse-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-mtse-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;}
        .cl-mtse-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}
        .cl-mtse-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-mtse-pd-clbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-mtse-pd-ch3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px;}
        .cl-mtse-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-mtse-pd-point:last-child{border-bottom:none;}
        .cl-mtse-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-mtse-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}
        .cl-mtse-pd-point strong{color:#001F4C;}
        .cl-mtse-pd-table{width:100%;border-collapse:collapse;}
        .cl-mtse-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-mtse-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-mtse-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}
        @media(max-width:800px){.cl-mtse-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtse-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtse-pd-sec" id="program-details">
        <div className="cl-mtse-pd-wrap">
          <span className="cl-mtse-pd-eyebrow">M.Tech Structural Engineering · Academic Framework</span>
          <h2 className="cl-mtse-pd-h2">Program <em>Details</em></h2>
          <div className="cl-mtse-pd-grid">
            <nav className="cl-mtse-pd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mtse-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mtse-pd-content">
              {active==='usps'&&(
                <>
                  <div className="cl-mtse-pd-clbl">Unique Selling Points</div>
                  <div className="cl-mtse-pd-ch3">USPs</div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-mtse-pd-point"><div className="cl-mtse-pd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co'&&(
                <>
                  <div className="cl-mtse-pd-clbl">Year-Wise Course Outcomes</div>
                  <div className="cl-mtse-pd-ch3">Course Outcomes</div>
                  <table className="cl-mtse-pd-table">
                    <thead><tr><th>Year</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((c,i)=>(
                        <tr key={i}><td className="k">{c.year}</td><td>{c.outcome}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po'&&(
                <>
                  <div className="cl-mtse-pd-clbl">Programme Outcomes</div>
                  <div className="cl-mtse-pd-ch3">Program Outcomes</div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-mtse-pd-point"><div className="cl-mtse-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
                  ))}
                </>
              )}
              {active==='pso'&&(
                <>
                  <div className="cl-mtse-pd-clbl">Programme Specific Outcomes</div>
                  <div className="cl-mtse-pd-ch3">Program Specific Outcomes</div>
                  {PSO.map((p,i)=>(
                    <div key={i} className="cl-mtse-pd-point"><div className="cl-mtse-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
                  ))}
                </>
              )}
              {active==='peo'&&(
                <>
                  <div className="cl-mtse-pd-clbl">Programme Educational Objectives</div>
                  <div className="cl-mtse-pd-ch3">Program Educational Objectives</div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-mtse-pd-point"><div className="cl-mtse-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
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
