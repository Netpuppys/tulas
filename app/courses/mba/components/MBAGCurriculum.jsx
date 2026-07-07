'use client';

const AI_TAGS = [
  'AI for Business Strategy', 'Predictive Analytics', 'Generative AI',
  'Marketing Automation', 'HR Analytics AI', 'Financial Modelling AI',
  'Process Automation', 'Data Visualization', 'Decision Intelligence',
];

const ROADMAP = [
  {
    num: '01',
    title: 'Foundations',
    desc: 'Digital literacy and AI tools for business, alongside the core management subjects.',
  },
  {
    num: '02',
    title: 'Applied AI',
    desc: 'AI tools applied within your specialization, plus the first live business project.',
  },
  {
    num: '03',
    title: 'Advanced AI',
    desc: 'Advanced specialization electives and an Industry Live Project.',
  },
  {
    num: '04',
    title: 'Leadership & Capstone',
    desc: 'Leadership workshop, industry simulation, and a CXO-panel capstone.',
  },
];

export default function MBAGCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagcur-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-mbagcur-wrap{max-width:1280px;margin:0 auto}
        .cl-mbagcur-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-mbagcur-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-mbagcur-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-mbagcur-ring.r1{width:280px;height:280px}
        .cl-mbagcur-ring.r2{width:190px;height:190px}
        .cl-mbagcur-ring.r3{width:110px;height:110px}
        .cl-mbagcur-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-mbagcur-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-family:'Montserrat',sans-serif;font-weight:600;margin-top:6px}

        .cl-mbagcur-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mbagcur-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mbagcur-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3vw,3.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-mbagcur-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mbagcur-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-mbagcur-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-mbagcur-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-mbagcur-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-mbagcur-step{text-align:center}
        .cl-mbagcur-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mbagcur-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-mbagcur-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){
          .cl-mbagcur-split{grid-template-columns:1fr;gap:50px}
          .cl-mbagcur-roadmap{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){
          .cl-mbagcur-sec{padding:70px 5%}
          .cl-mbagcur-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-mbagcur-sec" id="curriculum">
        <div className="cl-mbagcur-wrap">

          <div className="cl-mbagcur-split">
            {/* Visual left */}
            <div className="cl-mbagcur-visual">
              <div className="cl-mbagcur-ring r1" />
              <div className="cl-mbagcur-ring r2" />
              <div className="cl-mbagcur-ring r3" />
              <div className="cl-mbagcur-mark">
                LEAP
                <span>AI-Native Platform</span>
              </div>
            </div>

            {/* Text right */}
            <div>
              <div className="cl-mbagcur-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-mbagcur-h2">An AI-Integrated<br /><em>Curriculum</em></h2>
              <p className="cl-mbagcur-body">
                At Tulas Institute, AI runs through every specialization — on LEAP, an AI-native platform that personalises your path and tracks progress continuously, whichever function you choose to lead.
              </p>
              <div className="cl-mbagcur-tags">
                {AI_TAGS.map(t => (
                  <span key={t} className="cl-mbagcur-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="cl-mbagcur-roadmap">
            {ROADMAP.map(step => (
              <div className="cl-mbagcur-step" key={step.num}>
                <div className="cl-mbagcur-num">{step.num}</div>
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
