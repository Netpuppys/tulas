'use client';

const PARTNERS = [
  { name:'AWS / Azure / GCP',    detail:'Cloud platform certifications' },
  { name:'MongoDB',              detail:'NoSQL database certification' },
  { name:'GitHub',               detail:'Version control & CI/CD' },
  { name:'Docker & Kubernetes',  detail:'Containerization & DevOps' },
  { name:'Node.js / Express',    detail:'Backend development track' },
  { name:'Python',               detail:'Programming & scripting cert' },
];

const HANDS = [
  'Mini Project 1 (Semester II)',
  'Mini Project 2 (Semester III)',
  'Hackathons & Case Studies',
  'Industry Mentorship & Expert Talks',
  'Research Projects & Publications',
  'Industry-Sponsored Major Project (Semester IV)',
];

export default function MCAFSPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafspr-sec{padding:110px 7%;background:#fff}
        .cl-mcafspr-wrap{max-width:1280px;margin:0 auto}

        .cl-mcafspr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mcafspr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mcafspr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mcafspr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mcafspr-h2 em{font-style:normal;color:#DF5400}
        .cl-mcafspr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mcafspr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mcafspr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px}
        .cl-mcafspr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-mcafspr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center;grid-row:span 2}
        .cl-mcafspr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mcafspr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-mcafspr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mcafspr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-mcafspr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        .cl-mcafspr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mcafspr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-mcafspr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        .cl-mcafspr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mcafspr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-mcafspr-cert-grid{grid-template-columns:1fr 1fr}.cl-mcafspr-cert-feat{grid-row:span 1}.cl-mcafspr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcafspr-sec{padding:70px 5%}.cl-mcafspr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mcafspr-sec" id="certs">
        <div className="cl-mcafspr-wrap">
          <div className="cl-mcafspr-head">
            <div className="cl-mcafspr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mcafspr-h2">Certifications, Projects<br/><em>&amp; Industry Exposure</em></h2>
            <p className="cl-mcafspr-desc">Globally recognised certifications, live project work, and continuous industry exposure that make every MCA Full Stack graduate job-ready from day one.</p>
          </div>

          <div className="cl-mcafspr-block-title">Industry Certifications</div>
          <div className="cl-mcafspr-cert-grid">
            <div className="cl-mcafspr-cert cl-mcafspr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="t">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility and industry recognition to your MCA degree.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-mcafspr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="cl-mcafspr-block-title">Hands-On Learning</div>
          <div className="cl-mcafspr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-mcafspr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          <div className="cl-mcafspr-block-title">Industry Exposure</div>
          <p className="cl-mcafspr-intern">Students engage with <strong>real industry problems every semester</strong> — through hackathons, expert mentorship, live project briefs, and a final major project that is co-designed and evaluated by an industry partner. Every practical activity is built to make graduates immediately deployable.</p>
        </div>
      </section>
    </>
  );
}
