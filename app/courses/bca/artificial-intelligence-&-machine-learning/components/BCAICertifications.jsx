'use client';

const CERTS_ROW1 = [
  { name: 'NVIDIA',       desc: 'AI Fundamentals (DLIFND) — Sem I' },
  { name: 'Google',       desc: 'AI Essentials (Sem I) & Cloud Digital Leader (Sem III)' },
  { name: 'GitHub',       desc: 'GitHub Foundations Certification — Sem II' },
  { name: 'freeCodeCamp', desc: 'JavaScript Algorithms & Data Structures — Sem IV' },
];

const CERTS_ROW2 = [
  { name: 'DeepLearning.AI',  desc: 'Deep Learning Specialisation — Sem V' },
  { name: 'Tulas Institute',  desc: 'Programme Completion Certificate — Sem VI' },
];

const HANDS_ON = [
  { n: '01', label: 'First Live Deployment (Sem II)' },
  { n: '02', label: 'Mini Project — Full Stack App (Sem III)' },
  { n: '03', label: 'Project I — Deployed Web App (Sem IV)' },
  { n: '04', label: 'Industry Project (Sem V)' },
  { n: '05', label: 'AI Product Development (Sem VI)' },
  { n: '06', label: 'Industry-Panel Capstone' },
];

export default function BCAICertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaicert-sec{padding:50px 7%;background:#f8f9fc}
        .cl-bcaicert-wrap{max-width:1280px;margin:0 auto}

        .cl-bcaicert-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcaicert-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaicert-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaicert-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaicert-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaicert-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcaicert-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}

        .cl-bcaicert-grid1{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:18px}
        .cl-bcaicert-grid2{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-bcaicert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff}
        .cl-bcaicert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center}
        .cl-bcaicert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-bcaicert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-bcaicert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-bcaicert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px}
        .cl-bcaicert-card .d{font-size:.82rem;color:#5a6a8a}

        .cl-bcaicert-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-bcaicert-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-bcaicert-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0}

        .cl-bcaicert-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-bcaicert-intern strong{color:#001F4C}

        @media(max-width:900px){
          .cl-bcaicert-grid1{grid-template-columns:1fr 1fr}
          .cl-bcaicert-grid2{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-bcaicert-sec{padding:70px 5%}
          .cl-bcaicert-hands-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcaicert-sec" id="certifications">
        <div className="cl-bcaicert-wrap">

          <div className="cl-bcaicert-head">
            <div className="cl-bcaicert-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-bcaicert-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-bcaicert-desc">
              9 industry certifications aligned across three years — a maximum of two per semester, with content fully taught before assessment.
            </p>
          </div>

          <div className="cl-bcaicert-block-title">Industry Certifications</div>
          <div className="cl-bcaicert-grid1">
            <div className="cl-bcaicert-card cl-bcaicert-feat">
              <span className="tag">Flagship Association · 3 Certificates</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="">Independent, competency-based Year 1, Year 2, and Year 3 certificates covering the full BCA programme.</div>
            </div>
            {CERTS_ROW1.map(c => (
              <div key={c.name} className="cl-bcaicert-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="cl-bcaicert-grid2">
            {CERTS_ROW2.map(c => (
              <div key={c.name} className="cl-bcaicert-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-bcaicert-block-title">Hands-On Learning</div>
          <div className="cl-bcaicert-hands-grid">
            {HANDS_ON.map(h => (
              <div key={h.n} className="cl-bcaicert-hands-item">
                <span className="n">{h.n}</span>
                {h.label}
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}
