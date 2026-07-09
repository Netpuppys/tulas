'use client';

const WHY = [
  { n:'01', title:'AI-Integrated Learning',              desc:'AI Tools for Agri-Business runs across three semesters on LEAP, an AI-native platform that personalises your path and tracks progress continuously.' },
  { n:'02', title:'IIT Kanpur E&ICT Academy',            desc:'Association bringing premier, competency-based certifications and academic credibility to your MBA degree.' },
  { n:'03', title:'Industry-Aligned Certifications',     desc:'Agri finance, agricultural economics, and agribusiness value-chain certifications aligned to what\'s being taught each semester.' },
  { n:'04', title:'Live Agri-Market Projects',           desc:'A real farm-to-market research project in Semester II and an Industry Live Agri-Business Project in Semester III — not case studies, real agri-markets.' },
  { n:'05', title:'Rural Leadership Capstone',           desc:'Present your final-semester agribusiness strategy work to a panel of practising agribusiness leaders from industry.' },
  { n:'06', title:'Multiple Career Pathways',            desc:'Agribusiness corporates, agri supply chain operations, or rural development leadership roles — built into the curriculum from Day 1.' },
  { n:'07', title:'Placement Readiness',                 desc:'Dedicated placement support across the final year of the programme, with aptitude and case interview preparation.' },
  { n:'08', title:'Life Skills & Professional Wellness', desc:'A dedicated NEP 2020 course covering burnout management, ethics, and professional workplace navigation for agribusiness roles.' },
  { n:'09', title:'Farm-to-Market Fluency',              desc:'Agricultural economics, agri finance, and rural marketing taught as one connected agribusiness core — giving graduates a full farm-to-consumer view.' },
];

export default function MBAAgrMWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-why-sec{padding:110px 7%;background:#f8f9fc}
        .cl-mbaagrm-why-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-why-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbaagrm-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaagrm-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaagrm-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaagrm-why-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaagrm-why-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}
        .cl-mbaagrm-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mbaagrm-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-mbaagrm-why-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-mbaagrm-why-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-mbaagrm-why-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-mbaagrm-why-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}
        @media(max-width:900px){.cl-mbaagrm-why-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-mbaagrm-why-sec{padding:70px 5%}.cl-mbaagrm-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbaagrm-why-sec" id="why-tulas">
        <div className="cl-mbaagrm-why-wrap">
          <div className="cl-mbaagrm-why-head">
            <div className="cl-mbaagrm-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mbaagrm-why-h2">Why Study This MBA<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mbaagrm-why-desc">A programme engineered for the AI era — combining a strong management core, industry alignment, and applied agri-business practice.</p>
          </div>
          <div className="cl-mbaagrm-why-grid">
            {WHY.map(w=>(
              <div key={w.n} className="cl-mbaagrm-why-card">
                <div className="cl-mbaagrm-why-n">{w.n}</div>
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
