'use client';

const TAGS = ['Artificial Intelligence','Machine Learning','Full Stack Development','Cloud Computing','Data Science','Cyber Security','DevOps'];

const STEPS = [
  { num:'01', title:'Foundations',           desc:'Core computing, programming fundamentals, OOP, and mathematical foundations.' },
  { num:'02', title:'Applied Computing',     desc:'Data structures, networks, databases, and a first mini project.' },
  { num:'03', title:'Specialisation',        desc:'Chosen elective track, AI, web technologies, and a second mini project.' },
  { num:'04', title:'Capstone & Innovation', desc:'Quality assurance, entrepreneurship, and an industry-sponsored major project.' },
];

export default function MCAGLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mcagle-wrap{max-width:1280px;margin:0 auto;}

        .cl-mcagle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mcagle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mcagle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mcagle-ring.r1{width:260px;height:260px;}
        .cl-mcagle-ring.r2{width:180px;height:180px;}
        .cl-mcagle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.25;}

        .cl-mcagle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mcagle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mcagle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mcagle-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mcagle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-mcagle-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mcagle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mcagle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mcagle-step{text-align:center;}
        .cl-mcagle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mcagle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-mcagle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mcagle-split{grid-template-columns:1fr}.cl-mcagle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mcagle-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mcagle-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcagle-sec" id="learning">
        <div className="cl-mcagle-wrap">
          <div className="cl-mcagle-split">
            <div className="cl-mcagle-visual">
              <div className="cl-mcagle-ring r1"/>
              <div className="cl-mcagle-ring r2"/>
              <div className="cl-mcagle-mark">Advanced<br/>Computing</div>
            </div>
            <div>
              <div className="cl-mcagle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mcagle-h2">Industry-Integrated<br/><em>Learning</em></h2>
              <p className="cl-mcagle-body">The programme is built around live projects, case studies, hackathons, workshops, expert talks, and industry mentorship — with multiple industry certifications embedded within the curriculum, and an industry-sponsored capstone project in the final semester.</p>
              <div className="cl-mcagle-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mcagle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mcagle-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mcagle-step">
                <div className="cl-mcagle-num">{s.num}</div>
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
