'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', num:'01', label:'USPs' },
  { id:'co',   num:'02', label:'Course Outcomes' },
  { id:'po',   num:'03', label:'Program Outcomes' },
  { id:'peo',  num:'04', label:'Program Educational Objectives' },
];

const USPS = [
  "Advanced expertise in crop production, soil science, and sustainable farming practices.",
  "Curriculum aligned with contemporary agricultural practices and emerging global needs.",
  "Interdisciplinary inputs from environmental science, biotechnology, and agricultural economics.",
  "Strong emphasis on research, data analysis, and field experimentation.",
  "Hands-on experience through laboratory work, field trials, and research projects.",
  "Practical exposure through internships, field visits, and interactions with agricultural organisations and agri-business firms.",
  "Extension activities, workshops, and rural engagement initiatives.",
  "Dedicated placement support across the programme.",
  "Pathways into agriculture, research, agribusiness, and allied sectors.",
];

const CO = [
  { k:'Semester I',   v:'Apply foundational agronomy and research methodology to crop physiology problems.' },
  { k:'Semester II',  v:'Apply soil fertility and water resource management principles through a field-based research project.' },
  { k:'Semester III', v:'Apply weed management and climate-resilient agriculture concepts through internships with agri-business firms.' },
  { k:'Semester IV',  v:'Conduct advanced research and complete a dissertation/thesis addressing a real agricultural challenge.' },
];

const PO = [
  { code:'PO1', desc:'Apply advanced agronomic and scientific knowledge to crop production and soil management problems.' },
  { code:'PO2', desc:'Design and conduct field experiments and analyse research data using appropriate methodology.' },
  { code:'PO3', desc:'Develop sustainable, climate-resilient solutions to real-world agricultural challenges.' },
  { code:'PO4', desc:'Apply interdisciplinary knowledge from environmental science, biotechnology, and agricultural economics.' },
  { code:'PO5', desc:'Communicate research findings effectively to academic, industry, and rural stakeholders.' },
  { code:'PO6', desc:'Demonstrate leadership, innovation, and responsibility towards sustainable agriculture.' },
  { code:'PO7', desc:'Engage in lifelong learning to keep pace with evolving agronomic research and technology.' },
];

const PEO = [
  { code:'PEO1', desc:'Develop scientific understanding and analytical thinking to address modern agricultural challenges and food security.' },
  { code:'PEO2', desc:'Build research capability through hands-on laboratory work, field trials, and research projects.' },
  { code:'PEO3', desc:'Foster leadership, innovation, and a deep sense of responsibility towards sustainable agriculture.' },
  { code:'PEO4', desc:'Equip graduates with the knowledge and professional skills to excel in agriculture, research, and agribusiness.' },
];

export default function MScAgrProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagr-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mscagr-pd-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagr-pd-head{margin-bottom:48px;}
        .cl-mscagr-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-mscagr-pd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-mscagr-pd-h2 em{font-style:normal;color:#DF5400;}

        .cl-mscagr-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-mscagr-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-mscagr-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-mscagr-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-mscagr-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-mscagr-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-mscagr-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-mscagr-pd-content-head{margin-bottom:24px;}
        .cl-mscagr-pd-content-head .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-mscagr-pd-content-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-mscagr-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-mscagr-pd-point:last-child{border-bottom:none;}
        .cl-mscagr-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-mscagr-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}

        .cl-mscagr-pd-table{width:100%;border-collapse:collapse;}
        .cl-mscagr-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-mscagr-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-mscagr-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-mscagr-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mscagr-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mscagr-pd-sec" id="program-details">
        <div className="cl-mscagr-pd-wrap">
          <div className="cl-mscagr-pd-head">
            <span className="cl-mscagr-pd-eyebrow">M.Sc. Agronomy · Academic Framework</span>
            <h2 className="cl-mscagr-pd-h2">Program <em>Details</em></h2>
          </div>
          <div className="cl-mscagr-pd-grid">
            <nav className="cl-mscagr-pd-nav">
              {TABS.map(t=>(
                <button
                  key={t.id}
                  className={`cl-mscagr-pd-tab${active===t.id?' active':''}`}
                  onClick={()=>setActive(t.id)}
                >
                  <span className="num">{t.num}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mscagr-pd-content">
              {active==='usps' && (
                <>
                  <div className="cl-mscagr-pd-content-head"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-mscagr-pd-point"><div className="cl-mscagr-pd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co' && (
                <>
                  <div className="cl-mscagr-pd-content-head"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                  <table className="cl-mscagr-pd-table">
                    <thead><tr><th>Semester</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po' && (
                <>
                  <div className="cl-mscagr-pd-content-head"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-mscagr-pd-point">
                      <div className="cl-mscagr-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='peo' && (
                <>
                  <div className="cl-mscagr-pd-content-head"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-mscagr-pd-point">
                      <div className="cl-mscagr-pd-dot"/>
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
