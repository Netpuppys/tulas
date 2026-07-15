'use client';

const PARTNERS = [
  { t:'Legal Research Tools',    d:'Training on Manupatra / SCC Online-style legal databases' },
  { t:'ADR & Mediation',         d:'Mediation, negotiation & arbitration skill-building' },
  { t:'Moot Court Certification',d:'Certified participation in moot court competitions' },
  { t:'Legal Drafting Workshops',d:'Petitions, legal opinions & documentation practice' },
];

const HANDS = [
  'Moot Court Competitions',
  'Mock Trials & Court Visits',
  'Legal Aid Clinics',
  'Policy Research Projects',
  'Mediation & Arbitration Exercises',
  'Internship Programmes',
];

export default function BALLBPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbpr-sec{padding:110px 7%;background:#fff;}
        .cl-ballbpr-wrap{max-width:1280px;margin:0 auto;}

        .cl-ballbpr-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-ballbpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ballbpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ballbpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-ballbpr-h2 em{font-style:normal;color:#DF5400;}
        .cl-ballbpr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-ballbpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-ballbpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px;}
        .cl-ballbpr-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-ballbpr-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;}
        .cl-ballbpr-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-ballbpr-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-ballbpr-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-ballbpr-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-ballbpr-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-ballbpr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-ballbpr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-ballbpr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-ballbpr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-ballbpr-intern strong{color:#001F4C;}

        @media(max-width:900px){.cl-ballbpr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-ballbpr-sec{padding:70px 5%}.cl-ballbpr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-ballbpr-sec" id="practical">
        <div className="cl-ballbpr-wrap">
          <div className="cl-ballbpr-head">
            <div className="cl-ballbpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-ballbpr-h2">Skill<em> Development</em></h2>
            <p className="cl-ballbpr-sub">Beyond the degree — practical legal skill-building and continuous real-world exposure that make graduates practice-ready for courts, civil services, and public institutions.</p>
          </div>

          <div className="cl-ballbpr-block-title">Practical Legal Training</div>
          <div className="cl-ballbpr-cert-grid">
            <div className="cl-ballbpr-card cl-ballbpr-feat">
              <span className="tag">Flagship Recognition</span>
              <div className="font-bold">Bar Council of India (BCI) Approved</div>
              <div className="d">A BCI-approved curriculum ensures the degree meets the professional standards required to practise law in India.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div key={i} className="cl-ballbpr-card">
                <div className="t">{p.t}</div>
                <div className="d">{p.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-ballbpr-block-title">Experiential Learning</div>
          <div className="cl-ballbpr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-ballbpr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
