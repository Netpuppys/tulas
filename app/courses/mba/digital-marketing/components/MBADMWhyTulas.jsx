'use client';

const WHY = [
  {
    n: '01',
    title: 'AI-Integrated Learning',
    desc: 'AI Tools for Marketers runs across three semesters on LEAP, an AI-native platform that personalises your path.',
  },
  {
    n: '02',
    title: 'IIT Kanpur E&ICT Academy',
    desc: 'Association bringing premier, competency-based certifications and academic credibility to your degree.',
  },
  {
    n: '03',
    title: 'Industry-Aligned Certifications',
    desc: 'Google, Meta, HubSpot, and DeepLearning.AI certifications aligned to what\'s being taught each semester.',
  },
  {
    n: '04',
    title: 'Live Brand Campaigns',
    desc: 'A real multi-channel campaign in Semester II and an Industry Live Brand Project in Semester III.',
  },
  {
    n: '05',
    title: 'CMO-Panel Capstone',
    desc: 'Present your final-semester brand strategy work to a panel of practising CMOs.',
  },
  {
    n: '06',
    title: 'Three Career Paths',
    desc: 'Corporate marketing team, freelance consulting practice, or your own digital agency — built into Semester IV.',
  },
  {
    n: '07',
    title: 'Placement Readiness',
    desc: 'Dedicated placement support across the final year of the programme.',
  },
  {
    n: '08',
    title: 'Life Skills & Professional Wellness',
    desc: 'A dedicated NEP 2020 course covering burnout, ASCI standards, and professional workplace navigation.',
  },
  {
    n: '09',
    title: 'Brand P&L Ownership',
    desc: 'Financial Accounting and Business Analytics for Marketers so you can defend a brand\'s numbers, not just its story.',
  },
];

export default function MBADMWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmwhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-dmwhy-wrap{max-width:1280px;margin:0 auto}
        .cl-dmwhy-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5.5vw,5.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-dmwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-dmwhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        .cl-dmwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-dmwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-dmwhy-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,31,76,.12)}
        .cl-dmwhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-dmwhy-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-dmwhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:900px){.cl-dmwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){
          .cl-dmwhy-sec{padding:70px 5%}
          .cl-dmwhy-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dmwhy-sec" id="why-tulas">
        <div className="cl-dmwhy-wrap">
          <div className="cl-dmwhy-head">
            <div className="cl-dmwhy-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-dmwhy-h2">Why Study This MBA<br /><em>At Tulas Institute</em></h2>
            <p className="cl-dmwhy-desc">
              A programme engineered for the AI era — combining a strong management core, industry alignment, and a culture of live campaigns.
            </p>
          </div>

          <div className="cl-dmwhy-grid">
            {WHY.map(w => (
              <div key={w.n} className="cl-dmwhy-card">
                <div className="cl-dmwhy-n">{w.n}</div>
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
