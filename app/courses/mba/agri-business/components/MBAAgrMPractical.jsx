'use client';

const PARTNERS = [
  { name:'NABARD-Style Agri Finance',    detail:'Agri Finance Foundations (Sem I)' },
  { name:'ICAR-Aligned Coursework',      detail:'Agricultural Economics Essentials (Sem II)' },
  { name:'Coursera',                     detail:'Agribusiness & Food Value Chain Specialisation (Sem III)' },
  { name:'Precision Agri-Tech Bodies',   detail:'Precision Agriculture Foundations (Sem III–IV)' },
];

const HANDS = [
  'Farm-to-Market Research Project','Live Agri-Market Project','Industry Live Agri-Business Project',
  'Case Competitions','Rural Market Simulation Workshop','Rural Leadership Capstone',
];

export default function MBAAgrMPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-pr-sec{padding:110px 7%;background:#fff}
        .cl-mbaagrm-pr-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-pr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbaagrm-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaagrm-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaagrm-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaagrm-pr-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-pr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}
        .cl-mbaagrm-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-mbaagrm-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-mbaagrm-pr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-mbaagrm-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center}
        .cl-mbaagrm-pr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-mbaagrm-pr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-mbaagrm-pr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-mbaagrm-pr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-mbaagrm-pr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}
        .cl-mbaagrm-pr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-mbaagrm-pr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-mbaagrm-pr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}
        .cl-mbaagrm-pr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-mbaagrm-pr-intern strong{color:#001F4C}
        @media(max-width:900px){.cl-mbaagrm-pr-cert-grid{grid-template-columns:1fr 1fr}.cl-mbaagrm-pr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbaagrm-pr-sec{padding:70px 5%}.cl-mbaagrm-pr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbaagrm-pr-sec" id="certs">
        <div className="cl-mbaagrm-pr-wrap">
          <div className="cl-mbaagrm-pr-head">
            <div className="cl-mbaagrm-pr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mbaagrm-pr-h2">Certifications, Projects<br/><em>&amp; Live Practice</em></h2>
            <p className="cl-mbaagrm-pr-desc">Globally recognised certifications and continuous industry exposure that make graduates job-ready.</p>
          </div>
          <div className="cl-mbaagrm-pr-block-title">Industry Certifications</div>
          <div className="cl-mbaagrm-pr-cert-grid">
            <div className="cl-mbaagrm-pr-cert cl-mbaagrm-pr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="">Independent, competency-based Year 1 and Year 2 certificates covering the full MBA programme — adding national credibility to your skill set.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-mbaagrm-pr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>
          <div className="cl-mbaagrm-pr-block-title">Practical Learning &amp; Capstone</div>
          <div className="cl-mbaagrm-pr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-mbaagrm-pr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>
          {/* <div className="cl-mbaagrm-pr-block-title">Internship &amp; Mentorship Ecosystem</div>
          <p className="cl-mbaagrm-pr-intern">Semester IV pairs an <strong>Internship / Capstone Agri-Business Project</strong> with <strong>Industry Mentorship &amp; Value Chain Review</strong> — backed by dedicated placement support across the final year of the programme.</p> */}
        </div>
      </section>
    </>
  );
}
