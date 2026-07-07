'use client';

const AI_TAGS = [
  'AI APIs & Chatbots', 'Smart Search', 'Content Generation', 'Recommendations',
  'Machine Learning', 'RAG Pipelines', 'Semantic Search', 'Responsible AI',
];

const ROADMAP = [
  { num: '01', title: 'Learn to Code',        desc: 'Python, web basics, data structures, SQL — and your first live deployed website.' },
  { num: '02', title: 'Full-Stack & Cloud',    desc: 'OOP, cloud computing, freelancing fundamentals, and a full-stack mini project.' },
  { num: '03', title: 'ML & AI Applications', desc: 'Machine learning fundamentals, React, AI tools for developers, and an industry project.' },
  { num: '04', title: 'AI Product & Capstone', desc: 'Build a complete AI-powered application and graduate via internship or capstone.' },
];

export default function BCAILearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaile-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-bcaile-wrap{max-width:1280px;margin:0 auto}
        .cl-bcaile-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-bcaile-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-bcaile-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-bcaile-ring.r1{width:280px;height:280px}
        .cl-bcaile-ring.r2{width:190px;height:190px}
        .cl-bcaile-ring.r3{width:110px;height:110px}
        .cl-bcaile-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-bcaile-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-family:'Montserrat',sans-serif;font-weight:600;margin-top:6px}

        .cl-bcaile-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-bcaile-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-bcaile-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-bcaile-h2 em{font-style:normal;color:#FFF3D7}
        .cl-bcaile-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-bcaile-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-bcaile-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-bcaile-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-bcaile-step{text-align:center}
        .cl-bcaile-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-bcaile-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-bcaile-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){
          .cl-bcaile-split{grid-template-columns:1fr;gap:50px}
          .cl-bcaile-roadmap{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){
          .cl-bcaile-sec{padding:70px 5%}
          .cl-bcaile-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcaile-sec" id="learning">
        <div className="cl-bcaile-wrap">

          <div className="cl-bcaile-split">
            <div className="cl-bcaile-visual">
              <div className="cl-bcaile-ring r1" />
              <div className="cl-bcaile-ring r2" />
              <div className="cl-bcaile-ring r3" />
              <div className="cl-bcaile-mark">
                LEAP
                <span>AI-Native Platform</span>
              </div>
            </div>

            <div>
              <div className="cl-bcaile-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-bcaile-h2">Build Every Year,<br /><em>Ship Every Year</em></h2>
              <p className="cl-bcaile-body">
                Your degree runs on LEAP, an AI-native platform that personalises your path and tracks progress continuously. Nine certifications from NVIDIA, Google, GitHub, freeCodeCamp, DeepLearning.AI, and IIT Kanpur E&amp;ICT Academy are prepared for within regular coursework — not bolted on afterward.
              </p>
              <div className="cl-bcaile-tags">
                {AI_TAGS.map(t => (
                  <span key={t} className="cl-bcaile-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="cl-bcaile-roadmap">
            {ROADMAP.map(step => (
              <div className="cl-bcaile-step" key={step.num}>
                <div className="cl-bcaile-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
