'use client';

import BtechStudents from "../../components/BtechStudents";
import HiringPartnerBtech from "../../components/HiringPartnerBtech";

const ROLES = [
  { title:'Power Systems Engineer',          range:'₹4–8 LPA',  desc:'Design, operate, and maintain electrical power generation, transmission, and distribution systems across utilities, energy companies, and industrial plants.' },
  { title:'Electrical Design Engineer',      range:'₹4–8 LPA',  desc:'Create electrical schematics, layouts, and specifications for industrial systems, buildings, and infrastructure projects using modern CAD and simulation tools.' },
  { title:'Automation Engineer',             range:'₹4–9 LPA',  desc:'Design and implement PLC/SCADA-based industrial automation systems, drives, and control networks for manufacturing and process industries.' },
  { title:'Renewable Energy Engineer',       range:'₹4–9 LPA',  desc:'Develop and manage solar, wind, and hybrid renewable energy projects — from feasibility and design to commissioning and grid integration.' },
  { title:'Control Systems Engineer',        range:'₹4–8 LPA',  desc:'Design feedback control systems, servo drives, and embedded controllers for robotics, aerospace, and precision industrial applications.' },
  { title:'Electric Vehicle Systems Engineer',range:'₹5–10 LPA', desc:'Develop EV powertrain systems, battery management systems, and charging infrastructure for the fast-growing electric mobility sector.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',   dark:false },
  { val:'750+', label:'Recruiters',             dark:true  },
  { val:'100%', label:'Paid Internships',       dark:true  },
  { val:'2006', label:'Department Established', dark:true  },
];

const ROW1 = ['Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank','Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT','Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon'];
const ROW2 = ['Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)','Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes','MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India'];

export default function BTechEEECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeeco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-btecheeeco-wrap{max-width:1280px;margin:0 auto}

        .cl-btecheeeco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btecheeeco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheeeco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheeeco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btecheeeco-h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeeco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btecheeeco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-btecheeeco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-btecheeeco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btecheeeco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-btecheeeco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-btecheeeco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-btecheeeco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-btecheeeco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-btecheeeco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-btecheeeco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-btecheeeco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-btecheeeco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-btecheeeco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-btecheeeco-mq-head{text-align:center;margin-bottom:28px}
        .cl-btecheeeco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-btecheeeco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-btecheeeco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-btecheeeco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-btecheeeco-scroll 32s linear infinite}
        .cl-btecheeeco-mq-track.rev{animation-direction:reverse}
        .cl-btecheeeco-mq-wrap:hover .cl-btecheeeco-mq-track{animation-play-state:paused}
        @keyframes cl-btecheeeco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-btecheeeco-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-btecheeeco-grid{grid-template-columns:1fr 1fr}.cl-btecheeeco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btecheeeco-sec{padding:70px 5%}.cl-btecheeeco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheeeco-sec" id="careers">
        <div className="cl-btecheeeco-wrap">
          <div className="cl-btecheeeco-head">
            <div className="cl-btecheeeco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-btecheeeco-h2">Where This B.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-btecheeeco-sub">From power systems to electric vehicles — an EEE degree opens roles across energy, automation, and mobility industries.</p>
          </div>

          <div className="cl-btecheeeco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-btecheeeco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-btecheeeco-ach-val">{a.val}</div>
                <div className="cl-btecheeeco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-btecheeeco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-btecheeeco-card">
                <div className="cl-btecheeeco-card-top">
                  <div className="cl-btecheeeco-card-title">{r.title}</div>
                  <span className="cl-btecheeeco-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
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
