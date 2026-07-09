'use client';

const AI_TAGS = [
  'AI-Assisted Crop & Yield Forecasting','Agri Market Analytics','Predictive Demand Modelling',
  'Generative AI for Agri Reporting','Precision Agriculture Tools','Supply Chain Optimisation AI',
  'Weather & Risk Analytics','Farm Data Platforms','Sentiment Analysis for Commodity Markets','Agri-Tech Platforms',
];

const ROADMAP = [
  { num:'01', title:'Foundations',             desc:'Digital Literacy & AI Tools for Agri-Business – I, plus foundational agricultural economics coursework.' },
  { num:'02', title:'Applied AI',              desc:'AI Tools for Agri-Business – II, Introduction to AI for Business, and the first live agri-market project.' },
  { num:'03', title:'Advanced AI',             desc:'AI Tools for Agri-Business – III (Advanced) alongside Digital Transformation & Business Models.' },
  { num:'04', title:'Leadership & Simulation', desc:'Rural Leadership Workshop & Industry Simulation heading into the capstone.' },
];

export default function MBAAgrMLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbaagrm-le-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}
        .cl-mbaagrm-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbaagrm-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbaagrm-le-ring.r1{width:280px;height:280px}
        .cl-mbaagrm-le-ring.r2{width:190px;height:190px}
        .cl-mbaagrm-le-ring.r3{width:110px;height:110px}
        .cl-mbaagrm-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbaagrm-le-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}
        .cl-mbaagrm-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbaagrm-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbaagrm-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbaagrm-le-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbaagrm-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbaagrm-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbaagrm-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}
        .cl-mbaagrm-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbaagrm-le-step{text-align:center}
        .cl-mbaagrm-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbaagrm-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbaagrm-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}
        @media(max-width:900px){.cl-mbaagrm-le-split{grid-template-columns:1fr;gap:50px}.cl-mbaagrm-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mbaagrm-le-sec{padding:70px 5%}.cl-mbaagrm-le-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbaagrm-le-sec" id="learning">
        <div className="cl-mbaagrm-le-wrap">
          <div className="cl-mbaagrm-le-split">
            <div className="cl-mbaagrm-le-visual">
              <div className="cl-mbaagrm-le-ring r1"/><div className="cl-mbaagrm-le-ring r2"/><div className="cl-mbaagrm-le-ring r3"/>
              <div className="cl-mbaagrm-le-mark">LEAP<span>AI-Native Platform</span></div>
            </div>
            <div>
              <div className="cl-mbaagrm-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mbaagrm-le-h2">An AI-Integrated<br/><em>Curriculum</em></h2>
              <p className="cl-mbaagrm-le-body">At Tulas Institute, AI isn't a single elective — it runs through AI Tools for Agri-Business across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.</p>
              <div className="cl-mbaagrm-le-tags">
                {AI_TAGS.map(t=><span key={t} className="cl-mbaagrm-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mbaagrm-le-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-mbaagrm-le-step" key={s.num}>
                <div className="cl-mbaagrm-le-num">{s.num}</div>
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
