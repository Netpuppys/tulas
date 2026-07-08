'use client';

const AI_TAGS = [
  'AI Content Generation','Consumer Insight Mining','Predictive Analytics','Generative AI',
  'Marketing Automation','Customer Segmentation','Sentiment Analysis','Market Research AI',
  'Trend Forecasting','Brand Monitoring',
];

const ROADMAP = [
  { num:'01', title:'Foundations',           desc:'Digital Literacy & AI Tools for Marketers – I, plus foundational consumer behaviour coursework.' },
  { num:'02', title:'Applied AI',            desc:'AI Tools for Marketers – II, Introduction to AI for Business, and the first live market research project.' },
  { num:'03', title:'Advanced AI',           desc:'AI Tools for Marketers – III (Advanced) alongside Digital Transformation & Business Models.' },
  { num:'04', title:'Leadership & Simulation', desc:'Brand Leadership Workshop & Industry Simulation heading into the capstone.' },
];

export default function MBAMktLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbamktle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbamktle-wrap{max-width:1280px;margin:0 auto}
        .cl-mbamktle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-mbamktle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbamktle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbamktle-ring.r1{width:280px;height:280px}
        .cl-mbamktle-ring.r2{width:190px;height:190px}
        .cl-mbamktle-ring.r3{width:110px;height:110px}
        .cl-mbamktle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbamktle-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-mbamktle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbamktle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbamktle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbamktle-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbamktle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbamktle-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbamktle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-mbamktle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbamktle-step{text-align:center}
        .cl-mbamktle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbamktle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbamktle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-mbamktle-split{grid-template-columns:1fr;gap:50px}.cl-mbamktle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mbamktle-sec{padding:70px 5%}.cl-mbamktle-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbamktle-sec" id="learning">
        <div className="cl-mbamktle-wrap">
          <div className="cl-mbamktle-split">
            <div className="cl-mbamktle-visual">
              <div className="cl-mbamktle-ring r1"/><div className="cl-mbamktle-ring r2"/><div className="cl-mbamktle-ring r3"/>
              <div className="cl-mbamktle-mark">LEAP<span>AI-Native Platform</span></div>
            </div>
            <div>
              <div className="cl-mbamktle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mbamktle-h2">An AI-Integrated<br/><em>Curriculum</em></h2>
              <p className="cl-mbamktle-body">At Tulas Institute, AI isn't a single elective — it runs through AI Tools for Marketers across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.</p>
              <div className="cl-mbamktle-tags">
                {AI_TAGS.map(t=><span key={t} className="cl-mbamktle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mbamktle-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-mbamktle-step" key={s.num}>
                <div className="cl-mbamktle-num">{s.num}</div>
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
