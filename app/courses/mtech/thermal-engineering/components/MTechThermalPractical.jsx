'use client';

const CERTS = [
  { t:'SolidWorks Simulation',     d:'Thermal & Mechanical Analysis' },
  { t:'NPTEL / SWAYAM',            d:'Advanced Thermal Engineering & Renewable Energy' },
  { t:'ASHRAE Learning Programs',  d:'HVAC, Building Energy Systems & Sustainable Cooling' },
];

const HANDS = [
  'Frontier Research & Thesis',
  'Industry-Integrated Research Projects',
  'Computational Engineering & Digital Simulation',
  'Research Publications & Global Conferences',
  'Technology Development & Advanced Prototyping',
  'Sponsored Research & Consultancy Projects',
];

export default function MTechThermalPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-pr-sec{padding:110px 7%;background:#fff;}
        .cl-mtte-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-pr-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mtte-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtte-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtte-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mtte-pr-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtte-pr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtte-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        /* Feat card spans full height of its row; 3 cert cards fill cols 2-4 */
        .cl-mtte-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px;}
        .cl-mtte-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-mtte-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;}
        .cl-mtte-pr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-mtte-pr-cert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-mtte-pr-cert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-mtte-pr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-mtte-pr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-mtte-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-mtte-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-mtte-pr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-mtte-pr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-mtte-pr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-mtte-pr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtte-pr-hands-grid{grid-template-columns:1fr}.cl-mtte-pr-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtte-pr-sec" id="practical">
        <div className="cl-mtte-pr-wrap">
          <div className="cl-mtte-pr-head">
            <div className="cl-mtte-pr-eyebrow"><span className="bar"/>Research, Certifications &amp; Innovation</div>
            <h2 className="cl-mtte-pr-h2">Certifications, Projects<br/><em>&amp; Innovation</em></h2>
            <p className="cl-mtte-pr-sub">Complement your postgraduate education with globally recognised professional certifications in advanced simulation, digital engineering, and sustainable energy technologies.</p>
          </div>

          <div className="cl-mtte-pr-block-title">Global Certifications</div>
          <div className="cl-mtte-pr-cert-grid">
            <div className="cl-mtte-pr-cert-card cl-mtte-pr-cert-feat">
              <span className="tag">Simulation Leader</span>
              <div className="font-bold">ANSYS — CFD, Heat Transfer &amp; Multiphysics Simulation</div>
              <div className="d">Industry-leading simulation certification for computational fluid dynamics and multiphysics thermal analysis.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-mtte-pr-cert-card">
                <div className="t">{c.t}</div>
                <div className="d">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-mtte-pr-block-title">Advanced Experiential Learning</div>
          <div className="cl-mtte-pr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-mtte-pr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          <div className="cl-mtte-pr-block-title">Innovation Ecosystem</div>
          <p className="cl-mtte-pr-intern-note">Students transform ideas into impactful engineering solutions through <strong>industry-academia collaborative research, patents, publications, and innovation, incubation, and entrepreneurship support</strong> — backed by dedicated placement assistance.</p>
        </div>
      </section>
    </>
  );
}
