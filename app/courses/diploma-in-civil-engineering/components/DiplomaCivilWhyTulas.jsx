'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and machine learning concepts woven into the diploma curriculum.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier certifications and academic credibility to your diploma.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real construction industry trends and tools.' },
  { num:'04', title:'Industry Certifications',       desc:'AWS, Microsoft, Google, NVIDIA, Oracle and Python certifications built in.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple internships and a direct internship-to-placement pathway.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in teaching, research and innovative construction practices.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — live projects, site visits, and product development.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'Smart infrastructure, BIM, and sustainable construction technologies.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI.' },
];

export default function DiplomaCivilWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipce-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipce-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipce-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-dipce-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipce-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipce-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-dipce-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipce-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-dipce-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-dipce-why-card{background:#fff;border-radius:16px;padding:26px;box-shadow:0 8px 24px rgba(0,31,76,.06);}
        .cl-dipce-why-card .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;margin-bottom:12px;line-height:1;}
        .cl-dipce-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:8px;}
        .cl-dipce-why-card p{font-size:.9rem;line-height:1.7;color:#5a6a8a;}

        @media(max-width:900px){.cl-dipce-why-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-dipce-why-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipce-why-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipce-why-sec" id="why-tulas">
        <div className="cl-dipce-why-wrap">
          <div className="cl-dipce-why-head">
            <div className="cl-dipce-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-dipce-why-h2">Why Study Civil Engineering<br/><em>At Tulas Institute</em></h2>
            <p className="cl-dipce-why-sub">A programme engineered for real construction careers — combining strong fundamentals, industry alignment, and hands-on practice.</p>
          </div>
          <div className="cl-dipce-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-dipce-why-card">
                <div className="n">{c.num}</div>
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
