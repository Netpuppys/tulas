'use client';

const CARDS = [
  { n:'01', h:'AI-Integrated Learning',              p:'AI Tools for Finance Professionals runs across three semesters on LEAP, an AI-native platform that personalises your path.' },
  { n:'02', h:'IIT Kanpur E&ICT Academy',             p:'Association bringing premier, competency-based certifications and academic credibility to your degree.' },
  { n:'03', h:'Industry-Aligned Certifications',     p:'NSE Academy, Bloomberg Market Concepts, and CFA Institute Investment Foundations aligned to what\'s being taught each semester.' },
  { n:'04', h:'Live Valuation & Modelling Projects', p:'A real financial modelling project in Semester II and an Industry Live Finance Project in Semester III.' },
  { n:'05', h:'Capital Markets Capstone',            p:'Present your final-semester financial strategy work to a panel of practising finance leaders.' },
  { n:'06', h:'Multiple Career Pathways',            p:'Corporate finance teams, banking and financial services, or an independent advisory practice.' },
  { n:'07', h:'Placement Readiness',                 p:'Dedicated placement support across the final year of the programme.' },
  { n:'08', h:'Life Skills & Professional Wellness', p:'A dedicated NEP 2020 course covering burnout, ethics, and professional workplace navigation.' },
  { n:'09', h:'P&L Ownership',                       p:'Financial Accounting and Business Analytics for Finance so you can defend the numbers, not just the narrative.' },
];

export default function MBAFinWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbafinwhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-mbafinwhy-wrap{max-width:1280px;margin:0 auto}
        .cl-mbafinwhy-head{text-align:center;max-width:880px;margin:0 auto 60px}
        .cl-mbafinwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbafinwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbafinwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbafinwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mbafinwhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}
        .cl-mbafinwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mbafinwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-mbafinwhy-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,31,76,.12)}
        .cl-mbafinwhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-mbafinwhy-card h3{font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-mbafinwhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}
        @media(max-width:900px){.cl-mbafinwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-mbafinwhy-sec{padding:70px 5%}.cl-mbafinwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbafinwhy-sec" id="why-tulas">
        <div className="cl-mbafinwhy-wrap">
          <div className="cl-mbafinwhy-head">
            <div className="cl-mbafinwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mbafinwhy-h2">Why Study This MBA<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mbafinwhy-desc">A programme engineered for the AI era — combining a strong management core, industry alignment, and applied practice.</p>
          </div>
          <div className="cl-mbafinwhy-grid">
            {CARDS.map((c,i)=>(
              <div className="cl-mbafinwhy-card" key={i}>
                <div className="cl-mbafinwhy-n">{c.n}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
