'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role:'Business Analyst',          range:'₹9–18 LPA' },
  { role:'Data Analyst',              range:'₹8–16 LPA' },
  { role:'Analytics Manager',         range:'₹9–25 LPA' },
  { role:'BI Consultant',             range:'₹9–20 LPA' },
  { role:'Data Strategy Associate',   range:'₹9–22 LPA' },
  { role:'Analytics Consultant',      range:'₹10–24 LPA' },
];

const ACH = [
  { num:'₹25 LPA', lbl:'Highest Indicative Range',       style:{background:'linear-gradient(135deg,#DF5400 0%,#c44900 100%)'} },
  { num:'3',        lbl:'Career Pathways',                style:{background:'#001F4C'} },
  { num:'9',        lbl:'Certifications Across 2 Years',  style:{background:'#001F4C'} },
  { num:'2028',     lbl:'First Graduating Batch',         style:{background:'#001F4C'} },
];

const SECTORS = [
  'Technology Companies','Analytics & Consulting Firms','Financial Services','E-Commerce Platforms',
  'BFSI','Market Research Firms','Retail Analytics Teams','Startups & D2C',
];

export default function MBABACareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabaco-sec{padding:110px 7%;background:#fff}
        .cl-mbabaco-wrap{max-width:1280px;margin:0 auto}

        .cl-mbabaco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbabaco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbabaco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbabaco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbabaco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabaco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbabaco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:50px}
        .cl-mbabaco-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbabaco-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        .cl-mbabaco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-mbabaco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbabaco-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-mbabaco-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}

        .cl-mbabaco-mhead{text-align:center;margin-bottom:10px}
        .cl-mbabaco-mhead h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.6rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-mbabaco-mhead h3 em{font-style:normal;color:#DF5400}
        .cl-mbabaco-mhead p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-mbabaco-mwrap{overflow:hidden;margin:20px 0}
        @keyframes cl-mbabaco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbabaco-mtrack{display:flex;gap:16px;width:max-content;animation:cl-mbabaco-scroll 32s linear infinite}
        .cl-mbabaco-chip{min-width:200px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbabaco-disc{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:640px){.cl-mbabaco-sec{padding:70px 5%}.cl-mbabaco-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbabaco-sec" id="careers">
        <div className="cl-mbabaco-wrap">
          <div className="cl-mbabaco-head">
            <div className="cl-mbabaco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbabaco-h2">Where This MBA<br/><em>Can Take You</em></h2>
            <p className="cl-mbabaco-desc">Multiple pathways, not one — analytics teams, business intelligence consulting, or a data strategy leadership track.</p>
          </div>
          <div className="cl-mbabaco-grid">
            {CAREERS.map(c=>(<div key={c.role} className="cl-mbabaco-item">{c.role}<span className="cl-mbabaco-range">{c.range}</span></div>))}
          </div>
          <div className="cl-mbabaco-ach">
            {ACH.map(a=>(<div key={a.num} className="cl-mbabaco-ach-card" style={a.style}><div className="cl-mbabaco-ach-num">{a.num}</div><div className="cl-mbabaco-ach-lbl">{a.lbl}</div></div>))}
          </div>

<HiringPartnerBtech/>
                              
          <BtechStudents/>

          {/* <div className="cl-mbabaco-mhead">
            <h3>Where Graduates<br/><em>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for business analytics talent — technology, consulting, financial services, and e-commerce.</p>
          </div>
          <div className="cl-mbabaco-mwrap">
            <div className="cl-mbabaco-mtrack">
              {[...SECTORS,...SECTORS].map((s,i)=>(<div key={i} className="cl-mbabaco-chip">{s}</div>))}
            </div>
          </div>
          <p className="cl-mbabaco-disc">Indicative sectors, not confirmed recruiter commitments.</p> */}
        </div>
      </section>
    </>
  );
}
