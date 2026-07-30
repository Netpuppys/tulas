'use client';

const DOMAINS = [
  { tag:'Core Domain',    title:'Structural Design',                  desc:'Structural analysis and design of buildings and infrastructure.',         pills:['Structural Analysis','Design'] },
  { tag:'Core Domain',    title:'Surveying',                          desc:'Land surveying techniques for construction and infrastructure planning.',  pills:['Surveying','Site Planning'] },
  { tag:'Core Domain',    title:'Construction Materials',             desc:'Materials science and construction technology fundamentals.',              pills:['Materials','Construction Tech'] },
  { tag:'Core Domain',    title:'Hydraulics',                         desc:'Fluid mechanics and hydraulic systems for civil infrastructure.',          pills:['Hydraulics','Fluid Systems'] },
  { tag:'Core Domain',    title:'Geotechnical Engineering',           desc:'Soil mechanics and foundation engineering fundamentals.',                  pills:['Soil Mechanics','Foundations'] },
  { tag:'Emerging Focus', title:'Smart Infrastructure & Sustainability', desc:'Environmental sustainability and smart urban development trends.',       pills:['Smart Infrastructure','Sustainability'] },
];

const CLA = [
  'Structural Design','Surveying','Construction Materials','Hydraulics',
  'Geotechnical Engineering','Quality Control','Project Management',
  'Environmental Sustainability','Urban Development','Safety Protocols',
];

export default function DiplomaCivilOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-dipce-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipce-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        /* visual */
        .cl-dipce-ovw-visual{position:relative;height:460px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-dipce-ovw-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:0;}
        .cl-dipce-ovw-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,31,76,.45) 0%,rgba(0,21,46,.40) 100%);z-index:1;}
        .cl-dipce-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:2;}
        .cl-dipce-ovw-center-mark{text-align:center;color:#fff;position:relative;z-index:2;}
        .cl-dipce-ovw-center-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-dipce-ovw-center-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-dipce-ovw-badge{position:absolute;bottom:-26px;left:-20px;z-index:3;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);}
        .cl-dipce-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-dipce-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        /* text */
        .cl-dipce-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipce-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipce-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipce-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipce-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-dipce-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-dipce-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        /* eligibility */
        .cl-dipce-ovw-elig-wrap{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-dipce-ovw-elig-wrap table{width:100%;border-collapse:collapse;}
        .cl-dipce-ovw-elig-wrap th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-dipce-ovw-elig-wrap td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-dipce-ovw-elig-wrap td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        /* domain section head */
        .cl-dipce-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-dipce-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipce-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipce-ovw-dom-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipce-ovw-dom-head h2 em{font-style:normal;color:#DF5400;}
        .cl-dipce-ovw-dom-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        /* domain cards */
        .cl-dipce-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-dipce-ovw-d-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-dipce-ovw-d-visual{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-dipce-ovw-d-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-dipce-ovw-d-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-dipce-ovw-d-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-dipce-ovw-d-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-dipce-ovw-pill-row{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-dipce-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        /* core card */
        .cl-dipce-ovw-d-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);margin-top:24px;}
        .cl-dipce-ovw-d-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-dipce-ovw-d-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        /* CLA */
        .cl-dipce-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-dipce-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-dipce-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-dipce-ovw-split{grid-template-columns:1fr}.cl-dipce-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipce-ovw-sec{padding:70px 5%}.cl-dipce-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-dipce-ovw-sec" id="overview">
        <div className="cl-dipce-ovw-wrap">

          <div className="cl-dipce-ovw-split">
            <div className="cl-dipce-ovw-visual">
              <img src="/diploma-in-civil-engineering/content1.webp" alt="Diploma Civil Engineering" className="cl-dipce-ovw-img"/>
              <div className="cl-dipce-ovw-overlay"/>
              <span className="cl-dipce-ovw-glyph">CE</span>
              {/* <div className="cl-dipce-ovw-center-mark">
                <span className="big">Diploma CE</span>
                <span className="small">School of Engineering</span>
              </div> */}
              <div className="cl-dipce-ovw-badge">
                <span className="yr">3Y</span>
                <span className="lbl">Industry-Relevant<br/>Curriculum</span>
              </div>
            </div>

            <div className="cl-dipce-ovw-text">
              <div className="cl-dipce-ovw-eyebrow"><span className="bar"/>School of Engineering</div>
              <h2 className="cl-dipce-ovw-h2">Where Design<br/><em>Meets Infrastructure</em></h2>
              <p className="cl-dipce-ovw-lead">The Diploma in Civil Engineering is a three-year comprehensive programme designed to equip students with the fundamentals of construction, design, and infrastructure development.</p>
              <p className="cl-dipce-ovw-body">The curriculum covers core engineering principles, including structural design, surveying, construction materials, hydraulics, and geotechnical engineering. Students gain hands-on experience with advanced software tools like AutoCAD, STAAD Pro, and Revit, essential for designing and analysing civil structures. The programme also emphasises environmental sustainability, smart infrastructure, and emerging trends in urban development, alongside contemporary construction techniques, quality control, and project management.</p>
              <blockquote className="cl-dipce-ovw-quote">"Build the future with Tulas Institute's Diploma in Civil Engineering — shaping aspiring engineers into skilled professionals to transform the world of infrastructure and design."</blockquote>
            </div>
          </div>

          {/* Eligibility */}
          <div className="cl-dipce-ovw-elig-wrap">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr><td className="k">Diploma – Civil Engineering</td><td>3 Years</td><td>Passed 10th Std./SSC examination with at least 35% marks in the qualifying examination.</td></tr>
                <tr><td className="k">Diploma – CE (Lateral Entry)</td><td>2 Years</td><td>Passed 10+2 with Physics and Chemistry compulsory plus Mathematics/Biology, OR 10+2 Science with Technical Vocational subject, OR 10th + 2-year ITI with appropriate trade.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Domain head */}
          <div className="cl-dipce-ovw-dom-head">
            <div className="cl-dipce-ovw-dom-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2>Six Domains, One<br/><em>Engineering Foundation</em></h2>
            <p>Every domain is built on strong engineering fundamentals and reinforced through workshops, labs, and industrial visits.</p>
          </div>

          {/* Domain cards */}
          <div className="cl-dipce-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-dipce-ovw-d-card">
                <div className="cl-dipce-ovw-d-visual">
                  <span className="cl-dipce-ovw-d-tag">{d.tag}</span>
                  <span className="cl-dipce-ovw-d-title">{d.title}</span>
                </div>
                <div className="cl-dipce-ovw-d-body">
                  <p>{d.desc}</p>
                  <div className="cl-dipce-ovw-pill-row">
                    {d.pills.map((p,j)=><span key={j} className="cl-dipce-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core card */}
          <div className="cl-dipce-ovw-d-core">
            <div className="cap">Built On Core Engineering</div>
            <p>Engineering Mathematics · Mechanics of Solids · Building Materials · Engineering Drawing · Construction Technology · Quality Control</p>
          </div>

          {/* CLA */}
          <div className="cl-dipce-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-dipce-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-dipce-ovw-cla-chip">{c}</span>)}
          </div>

        </div>
      </section>
    </>
  );
}
