'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role:'Full Stack Developer',         range:'₹4–10 LPA' },
  { role:'Frontend Developer',           range:'₹3–8 LPA' },
  { role:'Backend Developer',            range:'₹4–9 LPA' },
  { role:'DevOps Engineer',              range:'₹5–12 LPA' },
  { role:'Cloud Engineer',               range:'₹5–12 LPA' },
  { role:'API Developer',                range:'₹4–9 LPA' },
  { role:'Software Engineer',            range:'₹4–10 LPA' },
  { role:'Tech Entrepreneur / Founder',  range:'Varies' },
];

const ACH = [
  { num:'8',     lbl:'Semesters of Structured Learning',    style:{ background:'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' } },
  { num:'8',     lbl:'Industry Certifications',             style:{ background:'#001F4C' } },
  { num:'4',     lbl:'Full Stack Tracks to Master',         style:{ background:'#001F4C' } },
  { num:'MCA+',  lbl:'Higher Education Pathway Ready',      style:{ background:'#001F4C' } },
];

const COMPANIES = [
  'Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM','Tata',
  'Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS',
];

export default function BCFSCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfsco-sec{padding:110px 7%;background:#fff}
        .cl-bcfsco-wrap{max-width:1280px;margin:0 auto}

        .cl-bcfsco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcfsco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfsco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfsco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfsco-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfsco-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcfsco-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px}
        .cl-bcfsco-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-bcfsco-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        .cl-bcfsco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-bcfsco-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-bcfsco-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-bcfsco-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}

        .cl-bcfsco-marquee-head{text-align:center;margin-bottom:10px}
        .cl-bcfsco-marquee-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.6rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-bcfsco-marquee-head h3 em{font-style:normal;color:#DF5400}
        .cl-bcfsco-marquee-head p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-bcfsco-marquee-wrap{overflow:hidden;margin:20px 0}
        @keyframes cl-bcfsco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-bcfsco-marquee-track{display:flex;gap:16px;width:max-content;animation:cl-bcfsco-scroll 32s linear infinite}
        .cl-bcfsco-chip{min-width:180px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-bcfsco-grid{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){
          .cl-bcfsco-sec{padding:70px 5%}
          .cl-bcfsco-grid{grid-template-columns:1fr 1fr}
          .cl-bcfsco-ach{grid-template-columns:1fr 1fr}
        }
      `}} />

      <section className="cl-bcfsco-sec" id="careers">
        <div className="cl-bcfsco-wrap">

          <div className="cl-bcfsco-head">
            <div className="cl-bcfsco-eyebrow"><span className="bar" />Career Outcomes</div>
            <h2 className="cl-bcfsco-h2">Where This BCA<br /><em>Can Take You</em></h2>
            <p className="cl-bcfsco-desc">
              Full stack developers are among the most in-demand roles across product, enterprise, and startup ecosystems — commanding roles from frontend to cloud.
            </p>
          </div>

          <div className="cl-bcfsco-grid">
            {CAREERS.map(c => (
              <div key={c.role} className="cl-bcfsco-item">
                {c.role}
                <span className="cl-bcfsco-range">{c.range}</span>
              </div>
            ))}
          </div>

          <div className="cl-bcfsco-ach">
            {ACH.map(a => (
              <div key={a.num} className="cl-bcfsco-ach-card" style={a.style}>
                <div className="cl-bcfsco-ach-num">{a.num}</div>
                <div className="cl-bcfsco-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                              
          <BtechStudents/>

          {/* <div className="cl-bcfsco-marquee-head">
            <h3>Where Graduates<br /><em>Could Be Recruited</em></h3>
            <p>Indicative hiring companies for full stack developer talent from Tulas Institute.</p>
          </div>
          <div className="cl-bcfsco-marquee-wrap">
            <div className="cl-bcfsco-marquee-track">
              {[...COMPANIES, ...COMPANIES].map((c, i) => (
                <div key={i} className="cl-bcfsco-chip">{c}</div>
              ))}
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
}
