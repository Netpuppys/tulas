'use client';
import { useState } from 'react';

const PANES = {
  usps: {
    sublabel:'Unique Selling Points', heading:'USPs', type:'bullets',
    items:[
      'Industry-focused curriculum designed for automobile, aerospace, robotics, and manufacturing sectors.',
      'Hands-on experience with industry-standard software — AutoCAD, SolidWorks, and CNC machining.',
      'Emphasis on quality control, maintenance management, renewable energy, and mechatronics.',
      'Workshops, fully-equipped labs, industrial visits, and live projects throughout the programme.',
      'Development of critical thinking, soft skills, teamwork, and leadership abilities.',
      'Mentorship from experienced faculty and visiting industry professionals.',
      'Lateral entry pathway directly into B.Tech Mechanical Engineering Year 2.',
      'Association with IIT Kanpur E&ICT Academy adding national academic credibility.',
      'Dedicated placement support across the final year of the programme.',
    ],
  },
  co: {
    sublabel:'Year-Wise Course Outcomes', heading:'Course Outcomes', type:'table',
    rows:[
      { key:'Year 1', val:'Apply engineering mechanics and materials science to basic mechanical engineering problems.' },
      { key:'Year 2', val:'Apply machine design, CAD/CAM, and thermodynamics knowledge through workshops and design tasks.' },
      { key:'Year 3', val:'Apply industrial automation and mechatronics principles to a capstone project, supported by industrial visits.' },
    ],
  },
  po: {
    sublabel:'Programme Outcomes', heading:'Program Outcomes', type:'labelled',
    items:[
      { lbl:'PO1', text:'Apply basic knowledge of mathematics, science, and mechanical engineering to broad-based problems.' },
      { lbl:'PO2', text:'Identify and analyse well-defined mechanical engineering problems using industry standards.' },
      { lbl:'PO3', text:'Design solutions for manufacturing and machine design problems using engineering principles.' },
      { lbl:'PO4', text:'Apply modern software tools such as AutoCAD, SolidWorks, and CNC programming to engineering tasks.' },
      { lbl:'PO5', text:'Function effectively as an individual and as a team member on workshop and industrial projects.' },
      { lbl:'PO6', text:'Apply professional ethics and safety protocols in manufacturing and site practice.' },
      { lbl:'PO7', text:'Engage in lifelong learning to keep pace with evolving manufacturing and automation technology.' },
    ],
  },
  pso: {
    sublabel:'Programme Specific Outcomes', heading:'Program Specific Outcomes', type:'labelled',
    items:[
      { lbl:'PSO1', text:'Design, analyse, and manufacture components using CAD/CAM and CNC tools.' },
      { lbl:'PSO2', text:'Apply automation and mechatronics principles to modern manufacturing systems.' },
      { lbl:'PSO3', text:'Perform quality control and maintenance management on industrial machinery and systems.' },
    ],
  },
  peo: {
    sublabel:'Programme Educational Objectives', heading:'Program Educational Objectives', type:'labelled',
    items:[
      { lbl:'PEO1', text:'Produce graduates employable in design, manufacturing, quality control, and operations roles.' },
      { lbl:'PEO2', text:'Enable automation, mechatronics, and sustainable manufacturing practices using modern digital tools.' },
      { lbl:'PEO3', text:'Develop professional ethics, teamwork, and communication skills for manufacturing and site environments.' },
      { lbl:'PEO4', text:'Prepare graduates for lateral entry into B.Tech and lifelong learning in mechanical engineering.' },
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

export default function DiplomaMechanicalProgramDetails() {
  const [active, setActive] = useState('usps');
  const pane = PANES[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipme-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipme-pd-inner{max-width:1280px;margin:0 auto;}

        .cl-dipme-pd-head{margin-bottom:48px;}
        .cl-dipme-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-dipme-pd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-dipme-pd-head h2 em{font-style:normal;color:#DF5400;}

        .cl-dipme-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}

        .cl-dipme-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-dipme-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-dipme-pd-tab:hover{background:rgba(0,31,76,.06);}
        .cl-dipme-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-dipme-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-dipme-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-dipme-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-dipme-pd-content-head{margin-bottom:24px;}
        .cl-dipme-pd-content-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-dipme-pd-content-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-dipme-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-dipme-pd-point:last-child{border-bottom:none;}
        .cl-dipme-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-dipme-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}
        .cl-dipme-pd-point strong{color:#001F4C;}

        .cl-dipme-pd-table{width:100%;border-collapse:collapse;}
        .cl-dipme-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-dipme-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-dipme-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-dipme-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipme-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipme-pd-sec" id="programme-details">
        <div className="cl-dipme-pd-inner">

          <div className="cl-dipme-pd-head">
            <span className="cl-dipme-pd-eyebrow">Diploma Mechanical Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>

          <div className="cl-dipme-pd-grid">
            <nav className="cl-dipme-pd-nav">
              {TAB_ORDER.map((t,i)=>(
                <button key={t.id} className={`cl-dipme-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">{String(i+1).padStart(2,'0')}</span>
                  {t.label}
                </button>
              ))}
            </nav>

            <div className="cl-dipme-pd-content">
              <div className="cl-dipme-pd-content-head">
                <div className="cl-dipme-pd-content-lbl">{pane.sublabel}</div>
                <h3 className="cl-dipme-pd-content-h3">{pane.heading}</h3>
              </div>

              {pane.type==='bullets' && (
                <div>
                  {pane.items.map((item,i)=>(
                    <div key={i} className="cl-dipme-pd-point">
                      <div className="cl-dipme-pd-dot"/>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {pane.type==='table' && (
                <table className="cl-dipme-pd-table">
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
                    <div key={i} className="cl-dipme-pd-point">
                      <div className="cl-dipme-pd-dot"/>
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
