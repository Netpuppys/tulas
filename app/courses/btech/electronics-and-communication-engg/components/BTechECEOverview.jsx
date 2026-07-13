'use client';

const DOMAINS = [
  { tag:'Specialisation', title:'VLSI & Embedded Systems',      desc:'VLSI chip design, embedded programming, and FPGA-based system development.',      pills:['VLSI Design','Embedded Systems'] },
  { tag:'Specialisation', title:'5G, 6G & IoT',                desc:'Next-generation wireless networks, VoIP, and Internet of Things applications.',   pills:['5G/6G Networks','IoT Systems'] },
  { tag:'Core Area',      title:'Electronic Devices & Circuits', desc:'Analog and digital circuits, semiconductor devices, and circuit analysis fundamentals.', pills:['Analog Circuits','Digital Circuits'] },
  { tag:'Core Area',      title:'Microprocessors & Microcontrollers', desc:'Embedded programming, ARM microcontrollers, and real-time operating systems.', pills:['Microprocessors','Microcontrollers'] },
  { tag:'Core Area',      title:'Communication Systems',        desc:'Analog & digital communication, microwave engineering, and antenna & wave propagation.', pills:['Digital Communication','Microwave Engineering'] },
  { tag:'Core Area',      title:'Robotics & Signal Processing', desc:'Robotic systems, AI-assisted signal processing, and automation engineering.',    pills:['Robotics','Signal Processing'] },
];

const CLA = [
  'Electronic Devices & Circuits','Microprocessors & Microcontrollers','Analog & Digital Communication',
  'Microwave Engineering','Antenna & Wave Propagation','VLSI Design',
  'Embedded Systems','5G/6G Networks','IoT','Signal Processing','Robotics','Semiconductor Physics',
];

