'use client';

const CARDS = [
  { num:'01', title:'BCI Approved Programme',       desc:'A Bar Council of India approved curriculum meeting national professional standards for legal education and practice.' },
  { num:'02', title:'Moot Court Training',           desc:'Regular moot court competitions and courtroom simulations build real advocacy skills that matter in the profession.' },
  { num:'03', title:'Experiential Legal Learning',   desc:'Court visits, legal aid clinics, and mediation exercises — a curriculum built on doing, not just lecture-based learning.' },
  { num:'04', title:'Internship Opportunities',      desc:'Hands-on exposure with law firms, courts, and legal aid clinics throughout the programme with a pathway to placement.' },
  { num:'05', title:'Sessions By Legal Experts',     desc:'Guest sessions and mentorship from practising advocates, judges, and senior legal professionals across key practice areas.' },
  { num:'06', title:'Legal Research & Drafting',     desc:'Dedicated training in legal research methodology, professional drafting, and documentation for practical competence.' },
  { num:'07', title:'Courtroom Simulations',         desc:'Mock trials and simulated courtroom environments build practical confidence before students enter real professional settings.' },
  { num:'08', title:'Industry Exposure',             desc:'Continuous interaction with the legal industry through internships, expert sessions, and live case discussions throughout the programme.' },
  { num:'09', title:'Practice-Oriented Curriculum',  desc:'A career-focused curriculum designed for practice, not just theory — preparing graduates for the courtroom from day one.' },
];

export default function LLBWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbwhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-llbwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-llbwhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-llbwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-llbwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-llbwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-llbwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-llbwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-llbwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-llbwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-llbwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-llbwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-llbwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-llbwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-llbwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-llbwhy-sec{padding:70px 5%}.cl-llbwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-llbwhy-sec" id="why-tulas">
        <div className="cl-llbwhy-wrap">
          <div className="cl-llbwhy-head">
            <div className="cl-llbwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-llbwhy-h2">Why Study LL.B.<br/><em>At Tulas</em></h2>
            <p className="cl-llbwhy-sub">A legal education engineered for the courtroom, not just the classroom — practice-oriented, ethics-driven, and career-focused.</p>
          </div>
          <div className="cl-llbwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-llbwhy-card">
                <div className="cl-llbwhy-num">{c.num}</div>
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
