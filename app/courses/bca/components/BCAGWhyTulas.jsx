'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and machine learning woven across the entire BCA curriculum — from foundations through to advanced specialisation.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier, nationally recognised certifications and academic credibility directly into your BCA degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real industry trends, modern tools, and practices — covering AI, cloud, cyber security, and full stack development.' },
  { num:'04', title:'Industry Certifications',       desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications built into regular coursework — at no extra cost or enrolment.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple internship opportunities across the programme and a direct internship-to-placement pathway supported by the TCCI team.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in teaching, research, and innovative computing practices — encouraging students to push technology boundaries.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — live projects, hackathons, product development, and a capstone project across all three years.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'AI, cloud computing, cyber security, data science, DevOps, and full stack development integrated across three specialisation pathways.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement from day one.' },
];

export default function BCAGWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagwhy-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bcagwhy-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcagwhy-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bcagwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcagwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcagwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bcagwhy-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcagwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcagwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-bcagwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-bcagwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-bcagwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-bcagwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-bcagwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-bcagwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bcagwhy-sec{padding:70px 5%}.cl-bcagwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bcagwhy-sec" id="why-tulas">
        <div className="cl-bcagwhy-wrap">
          <div className="cl-bcagwhy-head">
            <div className="cl-bcagwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-bcagwhy-h2">Why Study BCA<br/><em>At Tulas Institute</em></h2>
            <p className="cl-bcagwhy-sub">A programme engineered for computing careers from day one — combining strong fundamentals, industry alignment, and a culture of innovation.</p>
          </div>
          <div className="cl-bcagwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-bcagwhy-card">
                <div className="cl-bcagwhy-num">{c.num}</div>
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
