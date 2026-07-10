'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',            desc:'AI Tools for Global Business runs across three semesters on LEAP, our AI-native learning platform that personalises your path and tracks progress continuously.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',          desc:'Competency-based Year 1 and Year 2 certificates from a premier national institution — adding independent credibility to your international business degree.' },
  { num:'03', title:'Industry-Aligned Certifications',   desc:'World Trade Institute, export-import documentation, trade compliance, and global strategy certifications prepared for within regular coursework.' },
  { num:'04', title:'Live Global Trade Projects',        desc:'A real global market research project in Semester II plus an Industry Live Global Trade Project in Semester III — not simulations, but real deliverables.' },
  { num:'05', title:'Global Leadership Capstone',        desc:'Present a cross-border market-entry strategy to a panel of global trade leaders in the final semester — the defining proof of readiness for industry.' },
  { num:'06', title:'Multiple Career Pathways',          desc:'Graduate placeable in export-import operations, global trade consulting, or market-entry leadership — three distinct career tracks built into the curriculum.' },
  { num:'07', title:'Placement Readiness',               desc:'Dedicated placement support across the final year — resume reviews, mock interviews, industry connects, and recruiter engagement.' },
  { num:'08', title:'Life Skills & Professional Wellness', desc:'A dedicated NEP 2020 course covering burnout in high-pressure global roles, cross-cultural communication, and civic responsibility for business leaders.' },
  { num:'09', title:'Cross-Border Fluency',              desc:'Trade policy, currency risk, and global supply chain taught as connected pillars of international business — not siloed electives.' },
];

export default function MBAIBWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaibwhy-sec{background:#fff;padding:110px 7%}
        .cl-mbaibwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-mbaibwhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mbaibwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaibwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaibwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaibwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaibwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbaibwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .cl-mbaibwhy-card{border-radius:18px;padding:32px;border:1.5px solid #e0e4ed;background:#f8f9fc;transition:transform .3s,box-shadow .3s,border-color .3s}
        .cl-mbaibwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-mbaibwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-mbaibwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-mbaibwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-mbaibwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbaibwhy-sec{padding:70px 5%}.cl-mbaibwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mbaibwhy-sec" id="why-tulas">
        <div className="cl-mbaibwhy-wrap">
          <div className="cl-mbaibwhy-head">
            <div className="cl-mbaibwhy-eyebrow"><span className="bar"/>Why Tulas Institute</div>
            <h2 className="cl-mbaibwhy-h2">9 Reasons To Choose<br/><em>This Programme</em></h2>
            <p className="cl-mbaibwhy-sub">An MBA built for the next generation of international business leaders — with real projects, AI fluency, and a clear pathway to global career readiness.</p>
          </div>
          <div className="cl-mbaibwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mbaibwhy-card">
                <div className="cl-mbaibwhy-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
