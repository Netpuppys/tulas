'use client';

const TECH_PILLS = [
  'ChatGPT','Gemini','Claude','Canva AI','Google Analytics',
  'Meta Business Suite','Google Ads','HubSpot CRM',
  'Mailchimp','Semrush','Ahrefs','Shopify',
];

const SEMESTERS = [
  { num: '01', title: 'Semester 1', desc: 'Business Fundamentals · Marketing Basics · Communication Skills · Digital Foundations' },
  { num: '02', title: 'Semester 2', desc: 'Consumer Behaviour · Branding · Social Media · Content Strategy' },
  { num: '03', title: 'Semester 3', desc: 'SEO · Performance Marketing · Google Ads · Website Fundamentals' },
  { num: '04', title: 'Semester 4', desc: 'Marketing Analytics · Influencer Marketing · AI Marketing Tools · Email Marketing' },
  { num: '05', title: 'Semester 5', desc: 'Growth Marketing · E-Commerce · Live Client Projects · Entrepreneurship' },
  { num: '06', title: 'Semester 6', desc: 'Industry Internship · Capstone Campaign · Startup Incubation · Portfolio Development' },
];

export default function BBADMCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmc-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-dmc-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-dmc-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        .cl-dmc-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-dmc-img{position:relative;border-radius:22px;overflow:hidden;height:460px;box-shadow:0 24px 60px rgba(0,0,0,.4)}
        .cl-dmc-img img{width:100%;height:100%;object-fit:cover;display:block}
        .cl-dmc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}

        .cl-dmc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-dmc-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-dmc-h2{margin-bottom:22px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);color:#fff}
        .cl-dmc-h2 em{font-style:normal;color:#FFF3D7}
        .cl-dmc-copy p{font-size:1.05rem;line-height:1.9;margin-bottom:20px;color:rgba(255,255,255,.82)}
        .cl-dmc-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-dmc-pill{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);transition:all .25s;cursor:default}
        .cl-dmc-pill:hover{background:rgba(223,84,0,.35);border-color:#DF5400}

        /* 6-semester roadmap in 3+3 grid */
        .cl-dmc-roadmap{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .cl-dmc-step{position:relative;padding:26px 24px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);text-align:center;transition:background .3s}
        .cl-dmc-step:hover{background:rgba(255,255,255,.1)}
        .cl-dmc-num{display:flex;align-items:center;justify-content:center;margin:0 auto 18px;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-dmc-step h4{font-size:1rem;font-weight:800;color:#fff;margin-bottom:10px}
        .cl-dmc-step p{font-size:.82rem;line-height:1.65;color:rgba(255,255,255,.7)}

        @media(max-width:968px){
          .cl-dmc-split{grid-template-columns:1fr;gap:40px}
          .cl-dmc-roadmap{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-dmc-sec{padding:70px 5%}
          .cl-dmc-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-dmc-sec" id="curriculum">
        <div className="cl-dmc-inner">

          <div className="cl-dmc-split">
            <div className="cl-dmc-img">
              <img src="/courses/bba/cauriculam.png" alt="AI-integrated digital marketing curriculum" />
            </div>
            <div className="cl-dmc-copy">
              <div className="cl-dmc-eyebrow"><span className="bar" />AI-Integrated Curriculum</div>
              <h2 className="cl-dmc-h2">AI Isn't Replacing<br /><em>Marketers. It's Empowering Them.</em></h2>
              <p>Today's marketers don't just create campaigns — they use AI to research markets, generate content, analyze customer behavior and optimize performance.</p>
              <p>At Tulas, AI is integrated throughout your learning journey so you graduate ready for the future of marketing.</p>
              <div className="cl-dmc-pills">
                {TECH_PILLS.map((p) => <span className="cl-dmc-pill" key={p}>{p}</span>)}
              </div>
            </div>
          </div>

          {/* 6-semester roadmap */}
          <div className="cl-dmc-roadmap">
            {SEMESTERS.map((s) => (
              <div className="cl-dmc-step" key={s.num}>
                <div className="cl-dmc-num">{s.num}</div>
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
