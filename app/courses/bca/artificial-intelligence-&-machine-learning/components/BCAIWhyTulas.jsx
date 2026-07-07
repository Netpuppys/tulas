'use client';

const WHY = [
  { n: '01', title: 'Ship Every Year',              desc: 'A deployed application every year, culminating in an AI-powered capstone product.' },
  { n: '02', title: 'IIT Kanpur E&ICT Academy',      desc: 'Three years of independent, competency-based certification covering the full programme.' },
  { n: '03', title: '9 Industry Certifications',    desc: 'NVIDIA, Google, GitHub, freeCodeCamp, and DeepLearning.AI — aligned to your coursework.' },
  { n: '04', title: 'Full Developer Stack',          desc: 'Python, JavaScript, React, databases, cloud, and AI tools — not a single narrow track.' },
  { n: '05', title: 'Three Minor Tracks',            desc: 'Full Stack Web Development, AI Tools & Applications, or Data Analytics.' },
  { n: '06', title: 'Freelancing Built In',          desc: 'Freelancing Fundamentals teaches you to find clients and price your own work.' },
  { n: '07', title: 'Placement-Test Ready',          desc: 'Dedicated Quantitative Aptitude preparation for TCS, Infosys, and Wipro campus tests.' },
  { n: '08', title: 'Life Skills & Digital Citizenship', desc: 'Financial literacy, developer wellness, and data privacy by design in Year 1.' },
  { n: '09', title: 'Industry-Panel Capstone',       desc: 'Present your Minor track\'s capstone project to a panel of industry practitioners.' },
];

export default function BCAIWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaiwhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-bcaiwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-bcaiwhy-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcaiwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcaiwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcaiwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,3.5rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcaiwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-bcaiwhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcaiwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-bcaiwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-bcaiwhy-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-bcaiwhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-bcaiwhy-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-bcaiwhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:900px){.cl-bcaiwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){
          .cl-bcaiwhy-sec{padding:70px 5%}
          .cl-bcaiwhy-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcaiwhy-sec" id="why-tulas">
        <div className="cl-bcaiwhy-wrap">

          <div className="cl-bcaiwhy-head">
            <div className="cl-bcaiwhy-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-bcaiwhy-h2">Why Study This BCA<br /><em>At Tulas Institute</em></h2>
            <p className="cl-bcaiwhy-desc">
              Engineered to make you a working developer by graduation — not just a computer science student.
            </p>
          </div>

          <div className="cl-bcaiwhy-grid">
            {WHY.map(w => (
              <div key={w.n} className="cl-bcaiwhy-card">
                <div className="cl-bcaiwhy-n">{w.n}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
