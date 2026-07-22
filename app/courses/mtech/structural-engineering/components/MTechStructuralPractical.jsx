'use client';

const CERTS = [
  { title:'AutoDesk / Bentley',  desc:'Professional software certifications' },
  { title:'LEED / IGBC',         desc:'Green Building Certification Workshops' },
  { title:'Design Codes',        desc:'IS, Eurocode & ACI standards training' },
];

const HANDS = [
  { n:'01', label:'STAAD Pro / ETABS / SAP2000 Labs' },
  { n:'02', label:'ANSYS & BIM Modelling' },
  { n:'03', label:'Research & Dissertation' },
  { n:'04', label:'Industry Consultancy Projects' },
  { n:'05', label:'Publications in Reputed Journals' },
  { n:'06', label:'Internships' },
];

export default function MTechStructuralPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-pr-sec{padding:110px 7%;background:#fff;}
        .cl-mtse-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtse-pr-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-mtse-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtse-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtse-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mtse-pr-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-pr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtse-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-mtse-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px;}
        .cl-mtse-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-mtse-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;}
        .cl-mtse-pr-feat-tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-mtse-pr-feat-title{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-mtse-pr-feat-desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-mtse-pr-cert-card .cl-mtse-pr-ct{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-mtse-pr-cert-card .cl-mtse-pr-cd{font-size:.82rem;color:#5a6a8a;}

        .cl-mtse-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-mtse-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-mtse-pr-hands-n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-mtse-pr-inno-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-mtse-pr-inno-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-mtse-pr-cert-grid{grid-template-columns:1fr 1fr}.cl-mtse-pr-hands-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtse-pr-sec{padding:70px 5%}.cl-mtse-pr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtse-pr-sec" id="practical">
        <div className="cl-mtse-pr-wrap">
          <div className="cl-mtse-pr-head">
            <div className="cl-mtse-pr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mtse-pr-h2">Software Training<br/><em>&amp; Certifications</em></h2>
            <p className="cl-mtse-pr-sub">Exposure to cutting-edge software tools for real-world structural engineering applications.</p>
          </div>

          <div className="cl-mtse-pr-block-title">Software &amp; Professional Certifications</div>
          <div className="cl-mtse-pr-cert-grid">
            <div className="cl-mtse-pr-cert-card cl-mtse-pr-cert-feat">
              <span className="cl-mtse-pr-feat-tag">Software Training</span>
              <div className="cl-mtse-pr-feat-title">STAAD Pro, ETABS, SAP2000, ANSYS &amp; BIM Tools</div>
              <div className="cl-mtse-pr-feat-desc">Hands-on software training for structural simulation and modelling, applied to real-world engineering problems.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-mtse-pr-cert-card">
                <div className="cl-mtse-pr-ct">{c.title}</div>
                <div className="cl-mtse-pr-cd">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-mtse-pr-block-title">Hands-On Learning</div>
          <div className="cl-mtse-pr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-mtse-pr-hands-item">
                <span className="cl-mtse-pr-hands-n">{h.n}</span>
                {h.label}
              </div>
            ))}
          </div>

          <div className="cl-mtse-pr-block-title">Innovation &amp; Research Ecosystem</div>
          <p className="cl-mtse-pr-inno-note">Strong emphasis on <strong>independent research, dissertation work, and publications</strong> in reputed journals — with opportunities to innovate in smart materials, sustainable construction, and resilient infrastructure, backed by industry collaborations and consultancy projects.</p>
        </div>
      </section>
    </>
  );
}
