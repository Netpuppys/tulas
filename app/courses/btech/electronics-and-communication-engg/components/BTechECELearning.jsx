'use client';

const TECH_TAGS = [
  '5G/6G Network Fundamentals','IoT Application Development','AI-Assisted Signal Processing',
  'Embedded AI Systems','VLSI & Chip Design','Wireless Communication',
  'Robotics & Automation','Semiconductor Technologies',
];

const ROADMAP = [
  { num:'01', title:'Year 1', desc:'Circuit theory, semiconductor physics, engineering mathematics, and foundational ECE concepts.' },
  { num:'02', title:'Year 2', desc:'Digital logic design, microprocessors, microcontrollers, and analog & digital communication.' },
  { num:'03', title:'Year 3', desc:'Microwave engineering, antenna design, embedded systems, and VLSI through live projects and internships.' },
  { num:'04', title:'Year 4', desc:'5G/6G, IoT, signal processing, and robotics capstone — demonstrating industry-ready communication engineering competence.' },
];

export default function BTechECELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechecele-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-btechecele-wrap{max-width:1280px;margin:0 auto}
        .cl-btechecele-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-btechecele-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-btechecele-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-btechecele-ring.r1{width:260px;height:260px}
        .cl-btechecele-ring.r2{width:180px;height:180px}
        .cl-btechecele-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-btechecele-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-btechecele-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-btechecele-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-btechecele-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-btechecele-h2 em{font-style:normal;color:#FFF3D7}
        .cl-btechecele-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-btechecele-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-btechecele-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-btechecele-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-btechecele-step{text-align:center}
        .cl-btechecele-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-btechecele-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-btechecele-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-btechecele-split{grid-template-columns:1fr;gap:50px}.cl-btechecele-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-btechecele-sec{padding:70px 5%}.cl-btechecele-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechecele-sec" id="technology">
        <div className="cl-btechecele-wrap">
          <div className="cl-btechecele-split">
            <div className="cl-btechecele-visual">
              <div className="cl-btechecele-ring r1"/><div className="cl-btechecele-ring r2"/>
              <div className="cl-btechecele-mark">Next-Gen Networks<span>Emerging Technologies</span></div>
            </div>
            <div>
              <div className="cl-btechecele-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-btechecele-h2">Communication Systems<br/><em>For A Connected World</em></h2>
              <p className="cl-btechecele-body">The programme integrates AI-assisted signal processing, IoT application development, 5G/6G network fundamentals, embedded AI, and VLSI chip design — preparing students for a telecom and semiconductor industry that is rapidly evolving.</p>
              <div className="cl-btechecele-tags">
                {TECH_TAGS.map(t=><span key={t} className="cl-btechecele-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-btechecele-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-btechecele-step" key={s.num}>
                <div className="cl-btechecele-num">{s.num}</div>
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
