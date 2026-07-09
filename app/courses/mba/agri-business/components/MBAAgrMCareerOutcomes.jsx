'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role:'Agribusiness Manager',        range:'₹7–15 LPA' },
  { role:'Agri Supply Chain Manager',   range:'₹7–16 LPA' },
  { role:'Agri Marketing Manager',      range:'₹6–14 LPA' },
  { role:'Rural Development Manager',   range:'₹6–13 LPA' },
  { role:'Agri Finance Analyst',        range:'₹7–14 LPA' },
  { role:'Farm Operations Manager',     range:'₹6–12 LPA' },
];

const ACH = [
  { num:'₹16 LPA', lbl:'Highest Indicative Range',      style:{background:'linear-gradient(135deg,#DF5400 0%,#c44900 100%)'} },
  { num:'3',        lbl:'Career Pathways',               style:{background:'#001F4C'} },
  { num:'9',        lbl:'Certifications Across 2 Years', style:{background:'#001F4C'} },
  { num:'2028',     lbl:'First Graduating Batch',        style:{background:'#001F4C'} },
];

const SECTORS = [
  'Agribusiness Corporates','Food Processing Companies','Agricultural Cooperatives','Agri-Tech Startups',
  'Seed & Fertiliser Companies','Rural Banking & NBFCs','Commodity Trading Firms','Agri Export Houses',
];

export default function MBAAgrMCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-co-sec{padding:110px 7%;background:#fff}
        .cl-mbaagrm-co-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-co-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbaagrm-co-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaagrm-co-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaagrm-co-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaagrm-co-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-co-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}
        .cl-mbaagrm-co-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:50px}
        .cl-mbaagrm-co-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbaagrm-co-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}
        .cl-mbaagrm-co-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-mbaagrm-co-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbaagrm-co-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-mbaagrm-co-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}
        .cl-mbaagrm-co-mhead{text-align:center;margin-bottom:10px}
        .cl-mbaagrm-co-mhead h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.6rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-mbaagrm-co-mhead h3 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-co-mhead p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-mbaagrm-co-mwrap{overflow:hidden;margin:20px 0}
        @keyframes cl-mbaagrm-co-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbaagrm-co-mtrack{display:flex;gap:16px;width:max-content;animation:cl-mbaagrm-co-scroll 32s linear infinite}
        .cl-mbaagrm-co-chip{min-width:210px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbaagrm-co-disc{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}
        @media(max-width:640px){.cl-mbaagrm-co-sec{padding:70px 5%}.cl-mbaagrm-co-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbaagrm-co-sec" id="careers">
        <div className="cl-mbaagrm-co-wrap">
          <div className="cl-mbaagrm-co-head">
            <div className="cl-mbaagrm-co-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbaagrm-co-h2">Where This MBA<br/><em>Can Take You</em></h2>
            <p className="cl-mbaagrm-co-desc">Multiple pathways, not one — agribusiness corporates, agri supply chain operations, or rural development leadership roles.</p>
          </div>
          <div className="cl-mbaagrm-co-grid">
            {CAREERS.map(c=>(
              <div key={c.role} className="cl-mbaagrm-co-item">
                {c.role}<span className="cl-mbaagrm-co-range">{c.range}</span>
              </div>
            ))}
          </div>
          <div className="cl-mbaagrm-co-ach">
            {ACH.map(a=>(
              <div key={a.num} className="cl-mbaagrm-co-ach-card" style={a.style}>
                <div className="cl-mbaagrm-co-ach-num">{a.num}</div>
                <div className="cl-mbaagrm-co-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

<HiringPartnerBtech/>
                                        
                    <BtechStudents/>

          {/* <div className="cl-mbaagrm-co-mhead">
            <h3>Where Graduates<br/><em>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for agri-business talent — agribusiness corporates, food processing, cooperatives, and agri-tech.</p>
          </div>
          <div className="cl-mbaagrm-co-mwrap">
            <div className="cl-mbaagrm-co-mtrack">
              {[...SECTORS,...SECTORS].map((s,i)=><div key={i} className="cl-mbaagrm-co-chip">{s}</div>)}
            </div>
          </div>
          <p className="cl-mbaagrm-co-disc">Indicative sectors, not confirmed recruiter commitments.</p> */}
        </div>
      </section>
    </>
  );
}
