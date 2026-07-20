'use client';

const PARTNERS = [
  { t:'AWS',       d:'Cloud certifications' },
  { t:'Microsoft', d:'Azure & developer tracks' },
  { t:'Google',    d:'Cloud & AI certifications' },
  { t:'NVIDIA',    d:'Deep learning & AI' },
  { t:'Oracle',    d:'Database & Java' },
  { t:'Python',    d:'Programming certifications' },
];

const HANDS = [
  'Live Projects','Hackathons','Coding Challenges',
  'Research Projects','Product Development','Innovation Competitions',
];

export default function BCAGPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagpr-sec{padding:110px 7%;background:#fff;}
        .cl-bcagpr-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcagpr-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bcagpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcagpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcagpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bcagpr-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcagpr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcagpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-bcagpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px;}
        .cl-bcagpr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-bcagpr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;grid-row:span 2;}
        .cl-bcagpr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-bcagpr-cert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-bcagpr-cert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-bcagpr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-bcagpr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-bcagpr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-bcagpr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-bcagpr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-bcagpr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-bcagpr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-bcagpr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bcagpr-hands-grid{grid-template-columns:1fr}.cl-bcagpr-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcagpr-sec" id="practical">
        <div className="cl-bcagpr-wrap">
          <div className="cl-bcagpr-head">
            <div className="cl-bcagpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-bcagpr-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-bcagpr-sub">Globally recognised certifications, hands-on labs, and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-bcagpr-block-title">Industry Certifications</div>
          <div className="cl-bcagpr-cert-grid">
            <div className="cl-bcagpr-cert-card cl-bcagpr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility to your skill set.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div key={i} className="cl-bcagpr-cert-card">
                <div className="t">{p.t}</div>
                <div className="d">{p.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-bcagpr-block-title">Hands-On Learning</div>
          <div className="cl-bcagpr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-bcagpr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}
