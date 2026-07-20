'use client';

const CERTS = [
  { t:'Soil & Seed Testing',       d:'Practical lab certification' },
  { t:'Organic Farming',           d:'Sustainable practice certification' },
  { t:'Precision Agriculture',     d:'Agri-tech tools training' },
  { t:'Agribusiness Management',   d:'Farm & enterprise management' },
];

const HANDS = [
  'Soil & Seed Testing Lab',
  'Crop Production Projects',
  'Farm & Field Practice',
  'Industrial & Farm Visits',
  'Rural Extension Activities',
  'Major/Capstone Project',
];

export default function BScAgPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagpr-sec{padding:110px 7%;background:#fff;}
        .cl-bscagpr-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagpr-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bscagpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bscagpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bscagpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bscagpr-h2 em{font-style:normal;color:#DF5400;}
        .cl-bscagpr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bscagpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-bscagpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px;}
        .cl-bscagpr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-bscagpr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;grid-row:span 2;}
        .cl-bscagpr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-bscagpr-cert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-bscagpr-cert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-bscagpr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-bscagpr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-bscagpr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-bscagpr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-bscagpr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-bscagpr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-bscagpr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-bscagpr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bscagpr-hands-grid{grid-template-columns:1fr}.cl-bscagpr-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bscagpr-sec" id="practical">
        <div className="cl-bscagpr-wrap">
          <div className="cl-bscagpr-head">
            <div className="cl-bscagpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-bscagpr-h2">Certifications <em>&amp; Projects</em></h2>
            <p className="cl-bscagpr-sub">Hands-on lab work, field practice, and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-bscagpr-block-title">Practical &amp; Skill Certifications</div>
          <div className="cl-bscagpr-cert-grid">
            <div className="cl-bscagpr-cert-card cl-bscagpr-cert-feat">
              <span className="tag">Curriculum Foundation</span>
              <div className="font-bold">ICAR-Aligned Curriculum</div>
              <div className="d">A curriculum built on Indian Council of Agricultural Research recommendations, giving the degree national academic credibility.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-bscagpr-cert-card">
                <div className="t">{c.t}</div>
                <div className="d">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-bscagpr-block-title">Hands-On Learning</div>
          <div className="cl-bscagpr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-bscagpr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </>
  );
}
