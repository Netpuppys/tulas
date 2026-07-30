'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ACH = [
  { val:'100%',   lbl:'Placement\nAssistance',      orange:true  },
  { val:'1000+',  lbl:'Internship\nOpportunities',  orange:false },
  { val:'2 Years',lbl:'M.Tech\nProgramme',          orange:false },
  { val:'6',      lbl:'Core Thermal\nDomains',      orange:false },
];

const ROLES = [
  'Advanced Thermal Systems Engineer',
  'CFD & Multiphysics Simulation Engineer',
  'Energy Efficiency & Sustainability Engineer',
  'Renewable Energy Systems Engineer',
  'Smart HVAC & Building Energy Engineer',
  'EV Thermal Management Engineer',
  'Aerospace Thermal Engineer',
  'Research Scientist (Thermal & Energy Systems)',
];

const MARQUEE = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM',
  'Tata','Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

export default function MTechThermalCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-co-sec{padding:10px 7%;background:#f8f9fc;}
        .cl-mtte-co-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-co-head{text-align:center;max-width:860px;margin:0 auto 60px;}
        .cl-mtte-co-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtte-co-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtte-co-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:18px;}
        .cl-mtte-co-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtte-co-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtte-co-roles-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-mtte-co-roles-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px;}
        .cl-mtte-co-role{background:#fff;border:1.5px solid #e0e4ed;border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;color:#001F4C;line-height:1.4;}

        .cl-mtte-co-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:50px;}
        .cl-mtte-co-ach-card{border-radius:18px;padding:30px 20px;text-align:center;}
        .cl-mtte-co-ach-card.orange{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);}
        .cl-mtte-co-ach-card.navy{background:#001F4C;}
        .cl-mtte-co-ach-val{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;line-height:1;margin-bottom:8px;}
        .cl-mtte-co-ach-card.orange .cl-mtte-co-ach-val{color:#fff;}
        .cl-mtte-co-ach-card.navy  .cl-mtte-co-ach-val{color:#FFF3D7;}
        .cl-mtte-co-ach-lbl{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.85);white-space:pre-line;}

        .cl-mtte-co-mq-wrap{overflow:hidden;position:relative;margin:12px 0 32px;}
        .cl-mtte-co-mq-wrap::before,.cl-mtte-co-mq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
        .cl-mtte-co-mq-wrap::before{left:0;background:linear-gradient(90deg,#f8f9fc,transparent);}
        .cl-mtte-co-mq-wrap::after{right:0;background:linear-gradient(-90deg,#f8f9fc,transparent);}
        @keyframes cl-mtte-co-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .cl-mtte-co-mq-track{display:flex;gap:16px;width:max-content;animation:cl-mtte-co-scroll 32s linear infinite;}
        .cl-mtte-co-mq-item{white-space:nowrap;padding:12px 28px;border-radius:10px;font-weight:700;font-size:.84rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C;}

        .cl-mtte-co-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;}

        @media(max-width:900px){.cl-mtte-co-ach{grid-template-columns:repeat(2,1fr)}.cl-mtte-co-roles-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtte-co-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtte-co-sec" id="career-outcomes">
        <div className="cl-mtte-co-wrap">
          <div className="cl-mtte-co-head">
            <div className="cl-mtte-co-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mtte-co-h2">Transforming Thermal Engineers<br/><em>Into Global Energy Leaders</em></h2>
            <p className="cl-mtte-co-sub">Advanced technical expertise, research excellence, and leadership capabilities for careers in clean energy, advanced manufacturing, and sustainable technologies.</p>
          </div>

          <div className="cl-mtte-co-roles-title">Roles Our Graduates Step Into</div>
          <div className="cl-mtte-co-roles-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mtte-co-role">{r}</div>
            ))}
          </div>

          <div className="cl-mtte-co-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mtte-co-ach-card ${a.orange?'orange':'navy'}`}>
                <div className="cl-mtte-co-ach-val">{a.val}</div>
                <div className="cl-mtte-co-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

           <HiringPartnerBtech/>
                                                                    
                                      <BtechStudents/>

          {/* <div className="cl-mtte-co-mq-wrap">
            <div className="cl-mtte-co-mq-track">
              {[...MARQUEE,...MARQUEE].map((m,i)=>(
                <span key={i} className="cl-mtte-co-mq-item">{m}</span>
              ))}
            </div>
          </div>

          <p className="cl-mtte-co-disclaimer">Source: Tulas Institute M.Tech Thermal Engineering programme brief.</p> */}
        </div>
      </section>
    </>
  );
}
