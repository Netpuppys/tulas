'use client';
import { useState } from 'react';

const TABS = [
  { id:'usps', label:'USPs' },
  { id:'co',   label:'Course Outcomes' },
  { id:'po',   label:'Program Outcomes' },
  { id:'pso',  label:'Program Specific Outcomes' },
  { id:'peo',  label:'Program Educational Objectives' },
];

const USPS = [
  'Industry-integrated curriculum with live projects, hackathons, and industry mentorship embedded across all four semesters.',
  'Five program-elective tracks — Full Stack Architecture, Cloud-Native, Backend Engineering, DevOps, Cyber Security, and AI-Integrated Development.',
  'IIT Kanpur E&ICT Academy certifications included within the curriculum at no additional cost or enrolment.',
  'Industry-sponsored capstone major project in Semester IV, co-designed and evaluated with an industry partner.',
  'Cloud-native development and DevOps training with hands-on Docker, Kubernetes, and CI/CD pipeline experience.',
  'AI integration elective for building intelligent full stack applications using modern machine learning techniques.',
  'Research Methodology and Seminar component in Semester III for academic depth and research aptitude.',
  'Innovation & Entrepreneurship and IPR subjects in Semester IV to build startup-ready graduates.',
  'Mini Project 1 in Semester II and Mini Project 2 in Semester III — continuous practical output throughout the programme.',
  'Bridge course for non-CS background students ensuring a strong common foundation before core computing subjects begin.',
  'Placement support backed by a 750+ recruiter network and dedicated career services from day one.',
];

const CO = [
  { k:'Semester I', v:'Apply OS concepts, shell programming, OOP in Java, and Python for robust and reusable software development.' },
  { k:'Semester I', v:'Demonstrate understanding of software engineering principles and structured project management methodologies.' },
  { k:'Semester II', v:'Design and implement data structures and algorithms to solve computational problems efficiently.' },
  { k:'Semester II', v:'Manage computer networks and design relational database systems using DBMS and SQL principles.' },
  { k:'Semester III', v:'Build responsive, dynamic full stack web applications using modern frontend and backend frameworks.' },
  { k:'Semester III', v:'Apply artificial intelligence techniques to design intelligent and adaptive software systems.' },
  { k:'Semester IV', v:'Apply software quality assurance and testing methodologies to verify and validate software products.' },
  { k:'Semester IV', v:'Develop and deliver an industry-sponsored major project demonstrating end-to-end full stack engineering competency.' },
];

const PO = [
  { k:'PO1 · Computing Knowledge',          v:'Apply computing theory, algorithms, data structures, and software engineering principles to solve complex technical problems.' },
  { k:'PO2 · Problem Analysis',             v:'Identify, formulate, and analyse complex computing and engineering problems using fundamental knowledge and analytical skills.' },
  { k:'PO3 · Design & Development',         v:'Design, develop, and evaluate full stack software solutions that meet specified functional, security, and performance requirements.' },
  { k:'PO4 · Conduct Investigations',       v:'Use research methods, structured experimentation, and data analysis to investigate complex computing problems and interpret results.' },
  { k:'PO5 · Modern Tool Usage',            v:'Select and use modern software tools, frameworks, cloud platforms, and development environments appropriately for given tasks.' },
  { k:'PO6 · Engineer & Society',           v:'Apply reasoning informed by contextual knowledge to assess societal, safety, legal, and ethical issues relevant to software engineering practice.' },
  { k:'PO7 · Ethics',                       v:'Understand professional ethics and responsibilities, and commit to ethical norms in computing and software development practice.' },
  { k:'PO8 · Individual & Team Work',       v:'Function effectively as an individual and as a member or leader in diverse and multidisciplinary software engineering teams.' },
  { k:'PO9 · Communication',                v:'Communicate effectively on complex computing activities — preparing reports, technical documentation, and giving clear presentations.' },
  { k:'PO10 · Project Management',          v:'Demonstrate knowledge of engineering and management principles and apply these to manage projects in multidisciplinary environments.' },
  { k:'PO11 · Innovation & Entrepreneurship',v:'Apply innovative thinking and entrepreneurial principles to develop technology-driven products and impactful software solutions.' },
  { k:'PO12 · Life-Long Learning',          v:'Recognise the need for continuous learning and maintain the ability to adapt to evolving technology paradigms across a career.' },
];

