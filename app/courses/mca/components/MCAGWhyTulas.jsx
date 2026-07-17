'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and machine learning woven across the entire MCA curriculum — from foundations through to advanced specialisation.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier, nationally recognised certifications and academic credibility directly into your MCA degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real industry trends, modern tools, and practices — covering AI, cloud, cyber security, and DevOps.' },
  { num:'04', title:'Industry Certifications',       desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications built into regular coursework — at no extra cost or enrolment.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple internship opportunities across the programme and a direct internship-to-placement pathway supported by the TCCI team.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in teaching, research, and innovative computing practices — encouraging students to push technology boundaries.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — live projects, hackathons, product development, and an industry-sponsored capstone project across all four semesters.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'AI, cloud computing, cyber security, data science, DevOps, and full stack development integrated across three specialisation pathways.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement from day one.' },
];

export default function MCAGWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagwhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mcagwhy-wrap{max-width:1280px;margin:0 auto}

        .cl-mcagwhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mcagwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mcagwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mcagwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mcagwhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mcagwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mcagwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mcagwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-mcagwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-mcagwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-mcagwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-mcagwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-mcagwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcagwhy-sec{padding:70px 5%}.cl-mcagwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mcagwhy-sec" id="why-tulas">
        <div className="cl-mcagwhy-wrap">
          <div className="cl-mcagwhy-head">
            <div className="cl-mcagwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mcagwhy-h2">Why Study MCA<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mcagwhy-sub">A programme engineered for advanced computing careers — combining strong fundamentals, industry alignment, and a culture of innovation.</p>
          </div>
          <div className="cl-mcagwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mcagwhy-card">
                <div className="cl-mcagwhy-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
