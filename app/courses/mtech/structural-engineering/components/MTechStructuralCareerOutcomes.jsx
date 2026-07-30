'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  'Structural Engineer',
  'Project / Construction Manager',
  'Research Engineer / Academician',
  'Disaster Resilience Consultant',
  'Product Development / Simulation Engineer',
  'Government Sector Engineer',
  'Entrepreneur / Consultant',
];

const ACH = [
  { val:'₹29 LPA', lbl:'Highest Indicative\n(Metros)', orange:true  },
  { val:'100%',    lbl:'Placement\nAssistance',         orange:false },
  { val:'2 Years', lbl:'M.Tech\nProgramme',             orange:false },
  { val:'6',       lbl:'Core Structural\nDomains',      orange:false },
];

const MARQUEE = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM',
  'Tata','Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

export default function MTechStructuralCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-co-sec{padding:10px 7%;background:#fff;}
        .cl-mtse-co-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtse-co-head{text-align:center;max-width:860px;margin:0 auto 60px;}
        .cl-mtse-co-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtse-co-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtse-co-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:18px;}
        .cl-mtse-co-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-co-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtse-co-roles-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-mtse-co-roles-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px;}
        .cl-mtse-co-role{background:#f8f9fc;border:1.5px solid #e0e4ed;border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;color:#001F4C;line-height:1.4;}

        .cl-mtse-co-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:50px;}
        .cl-mtse-co-ach-card{border-radius:18px;padding:30px 20px;text-align:center;}
        .cl-mtse-co-ach-card.orange{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);}
        .cl-mtse-co-ach-card.navy{background:#001F4C;}
        .cl-mtse-co-ach-val{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;line-height:1;margin-bottom:8px;}
        .cl-mtse-co-ach-card.orange .cl-mtse-co-ach-val{color:#fff;}
        .cl-mtse-co-ach-card.navy  .cl-mtse-co-ach-val{color:#FFF3D7;}
        .cl-mtse-co-ach-lbl{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.85);white-space:pre-line;}

        .cl-mtse-co-mq-wrap{overflow:hidden;position:relative;margin:12px 0 32px;}
        .cl-mtse-co-mq-wrap::before,.cl-mtse-co-mq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
        .cl-mtse-co-mq-wrap::before{left:0;background:linear-gradient(90deg,#fff,transparent);}
        .cl-mtse-co-mq-wrap::after{right:0;background:linear-gradient(-90deg,#fff,transparent);}
        @keyframes cl-mtse-co-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .cl-mtse-co-mq-track{display:flex;gap:16px;width:max-content;animation:cl-mtse-co-scroll 32s linear infinite;}
        .cl-mtse-co-mq-item{white-space:nowrap;padding:12px 28px;border-radius:10px;font-weight:700;font-size:.84rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        .cl-mtse-co-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;}

        @media(max-width:900px){.cl-mtse-co-ach{grid-template-columns:repeat(2,1fr)}.cl-mtse-co-roles-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtse-co-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtse-co-sec" id="career-outcomes">
        <div className="cl-mtse-co-wrap">
          <div className="cl-mtse-co-head">
            <div className="cl-mtse-co-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mtse-co-h2">Where This M.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-mtse-co-sub">From structural design to disaster resilience consultancy — this degree opens routes across design firms, construction, and research.</p>
          </div>

          <div className="cl-mtse-co-roles-title">Roles Our Graduates Step Into</div>
          <div className="cl-mtse-co-roles-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mtse-co-role">{r}</div>
            ))}
          </div>

          <div className="cl-mtse-co-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mtse-co-ach-card ${a.orange?'orange':'navy'}`}>
                <div className="cl-mtse-co-ach-val">{a.val}</div>
                <div className="cl-mtse-co-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                                                                              
                                                <BtechStudents/>

          {/* <div className="cl-mtse-co-mq-wrap">
            <div className="cl-mtse-co-mq-track">
              {[...MARQUEE,...MARQUEE].map((m,i)=>(
                <span key={i} className="cl-mtse-co-mq-item">{m}</span>
              ))}
            </div>
          </div>

          <p className="cl-mtse-co-disclaimer">Source: Tulas Institute M.Tech Structural Engineering programme brief.</p> */}
        </div>
      </section>
    </>
  );
}
