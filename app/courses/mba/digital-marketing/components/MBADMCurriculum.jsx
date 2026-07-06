'use client';

const AI_TAGS = [
  'AI Content Generation',
  'Campaign Optimisation AI',
  'Predictive Analytics',
  'Generative AI',
  'Marketing Automation',
  'Customer Segmentation',
  'Sentiment Analysis',
  'Attribution Modelling',
  'Programmatic Advertising',
  'MarTech Stack',
];

const ROADMAP = [
  {
    num: '01',
    title: 'Foundations',
    desc: 'Digital Literacy & AI Tools for Marketers – I, plus Google AI Essentials in Semester I.',
  },
  {
    num: '02',
    title: 'Applied AI',
    desc: 'AI Tools for Marketers – II, Introduction to AI for Business, and the first live brand campaign.',
  },
  {
    num: '03',
    title: 'Advanced AI',
    desc: 'AI Tools for Marketers – III (Advanced) alongside Digital Transformation & Business Models.',
  },
  {
    num: '04',
    title: 'Leadership & Simulation',
    desc: 'Brand Leadership Workshop & Industry Simulation heading into the capstone.',
  },
];

export default function MBADMCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmcur-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-dmcur-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 80% 20%,rgba(223,84,0,.12) 0%,transparent 60%);pointer-events:none}
        .cl-dmcur-wrap{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        /* Split */
        .cl-dmcur-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center}
        .cl-dmcur-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-dmcur-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-dmcur-ring.r1{width:260px;height:260px}
        .cl-dmcur-ring.r2{width:180px;height:180px}
        .cl-dmcur-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-dmcur-mark span{display:block;font-family:'Montserrat',sans-serif;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);margin-top:6px;font-weight:600}

        /* Text */
        .cl-dmcur-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-dmcur-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-dmcur-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5vw,5rem);line-height:.95;color:#fff;margin-bottom:22px}
        .cl-dmcur-h2 em{font-style:normal;color:#FFF3D7}
        .cl-dmcur-p{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px}
        .cl-dmcur-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-dmcur-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        /* Roadmap */
        .cl-dmcur-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px}
        .cl-dmcur-step{text-align:center}
        .cl-dmcur-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-dmcur-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-dmcur-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){
          .cl-dmcur-split{grid-template-columns:1fr;gap:40px}
          .cl-dmcur-roadmap{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){
          .cl-dmcur-sec{padding:70px 5%}
          .cl-dmcur-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dmcur-sec" id="ai-curriculum">
        <div className="cl-dmcur-wrap">
          <div className="cl-dmcur-split">
            {/* Visual */}
            <div className="cl-dmcur-visual">
              <div className="cl-dmcur-ring r1" />
              <div className="cl-dmcur-ring r2" />
              <div className="cl-dmcur-mark">
                LEAP
                <span>AI-Native Platform</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="cl-dmcur-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-dmcur-h2">An AI-Integrated<br /><em>Curriculum</em></h2>
              <p className="cl-dmcur-p">
                At Tulas Institute, AI isn't a single elective — it runs through AI Tools for Marketers across three semesters, on LEAP, an AI-native platform that personalises your path and tracks progress continuously.
              </p>
              <div className="cl-dmcur-tags">
                {AI_TAGS.map(t => (
                  <span key={t} className="cl-dmcur-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="cl-dmcur-roadmap">
            {ROADMAP.map(s => (
              <div className="cl-dmcur-step" key={s.num}>
                <div className="cl-dmcur-num">{s.num}</div>
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
