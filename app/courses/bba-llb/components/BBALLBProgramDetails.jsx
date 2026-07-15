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
  'Business + Law Integrated Curriculum.',
  'Corporate Law & Compliance Focus.',
  'Moot Court Training.',
  'Legal Research & Drafting.',
  'Internship Opportunities.',
  'Industry Expert Sessions.',
  'Career Pathways in Corporate Law & Business Advisory.',
];

const CO = [
  'Draft business contracts and commercial agreements.',
  'Interpret corporate laws and regulatory frameworks.',
  'Advise organisations on legal compliance.',
  'Analyse commercial legal disputes.',
  'Conduct legal due diligence.',
  'Apply negotiation and arbitration techniques.',
  'Build careers in corporate law, compliance and business consulting.',
];

const PO = [
  'Apply legal and business principles to organisational challenges.',
  'Understand corporate governance and regulatory compliance.',
  'Conduct legal research for business environments.',
  'Draft commercial contracts and legal agreements.',
  'Demonstrate negotiation and dispute resolution skills.',
  'Apply ethical decision-making in business and legal contexts.',
  'Adapt to evolving corporate legal frameworks.',
];

const PSO = [
  'Develop expertise in Corporate Law, Business Law and Commercial Regulations.',
  'Build contract drafting and compliance management skills.',
  'Understand taxation, mergers, acquisitions and corporate governance.',
  'Strengthen negotiation and alternative dispute resolution abilities.',
  'Prepare for legal leadership roles in the corporate sector.',
];

const PEO = [
  { code:'PEO1 · Business & Law Integration',  v:'Develop expertise in business management alongside legal education to address modern corporate challenges.' },
  { code:'PEO2 · Corporate Legal Skills',       v:'Build analytical, commercial and legal reasoning abilities for corporate decision-making.' },
  { code:'PEO3 · Professional Competence',      v:'Strengthen legal drafting, negotiation and compliance management skills.' },
  { code:'PEO4 · Ethical Business Leadership',  v:'Promote integrity, corporate governance and ethical legal practices.' },
  { code:'PEO5 · Industry Readiness',           v:'Prepare graduates for careers in corporate law, compliance, taxation and business consultancy.' },
];

export default function BBALLBProgramDetails() {
  const [active, setActive] = useState('usps');
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllbpd-sec{background:#f8f9fc;padding:110px 7%}
        .cl-bbllbpd-inner{max-width:1280px;margin:0 auto}
        .cl-bbllbpd-head{margin-bottom:48px}
        .cl-bbllbpd-eyebrow{display:inline-block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:6px 14px;border-radius:20px;background:#FFF3D7;color:#DF5400;margin-bottom:14px}
        .cl-bbllbpd-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);color:#001F4C;line-height:.92}
        .cl-bbllbpd-head h2 em{font-style:normal;color:#DF5400}
        .cl-bbllbpd-grid{display:grid;grid-template-columns:260px 1fr;gap:40px}
        .cl-bbllbpd-nav{display:flex;flex-direction:column;gap:4px}
        .cl-bbllbpd-tab{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;font-weight:700;font-size:.94rem;color:#001F4C;cursor:pointer;background:transparent;border:none;text-align:left;width:100%;transition:background .2s}
        .cl-bbllbpd-tab:hover{background:rgba(0,31,76,.05)}
        .cl-bbllbpd-tab .num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;background:#FFF3D7;color:#DF5400;flex-shrink:0;transition:background .2s,color .2s}
        .cl-bbllbpd-tab.active{background:#001F4C;color:#fff}
        .cl-bbllbpd-tab.active .num{background:rgba(255,255,255,.18);color:#fff}
        .cl-bbllbpd-content{background:#fff;border-radius:16px;border:1px solid #e0e4ed;padding:32px;min-height:420px}
        .cl-bbllbpd-ch .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DF5400;margin-bottom:8px}
        .cl-bbllbpd-ch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.9rem,3.5vw,2.6rem);color:#001F4C;line-height:.95;margin:0 0 24px}
        .cl-bbllbpd-point{display:flex;gap:14px;padding:16px 4px;border-bottom:1px solid #e0e4ed}
        .cl-bbllbpd-point:last-child{border-bottom:none}
        .cl-bbllbpd-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0;margin-top:8px}
        .cl-bbllbpd-point p{font-size:.92rem;line-height:1.75;color:#4a5a7a;margin:0}
        @media(max-width:800px){.cl-bbllbpd-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bbllbpd-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bbllbpd-sec" id="program-details">
        <div className="cl-bbllbpd-inner">
          <div className="cl-bbllbpd-head">
            <span className="cl-bbllbpd-eyebrow">BBA LL.B. (Hons.) · Academic Framework</span>
            <h2>Program <em>Details</em></h2>
          </div>
          <div className="cl-bbllbpd-grid">
            <nav className="cl-bbllbpd-nav">
              {TABS.map((t,i)=>(
                <button key={t.id} className={`cl-bbllbpd-tab${active===t.id?' active':''}`} onClick={()=>setActive(t.id)}>
                  <span className="num">0{i+1}</span>{t.label}
                </button>
              ))}
            </nav>
            <div className="cl-bbllbpd-content">
              {active==='usps'&&<>
                <div className="cl-bbllbpd-ch"><div className="lbl">Unique Selling Points</div><h3>USPs</h3></div>
                {USPS.map((u,i)=><div className="cl-bbllbpd-point" key={i}><div className="cl-bbllbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='co'&&<>
                <div className="cl-bbllbpd-ch"><div className="lbl">Course Outcomes</div><h3>Course Outcomes</h3></div>
                {CO.map((u,i)=><div className="cl-bbllbpd-point" key={i}><div className="cl-bbllbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='po'&&<>
                <div className="cl-bbllbpd-ch"><div className="lbl">Programme Outcomes</div><h3>Program Outcomes</h3></div>
                {PO.map((u,i)=><div className="cl-bbllbpd-point" key={i}><div className="cl-bbllbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='pso'&&<>
                <div className="cl-bbllbpd-ch"><div className="lbl">Programme Specific Outcomes</div><h3>Program Specific Outcomes</h3></div>
                {PSO.map((u,i)=><div className="cl-bbllbpd-point" key={i}><div className="cl-bbllbpd-dot"/><p>{u}</p></div>)}
              </>}
              {active==='peo'&&<>
                <div className="cl-bbllbpd-ch"><div className="lbl">Programme Educational Objectives</div><h3>Program Educational Objectives</h3></div>
                {PEO.map((r,i)=><div className="cl-bbllbpd-point" key={i}><div className="cl-bbllbpd-dot"/><p><strong style={{color:'#001F4C'}}>{r.code}</strong> — {r.v}</p></div>)}
              </>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
