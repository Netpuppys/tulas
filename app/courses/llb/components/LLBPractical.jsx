'use client';

const PARTNERS = [
  { t:'Legal Research Tools',    d:'Training on Manupatra / SCC Online-style legal databases' },
  { t:'ADR & Mediation',         d:'Mediation, negotiation & arbitration skill-building' },
  { t:'Moot Court Certification',d:'Certified participation in moot court competitions' },
  { t:'Legal Drafting Workshops',d:'Contracts, petitions & legal documentation practice' },
];

const HANDS = [
  'Moot Court Competitions',
  'Mock Trials',
  'Court Visits & Legal Aid Clinics',
  'Client Counselling & Mediation Exercises',
  'Drafting Workshops & Case Law Analysis',
  'Internship Programmes',
];

export default function LLBPractical() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbpr-sec{padding:110px 7%;background:#fff;}
        .cl-llbpr-wrap{max-width:1280px;margin:0 auto;}

        .cl-llbpr-head{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-llbpr-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-llbpr-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-llbpr-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-llbpr-h2 em{font-style:normal;color:#DF5400;}
        .cl-llbpr-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-llbpr-block-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin-bottom:32px;}
        .cl-llbpr-cert-grid{display:grid;grid-template-columns:1.6fr repeat(4,1fr);gap:18px;margin-bottom:60px;}
        .cl-llbpr-card{border-radius:16px;padding:24px;border:1px solid #e0e4ed;background:#fff;}
        .cl-llbpr-feat{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;}
        .cl-llbpr-feat .tag{display:inline-block;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7;width:fit-content;}
        .cl-llbpr-feat .t{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px;}
        .cl-llbpr-feat .d{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8);}
        .cl-llbpr-card .t{font-weight:800;font-size:1.02rem;color:#001F4C;margin-bottom:6px;}
        .cl-llbpr-card .d{font-size:.82rem;color:#5a6a8a;}

        .cl-llbpr-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:60px;}
        .cl-llbpr-hands-item{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}
        .cl-llbpr-hands-item .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;flex-shrink:0;}

        .cl-llbpr-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a;}
        .cl-llbpr-intern strong{color:#001F4C;}

        @media(max-width:900px){.cl-llbpr-cert-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-llbpr-sec{padding:70px 5%}.cl-llbpr-hands-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-llbpr-sec" id="practical">
        <div className="cl-llbpr-wrap">
          <div className="cl-llbpr-head">
            <div className="cl-llbpr-eyebrow"><span className="bar"/>Practical Learning</div>
            <h2 className="cl-llbpr-h2">Skill Development<br/><em>&amp; Internships</em></h2>
            <p className="cl-llbpr-sub">Beyond the degree — practical legal skill-building and continuous industry exposure that make graduates practice-ready.</p>
          </div>

          <div className="cl-llbpr-block-title">Practical Legal Training</div>
          <div className="cl-llbpr-cert-grid">
            <div className="cl-llbpr-card cl-llbpr-feat">
              <span className="tag">Flagship Recognition</span>
              <div className="font-bold">Bar Council of India (BCI) Approved</div>
              <div className="d">A BCI-approved curriculum ensures the degree meets the professional standards required to practise law in India.</div>
            </div>
            {PARTNERS.map((p,i)=>(
              <div key={i} className="cl-llbpr-card">
                <div className="t">{p.t}</div>
                <div className="d">{p.d}</div>
              </div>
            ))}
          </div>

          <div className="cl-llbpr-block-title">Experiential Learning</div>
          <div className="cl-llbpr-hands-grid">
            {HANDS.map((h,i)=>(
              <div key={i} className="cl-llbpr-hands-item">
                <span className="n">0{i+1}</span>{h}
              </div>
            ))}
          </div>

          {/* <div className="cl-llbpr-block-title">Internship Ecosystem</div>
          <p className="cl-llbpr-intern">Students gain <strong>hands-on legal exposure</strong> through internships with law firms, courts, and legal aid clinics — supported by sessions from practising legal experts and a direct pathway from internship to placement.</p> */}

        </div>
      </section>
    </>
  );
}
