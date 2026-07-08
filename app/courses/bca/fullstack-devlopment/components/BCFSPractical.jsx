'use client';

const CERTS_ROW1 = [
  { name:'MongoDB',          desc:'MongoDB Developer Certification — Sem IV' },
  { name:'GitHub',           desc:'GitHub Foundations Certification — Sem III' },
  { name:'Meta',             desc:'React Developer Certification — Sem III' },
  { name:'AWS / Google Cloud', desc:'Cloud Practitioner / Cloud Digital Leader — Sem V' },
];

const CERTS_ROW2 = [
  { name:'Docker / Postman', desc:'Container & API Testing Certification — Sem VI' },
  { name:'Tulas Institute',  desc:'Programme Completion Certificate — Sem VIII' },
];

const HANDS_ON = [
  { n:'01', label:'Web Mini Project I — HTML/CSS/JS (Sem II)' },
  { n:'02', label:'Web Mini Project II — React App (Sem III)' },
  { n:'03', label:'Full Stack Project I — MERN / Django (Sem IV)' },
  { n:'04', label:'Full Stack Project II — Spring Boot / Laravel (Sem V)' },
  { n:'05', label:'Full Stack Project III — AI-Powered App (Sem VI)' },
  { n:'06', label:'Internship / Capstone — Live Deployed Product (Sem VII–VIII)' },
];

export default function BCFSPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfspr-sec{padding:110px 7%;background:#f8f9fc}
        .cl-bcfspr-wrap{max-width:1280px;margin:0 auto}

        .cl-bcfspr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcfspr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfspr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfspr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfspr-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfspr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcfspr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}

        .cl-bcfspr-grid1{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:18px}
        .cl-bcfspr-grid2{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-bcfspr-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff}
        .cl-bcfspr-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center}
        .cl-bcfspr-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-bcfspr-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-bcfspr-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-bcfspr-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px}
        .cl-bcfspr-card .d{font-size:.82rem;color:#5a6a8a}

        .cl-bcfspr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-bcfspr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:.96rem;background:#fff;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-bcfspr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0}

        .cl-bcfspr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-bcfspr-intern strong{color:#001F4C}

        @media(max-width:900px){
          .cl-bcfspr-grid1{grid-template-columns:1fr 1fr}
          .cl-bcfspr-grid2{grid-template-columns:1fr 1fr}
          .cl-bcfspr-hands-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-bcfspr-sec{padding:70px 5%}
          .cl-bcfspr-hands-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcfspr-sec" id="certifications">
        <div className="cl-bcfspr-wrap">

          <div className="cl-bcfspr-head">
            <div className="cl-bcfspr-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-bcfspr-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-bcfspr-desc">
              8 industry certifications aligned across four years — with content fully taught before assessment, and six live projects built from scratch.
            </p>
          </div>

          <div className="cl-bcfspr-block-title">Industry Certifications</div>
          <div className="cl-bcfspr-grid1">
            <div className="cl-bcfspr-card cl-bcfspr-feat">
              <span className="tag">Flagship Association · 3 Certificates</span>
              <div className="t">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Independent, competency-based Year 1, Year 2, and Year 3 certificates covering advanced algorithms, system design, and AI-integrated web development.</div>
            </div>
            {CERTS_ROW1.map(c => (
              <div key={c.name} className="cl-bcfspr-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="cl-bcfspr-grid2">
            {CERTS_ROW2.map(c => (
              <div key={c.name} className="cl-bcfspr-card">
                <div className="t">{c.name}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-bcfspr-block-title">Hands-On Learning</div>
          <div className="cl-bcfspr-hands-grid">
            {HANDS_ON.map(h => (
              <div key={h.n} className="cl-bcfspr-hands-item">
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
