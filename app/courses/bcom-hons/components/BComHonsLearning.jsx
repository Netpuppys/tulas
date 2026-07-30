'use client';

const TAGS = [
  'Financial Analysis','Taxation','Corporate Governance','Business Research',
  'Global Business Awareness','Entrepreneurship','Ethical Business Practice',
];

const STEPS = [
  { num:'01', title:'Year 1',  desc:'Foundations in accounting, business law, and economics.' },
  { num:'02', title:'Year 2',  desc:'Cost accounting, taxation, and business statistics applied to real cases.' },
  { num:'03', title:'Year 3',  desc:'Financial management, auditing, corporate law, and a research/capstone project.' },
  { num:'04', title:'Beyond',  desc:'CA/CS foundation readiness, higher studies, or direct industry entry.' },
];

export default function BComHonsLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-bcomh-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcomh-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-bcomh-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-bcomh-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-bcomh-le-ring.r1{width:260px;height:260px;}
        .cl-bcomh-le-ring.r2{width:180px;height:180px;}
        .cl-bcomh-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;z-index:2;}

        .cl-bcomh-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-bcomh-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-bcomh-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-bcomh-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-bcomh-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px;}
        .cl-bcomh-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
        .cl-bcomh-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-bcomh-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-bcomh-le-step{text-align:center;}
        .cl-bcomh-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-bcomh-le-step h4{font-family:'Bebas Neue',sans-serif;font-size:1.15rem;font-weight:800;color:#fff;margin-bottom:8px;letter-spacing:.02em;}
        .cl-bcomh-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-bcomh-le-split{grid-template-columns:1fr}.cl-bcomh-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bcomh-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcomh-le-sec" id="learning">
        <div className="cl-bcomh-le-wrap">
          <div className="cl-bcomh-le-split">
            <div className="cl-bcomh-le-visual">
              <div className="cl-bcomh-le-ring r1"/>
              <div className="cl-bcomh-le-ring r2"/>
              <div className="cl-bcomh-le-mark">Professional<br/>Skill-Building</div>
            </div>
            <div>
              <div className="cl-bcomh-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-bcomh-le-h2">Building Core<br/><em>Commerce Competence</em></h2>
              <p className="cl-bcomh-le-body">The programme is built around clear objectives: comprehending and applying principles from every field of trade, discussing and implementing commerce concepts and procedures, and using professional literature to sharpen research, communication, and presentation skills — promoting ethical, sustainable business practice and global business awareness alongside entrepreneurial and managerial competencies.</p>
              <div className="cl-bcomh-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-bcomh-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-bcomh-le-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-bcomh-le-step">
                <div className="cl-bcomh-le-num">{s.num}</div>
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
