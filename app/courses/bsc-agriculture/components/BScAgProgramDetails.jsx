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
  "ICAR-aligned curriculum covering the full breadth of agricultural sciences.",
  "An agricultural farm and dedicated laboratories for hands-on, real-environment learning.",
  "Practical and theoretical training across agronomy, soil science, horticulture, and animal science.",
  "Strong focus on student-centred, problem-based learning with an industry-relevant curriculum.",
  "Industrial training with agribusiness, research, and agri-tech organisations.",
  "Industry visits, seminars, workshops, and expert lectures from practising agricultural professionals.",
  "Active student clubs and bodies supporting a vibrant learning environment.",
  "Dedicated placement support across the final year of the programme.",
  "Pathways into government, private, and international agriculture and agribusiness opportunities.",
];

const CO = [
  { k:'Year 1', v:'Apply foundational agricultural science and basic sciences to introductory crop and farming concepts.' },
  { k:'Year 2', v:'Apply soil science, plant breeding, and horticulture knowledge to practical lab and field exercises.' },
  { k:'Year 3', v:'Diagnose plant health and pest issues, and apply animal science principles through hands-on practical training.' },
  { k:'Year 4', v:'Apply agricultural economics and extension education to real rural and agribusiness contexts, completing a major/capstone project.' },
];

const PO = [
  { code:'PO1', desc:'Apply scientific and technical knowledge of agriculture to real crop production and farm management problems.' },
  { code:'PO2', desc:'Analyse soil, crop, and farm data to generate actionable agricultural recommendations.' },
  { code:'PO3', desc:'Design and apply sustainable agricultural practices incorporating environmental and economic considerations.' },
  { code:'PO4', desc:'Use modern agricultural tools and technologies for crop, soil, and farm management.' },
  { code:'PO5', desc:'Communicate agricultural knowledge effectively to farmers, industry, and other stakeholders.' },
  { code:'PO6', desc:'Apply professional and ethical responsibility in agricultural practice and rural engagement.' },
  { code:'PO7', desc:'Engage in lifelong learning to keep pace with evolving agricultural science and technology.' },
];

const PSO = [
  { code:'PSO1', desc:'Design and develop practical, innovative solutions to real-life agricultural challenges.' },
  { code:'PSO2', desc:'Examine current issues in agriculture and their influence on the future of farming.' },
  { code:'PSO3', desc:'Apply modern and organic agricultural techniques, including agro-meteorological methods, to industrial and societal problems.' },
  { code:'PSO4', desc:'Apply an understanding of the legal, ethical, and regulatory environment affecting agricultural organisations.' },
];

const PEO = [
  { code:'PEO1', desc:'Instil subject-specific knowledge while establishing a link between practical solutions and theory.' },
  { code:'PEO2', desc:"Encourage students' personal development and self-confidence, opening opportunities to work in the agribusiness sector." },
  { code:'PEO3', desc:'Use scientific and experimental evidence to make agriculture-related issues approachable and solvable.' },
  { code:'PEO4', desc:'Use practical application and research to build strong problem-solving skills.' },
];

export default function BScAgProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagpd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bscagpd-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagpd-head{margin-bottom:48px;}
        .cl-bscagpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-bscagpd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-bscagpd-h2 em{font-style:normal;color:#DF5400;}

        .cl-bscagpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-bscagpd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-bscagpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-bscagpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-bscagpd-tab.active{background:#001F4C;color:#fff;}
        .cl-bscagpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-bscagpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-bscagpd-content-head{margin-bottom:24px;}
        .cl-bscagpd-content-head .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-bscagpd-content-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-bscagpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-bscagpd-point:last-child{border-bottom:none;}
        .cl-bscagpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-bscagpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}

        .cl-bscagpd-table{width:100%;border-collapse:collapse;}
        .cl-bscagpd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-bscagpd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-bscagpd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-bscagpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bscagpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bscagpd-sec" id="program-details">
        <div className="cl-bscagpd-wrap">
          <div className="cl-bscagpd-head">
            <span className="cl-bscagpd-eyebrow">B.Sc. (Hons.) Agriculture · Academic Framework</span>
            <h2 className="cl-bscagpd-h2">Program <em>Details</em></h2>
          </div>
          <div className="cl-bscagpd-grid">
            <nav className="cl-bscagpd-nav">
              {TABS.map(t=>(
                <button
                  key={t.id}
                  className={`cl-bscagpd-tab${active===t.id?' active':''}`}
                  onClick={()=>setActive(t.id)}
                >
                  <span className="num">{t.num}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-bscagpd-content">
              {active==='usps' && (
                <>
                  <div className="cl-bscagpd-content-head"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-bscagpd-point"><div className="cl-bscagpd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co' && (
                <>
                  <div className="cl-bscagpd-content-head"><div className="lbl">Year-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                  <table className="cl-bscagpd-table">
                    <thead><tr><th>Year</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po' && (
                <>
                  <div className="cl-bscagpd-content-head"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-bscagpd-point">
                      <div className="cl-bscagpd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='pso' && (
                <>
                  <div className="cl-bscagpd-content-head"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                  {PSO.map((p,i)=>(
                    <div key={i} className="cl-bscagpd-point">
                      <div className="cl-bscagpd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='peo' && (
                <>
                  <div className="cl-bscagpd-content-head"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-bscagpd-point">
                      <div className="cl-bscagpd-dot"/>
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
