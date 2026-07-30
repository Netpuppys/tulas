'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and automation concepts woven into the mechanical engineering diploma curriculum.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier certifications and academic credibility to your diploma.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real manufacturing, automotive, and engineering industry trends.' },
  { num:'04', title:'Industry Certifications',       desc:'AWS, Microsoft, Google, NVIDIA, Oracle and Python certifications built in.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple internships and a direct internship-to-placement pathway with manufacturing partners.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in teaching, research and innovative engineering practices.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — live projects, CNC workshops, and product development exercises.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'Mechatronics, renewable energy systems, and industrial automation technologies.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI.' },
];

export default function DiplomaMechanicalWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipme-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipme-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipme-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-dipme-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipme-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipme-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-dipme-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipme-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-dipme-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-dipme-why-card{background:#fff;border-radius:16px;padding:26px;box-shadow:0 8px 24px rgba(0,31,76,.06);}
        .cl-dipme-why-card .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;margin-bottom:12px;line-height:1;}
        .cl-dipme-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:8px;}
        .cl-dipme-why-card p{font-size:.9rem;line-height:1.7;color:#5a6a8a;}

        @media(max-width:900px){.cl-dipme-why-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-dipme-why-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipme-why-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-dipme-why-sec" id="why-tulas">
        <div className="cl-dipme-why-wrap">
          <div className="cl-dipme-why-head">
            <div className="cl-dipme-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-dipme-why-h2">Why Study Mechanical Engineering<br/><em>At Tulas Institute</em></h2>
            <p className="cl-dipme-why-sub">A programme engineered for real manufacturing careers — combining strong fundamentals, industry alignment, and hands-on practice.</p>
          </div>
          <div className="cl-dipme-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-dipme-why-card">
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
