'use client';

const TAGS = ['Moot Court Competitions','Mock Trials','Court Visits','Legal Aid Clinics','Client Counselling','Mediation Exercises','Arbitration Simulations','Drafting Workshops','Case Law Analysis','Legal Writing'];

const STEPS = [
  { num:'01', title:'Foundations', desc:'Foundational courses in constitutional, criminal, and civil law alongside legal research basics.' },
  { num:'02', title:'Application',  desc:'Contract law, law of torts, and property law applied through drafting exercises and case analysis.' },
  { num:'03', title:'Practice',     desc:'Moot court competitions, legal aid clinics, and internships with law firms and courts.' },
  { num:'04', title:'Readiness',    desc:'Advanced corporate and commercial law, ADR training, and a final internship building professional readiness.' },
];

export default function LLBLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llble-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-llble-wrap{max-width:1280px;margin:0 auto;}

        .cl-llble-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-llble-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-llble-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-llble-ring.r1{width:260px;height:260px;}
        .cl-llble-ring.r2{width:180px;height:180px;}
        .cl-llble-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1;}

        .cl-llble-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-llble-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-llble-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-llble-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-llble-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-llble-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-llble-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-llble-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-llble-step{text-align:center;}
        .cl-llble-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-llble-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-llble-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-llble-split{grid-template-columns:1fr}.cl-llble-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-llble-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-llble-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-llble-sec" id="learning">
        <div className="cl-llble-wrap">
          <div className="cl-llble-split">
            <div className="cl-llble-visual">
              <div className="cl-llble-ring r1"/>
              <div className="cl-llble-ring r2"/>
              <div className="cl-llble-mark">Moot Courts &amp;<br/>Legal Clinics</div>
            </div>
            <div>
              <div className="cl-llble-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-llble-h2">Experiential<br/><em>Legal Learning</em></h2>
              <p className="cl-llble-body">Learning law is about applying knowledge in real situations. At Tulas, students move from foundational legal principles to courtroom-ready advocacy — through moot court competitions, mock trials, legal aid clinics, and real client counselling exercises.</p>
              <div className="cl-llble-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-llble-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-llble-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-llble-step">
                <div className="cl-llble-num">{s.num}</div>
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
