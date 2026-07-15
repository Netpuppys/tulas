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

export default function BTechEEEPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeepr-sec{padding:110px 7%;background:#fff}
        .cl-btecheeepr-wrap{max-width:1280px;margin:0 auto}

        .cl-btecheeepr-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-btecheeepr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheeepr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheeepr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btecheeepr-h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeepr-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btecheeepr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px}
        .cl-btecheeepr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px}
        .cl-btecheeepr-cert{border-radius:16px;padding:28px;border:1px solid #e0e4ed;background:#fff}
        .cl-btecheeepr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;display:flex;flex-direction:column;justify-content:center;grid-row:span 2}
        .cl-btecheeepr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content}
        .cl-btecheeepr-cert-feat .t{font-weight:800;font-size:1.2rem;color:#fff;margin-bottom:8px}
        .cl-btecheeepr-cert-feat .d{font-size:.9rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-btecheeepr-cert .t{font-weight:800;font-size:1rem;color:#001F4C;margin-bottom:6px}
        .cl-btecheeepr-cert .d{font-size:.82rem;color:#5a6a8a;line-height:1.5}

        .cl-btecheeepr-hands{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px}
        .cl-btecheeepr-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;font-weight:700;font-size:1rem}
        .cl-btecheeepr-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;line-height:1}

        .cl-btecheeepr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-btecheeepr-intern strong{color:#001F4C}

        @media(max-width:900px){.cl-btecheeepr-cert-grid{grid-template-columns:1fr 1fr}.cl-btecheeepr-cert-feat{grid-row:span 1}.cl-btecheeepr-hands{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btecheeepr-sec{padding:70px 5%}.cl-btecheeepr-hands{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheeepr-sec" id="certs">
        <div className="cl-btecheeepr-wrap">
          <div className="cl-btecheeepr-head">
            <div className="cl-btecheeepr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-btecheeepr-h2">Certifications, Projects<br/><em>&amp; Industry Exposure</em></h2>
            <p className="cl-btecheeepr-desc">Globally recognised certifications, hands-on labs, and continuous industry exposure that make EEE graduates job-ready across power, automation, and energy sectors.</p>
          </div>

          <div className="cl-btecheeepr-block-title">Industry Certifications</div>
          <div className="cl-btecheeepr-cert-grid">
            <div className="cl-btecheeepr-cert cl-btecheeepr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="t">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility and technical depth to your EEE degree.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div className="cl-btecheeepr-cert" key={i}>
                <div className="t">{p.name}</div>
                <div className="d">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="cl-btecheeepr-block-title">Hands-On Learning</div>
          <div className="cl-btecheeepr-hands">
            {HANDS.map((h,i)=>(
              <div className="cl-btecheeepr-hand" key={i}>
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          {/* <div className="cl-btecheeepr-block-title">Internship Ecosystem</div>
          <p className="cl-btecheeepr-intern">Students undergo <strong>multiple internship opportunities</strong> across the programme — gaining real industry exposure, mentorship, and a direct pathway from internship to placement.</p> */}
        </div>
      </section>
    </>
  );
}
