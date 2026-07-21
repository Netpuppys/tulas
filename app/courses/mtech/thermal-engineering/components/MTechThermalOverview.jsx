'use client';

const DOMAINS = [
  { tag:'Core Domain', title:'Heat Transfer & Thermal Sciences',     desc:'Advanced heat transfer and thermodynamics foundations.',                              pills:['Heat Transfer','Thermal Sciences'] },
  { tag:'Core Domain', title:'Computational Fluid Dynamics (CFD)',   desc:'Simulation and computational modelling of fluid and thermal systems.',               pills:['CFD','Simulation'] },
  { tag:'Core Domain', title:'Renewable Energy Systems',             desc:'Solar thermal, energy storage, and clean energy technologies.',                      pills:['Renewable Energy','Energy Storage'] },
  { tag:'Core Domain', title:'Thermal Power Engineering',            desc:'Thermal power plants, gas turbines, and IC engines.',                                pills:['Thermal Power','Gas Turbines'] },
  { tag:'Core Domain', title:'Combustion & Emission Control',        desc:'Combustion engineering and low-carbon technologies.',                                pills:['Combustion','Emission Control'] },
  { tag:'Core Domain', title:'HVAC & Refrigeration Systems',         desc:'Smart HVAC, refrigeration, and green building technologies.',                        pills:['HVAC','Refrigeration'] },
];

const CLA = [
  'Heat Transfer & Thermal Sciences','Computational Fluid Dynamics','Thermodynamics & Exergy Analysis',
  'Renewable Energy Systems','Energy Management & Sustainability','Combustion & Emission Control',
  'Thermal Power Engineering','HVAC & Refrigeration',
  'Thermal System Simulation (ANSYS, MATLAB)','Energy Storage Technologies',
];

export default function MTechThermalOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-mtte-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-mtte-ovw-visual{position:relative;height:460px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-mtte-ovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-mtte-ovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-mtte-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1;pointer-events:none;}
        .cl-mtte-ovw-mark{text-align:center;color:#fff;z-index:1;position:relative;}
        .cl-mtte-ovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-mtte-ovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-mtte-ovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:2;}
        .cl-mtte-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mtte-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-mtte-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtte-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtte-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mtte-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtte-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mtte-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mtte-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mtte-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-mtte-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtte-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtte-ovw-dom-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-mtte-ovw-dom-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtte-ovw-dom-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtte-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-mtte-ovw-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mtte-ovw-dcard-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mtte-ovw-dcard-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mtte-ovw-dcard-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-mtte-ovw-dcard-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-mtte-ovw-dcard-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-mtte-ovw-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-mtte-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        .cl-mtte-ovw-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;margin-top:24px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mtte-ovw-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-mtte-ovw-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-mtte-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-mtte-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:960px;margin:0 auto;}
        .cl-mtte-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mtte-ovw-split{grid-template-columns:1fr}.cl-mtte-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtte-ovw-sec{padding:70px 5%}.cl-mtte-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtte-ovw-sec" id="overview">
        <div className="cl-mtte-ovw-wrap">
          <div className="cl-mtte-ovw-split">
            <div className="cl-mtte-ovw-visual">
              <div className="cl-mtte-ovw-imgwrap">
                <img src="/courses/btech/CourseOutcomes.png" alt="M.Tech Thermal Engineering Overview"/>
              </div>
              <span className="cl-mtte-ovw-glyph">TE</span>
              
              <div className="cl-mtte-ovw-badge">
                <span className="yr">2Y</span>
                <span className="lbl">Industry-Integrated<br/>Curriculum</span>
              </div>
            </div>
            <div>
              <div className="cl-mtte-ovw-eyebrow"><span className="bar"/>School of Engineering</div>
              <h2 className="cl-mtte-ovw-h2">Where Energy Innovation<br/><em>Meets Engineering Excellence</em></h2>
              <p className="cl-mtte-ovw-lead">The M.Tech in Thermal Engineering at Tulas empowers aspiring engineers and researchers with advanced knowledge and practical expertise to solve today's most critical energy and thermal engineering challenges.</p>
              <p className="cl-mtte-ovw-body">Students specialise in Advanced Heat Transfer, Computational Fluid Dynamics (CFD), Renewable &amp; Clean Energy Technologies, Thermal Power Systems, Combustion Engineering, HVAC &amp; Refrigeration, Energy Conservation, and Thermal System Optimization. Through industry collaborations, state-of-the-art laboratories, high-performance simulation tools, interdisciplinary research, and dissertation work, graduates are equipped to contribute to academia, research organisations, and leading industries worldwide.</p>
              <blockquote className="cl-mtte-ovw-quote">"Innovate energy, engineer sustainability, and lead the future of thermal technology with Tulas M.Tech in Thermal Engineering."</blockquote>
            </div>
          </div>

          <div className="cl-mtte-ovw-dom-head">
            <div className="cl-mtte-ovw-dom-eyebrow"><span className="bar"/>Advanced Learning Domains</div>
            <h2 className="cl-mtte-ovw-dom-h2">Six Domains, One<br/><em>Thermal Engineering Curriculum</em></h2>
            <p className="cl-mtte-ovw-dom-sub">An interdisciplinary approach integrating computational modelling, renewable energy, smart thermal systems, and sustainable engineering practices.</p>
          </div>

          <div className="cl-mtte-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-mtte-ovw-dcard">
                <div className="cl-mtte-ovw-dcard-vis">
                  <span className="cl-mtte-ovw-dcard-tag">{d.tag}</span>
                  <span className="cl-mtte-ovw-dcard-title">{d.title}</span>
                </div>
                <div className="cl-mtte-ovw-dcard-body">
                  <p>{d.desc}</p>
                  <div className="cl-mtte-ovw-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-mtte-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-mtte-ovw-core">
            <div className="cap">Built On Advanced Engineering</div>
            <p>Advanced Thermodynamics · Heat Transfer · Fluid Flow · Numerical Methods · Engineering Mathematics · Research Methodology</p>
          </div>

          <div className="cl-mtte-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-mtte-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-mtte-ovw-cla-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
