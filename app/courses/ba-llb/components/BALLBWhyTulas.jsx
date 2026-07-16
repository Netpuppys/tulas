'use client';

const CARDS = [
  { num:'01', title:'BCI Approved Programme',           desc:'A Bar Council of India approved integrated curriculum meeting national professional standards for legal education and practice.' },
  { num:'02', title:'Integrated Humanities & Law',      desc:'A unique combination of humanities, political science, and legal education preparing graduates for multidisciplinary public and legal roles.' },
  { num:'03', title:'Constitutional & Public Law Focus',desc:'Specialised training in constitutional law, administrative law, public governance, and human rights for modern public service careers.' },
  { num:'04', title:'Moot Court Training',              desc:'Regular moot court competitions and legal aid clinics build real advocacy, argumentation, and courtroom presentation skills.' },
  { num:'05', title:'Internship Opportunities',         desc:'Hands-on legal exposure through internships with law firms, courts, civil services bodies, NGOs, and legal aid organisations.' },
  { num:'06', title:'Sessions By Legal Experts',        desc:'Guest sessions from practising advocates, judges, civil servants, and policy experts across key legal and governance sectors.' },
  { num:'07', title:'Legal Research & Policy Studies',  desc:'Dedicated training in legal research methodology, policy writing, and constitutional analysis for academic and advocacy careers.' },
  { num:'08', title:'Civil Services Preparation',       desc:'A curriculum grounded in public law, governance, and political science — providing a strong academic foundation for UPSC and state civil services.' },
  { num:'09', title:'Practice-Oriented Curriculum',     desc:'A career-focused curriculum designed for courtroom, public service, and policy roles — building practical competence from the first year.' },
];

export default function BALLBWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbwhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-ballbwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-ballbwhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-ballbwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-ballbwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-ballbwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-ballbwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-ballbwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-ballbwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-ballbwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-ballbwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-ballbwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-ballbwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-ballbwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-ballbwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-ballbwhy-sec{padding:70px 5%}.cl-ballbwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-ballbwhy-sec" id="why-tulas">
        <div className="cl-ballbwhy-wrap">
          <div className="cl-ballbwhy-head">
            <div className="cl-ballbwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-ballbwhy-h2">Why Study BA LL.B. <br/><em>At Tulas</em></h2>
            <p className="cl-ballbwhy-sub">A legal education engineered for the courtroom and the public service — practice-oriented, ethics-driven, and career-focused for India's courts, civil services, and public institutions.</p>
          </div>
          <div className="cl-ballbwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-ballbwhy-card">
                <div className="cl-ballbwhy-num">{c.num}</div>
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
