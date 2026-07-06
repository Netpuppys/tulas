'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role: 'Digital Marketing Manager',    range: '₹8–18 LPA' },
  { role: 'Brand Manager',                range: '₹8–20 LPA' },
  { role: 'Performance Marketing Lead',   range: '₹9–20 LPA' },
  { role: 'SEO & Content Strategist',     range: '₹7–15 LPA' },
  { role: 'Marketing Analytics Manager',  range: '₹9–22 LPA' },
  { role: 'Freelance Consultant',         range: 'Independent Practice' },
  { role: 'Digital Agency Founder',       range: 'Build & Run Your Own' },
];

const ACHIEVEMENTS = [
  { num: '₹22 LPA', lbl: 'Highest Indicative Range',   bg: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)', numColor: '#fff',    lblColor: 'rgba(255,255,255,.85)' },
  { num: '3',       lbl: 'Career Paths at Graduation', bg: '#001F4C',                                          numColor: '#FFF3D7', lblColor: 'rgba(255,255,255,.85)' },
  { num: '9',       lbl: 'Certifications Across 2 Years', bg: '#001F4C',                                       numColor: '#FFF3D7', lblColor: 'rgba(255,255,255,.85)' },
  { num: '2028',    lbl: 'First Graduating Batch',     bg: '#001F4C',                                          numColor: '#FFF3D7', lblColor: 'rgba(255,255,255,.85)' },
];

const MARQUEE_SECTORS = [
  'FMCG & Consumer Brands',
  'Digital & Creative Agencies',
  'E-Commerce Platforms',
  'D2C & Startups',
  'Management Consulting',
  'Media & Entertainment',
  'BFSI Marketing Teams',
  'MarTech & AdTech Firms',
];

export default function MBADMCareerOutcomes() {
  // Duplicate for seamless loop
  const doubled = [...MARQUEE_SECTORS, ...MARQUEE_SECTORS];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        /* Career section */
        .cl-dmco-sec{padding:110px 7%;background:#fff}
        .cl-dmco-wrap{max-width:1280px;margin:0 auto}
        .cl-dmco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5.5vw,5.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-dmco-h2 em{font-style:normal;color:#DF5400}
        .cl-dmco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a;margin:0 auto}

        /* Career grid */
        .cl-dmco-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:50px}
        .cl-dmco-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-dmco-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        /* Achievement cards */
        .cl-dmco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-dmco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-dmco-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;display:block}
        .cl-dmco-ach-lbl{font-size:.84rem;font-weight:600;display:block}

        /* Recruiter marquee */
        .cl-dmco-mq-wrap{overflow:hidden;margin:20px 0}
        .cl-dmco-mq-track{display:flex;gap:16px;width:max-content;animation:dmcoScroll 32s linear infinite}
        @keyframes dmcoScroll{from{transform:translateX(0);}to{transform:translateX(-50%)}}
        .cl-dmco-mq-chip{min-width:190px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px;flex-shrink:0}
        .cl-dmco-mq-note{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        /* Batch banner */
        .cl-dmco-batch{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;margin-top:60px}
        .cl-dmco-batch h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4vw,3.6rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-dmco-batch p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        @media(max-width:900px){
          .cl-dmco-grid{grid-template-columns:repeat(3,1fr)}
          .cl-dmco-ach{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .cl-dmco-sec{padding:70px 5%}
          .cl-dmco-grid{grid-template-columns:1fr 1fr}
          .cl-dmco-batch{padding:40px 24px}
        }
      `}} />

      <section className="cl-dmco-sec" id="careers">
        <div className="cl-dmco-wrap">

          {/* Head */}
          <div className="cl-dmco-head">
            <div className="cl-dmco-eyebrow"><span className="bar" />Career Outcomes</div>
            <h2 className="cl-dmco-h2">Where This MBA<br /><em>Can Take You</em></h2>
            <p className="cl-dmco-desc">Three paths, not one — corporate brand teams, freelance consulting, or your own agency.</p>
          </div>

          {/* Career roles */}
          <div className="cl-dmco-grid">
            {CAREERS.map(c => (
              <div key={c.role} className="cl-dmco-item">
                {c.role}
                <span className="cl-dmco-range">{c.range}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="cl-dmco-ach">
            {ACHIEVEMENTS.map(a => (
              <div
                key={a.lbl}
                className="cl-dmco-ach-card"
                style={{ background: a.bg }}
              >
                <span className="cl-dmco-ach-num" style={{ color: a.numColor }}>{a.num}</span>
                <span className="cl-dmco-ach-lbl" style={{ color: a.lblColor }}>{a.lbl}</span>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                    
                            <BtechStudents/>

        </div>
      </section>
    </>
  );
}
