'use client';

const AI_TAGS = [
  'AI-Assisted Recruitment','People Analytics','Predictive Attrition Modelling','Generative AI for HR Content',
  'Sentiment Analysis for Engagement','Chatbots for Employee Support','Automated Screening Tools','Workforce Planning AI',
  'Performance Analytics','HRIS Platforms',
];

const ROADMAP = [
  { num:'01', title:'Foundations',             desc:'Digital Literacy & AI Tools for HR Professionals – I, plus foundational organisational behaviour and labour law coursework.' },
  { num:'02', title:'Applied AI',              desc:'AI Tools for HR – II, Introduction to AI for Business, and the first live Talent Audit Project.' },
  { num:'03', title:'Advanced AI',             desc:'AI Tools for HR – III (Advanced) alongside HR Analytics & Strategic HR Leadership specialisation.' },
  { num:'04', title:'Leadership & Simulation', desc:'Talent Strategy Workshop & Industry HR Simulation heading into the capstone.' },
];

export default function MBAHRMLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbahrmle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbahrmle-wrap{max-width:1280px;margin:0 auto}
        .cl-mbahrmle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-mbahrmle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbahrmle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbahrmle-ring.r1{width:280px;height:280px}
        .cl-mbahrmle-ring.r2{width:190px;height:190px}
        .cl-mbahrmle-ring.r3{width:110px;height:110px}
        .cl-mbahrmle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbahrmle-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-mbahrmle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbahrmle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbahrmle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbahrmle-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbahrmle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbahrmle-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbahrmle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-mbahrmle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbahrmle-step{text-align:center}
        .cl-mbahrmle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbahrmle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbahrmle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-mbahrmle-split{grid-template-columns:1fr;gap:50px}.cl-mbahrmle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mbahrmle-sec{padding:70px 5%}.cl-mbahrmle-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbahrmle-sec" id="learning">
        <div className="cl-mbahrmle-wrap">
          <div className="cl-mbahrmle-split">
            <div className="cl-mbahrmle-visual">
              <div className="cl-mbahrmle-ring r1"/><div className="cl-mbahrmle-ring r2"/><div className="cl-mbahrmle-ring r3"/>
              <div className="cl-mbahrmle-mark">LEAP<span>AI-Native Platform</span></div>
            </div>
            <div>
              <div className="cl-mbahrmle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mbahrmle-h2">An AI-Integrated<br/><em>Curriculum</em></h2>
              <p className="cl-mbahrmle-body">At Tulas Institute, AI isn't a single elective — it runs through AI Tools for HR Professionals across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.</p>
              <div className="cl-mbahrmle-tags">
                {AI_TAGS.map(t=><span key={t} className="cl-mbahrmle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mbahrmle-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-mbahrmle-step" key={s.num}>
                <div className="cl-mbahrmle-num">{s.num}</div>
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
