'use client';

const TAGS = [
  'Digital Twin Modelling','AI-Driven Optimisation','Structural Health Monitoring',
  'Disaster Resilience','Smart Materials','Sustainable Construction',
];

const STEPS = [
  { num:'01', title:'Year 1 — Foundation',        desc:'Advanced core learning in structural mechanics, analysis, and design fundamentals.' },
  { num:'02', title:'Year 1 — Applied Analysis',  desc:'Earthquake and wind engineering, construction materials, and computational tools.' },
  { num:'03', title:'Year 2 — Specialisation',    desc:'Digital twins, AI/ML applications, and structural health monitoring.' },
  { num:'04', title:'Year 2 — Research & Practice', desc:'Dissertation-based research, professional practice, and industry consultancy projects.' },
];

export default function MTechStructuralLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mtse-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtse-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mtse-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mtse-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mtse-le-ring.r1{width:260px;height:260px;}
        .cl-mtse-le-ring.r2{width:180px;height:180px;}
        .cl-mtse-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;z-index:2;}

        .cl-mtse-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mtse-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mtse-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mtse-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mtse-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px;}
        .cl-mtse-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
        .cl-mtse-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mtse-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mtse-le-step{text-align:center;}
        .cl-mtse-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mtse-le-step h4{font-family:'Bebas Neue',sans-serif;font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;letter-spacing:.02em;}
        .cl-mtse-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mtse-le-split{grid-template-columns:1fr}.cl-mtse-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtse-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtse-le-sec" id="learning">
        <div className="cl-mtse-le-wrap">
          <div className="cl-mtse-le-split">
            <div className="cl-mtse-le-visual">
              <div className="cl-mtse-le-ring r1"/>
              <div className="cl-mtse-le-ring r2"/>
              <div className="cl-mtse-le-mark">Digital Twins &amp;<br/>AI-Driven Resilience</div>
            </div>
            <div>
              <div className="cl-mtse-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mtse-le-h2">Building<br/><em>Resilience Experts</em></h2>
              <p className="cl-mtse-le-body">M.Tech in Structural Engineering produces specialists who are not just designers, but innovators and resilience experts — blending advanced analysis, sustainability, and disaster-risk reduction with global employability through digital twin modelling, AI-driven optimisation, and structural health monitoring.</p>
              <div className="cl-mtse-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mtse-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mtse-le-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mtse-le-step">
                <div className="cl-mtse-le-num">{s.num}</div>
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
