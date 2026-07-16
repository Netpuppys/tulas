'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'Advocate',               range:'₹3–8 LPA',    desc:'Represent clients in courts of law — from district courts to high courts — in civil, criminal, and constitutional matters.' },
  { title:'Policy Analyst',         range:'₹4–9 LPA',    desc:'Analyse legislation, draft policy papers, and advise government bodies, think tanks, and NGOs on public policy and governance.' },
  { title:'Civil Services Aspirant',range:'Govt. Grade',  desc:'Leverage a strong foundation in constitutional law, public policy, and governance for UPSC and state civil services examinations.' },
  { title:'Human Rights Advocate',  range:'₹3–8 LPA',    desc:'Work with human rights organisations, commissions, and international bodies to protect and promote fundamental rights.' },
  { title:'NGO Legal Officer',       range:'₹3–7 LPA',    desc:"Provide legal support to non-governmental organisations working in areas of human rights, environment, labour, and social justice." },
  { title:'Academician / Researcher',range:'₹4–8 LPA',   desc:'Pursue teaching and research careers in law schools, universities, and policy research institutions across India and globally.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance', dark:false },
  { val:'750+', label:'Recruiters',           dark:true  },
  { val:'BCI',  label:'Approved Programme',   dark:true  },
  { val:'20+',  label:'Core Legal Domains Covered', dark:true },
];

const ROW1 = ['Law Firms','Judiciary & Courts','Government & Civil Services','NGOs & Human Rights Orgs','Policy Think Tanks','Legal Consultancies','Academic Institutions','International Organizations'];
const ROW2 = ['Legal Aid Societies','Public Prosecutor Offices','Human Rights Commissions','Environmental Regulatory Bodies','Media & Legal Journalism','NHRC & State Commissions','UN & Multilateral Bodies','Civil Society Organizations'];

export default function BALLBCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-ballbco-wrap{max-width:1280px;margin:0 auto}

        .cl-ballbco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-ballbco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-ballbco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-ballbco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-ballbco-h2 em{font-style:normal;color:#DF5400}
        .cl-ballbco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-ballbco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-ballbco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-ballbco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-ballbco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-ballbco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-ballbco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-ballbco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-ballbco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-ballbco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-ballbco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-ballbco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-ballbco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-ballbco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-ballbco-mq-head{text-align:center;margin-bottom:28px}
        .cl-ballbco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-ballbco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-ballbco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-ballbco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-ballbco-scroll 32s linear infinite}
        .cl-ballbco-mq-track.rev{animation-direction:reverse}
        .cl-ballbco-mq-wrap:hover .cl-ballbco-mq-track{animation-play-state:paused}
        @keyframes cl-ballbco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-ballbco-mq-chip{min-width:220px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-ballbco-grid{grid-template-columns:1fr 1fr}.cl-ballbco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-ballbco-sec{padding:70px 5%}.cl-ballbco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-ballbco-sec" id="careers">
        <div className="cl-ballbco-wrap">
          <div className="cl-ballbco-head">
            <div className="cl-ballbco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-ballbco-h2">Where This Degree<br/><em>Can Take You</em></h2>
            <p className="cl-ballbco-sub">From advocacy to civil services — a BA LL.B.  opens careers across courts, government, policy, academia, and human rights organisations.</p>
          </div>

          <div className="cl-ballbco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-ballbco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-ballbco-ach-val">{a.val}</div>
                <div className="cl-ballbco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-ballbco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-ballbco-card">
                <div className="cl-ballbco-card-top">
                  <div className="cl-ballbco-card-title">{r.title}</div>
                  <span className="cl-ballbco-range">{r.range}</span>
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
