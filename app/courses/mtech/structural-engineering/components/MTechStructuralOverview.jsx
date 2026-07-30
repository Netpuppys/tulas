'use client';

const DOMAINS = [
  { tag:'Core Domain',    title:'Advanced Structural Analysis',    desc:'Advanced theories of structural mechanics and analysis techniques.',             pills:['Structural Mechanics','Analysis'] },
  { tag:'Core Domain',    title:'Structural Design',               desc:'Design of high-rise buildings, bridges, and industrial facilities.',              pills:['Structural Design','Design Codes'] },
  { tag:'Core Domain',    title:'Earthquake & Wind Engineering',   desc:'Earthquake-resistant design and wind engineering for resilient infrastructure.', pills:['Earthquake Engineering','Wind Engineering'] },
  { tag:'Core Domain',    title:'Construction Materials & Technology', desc:'Smart materials and modern construction technology.',                          pills:['Materials','Construction Tech'] },
  { tag:'Core Domain',    title:'Computational Tools & Simulation', desc:'Software-driven structural modelling and simulation.',                           pills:['Computational Tools','Simulation'] },
  { tag:'Emerging Focus', title:'Digital Twins & AI/ML Applications', desc:'Digital twin modelling and AI-driven optimisation in structural engineering.', pills:['Digital Twins','AI/ML'] },
];

const CLA = [
  'Advanced Structural Analysis','Structural Design','Earthquake Engineering','Wind Engineering',
  'Construction Materials','Finite Element Modelling','Digital Twin Modelling',
  'Structural Health Monitoring','Sustainable Construction','Disaster Risk Reduction',
];

export default function MTechStructuralOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-mtse-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtse-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-mtse-ovw-visual{position:relative;height:460px;border-radius:20px;box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-mtse-ovw-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:0;}
        .cl-mtse-ovw-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,31,76,.82) 0%,rgba(0,21,46,.28) 100%);z-index:1;}
        .cl-mtse-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:2;}
        .cl-mtse-ovw-mark{text-align:center;color:#fff;z-index:2;position:relative;}
        .cl-mtse-ovw-mark-big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;}
        .cl-mtse-ovw-mark-small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-mtse-ovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-mtse-ovw-badge-yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mtse-ovw-badge-lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}
        .cl-mtse-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtse-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtse-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mtse-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mtse-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mtse-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mtse-ovw-dhead{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-mtse-ovw-dhead-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtse-ovw-dhead-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtse-ovw-dhead h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mtse-ovw-dhead h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-ovw-dhead p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtse-ovw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-mtse-ovw-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mtse-ovw-card-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mtse-ovw-card-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mtse-ovw-card-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-mtse-ovw-card-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-mtse-ovw-card-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-mtse-ovw-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-mtse-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        .cl-mtse-ovw-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);margin-top:24px;}
        .cl-mtse-ovw-core-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-mtse-ovw-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-mtse-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-mtse-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-mtse-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mtse-ovw-split{grid-template-columns:1fr}.cl-mtse-ovw-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtse-ovw-sec{padding:70px 5%}.cl-mtse-ovw-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtse-ovw-sec" id="overview">
        <div className="cl-mtse-ovw-wrap">
          <div className="cl-mtse-ovw-split">
            <div className="cl-mtse-ovw-visual">
              <img src="/courses/btech/electrical-and-electronics/contentRight.webp" alt="M.Tech Structural Engineering Overview" className="cl-mtse-ovw-img"/>
              <div className="cl-mtse-ovw-overlay"/>
              <span className="cl-mtse-ovw-glyph">SE</span>
              {/* <div className="cl-mtse-ovw-mark">
                <div className="cl-mtse-ovw-mark-big">M.Tech SE</div>
                <div className="cl-mtse-ovw-mark-small">School of Engineering</div>
              </div> */}
              <div className="cl-mtse-ovw-badge">
                <span className="cl-mtse-ovw-badge-yr">2Y</span>
                <span className="cl-mtse-ovw-badge-lbl">Resilience-Focused<br/>Curriculum</span>
              </div>
            </div>
            <div>
              <div className="cl-mtse-ovw-eyebrow"><span className="bar"/>School of Engineering</div>
              <h2 className="cl-mtse-ovw-h2">Where Analysis<br/><em>Meets Resilience</em></h2>
              <p className="cl-mtse-ovw-lead">M.Tech in Structural Engineering produces specialists who are not just designers, but innovators and resilience experts — blending advanced analysis, sustainability, and disaster-risk reduction with global employability.</p>
              <p className="cl-mtse-ovw-body">Students build expertise across Advanced Structural Analysis, Structural Design, Earthquake and Wind Engineering, Construction Materials and Technology, and Computational Tools and Simulation — with emerging exposure to digital twins and AI/ML applications in structural engineering. Tulas Institute offers a perfect blend of advanced academics, practical learning, certifications, industry exposure, and research opportunities, making the programme a launchpad for both professional and academic excellence.</p>
              <blockquote className="cl-mtse-ovw-quote">"Shaping resilient structures for a sustainable tomorrow."</blockquote>
            </div>
          </div>

          <div className="cl-mtse-ovw-dhead">
            <div className="cl-mtse-ovw-dhead-eyebrow"><span className="bar"/>Core Areas of Study</div>
            <h2>Six Domains, One<br/><em>Structural Engineering Curriculum</em></h2>
            <p>Every domain combines advanced theory with computational tools and simulation software.</p>
          </div>

          <div className="cl-mtse-ovw-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-mtse-ovw-card">
                <div className="cl-mtse-ovw-card-vis">
                  <span className="cl-mtse-ovw-card-tag">{d.tag}</span>
                  <span className="cl-mtse-ovw-card-title">{d.title}</span>
                </div>
                <div className="cl-mtse-ovw-card-body">
                  <p>{d.desc}</p>
                  <div className="cl-mtse-ovw-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-mtse-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-mtse-ovw-core">
            <div className="cl-mtse-ovw-core-cap">Built On Structural Resilience</div>
            <p>Structural Mechanics · Design Codes (IS, Eurocode, ACI) · Finite Element Modelling · Disaster Risk Reduction · Sustainable Infrastructure</p>
          </div>

          <div className="cl-mtse-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-mtse-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-mtse-ovw-cla-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
