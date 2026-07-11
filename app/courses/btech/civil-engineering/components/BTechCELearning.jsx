'use client';

const TECH_TAGS = [
  'Building Information Modelling (BIM)','AI-Aided Structural Analysis','Smart City Sensors',
  'Sustainable Material Analytics','Digital Surveying Tools','Construction Project Software',
  'Environmental Impact Modelling','Smart Infrastructure Design',
];

const ROADMAP = [
  { num:'01', title:'Year 1', desc:'Engineering mathematics, mechanics, and foundational civil engineering concepts.' },
  { num:'02', title:'Year 2', desc:'Structural analysis, surveying, and building materials applied to design tasks.' },
  { num:'03', title:'Year 3', desc:'Geotechnical, transportation, and environmental engineering through live projects and industrial visits.' },
  { num:'04', title:'Year 4', desc:'Sustainable, smart infrastructure design and a capstone/major project demonstrating professional readiness.' },
];

export default function BTechCELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechcele-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%}
        .cl-btechcele-wrap{max-width:1280px;margin:0 auto}
        .cl-btechcele-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px}

        .cl-btechcele-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .cl-btechcele-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%}
        .cl-btechcele-ring.r1{width:260px;height:260px}
        .cl-btechcele-ring.r2{width:180px;height:180px}
        .cl-btechcele-mark{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#fff;text-align:center;z-index:2;line-height:1.1}
        .cl-btechcele-mark span{display:block;font-size:.85rem;letter-spacing:.1em;color:rgba(255,255,255,.8);font-weight:600;margin-top:6px}

        .cl-btechcele-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-btechcele-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-btechcele-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:1;color:#fff;margin-bottom:22px}
        .cl-btechcele-h2 em{font-style:normal;color:#FFF3D7}
        .cl-btechcele-body{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:24px}
        .cl-btechcele-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
        .cl-btechcele-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}

        .cl-btechcele-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        .cl-btechcele-step{text-align:center}
        .cl-btechcele-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-btechcele-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-btechcele-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:900px){.cl-btechcele-split{grid-template-columns:1fr;gap:50px}.cl-btechcele-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:520px){.cl-btechcele-sec{padding:70px 5%}.cl-btechcele-roadmap{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechcele-sec" id="technology">
        <div className="cl-btechcele-wrap">
          <div className="cl-btechcele-split">
            <div className="cl-btechcele-visual">
              <div className="cl-btechcele-ring r1"/><div className="cl-btechcele-ring r2"/>
              <div className="cl-btechcele-mark">
                BIM &amp; Digital Tools<span>Emerging Technologies</span>
              </div>
            </div>
            <div>
              <div className="cl-btechcele-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-btechcele-h2">Technology-Integrated<br/><em>Civil Engineering</em></h2>
              <p className="cl-btechcele-body">The programme integrates Building Information Modelling (BIM), AI-aided structural analysis, and smart city sensor technologies into the curriculum — preparing students for a construction industry that is increasingly digital and data-driven.</p>
              <div className="cl-btechcele-tags">
                {TECH_TAGS.map(t=><span key={t} className="cl-btechcele-tag">{t}</span>)}
              </div>
            </div>
          </div>
          <div className="cl-btechcele-roadmap">
            {ROADMAP.map(s=>(
              <div className="cl-btechcele-step" key={s.num}>
                <div className="cl-btechcele-num">{s.num}</div>
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
