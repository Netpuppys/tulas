'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', num:'01', label:'USPs' },
  { id:'co',   num:'02', label:'Course Outcomes' },
  { id:'po',   num:'03', label:'Program Outcomes' },
  { id:'peo',  num:'04', label:'Program Educational Objectives' },
];

const USPS = [
  "NEP 2020-aligned curriculum with flexibility, multidisciplinary learning, and outcome-based education.",
  "Strong foundation in computing through programming, databases, software engineering, networking, and web technologies.",
  "Specialization opportunities in emerging domains such as Artificial Intelligence, Machine Learning, Full Stack Development, and Cloud Computing.",
  "Industry-integrated learning through live projects, case studies, hackathons, workshops, and expert sessions.",
  "Multiple industry certifications embedded within the curriculum to enhance professional competencies and employability.",
  "Hands-on experiential learning through advanced laboratories, project-based courses, internships, and capstone projects.",
  "Research and innovation ecosystem with opportunities for research projects, publications, patents, and participation in innovation challenges.",
  "Entrepreneurship and startup support through incubation, design thinking, and innovation-driven initiatives.",
  "Comprehensive skill development encompassing communication, leadership, teamwork, critical thinking, and problem-solving abilities.",
  "Excellent career and higher education pathways leading to opportunities in software development, data analytics, cloud computing, artificial intelligence, cyber security, as well as higher studies such as MCA and doctoral research.",
  "Future-ready graduate profile that combines technical expertise, industry readiness, research aptitude, and innovation capabilities to address evolving global technology demands.",
];

const CO = [
  { k:'Year 1', v:"Apply programming fundamentals, computer basics, and web page fundamentals to build simple applications and static web pages." },
  { k:'Year 2', v:"Apply data structures, database management, and software engineering principles to design and build functional software applications." },
  { k:'Year 3', v:"Apply a chosen specialisation track — Full Stack Development or AI & ML — to deliver live projects, an internship, and a final capstone project." },
];

const PO = [
  { k:'PO1', v:"Exhibit factual and theoretical knowledge of computer science, mathematics and computing fundamentals." },
  { k:'PO2', v:"Analyse computing problems and apply appropriate design and development techniques to arrive at solutions." },
  { k:'PO3', v:"Recognize their role as a developer, technologist, and problem-solver in a computing-driven business environment." },
  { k:'PO4', v:"Demonstrate effective communication by presenting technical ideas using critical thinking, analysis, and logical reasoning." },
  { k:'PO5', v:"Practice professional responsibility and ethical standards in academic and workplace environments." },
];

const PEO = [
  { code:'PEO1 · Comprehensive Knowledge',      desc:'To provide a holistic understanding of foundational computing principles, programming, and functional areas like databases, networking, and web technologies.' },
  { code:'PEO2 · Entrepreneurship & Leadership', desc:'To develop entrepreneurial passion and equip students with leadership qualities to manage technology ventures successfully.' },
  { code:'PEO3 · Critical Thinking & Analysis',  desc:'To foster analytical and research skills for effective problem-solving and decision-making in diverse computing environments.' },
  { code:'PEO4 · Ethics & Social Responsibility', desc:'To instill professional ethics, human values, and social responsibility in computing practice.' },
];

export default function BCAGProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagpd-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bcagpd-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcagpd-head{margin-bottom:48px;}
        .cl-bcagpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px;}
        .cl-bcagpd-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,4.2rem);color:#001F4C;line-height:.92;}
        .cl-bcagpd-h2 em{font-style:normal;color:#DF5400;}

        .cl-bcagpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px;}
        .cl-bcagpd-nav{display:flex;flex-direction:column;gap:4px;}
        .cl-bcagpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s,color .2s;}
        .cl-bcagpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s;}
        .cl-bcagpd-tab.active{background:#001F4C;color:#fff;}
        .cl-bcagpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff;}

        .cl-bcagpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px;}
        .cl-bcagpd-content-head{margin-bottom:24px;}
        .cl-bcagpd-content-head .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px;}
        .cl-bcagpd-content-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;}

        .cl-bcagpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed;}
        .cl-bcagpd-point:last-child{border-bottom:none;}
        .cl-bcagpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px;}
        .cl-bcagpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;}

        .cl-bcagpd-table{width:100%;border-collapse:collapse;}
        .cl-bcagpd-table th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;}
        .cl-bcagpd-table td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top;}
        .cl-bcagpd-table td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        @media(max-width:800px){.cl-bcagpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcagpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcagpd-sec" id="program-details">
        <div className="cl-bcagpd-wrap">
          <div className="cl-bcagpd-head">
            <span className="cl-bcagpd-eyebrow">BCA · Academic Framework</span>
            <h2 className="cl-bcagpd-h2">Program <em>Details</em></h2>
          </div>
          <div className="cl-bcagpd-grid">
            <nav className="cl-bcagpd-nav">
              {TABS.map(t=>(
                <button
                  key={t.id}
                  className={`cl-bcagpd-tab${active===t.id?' active':''}`}
                  onClick={()=>setActive(t.id)}
                >
                  <span className="num">{t.num}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-bcagpd-content">
              {active==='usps' && (
                <>
                  <div className="cl-bcagpd-content-head"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                  {USPS.map((u,i)=>(
                    <div key={i} className="cl-bcagpd-point"><div className="cl-bcagpd-dot"/><p>{u}</p></div>
                  ))}
                </>
              )}
              {active==='co' && (
                <>
                  <div className="cl-bcagpd-content-head"><div className="lbl">Year-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                  <table className="cl-bcagpd-table">
                    <thead><tr><th>Year</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='po' && (
                <>
                  <div className="cl-bcagpd-content-head"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                  <table className="cl-bcagpd-table">
                    <thead><tr><th>PO</th><th>Outcome</th></tr></thead>
                    <tbody>
                      {PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}
                    </tbody>
                  </table>
                </>
              )}
              {active==='peo' && (
                <>
                  <div className="cl-bcagpd-content-head"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                  {PEO.map((p,i)=>(
                    <div key={i} className="cl-bcagpd-point">
                      <div className="cl-bcagpd-dot"/>
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
