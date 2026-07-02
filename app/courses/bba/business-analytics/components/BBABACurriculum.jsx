'use client';

const TECH_PILLS = [
  'ChatGPT','Gemini','Claude','Microsoft Copilot',
  'Power BI','Tableau','Microsoft Excel','SQL',
  'Google Looker Studio','Python (Business Analytics)',
  'AI Analytics Platforms','Business Intelligence Tools',
];

const SEMESTERS = [
  { num: '01', title: 'Semester 1', desc: 'Business Fundamentals · Statistics · Communication Skills · Digital Foundations' },
  { num: '02', title: 'Semester 2', desc: 'Business Analytics · Data Visualization · Excel · Business Intelligence' },
  { num: '03', title: 'Semester 3', desc: 'SQL · Dashboard Development · Financial Analytics · AI for Business' },
  { num: '04', title: 'Semester 4', desc: 'Predictive Analytics · Tableau · Power BI · Business Consulting Projects' },
  { num: '05', title: 'Semester 5', desc: 'Marketing Analytics · Operations Analytics · Live Industry Projects · Entrepreneurship' },
  { num: '06', title: 'Semester 6', desc: 'Industry Internship · Business Analytics Capstone · Portfolio Development' },
];

export default function BBABACurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bac-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-bac-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-bac-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        .cl-bac-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-bac-img{position:relative;border-radius:22px;overflow:hidden;height:460px;box-shadow:0 24px 60px rgba(0,0,0,.4)}
        .cl-bac-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-bac-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}

        .cl-bac-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-bac-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-bac-h2{margin-bottom:22px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);color:#fff}
        .cl-bac-h2 em{font-style:normal;color:#FFF3D7}
        .cl-bac-copy p{font-size:1.05rem;line-height:1.9;margin-bottom:20px;color:rgba(255,255,255,.82)}
        .cl-bac-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-bac-pill{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);transition:all .25s;cursor:default}
        .cl-bac-pill:hover{background:rgba(223,84,0,.35);border-color:#DF5400}

        .cl-bac-roadmap{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .cl-bac-step{position:relative;padding:26px 24px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);text-align:center;transition:background .3s}
        .cl-bac-step:hover{background:rgba(255,255,255,.1)}
        .cl-bac-num{display:flex;align-items:center;justify-content:center;margin:0 auto 18px;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-bac-step h4{font-size:1rem;font-weight:800;color:#fff;margin-bottom:10px}
        .cl-bac-step p{font-size:.82rem;line-height:1.65;color:rgba(255,255,255,.7)}

        @media(max-width:968px){
          .cl-bac-split{grid-template-columns:1fr;gap:40px}
          .cl-bac-roadmap{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-bac-sec{padding:70px 5%}
          .cl-bac-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bac-sec" id="curriculum">
        <div className="cl-bac-inner">

          <div className="cl-bac-split">
            <div className="cl-bac-img">
              <img src="/graduate-school-of-business-v2/mba/specialdesktop.jpg" alt="AI-integrated business analytics curriculum" />
            </div>
            <div className="cl-bac-copy">
              <div className="cl-bac-eyebrow"><span className="bar" />AI-Integrated Curriculum</div>
              <h2 className="cl-bac-h2">AI Doesn't Replace<br /><em>Business Decisions. It Improves Them.</em></h2>
              <p>Modern businesses rely on AI and analytics to understand customers, predict trends, and make faster decisions.</p>
              <p>At Tulas, AI is integrated throughout your learning journey so you graduate ready to solve business challenges using intelligent technologies.</p>
              <div className="cl-bac-pills">
                {TECH_PILLS.map((p) => <span className="cl-bac-pill" key={p}>{p}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-bac-roadmap">
            {SEMESTERS.map((s) => (
              <div className="cl-bac-step" key={s.num}>
                <div className="cl-bac-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
