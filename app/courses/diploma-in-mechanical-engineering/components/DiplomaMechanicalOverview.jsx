'use client';

const DOMAINS = [
  { tag:'Core Domain',    title:'Thermodynamics',                       desc:'Thermodynamics, heat transfer, and energy systems for mechanical engineering applications.',   pills:['Thermodynamics','Energy Systems'] },
  { tag:'Core Domain',    title:'Fluid Mechanics',                      desc:'Fluid mechanics and hydraulic systems applied to machinery and infrastructure.',              pills:['Fluid Mechanics','Hydraulics'] },
  { tag:'Core Domain',    title:'Strength of Materials & Machine Design',desc:'Material properties, stress analysis, and machine component design fundamentals.',           pills:['Materials','Machine Design'] },
  { tag:'Core Domain',    title:'CAD/CAM',                              desc:'Computer-aided design and manufacturing using AutoCAD, SolidWorks, and CNC programming.',    pills:['CAD/CAM','CNC'] },
  { tag:'Core Domain',    title:'Industrial Automation',                 desc:'PLC programming, robotics, and automation systems used in modern manufacturing.',            pills:['Automation','Manufacturing'] },
  { tag:'Emerging Focus', title:'Renewable Energy & Mechatronics',      desc:'Mechatronics integration and renewable energy systems shaping sustainable manufacturing.',   pills:['Renewable Energy','Mechatronics'] },
];

const CLA = [
  'Thermodynamics','Fluid Mechanics','Strength of Materials','Machine Design',
  'CAD/CAM','Industrial Automation','Quality Control','Maintenance Management',
  'Renewable Energy','Mechatronics',
];

export default function DiplomaMechanicalOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipme-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-dipme-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipme-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        /* visual */
        .cl-dipme-ovw-visual{position:relative;height:460px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-dipme-ovw-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:0;}
        .cl-dipme-ovw-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,31,76,.45) 0%,rgba(0,21,46,.40) 100%);z-index:1;}
        .cl-dipme-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:2;}
        .cl-dipme-ovw-center-mark{text-align:center;color:#fff;position:relative;z-index:2;}
        .cl-dipme-ovw-center-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-dipme-ovw-center-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-dipme-ovw-badge{position:absolute;bottom:-26px;left:-20px;z-index:3;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);}
        .cl-dipme-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-dipme-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        /* text */
        .cl-dipme-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipme-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipme-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipme-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipme-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-dipme-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-dipme-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        /* eligibility */
        .cl-dipme-ovw-elig-wrap{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-dipme-ovw-elig-wrap table{width:100%;border-collapse:collapse;}
        .cl-dipme-ovw-elig-wrap th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-dipme-ovw-elig-wrap td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-dipme-ovw-elig-wrap td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        /* domain section head */
        .cl-dipme-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-dipme-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipme-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipme-ovw-dom-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipme-ovw-dom-head h2 em{font-style:normal;color:#DF5400;}
        .cl-dipme-ovw-dom-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        /* domain cards */
        .cl-dipme-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-dipme-ovw-d-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-dipme-ovw-d-visual{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-dipme-ovw-d-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-dipme-ovw-d-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-dipme-ovw-d-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-dipme-ovw-d-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-dipme-ovw-pill-row{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-dipme-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        /* core card */
        .cl-dipme-ovw-d-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);margin-top:24px;}
        .cl-dipme-ovw-d-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-dipme-ovw-d-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        /* CLA */
        .cl-dipme-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-dipme-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-dipme-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-dipme-ovw-split{grid-template-columns:1fr}.cl-dipme-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipme-ovw-sec{padding:70px 5%}.cl-dipme-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-dipme-ovw-sec" id="overview">
        <div className="cl-dipme-ovw-wrap">

          <div className="cl-dipme-ovw-split">
            <div className="cl-dipme-ovw-visual">
              <img src="/diploma-in-mechanical-engineering/content1.png" alt="Diploma Mechanical Engineering" className="cl-dipme-ovw-img"/>
              <div className="cl-dipme-ovw-overlay"/>
              <span className="cl-dipme-ovw-glyph">ME</span>
              
              <div className="cl-dipme-ovw-badge">
                <span className="yr">3Y</span>
                <span className="lbl">Industry-Focused<br/>Curriculum</span>
              </div>
            </div>

            <div className="cl-dipme-ovw-text">
              <div className="cl-dipme-ovw-eyebrow"><span className="bar"/>School of Engineering</div>
              <h2 className="cl-dipme-ovw-h2">Where Design<br/><em>Meets Machines</em></h2>
              <p className="cl-dipme-ovw-lead">The Diploma in Mechanical Engineering is a three-year programme that builds engineering professionals equipped for modern manufacturing, design, and automation industries.</p>
              <p className="cl-dipme-ovw-body">The curriculum covers thermodynamics, fluid mechanics, strength of materials, and machine design alongside hands-on training in AutoCAD, SolidWorks, and CNC machining. Students gain real-world exposure through workshops, industrial visits, and live projects with manufacturing and automotive organisations. The programme also integrates industrial automation, mechatronics, renewable energy systems, and quality control — preparing graduates for immediate employment or lateral entry into B.Tech Mechanical Engineering.</p>
              <blockquote className="cl-dipme-ovw-quote">"Innovate, create, and engineer the future — a programme built for the machines and systems that power the modern world."</blockquote>
            </div>
          </div>

          <div className="cl-dipme-ovw-elig-wrap">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr><td className="k">Diploma – Mechanical Engineering</td><td>3 Years</td><td>Passed 10th Std./SSC examination with at least 35% marks in the qualifying examination.</td></tr>
                <tr><td className="k">Diploma – ME (Lateral Entry)</td><td>2 Years</td><td>Passed 10+2 with Physics and Chemistry compulsory plus Mathematics, OR 10th + 2-year ITI with appropriate trade.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="cl-dipme-ovw-dom-head">
            <div className="cl-dipme-ovw-dom-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2>Six Domains, One<br/><em>Engineering Foundation</em></h2>
            <p>Every domain is built on strong mechanical engineering fundamentals and reinforced through workshops, labs, and industrial visits.</p>
          </div>

          <div className="cl-dipme-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-dipme-ovw-d-card">
                <div className="cl-dipme-ovw-d-visual">
                  <span className="cl-dipme-ovw-d-tag">{d.tag}</span>
                  <span className="cl-dipme-ovw-d-title">{d.title}</span>
                </div>
                <div className="cl-dipme-ovw-d-body">
                  <p>{d.desc}</p>
                  <div className="cl-dipme-ovw-pill-row">
                    {d.pills.map((p,j)=><span key={j} className="cl-dipme-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-dipme-ovw-d-core">
            <div className="cap">Built On Core Engineering</div>
            <p>Engineering Mechanics · Materials Science · Machine Drawing · Manufacturing Technology · Quality Control · Maintenance Management</p>
          </div>

          <div className="cl-dipme-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-dipme-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-dipme-ovw-cla-chip">{c}</span>)}
          </div>

        </div>
      </section>
    </>
  );
}
