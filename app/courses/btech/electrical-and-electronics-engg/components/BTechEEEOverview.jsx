'use client';

const DOMAINS = [
  { tag:'Core Area',     title:'Power Systems',                        desc:'Generation, transmission, and distribution of electrical power.',                      pills:['Power Generation','Transmission & Distribution'] },
  { tag:'Core Area',     title:'Power Electronics & Control Systems',  desc:'Power converters, drives, and control system design.',                                 pills:['Power Electronics','Control Systems'] },
  { tag:'Core Area',     title:'VLSI & Automation',                    desc:'VLSI design fundamentals and industrial automation systems.',                           pills:['VLSI Design','Industrial Automation'] },
  { tag:'Emerging Tech', title:'Electric Vehicles & Efficient Machines',desc:'EV powertrain systems and efficient electrical machine design.',                       pills:['Electric Vehicles','Efficient Machines'] },
  { tag:'Emerging Tech', title:'Renewable Energy & Smart Grids',       desc:'Solar, wind, and smart grid technologies for a clean energy future.',                  pills:['Renewable Energy','Smart Grids'] },
  { tag:'Emerging Tech', title:'IoT Networks',                         desc:'Connected electrical systems and IoT-enabled monitoring and control.',                  pills:['IoT Networks','Smart Monitoring'] },
];

const CLA = [
  'Power Systems','Power Electronics','Control Systems','VLSI Design',
  'Industrial Automation','Electric Vehicles','Renewable Energy','Smart Grids',
  'Efficient Machines','IoT Networks','Electrical Machines','Electromagnetic Fields',
];

export default function BTechEEEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeeov-sec{padding:110px 7%;background:#fff}
        .cl-btecheeeov-wrap{max-width:1280px;margin:0 auto}

        .cl-btecheeeov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}
        .cl-btecheeeov-visual{position:relative;height:500px;border-radius:20px;overflow:visible}
        .cl-btecheeeov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22)}
        .cl-btecheeeov-imgwrap img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-btecheeeov-imgwrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,21,46,.78) 0%,rgba(0,31,76,.3) 50%,transparent 100%)}
        .cl-btecheeeov-glyph{position:absolute;top:20px;left:24px;font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.18);z-index:1;line-height:1;pointer-events:none}
        .cl-btecheeeov-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;text-align:center}
        .cl-btecheeeov-center .big{font-family:'Bebas Neue',sans-serif;font-size:3.2rem;color:#FFF3D7;line-height:1}
        .cl-btecheeeov-center .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:8px;display:block}
        .cl-btecheeeov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-btecheeeov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-btecheeeov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-btecheeeov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheeeov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheeeov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btecheeeov-h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeeov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-btecheeeov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-btecheeeov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-btecheeeov-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed}
        .cl-btecheeeov-elig table{width:100%;border-collapse:collapse}
        .cl-btecheeeov-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em}
        .cl-btecheeeov-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btecheeeov-elig td.k{font-weight:800;color:#001F4C}
        .cl-btecheeeov-elig tr:last-child td{border-bottom:none}

        .cl-btecheeeov-sh{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btecheeeov-sh-ey{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheeeov-sh-ey .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheeeov-sh h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btecheeeov-sh h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeeov-sh p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btecheeeov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-btecheeeov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btecheeeov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-btecheeeov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-btecheeeov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-btecheeeov-dbody{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-btecheeeov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-btecheeeov-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-btecheeeov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-btecheeeov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btecheeeov-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-btecheeeov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-btecheeeov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-btecheeeov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto}
        .cl-btecheeeov-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-btecheeeov-split{grid-template-columns:1fr;gap:60px}.cl-btecheeeov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btecheeeov-sec{padding:70px 5%}.cl-btecheeeov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheeeov-sec" id="overview">
        <div className="cl-btecheeeov-wrap">

          <div className="cl-btecheeeov-split">
            {/* LEFT — image */}
            <div className="cl-btecheeeov-visual">
              <div className="cl-btecheeeov-imgwrap">
                <img src="/courses/btech/electrical-and-electronics/contentLeft.webp" alt="Department of Electrical & Electronics Engineering" loading="lazy"/>
              </div>
              {/* <span className="cl-btecheeeov-glyph">EEE</span>
              <div className="cl-btecheeeov-center">
                <span className="big">EEE</span>
                <span className="small">Department of Electrical &amp; Electronics Engineering</span>
              </div> */}
              <div className="cl-btecheeeov-badge">
                <span className="yr">4Y</span>
                <span className="lbl">AICTE Approved<br/>NBA Accredited</span>
              </div>
            </div>
            {/* RIGHT — text */}
            <div>
              <div className="cl-btecheeeov-eyebrow"><span className="bar"/>Department of Electrical &amp; Electronics Engineering</div>
              <h2 className="cl-btecheeeov-h2">Where Power<br/><em>Meets Innovation</em></h2>
              <p className="cl-btecheeeov-lead">The Department of Electrical &amp; Electronics Engineering (EEE) at Tulas Institute, established in 2006, is committed to academic excellence, research, and innovation.</p>
              <p className="cl-btecheeeov-body">The EEE programme focuses on cutting-edge technologies and industry-driven learning across Power Systems, Power Electronics, Automation, VLSI, Control Systems, Electric Vehicles, Efficient Machines, Renewable Energy, Smart Grids, and IoT networks. With an emphasis on sustainability and energy efficiency, students gain hands-on experience in modern electrical systems, automation technologies, and emerging energy solutions through state-of-the-art laboratories, research facilities, and industry collaborations.</p>
              <blockquote className="cl-btecheeeov-quote">"Power the future with innovation, sustainability, and technology — through a B.Tech in Electrical &amp; Electronics Engineering."</blockquote>
            </div>
          </div>

          {/* Eligibility */}
          <div className="cl-btecheeeov-elig">
            <table>
              <thead><tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr></thead>
              <tbody>
                <tr><td className="k">B.Tech</td><td>4 Years</td><td>Passed 10+2 with Physics and Mathematics compulsory, plus one of Chemistry / Biology / Computer Science / Engineering Graphics / Business Studies, with at least 45% marks (40% for reserved category). Diploma holders in Engineering also eligible.</td></tr>
                <tr><td className="k">B.Tech (Lateral Entry)</td><td>3 Years</td><td>Diploma in Engineering &amp; Technology (45%/40% marks) or B.Sc. graduates with 10+2 Mathematics, subject to bridge course requirements.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section head */}
          <div className="cl-btecheeeov-sh">
            <div className="cl-btecheeeov-sh-ey"><span className="bar"/>Core Areas You'll Study</div>
            <h2>Six Core Areas,<br/><em>One Energy Core</em></h2>
            <p>Every core area is built on strong electrical fundamentals and extended into sustainable and smart energy technologies.</p>
          </div>

          {/* Domain grid */}
          <div className="cl-btecheeeov-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-btecheeeov-card">
                <div className="cl-btecheeeov-dvis">
                  <span className="cl-btecheeeov-dtag">{d.tag}</span>
                  <span className="cl-btecheeeov-dtitle">{d.title}</span>
                </div>
                <div className="cl-btecheeeov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-btecheeeov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-btecheeeov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-btecheeeov-core">
              <div className="cap">Built On Core<br/>Engineering</div>
              <p>Circuit Theory · Electromagnetic Fields · Electrical Machines · Power Systems Analysis · Control Systems · Engineering Drawing</p>
            </div>
          </div>

          {/* CLA chips */}
          <div className="cl-btecheeeov-cla-title">Core Learning Areas</div>
          <div className="cl-btecheeeov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-btecheeeov-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
