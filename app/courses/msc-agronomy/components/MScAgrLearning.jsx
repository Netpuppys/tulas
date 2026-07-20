'use client';

const TAGS = [
  'Field Trials','Crop Physiology','Sustainable Agriculture','Climate-Resilient Farming',
  'Precision Agronomy','Water Resource Management','Agri-Innovation','Data Analysis',
];

const STEPS = [
  { num:'01', title:'Semester I',   desc:'Foundational agronomy, crop physiology, and research methodology.' },
  { num:'02', title:'Semester II',  desc:'Soil fertility, water management, and the first field-based research project.' },
  { num:'03', title:'Semester III', desc:'Weed management, climate-resilient agriculture, and internships with agri-business firms.' },
  { num:'04', title:'Semester IV',  desc:'Advanced research, extension engagement, and a final dissertation/thesis project.' },
];

export default function MScAgrLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagr-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-mscagr-le-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagr-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-mscagr-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-mscagr-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-mscagr-le-ring.r1{width:260px;height:260px;}
        .cl-mscagr-le-ring.r2{width:180px;height:180px;}
        .cl-mscagr-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.4;}

        .cl-mscagr-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-mscagr-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-mscagr-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-mscagr-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-mscagr-le-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-mscagr-le-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mscagr-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-mscagr-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-mscagr-le-step{text-align:center;}
        .cl-mscagr-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-mscagr-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-mscagr-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-mscagr-le-split{grid-template-columns:1fr}.cl-mscagr-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-mscagr-le-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mscagr-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mscagr-le-sec" id="learning">
        <div className="cl-mscagr-le-wrap">
          <div className="cl-mscagr-le-split">
            <div className="cl-mscagr-le-visual">
              <div className="cl-mscagr-le-ring r1"/>
              <div className="cl-mscagr-le-ring r2"/>
              <div className="cl-mscagr-le-mark">Research &amp;<br/>Field Trials</div>
            </div>
            <div>
              <div className="cl-mscagr-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-mscagr-le-h2">Research-Driven,<br/><em>Field-Tested</em></h2>
              <p className="cl-mscagr-le-body">With a strong emphasis on research, data analysis, and field experimentation, students gain hands-on experience through laboratory work, field trials, and research projects — encouraging critical thinking and problem-solving to develop sustainable solutions for real-world agricultural challenges.</p>
              <div className="cl-mscagr-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-mscagr-le-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-mscagr-le-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-mscagr-le-step">
                <div className="cl-mscagr-le-num">{s.num}</div>
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
