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
  "AI-Integrated Advanced Learning — AI, ML, and emerging intelligent technologies embedded throughout the curriculum.",
  "IIT Kanpur E&ICT Academy & Industry Certifications through AWS, Microsoft, Google, NVIDIA, and Oracle.",
  "Industry-Oriented Advanced Curriculum, continuously updated to reflect emerging technologies and industry requirements.",
  "Research & Dissertation-Based Learning through advanced laboratories and industry-sponsored problem-solving.",
  "Industry Collaboration & Consultancy Projects — internships, expert talks, industrial visits, and technology partnerships.",
  "Emerging Technology Specialisations in Generative AI, Agentic AI, Cloud Computing, Cyber Security, and MLOps.",
  "Career Development & Research Opportunities through placement support and doctoral pathways.",
  "Expert Faculty & Research Mentorship from experienced academicians and industry professionals.",
  "Research Publications, Innovation & Patents through high-impact journals and funded research projects.",
  "Strong Alumni & Professional Network across multinational companies, research organisations, and startups.",
  "Advanced Computing Laboratories & Research Centres with high-performance computing and AI platforms.",
  "Innovation Ecosystem & Technical Communities through hackathons, research groups, and startup incubation.",
];

const CO = [
  { k:'Semester I — Advanced Foundations',              v:'Apply advanced algorithms, distributed systems concepts, research methodology, and modern software engineering principles to foundational problems.' },
  { k:'Semester II — Intelligent Computing',            v:'Apply cloud computing, big data analytics, and scalable systems knowledge to enterprise-grade software development.' },
  { k:'Semester III — AI & Research',                   v:'Apply AI, Machine Learning, Deep Learning, NLP, and Computer Vision techniques to intelligent decision-making systems and begin dissertation research.' },
  { k:'Semester IV — Emerging Technologies & Dissertation', v:'Apply Generative AI, Agentic AI, MLOps, and frontier technology research to complete a dissertation demonstrating research and industry readiness.' },
];

const PO = [
  { code:'PO1', desc:'An ability to independently carry out research/investigation and development work to solve practical problems.' },
  { code:'PO2', desc:'An ability to write and present a substantial technical report/document.' },
  { code:'PO3', desc:'Students should be able to demonstrate a degree of mastery over the area as per the specialisation of the programme, at a level higher than the requirements in the appropriate bachelor programme.' },
];

const PSO = [
  { code:'PSO1 — Advanced Computing and Intelligent Systems', desc:'Apply advanced concepts of Computer Science and Engineering to design, develop, and deploy intelligent, scalable, and secure computing solutions using Artificial Intelligence, Data Analytics, Cloud Computing, High-Performance Computing, and modern software technologies.' },
  { code:'PSO2 — Research and Emerging Technologies',         desc:'Conduct independent research and develop innovative solutions in emerging domains such as Machine Learning, Cyber Security, Distributed Systems, Blockchain, Internet of Things, and Quantum Computing, using appropriate research methodologies and modern engineering tools.' },
  { code:'PSO3 — Professional Practice and Innovation',       desc:'Demonstrate the ability to solve complex real-world problems through interdisciplinary collaboration, ethical practices, technical leadership, entrepreneurship, scholarly publications, patents, and continuous professional development.' },
];

const PEO = [
  { code:'PEO1 — Advanced Technical and Research Competence', desc:'Graduates will apply advanced knowledge of Computer Science and Engineering to analyse, design, develop, and evaluate innovative computing solutions, and conduct high-quality research to address complex engineering and societal challenges.' },
  { code:'PEO2 — Professional Excellence and Innovation',     desc:'Graduates will demonstrate leadership, ethical practices, effective communication, teamwork, and project management while contributing to industry, academia, research organisations, or entrepreneurial ventures.' },
  { code:'PEO3 — Lifelong Learning and Societal Impact',     desc:'Graduates will engage in lifelong learning through higher studies, professional development, certifications, and research, while developing sustainable, secure, and socially responsible computing solutions.' },
];

export default function MTechCSEProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-pd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtcse-pd-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-pd-head{margin-bottom:48px;}
        .cl-mtcse-pd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-mtcse-pd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-mtcse-pd-h2 em{font-style:normal;color:#DF5400;}

        .cl-mtcse-pd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-mtcse-pd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-mtcse-pd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-mtcse-pd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-mtcse-pd-tab.active{background:#001F4C;color:#fff;}
        .cl-mtcse-pd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-mtcse-pd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-mtcse-pd-content-head{margin-bottom:24px;}
        .cl-mtcse-pd-content-head .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-mtcse-pd-content-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-mtcse-pd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-mtcse-pd-point:last-child{border-bottom:none;}
        .cl-mtcse-pd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-mtcse-pd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}

        .cl-mtcse-pd-table{width:100%;border-collapse:collapse;}
        .cl-mtcse-pd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-mtcse-pd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-mtcse-pd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;max-width:200px;}

        @media(max-width:800px){.cl-mtcse-pd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtcse-pd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtcse-pd-sec" id="program-details">
        <div className="cl-mtcse-pd-wrap">
          <div className="cl-mtcse-pd-head">
            <span className="cl-mtcse-pd-eyebrow">M.Tech CSE · Academic Framework</span>
            <h2 className="cl-mtcse-pd-h2">Program <em>Details</em></h2>
          </div>
          <div className="cl-mtcse-pd-grid">
            <nav className="cl-mtcse-pd-nav">
              {TABS.map(t=>(
                <button
                  key={t.id}
                  className={`cl-mtcse-pd-tab${active===t.id?' active':''}`}
                  onClick={()=>setActive(t.id)}
                >
                  <span className="num">{t.num}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mtcse-pd-content">
              {active==='usps' && (
                <>
                  <div className="cl-mtcse-pd-content-head"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-mtcse-pd-point"><div className="cl-mtcse-pd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co' && (
                <>
                  <div className="cl-mtcse-pd-content-head"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                  <table className="cl-mtcse-pd-table">
                    <thead><tr><th>Stage</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po' && (
                <>
                  <div className="cl-mtcse-pd-content-head"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                  {PO.map((p,i)=>(
                    <div key={i} className="cl-mtcse-pd-point">
                      <div className="cl-mtcse-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='pso' && (
                <>
                  <div className="cl-mtcse-pd-content-head"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                  {PSO.map((p,i)=>(
                    <div key={i} className="cl-mtcse-pd-point">
                      <div className="cl-mtcse-pd-dot"/>
                      <p><strong style={{color:'#001F4C'}}>{p.code}</strong> — {p.desc}</p>
                    </div>
                  ))}
                </>
              )}
              {active==='peo' && (
                <>
                  <div className="cl-mtcse-pd-content-head"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-mtcse-pd-point">
                      <div className="cl-mtcse-pd-dot"/>
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
