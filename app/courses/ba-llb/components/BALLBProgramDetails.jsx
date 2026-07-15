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
  'BCI Approved Programme.',
  'Integrated Humanities & Law Curriculum.',
  'Moot Court Training.',
  'Legal Research & Policy Studies.',
  'Courtroom Simulations.',
  'Internship Opportunities.',
  'Sessions by Legal Experts.',
  'Career Pathways in Law & Civil Services.',
];

const CO = [
  'Interpret constitutional and public laws in real-world governance contexts.',
  'Analyse social and legal issues critically using interdisciplinary knowledge.',
  'Draft legal opinions, petitions, and research papers with clarity.',
  'Present persuasive legal arguments in moot courts and legal forums.',
  'Apply interdisciplinary knowledge from humanities to legal problem-solving.',
  'Understand public policy and governance frameworks in India.',
  'Build a strong foundation for careers in litigation, judiciary, and civil services.',
];

const PO = [
  'Understand legal principles within their social, political, and historical context.',
  'Apply interdisciplinary knowledge to legal problem-solving and policy analysis.',
  'Conduct legal research using primary and secondary sources effectively.',
  'Communicate legal arguments in written and oral advocacy settings.',
  'Demonstrate ethical conduct and professional responsibility in legal practice.',
  'Apply constitutional values and governance frameworks to legal issues.',
  'Prepare for leadership roles in law, public service, and civil administration.',
];

const PSO = [
  'Develop expertise in Constitutional Law, Administrative Law, and Public Law.',
  'Build knowledge of governance, political systems, and public policy.',
  'Strengthen advocacy skills through practical moot court and simulation training.',
  'Conduct policy-oriented legal research for courts, government, and academia.',
  'Develop analytical skills essential for legal and public administration careers.',
];

const PEO = [
  { code:'PEO1 · Integrated Learning',         v:'Develop expertise in humanities and legal education to understand the interplay between law, society, and governance.' },
  { code:'PEO2 · Critical Thinking',           v:'Build analytical, legal reasoning, and public policy skills for complex legal and governance challenges.' },
  { code:'PEO3 · Research & Advocacy',         v:'Strengthen legal research, drafting, and advocacy skills for courts and public institutions.' },
  { code:'PEO4 · Ethical Leadership',          v:'Promote constitutional values, professional ethics, and integrity in legal and public service practice.' },
  { code:'PEO5 · Diverse Career Opportunities',v:'Prepare graduates for careers in litigation, judiciary, civil services, NGOs, academia, and public policy.' },
];

export default function BALLBProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-ballbpd-inner{max-width:1280px;margin:0 auto}
        .cl-ballbpd-head{margin-bottom:48px}
        .cl-ballbpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-ballbpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-ballbpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-ballbpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-ballbpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-ballbpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-ballbpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-ballbpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-ballbpd-tab.active{background:#001F4C;color:#fff}
        .cl-ballbpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-ballbpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-ballbpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-ballbpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-ballbpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-ballbpd-point:last-child{border-bottom:none}
        .cl-ballbpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-ballbpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        @media(max-width:800px){.cl-ballbpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-ballbpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-ballbpd-sec" id="program-details">
        <div className="cl-ballbpd-inner">
          <div className="cl-ballbpd-head">
            <span className="cl-ballbpd-eyebrow">BA LL.B. (Hons.) · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-ballbpd-grid">
            <nav className="cl-ballbpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-ballbpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-ballbpd-content">
              {active==='usps'&&<>
                <div className="cl-ballbpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-ballbpd-point" key={i}><div className="cl-ballbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-ballbpd-ch"><div className="lbl">Course Outcomes</div><h3>Course Outcomes</h3></div>
                {CO.map((u,i)=><div className="cl-ballbpd-point" key={i}><div className="cl-ballbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='po'&&<>
                <div className="cl-ballbpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                {PO.map((u,i)=><div className="cl-ballbpd-point" key={i}><div className="cl-ballbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='pso'&&<>
                <div className="cl-ballbpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((u,i)=><div className="cl-ballbpd-point" key={i}><div className="cl-ballbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-ballbpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-ballbpd-point" key={i}><div className="cl-ballbpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
