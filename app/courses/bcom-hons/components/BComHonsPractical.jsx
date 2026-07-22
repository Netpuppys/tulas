'use client';

const CERTS = [
  { title:'Tally & GST',      desc:'Accounting software certification' },
  { title:'Advanced Excel',   desc:'Financial modelling skills' },
  { title:'NISM',             desc:'Stock market & securities certification' },
  { title:'Digital Banking',  desc:'Fintech & banking operations' },
];

const HANDS = [
  { n:'01', label:'Accounting Software Labs' },
  { n:'02', label:'Business Case Studies' },
  { n:'03', label:'Industry Visits' },
  { n:'04', label:'Research Project' },
  { n:'05', label:'Guest Lectures & Expert Sessions' },
  { n:'06', label:'Internship Programme' },
];

export default function BComHonsPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-pr-sec{padding:110px 7%;background:#fff;}
        .cl-bcomh-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcomh-pr-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-bcomh-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcomh-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcomh-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bcomh-pr-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcomh-pr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcomh-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-bcomh-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px;}
        .cl-bcomh-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-bcomh-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;}
        .cl-bcomh-pr-feat-tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-bcomh-pr-feat-title{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-bcomh-pr-feat-desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-bcomh-pr-cert-card .cl-bcomh-pr-ct{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-bcomh-pr-cert-card .cl-bcomh-pr-cd{font-size:.82rem;color:#5a6a8a;}

        .cl-bcomh-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-bcomh-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-bcomh-pr-hands-n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-bcomh-pr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-bcomh-pr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-bcomh-pr-cert-grid{grid-template-columns:1fr 1fr}.cl-bcomh-pr-hands-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bcomh-pr-sec{padding:70px 5%}.cl-bcomh-pr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bcomh-pr-sec" id="practical">
        <div className="cl-bcomh-pr-wrap">
          <div className="cl-bcomh-pr-head">
            <div className="cl-bcomh-pr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-bcomh-pr-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-bcomh-pr-sub">Practical, tool-based skill-building that makes graduates job-ready and CA/CS-exam-ready.</p>
          </div>

          <div className="cl-bcomh-pr-block-title">Industry &amp; Professional Certifications</div>
          <div className="cl-bcomh-pr-cert-grid">
            <div className="cl-bcomh-pr-cert-card cl-bcomh-pr-cert-feat">
              <span className="cl-bcomh-pr-feat-tag">Professional Pathway</span>
              <div className="cl-bcomh-pr-feat-title">CA / CS Foundation-Ready Curriculum</div>
              <div className="cl-bcomh-pr-feat-desc">A curriculum designed to give students a strong head start toward Chartered Accountancy and Company Secretaryship qualifications.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-bcomh-pr-cert-card">
                <div className="cl-bcomh-pr-ct">{c.title}</div>
                <div className="cl-bcomh-pr-cd">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-bcomh-pr-block-title">Hands-On Learning</div>
          <div className="cl-bcomh-pr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-bcomh-pr-hands-item">
                <span className="cl-bcomh-pr-hands-n">{h.n}</span>
                {h.label}
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}
