'use client';

const TAGS = ['Moot Court Competitions','Mock Trials','Court Visits','Legal Aid Clinics','Policy Research Projects','Mediation Exercises','Arbitration Simulations','Drafting Workshops','Case Law Analysis','Legal Writing'];

const STEPS = [
  { num:'01', title:'Foundations', desc:'Foundational courses in political science, constitutional law, and legal research basics.' },
  { num:'02', title:'Application',  desc:'Public law, human rights, governance, and policy research applied through drafting and analysis exercises.' },
  { num:'03', title:'Practice',     desc:'Moot court competitions, legal aid clinics, and internships with law firms, courts, and policy bodies.' },
  { num:'04', title:'Readiness',    desc:'Advanced constitutional law, international law, ADR training, and a final internship building professional readiness.' },
];

export default function BALLBLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballble-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-ballble-wrap{max-width:1280px;margin:0 auto;}

        .cl-ballble-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-ballble-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-ballble-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-ballble-ring.r1{width:260px;height:260px;}
        .cl-ballble-ring.r2{width:180px;height:180px;}
        .cl-ballble-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1;}

        .cl-ballble-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-ballble-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-ballble-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-ballble-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-ballble-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-ballble-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-ballble-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-ballble-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-ballble-step{text-align:center;}
        .cl-ballble-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-ballble-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-ballble-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-ballble-split{grid-template-columns:1fr}.cl-ballble-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-ballble-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-ballble-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-ballble-sec" id="learning">
        <div className="cl-ballble-wrap">
          <div className="cl-ballble-split">
            <div className="cl-ballble-visual">
              <div className="cl-ballble-ring r1"/>
              <div className="cl-ballble-ring r2"/>
              <div className="cl-ballble-mark">Moot Courts &amp;<br/>Legal Clinics</div>
            </div>
            <div>
              <div className="cl-ballble-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-ballble-h2">Experiential<br/><em>Legal Learning</em></h2>
              <p className="cl-ballble-body">Learning law is about applying knowledge in real situations. At Tulas, students move from foundational legal principles to courtroom-ready advocacy — through moot court competitions, mock trials, legal aid clinics, policy research projects, and real client counselling exercises.</p>
              <div className="cl-ballble-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-ballble-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-ballble-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-ballble-step">
                <div className="cl-ballble-num">{s.num}</div>
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
