'use client';

const WHY = [
  { n:'01', title:'IIT Kanpur E&ICT Academy',       desc:'Three-year academic collaboration delivering competency-based certifications and advanced curriculum in system design and AI-integrated web development.' },
  { n:'02', title:'4 Full Stack Tracks',             desc:'MERN, Django+React, Spring Boot+React, and Laravel+React — you do not choose one track; you learn all four.' },
  { n:'03', title:'6 Live Projects',                 desc:'A live deployed web application every year — from your first React page to a cloud-hosted, AI-powered capstone product.' },
  { n:'04', title:'8 Industry Certifications',       desc:'MongoDB, GitHub, Meta, AWS/Google Cloud, Docker/Postman, and three IIT Kanpur certificates — all integrated into coursework.' },
  { n:'05', title:'Cloud & DevOps from Year 3',      desc:'Docker, CI/CD pipelines, AWS/GCP deployment, and Kubernetes introduced in Semesters V–VI with hands-on lab projects.' },
  { n:'06', title:'AI-Integrated Curriculum',        desc:'Every backend course in Semesters V–VI includes AI feature labs — chatbots, recommendation engines, and intelligent APIs.' },
  { n:'07', title:'Industry-Panel Capstone',         desc:'Present your Year 4 capstone to a panel of industry practitioners from companies like Amazon, Microsoft, and Oracle.' },
  { n:'08', title:'Startup Incubation at Tulas i-Hub', desc:'Access innovation labs, seed funding networks, patent support, and mentored entrepreneurship through Tulas Institute\'s incubation ecosystem.' },
  { n:'09', title:'MCA & PhD Pathway Ready',         desc:'Dedicated GATE preparation, research methodology, and mentored higher education guidance for graduates aiming for MCA, M.Tech, or PhD.' },
];

export default function BCFSWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfswhy-sec{padding:110px 7%;background:#f8f9fc}
        .cl-bcfswhy-wrap{max-width:1280px;margin:0 auto}

        .cl-bcfswhy-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-bcfswhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-bcfswhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-bcfswhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-bcfswhy-h2 em{font-style:normal;color:#DF5400}
        .cl-bcfswhy-desc{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-bcfswhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-bcfswhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s}
        .cl-bcfswhy-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-bcfswhy-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#DF5400;margin-bottom:14px;line-height:1}
        .cl-bcfswhy-card h3{font-weight:800;font-size:1.15rem;color:#001F4C;margin-bottom:10px}
        .cl-bcfswhy-card p{font-size:.92rem;line-height:1.75;color:#5a6a8a}

        @media(max-width:900px){.cl-bcfswhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){
          .cl-bcfswhy-sec{padding:70px 5%}
          .cl-bcfswhy-grid{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-bcfswhy-sec" id="why-tulas">
        <div className="cl-bcfswhy-wrap">

          <div className="cl-bcfswhy-head">
            <div className="cl-bcfswhy-eyebrow"><span className="bar" />The Tulas Advantage</div>
            <h2 className="cl-bcfswhy-h2">Why Study This BCA<br /><em>At Tulas Institute</em></h2>
            <p className="cl-bcfswhy-desc">
              Engineered to make you a working full stack developer by graduation — not just a computer science student.
            </p>
          </div>

          <div className="cl-bcfswhy-grid">
            {WHY.map(w => (
              <div key={w.n} className="cl-bcfswhy-card">
                <div className="cl-bcfswhy-n">{w.n}</div>
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
