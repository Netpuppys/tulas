'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'Advocate',              range:'₹3–8 LPA',   desc:'Build a practice in criminal, civil, or family law — representing clients before district courts, High Courts, or the Supreme Court of India.' },
  { title:'Corporate Lawyer',      range:'₹5–12 LPA',  desc:"Advise businesses on legal matters including contracts, mergers, compliance, and commercial transactions in India's growing corporate sector." },
  { title:'Legal Consultant',      range:'₹4–10 LPA',  desc:'Provide specialist legal advice to organisations, government bodies, or individuals on regulatory, compliance, and risk-management matters.' },
  { title:'Public Prosecutor',     range:'Govt. Grade', desc:'Represent the state in criminal proceedings — upholding public interest through the criminal justice system in district courts and higher.' },
  { title:'Legal Researcher',      range:'₹3–6 LPA',   desc:'Conduct in-depth legal research, case law analysis, and policy drafting for law firms, NGOs, think tanks, or judicial institutions.' },
  { title:'Arbitration Specialist',range:'₹5–10 LPA',  desc:'Resolve complex commercial and civil disputes as a mediator, arbitrator, or legal representative in ADR proceedings.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',      dark:false },
  { val:'750+', label:'Recruiters',                dark:true  },
  { val:'BCI',  label:'Approved Programme',        dark:true  },
  { val:'20+',  label:'Core Legal Domains Covered',dark:true  },
];

const ROW1 = ['Law Firms','Corporate Legal Departments','Judiciary & Courts','Government & Civil Services','NGOs & Human Rights Orgs','Legal Consultancies','Media & Legal Journalism','Policy Think Tanks'];
const ROW2 = ['Public Sector Undertakings','Legal Aid Societies','NHRC & Commissions','Arbitration Centres','Law Schools & Institutions','International Organizations','Public Prosecutor Offices','Financial Regulatory Bodies'];

export default function LLBCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-llbco-wrap{max-width:1280px;margin:0 auto}

        .cl-llbco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-llbco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-llbco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-llbco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-llbco-h2 em{font-style:normal;color:#DF5400}
        .cl-llbco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-llbco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-llbco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-llbco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-llbco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-llbco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-llbco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-llbco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-llbco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-llbco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-llbco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-llbco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-llbco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-llbco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-llbco-mq-head{text-align:center;margin-bottom:28px}
        .cl-llbco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-llbco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-llbco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-llbco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-llbco-scroll 32s linear infinite}
        .cl-llbco-mq-track.rev{animation-direction:reverse}
        .cl-llbco-mq-wrap:hover .cl-llbco-mq-track{animation-play-state:paused}
        @keyframes cl-llbco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-llbco-mq-chip{min-width:210px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-llbco-grid{grid-template-columns:1fr 1fr}.cl-llbco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-llbco-sec{padding:70px 5%}.cl-llbco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-llbco-sec" id="careers">
        <div className="cl-llbco-wrap">
          <div className="cl-llbco-head">
            <div className="cl-llbco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-llbco-h2">Where This Degree<br/><em>Can Take You</em></h2>
            <p className="cl-llbco-sub">From litigation to legal consultancy — an LL.B. opens careers across courts, corporates, and public service.</p>
          </div>

          <div className="cl-llbco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-llbco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-llbco-ach-val">{a.val}</div>
                <div className="cl-llbco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-llbco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-llbco-card">
                <div className="cl-llbco-card-top">
                  <div className="cl-llbco-card-title">{r.title}</div>
                  <span className="cl-llbco-range">{r.range}</span>
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
