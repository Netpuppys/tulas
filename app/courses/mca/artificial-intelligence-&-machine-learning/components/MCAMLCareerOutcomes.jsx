'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
  'Generative AI Engineer',
  'LLM Engineer',
  'AI Solutions Architect',
  'NLP Engineer',
  'Computer Vision Engineer',
  'Research Scientist',
  'MLOps Engineer',
  'AI Product Engineer',
  'AI Consultant',
];

const ACHIEVEMENTS = [
  { num: '₹60 LPA', lbl: 'Highest Package',     variant: 'orange' },
  { num: '100%',    lbl: 'Placement Assistance', variant: 'navy'   },
  { num: '500+',    lbl: 'Recruiters',            variant: 'navy'   },
  { num: '1000+',   lbl: 'Internships',           variant: 'navy'   },
];

const RECRUITERS = [
  'Amazon Web Services','Google','Microsoft','IBM','Infosys',
  'TCS','Wipro','Accenture','Cognizant','Deloitte',
  'KPMG','EY','Intel','HSBC','McKinsey & Company',
  'Meta','Salesforce','Oracle','Adobe','NVIDIA',
];

export default function MCAMLCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mmlco-sec{padding:90px 4% 70px;background:#fff}
        .cl-mmlco-wrap{max-width:1280px;margin:0 auto}

        .cl-mmlco-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-mmlco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mmlco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mmlco-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-mmlco-h2 em{font-style:normal;color:#DF5400}
        .cl-mmlco-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mmlco-roles{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:70px}
        .cl-mmlco-chip{border-radius:14px;padding:20px 16px;text-align:center;font-weight:700;font-size:.88rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .3s;cursor:default}
        .cl-mmlco-chip:hover{border-color:#DF5400;color:#DF5400;transform:translateY(-3px);box-shadow:0 10px 24px rgba(0,31,76,.08)}

        .cl-mmlco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px}
        .cl-mmlco-ach-card{border-radius:18px;padding:34px 24px;text-align:center;transition:transform .35s;cursor:default}
        .cl-mmlco-ach-card:hover{transform:translateY(-4px)}
        .cl-mmlco-ach-card .num{display:block;margin-bottom:8px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:2.8rem}
        .cl-mmlco-ach-card .lbl{font-size:.84rem;font-weight:600;color:rgba(255,255,255,.8)}
        .cl-mmlco-orange{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mmlco-orange .num{color:#fff}
        .cl-mmlco-navy{background:#001F4C}
        .cl-mmlco-navy .num{color:#FFF3D7}

        .cl-mmlco-rec{width:100%;padding-top:40px;overflow:hidden}
        .cl-mmlco-rec h2{text-align:center;margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-mmlco-rec h2 em{font-style:normal;color:#DF5400}
        .cl-mmlco-rec-sub{text-align:center;font-weight:400;color:#5a6a8a;margin-bottom:32px}
        .cl-mmlco-marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
        .cl-mmlco-track{display:flex;gap:16px;width:max-content;animation:cl-mmlco-scroll 50s linear infinite}
        @keyframes cl-mmlco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mmlco-pill{min-width:170px;height:90px;background:#fff;border:1px solid #d8dce6;border-radius:14px;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 18px;font-weight:800;font-size:.88rem;color:#001F4C;box-shadow:0 6px 18px rgba(0,31,76,.06)}

        @media(max-width:1200px){
          .cl-mmlco-roles{grid-template-columns:repeat(3,1fr)}
          .cl-mmlco-ach{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-mmlco-sec{padding:70px 5%}
          .cl-mmlco-roles{grid-template-columns:repeat(2,1fr)}
          .cl-mmlco-ach{grid-template-columns:repeat(2,1fr)}
        }
      `}} />

      <section className="cl-mmlco-sec" id="careers">
        <div className="cl-mmlco-wrap">

          <div className="cl-mmlco-head">
            <div className="cl-mmlco-eyebrow"><span className="bar" />Career Outcomes</div>
            <h2 className="cl-mmlco-h2">Where MCA in AI &amp; ML<br /><em>Can Take You</em></h2>
            <p>From AI research labs to enterprise product teams — graduates build intelligent systems that shape how the world works.</p>
          </div>

          <div className="cl-mmlco-roles">
            {ROLES.map(r => <div className="cl-mmlco-chip" key={r}>{r}</div>)}
          </div>

          <div className="cl-mmlco-ach">
            {ACHIEVEMENTS.map(a => (
              <div key={a.num} className={`cl-mmlco-ach-card cl-mmlco-${a.variant}`}>
                <span className="num">{a.num}</span>
                <span className="lbl">{a.lbl}</span>
              </div>
            ))}
          </div>

                  <HiringPartnerBtech/>
          
                  <BtechStudents/>
          

          {/* <div className="cl-mmlco-rec">
            <h2>Our Graduates Work At<br /><em>Leading Organizations</em></h2>
            <p className="cl-mmlco-rec-sub">Trusted by leading AI companies, tech giants and research organizations worldwide.</p>
            <div className="cl-mmlco-marquee">
              <div className="cl-mmlco-track">
                {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
                  <span className="cl-mmlco-pill" key={i}>{r}</span>
                ))}
              </div>
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
}
