'use client';
import { useState } from 'react';

const PANES = {
  usps: {
    label:'Course Outcomes', sublabel:'Unique Selling Points', heading:'USPs',
    type:'bullets',
    items:[
      'Comprehensive curriculum spanning programming, networking, and software/hardware design.',
      'Emphasis on practical, hands-on training reinforcing theoretical foundations.',
      'Foundations in Artificial Intelligence, Machine Learning, Big Data, IoT, Blockchain, and AR/VR.',
      'State-of-the-art infrastructure and ICT facilities supporting skill development.',
      'Preparation for diverse roles — designers, developers, network administrators, and database administrators.',
      'Full-time, three-year study with dedicated teaching and learning processes.',
      'Lateral entry pathway directly into B.Tech CSE Year 2.',
      'Association with IIT Kanpur E&ICT Academy adding national credibility.',
      'Dedicated placement support across the final year of the programme.',
    ],
  },
  co: {
    label:'Course Outcomes', sublabel:'Year-Wise Course Outcomes', heading:'Course Outcomes',
    type:'table',
    rows:[
      { key:'Year 1', val:'Apply programming fundamentals and digital electronics to basic computing problems.' },
      { key:'Year 2', val:'Apply data structures, computer networks, and database systems knowledge to lab-based tasks.' },
      { key:'Year 3', val:'Apply software/hardware design and emerging technology concepts to a capstone project, demonstrating industry readiness.' },
    ],
  },
  po: {
    label:'Program Outcomes', sublabel:'Programme Outcomes', heading:'Program Outcomes',
    type:'labelled',
    items:[
      { lbl:'PO1', text:'Apply basic knowledge of mathematics, science, and computing to broad-based problems.' },
      { lbl:'PO2', text:'Identify and analyse well-defined computer science problems.' },
      { lbl:'PO3', text:'Design solutions for well-defined problems in software and hardware systems.' },
      { lbl:'PO4', text:'Apply modern programming languages, tools, and computing technologies to real tasks.' },
      { lbl:'PO5', text:'Function effectively as an individual and as a team member on software projects.' },
      { lbl:'PO6', text:'Apply professional ethics and data security principles in computing practice.' },
      { lbl:'PO7', text:'Engage in lifelong learning to keep pace with evolving computing technology.' },
    ],
  },
  pso: {
    label:'Program Specific Outcomes', sublabel:'Programme Specific Outcomes', heading:'Program Specific Outcomes',
    type:'labelled',
    items:[
      { lbl:'PSO1', text:'Design, develop, and test software applications across web and mobile platforms.' },
      { lbl:'PSO2', text:'Configure and administer computer networks and database systems.' },
      { lbl:'PSO3', text:'Apply foundational knowledge of AI, IoT, and emerging technologies to real-world problems.' },
    ],
  },
  peo: {
    label:'Program Educational Objectives', sublabel:'Programme Educational Objectives', heading:'Program Educational Objectives',
    type:'labelled',
    items:[
      { lbl:'PEO1', text:'Produce graduates employable as developers, network administrators, and database administrators.' },
      { lbl:'PEO2', text:'Enable innovation in software, hardware, and emerging computing technologies.' },
      { lbl:'PEO3', text:'Develop professional ethics, teamwork, and communication skills for IT industry environments.' },
      { lbl:'PEO4', text:'Prepare graduates for lateral entry into B.Tech and lifelong learning in computer science.' },
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

export default function DiplomaCsEProgramDetails() {
  const [active, setActive] = useState('usps');
  const pane = PANES[active];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipcse-pd-inner{max-width:1280px;margin:0 auto;}

        .cl-dipcse-pd-head{margin-bottom:48px;}
        .cl-dipcse-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-dipcse-pd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-dipcse-pd-head h2 em{font-style:normal;color:#DF5400;}

        .cl-dipcse-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}

        /* sidebar nav */
        .cl-dipcse-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-dipcse-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-dipcse-pd-tab:hover{background:rgba(0,31,76,.06);}
        .cl-dipcse-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-dipcse-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-dipcse-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        /* content panel */
        .cl-dipcse-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-dipcse-pd-content-head{margin-bottom:24px;}
        .cl-dipcse-pd-content-lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-dipcse-pd-content-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        /* bullet points */
        .cl-dipcse-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-dipcse-pd-point:last-child{border-bottom:none;}
        .cl-dipcse-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-dipcse-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}
        .cl-dipcse-pd-point strong{color:#001F4C;}

        /* table */
        .cl-dipcse-pd-table{width:100%;border-collapse:collapse;}
        .cl-dipcse-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-dipcse-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-dipcse-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-dipcse-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipcse-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipcse-pd-sec" id="programme-details">
        <div className="cl-dipcse-pd-inner">

          <div className="cl-dipcse-pd-head">
            <span className="cl-dipcse-pd-eyebrow">Diploma Computer Science Engineering · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>

          <div className="cl-dipcse-pd-grid">
            {/* Sidebar */}
            <nav className="cl-dipcse-pd-nav">
              {TAB_ORDER.map((t,i)=>(
                <button key={t.id} className={`cl-dipcse-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">{String(i+1).padStart(2,'0')}</span>
                  {t.label}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="cl-dipcse-pd-content">
              <div className="cl-dipcse-pd-content-head">
                <div className="cl-dipcse-pd-content-lbl">{pane.sublabel}</div>
                <h3 className="cl-dipcse-pd-content-h3">{pane.heading}</h3>
              </div>

              {pane.type==='bullets' && (
                <div>
                  {pane.items.map((item,i)=>(
                    <div key={i} className="cl-dipcse-pd-point">
                      <div className="cl-dipcse-pd-dot"/>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {pane.type==='table' && (
                <table className="cl-dipcse-pd-table">
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
                    <div key={i} className="cl-dipcse-pd-point">
                      <div className="cl-dipcse-pd-dot"/>
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
