'use client';

const DOMAINS = [
  { tag:'Core Domain',     title:'Crop Physiology & Production',              desc:'Advanced crop physiology and modern production systems.',                            pills:['Crop Physiology','Production Systems'] },
  { tag:'Core Domain',     title:'Soil Fertility & Water Management',         desc:'Soil fertility management and advanced irrigation agronomy.',                        pills:['Soil Fertility','Water Management'] },
  { tag:'Core Domain',     title:'Weed Science & Management',                 desc:'Weed biology, herbicides, and integrated weed management.',                          pills:['Weed Science','Herbicides'] },
  { tag:'Core Domain',     title:'Climate-Resilient Agriculture',             desc:'Sustainable and climate-resilient farming systems.',                                  pills:['Climate Resilience','Sustainability'] },
  { tag:'Core Domain',     title:'Agricultural Extension & Rural Engagement', desc:'Extension activities, workshops, and rural community engagement.',                    pills:['Extension','Rural Engagement'] },
  { tag:'Emerging Focus',  title:'Agri-Business & Research Methodology',     desc:'Research methodology and interactions with agri-business firms.',                     pills:['Research Methods','Agri-Business'] },
];

const CLA = [
  'Environmental Science','Biotechnology','Agricultural Economics','Data Analysis',
  'Field Experimentation','Research Methodology','Sustainable Agriculture',
  'Crop Ecology','Farming Systems','Rural Development',
];

export default function MScAgrOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagr-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-mscagr-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagr-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-mscagr-ovw-visual{position:relative;height:500px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-mscagr-ovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-mscagr-ovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-mscagr-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1;pointer-events:none;}
        .cl-mscagr-ovw-mark{text-align:center;color:#fff;z-index:1;position:relative;}
        .cl-mscagr-ovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-mscagr-ovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-mscagr-ovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:2;}
        .cl-mscagr-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mscagr-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-mscagr-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mscagr-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mscagr-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mscagr-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-mscagr-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mscagr-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mscagr-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mscagr-ovw-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-mscagr-ovw-elig table{width:100%;border-collapse:collapse;}
        .cl-mscagr-ovw-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-mscagr-ovw-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-mscagr-ovw-elig td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        .cl-mscagr-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-mscagr-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mscagr-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mscagr-ovw-dom-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-mscagr-ovw-dom-h2 em{font-style:normal;color:#DF5400;}
        .cl-mscagr-ovw-dom-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mscagr-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-mscagr-ovw-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mscagr-ovw-dcard-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mscagr-ovw-dcard-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mscagr-ovw-dcard-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-mscagr-ovw-dcard-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-mscagr-ovw-dcard-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-mscagr-ovw-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-mscagr-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        .cl-mscagr-ovw-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;margin-top:24px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mscagr-ovw-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-mscagr-ovw-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-mscagr-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-mscagr-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-mscagr-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mscagr-ovw-split{grid-template-columns:1fr}.cl-mscagr-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mscagr-ovw-sec{padding:70px 5%}.cl-mscagr-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mscagr-ovw-sec" id="overview">
        <div className="cl-mscagr-ovw-wrap">
          <div className="cl-mscagr-ovw-split">
            <div className="cl-mscagr-ovw-visual">
              <div className="cl-mscagr-ovw-imgwrap">
                <img src="/courses/applied-science/contentLeft.webp" alt="M.Sc. Agronomy Overview"/>
              </div>
              <span className="cl-mscagr-ovw-glyph">MSc</span>
             
              <div className="cl-mscagr-ovw-badge">
                <span className="yr">2Y</span>
                <span className="lbl">Research-Driven<br/>Curriculum</span>
              </div>
            </div>
            <div>
              <div className="cl-mscagr-ovw-eyebrow"><span className="bar"/>School of Agriculture</div>
              <h2 className="cl-mscagr-ovw-h2">Where Research<br/><em>Meets The Field</em></h2>
              <p className="cl-mscagr-ovw-lead">The M.Sc. in Agronomy at Tulas Institute builds advanced expertise in crop production, soil science, and sustainable farming practices — developing the scientific understanding and analytical thinking modern agriculture demands.</p>
              <p className="cl-mscagr-ovw-body">Structured to go beyond classroom learning, the programme integrates academic depth with field-based application. Students learn to understand crop systems, optimise resource use, and adopt innovative techniques that improve productivity while maintaining ecological balance — covering crop physiology, soil fertility management, agronomic practices, weed management, water resource management, and climate-resilient agriculture. Interdisciplinary inputs from environmental science, biotechnology, and agricultural economics let students approach farming systems holistically, with strong emphasis on research, data analysis, and field experimentation through laboratory work, field trials, and research projects.</p>
              <blockquote className="cl-mscagr-ovw-quote">"Extension activities, workshops, and rural engagement initiatives foster leadership, innovation, and a deep sense of responsibility towards sustainable agriculture."</blockquote>
            </div>
          </div>

          <div className="cl-mscagr-ovw-elig">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="k">M.Sc. Agronomy</td>
                  <td>2 Years</td>
                  <td>Passed B.Sc. Agriculture / B.Sc. Horticulture / B.Sc. Forestry from a recognised university.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cl-mscagr-ovw-dom-head">
            <div className="cl-mscagr-ovw-dom-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-mscagr-ovw-dom-h2">Six Domains, One<br/><em>Agronomy Foundation</em></h2>
            <p className="cl-mscagr-ovw-dom-sub">Every domain combines research methodology with lab work and field-based application.</p>
          </div>

          <div className="cl-mscagr-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-mscagr-ovw-dcard">
                <div className="cl-mscagr-ovw-dcard-vis">
                  <span className="cl-mscagr-ovw-dcard-tag">{d.tag}</span>
                  <span className="cl-mscagr-ovw-dcard-title">{d.title}</span>
                </div>
                <div className="cl-mscagr-ovw-dcard-body">
                  <p>{d.desc}</p>
                  <div className="cl-mscagr-ovw-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-mscagr-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-mscagr-ovw-core">
            <div className="cap">Built On Core Agronomic Sciences</div>
            <p>Crop Physiology · Soil Fertility Management · Weed Science · Water Resource Management · Agro-Meteorology · Cropping Systems</p>
          </div>

          <div className="cl-mscagr-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-mscagr-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-mscagr-ovw-cla-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
