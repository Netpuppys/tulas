'use client';

const TAGS = [
  'Sustainable Agriculture','Precision Farming','Organic Farming','Crop Diversification',
  'Agri-Tech Tools','Soil Testing','Seed Technology','Farm Management',
];

const STEPS = [
  { num:'01', title:'Year 1', desc:'Foundational sciences, agronomy basics, and introduction to agricultural systems.' },
  { num:'02', title:'Year 2', desc:'Soil science, plant breeding, and horticulture applied through lab and field work.' },
  { num:'03', title:'Year 3', desc:'Plant pathology, entomology, and animal science through practical training.' },
  { num:'04', title:'Year 4', desc:'Agricultural economics, extension education, and a capstone/major project.' },
];

export default function BScAgLearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagle-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-bscagle-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagle-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;}
        .cl-bscagle-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-bscagle-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-bscagle-ring.r1{width:260px;height:260px;}
        .cl-bscagle-ring.r2{width:180px;height:180px;}
        .cl-bscagle-mark{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#fff;text-align:center;z-index:2;line-height:1.4;}

        .cl-bscagle-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-bscagle-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-bscagle-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-bscagle-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-bscagle-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px;}
        .cl-bscagle-tags{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-bscagle-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        .cl-bscagle-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:80px;}
        .cl-bscagle-step{text-align:center;}
        .cl-bscagle-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-bscagle-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-bscagle-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-bscagle-split{grid-template-columns:1fr}.cl-bscagle-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-bscagle-roadmap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bscagle-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bscagle-sec" id="learning">
        <div className="cl-bscagle-wrap">
          <div className="cl-bscagle-split">
            <div className="cl-bscagle-visual">
              <div className="cl-bscagle-ring r1"/>
              <div className="cl-bscagle-ring r2"/>
              <div className="cl-bscagle-mark">Field &amp; Lab<br/>Based Learning</div>
            </div>
            <div>
              <div className="cl-bscagle-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-bscagle-h2">Practical Solutions,<br/><em>Not Just Theory</em></h2>
              <p className="cl-bscagle-body">The programme is designed to instil subject-specific knowledge while establishing a link between theory and practical solutions — using scientific and experimental evidence to make real agricultural issues appealing, and practical application and research to hone problem-solving skills.</p>
              <div className="cl-bscagle-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-bscagle-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-bscagle-roadmap">
            {STEPS.map((s,i)=>(
              <div key={i} className="cl-bscagle-step">
                <div className="cl-bscagle-num">{s.num}</div>
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
