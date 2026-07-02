'use client';

const TECH_PILLS = [
  'Machine Learning','Deep Learning','Generative AI','Large Language Models',
  'LangChain','Hugging Face','TensorFlow','PyTorch',
  'Computer Vision','MLOps','Cloud AI','Vector Databases',
];

const SEMESTERS = [
  { num: '01', title: 'Semester 1', desc: 'Advanced Programming · Mathematics for AI · Python · Data Engineering' },
  { num: '02', title: 'Semester 2', desc: 'Machine Learning · Deep Learning · Computer Vision · NLP' },
  { num: '03', title: 'Semester 3', desc: 'Generative AI · AI Agents · MLOps · Cloud AI · Research Project' },
  { num: '04', title: 'Semester 4', desc: 'Industry Internship · Capstone · AI Product Development' },
];

export default function MCAMLCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mmlc-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-mmlc-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-mmlc-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        .cl-mmlc-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-mmlc-img{position:relative;border-radius:22px;overflow:hidden;height:460px;box-shadow:0 24px 60px rgba(0,0,0,.4)}
        .cl-mmlc-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-mmlc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}

        .cl-mmlc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-mmlc-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-mmlc-h2{margin-bottom:22px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);color:#fff}
        .cl-mmlc-h2 em{font-style:normal;color:#FFF3D7}
        .cl-mmlc-copy p{font-size:1.05rem;line-height:1.9;margin-bottom:20px;color:rgba(255,255,255,.82)}
        .cl-mmlc-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-mmlc-pill{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);transition:all .25s;cursor:default}
        .cl-mmlc-pill:hover{background:rgba(223,84,0,.35);border-color:#DF5400}

        .cl-mmlc-roadmap{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}
        .cl-mmlc-step{position:relative;padding:26px 24px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);text-align:center;transition:background .3s}
        .cl-mmlc-step:hover{background:rgba(255,255,255,.1)}
        .cl-mmlc-num{display:flex;align-items:center;justify-content:center;margin:0 auto 18px;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-mmlc-step h4{font-size:1rem;font-weight:800;color:#fff;margin-bottom:10px}
        .cl-mmlc-step p{font-size:.82rem;line-height:1.65;color:rgba(255,255,255,.7)}

        @media(max-width:968px){
          .cl-mmlc-split{grid-template-columns:1fr;gap:40px}
        }
        @media(max-width:640px){
          .cl-mmlc-sec{padding:70px 5%}
          .cl-mmlc-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-mmlc-sec" id="curriculum">
        <div className="cl-mmlc-inner">

          <div className="cl-mmlc-split">
            <div className="cl-mmlc-img">
              <img src="/courses/mca/ProgramEducationalOutcome.webp" alt="AI-Integrated MCA Curriculum" />
            </div>
            <div className="cl-mmlc-copy">
              <div className="cl-mmlc-eyebrow"><span className="bar" />AI-Integrated Curriculum</div>
              <h2 className="cl-mmlc-h2">AI Isn't a Subject.<br /><em>It's Your Entire Curriculum.</em></h2>
              <p>Every semester immerses students in modern AI technologies — from foundational machine learning to large language models, intelligent automation and production-ready AI deployment.</p>
              <p>Students graduate with practical expertise in developing scalable AI solutions for enterprises, startups and research organizations.</p>
              <div className="cl-mmlc-pills">
                {TECH_PILLS.map(p => <span className="cl-mmlc-pill" key={p}>{p}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-mmlc-roadmap">
            {SEMESTERS.map(s => (
              <div className="cl-mmlc-step" key={s.num}>
                <div className="cl-mmlc-num">{s.num}</div>
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
