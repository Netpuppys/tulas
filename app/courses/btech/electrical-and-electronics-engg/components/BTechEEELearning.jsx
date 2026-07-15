'use client';

const TECH_TAGS = [
  'Smart Grid Technologies','Electric Vehicle Systems','AI-Assisted Power Monitoring',
  'Renewable Energy Integration','Industrial Automation','VLSI & Chip Design',
  'IoT-Enabled Energy Systems','Power Electronics & Drives',
];

const ROADMAP = [
  { num:'01', title:'Year 1', desc:'Circuit theory, electromagnetic fields, and foundational electrical engineering concepts.' },
  { num:'02', title:'Year 2', desc:'Electrical machines, power systems analysis, and control systems applied to design tasks.' },
  { num:'03', title:'Year 3', desc:'Power electronics, automation, and renewable energy systems through live projects and industry collaboration.' },
  { num:'04', title:'Year 4', desc:"Specialisation in Smart Grids, EVs, or VLSI, culminating in a capstone project demonstrating industry readiness." },
];

export default function BTechEEELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeele-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-btecheeele-wrap{max-width:1280px;margin:0 auto}
        .cl-btecheeele-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-btecheeele-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-btecheeele-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-btecheeele-ring.r1{width:260px;height:260px}
        .cl-btecheeele-ring.r2{width:180px;height:180px}
        .cl-btecheeele-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-btecheeele-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-btecheeele-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-btecheeele-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-btecheeele-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-btecheeele-h2 em{font-style:normal;color:#FFF3D7}
        .cl-btecheeele-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-btecheeele-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-btecheeele-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-btecheeele-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-btecheeele-step{text-align:center}
        .cl-btecheeele-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-btecheeele-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-btecheeele-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-btecheeele-split{grid-template-columns:1fr;gap:50px}.cl-btecheeele-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-btecheeele-sec{padding:70px 5%}.cl-btecheeele-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheeele-sec" id="technology">
        <div className="cl-btecheeele-wrap">
          <div className="cl-btecheeele-split">
            <div className="cl-btecheeele-visual">
              <div className="cl-btecheeele-ring r1"/><div className="cl-btecheeele-ring r2"/>
              <div className="cl-btecheeele-mark">Smart Grid &amp; EV Tech<span>Emerging Technologies</span></div>
            </div>
            <div>
              <div className="cl-btecheeele-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-btecheeele-h2">Sustainable Energy<br/><em>For A Clean Future</em></h2>
              <p className="cl-btecheeele-body">The programme integrates smart grid technologies, electric vehicle systems, and AI-assisted power system monitoring — preparing students for an energy industry that is increasingly clean, connected, and automated.</p>
              <div className="cl-btecheeele-tags">
                {TECH_TAGS.map(t=><span key={t} className="cl-btecheeele-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-btecheeele-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-btecheeele-step" key={s.num}>
                <div className="cl-btecheeele-num">{s.num}</div>
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
