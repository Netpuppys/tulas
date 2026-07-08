'use client';

const CERTS_ROW1 = [
  { name:'Google',    desc:'Data Analytics Professional Certificate (Sem I)' },
  { name:'Microsoft', desc:'Power BI Data Analyst Associate (Sem II)' },
  { name:'Tableau',   desc:'Desktop Specialist Certification (Sem III)' },
  { name:'IBM',       desc:'Data Science Foundations (Sem III–IV)' },
];

const HANDS_ON = [
  { n:'01', label:'Business Statistics Project' },
  { n:'02', label:'Live Analytics Project' },
  { n:'03', label:'Industry Live Analytics Project' },
  { n:'04', label:'Case Competitions' },
  { n:'05', label:'BI Dashboard Simulation' },
  { n:'06', label:'Data Strategy Capstone' },
];

export default function MBABAPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabapr-sec{padding:110px 7%;background:#f8f9fc}
        .cl-mbabapr-wrap{max-width:1280px;margin:0 auto}

        .cl-mbabapr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbabapr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbabapr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbabapr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbabapr-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabapr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbabapr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mbabapr-grid1{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-mbabapr-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff}
        .cl-mbabapr-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center}
        .cl-mbabapr-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mbabapr-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-mbabapr-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mbabapr-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px}
        .cl-mbabapr-card .d{font-size:.82rem;color:#5a6a8a}

        .cl-mbabapr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mbabapr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbabapr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0}

        .cl-mbabapr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mbabapr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-mbabapr-grid1{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbabapr-sec{padding:70px 5%}.cl-mbabapr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbabapr-sec" id="certifications">
        <div className="cl-mbabapr-wrap">
          <div className="cl-mbabapr-head">
            <div className="cl-mbabapr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mbabapr-h2">Certifications, Projects<br/><em>&amp; Live Practice</em></h2>
            <p className="cl-mbabapr-desc">Globally recognised certifications and continuous industry exposure that make graduates job-ready from Semester II.</p>
          </div>

          <div className="cl-mbabapr-block-title">Industry Certifications</div>
          <div className="cl-mbabapr-grid1">
            <div className="cl-mbabapr-card cl-mbabapr-feat">
              <span className="tag">Flagship Association</span>
              <div className="t">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Independent, competency-based Year 1 and Year 2 certificates covering the full MBA programme — adding national credibility to your skill set.</div>
            </div>
            {CERTS_ROW1.map(c=>(
              <div key={c.name} className="cl-mbabapr-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-mbabapr-block-title">Practical Learning &amp; Capstone</div>
          <div className="cl-mbabapr-hands-grid">
            {HANDS_ON.map(h=>(
              <div key={h.n} className="cl-mbabapr-hands-item">
                <span className="n">{h.n}</span>{h.label}
              </div>
            ))}
          </div>

          {/* <div className="cl-mbabapr-block-title">Internship &amp; Mentorship Ecosystem</div>
          <p className="cl-mbabapr-intern">Semester IV pairs an <strong>Internship / Capstone Analytics Project</strong> with <strong>Industry Mentorship &amp; Model Review</strong> — backed by dedicated placement support across the final year of the programme.</p> */}
        </div>
      </section>
    </>
  );
}
