'use client';

const CERTS = [
  { name: 'Google',          detail: 'AI Essentials (Sem I)' },
  { name: 'Meta',            detail: 'Blueprint — Digital Marketing Fundamentals (Sem I)' },
  { name: 'HubSpot Academy', detail: 'Digital Marketing, Marketing Hub & Content Marketing (Sem II–IV)' },
  { name: 'DeepLearning.AI', detail: 'AI for Everyone, via Coursera (Sem III)' },
];

const HANDS_ON = [
  'Brand Audit Project',
  'Live Brand Campaign',
  'Industry Live Brand Project',
  'Case Competitions',
  'Agency Simulation Workshop',
  'CMO-Panel Capstone',
];

export default function MBADMCertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmcert-sec{padding:110px 7%;background:#fff}
        .cl-dmcert-wrap{max-width:1280px;margin:0 auto}

        /* Section head */
        .cl-dmcert-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmcert-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmcert-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmcert-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5.5vw,5.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-dmcert-h2 em{font-style:normal;color:#DF5400}
        .cl-dmcert-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        /* Block title */
        .cl-dmcert-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}

        /* Cert grid */
        .cl-dmcert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-dmcert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff}
        .cl-dmcert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center}
        .cl-dmcert-feat-tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-dmcert-feat-t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-dmcert-feat-d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-dmcert-card-t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px}
        .cl-dmcert-card-d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        /* Hands-on grid */
        .cl-dmcert-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-dmcert-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-dmcert-hands-num{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        /* Internship note */
        .cl-dmcert-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-dmcert-intern strong{color:#001F4C}

        @media(max-width:900px){
          .cl-dmcert-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-dmcert-sec{padding:70px 5%}
          .cl-dmcert-hands-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dmcert-sec" id="certifications">
        <div className="cl-dmcert-wrap">

          {/* Head */}
          <div className="cl-dmcert-head">
            <div className="cl-dmcert-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-dmcert-h2">Certifications, Projects<br /><em>&amp; Live Campaigns</em></h2>
            <p className="cl-dmcert-desc">
              Globally recognised certifications, real brand campaigns, and continuous industry exposure that make graduates job-ready.
            </p>
          </div>

          {/* Certs */}
          <div className="cl-dmcert-block-title">Industry Certifications</div>
          <div className="cl-dmcert-grid">
            {/* Featured */}
            <div className="cl-dmcert-card cl-dmcert-feat">
              <span className="cl-dmcert-feat-tag">Flagship Association</span>
              <div className="cl-dmcert-feat-t">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="cl-dmcert-feat-d">
                Independent, competency-based Year 1 and Year 2 certificates covering the full MBA programme — adding national credibility to your skill set.
              </div>
            </div>
            {CERTS.map(c => (
              <div key={c.name} className="cl-dmcert-card">
                <div className="cl-dmcert-card-t">{c.name}</div>
                <div className="cl-dmcert-card-d">{c.detail}</div>
              </div>
            ))}
          </div>

          {/* Practical / Capstone */}
          <div className="cl-dmcert-block-title">Practical Learning &amp; Capstone</div>
          <div className="cl-dmcert-hands-grid">
            {HANDS_ON.map((item, i) => (
              <div key={item} className="cl-dmcert-hands-item">
                <span className="cl-dmcert-hands-num">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>

          {/* Internship note */}
          <div className="cl-dmcert-block-title">Internship &amp; Mentorship Ecosystem</div>
          <p className="cl-dmcert-intern">
            Semester IV pairs an <strong>Internship / Capstone Brand Project</strong> with{' '}
            <strong>Industry Mentorship &amp; Campaign Review</strong> — backed by dedicated placement support across the final year of the programme.
          </p>

        </div>
      </section>
    </>
  );
}
