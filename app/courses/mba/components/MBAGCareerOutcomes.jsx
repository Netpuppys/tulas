'use client';
import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role: 'Marketing Manager',              range: '₹8–18 LPA' },
  { role: 'Digital Marketing Manager',      range: '₹8–20 LPA' },
  { role: 'HR Manager / HRBP',              range: '₹7–16 LPA' },
  { role: 'International Business Manager', range: '₹9–20 LPA' },
  { role: 'Financial Analyst / Manager',    range: '₹8–22 LPA' },
  { role: 'Business Analyst',               range: null },
  { role: 'Investment Banking Associate',   range: '₹10–35 LPA' },
  { role: 'Management Consultant',          range: 'Up to ₹60 LPA' },
];

const ACH = [
  { num: '₹60 LPA', lbl: 'Highest Package',       style: { background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' } },
  { num: '6',        lbl: 'Specializations',        style: { background: '#001F4C' } },
  { num: '100%',     lbl: 'Placement Assistance',   style: { background: '#001F4C' } },
  { num: '500+',     lbl: 'Recruiters',             style: { background: '#001F4C' } },
];

const SECTORS = [
  'FMCG & Consumer Brands', 'IT & Consulting', 'BFSI', 'E-Commerce',
  'Manufacturing', 'Consulting Firms', 'Startups & D2C', 'Media & Entertainment',
];

export default function MBAGCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagco-sec{padding:110px 7%;background:#fff}
        .cl-mbagco-wrap{max-width:1280px;margin:0 auto}

        .cl-mbagco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mbagco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbagco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbagco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbagco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbagco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbagco-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px}
        .cl-mbagco-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-mbagco-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        .cl-mbagco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-mbagco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-mbagco-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-mbagco-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}

        .cl-mbagco-marquee-head{text-align:center;margin-bottom:10px}
        .cl-mbagco-marquee-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-mbagco-marquee-head h3 em{font-style:normal;color:#DF5400}
        .cl-mbagco-marquee-head p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-mbagco-marquee-wrap{overflow:hidden;margin:20px 0}
        @keyframes cl-mbagco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mbagco-marquee-track{display:flex;gap:16px;width:max-content;animation:cl-mbagco-scroll 32s linear infinite}
        .cl-mbagco-chip{min-width:190px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-mbagco-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:900px){.cl-mbagco-grid{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){
          .cl-mbagco-sec{padding:70px 5%}
          .cl-mbagco-grid{grid-template-columns:1fr 1fr}
          .cl-mbagco-ach{grid-template-columns:1fr 1fr}
        }
      `}} />

      <section className="cl-mbagco-sec" id="careers">
        <div className="cl-mbagco-wrap">

          <div className="cl-mbagco-head">
            <div className="cl-mbagco-eyebrow"><span className="bar" />Career Outcomes</div>
            <h2 className="cl-mbagco-h2">Where This MBA<br /><em>Can Take You</em></h2>
            <p className="cl-mbagco-desc">
              Six specializations, one strong foundation — our graduates build careers across every core business function.
            </p>
          </div>

          {/* Career roles */}
          <div className="cl-mbagco-grid">
            {CAREERS.map(c => (
              <div key={c.role} className="cl-mbagco-item">
                {c.role}
                {c.range && <span className="cl-mbagco-range">{c.range}</span>}
              </div>
            ))}
          </div>

          {/* Achievement cards */}
          <div className="cl-mbagco-ach">
            {ACH.map(a => (
              <div key={a.num} className="cl-mbagco-ach-card" style={a.style}>
                <div className="cl-mbagco-ach-num">{a.num}</div>
                <div className="cl-mbagco-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                    
                            <BtechStudents/>

          {/* Recruiter marquee */}
          {/* <div className="cl-mbagco-marquee-head">
            <h3>Where Graduates<br /><em>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors across our six specializations — FMCG, BFSI, IT &amp; consulting, and more.</p>
          </div>
          <div className="cl-mbagco-marquee-wrap">
            <div className="cl-mbagco-marquee-track">
              {[...SECTORS, ...SECTORS].map((s, i) => (
                <div key={i} className="cl-mbagco-chip">{s}</div>
              ))}
            </div>
          </div>
          <p className="cl-mbagco-disclaimer">Indicative sectors, not confirmed recruiter commitments.</p> */}

        </div>
      </section>
    </>
  );
}
