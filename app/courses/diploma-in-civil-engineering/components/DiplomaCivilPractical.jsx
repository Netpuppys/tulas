'use client';

const CERTS = [
  { title:'AWS',       desc:'Cloud certifications' },
  { title:'Microsoft', desc:'Azure & developer tracks' },
  { title:'Google',    desc:'Cloud & AI certifications' },
  { title:'NVIDIA',    desc:'Deep learning & AI' },
  { title:'Oracle',    desc:'Database & Java' },
  { title:'Python',    desc:'Programming certifications' },
];

const HANDSON = [
  { n:'01', label:'Live Projects' },
  { n:'02', label:'Hackathons' },
  { n:'03', label:'Coding Challenges' },
  { n:'04', label:'Research Projects' },
  { n:'05', label:'Product Development' },
  { n:'06', label:'Innovation Competitions' },
];

export default function DiplomaCivilPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-pr-sec{padding:110px 7%;background:#fff;}
        .cl-dipce-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipce-pr-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-dipce-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipce-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipce-pr-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-dipce-pr-head h2 em{font-style:normal;color:#DF5400;}
        .cl-dipce-pr-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-dipce-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        /* cert grid */
        .cl-dipce-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px;}
        .cl-dipce-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-dipce-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;grid-row:span 2;}
        .cl-dipce-pr-feat-tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-dipce-pr-feat-title{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-dipce-pr-feat-desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-dipce-pr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-dipce-pr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        /* hands grid */
        .cl-dipce-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-dipce-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-dipce-pr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-dipce-pr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-dipce-pr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-dipce-pr-cert-grid{grid-template-columns:1fr 1fr}.cl-dipce-pr-cert-feat{grid-row:auto}}
        @media(max-width:640px){.cl-dipce-pr-sec{padding:70px 5%}.cl-dipce-pr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-dipce-pr-sec" id="practical">
        <div className="cl-dipce-pr-wrap">

          <div className="cl-dipce-pr-head">
            <div className="cl-dipce-pr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2>Certifications, Projects<br/><em>&amp; Industry Exposure</em></h2>
            <p>Globally recognised certifications, hands-on labs, and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-dipce-pr-block-title">Industry Certifications</div>
          <div className="cl-dipce-pr-cert-grid">
            <div className="cl-dipce-pr-cert-card cl-dipce-pr-cert-feat">
              <span className="cl-dipce-pr-feat-tag">Flagship Association</span>
              <div className="cl-dipce-pr-feat-title">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="cl-dipce-pr-feat-desc">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility to your diploma.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-dipce-pr-cert-card">
                <div className="t">{c.title}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="cl-dipce-pr-block-title">Hands-On Learning</div>
          <div className="cl-dipce-pr-hands-grid">
            {HANDSON.map((h,i)=>(
              <div key={i} className="cl-dipce-pr-hands-item">
                <span className="n">{h.n}</span>{h.label}
              </div>
            ))}
          </div>

          

        </div>
      </section>
    </>
  );
}
