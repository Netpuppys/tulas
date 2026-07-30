'use client';

const TAGS = ['AutoCAD','SolidWorks','CNC Machining','Industrial Automation','Mechatronics','Renewable Energy Systems','Quality Control'];

const ROADMAP = [
  { num:'01', year:'Year 1', desc:'Engineering mechanics, materials science, and foundational mechanical concepts.' },
  { num:'02', year:'Year 2', desc:'Machine design, CAD/CAM, and thermodynamics applied through workshops.' },
  { num:'03', year:'Year 3', desc:'Industrial automation, mechatronics, industrial visits, and a capstone project.' },
  { num:'04', year:'Beyond', desc:'Lateral entry into B.Tech Year 2, or direct entry into manufacturing industries.' },
];

export default function DiplomaMechanicalLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipme-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-dipme-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipme-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px;}

        /* LEFT: orange visual with rings */
        .cl-dipme-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-dipme-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-dipme-le-ring.r1{width:260px;height:260px;}
        .cl-dipme-le-ring.r2{width:180px;height:180px;}
        .cl-dipme-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;position:relative;z-index:2;line-height:1.2;}

        /* RIGHT text */
        .cl-dipme-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-dipme-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-dipme-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-dipme-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-dipme-le-p{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px;}
        .cl-dipme-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
        .cl-dipme-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        /* BOTTOM: horizontal 4-column roadmap */
        .cl-dipme-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;}
        .cl-dipme-le-step{text-align:center;}
        .cl-dipme-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-dipme-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-dipme-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-dipme-le-split{grid-template-columns:1fr}.cl-dipme-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipme-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipme-le-sec" id="learning">
        <div className="cl-dipme-le-wrap">

          <div className="cl-dipme-le-split">
            <div className="cl-dipme-le-visual">
              <div className="cl-dipme-le-ring r1"/>
              <div className="cl-dipme-le-ring r2"/>
              <div className="cl-dipme-le-mark">CAD/CAM &amp;<br/>CNC Training</div>
            </div>

            <div className="cl-dipme-le-text">
              <div className="cl-dipme-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-dipme-le-h2">Hands-On<br/><em>Manufacturing Training</em></h2>
              <p className="cl-dipme-le-p">Students gain hands-on expertise in AutoCAD, SolidWorks, and CNC machining — essential for designing and manufacturing mechanical components. The programme integrates workshops, industrial visits, and live projects with manufacturing and automotive organisations for real-world engineering exposure.</p>
              <div className="cl-dipme-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-dipme-le-tag">{t}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-dipme-le-roadmap">
            {ROADMAP.map((s,i)=>(
              <div key={i} className="cl-dipme-le-step">
                <div className="cl-dipme-le-num">{s.num}</div>
                <h4>{s.year}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
