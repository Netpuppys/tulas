'use client';
import { useState } from 'react';

const PANES = {
  usps: {
    sublabel:'Unique Selling Points', heading:'USPs', type:'bullets',
    items:[
      'Strong technical foundation integrated with modern industry practices.',
      'Hands-on experience with industry-standard software — AutoCAD, STAAD Pro, and Revit.',
      'Emphasis on environmental sustainability, smart infrastructure, and urban development trends.',
      'Industrial visits, on-site training, workshops, and expert lectures by industry professionals.',
      'Real-world understanding of construction processes, safety protocols, and regulatory standards.',
      'Development of critical thinking, problem-solving, and teamwork skills.',
      'Lateral entry pathway directly into B.Tech Civil Engineering Year 2.',
      'Association with IIT Kanpur E&ICT Academy adding national credibility.',
      'Dedicated placement support across the final year of the programme.',
    ],
  },
  co: {
    sublabel:'Year-Wise Course Outcomes', heading:'Course Outcomes', type:'table',
    rows:[
      { key:'Year 1', val:'Apply engineering mathematics and foundational mechanics to basic civil engineering problems.' },
      { key:'Year 2', val:'Apply structural design, surveying, and construction materials knowledge to design tasks.' },
      { key:'Year 3', val:'Apply hydraulics and geotechnical engineering principles to a capstone project, supported by industrial visits and on-site training.' },
    ],
  },
  po: {
    sublabel:'Programme Outcomes', heading:'Program Outcomes', type:'labelled',
    items:[
      { lbl:'PO1', text:'Apply basic knowledge of mathematics, science, and civil engineering to broad-based problems.' },
      { lbl:'PO2', text:'Identify and analyse well-defined civil engineering problems using codes of practice.' },
      { lbl:'PO3', text:'Design solutions for well-defined technical problems in construction and infrastructure.' },
      { lbl:'PO4', text:'Apply modern software tools such as AutoCAD, STAAD Pro, and Revit to engineering tasks.' },
      { lbl:'PO5', text:'Function effectively as an individual and as a team member on multidisciplinary projects.' },
      { lbl:'PO6', text:'Apply professional ethics and safety protocols in construction and site practice.' },
      { lbl:'PO7', text:'Engage in lifelong learning to keep pace with evolving construction technology.' },
    ],
  },
  pso: {
    sublabel:'Programme Specific Outcomes', heading:'Program Specific Outcomes', type:'labelled',
    items:[
      { lbl:'PSO1', text:'Design and analyse structural, geotechnical, and hydraulic systems using standard software tools.' },
      { lbl:'PSO2', text:'Apply sustainable and smart infrastructure principles to construction projects.' },
      { lbl:'PSO3', text:'Execute site supervision, quality control, and project management on construction sites.' },
    ],
  },
  peo: {
    sublabel:'Programme Educational Objectives', heading:'Program Educational Objectives', type:'labelled',
    items:[
      { lbl:'PEO1', text:'Produce graduates employable in government infrastructure bodies, construction firms, and consultancy services.' },
      { lbl:'PEO2', text:'Enable sustainable, industry-relevant infrastructure practice using modern digital tools.' },
      { lbl:'PEO3', text:'Develop professional ethics, teamwork, and communication skills for site and project environments.' },
      { lbl:'PEO4', text:'Prepare graduates for lateral entry into B.Tech and lifelong learning in civil engineering.' },
    ],
  },
};

const TAB_ORDER = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

export default function DiplomaCivilProgramDetails() {
  const [active, setActive] = useState('usps');
  const pane = PANES[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipce-pd-inner{max-width:1280px;margin:0 auto;}

        .cl-dipce-pd-head{margin-bottom:48px;}
        .cl-dipce-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-dipce-pd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-dipce-pd-head h2 em{font-style:normal;color:#DF5400;}

        .cl-dipce-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}

        .cl-dipce-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-dipce-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-dipce-pd-tab:hover{background:rgba(0,31,76,.06);}
        .cl-dipce-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-dipce-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-dipce-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-dipce-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-dipce-pd-content-head{margin-bottom:24px;}
        .cl-dipce-pd-content-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-dipce-pd-content-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-dipce-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-dipce-pd-point:last-child{border-bottom:none;}
        .cl-dipce-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-dipce-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}
        .cl-dipce-pd-point strong{color:#001F4C;}

        .cl-dipce-pd-table{width:100%;border-collapse:collapse;}
        .cl-dipce-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-dipce-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-dipce-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-dipce-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipce-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipce-pd-sec" id="programme-details">
        <div className="cl-dipce-pd-inner">

          <div className="cl-dipce-pd-head">
            <span className="cl-dipce-pd-eyebrow">Diploma Civil Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>

          <div className="cl-dipce-pd-grid">
            <nav className="cl-dipce-pd-nav">
              {TAB_ORDER.map((t,i)=>(
                <button key={t.id} className={`cl-dipce-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">{String(i+1).padStart(2,'0')}</span>
                  {t.label}
                </button>
              ))}
            </nav>

            <div className="cl-dipce-pd-content">
              <div className="cl-dipce-pd-content-head">
                <div className="cl-dipce-pd-content-lbl">{pane.sublabel}</div>
                <h3 className="cl-dipce-pd-content-h3">{pane.heading}</h3>
              </div>

              {pane.type==='bullets' && (
                <div>
                  {pane.items.map((item,i)=>(
                    <div key={i} className="cl-dipce-pd-point">
                      <div className="cl-dipce-pd-dot"/>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {pane.type==='table' && (
                <table className="cl-dipce-pd-table">
                  <thead><tr><th>Year</th><th>Outcome</th></tr></thead>
                  <tbody>
                    {pane.rows.map((r,i)=>(
                      <tr key={i}><td className="k">{r.key}</td><td>{r.val}</td></tr>
                    ))}
                  </tbody>
                </table>
              )}

              {pane.type==='labelled' && (
                <div>
                  {pane.items.map((item,i)=>(
                    <div key={i} className="cl-dipce-pd-point">
                      <div className="cl-dipce-pd-dot"/>
                      <p><strong>{item.lbl}</strong> — {item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
