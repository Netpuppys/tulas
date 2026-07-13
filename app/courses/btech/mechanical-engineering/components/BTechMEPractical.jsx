'use client';

const PARTNERS = [
  { name:'AWS',       detail:'Cloud certifications' },
  { name:'Microsoft', detail:'Azure & developer tracks' },
  { name:'Google',    detail:'Cloud & AI certifications' },
  { name:'NVIDIA',    detail:'Deep learning & AI' },
  { name:'Oracle',    detail:'Database & Java' },
  { name:'Python',    detail:'Programming certifications' },
];

const HANDS = [
  'Live Projects','Hackathons','Coding Challenges',
  'Research Projects','Product Development','Innovation Competitions',
];

export default function BTechMEPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmepr-sec{padding:110px 7%;background:#fff}
        .cl-btechmepr-wrap{max-width:1280px;margin:0 auto}

        .cl-btechmepr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btechmepr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechmepr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechmepr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechmepr-h2 em{font-style:normal;color:#DF5400}
        .cl-btechmepr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechmepr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-btechmepr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px}
        .cl-btechmepr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-btechmepr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center;grid-row:span 2}
        .cl-btechmepr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-btechmepr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-btechmepr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-btechmepr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-btechmepr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        .cl-btechmepr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-btechmepr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-btechmepr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        .cl-btechmepr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-btechmepr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-btechmepr-cert-grid{grid-template-columns:1fr 1fr}.cl-btechmepr-cert-feat{grid-row:span 1}.cl-btechmepr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechmepr-sec{padding:70px 5%}.cl-btechmepr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechmepr-sec" id="certs">
        <div className="cl-btechmepr-wrap">
          <div className="cl-btechmepr-head">
            <div className="cl-btechmepr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-btechmepr-h2">Certifications, Projects<br/><em>&amp; Industry Exposure</em></h2>
            <p className="cl-btechmepr-desc">Globally recognised certifications, hands-on labs, and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-btechmepr-block-title">Industry Certifications</div>
          <div className="cl-btechmepr-cert-grid">
            <div className="cl-btechmepr-cert cl-btechmepr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility to your skill set.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-btechmepr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="cl-btechmepr-block-title">Hands-On Learning</div>
          <div className="cl-btechmepr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-btechmepr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}
