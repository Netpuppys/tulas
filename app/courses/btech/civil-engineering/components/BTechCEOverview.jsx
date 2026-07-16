'use client';

const DOMAINS = [
  { tag:'Core Area', title:'Structural Engineering',        desc:'Structural analysis, design, and detailing of buildings and infrastructure.',              pills:['Structural Analysis','RCC & Steel Design'] },
  { tag:'Core Area', title:'Geotechnical Engineering',      desc:'Soil mechanics, foundation engineering, and ground improvement techniques.',               pills:['Soil Mechanics','Foundation Design'] },
  { tag:'Core Area', title:'Environmental Engineering',     desc:'Water systems, waste management, and eco-friendly construction practices.',                 pills:['Water Systems','Sustainable Construction'] },
  { tag:'Core Area', title:'Transportation Engineering',    desc:'Highway design, traffic engineering, and transportation planning.',                         pills:['Highway Design','Traffic Engineering'] },
  { tag:'Core Area', title:'Construction Management',       desc:'Project planning, scheduling, and construction technology.',                                pills:['Project Planning','Construction Technology'] },
  { tag:'Emerging Focus', title:'Sustainable & Smart City Design', desc:'Eco-friendly construction techniques and smart city infrastructure solutions.',      pills:['Smart City Systems','Green Building'] },
];

const CLA = [
  'Structural Analysis','Geotechnical Engineering','Environmental Engineering','Transportation Engineering',
  'Construction Management','Surveying','Building Materials','Fluid Mechanics',
  'Sustainable Design','Smart City Solutions','Project Management','Engineering Drawing',
];

export default function BTechCEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechceov-sec{padding:110px 7%;background:#fff}
        .cl-btechceov-wrap{max-width:1280px;margin:0 auto}

        .cl-btechceov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}
        .cl-btechceov-visual{position:relative;height:500px;border-radius:20px;overflow:visible}
        .cl-btechceov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center}
        .cl-btechceov-imgwrap img{width:100%;height:100%;object-fit:cover}
        .cl-btechceov-imgwrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,21,46,.72) 0%,transparent 55%)}
        .cl-btechceov-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1}
        .cl-btechceov-center{text-align:center;color:#fff;z-index:2;position:relative}
        .cl-btechceov-center .big{font-family:'Bebas Neue',sans-serif;font-size:3.2rem;color:#FFF3D7;line-height:1}
        .cl-btechceov-center .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block}
        .cl-btechceov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-btechceov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-btechceov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-btechceov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechceov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechceov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btechceov-h2 em{font-style:normal;color:#DF5400}
        .cl-btechceov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-btechceov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-btechceov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-btechceov-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed}
        .cl-btechceov-elig table{width:100%;border-collapse:collapse}
        .cl-btechceov-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em}
        .cl-btechceov-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btechceov-elig td.k{font-weight:800;color:#001F4C}
        .cl-btechceov-elig tr:last-child td{border-bottom:none}

        .cl-btechceov-sh{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btechceov-sh-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechceov-sh-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechceov-sh h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btechceov-sh h2 em{font-style:normal;color:#DF5400}
        .cl-btechceov-sh p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechceov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-btechceov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btechceov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-btechceov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-btechceov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-btechceov-dbody{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-btechceov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-btechceov-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-btechceov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-btechceov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btechceov-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-btechceov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-btechceov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-btechceov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto}
        .cl-btechceov-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-btechceov-split{grid-template-columns:1fr;gap:60px}.cl-btechceov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechceov-sec{padding:70px 5%}.cl-btechceov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechceov-sec" id="overview">
        <div className="cl-btechceov-wrap">

          {/* Split */}
          <div className="cl-btechceov-split">
            <div className="cl-btechceov-visual">
              <div className="cl-btechceov-imgwrap">
                <img src="/courses/btech/civil-engineering/beyondCurriculum.png" alt="Department of Civil Engineering" loading="lazy"/>
                {/* <span className="cl-btechceov-glyph">CE</span> */}
                {/* <div className="cl-btechceov-center">
                  <span className="big">CIVIL</span>
                  <span className="small">Department of Civil Engineering</span>
                </div> */}
              </div>
              <div className="cl-btechceov-badge">
                <span className="yr">4Y</span>
                <span className="lbl">AICTE Approved<br/>NBA Accredited</span>
              </div>
            </div>
            <div>
              <div className="cl-btechceov-eyebrow"><span className="bar"/>Department of Civil Engineering</div>
              <h2 className="cl-btechceov-h2">Where Design<br/><em>Meets Infrastructure</em></h2>
              <p className="cl-btechceov-lead">The Department of Civil Engineering at Tulas Institute is dedicated to shaping future engineers who can design, build, and sustain the infrastructure of tomorrow.</p>
              <p className="cl-btechceov-body">Established in 2011, the department offers a comprehensive B.Tech in Civil Engineering, giving students in-depth knowledge of construction, structural analysis, geotechnical engineering, environmental engineering, and transportation systems. The curriculum integrates theoretical knowledge with hands-on practical learning through advanced laboratories, industrial visits, live projects, and expert mentorship, with a strong emphasis on sustainability, eco-friendly construction, and smart city solutions.</p>
              <blockquote className="cl-btechceov-quote">"Build the foundations of tomorrow with a B.Tech in Civil Engineering — empowering future engineers with the skills to design, innovate, and create a sustainable world."</blockquote>
            </div>
          </div>

          {/* Eligibility Table */}
          <div className="cl-btechceov-elig">
            <table>
              <thead><tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr></thead>
              <tbody>
                <tr><td className="k">B.Tech</td><td>4 Years</td><td>Passed 10+2 with Physics and Mathematics compulsory, plus one of Chemistry / Biology / Computer Science / Engineering Graphics / Business Studies, with at least 45% marks (40% for reserved category). Diploma holders in Engineering also eligible.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section Heading */}
          <div className="cl-btechceov-sh">
            <div className="cl-btechceov-sh-eyebrow"><span className="bar"/>Core Areas You'll Study</div>
            <h2>Six Core Areas,<br/><em>One Engineering Foundation</em></h2>
            <p>Every core area is built on strong engineering fundamentals and reinforced through labs, live projects, and industrial visits.</p>
          </div>

          {/* Domain Grid */}
          <div className="cl-btechceov-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-btechceov-card">
                <div className="cl-btechceov-dvis">
                  <span className="cl-btechceov-dtag">{d.tag}</span>
                  <span className="cl-btechceov-dtitle">{d.title}</span>
                </div>
                <div className="cl-btechceov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-btechceov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-btechceov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-btechceov-core">
              <div className="cap">Built On Core<br/>Engineering</div>
              <p>Engineering Mathematics · Mechanics of Solids · Surveying · Building Materials · Fluid Mechanics · Engineering Drawing</p>
            </div>
          </div>

          {/* CLA chips */}
          <div className="cl-btechceov-cla-title">Core Learning Areas</div>
          <div className="cl-btechceov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-btechceov-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