export default function BTechECEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheceov-sec{padding:110px 7%;background:#fff}
        .cl-btecheceov-wrap{max-width:1280px;margin:0 auto}

        .cl-btecheceov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px}
        .cl-btecheceov-visual{position:relative;height:500px;border-radius:20px;overflow:visible}
        .cl-btecheceov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;box-shadow:0 24px 60px rgba(0,31,76,.22)}
        .cl-btecheceov-imgwrap img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-btecheceov-imgwrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,21,46,.78) 0%,rgba(0,31,76,.3) 50%,transparent 100%)}
        .cl-btecheceov-glyph{position:absolute;top:20px;left:24px;font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.18);z-index:1;line-height:1;pointer-events:none}
        .cl-btecheceov-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;text-align:center}
        .cl-btecheceov-center .big{font-family:'Bebas Neue',sans-serif;font-size:3.2rem;color:#FFF3D7;line-height:1}
        .cl-btecheceov-center .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8);margin-top:8px;display:block}
        .cl-btecheceov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3}
        .cl-btecheceov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1}
        .cl-btecheceov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C}

        .cl-btecheceov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheceov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheceov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btecheceov-h2 em{font-style:normal;color:#DF5400}
        .cl-btecheceov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px}
        .cl-btecheceov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px}
        .cl-btecheceov-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C}

        .cl-btecheceov-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed}
        .cl-btecheceov-elig table{width:100%;border-collapse:collapse}
        .cl-btecheceov-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em}
        .cl-btecheceov-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;vertical-align:top}
        .cl-btecheceov-elig td.k{font-weight:800;color:#001F4C}
        .cl-btecheceov-elig tr:last-child td{border-bottom:none}

        .cl-btecheceov-sh{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btecheceov-sh-ey{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheceov-sh-ey .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheceov-sh h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px}
        .cl-btecheceov-sh h2 em{font-style:normal;color:#DF5400}
        .cl-btecheceov-sh p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btecheceov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-btecheceov-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btecheceov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%)}
        .cl-btecheceov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px}
        .cl-btecheceov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25}
        .cl-btecheceov-dbody{padding:24px;flex:1;display:flex;flex-direction:column}
        .cl-btecheceov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px}
        .cl-btecheceov-pills{display:flex;flex-wrap:wrap;gap:7px}
        .cl-btecheceov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C}
        .cl-btecheceov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07)}
        .cl-btecheceov-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px}
        .cl-btecheceov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82)}

        .cl-btecheceov-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px}
        .cl-btecheceov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto}
        .cl-btecheceov-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}

        @media(max-width:900px){.cl-btecheceov-split{grid-template-columns:1fr;gap:60px}.cl-btecheceov-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btecheceov-sec{padding:70px 5%}.cl-btecheceov-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheceov-sec" id="overview">
        <div className="cl-btecheceov-wrap">

          <div className="cl-btecheceov-split">
            {/* LEFT — image */}
            <div className="cl-btecheceov-visual">
              <div className="cl-btecheceov-imgwrap">
                <img src="/courses/btech/electronics-and-communication/ContentLeft.webp" alt="Department of Electronics & Communication Engineering" loading="lazy"/>
              </div>
              <span className="cl-btecheceov-glyph">ECE</span>
              {/* <div className="cl-btecheceov-center">
                <span className="big">ECE</span>
                <span className="small">Department of Electronics &amp; Communication Engineering</span>
              </div> */}
              <div className="cl-btecheceov-badge">
                <span className="yr">4Y</span>
                <span className="lbl">AICTE Approved<br/>NBA Accredited</span>
              </div>
            </div>
            {/* RIGHT — text */}
            <div>
              <div className="cl-btecheceov-eyebrow"><span className="bar"/>Department of Electronics &amp; Communication Engineering</div>
              <h2 className="cl-btecheceov-h2">Where Circuits<br/><em>Meet Communication</em></h2>
              <p className="cl-btecheceov-lead">The Department of Electronics &amp; Communication Engineering at Tulas Institute, established in 2006, is a hub of excellence delivering industry-aligned education in next-generation communication technologies.</p>
              <p className="cl-btecheceov-body">The B.Tech in ECE covers core areas such as electronic devices, circuits, microprocessors, microcontrollers, analog and digital communication, microwave engineering, and antenna &amp; wave propagation. Students gain in-depth knowledge of cutting-edge technologies like 5G, 6G, VoIP, IoT, and Robotics — backed by state-of-the-art laboratories and IIT Kanpur collaboration.</p>
              <blockquote className="cl-btecheceov-quote">"Innovate, connect, and revolutionize the world of technology with a B.Tech in Electronics &amp; Communication Engineering."</blockquote>
            </div>
          </div>

          {/* Eligibility */}
          <div className="cl-btecheceov-elig">
            <table>
              <thead><tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr></thead>
              <tbody>
                <tr><td className="k">B.Tech</td><td>4 Years</td><td>Passed 10+2 with Physics and Mathematics compulsory, plus one of Chemistry / Biology / Computer Science / Engineering Graphics / Business Studies, with at least 45% marks (40% for reserved category). Diploma holders in Engineering also eligible.</td></tr>
                <tr><td className="k">B.Tech (Lateral Entry)</td><td>3 Years</td><td>Diploma in Engineering &amp; Technology (45%/40% marks) or B.Sc. graduates with 10+2 Mathematics, subject to bridge course requirements.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section head */}
          <div className="cl-btecheceov-sh">
            <div className="cl-btecheceov-sh-ey"><span className="bar"/>Core Areas You'll Study</div>
            <h2>Six Core Areas,<br/><em>One Communication Core</em></h2>
            <p>Every core area is built on strong ECE fundamentals, with dedicated specialisation tracks in VLSI &amp; Embedded Systems and 5G/6G &amp; IoT.</p>
          </div>

          {/* Domain grid */}
          <div className="cl-btecheceov-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-btecheceov-card">
                <div className="cl-btecheceov-dvis">
                  <span className="cl-btecheceov-dtag">{d.tag}</span>
                  <span className="cl-btecheceov-dtitle">{d.title}</span>
                </div>
                <div className="cl-btecheceov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-btecheceov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-btecheceov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-btecheceov-core">
              <div className="cap">Built On Core<br/>Engineering</div>
              <p>Circuit Theory · Electromagnetic Theory · Digital Logic Design · Signals &amp; Systems · Semiconductor Physics · Engineering Drawing</p>
            </div>
          </div>

          {/* CLA chips */}
          <div className="cl-btecheceov-cla-title">Core Learning Areas</div>
          <div className="cl-btecheceov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-btecheceov-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
