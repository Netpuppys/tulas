'use client';

const CERTS = [
  { t:'AWS',             d:'Cloud Computing & Solutions Architecture' },
  { t:'Microsoft',       d:'Azure, AI & Developer Technologies' },
  { t:'Google',          d:'Cloud Computing & Artificial Intelligence' },
  { t:'NVIDIA',          d:'Deep Learning & Accelerated Computing' },
  { t:'Oracle',          d:'Advanced Database & Java Technologies' },
  { t:'Python Institute',d:'Advanced Python Programming' },
];

const HANDS = [
  'Research & Dissertation',
  'Industry-Sponsored Projects',
  'Hackathons & Innovation Challenges',
  'Research Publications',
  'Product Development & Prototyping',
  'Technology Incubation & Entrepreneurship',
];

export default function MTechCSEPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-pr-sec{padding:110px 7%;background:#fff;}
        .cl-mtcse-pr-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-pr-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mtcse-pr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtcse-pr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtcse-pr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mtcse-pr-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtcse-pr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtcse-pr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}

        .cl-mtcse-pr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:18px;margin-bottom:60px;}
        .cl-mtcse-pr-cert-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-mtcse-pr-cert-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;grid-row:span 2;}
        .cl-mtcse-pr-cert-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-mtcse-pr-cert-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-mtcse-pr-cert-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-mtcse-pr-cert-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-mtcse-pr-cert-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-mtcse-pr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-mtcse-pr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-mtcse-pr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-mtcse-pr-intern-note{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-mtcse-pr-intern-note strong{color:#001F4C;}

        @media(max-width:900px){.cl-mtcse-pr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtcse-pr-hands-grid{grid-template-columns:1fr}.cl-mtcse-pr-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mtcse-pr-sec" id="practical">
        <div className="cl-mtcse-pr-wrap">
          <div className="cl-mtcse-pr-head">
            <div className="cl-mtcse-pr-eyebrow"><span className="bar"/>Research, Certifications &amp; Innovation</div>
            <h2 className="cl-mtcse-pr-h2">Certifications, Projects<br/><em>&amp; Innovation</em></h2>
            <p className="cl-mtcse-pr-sub">Go beyond the classroom with advanced research, industry-recognised certifications, real-world problem-solving, and innovation-driven learning.</p>
          </div>

          <div className="cl-mtcse-pr-block-title">Industry Certifications</div>
          <div className="cl-mtcse-pr-cert-grid">
            <div className="cl-mtcse-pr-cert-card cl-mtcse-pr-cert-feat">
              <span className="tag">Flagship Association</span>
              <div className="font-bold">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="d">Premier certification programmes offered through the Electronics &amp; ICT Academy, IIT Kanpur — strengthening your expertise in advanced computing and emerging technologies.</div>
            </div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cl-mtcse-pr-cert-card">
                <div className="t">{c.t}</div>
                <div className="d">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-mtcse-pr-block-title">Advanced Experiential Learning</div>
          <div className="cl-mtcse-pr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-mtcse-pr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          {/* <div className="cl-mtcse-pr-block-title">Internship Ecosystem</div>
          <p className="cl-mtcse-pr-intern-note">Students engage in <strong>industry-sponsored projects, consultancy initiatives, and research collaborations</strong> — conducting impactful research under expert faculty guidance, backed by dedicated placement support.</p> */}
        </div>
      </section>
    </>
  );
}
