'use client';

const TAGS = ['Moot Court Competitions','Mock Trials','Corporate Legal Clinics','Contract Drafting Workshops','Negotiation Simulations','Arbitration Simulations','Due Diligence Exercises','Case Law Analysis','Legal Writing','Business Law Projects'];

const STEPS = [
  { num:'01', title:'Foundations', desc:'Foundational courses in business management, constitutional law, and legal research basics.' },
  { num:'02', title:'Application',  desc:'Company law, contract law, and commercial regulations applied through drafting and compliance exercises.' },
  { num:'03', title:'Practice',     desc:'Moot court competitions, corporate legal clinics, and internships with law firms and corporate legal departments.' },
  { num:'04', title:'Readiness',    desc:'Advanced corporate law, taxation, ADR training, and a final internship building professional readiness.' },
];

export default function BBALLBLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllble-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-bbllble-wrap{max-width:1280px;margin:0 auto;}

        .cl-bbllble-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-bbllble-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-bbllble-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-bbllble-ring.r1{width:260px;height:260px;}
        .cl-bbllble-ring.r2{width:180px;height:180px;}
        .cl-bbllble-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1;}

        .cl-bbllble-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-bbllble-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-bbllble-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-bbllble-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-bbllble-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-bbllble-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-bbllble-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-bbllble-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-bbllble-step{text-align:center;}
        .cl-bbllble-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-bbllble-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-bbllble-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-bbllble-split{grid-template-columns:1fr}.cl-bbllble-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-bbllble-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bbllble-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bbllble-sec" id="learning">
        <div className="cl-bbllble-wrap">
          <div className="cl-bbllble-split">
            <div className="cl-bbllble-visual">
              <div className="cl-bbllble-ring r1"/>
              <div className="cl-bbllble-ring r2"/>
              <div className="cl-bbllble-mark">Moot Courts &amp;<br/>Legal Clinics</div>
            </div>
            <div>
              <div className="cl-bbllble-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-bbllble-h2">Experiential<br/><em>Legal Learning</em></h2>
              <p className="cl-bbllble-body">Learning law is about applying knowledge in real situations. At Tulas, students move from foundational legal principles to courtroom-ready advocacy — through moot court competitions, mock trials, legal aid clinics, and real client counselling exercises.</p>
              <div className="cl-bbllble-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-bbllble-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-bbllble-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-bbllble-step">
                <div className="cl-bbllble-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
