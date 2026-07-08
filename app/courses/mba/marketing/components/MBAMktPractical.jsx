'use client';

const PARTNERS = [
  { name:'Google',           detail:'Analytics & AI Essentials (Sem I)' },
  { name:'Meta',             detail:'Blueprint — Marketing Fundamentals (Sem I)' },
  { name:'HubSpot Academy',  detail:'Marketing & Content Marketing (Sem II–IV)' },
  { name:'Nielsen / Kantar', detail:'Market Research Foundations (Sem III)' },
];

const HANDS = [
  'Consumer Research Project','Live Brand Campaign','Industry Live Brand Project',
  'Case Competitions','Retail Simulation Workshop','Leadership Capstone',
];

export default function MBAMktPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbamktpr-sec{padding:110px 7%;background:#fff}
        .cl-mbamktpr-wrap{max-width:1280px;margin:0 auto}

        .cl-mbamktpr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbamktpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbamktpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbamktpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbamktpr-h2 em{font-style:normal;color:#DF5400}
        .cl-mbamktpr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbamktpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mbamktpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-mbamktpr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-mbamktpr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center}
        .cl-mbamktpr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mbamktpr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-mbamktpr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mbamktpr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-mbamktpr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        .cl-mbamktpr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mbamktpr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-mbamktpr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        .cl-mbamktpr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mbamktpr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-mbamktpr-cert-grid{grid-template-columns:1fr 1fr}.cl-mbamktpr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbamktpr-sec{padding:70px 5%}.cl-mbamktpr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbamktpr-sec" id="certs">
        <div className="cl-mbamktpr-wrap">
          <div className="cl-mbamktpr-head">
            <div className="cl-mbamktpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mbamktpr-h2">Certifications, Projects<br/><em>&amp; Live Practice</em></h2>
            <p className="cl-mbamktpr-desc">Globally recognised certifications and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-mbamktpr-block-title">Industry Certifications</div>
          <div className="cl-mbamktpr-cert-grid">
            <div className="cl-mbamktpr-cert cl-mbamktpr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="">Independent, competency-based Year 1 and Year 2 certificates covering the full MBA programme — adding national credibility to your skill set.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-mbamktpr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="cl-mbamktpr-block-title">Practical Learning &amp; Capstone</div>
          <div className="cl-mbamktpr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-mbamktpr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          {/* <div className="cl-mbamktpr-block-title">Internship &amp; Mentorship Ecosystem</div>
          <p className="cl-mbamktpr-intern">Semester IV pairs an <strong>Internship / Capstone Brand Project</strong> with <strong>Industry Mentorship &amp; Campaign Review</strong> — backed by dedicated placement support across the final year of the programme.</p> */}
        </div>
      </section>
    </>
  );
}
