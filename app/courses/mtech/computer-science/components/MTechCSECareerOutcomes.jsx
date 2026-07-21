'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ACH = [
  { val:'₹60 LPA', lbl:'Highest\nPackage',        orange:true  },
  { val:'100%',    lbl:'Placement\nAssistance',    orange:false },
  { val:'500+',    lbl:'Recruiters\nOn Record',    orange:false },
  { val:'1000+',   lbl:'Internship\nOpportunities',orange:false },
];

const ROLES = [
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
  'Software Architect',
  'Cloud Solutions Architect',
  'Cyber Security Specialist',
  'MLOps Engineer',
  'Research Scientist',
];

const MARQUEE_A = [
  'Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank',
  'Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT',
  'Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon',
];

const MARQUEE_B = [
  'Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)',
  'Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes',
  'MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India',
];

export default function MTechCSECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-co-sec{padding:10px 7%;background:#f8f9fc;}
        .cl-mtcse-co-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-co-head{text-align:center;max-width:860px;margin:0 auto 60px;}
        .cl-mtcse-co-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtcse-co-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtcse-co-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:18px;}
        .cl-mtcse-co-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtcse-co-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtcse-co-roles-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-mtcse-co-roles-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px;}
        .cl-mtcse-co-role{background:#fff;border:1.5px solid #e0e4ed;border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.9rem;color:#001F4C;line-height:1.4;}

        .cl-mtcse-co-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:50px;}
        .cl-mtcse-co-ach-card{border-radius:18px;padding:30px 20px;text-align:center;}
        .cl-mtcse-co-ach-card.orange{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);}
        .cl-mtcse-co-ach-card.navy{background:#001F4C;}
        .cl-mtcse-co-ach-val{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;line-height:1;margin-bottom:8px;}
        .cl-mtcse-co-ach-card.orange .cl-mtcse-co-ach-val{color:#fff;}
        .cl-mtcse-co-ach-card.navy  .cl-mtcse-co-ach-val{color:#FFF3D7;}
        .cl-mtcse-co-ach-lbl{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.85);white-space:pre-line;}

        .cl-mtcse-co-mq-wrap{overflow:hidden;position:relative;margin:12px 0;}
        .cl-mtcse-co-mq-wrap::before,.cl-mtcse-co-mq-wrap::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
        .cl-mtcse-co-mq-wrap::before{left:0;background:linear-gradient(90deg,#f8f9fc,transparent);}
        .cl-mtcse-co-mq-wrap::after{right:0;background:linear-gradient(-90deg,#f8f9fc,transparent);}
        @keyframes cl-mtcse-co-fwd{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes cl-mtcse-co-rev{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
        .cl-mtcse-co-mq-track{display:flex;gap:16px;width:max-content;}
        .cl-mtcse-co-mq-track.fwd{animation:cl-mtcse-co-fwd 36s linear infinite;}
        .cl-mtcse-co-mq-track.rev{animation:cl-mtcse-co-rev 36s linear infinite;}
        .cl-mtcse-co-mq-item{white-space:nowrap;padding:12px 28px;border-radius:10px;font-weight:700;font-size:.84rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C;}

        .cl-mtcse-co-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:24px;}

        @media(max-width:900px){.cl-mtcse-co-ach{grid-template-columns:repeat(2,1fr)}.cl-mtcse-co-roles-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtcse-co-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtcse-co-sec" id="career-outcomes">
        <div className="cl-mtcse-co-wrap">
          <div className="cl-mtcse-co-head">
            <div className="cl-mtcse-co-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mtcse-co-h2">Where This M.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-mtcse-co-sub">Advanced technical, research, and leadership roles across industry, research organisations, startups, and academia.</p>
          </div>

          <div className="cl-mtcse-co-roles-title">Roles Our Graduates Step Into</div>
          <div className="cl-mtcse-co-roles-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mtcse-co-role">{r}</div>
            ))}
          </div>

          <div className="cl-mtcse-co-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mtcse-co-ach-card ${a.orange?'orange':'navy'}`}>
                <div className="cl-mtcse-co-ach-val">{a.val}</div>
                <div className="cl-mtcse-co-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>
          <HiringPartnerBtech/>
                                                          
                            <BtechStudents/>

          {/* <div className="cl-mtcse-co-mq-wrap">
            <div className="cl-mtcse-co-mq-track fwd">
              {[...MARQUEE_A,...MARQUEE_A].map((m,i)=>(
                <span key={i} className="cl-mtcse-co-mq-item">{m}</span>
              ))}
            </div>
          </div>
          <div className="cl-mtcse-co-mq-wrap">
            <div className="cl-mtcse-co-mq-track rev">
              {[...MARQUEE_B,...MARQUEE_B].map((m,i)=>(
                <span key={i} className="cl-mtcse-co-mq-item">{m}</span>
              ))}
            </div>
          </div>

          <p className="cl-mtcse-co-disclaimer">Placement figures as provided in the source programme brief — same as the B.Tech CSE recruiter network.</p> */}
        </div>
      </section>
    </>
  );
}
