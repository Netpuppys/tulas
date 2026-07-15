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
  'Moot Court Training.',
  'Court Visits & Legal Aid Clinics.',
  'Legal Research & Drafting.',
  'Internship Opportunities.',
  'Sessions by Legal Experts.',
  'Experiential Learning.',
  'Practice-Oriented Legal Education.',
];

const CO = [
  'Draft legal notices, petitions and agreements.',
  'Interpret judicial precedents and legal statutes.',
  'Conduct effective legal research.',
  'Analyse complex legal issues critically.',
  'Represent legal arguments confidently.',
  'Apply professional ethics in legal practice.',
  'Understand the functioning of courts and judicial institutions.',
  'Build a strong foundation for professional legal careers.',
];

const PO = [
  'Apply legal knowledge to solve real-world legal issues.',
  'Interpret constitutional, civil and criminal laws effectively.',
  'Conduct professional legal research and draft legal documents.',
  'Present persuasive arguments with confidence in legal settings.',
  'Demonstrate ethical and professional responsibility.',
  'Resolve disputes using negotiation, mediation and arbitration.',
  'Adapt to evolving legal and regulatory environments.',
];

const PSO = [
  'Develop expertise in Constitutional, Criminal, Civil and Corporate Law.',
  'Master legal drafting, documentation and case analysis.',
  'Build courtroom advocacy through moot courts and practical exercises.',
  'Understand dispute resolution through ADR mechanisms.',
  'Gain exposure to contemporary legal challenges and emerging legal domains.',
];

const PEO = [
  { code:'PEO1 · Strong Legal Foundation',       v:'Develop a comprehensive understanding of the Indian legal system, constitutional principles and judicial processes.' },
  { code:'PEO2 · Analytical & Advocacy Skills',  v:'Strengthen legal reasoning, critical thinking and courtroom advocacy through practical legal education.' },
  { code:'PEO3 · Research & Communication',       v:'Build expertise in legal research, drafting and persuasive communication for professional legal practice.' },
  { code:'PEO4 · Ethics & Social Responsibility', v:'Promote integrity, professional ethics and a commitment to justice and public welfare.' },
  { code:'PEO5 · Career Readiness',               v:'Prepare graduates for successful careers in litigation, judiciary, corporate law and legal consultancy.' },
];

export default function LLBProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-llbpd-inner{max-width:1280px;margin:0 auto}
        .cl-llbpd-head{margin-bottom:48px}
        .cl-llbpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-llbpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-llbpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-llbpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-llbpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-llbpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-llbpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-llbpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-llbpd-tab.active{background:#001F4C;color:#fff}
        .cl-llbpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-llbpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-llbpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-llbpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-llbpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-llbpd-point:last-child{border-bottom:none}
        .cl-llbpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-llbpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        @media(max-width:800px){.cl-llbpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-llbpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-llbpd-sec" id="program-details">
        <div className="cl-llbpd-inner">
          <div className="cl-llbpd-head">
            <span className="cl-llbpd-eyebrow">LL.B. · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-llbpd-grid">
            <nav className="cl-llbpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-llbpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-llbpd-content">
              {active==='usps'&&<>
                <div className="cl-llbpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-llbpd-point" key={i}><div className="cl-llbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-llbpd-ch"><div className="lbl">Course Outcomes</div><h3>Course Outcomes</h3></div>
                {CO.map((u,i)=><div className="cl-llbpd-point" key={i}><div className="cl-llbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='po'&&<>
                <div className="cl-llbpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                {PO.map((u,i)=><div className="cl-llbpd-point" key={i}><div className="cl-llbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='pso'&&<>
                <div className="cl-llbpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((u,i)=><div className="cl-llbpd-point" key={i}><div className="cl-llbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-llbpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-llbpd-point" key={i}><div className="cl-llbpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
