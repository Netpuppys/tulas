'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'HR Manager / HRBP',              range:'₹7–16 LPA' },
  { title:'Talent Acquisition Manager',     range:'₹8–18 LPA' },
  { title:'L&D Manager',                    range:'₹7–15 LPA' },
  { title:'Compensation & Benefits Analyst',range:'₹7–14 LPA' },
  { title:'HR Analytics Specialist',        range:'₹8–17 LPA' },
  { title:'Industrial Relations Manager',   range:'₹8–16 LPA' },
];

const ACH = [
  { num:'₹18 LPA', lbl:'Highest Indicative Range',    orange:true },
  { num:'3',       lbl:'Career Pathways',              orange:false },
  { num:'9',       lbl:'Certifications Across 2 Years',orange:false },
  { num:'2028',    lbl:'First Graduating Batch',       orange:false },
];

const SECTORS = [
  'IT & ITES Companies','Manufacturing Firms','BFSI','HR Consulting Firms',
  'Retail & FMCG','Startups & D2C','Staffing & Recruitment Firms','Healthcare Organisations',
];

export default function MBAHRMCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbahrmco-sec{padding:110px 7%;background:#fff}
        .cl-mbahrmco-wrap{max-width:1280px;margin:0 auto}
        .cl-mbahrmco-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbahrmco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbahrmco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbahrmco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbahrmco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbahrmco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbahrmco-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:50px}
        .cl-mbahrmco-role{border-radius:14px;padding:24px 20px;text-align:center;font-weight:700;font-size:.92rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbahrmco-role .range{display:block;margin-top:8px;font-size:.8rem;font-weight:800;color:#DF5400}

        .cl-mbahrmco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:70px}
        .cl-mbahrmco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbahrmco-ach-card .num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;display:block}
        .cl-mbahrmco-ach-card .lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85);display:block}

        .cl-mbahrmco-mq-head{text-align:center;margin-bottom:10px}
        .cl-mbahrmco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#001F4C;margin-bottom:10px;line-height:.95}
        .cl-mbahrmco-mq-head p{font-weight:300;color:#5a6a8a;font-size:.95rem}
        .cl-mbahrmco-mq-wrap{overflow:hidden;margin:20px 0}
        .cl-mbahrmco-mq-track{display:flex;gap:16px;width:max-content;animation:cl-mbahrmco-scroll 32s linear infinite}
        @keyframes cl-mbahrmco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbahrmco-mq-chip{min-width:200px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbahrmco-mq-note{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:900px){.cl-mbahrmco-roles{grid-template-columns:repeat(3,1fr)}.cl-mbahrmco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbahrmco-sec{padding:70px 5%}.cl-mbahrmco-roles{grid-template-columns:1fr 1fr}.cl-mbahrmco-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbahrmco-sec" id="careers">
        <div className="cl-mbahrmco-wrap">
          <div className="cl-mbahrmco-head">
            <div className="cl-mbahrmco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbahrmco-h2">Where This MBA<br/><em>Can Take You</em></h2>
            <p className="cl-mbahrmco-desc">Multiple pathways, not one — HR business partner roles, talent acquisition leadership, or an independent HR consulting practice.</p>
          </div>

          <div className="cl-mbahrmco-roles">
            {ROLES.map((r,i)=>(
              <div className="cl-mbahrmco-role" key={i}>
                {r.title}<span className="range">{r.range}</span>
              </div>
            ))}
          </div>

          <div className="cl-mbahrmco-ach">
            {ACH.map((a,i)=>(
              <div className="cl-mbahrmco-ach-card" key={i} style={{background:a.orange?'linear-gradient(135deg,#DF5400 0%,#c44900 100%)':'#001F4C'}}>
                <span className="num" style={{color:a.orange?'#fff':'#FFF3D7'}}>{a.num}</span>
                <span className="lbl">{a.lbl}</span>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                                                  
                              <BtechStudents/>

          {/* <div className="cl-mbahrmco-mq-head">
            <h3>Where Graduates<br/><em style={{color:'#DF5400'}}>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for HR and talent management talent — IT services, manufacturing, BFSI, and consulting.</p>
          </div>
          <div className="cl-mbahrmco-mq-wrap">
            <div className="cl-mbahrmco-mq-track">
              {[...SECTORS,...SECTORS].map((s,i)=>(
                <div className="cl-mbahrmco-mq-chip" key={i}>{s}</div>
              ))}
            </div>
          </div>
          <p className="cl-mbahrmco-mq-note">Indicative sectors, not confirmed recruiter commitments.</p> */}
        </div>
      </section>
    </>
  );
}
