'use client';
import { useState } from 'react';

const USPS = [
  'UGC-recognised, three-year degree affiliated with Sri Dev Suman Uttarakhand University.',
  'Comprehensive curriculum spanning accounting, banking, finance, and insurance.',
  'Strong foundation for professional qualifications such as CA and CS.',
  'Practical skill-building through accounting software, case studies, and industry visits.',
  'Focus on ethical and sustainable business practice alongside technical competence.',
  'Emphasis on global business awareness and entrepreneurial competency.',
  'Research and presentation skills built through professional literature and projects.',
  'Dedicated placement support across the final year of the programme.',
  'Choice between B.Com and B.Com (Hons.) to match career goals.',
];

const CO = [
  { year:'Year 1', outcome:'Apply foundational accounting, business law, and economics principles to basic commercial problems.' },
  { year:'Year 2', outcome:'Apply cost accounting, taxation, and business statistics to real business cases.' },
  { year:'Year 3', outcome:'Apply financial management, auditing, and corporate law knowledge through a research/capstone project, demonstrating professional readiness.' },
];

const PO = [
  { code:'PO1', text:'Comprehend and apply principles from various fields of trade to real business situations.' },
  { code:'PO2', text:'Discuss and implement commerce concepts and procedures across accounting, finance, and banking.' },
  { code:'PO3', text:'Utilise professional literature to enhance research, communication, and presentation skills.' },
  { code:'PO4', text:'Demonstrate a combination of knowledge and professional skills in specialised commerce areas.' },
  { code:'PO5', text:'Promote ethical and sustainable business practices in professional decision-making.' },
  { code:'PO6', text:'Foster global business awareness relevant to an interconnected commercial environment.' },
  { code:'PO7', text:'Develop entrepreneurial and managerial competencies for business leadership.' },
];

const PSO = [
  { code:'PSO1', text:'Develop core competence in commerce, accounting, and financial reporting.' },
  { code:'PSO2', text:'Apply taxation, auditing, and corporate law knowledge to real business compliance scenarios.' },
  { code:'PSO3', text:'Build the analytical and research foundation required for CA, CS, and postgraduate commerce study.' },
  { code:'PSO4', text:'Apply financial management principles to support organisational decision-making.' },
];

const PEO = [
  { code:'PEO1', text:'Equip graduates with a comprehensive set of analytical, technical, and behavioural skills to navigate global business dynamism.' },
  { code:'PEO2', text:'Foster a culture of innovation and ethical practice, encouraging responsible value creation for society and stakeholders.' },
  { code:'PEO3', text:'Nurture entrepreneurial mindsets by unleashing enterprising skills, opportunities, and facilities.' },
  { code:'PEO4', text:'Cultivate strong leadership traits by bridging theory and practice through real-world learning experiences.' },
];

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

export default function BComHonsProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bcomh-pd-wrap{max-width:1280px;margin:0 auto;}
        .cl-bcomh-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-bcomh-pd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;margin-bottom:48px;}
        .cl-bcomh-pd-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcomh-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-bcomh-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-bcomh-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s;}
        .cl-bcomh-pd-tab:hover{background:rgba(0,31,76,.06);}
        .cl-bcomh-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-bcomh-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;}
        .cl-bcomh-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}
        .cl-bcomh-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-bcomh-pd-clbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-bcomh-pd-ch3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin-bottom:24px;}
        .cl-bcomh-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-bcomh-pd-point:last-child{border-bottom:none;}
        .cl-bcomh-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-bcomh-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}
        .cl-bcomh-pd-point strong{color:#001F4C;}
        .cl-bcomh-pd-table{width:100%;border-collapse:collapse;}
        .cl-bcomh-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-bcomh-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-bcomh-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}
        @media(max-width:800px){.cl-bcomh-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcomh-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcomh-pd-sec" id="program-details">
        <div className="cl-bcomh-pd-wrap">
          <span className="cl-bcomh-pd-eyebrow">B.Com (Hons.) · Academic Framework</span>
          <h2 className="cl-bcomh-pd-h2">Program <em>Details</em></h2>
          <div className="cl-bcomh-pd-grid">
            <nav className="cl-bcomh-pd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-bcomh-pd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-bcomh-pd-content">
              {active==='usps'&&(
                <>
                  <div className="cl-bcomh-pd-clbl">Unique Selling Points</div>
                  <div className="cl-bcomh-pd-ch3">USPs</div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-bcomh-pd-point"><div className="cl-bcomh-pd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co'&&(
                <>
                  <div className="cl-bcomh-pd-clbl">Year-Wise Course Outcomes</div>
                  <div className="cl-bcomh-pd-ch3">Course Outcomes</div>
                  <table className="cl-bcomh-pd-table">
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
                  <div className="cl-bcomh-pd-clbl">Programme Outcomes</div>
                  <div className="cl-bcomh-pd-ch3">Program Outcomes</div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-bcomh-pd-point"><div className="cl-bcomh-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
                  ))}
                </>
              )}
              {active==='pso'&&(
                <>
                  <div className="cl-bcomh-pd-clbl">Programme Specific Outcomes</div>
                  <div className="cl-bcomh-pd-ch3">Program Specific Outcomes</div>
                  {PSO.map((p,i)=>(
                    <div key={i} className="cl-bcomh-pd-point"><div className="cl-bcomh-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
                  ))}
                </>
              )}
              {active==='peo'&&(
                <>
                  <div className="cl-bcomh-pd-clbl">Programme Educational Objectives</div>
                  <div className="cl-bcomh-pd-ch3">Program Educational Objectives</div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-bcomh-pd-point"><div className="cl-bcomh-pd-dot"/><p><strong>{p.code}</strong> — {p.text}</p></div>
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
