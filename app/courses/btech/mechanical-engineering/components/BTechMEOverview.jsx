'use client';

const DOMAINS = [
  { tag:'Specialisation', title:'Robotics & Automation',              desc:'Robotic systems, automation technologies, and intelligent manufacturing.',              pills:['Robotics','Automation'] },
  { tag:'Specialisation', title:'Energy Engineering',                 desc:'Sustainable energy systems, thermal engineering, and energy efficiency.',               pills:['Renewable Energy','Thermal Systems'] },
  { tag:'Core Area',      title:'Mechanical Design',                  desc:'Machine design, CAD/CAM, and product development fundamentals.',                        pills:['CAD/CAM','Product Design'] },
  { tag:'Core Area',      title:'Manufacturing Engineering',          desc:'Manufacturing processes, quality control, and production systems.',                     pills:['Manufacturing Processes','Quality Control'] },
  { tag:'Core Area',      title:'Thermodynamics & Fluid Mechanics',   desc:'Thermal systems, fluid flow, and heat transfer fundamentals.',                          pills:['Thermodynamics','Fluid Mechanics'] },
  { tag:'Core Area',      title:'Industrial & Production Engineering', desc:'Installation, operations, and industrial process management.',                          pills:['Operations','Industrial Engineering'] },
];

const CLA = [
  'Mechanical Design','Manufacturing Technology','Thermodynamics','Fluid Mechanics',
  'Robotics & Automation','Energy Engineering','Machine Design','Quality Control',
  'Industrial Engineering','CAD/CAM','Heat Transfer','Materials Science',
];

export default function BTechMEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmeov-sec{padding:110px 7%;background:#fff}
        .cl-btechmeov-wrap{max-width:1280px;margin:0 auto}

        .cl-btechmeov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}
        .cl-btechmeov-visual{position:relative;height:500px;border-radius:20px;overflow:visible}
        .cl-btechmeov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22)}
        .cl-btechmeov-imgwrap img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-btechmeov-imgwrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,21,46,.78) 0%,rgba(0,31,76,.3) 50%,transparent 100%)}
        .cl-btechmeov-glyph{position:absolute;top:20px;left:24px;font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.18);z-index:1;line-height:1;pointer-events:none}
        .cl-btechmeov-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;text-align:center}
        .cl-btechmeov-center .big{font-family:'Bebas Neue',sans-serif;font-size:3.2rem;color:#FFF3D7;line-height:1}
        .cl-btechmeov-center .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:8px;display:block}
        .cl-btechmeov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-btechmeov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-btechmeov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-btechmeov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechmeov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechmeov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btechmeov-h2 em{font-style:normal;color:#DF5400}
        .cl-btechmeov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-btechmeov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-btechmeov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-btechmeov-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed}
        .cl-btechmeov-elig table{width:100%;border-collapse:collapse}
        .cl-btechmeov-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em}
        .cl-btechmeov-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btechmeov-elig td.k{font-weight:800;color:#001F4C}
        .cl-btechmeov-elig tr:last-child td{border-bottom:none}

        .cl-btechmeov-sh{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btechmeov-sh-ey{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechmeov-sh-ey .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechmeov-sh h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btechmeov-sh h2 em{font-style:normal;color:#DF5400}
        .cl-btechmeov-sh p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechmeov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-btechmeov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btechmeov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-btechmeov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-btechmeov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-btechmeov-dbody{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-btechmeov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-btechmeov-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-btechmeov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-btechmeov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btechmeov-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-btechmeov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-btechmeov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-btechmeov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto}
        .cl-btechmeov-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-btechmeov-split{grid-template-columns:1fr;gap:60px}.cl-btechmeov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechmeov-sec{padding:70px 5%}.cl-btechmeov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechmeov-sec" id="overview">
        <div className="cl-btechmeov-wrap">

          <div className="cl-btechmeov-split">
            {/* LEFT — image */}
            <div className="cl-btechmeov-visual">
              <div className="cl-btechmeov-imgwrap">
                <img src="/courses/btech/mechanical-engineering/edge.webp" alt="Department of Mechanical Engineering" loading="lazy"/>
              </div>
              <span className="cl-btechmeov-glyph">ME</span>
              {/* <div className="cl-btechmeov-center">
                <span className="big">MECH</span>
                <span className="small">Department of Mechanical Engineering</span>
              </div> */}
              <div className="cl-btechmeov-badge">
                <span className="yr">4Y</span>
                <span className="lbl">AICTE Approved<br/>NBA Accredited</span>
              </div>
            </div>
            {/* RIGHT — text */}
            <div>
              <div className="cl-btechmeov-eyebrow"><span className="bar"/>Department of Mechanical Engineering</div>
              <h2 className="cl-btechmeov-h2">Where Design<br/><em>Meets Machines</em></h2>
              <p className="cl-btechmeov-lead">The Department of Mechanical Engineering at Tulas Institute, established in 2006, is one of the oldest and most prestigious departments, dedicated to academic excellence and research-driven innovation.</p>
              <p className="cl-btechmeov-body">Offering Diploma, Undergraduate (B.Tech), and Postgraduate (M.Tech) programmes, the department focuses on developing technical expertise, analytical thinking, and problem-solving abilities. The curriculum provides a strong foundation in mechanical design, manufacturing, thermodynamics, robotics, and energy engineering, with specialisations in Robotics and Energy Engineering equipping students with cutting-edge knowledge in automation and sustainable energy — backed by state-of-the-art laboratories and industry collaborations.</p>
              <blockquote className="cl-btechmeov-quote">"Innovate, design, and build the future with a B.Tech in Mechanical Engineering."</blockquote>
            </div>
          </div>

          {/* Eligibility */}
          <div className="cl-btechmeov-elig">
            <table>
              <thead><tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr></thead>
              <tbody>
                <tr><td className="k">B.Tech</td><td>4 Years</td><td>Passed 10+2 with Physics and Mathematics compulsory, plus one of Chemistry / Biology / Computer Science / Engineering Graphics / Business Studies, with at least 45% marks (40% for reserved category). Diploma holders in Engineering also eligible.</td></tr>
               
              </tbody>
            </table>
          </div>

          {/* Section head */}
          <div className="cl-btechmeov-sh">
            <div className="cl-btechmeov-sh-ey"><span className="bar"/>Core Areas You'll Study</div>
            <h2>Six Core Areas,<br/><em>Two Specialisations</em></h2>
            <p>Every core area is built on strong engineering fundamentals, with dedicated specialisation tracks in Robotics and Energy Engineering.</p>
          </div>

          {/* Domain grid */}
          <div className="cl-btechmeov-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-btechmeov-card">
                <div className="cl-btechmeov-dvis">
                  <span className="cl-btechmeov-dtag">{d.tag}</span>
                  <span className="cl-btechmeov-dtitle">{d.title}</span>
                </div>
                <div className="cl-btechmeov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-btechmeov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-btechmeov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-btechmeov-core">
              <div className="cap">Built On Core<br/>Engineering</div>
              <p>Engineering Mechanics · Materials Science · Machine Design · Manufacturing Technology · Heat Transfer · Engineering Drawing</p>
            </div>
          </div>

          {/* CLA chips */}
          <div className="cl-btechmeov-cla-title">Core Learning Areas</div>
          <div className="cl-btechmeov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-btechmeov-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
