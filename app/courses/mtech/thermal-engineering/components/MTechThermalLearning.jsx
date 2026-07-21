'use client';

const TAGS = [
  'Hydrogen & Fuel Cells','Thermal Energy Storage','Digital Twins',
  'AI-Driven Energy Optimization','Smart Energy Systems','Industry 5.0 Applications',
];

const STEPS = [
  { num:'01', title:'Advanced Engineering Foundations',        desc:'Advanced thermodynamics, heat transfer, fluid flow, numerical methods, and research methodology.' },
  { num:'02', title:'Thermal Systems & Energy Engineering',    desc:'Thermal power plants, HVAC, refrigeration, combustion, gas turbines, and energy auditing.' },
  { num:'03', title:'Advanced Simulation & Research',          desc:'CFD, thermal modelling, ANSYS & MATLAB simulations, and dissertation-based specialisation.' },
  { num:'04', title:'Future Energy Technologies',              desc:'Renewable energy, hydrogen and fuel cell technologies, digital twins, and AI-driven optimisation.' },
];

export default function MTechThermalLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mtte-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mtte-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mtte-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mtte-le-ring.r1{width:260px;height:260px;}
        .cl-mtte-le-ring.r2{width:180px;height:180px;}
        .cl-mtte-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;z-index:2;line-height:1.4;}

        .cl-mtte-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mtte-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mtte-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mtte-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mtte-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-mtte-le-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mtte-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mtte-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mtte-le-step{text-align:center;}
        .cl-mtte-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mtte-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-mtte-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mtte-le-split{grid-template-columns:1fr}.cl-mtte-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mtte-le-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtte-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtte-le-sec" id="learning">
        <div className="cl-mtte-le-wrap">
          <div className="cl-mtte-le-split">
            <div className="cl-mtte-le-visual">
              <div className="cl-mtte-le-ring r1"/>
              <div className="cl-mtte-le-ring r2"/>
              <div className="cl-mtte-le-mark">Engineering The Future<br/>Of Sustainable Energy</div>
            </div>
            <div>
              <div className="cl-mtte-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mtte-le-h2">An Industry-Integrated<br/><em>Advanced Curriculum</em></h2>
              <p className="cl-mtte-le-body">Designed to prepare future engineers for the rapidly evolving energy landscape through an interdisciplinary approach that integrates computational modelling, artificial intelligence, renewable energy, smart thermal systems, and sustainable engineering practices.</p>
              <div className="cl-mtte-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mtte-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mtte-le-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mtte-le-step">
                <div className="cl-mtte-le-num">{s.num}</div>
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
