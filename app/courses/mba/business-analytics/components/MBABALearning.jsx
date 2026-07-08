'use client';

const AI_TAGS = [
  'Predictive Analytics','Machine Learning Models','Generative AI for Reporting',
  'Data Visualization AI','Natural Language Querying','Automated Forecasting',
  'Big Data Processing','Business Intelligence AI','Decision Intelligence','Cloud Analytics Platforms',
];

const ROADMAP = [
  { num:'01', title:'Foundations',           desc:'Digital Literacy & AI Tools for Business Analysts – I, plus foundational business statistics coursework.' },
  { num:'02', title:'Applied AI',            desc:'AI Tools for Business Analysts – II, Introduction to AI for Business, and the first live analytics project.' },
  { num:'03', title:'Advanced AI',           desc:'AI Tools for Business Analysts – III (Advanced) alongside Digital Transformation & Business Models.' },
  { num:'04', title:'Leadership & Simulation', desc:'Data Strategy Leadership Workshop & Industry Simulation heading into the capstone.' },
];

export default function MBABALearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabale-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbabale-wrap{max-width:1280px;margin:0 auto}
        .cl-mbabale-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-mbabale-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbabale-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbabale-ring.r1{width:280px;height:280px}
        .cl-mbabale-ring.r2{width:190px;height:190px}
        .cl-mbabale-ring.r3{width:110px;height:110px}
        .cl-mbabale-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbabale-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-family:'Montserrat',sans-serif;font-weight:600;margin-top:6px}

        .cl-mbabale-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbabale-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbabale-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbabale-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbabale-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbabale-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbabale-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-mbabale-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbabale-step{text-align:center}
        .cl-mbabale-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbabale-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbabale-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){
          .cl-mbabale-split{grid-template-columns:1fr;gap:50px}
          .cl-mbabale-roadmap{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){.cl-mbabale-sec{padding:70px 5%}.cl-mbabale-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbabale-sec" id="learning">
        <div className="cl-mbabale-wrap">
          <div className="cl-mbabale-split">
            <div className="cl-mbabale-visual">
              <div className="cl-mbabale-ring r1"/><div className="cl-mbabale-ring r2"/><div className="cl-mbabale-ring r3"/>
              <div className="cl-mbabale-mark">LEAP<span>AI-Native Platform</span></div>
            </div>
            <div>
              <div className="cl-mbabale-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mbabale-h2">An AI-Integrated<br/><em>Curriculum</em></h2>
              <p className="cl-mbabale-body">At Tulas Institute, AI isn't a single elective — it runs through AI Tools for Business Analysts across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.</p>
              <div className="cl-mbabale-tags">
                {AI_TAGS.map(t=><span key={t} className="cl-mbabale-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mbabale-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-mbabale-step" key={s.num}>
                <div className="cl-mbabale-num">{s.num}</div>
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
