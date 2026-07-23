'use client';

const TAGS = [
  'AutoCAD','STAAD Pro','Revit','Smart Infrastructure',
  'Environmental Sustainability','Quality Control','Project Management',
];

const ROADMAP = [
  { num:'01', year:'Year 1', desc:'Engineering mathematics, mechanics, and foundational civil engineering concepts.' },
  { num:'02', year:'Year 2', desc:'Structural design, surveying, and construction materials applied through labs.' },
  { num:'03', year:'Year 3', desc:'Hydraulics, geotechnical engineering, industrial visits, and a capstone project.' },
  { num:'04', year:'Beyond', desc:'Lateral entry into B.Tech Year 2, or direct entry into the construction industry.' },
];

export default function DiplomaCivilLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-dipce-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipce-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px;}

        /* LEFT: orange visual with rings */
        .cl-dipce-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-dipce-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-dipce-le-ring.r1{width:260px;height:260px;}
        .cl-dipce-le-ring.r2{width:180px;height:180px;}
        .cl-dipce-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;position:relative;z-index:2;line-height:1.2;}

        /* RIGHT text */
        .cl-dipce-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-dipce-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-dipce-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-dipce-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-dipce-le-p{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px;}
        .cl-dipce-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
        .cl-dipce-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        /* BOTTOM: horizontal 4-column roadmap */
        .cl-dipce-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;}
        .cl-dipce-le-step{text-align:center;}
        .cl-dipce-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-dipce-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-dipce-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-dipce-le-split{grid-template-columns:1fr}.cl-dipce-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipce-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipce-le-sec" id="learning">
        <div className="cl-dipce-le-wrap">

          <div className="cl-dipce-le-split">
            <div className="cl-dipce-le-visual">
              <div className="cl-dipce-le-ring r1"/>
              <div className="cl-dipce-le-ring r2"/>
              <div className="cl-dipce-le-mark">Industry Software<br/>&amp; On-Site Training</div>
            </div>

            <div className="cl-dipce-le-text">
              <div className="cl-dipce-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-dipce-le-h2">Technology-Integrated<br/><em>Civil Engineering</em></h2>
              <p className="cl-dipce-le-p">Students gain hands-on experience with advanced software tools like AutoCAD, STAAD Pro, and Revit, essential for designing and analysing civil structures — combined with industrial visits, on-site training, workshops, and expert lectures from industry professionals for real-world exposure.</p>
              <div className="cl-dipce-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-dipce-le-tag">{t}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-dipce-le-roadmap">
            {ROADMAP.map((s,i)=>(
              <div key={i} className="cl-dipce-le-step">
                <div className="cl-dipce-le-num">{s.num}</div>
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
