'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";
const ROLES = [
  'Junior Software Developer','Web Developer','Network Administrator','Database Administrator',
  'IT Support Engineer','QA/Software Tester','App Developer','B.Tech (Lateral Entry)',
];

const ACH = [
  { val:'100%',   lbl:'Placement Assistance', gradient:'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' },
  { val:'750+',   lbl:'Recruiters',            gradient:'#001F4C' },
  { val:'3 Years',lbl:'Diploma Programme',     gradient:'#001F4C' },
  { val:'2 Years',lbl:'Lateral Entry to B.Tech',gradient:'#001F4C' },
];

const MARQUEE = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM','Tata','Samsung',
  'ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

export default function DiplomaCsECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-co-sec{padding:10px 7%;background:#fff;}
        .cl-dipcse-co-wrap{max-width:1280px;margin:0 auto;}

        /* section head */
        .cl-dipcse-co-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-dipcse-co-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipcse-co-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipcse-co-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipcse-co-head h2 em{font-style:normal;color:#DF5400;}
        .cl-dipcse-co-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        /* career grid — simple centered items */
        .cl-dipcse-co-career-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px;}
        .cl-dipcse-co-career-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        /* achievements */
        .cl-dipcse-co-ach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px;}
        .cl-dipcse-co-ach-card{border-radius:18px;padding:30px 20px;text-align:center;}
        .cl-dipcse-co-ach-card .num{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;margin-bottom:8px;color:#fff;}
        .cl-dipcse-co-ach-card .lbl{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.85);}

        /* marquee section */
        .cl-dipcse-co-marquee-sec{padding:60px 0 0;}
        .cl-dipcse-co-marquee-h2{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;margin-bottom:10px;line-height:.95;}
        .cl-dipcse-co-marquee-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipcse-co-marquee-sub{text-align:center;font-weight:300;color:#5a6a8a;margin-bottom:32px;font-size:1rem;}
        .cl-dipcse-co-marquee-wrap{overflow:hidden;margin:20px 0;}
        .cl-dipcse-co-marquee-track{display:flex;gap:16px;width:max-content;animation:cl-dipcse-co-scroll 40s linear infinite;}
        @keyframes cl-dipcse-co-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        .cl-dipcse-co-marquee-chip{min-width:170px;height:70px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.84rem;color:#001F4C;text-align:center;padding:0 14px;}
        .cl-dipcse-co-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px;}

        @media(max-width:900px){.cl-dipcse-co-career-grid{grid-template-columns:repeat(3,1fr)}.cl-dipcse-co-ach-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-dipcse-co-career-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipcse-co-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipcse-co-sec" id="careers">
        <div className="cl-dipcse-co-wrap">

          <div className="cl-dipcse-co-head">
            <div className="cl-dipcse-co-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2>Where This Diploma<br/><em>Can Take You</em></h2>
            <p>From software development to network administration — this diploma opens direct routes into the IT industry.</p>
          </div>

          {/* Career roles — simple centered text */}
          <div className="cl-dipcse-co-career-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-dipcse-co-career-item">{r}</div>
            ))}
          </div>

          {/* Achievement cards */}
          <div className="cl-dipcse-co-ach-grid">
            {ACH.map((a,i)=>(
              <div key={i} className="cl-dipcse-co-ach-card" style={{background:a.gradient}}>
                <div className="num">{a.val}</div>
                <div className="lbl">{a.lbl}</div>
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
