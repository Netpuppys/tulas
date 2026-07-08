'use client';

const TECH_TAGS = [
  'React.js', 'Node.js & Express.js', 'Django', 'Spring Boot',
  'Laravel', 'REST APIs & Microservices', 'MongoDB/NoSQL', 'Cloud Deployment', 'DevOps',
];

const ROADMAP = [
  { num: '01', title: 'Core Foundation',     desc: 'C, C++, Python, Java, Data Structures, DBMS, and OS — the bedrock of every great full stack developer.' },
  { num: '02', title: 'Frontend Mastery',    desc: 'React.js, HTML/CSS, JavaScript, responsive design, and your first live deployed web application.' },
  { num: '03', title: 'Backend & APIs',      desc: 'Node.js/Express, Django, Spring Boot, Laravel, REST APIs, microservices, and cloud deployment.' },
  { num: '04', title: 'Capstone & Career',   desc: 'Internship, capstone project across your chosen stack, live deployment, and placement readiness.' },
];

export default function BCFSLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfsle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-bcfsle-wrap{max-width:1280px;margin:0 auto}
        .cl-bcfsle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-bcfsle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-bcfsle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-bcfsle-ring.r1{width:280px;height:280px}
        .cl-bcfsle-ring.r2{width:190px;height:190px}
        .cl-bcfsle-ring.r3{width:110px;height:110px}
        .cl-bcfsle-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;z-index:2;line-height:1.2}
        .cl-bcfsle-mark span{display:block;font-size:.8rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-family:'Montserrat',sans-serif;font-weight:600;margin-top:4px}

        .cl-bcfsle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-bcfsle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-bcfsle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-bcfsle-h2 em{font-style:normal;color:#FFF3D7}
        .cl-bcfsle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-bcfsle-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-bcfsle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-bcfsle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-bcfsle-step{text-align:center}
        .cl-bcfsle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-bcfsle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-bcfsle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){
          .cl-bcfsle-split{grid-template-columns:1fr;gap:50px}
          .cl-bcfsle-roadmap{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){
          .cl-bcfsle-sec{padding:70px 5%}
          .cl-bcfsle-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcfsle-sec" id="learning">
        <div className="cl-bcfsle-wrap">

          <div className="cl-bcfsle-split">
            <div className="cl-bcfsle-visual">
              <div className="cl-bcfsle-ring r1" />
              <div className="cl-bcfsle-ring r2" />
              <div className="cl-bcfsle-ring r3" />
              <div className="cl-bcfsle-mark">
                FRONTEND<br/>↓<br/>BACKEND<br/>↓<br/>FULL STACK
                <span>4 Production-Ready Stacks</span>
              </div>
            </div>

            <div>
              <div className="cl-bcfsle-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-bcfsle-h2">Build Every Layer,<br /><em>Ship Every Year</em></h2>
              <p className="cl-bcfsle-body">
                The BCA Full Stack programme runs on a project-first philosophy — every year culminates in a live deployed application. From your first React page in Year 2 to a full cloud-deployed capstone in Year 4, you graduate with a portfolio of real, working products across four major tech stacks.
              </p>
              <div className="cl-bcfsle-tags">
                {TECH_TAGS.map(t => (
                  <span key={t} className="cl-bcfsle-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="cl-bcfsle-roadmap">
            {ROADMAP.map(step => (
              <div className="cl-bcfsle-step" key={step.num}>
                <div className="cl-bcfsle-num">{step.num}</div>
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
