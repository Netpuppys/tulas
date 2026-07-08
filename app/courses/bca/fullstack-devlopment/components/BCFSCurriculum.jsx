'use client';
import { useState } from 'react';

const SEMESTERS = [
  {
    title: 'Semester I — Core CS Foundations',
    sub: 'C programming, digital electronics, web basics, communication skills',
    credits: '18 Credits',
    rows: [
      { type:'Core',  subject:'Problem Solving Using C',                  cr:4 },
      { type:'Core',  subject:'Mathematics for Computing',                cr:4 },
      { type:'Core',  subject:'Digital Electronics & Computer Organisation', cr:3 },
      { type:'VAC',   subject:'Communication Skills',                     cr:2 },
      { type:'SEC',   subject:'Web Technology Basics',                    cr:3 },
      { type:'VAC',   subject:'Environmental Science',                    cr:2 },
    ],
  },
  {
    title: 'Semester II — OOP & Frontend Foundations',
    sub: 'C++, Java, data structures, HTML/CSS/JS, first web pages',
    credits: '20 Credits',
    rows: [
      { type:'Core',  subject:'OOP with C++ & Java',                     cr:4 },
      { type:'Core',  subject:'Data Structures',                         cr:4 },
      { type:'Core',  subject:'Discrete Mathematics',                    cr:4 },
      { type:'SEC',   subject:'Frontend Development — HTML, CSS & JS',   cr:3 },
      { type:'VAC',   subject:'Environmental Science',                   cr:2 },
      { type:'EL',    subject:'Web Mini Project I',                      cr:3 },
    ],
  },
  {
    title: 'Semester III — Databases, OS & React',
    sub: 'DBMS, operating systems, React.js, Python for web',
    credits: '22 Credits',
    rows: [
      { type:'Core',  subject:'Database Management Systems',             cr:4 },
      { type:'Core',  subject:'Operating Systems',                       cr:4 },
      { type:'Core',  subject:'Software Engineering',                    cr:4 },
      { type:'Minor', subject:'React.js — Frontend Framework',           cr:4 },
      { type:'SEC',   subject:'Python for Web Development',              cr:3 },
      { type:'EL',    subject:'Web Mini Project II — React App',         cr:3 },
    ],
  },
  {
    title: 'Semester IV — Backend Development Begins',
    sub: 'Computer networks, Node.js, Django, version control',
    credits: '22 Credits',
    rows: [
      { type:'Core',  subject:'Computer Networks',                       cr:4 },
      { type:'Core',  subject:'Design & Analysis of Algorithms',         cr:4 },
      { type:'Minor', subject:'Node.js & Express.js Backend',            cr:4 },
      { type:'Minor', subject:'Django — Python Backend Framework',       cr:4 },
      { type:'SEC',   subject:'Version Control & DevOps Basics',         cr:2 },
      { type:'EL',    subject:'Full Stack Project I — MERN / Django',    cr:4 },
    ],
  },
  {
    title: 'Semester V — Advanced Stacks & Cloud',
    sub: 'Theory of computation, Spring Boot, Laravel, cloud deployment',
    credits: '20 Credits',
    rows: [
      { type:'Core',  subject:'Theory of Computation',                   cr:4 },
      { type:'Minor', subject:'Spring Boot — Java Backend Framework',    cr:4 },
      { type:'Minor', subject:'Laravel — PHP Backend Framework',         cr:4 },
      { type:'EL',    subject:'Cloud Computing & Deployment',            cr:3 },
      { type:'SEC',   subject:'REST APIs & Microservices',               cr:3 },
      { type:'EL',    subject:'Full Stack Project II — Spring / Laravel', cr:2 },
    ],
  },
  {
    title: 'Semester VI — Security, AI & Enterprise',
    sub: 'Compiler design, network security, MongoDB, AI integration',
    credits: '20 Credits',
    rows: [
      { type:'Core',  subject:'Compiler Design',                         cr:4 },
      { type:'Core',  subject:'Network Security',                        cr:4 },
      { type:'Minor', subject:'MongoDB & NoSQL Databases',               cr:4 },
      { type:'EL',    subject:'AI Integration in Web Applications',      cr:3 },
      { type:'SEC',   subject:'Web App Security Lab',                    cr:2 },
      { type:'EL',    subject:'Full Stack Project III — AI-Powered App', cr:3 },
    ],
  },
  {
    title: 'Semester VII — Enterprise, Electives & Internship',
    sub: 'Web app security, enterprise dev, internship, open electives',
    credits: '22 Credits',
    rows: [
      { type:'EL',    subject:'Web App Security & Ethical Hacking',      cr:3 },
      { type:'EL',    subject:'Enterprise Application Development',      cr:3 },
      { type:'Core',  subject:'Internship / Industry Project',           cr:6 },
      { type:'EL',    subject:'Open Elective I',                         cr:3 },
      { type:'EL',    subject:'Open Elective II',                        cr:3 },
      { type:'VAC',   subject:'Research Methodology',                    cr:2 },
      { type:'VAC',   subject:'Entrepreneurship & Start-up Studio',      cr:2 },
    ],
  },
  {
    title: 'Semester VIII — Capstone & Graduation',
    sub: 'Full capstone project, portfolio review, viva',
    credits: '16 Credits',
    rows: [
      { type:'Core',  subject:'Capstone Project — Full Stack Application', cr:10 },
      { type:'Core',  subject:'Project Viva & Portfolio Review',           cr:2 },
      { type:'VAC',   subject:'Digital Portfolio & Professional Presence',  cr:2 },
      { type:'EL',    subject:'Open Elective III',                          cr:2 },
    ],
  },
];

