'use client';

const DOMAINS = [
  { tag:'Core Domain',    title:'Programming Languages',           desc:'Core programming and software development fundamentals.',       pills:['Programming','Software Development'] },
  { tag:'Core Domain',    title:'Electronic Equipment & Networking', desc:'Networking fundamentals and electronic hardware systems.',     pills:['Networking','Electronics'] },
  { tag:'Core Domain',    title:'Software & Hardware Design',      desc:'Design and development of both software and hardware systems.', pills:['Software Design','Hardware Design'] },
  { tag:'Core Domain',    title:'Database Administration',         desc:'Database systems and administration fundamentals.',             pills:['Databases','Administration'] },
  { tag:'Core Domain',    title:'Web & App Development',           desc:'Web technologies and Android-iOS application development.',    pills:['Web Dev','App Dev'] },
  { tag:'Emerging Focus', title:'AI, IoT & Emerging Tech',         desc:'Foundations in AI, Machine Learning, Big Data, IoT, and Blockchain.', pills:['AI & ML','IoT'] },
];

const CLA = [
  'Programming Languages','Computer Networks','Database Systems','Digital Electronics',
  'Software Design','Web Development','Artificial Intelligence','Big Data',
  'Internet of Things','Android-iOS Development',
];

export default function DiplomaCsEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-dipcse-ovw-wrap{max-width:1280px;margin:0 auto;}

        /* ── split ── */
        .cl-dipcse-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        /* visual */
        .cl-dipcse-ovw-visual{position:relative;height:460px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-dipcse-ovw-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:20px;z-index:0;}
        .cl-dipcse-ovw-overlay{position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,31,76,.45) 0%,rgba(0,21,46,.30) 100%);z-index:1;}
        .cl-dipcse-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:2;}
        .cl-dipcse-ovw-center-mark{text-align:center;color:#fff;position:relative;z-index:2;}
        .cl-dipcse-ovw-center-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-dipcse-ovw-center-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-dipcse-ovw-badge{position:absolute;bottom:-26px;left:-20px;z-index:3;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);}
        .cl-dipcse-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-dipcse-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        /* text */
        .cl-dipcse-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipcse-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipcse-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipcse-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipcse-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-dipcse-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-dipcse-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        /* eligibility */
        .cl-dipcse-ovw-elig-wrap{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-dipcse-ovw-elig-wrap table{width:100%;border-collapse:collapse;}
        .cl-dipcse-ovw-elig-wrap th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-dipcse-ovw-elig-wrap td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-dipcse-ovw-elig-wrap td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        /* domain section head */
        .cl-dipcse-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-dipcse-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipcse-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipcse-ovw-dom-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipcse-ovw-dom-head h2 em{font-style:normal;color:#DF5400;}
        .cl-dipcse-ovw-dom-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        /* domain cards */
        .cl-dipcse-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-dipcse-ovw-d-card{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-dipcse-ovw-d-visual{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-dipcse-ovw-d-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-dipcse-ovw-d-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-dipcse-ovw-d-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-dipcse-ovw-d-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-dipcse-ovw-pill-row{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-dipcse-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        /* core card */
        .cl-dipcse-ovw-d-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);margin-top:24px;}
        .cl-dipcse-ovw-d-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-dipcse-ovw-d-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        /* CLA */
        .cl-dipcse-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-dipcse-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-dipcse-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-dipcse-ovw-split{grid-template-columns:1fr}.cl-dipcse-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-dipcse-ovw-sec{padding:70px 5%}.cl-dipcse-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-dipcse-ovw-sec" id="overview">
        <div className="cl-dipcse-ovw-wrap">

          {/* ── SPLIT ── */}
          <div className="cl-dipcse-ovw-split">
            <div className="cl-dipcse-ovw-visual">
              <img src="/diploma-computer-science-engineering/content2.png" alt="Diploma CSE" className="cl-dipcse-ovw-img"/>
              <div className="cl-dipcse-ovw-overlay"/>
              <span className="cl-dipcse-ovw-glyph">CSE</span>
              
              <div className="cl-dipcse-ovw-badge">
                <span className="yr">3Y</span>
                <span className="lbl">Industry-Relevant<br/>Curriculum</span>
              </div>
            </div>

            <div className="cl-dipcse-ovw-text">
              <div className="cl-dipcse-ovw-eyebrow"><span className="bar"/>School of Computing</div>
              <h2 className="cl-dipcse-ovw-h2">Where Code<br/><em>Meets Career</em></h2>
              <p className="cl-dipcse-ovw-lead">The Diploma in Computer Science and Engineering is a three-year undergraduate programme, standing out as one of the most coveted engineering diplomas for thriving careers in the IT industry.</p>
              <p className="cl-dipcse-ovw-body">The comprehensive curriculum delves into computer applications and systems, equipping students with the necessary skills across programming languages, electronic equipment, networking, and the design and development of both software and hardware. Many of today's cutting-edge technologies — Artificial Intelligence, Machine Learning, Big Data, Internet of Things, Quantum Computing, Blockchain, AR &amp; VR, and Android-iOS development — trace their roots back to the foundations laid in computer science engineering.</p>
              <blockquote className="cl-dipcse-ovw-quote">"Code, innovate, and transform the digital world with Tulas Institute's Diploma in Computer Science — equipping future tech leaders with the skills to shape tomorrow's technology."</blockquote>
            </div>
          </div>

          {/* ── ELIGIBILITY TABLE ── */}
          <div className="cl-dipcse-ovw-elig-wrap">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr><td className="k">Diploma – CSE</td><td>3 Years</td><td>Passed 10th Std./SSC examination with at least 35% marks in the qualifying examination.</td></tr>
                <tr><td className="k">Diploma – CSE (Lateral Entry)</td><td>2 Years</td><td>Passed 10+2 with Physics and Chemistry compulsory plus Mathematics/Biology, OR 10+2 Science with Technical Vocational subject, OR 10th + 2-year ITI with appropriate trade.</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── DOMAIN HEAD ── */}
          <div className="cl-dipcse-ovw-dom-head">
            <div className="cl-dipcse-ovw-dom-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2>Six Domains, One<br/><em>Computing Foundation</em></h2>
            <p>Every domain is built on strong computing fundamentals and reinforced through hands-on practical training.</p>
          </div>

          {/* ── DOMAIN CARDS ── */}
          <div className="cl-dipcse-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-dipcse-ovw-d-card">
                <div className="cl-dipcse-ovw-d-visual">
                  <span className="cl-dipcse-ovw-d-tag">{d.tag}</span>
                  <span className="cl-dipcse-ovw-d-title">{d.title}</span>
                </div>
                <div className="cl-dipcse-ovw-d-body">
                  <p>{d.desc}</p>
                  <div className="cl-dipcse-ovw-pill-row">
                    {d.pills.map((p,j)=><span key={j} className="cl-dipcse-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CORE CARD ── */}
          <div className="cl-dipcse-ovw-d-core">
            <div className="cap">Built On Core Computing</div>
            <p>Programming Fundamentals · Data Structures · Computer Networks · Database Systems · Digital Electronics · Web Technologies</p>
          </div>

          {/* ── CLA ── */}
          <div className="cl-dipcse-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-dipcse-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-dipcse-ovw-cla-chip">{c}</span>)}
          </div>

        </div>
      </section>
    </>
  );
}
