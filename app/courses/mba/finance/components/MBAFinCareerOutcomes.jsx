'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'Financial Analyst',            range:'₹8–22 LPA' },
  { title:'Investment Banking Associate', range:'₹10–35 LPA' },
  { title:'Risk Manager',                 range:'₹9–20 LPA' },
  { title:'Portfolio Manager',            range:'₹10–25 LPA' },
  { title:'Corporate Finance Manager',    range:'₹9–20 LPA' },
  { title:'FinTech Analyst',              range:'₹8–18 LPA' },
];

const ACH = [
  { num:'₹35 LPA', lbl:'Highest Indicative Range',     orange:true },
  { num:'3',       lbl:'Career Pathways',               orange:false },
  { num:'9',       lbl:'Certifications Across 2 Years', orange:false },
  { num:'2028',    lbl:'First Graduating Batch',        orange:false },
];

const SECTORS = [
  'Banking & Financial Services','Investment Banking Firms','Insurance Companies','FinTech Startups',
  'Management Consulting','NBFCs','Corporate Treasury Teams','Wealth Management Firms',
];

export default function MBAFinCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinco-sec{padding:110px 7%;background:#fff}
        .cl-mbafinco-wrap{max-width:1280px;margin:0 auto}
        .cl-mbafinco-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbafinco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbafinco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbafinco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbafinco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbafinco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbafinco-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:50px}
        .cl-mbafinco-role{border-radius:14px;padding:24px 20px;text-align:center;font-weight:700;font-size:.92rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbafinco-role .range{display:block;margin-top:8px;font-size:.8rem;font-weight:800;color:#DF5400}

        .cl-mbafinco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:70px}
        .cl-mbafinco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbafinco-ach-card .num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;display:block}
        .cl-mbafinco-ach-card .lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85);display:block}

        .cl-mbafinco-mq-head{text-align:center;margin-bottom:10px}
        .cl-mbafinco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#001F4C;margin-bottom:10px;line-height:.95}
        .cl-mbafinco-mq-head p{font-weight:300;color:#5a6a8a;font-size:.95rem}
        .cl-mbafinco-mq-wrap{overflow:hidden;margin:20px 0}
        .cl-mbafinco-mq-track{display:flex;gap:16px;width:max-content;animation:cl-mbafinco-scroll 32s linear infinite}
        @keyframes cl-mbafinco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbafinco-mq-chip{min-width:210px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbafinco-mq-note{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:900px){.cl-mbafinco-roles{grid-template-columns:repeat(3,1fr)}.cl-mbafinco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbafinco-sec{padding:70px 5%}.cl-mbafinco-roles{grid-template-columns:1fr 1fr}.cl-mbafinco-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbafinco-sec" id="careers">
        <div className="cl-mbafinco-wrap">
          <div className="cl-mbafinco-head">
            <div className="cl-mbafinco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbafinco-h2">Where This MBA<br/><em>Can Take You</em></h2>
            <p className="cl-mbafinco-desc">Multiple pathways, not one — corporate finance teams, banking and financial services, or an independent advisory practice.</p>
          </div>

          <div className="cl-mbafinco-roles">
            {ROLES.map((r,i)=>(
              <div className="cl-mbafinco-role" key={i}>
                {r.title}<span className="range">{r.range}</span>
              </div>
            ))}
          </div>

          <div className="cl-mbafinco-ach">
            {ACH.map((a,i)=>(
              <div className="cl-mbafinco-ach-card" key={i} style={{background:a.orange?'linear-gradient(135deg,#DF5400 0%,#c44900 100%)':'#001F4C'}}>
                <span className="num" style={{color:a.orange?'#fff':'#FFF3D7'}}>{a.num}</span>
                <span className="lbl">{a.lbl}</span>
              </div>
            ))}
          </div>
          <HiringPartnerBtech/>
                                                            
                                        <BtechStudents/>

          {/* <div className="cl-mbafinco-mq-head">
            <h3>Where Graduates<br/><em style={{color:'#DF5400'}}>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for finance and investment talent — banking, consulting, FinTech, and corporate finance.</p>
          </div>
          <div className="cl-mbafinco-mq-wrap">
            <div className="cl-mbafinco-mq-track">
              {[...SECTORS,...SECTORS].map((s,i)=>(
                <div className="cl-mbafinco-mq-chip" key={i}>{s}</div>
              ))}
            </div>
          </div>
          <p className="cl-mbafinco-mq-note">Indicative sectors, not confirmed recruiter commitments.</p> */}
        </div>
      </section>
    </>
  );
}
