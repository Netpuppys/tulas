'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'AI / ML Engineer',
  'Data Analyst',
  'Cloud Engineer',
  'Cyber Security Analyst',
  'DevOps Engineer',
  'Research Associate',
];

const ACH = [
  { val:'100%', label:'Placement Assistance', dark:false },
  { val:'750+', label:'Recruiters',           dark:true  },
  { val:'3',    label:'Specialisation Pathways', dark:true },
  { val:'PG',   label:'Postgraduate Degree',  dark:true  },
];

const ROW1 = ['Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank','Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT','Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon','Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank','Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT','Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon'];
const ROW2 = ['Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)','Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes','MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India','Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)','Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes','MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India'];

export default function MCAGCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-mcagco-wrap{max-width:1280px;margin:0 auto}

        .cl-mcagco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mcagco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mcagco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mcagco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mcagco-h2 em{font-style:normal;color:#DF5400}
        .cl-mcagco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mcagco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:52px}
        .cl-mcagco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-mcagco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mcagco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-mcagco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-mcagco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-mcagco-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:72px}
        .cl-mcagco-item{border-radius:14px;padding:22px 14px;text-align:center;font-weight:700;font-size:.9rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C;transition:border-color .2s,transform .2s}
        .cl-mcagco-item:hover{border-color:#001F4C;transform:translateY(-3px)}

        .cl-mcagco-mq-head{text-align:center;margin-bottom:28px}
        .cl-mcagco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-mcagco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-mcagco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-mcagco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-mcagco-scroll 32s linear infinite}
        .cl-mcagco-mq-track.rev{animation-direction:reverse}
        .cl-mcagco-mq-wrap:hover .cl-mcagco-mq-track{animation-play-state:paused}
        @keyframes cl-mcagco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mcagco-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-mcagco-grid{grid-template-columns:repeat(3,1fr)}.cl-mcagco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-mcagco-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcagco-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcagco-sec" id="careers">
        <div className="cl-mcagco-wrap">
          <div className="cl-mcagco-head">
            <div className="cl-mcagco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mcagco-h2">Where This MCA<br/><em>Can Take You</em></h2>
            <p className="cl-mcagco-sub">An advanced computing degree opening careers across every major technology function — from software engineering and AI to cloud, security, and research.</p>
          </div>

          <div className="cl-mcagco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mcagco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-mcagco-ach-val">{a.val}</div>
                <div className="cl-mcagco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-mcagco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mcagco-item">{r}</div>
            ))}
          </div>

     <HiringPartnerBtech/>
                                   
                                           <BtechStudents/>
        </div>
      </section>
    </>
  );
}
