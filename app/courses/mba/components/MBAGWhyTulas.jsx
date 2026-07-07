'use client';

const WHY = [
  { n: '01', title: 'AI-Integrated Learning',          desc: 'AI tools woven across every specialization, powered by LEAP\'s personalised learning path.' },
  { n: '02', title: 'IIT Kanpur E&ICT Academy',         desc: 'Association bringing premier certifications and academic credibility to your MBA.' },
  { n: '03', title: 'Six Specializations',              desc: 'Marketing, Digital Marketing using AI, HRM, International Business, Finance, and Business Analytics.' },
  { n: '04', title: 'Live Business Projects',           desc: 'Real projects and an Industry Live Project running through both years.' },
  { n: '05', title: 'CXO-Panel Capstone',               desc: 'Present final-semester strategy work to a panel of senior industry practitioners.' },
  { n: '06', title: 'Industry Certifications',          desc: 'Google, Meta, Microsoft, HubSpot, SAP and IIT Kanpur E&ICT Academy certifications built in.' },
  { n: '07', title: 'Placement Readiness',              desc: 'Dedicated placement support across the final year, with a highest package of ₹60 LPA.' },
  { n: '08', title: 'Life Skills & Professional Wellness', desc: 'A dedicated NEP 2020 course on workplace navigation and professional wellbeing.' },
  { n: '09', title: 'Innovation & Research Culture',   desc: 'A culture of case competitions, research projects, and applied business innovation.' },
];

export default function MBAGWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagwhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-mbagwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-mbagwhy-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbagwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbagwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbagwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbagwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagwhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbagwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mbagwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-mbagwhy-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-mbagwhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-mbagwhy-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-mbagwhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:900px){.cl-mbagwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){
          .cl-mbagwhy-sec{padding:70px 5%}
          .cl-mbagwhy-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-mbagwhy-sec" id="why-tulas">
        <div className="cl-mbagwhy-wrap">

          <div className="cl-mbagwhy-head">
            <div className="cl-mbagwhy-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-mbagwhy-h2">Why Study This MBA<br /><em>At Tulas Institute</em></h2>
            <p className="cl-mbagwhy-desc">
              A programme engineered for the AI era — combining a strong management core, industry alignment, and specialization depth.
            </p>
          </div>

          <div className="cl-mbagwhy-grid">
            {WHY.map(w => (
              <div key={w.n} className="cl-mbagwhy-card">
                <div className="cl-mbagwhy-n">{w.n}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
