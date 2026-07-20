'use client';

const TAGS = ['Artificial Intelligence','Machine Learning','Full Stack Development','Cloud Computing','Data Science','Cyber Security','DevOps'];

const STEPS = [
  { num:'01', title:'Foundations',         desc:'Programming fundamentals, computer basics, and web page fundamentals.' },
  { num:'02', title:'Applied Computing',   desc:'Data structures, databases, and software engineering fundamentals.' },
  { num:'03', title:'Specialisation',      desc:'Chosen specialisation track — AI & ML or Full Stack Development.' },
  { num:'04', title:'Capstone & Portfolio',desc:'Live projects, internships, and a final capstone project.' },
];

export default function BCAGLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-bcagle-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcagle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-bcagle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-bcagle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-bcagle-ring.r1{width:260px;height:260px;}
        .cl-bcagle-ring.r2{width:180px;height:180px;}
        .cl-bcagle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.5;}

        .cl-bcagle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-bcagle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-bcagle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-bcagle-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-bcagle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-bcagle-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-bcagle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-bcagle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-bcagle-step{text-align:center;}
        .cl-bcagle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-bcagle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-bcagle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-bcagle-split{grid-template-columns:1fr}.cl-bcagle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-bcagle-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcagle-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcagle-sec" id="learning">
        <div className="cl-bcagle-wrap">
          <div className="cl-bcagle-split">
            <div className="cl-bcagle-visual">
              <div className="cl-bcagle-ring r1"/>
              <div className="cl-bcagle-ring r2"/>
              <div className="cl-bcagle-mark">Foundational →<br/>Applied →<br/>Specialised</div>
            </div>
            <div>
              <div className="cl-bcagle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-bcagle-h2">Industry-Integrated<br/><em>Learning</em></h2>
              <p className="cl-bcagle-body">The programme is built around live projects, case studies, hackathons, workshops, and expert talks — with multiple industry certifications embedded within the curriculum to enhance employability and professional competence.</p>
              <div className="cl-bcagle-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-bcagle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-bcagle-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-bcagle-step">
                <div className="cl-bcagle-num">{s.num}</div>
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
