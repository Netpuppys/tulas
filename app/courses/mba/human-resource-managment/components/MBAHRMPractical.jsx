'use client';

const PARTNERS = [
  { name:'SHRM',              detail:'HR Management Essentials (Sem I)' },
  { name:'LinkedIn Learning', detail:'People Analytics Certification (Sem II)' },
  { name:'Coursera',          detail:'HR Management & Analytics Specialisation (Sem III)' },
  { name:'HRCI',              detail:'Associate Professional in HR — aPHR (Sem III–IV)' },
];

const HANDS = [
  'Organisational Diagnosis Project','Live Talent Audit Project','Industry Live HR Project',
  'Case Competitions','Talent Simulation Workshop','HR Leadership Capstone',
];

export default function MBAHRMPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbahrmpr-sec{padding:110px 7%;background:#fff}
        .cl-mbahrmpr-wrap{max-width:1280px;margin:0 auto}

        .cl-mbahrmpr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbahrmpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbahrmpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbahrmpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbahrmpr-h2 em{font-style:normal;color:#DF5400}
        .cl-mbahrmpr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbahrmpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mbahrmpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-mbahrmpr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-mbahrmpr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center}
        .cl-mbahrmpr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mbahrmpr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-mbahrmpr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mbahrmpr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-mbahrmpr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        .cl-mbahrmpr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mbahrmpr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-mbahrmpr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        .cl-mbahrmpr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mbahrmpr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-mbahrmpr-cert-grid{grid-template-columns:1fr 1fr}.cl-mbahrmpr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbahrmpr-sec{padding:70px 5%}.cl-mbahrmpr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbahrmpr-sec" id="certs">
        <div className="cl-mbahrmpr-wrap">
          <div className="cl-mbahrmpr-head">
            <div className="cl-mbahrmpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mbahrmpr-h2">Certifications, Projects<br/><em>&amp; Live Practice</em></h2>
            <p className="cl-mbahrmpr-desc">Globally recognised certifications and continuous industry exposure that make graduates job-ready HR professionals.</p>
          </div>

          <div className="cl-mbahrmpr-block-title">Industry Certifications</div>
          <div className="cl-mbahrmpr-cert-grid">
            <div className="cl-mbahrmpr-cert cl-mbahrmpr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="">Independent, competency-based Year 1 and Year 2 certificates covering the full MBA programme — adding national credibility to your HR skill set.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-mbahrmpr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="cl-mbahrmpr-block-title">Practical Learning &amp; Capstone</div>
          <div className="cl-mbahrmpr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-mbahrmpr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          {/* <div className="cl-mbahrmpr-block-title">Internship &amp; Mentorship Ecosystem</div>
          <p className="cl-mbahrmpr-intern">Semester IV pairs an <strong>Internship / Capstone HR Project</strong> with <strong>Industry Mentorship &amp; Talent Strategy Review</strong> — backed by dedicated placement support across the final year of the programme.</p> */}
        </div>
      </section>
    </>
  );
}
