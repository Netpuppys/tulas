'use client';

const CERTS = [
  { name: 'Google', desc: 'AI & digital certifications' },
  { name: 'Meta', desc: 'Marketing & analytics blueprints' },
  { name: 'Microsoft', desc: 'Power BI & Azure fundamentals' },
  { name: 'HubSpot / SAP', desc: 'Marketing, CRM & ERP tracks' },
];

const HANDS_ON = [
  { n: '01', label: 'Live Business Projects' },
  { n: '02', label: 'Industry Live Project' },
  { n: '03', label: 'Case Competitions' },
  { n: '04', label: 'Business Simulations' },
  { n: '05', label: 'Research Projects' },
  { n: '06', label: 'CXO-Panel Capstone' },
];

export default function MBAGCertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagcert-sec{padding:110px 7%;background:#fff}
        .cl-mbagcert-wrap{max-width:1280px;margin:0 auto}

        .cl-mbagcert-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbagcert-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbagcert-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbagcert-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbagcert-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagcert-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbagcert-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mbagcert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-mbagcert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff}
        .cl-mbagcert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center}
        .cl-mbagcert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mbagcert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-mbagcert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mbagcert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px}
        .cl-mbagcert-card .d{font-size:.82rem;color:#5a6a8a}

        .cl-mbagcert-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mbagcert-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbagcert-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0}

        .cl-mbagcert-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mbagcert-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-mbagcert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){
          .cl-mbagcert-sec{padding:70px 5%}
          .cl-mbagcert-hands-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-mbagcert-sec" id="certifications">
        <div className="cl-mbagcert-wrap">

          <div className="cl-mbagcert-head">
            <div className="cl-mbagcert-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-mbagcert-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-mbagcert-desc">
              Beyond the degree — globally recognized certifications, real projects, and continuous industry exposure that make graduates job-ready.
            </p>
          </div>

          {/* Industry Certifications */}
          <div className="cl-mbagcert-block-title">Industry Certifications</div>
          <div className="cl-mbagcert-grid">
            <div className="cl-mbagcert-card cl-mbagcert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold text-light">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="">Premier, competency-based certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility to your MBA.</div>
            </div>
            {CERTS.map(c => (
              <div key={c.name} className="cl-mbagcert-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Hands-On Learning */}
          <div className="cl-mbagcert-block-title">Hands-On Learning</div>
          <div className="cl-mbagcert-hands-grid">
            {HANDS_ON.map(h => (
              <div key={h.n} className="cl-mbagcert-hands-item">
                <span className="n">{h.n}</span>
                {h.label}
              </div>
            ))}
          </div>

          {/* Internship */}

        </div>
      </section>
    </>
  );
}
