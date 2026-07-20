'use client';

const CERTS = [
  { t:'Soil & Water Testing',         d:'Advanced lab certification' },
  { t:'Climate-Resilient Agriculture', d:'Sustainable practice certification' },
  { t:'Precision Agronomy',           d:'Agri-tech tools training' },
  { t:'Research Methodology',         d:'Data analysis & field experimentation' },
];

const HANDS = [
  'Laboratory Work',
  'Field Trials',
  'Research Projects',
  'Field Visits & Industry Interactions',
  'Extension Activities & Workshops',
  'Dissertation / Thesis Project',
];

export default function MScAgrPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagr-pr-sec{padding:110px 7%;background:#fff;}
        .cl-mscagr-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagr-pr-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mscagr-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mscagr-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mscagr-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mscagr-pr-h2 em{font-style:normal;color:#DF5400;}
        .cl-mscagr-pr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mscagr-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-mscagr-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px;}
        .cl-mscagr-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-mscagr-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;grid-row:span 2;}
        .cl-mscagr-pr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-mscagr-pr-cert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-mscagr-pr-cert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-mscagr-pr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-mscagr-pr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-mscagr-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-mscagr-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-mscagr-pr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-mscagr-pr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-mscagr-pr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-mscagr-pr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mscagr-pr-hands-grid{grid-template-columns:1fr}.cl-mscagr-pr-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mscagr-pr-sec" id="practical">
        <div className="cl-mscagr-pr-wrap">
          <div className="cl-mscagr-pr-head">
            <div className="cl-mscagr-pr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-mscagr-pr-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-mscagr-pr-sub">Laboratory work, field trials, and continuous research and industry exposure that make graduates practice-ready.</p>
          </div>

          <div className="cl-mscagr-pr-block-title">Practical &amp; Research Certifications</div>
          <div className="cl-mscagr-pr-cert-grid">
            <div className="cl-mscagr-pr-cert-card cl-mscagr-pr-cert-feat">
              <span className="tag">Curriculum Foundation</span>
              <div className="font-bold">Research-Driven Agronomy Curriculum</div>
              <div className="d">A programme structured around laboratory work, field trials, and research projects, integrating academic depth with field application.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-mscagr-pr-cert-card">
                <div className="t">{c.t}</div>
                <div className="d">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-mscagr-pr-block-title">Hands-On Learning</div>
          <div className="cl-mscagr-pr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-mscagr-pr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </>
  );
}
