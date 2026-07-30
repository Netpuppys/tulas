'use client';

const TAGS = [
  'Artificial Intelligence','Machine Learning','Big Data','Internet of Things',
  'Quantum Computing','Blockchain','AR & VR','Android-iOS Development',
];

const ROADMAP = [
  { num:'01', year:'Year 1', desc:'Programming fundamentals, digital electronics, and mathematics for computing.' },
  { num:'02', year:'Year 2', desc:'Data structures, computer networks, and database systems applied through labs.' },
  { num:'03', year:'Year 3', desc:'Software/hardware design, emerging technologies, and a capstone project.' },
  { num:'04', year:'Beyond', desc:'Lateral entry into B.Tech Year 2, or direct entry into the IT industry.' },
];

export default function DiplomaCsELearning() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-le-sec{position:relative;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:110px 7%;}
        .cl-dipcse-le-wrap{max-width:1280px;margin:0 auto;}

        /* top split */
        .cl-dipcse-le-split{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:center;margin-bottom:80px;}

        /* LEFT visual — orange gradient box with rings */
        .cl-dipcse-le-visual{border-radius:22px;height:420px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);box-shadow:0 24px 60px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .cl-dipcse-le-ring{position:absolute;border:2px solid rgba(255,255,255,.18);border-radius:50%;}
        .cl-dipcse-le-ring.r1{width:260px;height:260px;}
        .cl-dipcse-le-ring.r2{width:180px;height:180px;}
        .cl-dipcse-le-mark{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#fff;text-align:center;position:relative;z-index:2;line-height:1.2;}

        /* RIGHT text */
        .cl-dipcse-le-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-dipcse-le-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-dipcse-le-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);line-height:1;color:#fff;margin-bottom:22px;}
        .cl-dipcse-le-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-dipcse-le-p{font-size:1.05rem;line-height:1.9;color:rgba(255,255,255,.82);margin-bottom:20px;}
        .cl-dipcse-le-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
        .cl-dipcse-le-tag{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}

        /* BOTTOM roadmap — horizontal 4 columns */
        .cl-dipcse-le-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;}
        .cl-dipcse-le-step{text-align:center;}
        .cl-dipcse-le-num{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4);}
        .cl-dipcse-le-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px;}
        .cl-dipcse-le-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7);}

        @media(max-width:900px){.cl-dipcse-le-split{grid-template-columns:1fr}.cl-dipcse-le-roadmap{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipcse-le-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipcse-le-sec" id="learning">
        <div className="cl-dipcse-le-wrap">

          <div className="cl-dipcse-le-split">
            {/* LEFT: orange visual with rings */}
            <div className="cl-dipcse-le-visual">
              <div className="cl-dipcse-le-ring r1"/>
              <div className="cl-dipcse-le-ring r2"/>
              <div className="cl-dipcse-le-mark">Hands-On<br/>Practical Training</div>
            </div>

            {/* RIGHT: text */}
            <div className="cl-dipcse-le-text">
              <div className="cl-dipcse-le-eyebrow"><span className="bar"/>The Differentiator</div>
              <h2 className="cl-dipcse-le-h2">An AI-Integrated<br/><em>Diploma</em></h2>
              <p className="cl-dipcse-le-p">A distinctive feature of the programme is its emphasis on practical, hands-on training, reinforcing the theoretical foundations of computer science engineering — with many of today's cutting-edge technologies tracing their roots back to the foundations laid in this diploma.</p>
              <div className="cl-dipcse-le-tags">
                {TAGS.map((t,i)=><span key={i} className="cl-dipcse-le-tag">{t}</span>)}
              </div>
            </div>
          </div>

          {/* BOTTOM: horizontal roadmap */}
          <div className="cl-dipcse-le-roadmap">
            {ROADMAP.map((s,i)=>(
              <div key={i} className="cl-dipcse-le-step">
                <div className="cl-dipcse-le-num">{s.num}</div>
                <h4>{s.year}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