const ELECTIVES = [
  'Blockchain for Web Applications', 'Advanced React & Next.js', 'GraphQL & Modern APIs',
  'Flutter & Cross-Platform Development', 'Serverless Architecture',
  'Machine Learning for Web', 'UI/UX Design Principles',
  'Kubernetes & Container Orchestration', 'Progressive Web Apps (PWA)', 'Digital Entrepreneurship',
];

const EXIT_POINTS = [
  { year:'After Year 1', award:'Certificate in Web Fundamentals' },
  { year:'After Year 2', award:'Diploma in Frontend Development' },
  { year:'After Year 3', award:'Advanced Diploma in Full Stack Development' },
  { year:'After Year 4', award:'BCA Full Stack Development' },
];

const TYPE_COLORS = {
  Core:  { bg:'rgba(0,31,76,.08)',  color:'#001F4C' },
  Minor: { bg:'rgba(223,84,0,.1)', color:'#DF5400' },
  SEC:   { bg:'rgba(34,197,94,.1)', color:'#16a34a' },
  VAC:   { bg:'rgba(168,85,247,.1)',color:'#7c3aed' },
  EL:    { bg:'rgba(14,165,233,.1)',color:'#0284c7' },
};

export default function BCFSCurriculum() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfscur-sec{padding:110px 7%;background:#fff}
        .cl-bcfscur-wrap{max-width:1280px;margin:0 auto}

        .cl-bcfscur-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcfscur-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfscur-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfscur-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfscur-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfscur-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcfscur-accordion{}
        .cl-bcfscur-item{border:1.5px solid #e0e4ed;border-radius:16px;margin-bottom:12px;overflow:hidden}
        .cl-bcfscur-head-row{display:flex;align-items:center;justify-content:space-between;padding:20px 26px;cursor:pointer;background:#fff;user-select:none;transition:background .2s}
        .cl-bcfscur-head-row:hover{background:#f8f9fc}
        .cl-bcfscur-head-left{display:flex;align-items:center;gap:14px}
        .cl-bcfscur-badge{font-family:'Bebas Neue',sans-serif;font-size:1rem;background:#001F4C;color:#fff;padding:4px 14px;border-radius:20px;letter-spacing:.04em}
        .cl-bcfscur-sem-info{}
        .cl-bcfscur-sem-title{font-weight:800;font-size:.97rem;color:#001F4C;margin-bottom:2px}
        .cl-bcfscur-sem-sub{font-size:.8rem;color:#8a94a6}
        .cl-bcfscur-meta{display:flex;align-items:center;gap:14px}
        .cl-bcfscur-credits{font-size:.8rem;font-weight:700;color:#DF5400}
        .cl-bcfscur-chev{font-size:.85rem;color:#8a94a6;transition:transform .25s}
        .cl-bcfscur-body{padding:0 26px 22px}
        .cl-bcfscur-tbl{width:100%;border-collapse:collapse;font-size:.86rem}
        .cl-bcfscur-tbl th{text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed}
        .cl-bcfscur-tbl td{padding:11px 12px;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-bcfscur-tbl td.code{font-weight:700;color:#001F4C;white-space:nowrap}
        .cl-bcfscur-type{display:inline-block;padding:2px 9px;border-radius:12px;font-size:.7rem;font-weight:700}

        .cl-bcfscur-elec-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 32px}
        .cl-bcfscur-elec-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;max-width:900px;margin:0 auto 70px}
        .cl-bcfscur-elec-item{display:flex;align-items:center;gap:12px;background:#f8f9fc;border:1.5px solid #e0e4ed;border-radius:12px;padding:14px 18px;font-size:.88rem;font-weight:600;color:#001F4C}
        .cl-bcfscur-elec-dot{width:6px;height:6px;border-radius:50%;background:#DF5400;flex-shrink:0}

        .cl-bcfscur-exit-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:0 0 32px}
        .cl-bcfscur-exit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .cl-bcfscur-exit-card{background:linear-gradient(135deg,#001F4C 0%,#003580 100%);border-radius:16px;padding:28px 20px}
        .cl-bcfscur-exit-year{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:10px}
        .cl-bcfscur-exit-award{font-size:.9rem;font-weight:800;color:#fff;line-height:1.35}

        @media(max-width:860px){
          .cl-bcfscur-exit-grid{grid-template-columns:1fr 1fr}
          .cl-bcfscur-elec-grid{grid-template-columns:1fr}
        }
        @media(max-width:520px){
          .cl-bcfscur-sec{padding:70px 5%}
          .cl-bcfscur-exit-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcfscur-sec" id="curriculum">
        <div className="cl-bcfscur-wrap">

          <div className="cl-bcfscur-head">
            <div className="cl-bcfscur-eyebrow"><span className="bar" />Curriculum</div>
            <h2 className="cl-bcfscur-h2">8-Semester<br /><em>Learning Path</em></h2>
            <p className="cl-bcfscur-desc">120+ credits · Theory · Practicals · Industry Projects — structured across 8 semesters under NEP 2020 OBE.</p>
          </div>

          <div className="cl-bcfscur-accordion">
            {SEMESTERS.map((s, i) => (
              <div key={i} className="cl-bcfscur-item">
                <div className="cl-bcfscur-head-row" onClick={() => setOpen(open === i ? -1 : i)}>
                  <div className="cl-bcfscur-head-left">
                    <span className="cl-bcfscur-badge">Sem {String(i+1).padStart(2,'0')}</span>
                    <div className="cl-bcfscur-sem-info">
                      <div className="cl-bcfscur-sem-title">{s.title}</div>
                      <div className="cl-bcfscur-sem-sub">{s.sub}</div>
                    </div>
                  </div>
                  <div className="cl-bcfscur-meta">
                    <span className="cl-bcfscur-credits">{s.credits}</span>
                    <span className="cl-bcfscur-chev" style={{transform:open===i?'rotate(180deg)':'none'}}>▼</span>
                  </div>
                </div>
                {open === i && (
                  <div className="cl-bcfscur-body">
                    <table className="cl-bcfscur-tbl">
                      <thead><tr><th>Subject</th><th>Type</th><th>Credits</th></tr></thead>
                      <tbody>
                        {s.rows.map((r, j) => (
                          <tr key={j}>
                            <td>{r.subject}</td>
                            <td>
                              <span className="cl-bcfscur-type" style={TYPE_COLORS[r.type]||{}}>{r.type}</span>
                            </td>
                            <td className="code">{r.cr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="cl-bcfscur-elec-title">Open Electives Pool</div>
          <div className="cl-bcfscur-elec-grid">
            {ELECTIVES.map(e => (
              <div key={e} className="cl-bcfscur-elec-item">
                <span className="cl-bcfscur-elec-dot" />{e}
              </div>
            ))}
          </div>

          <div className="cl-bcfscur-exit-title">ABC Credit Framework — Exit Points</div>
          <div className="cl-bcfscur-exit-grid">
            {EXIT_POINTS.map((e, i) => (
              <div key={i} className="cl-bcfscur-exit-card">
                <div className="cl-bcfscur-exit-year">{e.year}</div>
                <div className="cl-bcfscur-exit-award">{e.award}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
