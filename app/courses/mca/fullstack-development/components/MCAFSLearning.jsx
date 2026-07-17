'use client';

const TAGS = ['Cloud-Native Development','Microservices Architecture','Containerization','DevOps Automation','API Development','AI Integration','Full Stack Frameworks','Enterprise Application Development'];

const STEPS = [
  { num:'01', title:'Foundations',              desc:'OS & Shell Programming, OOP with Java, and Python Programming.' },
  { num:'02', title:'Applied Computing',        desc:'Data Structures, Computer Networks, DBMS, and a first Mini Project.' },
  { num:'03', title:'Full Stack Specialisation',desc:'Web Technologies, AI, advanced electives, and a second Mini Project.' },
  { num:'04', title:'Capstone & Innovation',    desc:'Software Quality Assurance, Innovation & Entrepreneurship, and a Major Project.' },
];

export default function MCAFSLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafsle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mcafsle-wrap{max-width:1280px;margin:0 auto;}

        .cl-mcafsle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mcafsle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mcafsle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mcafsle-ring.r1{width:260px;height:260px;}
        .cl-mcafsle-ring.r2{width:180px;height:180px;}
        .cl-mcafsle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.25;}

        .cl-mcafsle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mcafsle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mcafsle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mcafsle-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mcafsle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-mcafsle-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mcafsle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mcafsle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mcafsle-step{text-align:center;}
        .cl-mcafsle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mcafsle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-mcafsle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mcafsle-split{grid-template-columns:1fr}.cl-mcafsle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mcafsle-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mcafsle-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcafsle-sec" id="learning">
        <div className="cl-mcafsle-wrap">
          <div className="cl-mcafsle-split">
            <div className="cl-mcafsle-visual">
              <div className="cl-mcafsle-ring r1"/>
              <div className="cl-mcafsle-ring r2"/>
              <div className="cl-mcafsle-mark">Full Stack →<br/>Cloud-Native →<br/>Enterprise</div>
            </div>
            <div>
              <div className="cl-mcafsle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mcafsle-h2">Industry-Integrated<br/><em>Learning</em></h2>
              <p className="cl-mcafsle-body">The programme is built around live projects, case studies, hackathons, workshops, and industry mentorship — with multiple industry certifications embedded within the curriculum, and an industry-sponsored capstone project in the final semester.</p>
              <div className="cl-mcafsle-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mcafsle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mcafsle-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mcafsle-step">
                <div className="cl-mcafsle-num">{s.num}</div>
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
