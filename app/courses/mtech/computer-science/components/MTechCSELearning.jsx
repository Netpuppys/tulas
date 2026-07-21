'use client';

const TAGS = [
  'Generative AI','Agentic AI','MLOps','AI-Driven Automation',
  'Edge Intelligence','Cybersecurity Research','Frontier Technologies',
];

const STEPS = [
  { num:'01', title:'Advanced Foundations',    desc:'Advanced algorithms, distributed systems, research methodology, and modern software engineering.' },
  { num:'02', title:'Intelligent Computing',   desc:'Cloud computing, big data analytics, advanced databases, and scalable enterprise systems.' },
  { num:'03', title:'AI & Research',           desc:'Artificial Intelligence, Machine Learning, Deep Learning, NLP, and intelligent decision-making systems.' },
  { num:'04', title:'Emerging Technologies',   desc:'Generative AI, Agentic AI, MLOps, edge intelligence, and dissertation-based frontier specialisation.' },
];

export default function MTechCSELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mtcse-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mtcse-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mtcse-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mtcse-le-ring.r1{width:260px;height:260px;}
        .cl-mtcse-le-ring.r2{width:180px;height:180px;}
        .cl-mtcse-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;z-index:2;line-height:1.4;}

        .cl-mtcse-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mtcse-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mtcse-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mtcse-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mtcse-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-mtcse-le-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mtcse-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mtcse-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mtcse-le-step{text-align:center;}
        .cl-mtcse-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mtcse-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-mtcse-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mtcse-le-split{grid-template-columns:1fr}.cl-mtcse-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mtcse-le-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtcse-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtcse-le-sec" id="learning">
        <div className="cl-mtcse-le-wrap">
          <div className="cl-mtcse-le-split">
            <div className="cl-mtcse-le-visual">
              <div className="cl-mtcse-le-ring r1"/>
              <div className="cl-mtcse-le-ring r2"/>
              <div className="cl-mtcse-le-mark">AI-Integrated<br/>Curriculum</div>
            </div>
            <div>
              <div className="cl-mtcse-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mtcse-le-h2">An AI-Integrated<br/><em>Advanced Curriculum</em></h2>
              <p className="cl-mtcse-le-body">The curriculum combines advanced computing, research, and innovation, enabling students to solve real-world challenges using next-generation technologies — from advanced theoretical foundations to cutting-edge AI applications, graduates are equipped to lead technological transformation across academia, research, and industry.</p>
              <div className="cl-mtcse-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mtcse-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mtcse-le-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mtcse-le-step">
                <div className="cl-mtcse-le-num">{s.num}</div>
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
