'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

const USPS = [
  'Advanced computing curriculum with a strong focus on software development, system design, data management, and emerging technologies.',
  'Specialisation opportunities in high-demand domains including Artificial Intelligence, Machine Learning, Full Stack Development, Cloud Computing, Data Science, Cyber Security, and DevOps.',
  'Industry-integrated learning through live projects, case studies, hackathons, workshops, expert talks, and industry mentorship across all semesters.',
  'Multiple industry certifications embedded within the curriculum — including IIT Kanpur E&ICT Academy, AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications.',
  'Hands-on experiential learning through advanced laboratories, project-based courses, internships, and industry-sponsored capstone projects.',
  'Research and innovation ecosystem with opportunities for research projects, publications, patents, product development, and innovation challenges.',
  'Entrepreneurship and startup support through incubation, design thinking, innovation labs, and technology-driven venture development.',
  'Comprehensive professional skill development covering communication, leadership, teamwork, project management, critical thinking, and problem-solving.',
  'Strong industry readiness through training in modern software engineering practices, agile methodologies, cloud platforms, DevOps tools, and enterprise application development.',
  'Excellent career and higher education pathways into software engineering, AI/ML, data analytics, cloud computing, cyber security, product development, research, and doctoral studies.',
  'Future-ready graduate profile combining advanced technical expertise, industry exposure, research aptitude, innovation capabilities, and lifelong learning skills.',
];

const CO = [
  { k:'Semester I',  v:'Apply operating systems, object-oriented programming, and programming fundamentals to solve foundational computing problems.' },
  { k:'Semester II', v:'Apply data structures, computer networks, and database management to build and deliver a first mini project, while beginning specialisation electives.' },
  { k:'Semester III',v:'Apply web technologies, security, and artificial intelligence concepts within a chosen specialisation, delivering a second mini project.' },
  { k:'Semester IV', v:'Apply quality assurance, innovation and entrepreneurship principles, and advanced specialisation skills to deliver an industry-sponsored major project.' },
];

const PO = [
  { k:'PO1 · Foundation Knowledge',          v:'Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving.' },
  { k:'PO2 · Problem Analysis',              v:'Identify, review, formulate and analyse problems primarily focussing on customer requirements using critical thinking frameworks.' },
  { k:'PO3 · Development of Solutions',      v:'Design, develop and investigate problems with an innovative approach for solutions incorporating ESG/SDG goals.' },
  { k:'PO4 · Modern Tool Usage',             v:'Select, adapt and apply modern computational tools such as algorithm development with an understanding of limitations, including human biases.' },
  { k:'PO5 · Individual and Teamwork',       v:'Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups, using methodologies such as agile.' },
  { k:'PO6 · Project Management and Finance',v:'Use the principles of project management such as scheduling and work breakdown structure, and be conversant with the principles of finance for profitable project management.' },
  { k:'PO7 · Ethics',                        v:'Commit to professional ethics in managing software projects with financial aspects; learn to use new technologies for cyber security and insulate customers from malware.' },
  { k:'PO8 · Life-Long Learning',            v:'Change management skills and the ability to learn, keep up with contemporary technologies and ways of working.' },
];

const PEO = [
  { code:'PEO1 · Ethics and Social Responsibility',        v:'A well-prepared graduate with ethical values, integrity, and a sense of social responsibility shall apply technical skills to serve society and industry with positive benefit.' },
  { code:'PEO2 · Innovative Problem Solving',              v:'Graduates will have robust problem-solving abilities and the ability to apply innovative thinking techniques toward designing, developing, and implementing software solutions for increasingly complex problems in a rapidly dynamic technological landscape.' },
  { code:'PEO3 · Global Competence and Lifelong Learning', v:'Graduates will be equipped with a comprehensive education in computer applications, meeting international standards, and continue a process of learning about new technologies and trends over time.' },
  { code:'PEO4 · Industry Collaboration and Research Excellence', v:'Graduates will enjoy partnerships with software industries and research institutes, gaining hands-on experience in projects and research on advanced technology areas, improving skills in collaborative and independent research.' },
];

export default function MCAGProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mcagpd-inner{max-width:1280px;margin:0 auto}
        .cl-mcagpd-head{margin-bottom:48px}
        .cl-mcagpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mcagpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mcagpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mcagpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mcagpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mcagpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mcagpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mcagpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mcagpd-tab.active{background:#001F4C;color:#fff}
        .cl-mcagpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mcagpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mcagpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mcagpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mcagpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mcagpd-point:last-child{border-bottom:none}
        .cl-mcagpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mcagpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mcagpd-tbl{width:100%;border-collapse:collapse}
        .cl-mcagpd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mcagpd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mcagpd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mcagpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mcagpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcagpd-sec" id="program-details">
        <div className="cl-mcagpd-inner">
          <div className="cl-mcagpd-head">
            <span className="cl-mcagpd-eyebrow">MCA · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mcagpd-grid">
            <nav className="cl-mcagpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mcagpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mcagpd-content">
              {active==='usps'&&<>
                <div className="cl-mcagpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mcagpd-point" key={i}><div className="cl-mcagpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mcagpd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mcagpd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mcagpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mcagpd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='peo'&&<>
                <div className="cl-mcagpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mcagpd-point" key={i}><div className="cl-mcagpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