const PSO = [
  { code:'PSO1', v:'Build scalable, production-ready full stack applications using modern web frameworks, cloud platforms, and containerized deployment pipelines.' },
  { code:'PSO2', v:'Apply AI-driven and data-centric approaches within full stack development to create intelligent, adaptive, and high-performance software products.' },
  { code:'PSO3', v:'Demonstrate DevOps, software quality assurance, and system design competencies required for enterprise-grade technology environments.' },
];

const PEO = [
  { code:'PEO1', v:'Produce graduates with advanced technical competency in software development, system design, and enterprise application architecture across the full technology stack.' },
  { code:'PEO2', v:'Enable graduates to operate effectively in cloud-native, AI-integrated, and DevOps-driven environments, delivering products and platforms at scale.' },
  { code:'PEO3', v:'Foster research, innovation, and entrepreneurial endeavours that drive technology progress and create meaningful social or economic value.' },
  { code:'PEO4', v:'Develop professional ethics, effective technical communication, and a sustained commitment to lifelong learning in evolving global technology challenges.' },
];

export default function MCAFSProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafspd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mcafspd-inner{max-width:1280px;margin:0 auto}
        .cl-mcafspd-head{margin-bottom:48px}
        .cl-mcafspd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-mcafspd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-mcafspd-head h2 em{font-style:normal;color:#DF5400}
        .cl-mcafspd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-mcafspd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-mcafspd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-mcafspd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-mcafspd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-mcafspd-tab.active{background:#001F4C;color:#fff}
        .cl-mcafspd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-mcafspd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-mcafspd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-mcafspd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-mcafspd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-mcafspd-point:last-child{border-bottom:none}
        .cl-mcafspd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-mcafspd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        .cl-mcafspd-tbl{width:100%;border-collapse:collapse}
        .cl-mcafspd-tbl th{text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#DF5400;padding:10px 12px;border-bottom:2px solid #e0e4ed;font-weight:700}
        .cl-mcafspd-tbl td{padding:14px 12px;font-size:.9rem;line-height:1.6;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-mcafspd-tbl td.k{font-weight:800;color:#001F4C;white-space:nowrap}
        @media(max-width:800px){.cl-mcafspd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mcafspd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcafspd-sec" id="program-details">
        <div className="cl-mcafspd-inner">
          <div className="cl-mcafspd-head">
            <span className="cl-mcafspd-eyebrow">MCA Full Stack Development · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-mcafspd-grid">
            <nav className="cl-mcafspd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-mcafspd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-mcafspd-content">
              {active==='usps'&&<>
                <div className="cl-mcafspd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-mcafspd-point" key={i}><div className="cl-mcafspd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-mcafspd-ch"><div className="lbl">Semester-Wise Course Outcomes</div><h3>Course Outcomes</h3></div>
                <table className="cl-mcafspd-tbl"><thead><tr><th>Semester</th><th>Outcome</th></tr></thead><tbody>{CO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='po'&&<>
                <div className="cl-mcafspd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                <table className="cl-mcafspd-tbl"><thead><tr><th>PO</th><th>Outcome</th></tr></thead><tbody>{PO.map((r,i)=><tr key={i}><td className="k">{r.k}</td><td>{r.v}</td></tr>)}</tbody></table>
              </>}
              {active==='pso'&&<>
                <div className="cl-mcafspd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((r,i)=><div className="cl-mcafspd-point" key={i}><div className="cl-mcafspd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-mcafspd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-mcafspd-point" key={i}><div className="cl-mcafspd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
