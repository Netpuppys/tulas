'use client';

const WHY = [
  { n:'01', title:'AI-Integrated Learning',           desc:'AI Tools for Business Analysts runs across three semesters on LEAP, an AI-native platform that personalises your path and tracks progress continuously.' },
  { n:'02', title:'IIT Kanpur E&ICT Academy',         desc:'Association bringing premier, competency-based certifications and academic credibility to your MBA degree.' },
  { n:'03', title:'Industry-Aligned Certifications',  desc:'Google Data Analytics, Microsoft Power BI, Tableau, and IBM Data Science — each aligned to what\'s being taught that semester.' },
  { n:'04', title:'Live Analytics Projects',          desc:'A real business statistics project in Semester II and an Industry Live Analytics Project in Semester III — not case studies, real data.' },
  { n:'05', title:'Data Strategy Capstone',           desc:'Present your final-semester analytics strategy work to a panel of practising data leaders from industry.' },
  { n:'06', title:'Multiple Career Pathways',         desc:'Analytics teams, business intelligence consulting, or a data strategy leadership track — built into the curriculum from Day 1.' },
  { n:'07', title:'Placement Readiness',              desc:'Dedicated placement support across the final year of the programme, with aptitude and case interview preparation.' },
  { n:'08', title:'Life Skills & Professional Wellness', desc:'A dedicated NEP 2020 course covering burnout management, ethics, and professional workplace navigation for analytics roles.' },
  { n:'09', title:'Cross-Functional Data Fluency',   desc:'Marketing, financial, and HR analytics taught as one connected analytics core — giving graduates a full business view.' },
];

export default function MBABAWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabawhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-mbabawhy-wrap{max-width:1280px;margin:0 auto}
        .cl-mbabawhy-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbabawhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbabawhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbabawhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbabawhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mbabawhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}
        .cl-mbabawhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mbabawhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-mbabawhy-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-mbabawhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-mbabawhy-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-mbabawhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}
        @media(max-width:900px){.cl-mbabawhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-mbabawhy-sec{padding:70px 5%}.cl-mbabawhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbabawhy-sec" id="why-tulas">
        <div className="cl-mbabawhy-wrap">
          <div className="cl-mbabawhy-head">
            <div className="cl-mbabawhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mbabawhy-h2">Why Study This MBA<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mbabawhy-desc">A programme engineered for the AI era — combining a strong management core, industry alignment, and applied analytics practice.</p>
          </div>
          <div className="cl-mbabawhy-grid">
            {WHY.map(w=>(
              <div key={w.n} className="cl-mbabawhy-card">
                <div className="cl-mbabawhy-n">{w.n}</div>
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
