'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'Corporate Lawyer',      range:'₹5–12 LPA', desc:'Advise businesses on legal matters, draft contracts, oversee regulatory compliance, and represent companies in commercial disputes.' },
  { title:'Compliance Officer',    range:'₹4–10 LPA', desc:'Ensure organisations meet legal and regulatory requirements, manage risk frameworks, and develop compliance programmes.' },
  { title:'Legal Advisor',         range:'₹4–10 LPA', desc:'Provide expert legal counsel to corporations, financial institutions, and government bodies on regulatory and commercial matters.' },
  { title:'Legal Consultant',      range:'₹4–10 LPA', desc:'Offer specialist advice on corporate law, taxation, and business transactions across industries and sectors.' },
  { title:'Arbitration Specialist',range:'₹5–10 LPA', desc:'Resolve complex commercial disputes as a mediator, arbitrator, or legal representative in alternative dispute resolution proceedings.' },
  { title:'Legal Researcher',      range:'₹3–7 LPA',  desc:'Conduct in-depth research in corporate law, business regulations, and compliance for law firms, corporates, and institutions.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',      dark:false },
  { val:'750+', label:'Recruiters',                dark:true  },
  { val:'BCI',  label:'Approved Programme',        dark:true  },
  { val:'20+',  label:'Core Legal Domains Covered',dark:true  },
];

const ROW1 = ['Law Firms','Corporate Legal Departments','Judiciary & Courts','Government & Civil Services','NGOs & Human Rights Orgs','Legal Consultancies','Media & Legal Journalism','Policy Think Tanks'];
const ROW2 = ['Corporate Compliance Teams','Taxation Departments','M&A Advisory Firms','IPR Consultancies','Company Secretarial Offices','Financial Regulatory Bodies','Business Advisory Firms','International Trade Organisations'];

export default function BBALLBCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllbco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-bbllbco-wrap{max-width:1280px;margin:0 auto}

        .cl-bbllbco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-bbllbco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bbllbco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bbllbco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bbllbco-h2 em{font-style:normal;color:#DF5400}
        .cl-bbllbco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bbllbco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-bbllbco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-bbllbco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-bbllbco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-bbllbco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-bbllbco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-bbllbco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-bbllbco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-bbllbco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-bbllbco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-bbllbco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-bbllbco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-bbllbco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-bbllbco-mq-head{text-align:center;margin-bottom:28px}
        .cl-bbllbco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-bbllbco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-bbllbco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-bbllbco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-bbllbco-scroll 32s linear infinite}
        .cl-bbllbco-mq-track.rev{animation-direction:reverse}
        .cl-bbllbco-mq-wrap:hover .cl-bbllbco-mq-track{animation-play-state:paused}
        @keyframes cl-bbllbco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-bbllbco-mq-chip{min-width:220px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-bbllbco-grid{grid-template-columns:1fr 1fr}.cl-bbllbco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bbllbco-sec{padding:70px 5%}.cl-bbllbco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bbllbco-sec" id="careers">
        <div className="cl-bbllbco-wrap">
          <div className="cl-bbllbco-head">
            <div className="cl-bbllbco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-bbllbco-h2">Where This Degree<br/><em>Can Take You</em></h2>
            <p className="cl-bbllbco-sub">From compliance to corporate law — a BBA LL.B.  opens careers across business, law firms, and consultancy.</p>
          </div>

          <div className="cl-bbllbco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-bbllbco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-bbllbco-ach-val">{a.val}</div>
                <div className="cl-bbllbco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-bbllbco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-bbllbco-card">
                <div className="cl-bbllbco-card-top">
                  <div className="cl-bbllbco-card-title">{r.title}</div>
                  <span className="cl-bbllbco-range">{r.range}</span>
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
