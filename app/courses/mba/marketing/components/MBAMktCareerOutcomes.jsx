'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role:'Marketing Manager',        range:'₹8–18 LPA' },
  { role:'Brand Manager',            range:'₹8–20 LPA' },
  { role:'Product Manager',          range:'₹8–16 LPA' },
  { role:'Market Research Analyst',  range:'₹6–12 LPA' },
  { role:'Sales Manager',            range:'₹7–15 LPA' },
  { role:'Retail Manager',           range:'₹6–14 LPA' },
];

const ACH = [
  { num:'₹20 LPA', lbl:'Highest Indicative Range',       style:{background:'linear-gradient(135deg,#DF5400 0%,#c44900 100%)'} },
  { num:'3',        lbl:'Career Pathways',                style:{background:'#001F4C'} },
  { num:'9',        lbl:'Certifications Across 2 Years',  style:{background:'#001F4C'} },
  { num:'2028',     lbl:'First Graduating Batch',         style:{background:'#001F4C'} },
];

const SECTORS = [
  'FMCG & Consumer Brands','Retail Chains','Marketing Agencies','E-Commerce Platforms',
  'D2C & Startups','Management Consulting','Media & Entertainment','Market Research Firms',
];

export default function MBAMktCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbamktco-sec{padding:110px 7%;background:#fff}
        .cl-mbamktco-wrap{max-width:1280px;margin:0 auto}

        .cl-mbamktco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbamktco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbamktco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbamktco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbamktco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbamktco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbamktco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:50px}
        .cl-mbamktco-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbamktco-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        .cl-mbamktco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-mbamktco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbamktco-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-mbamktco-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}

        .cl-mbamktco-mhead{text-align:center;margin-bottom:10px}
        .cl-mbamktco-mhead h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.6rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-mbamktco-mhead h3 em{font-style:normal;color:#DF5400}
        .cl-mbamktco-mhead p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-mbamktco-mwrap{overflow:hidden;margin:20px 0}
        @keyframes cl-mbamktco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbamktco-mtrack{display:flex;gap:16px;width:max-content;animation:cl-mbamktco-scroll 32s linear infinite}
        .cl-mbamktco-chip{min-width:200px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbamktco-disc{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:640px){.cl-mbamktco-sec{padding:70px 5%}.cl-mbamktco-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbamktco-sec" id="careers">
        <div className="cl-mbamktco-wrap">
          <div className="cl-mbamktco-head">
            <div className="cl-mbamktco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbamktco-h2">Where This MBA<br/><em>Can Take You</em></h2>
            <p className="cl-mbamktco-desc">Multiple pathways, not one — brand teams, retail and sales leadership, or marketing consulting practice.</p>
          </div>
          <div className="cl-mbamktco-grid">
            {CAREERS.map(c=>(<div key={c.role} className="cl-mbamktco-item">{c.role}<span className="cl-mbamktco-range">{c.range}</span></div>))}
          </div>
          <div className="cl-mbamktco-ach">
            {ACH.map(a=>(<div key={a.num} className="cl-mbamktco-ach-card" style={a.style}><div className="cl-mbamktco-ach-num">{a.num}</div><div className="cl-mbamktco-ach-lbl">{a.lbl}</div></div>))}
          </div>

          <HiringPartnerBtech/>
                                        
                    <BtechStudents/>
          {/* <div className="cl-mbamktco-mhead">
            <h3>Where Graduates<br/><em>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for marketing and brand management talent — FMCG, retail, agencies, and consulting.</p>
          </div>
          <div className="cl-mbamktco-mwrap">
            <div className="cl-mbamktco-mtrack">
              {[...SECTORS,...SECTORS].map((s,i)=>(<div key={i} className="cl-mbamktco-chip">{s}</div>))}
            </div>
          </div>
          <p className="cl-mbamktco-disc">Indicative sectors, not confirmed recruiter commitments.</p> */}
        </div>
      </section>
    </>
  );
}
