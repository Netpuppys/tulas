'use client';

const TECH_PILLS = [
  'Machine Learning','Deep Learning','Generative AI','Natural Language Processing',
  'Computer Vision','Big Data','MLOps','Statistical Modelling',
  'Predictive Analytics','Data Engineering','Cloud Analytics','Business Intelligence',
];

const ROADMAP = [
  { num: '01', title: 'Foundations',      desc: 'Python, statistics, mathematics and data structures.' },
  { num: '02', title: 'Data Engineering', desc: 'Databases, SQL/NoSQL, big data tools and pipelines.' },
  { num: '03', title: 'Intelligence',     desc: 'Machine learning, deep learning, NLP and computer vision.' },
  { num: '04', title: 'Frontier',         desc: 'Generative AI, MLOps, cloud analytics and capstone specialization.' },
];

export default function DSCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dsc-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-dsc-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-dsc-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        .cl-dsc-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-dsc-img{position:relative;border-radius:22px;overflow:hidden;height:460px;box-shadow:0 24px 60px rgba(0,0,0,.4)}
        .cl-dsc-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-dsc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}

        .cl-dsc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-dsc-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-dsc-h2{margin-bottom:22px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);color:#fff}
        .cl-dsc-h2 em{font-style:normal;color:#FFF3D7}
        .cl-dsc-copy p{font-size:1.05rem;line-height:1.9;margin-bottom:20px;color:rgba(255,255,255,.82)}
        .cl-dsc-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-dsc-pill{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);transition:all .25s;cursor:default}
        .cl-dsc-pill:hover{background:rgba(223,84,0,.35);border-color:#DF5400}

        .cl-dsc-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative}
        .cl-dsc-step{position:relative;padding:0 18px;text-align:center}
        .cl-dsc-step::before{content:'';position:absolute;top:27px;left:-50%;width:100%;height:3px;background:rgba(255,255,255,.2);z-index:1}
        .cl-dsc-step:first-child::before{display:none}
        .cl-dsc-num{display:flex;align-items:center;justify-content:center;margin:0 auto 20px;position:relative;z-index:2;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-dsc-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-dsc-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:968px){
          .cl-dsc-split{grid-template-columns:1fr;gap:40px}
          .cl-dsc-roadmap{grid-template-columns:repeat(2,1fr);gap:30px}
          .cl-dsc-step::before{display:none}
        }
        @media(max-width:640px){
          .cl-dsc-sec{padding:70px 5%}
          .cl-dsc-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dsc-sec" id="ai">
        <div className="cl-dsc-inner">

          <div className="cl-dsc-split">
            <div className="cl-dsc-img">
              <img src="/courses/btech/computer-science-engineering-data-science/contentRight.webp" alt="AI-integrated data science curriculum" />
            </div>
            <div className="cl-dsc-copy">
              <div className="cl-dsc-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-dsc-h2">An AI-Integrated<br /><em>Curriculum</em></h2>
              <p>At Tulas, AI isn't a single elective — it's woven through the entire Data Science journey. Students move from strong statistical and programming fundamentals to the most in-demand frontier technologies, graduating fluent in the tools shaping the future of analytics and intelligence.</p>
              <div className="cl-dsc-pills">
                {TECH_PILLS.map((p) => <span className="cl-dsc-pill" key={p}>{p}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-dsc-roadmap">
            {ROADMAP.map((s) => (
              <div className="cl-dsc-step" key={s.num}>
                <div className="cl-dsc-num">{s.num}</div>
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
