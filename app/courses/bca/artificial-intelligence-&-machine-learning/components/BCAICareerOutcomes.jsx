'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const CAREERS = [
  { role: 'Web Developer',            range: '₹3–7 LPA' },
  { role: 'Full Stack Developer',     range: '₹4–8 LPA' },
  { role: 'AI Application Developer', range: '₹4–8 LPA' },
  { role: 'Frontend Developer',       range: '₹3–7 LPA' },
  { role: 'Junior Data Analyst',      range: '₹3–6 LPA' },
  { role: 'Freelance Developer',      range: 'Varies' },
  { role: 'Developer / Startup Founder', range: 'Varies' },
];

const ACH = [
  { num: '2+',   lbl: 'Live Deployed Apps at Graduation', style: { background: 'linear-gradient(135deg,#DF5400 0%,#c44900 100%)' } },
  { num: '9',    lbl: 'Industry Certifications',          style: { background: '#001F4C' } },
  { num: '3',    lbl: 'Minor Specialisation Tracks',      style: { background: '#001F4C' } },
  { num: '2029', lbl: 'First Graduating Batch',           style: { background: '#001F4C' } },
];

const SECTORS = [
  'Software Product Companies', 'IT Services', 'Startups', 'Freelance & Gig Platforms',
  'EdTech', 'FinTech', 'Cloud & SaaS Firms', 'Data & Analytics Firms',
];

export default function BCAICareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaico-sec{padding:110px 7%;background:#fff}
        .cl-bcaico-wrap{max-width:1280px;margin:0 auto}

        .cl-bcaico-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcaico-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaico-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaico-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaico-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaico-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcaico-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px}
        .cl-bcaico-item{border-radius:14px;padding:20px 14px;text-align:center;font-weight:700;font-size:.86rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C}
        .cl-bcaico-range{display:block;margin-top:6px;font-size:.76rem;font-weight:800;color:#DF5400}

        .cl-bcaico-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:80px}
        .cl-bcaico-ach-card{border-radius:18px;padding:34px 24px;text-align:center}
        .cl-bcaico-ach-num{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;line-height:1;margin-bottom:8px;color:#fff}
        .cl-bcaico-ach-lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.85)}

        .cl-bcaico-marquee-head{text-align:center;margin-bottom:10px}
        .cl-bcaico-marquee-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:10px}
        .cl-bcaico-marquee-head h3 em{font-style:normal;color:#DF5400}
        .cl-bcaico-marquee-head p{color:#5a6a8a;font-weight:300;margin-bottom:32px;font-size:1rem}
        .cl-bcaico-marquee-wrap{overflow:hidden;margin:20px 0}
        @keyframes cl-bcaico-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-bcaico-marquee-track{display:flex;gap:16px;width:max-content;animation:cl-bcaico-scroll 32s linear infinite}
        .cl-bcaico-chip{min-width:200px;height:78px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}
        .cl-bcaico-disclaimer{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:6px}

        @media(max-width:900px){.cl-bcaico-grid{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){
          .cl-bcaico-sec{padding:70px 5%}
          .cl-bcaico-grid{grid-template-columns:1fr 1fr}
          .cl-bcaico-ach{grid-template-columns:1fr 1fr}
        }
      `}} />

      <section className="cl-bcaico-sec" id="careers">
        <div className="cl-bcaico-wrap">

          <div className="cl-bcaico-head">
            <div className="cl-bcaico-eyebrow"><span className="bar" />Career Outcomes</div>
            <h2 className="cl-bcaico-h2">Where This BCA<br /><em>Can Take You</em></h2>
            <p className="cl-bcaico-desc">
              A portfolio of live deployed applications, freelancing skills, and placement preparation — this is what supports placement.
            </p>
          </div>

          <div className="cl-bcaico-grid">
            {CAREERS.map(c => (
              <div key={c.role} className="cl-bcaico-item">
                {c.role}
                <span className="cl-bcaico-range">{c.range}</span>
              </div>
            ))}
          </div>

          <div className="cl-bcaico-ach">
            {ACH.map(a => (
              <div key={a.num} className="cl-bcaico-ach-card" style={a.style}>
                <div className="cl-bcaico-ach-num">{a.num}</div>
                <div className="cl-bcaico-ach-lbl">{a.lbl}</div>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                    
                            <BtechStudents/>

          {/* <div className="cl-bcaico-marquee-head">
            <h3>Where Graduates<br /><em>Could Be Recruited</em></h3>
            <p>Indicative hiring sectors for developer and AI-application talent.</p>
          </div>
          <div className="cl-bcaico-marquee-wrap">
            <div className="cl-bcaico-marquee-track">
              {[...SECTORS, ...SECTORS].map((s, i) => (
                <div key={i} className="cl-bcaico-chip">{s}</div>
              ))}
            </div>
          </div>
          <p className="cl-bcaico-disclaimer">Indicative sectors, not confirmed recruiter commitments.</p> */}

        </div>
      </section>
    </>
  );
}
