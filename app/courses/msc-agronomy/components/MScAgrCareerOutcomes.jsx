'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ACH = [
  { val:'100%', lbl:'Placement\nAssistance',      light:true  },
  { val:'750+', lbl:'Recruiters\nOn Record',       light:false },
  { val:'2 Yrs', lbl:'PG Programme\nDuration',    light:false },
  { val:'6',    lbl:'Core Agronomy\nDomains',      light:false },
];

const ROLES = [
  'Agricultural Analyst',
  'Farming Consultant',
  'Agronomy Officer',
  'Subject Matter Specialist',
  'Corporate Agronomist',
  'Soil Scientist',
  'Area Sales Manager',
  'Green House Operations Manager',
];

const MARQUEE = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM',
  'Tata','Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

export default function MScAgrCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagrco-sec{padding:10px 7%;background:#f8f9fc;}
        .cl-mscagrco-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagrco-head{text-align:center;max-width:860px;margin:0 auto 60px;}
        .cl-mscagrco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mscagrco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mscagrco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:18px;}
        .cl-mscagrco-h2 em{font-style:normal;color:#DF5400;}
        .cl-mscagrco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mscagrco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px;}
        .cl-mscagrco-ach-card{border-radius:18px;padding:32px 24px;text-align:center;}
        .cl-mscagrco-ach-card.light{background:#FFF3D7;border:1.5px solid #f5d98a;}
        .cl-mscagrco-ach-card.dark{background:#001F4C;}
        .cl-mscagrco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3rem;line-height:1;}
        .cl-mscagrco-ach-card.light .cl-mscagrco-ach-val{color:#DF5400;}
        .cl-mscagrco-ach-card.dark  .cl-mscagrco-ach-val{color:#FFF3D7;}
        .cl-mscagrco-ach-lbl{font-size:.82rem;font-weight:700;line-height:1.5;margin-top:8px;white-space:pre-line;}
        .cl-mscagrco-ach-card.light .cl-mscagrco-ach-lbl{color:#001F4C;}
        .cl-mscagrco-ach-card.dark  .cl-mscagrco-ach-lbl{color:rgba(255,255,255,.82);}

        .cl-mscagrco-roles-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-mscagrco-roles-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:60px;}
        .cl-mscagrco-role{background:#fff;border:1.5px solid #e0e4ed;border-radius:14px;padding:24px 18px;text-align:center;font-weight:700;font-size:.95rem;color:#001F4C;line-height:1.4;}

        .cl-mscagrco-mq-wrap{overflow:hidden;position:relative;margin-bottom:40px;}
        .cl-mscagrco-mq-wrap::before,.cl-mscagrco-mq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
        .cl-mscagrco-mq-wrap::before{left:0;background:linear-gradient(90deg,#f8f9fc,transparent);}
        .cl-mscagrco-mq-wrap::after{right:0;background:linear-gradient(-90deg,#f8f9fc,transparent);}
        @keyframes cl-mscagrco-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .cl-mscagrco-mq-track{display:flex;gap:24px;width:max-content;animation:cl-mscagrco-scroll 28s linear infinite;}
        .cl-mscagrco-mq-item{white-space:nowrap;padding:12px 28px;border-radius:10px;font-weight:700;font-size:.9rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C;}

        .cl-mscagrco-disclaimer{text-align:center;max-width:820px;margin:0 auto;font-size:.82rem;line-height:1.7;color:#8a9ab8;}
        .cl-mscagrco-disclaimer strong{color:#001F4C;}

        @media(max-width:900px){.cl-mscagrco-ach{grid-template-columns:repeat(2,1fr)}.cl-mscagrco-roles-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mscagrco-sec{padding:70px 5%}.cl-mscagrco-roles-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mscagrco-sec" id="career-outcomes">
        <div className="cl-mscagrco-wrap">
          <div className="cl-mscagrco-head">
            <div className="cl-mscagrco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mscagrco-h2">Where Our Graduates<br/><em>Make Their Mark</em></h2>
            <p className="cl-mscagrco-sub">M.Sc. Agronomy graduates are sought after across agriculture, research, agribusiness, and allied sectors — backed by dedicated placement support throughout the programme.</p>
          </div>

          <div className="cl-mscagrco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mscagrco-ach-card ${a.light?'light':'dark'}`}>
                <div className="cl-mscagrco-ach-val">{a.val}</div>
                <div className="cl-mscagrco-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

         <HiringPartnerBtech/>
                                                
                  <BtechStudents/>
        </div>
      </section>
    </>
  );
}
