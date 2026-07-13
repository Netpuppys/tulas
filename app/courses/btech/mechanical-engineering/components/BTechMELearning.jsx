'use client';

const TECH_TAGS = [
  'AI-Driven Predictive Maintenance','Robotics & Automation','Digital Twin Concepts',
  'AI-Assisted CAD/CAM','Smart Manufacturing','Industrial IoT',
  'Renewable Energy Systems','Automotive & Aerospace Tech',
];

const ROADMAP = [
  { num:'01', title:'Year 1', desc:'Engineering mechanics, materials science, and foundational mechanical engineering concepts.' },
  { num:'02', title:'Year 2', desc:'Machine design, manufacturing technology, and thermodynamics applied to design tasks.' },
  { num:'03', title:'Year 3', desc:'Robotics, energy engineering, and industrial systems through live projects and industry collaboration.' },
  { num:'04', title:'Year 4', desc:'Specialisation capstone in Robotics or Energy Engineering, demonstrating industry-ready technical competence.' },
];

export default function BTechMELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmele-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-btechmele-wrap{max-width:1280px;margin:0 auto}
        .cl-btechmele-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-btechmele-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-btechmele-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-btechmele-ring.r1{width:260px;height:260px}
        .cl-btechmele-ring.r2{width:180px;height:180px}
        .cl-btechmele-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-btechmele-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-btechmele-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-btechmele-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-btechmele-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-btechmele-h2 em{font-style:normal;color:#FFF3D7}
        .cl-btechmele-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-btechmele-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-btechmele-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-btechmele-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-btechmele-step{text-align:center}
        .cl-btechmele-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-btechmele-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-btechmele-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-btechmele-split{grid-template-columns:1fr;gap:50px}.cl-btechmele-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-btechmele-sec{padding:70px 5%}.cl-btechmele-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechmele-sec" id="technology">
        <div className="cl-btechmele-wrap">
          <div className="cl-btechmele-split">
            <div className="cl-btechmele-visual">
              <div className="cl-btechmele-ring r1"/><div className="cl-btechmele-ring r2"/>
              <div className="cl-btechmele-mark">Digital Manufacturing<span>Emerging Technologies</span></div>
            </div>
            <div>
              <div className="cl-btechmele-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-btechmele-h2">Automation-Driven<br/><em>Mechanical Engineering</em></h2>
              <p className="cl-btechmele-body">The programme integrates AI-driven predictive maintenance, robotics, digital twin concepts, and AI-assisted CAD/CAM tools — preparing students for a manufacturing industry that is increasingly automated and data-driven.</p>
              <div className="cl-btechmele-tags">
                {TECH_TAGS.map(t=><span key={t} className="cl-btechmele-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-btechmele-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-btechmele-step" key={s.num}>
                <div className="cl-btechmele-num">{s.num}</div>
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
