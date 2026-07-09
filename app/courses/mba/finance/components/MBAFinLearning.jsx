'use client';

const AI_TAGS = [
  'AI-Assisted Financial Modelling','Predictive Analytics','Algorithmic Screening','Generative AI for Reporting',
  'Risk Scoring Models','Fraud Detection AI','Robo-Advisory Concepts','Sentiment Analysis for Markets',
  'Automated Valuation','FinTech Tools',
];

const ROADMAP = [
  { num:'01', title:'Foundations',              desc:'Digital Literacy & AI Tools for Finance – I, plus foundational financial accounting coursework.' },
  { num:'02', title:'Applied AI',               desc:'AI Tools for Finance – II, Introduction to AI for Business, and the first live valuation project.' },
  { num:'03', title:'Advanced AI',              desc:'AI Tools for Finance – III (Advanced) alongside Digital Transformation & Business Models.' },
  { num:'04', title:'Leadership & Simulation',  desc:'Capital Markets Leadership Workshop & Industry Simulation heading into the capstone.' },
];

export default function MBAFinLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbafinle-wrap{max-width:1280px;margin:0 auto}
        .cl-mbafinle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-mbafinle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbafinle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbafinle-ring.r1{width:280px;height:280px}
        .cl-mbafinle-ring.r2{width:190px;height:190px}
        .cl-mbafinle-ring.r3{width:110px;height:110px}
        .cl-mbafinle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbafinle-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-mbafinle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbafinle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbafinle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbafinle-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbafinle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbafinle-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbafinle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-mbafinle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbafinle-step{text-align:center}
        .cl-mbafinle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbafinle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbafinle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-mbafinle-split{grid-template-columns:1fr;gap:50px}.cl-mbafinle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mbafinle-sec{padding:70px 5%}.cl-mbafinle-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbafinle-sec" id="learning">
        <div className="cl-mbafinle-wrap">
          <div className="cl-mbafinle-split">
            <div className="cl-mbafinle-visual">
              <div className="cl-mbafinle-ring r1"/><div className="cl-mbafinle-ring r2"/><div className="cl-mbafinle-ring r3"/>
              <div className="cl-mbafinle-mark">LEAP<span>AI-Native Platform</span></div>
            </div>
            <div>
              <div className="cl-mbafinle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mbafinle-h2">An AI-Integrated<br/><em>Curriculum</em></h2>
              <p className="cl-mbafinle-body">At Tulas Institute, AI isn't a single elective — it runs through AI Tools for Finance Professionals across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.</p>
              <div className="cl-mbafinle-tags">
                {AI_TAGS.map(t=><span key={t} className="cl-mbafinle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mbafinle-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-mbafinle-step" key={s.num}>
                <div className="cl-mbafinle-num">{s.num}</div>
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
