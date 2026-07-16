'use client';

const CARDS = [
  { num:'01', title:'BCI Approved Programme',       desc:'A Bar Council of India approved integrated curriculum meeting national professional standards for legal education and practice.' },
  { num:'02', title:'Business + Law Integration',   desc:'A unique combination of business management and legal education preparing graduates for multidisciplinary corporate roles.' },
  { num:'03', title:'Corporate Law Focus',           desc:'Specialised training in corporate law, compliance, taxation, and commercial legal practice for the modern business environment.' },
  { num:'04', title:'Moot Court Training',           desc:'Regular moot court competitions and corporate legal clinics build real advocacy, negotiation, and drafting skills.' },
  { num:'05', title:'Internship Opportunities',      desc:'Hands-on corporate legal exposure through internships with law firms, corporate legal departments, and regulatory bodies.' },
  { num:'06', title:'Sessions By Industry Experts',  desc:'Guest sessions from practising corporate lawyers, compliance officers, and business advisors across key sectors.' },
  { num:'07', title:'Legal Research & Drafting',     desc:'Dedicated training in contract drafting, legal research methodology, and compliance documentation for professional practice.' },
  { num:'08', title:'Industry Exposure',             desc:'Continuous interaction with corporate legal departments and business organisations throughout the 5-year integrated programme.' },
  { num:'09', title:'Practice-Oriented Curriculum',  desc:'A career-focused curriculum designed for corporate legal roles — building practical competence from the first year.' },
];

export default function BBALLBWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllbwhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-bbllbwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-bbllbwhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-bbllbwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bbllbwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bbllbwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bbllbwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-bbllbwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bbllbwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-bbllbwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-bbllbwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-bbllbwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-bbllbwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-bbllbwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-bbllbwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bbllbwhy-sec{padding:70px 5%}.cl-bbllbwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bbllbwhy-sec" id="why-tulas">
        <div className="cl-bbllbwhy-wrap">
          <div className="cl-bbllbwhy-head">
            <div className="cl-bbllbwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-bbllbwhy-h2">Why Study BBA LL.B. <br/><em>At Tulas</em></h2>
            <p className="cl-bbllbwhy-sub">A legal education engineered for the courtroom and the boardroom — practice-oriented, ethics-driven, and career-focused for India's corporate legal sector.</p>
          </div>
          <div className="cl-bbllbwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-bbllbwhy-card">
                <div className="cl-bbllbwhy-num">{c.num}</div>
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
