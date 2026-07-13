'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',         desc:'Artificial intelligence and machine learning concepts woven into the Mechanical Engineering curriculum — from AI-aided design to predictive maintenance.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',       desc:'Association bringing premier, nationally recognised certifications and academic credibility to your B.Tech degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',    desc:'Continuously updated to match real industry trends — robotics, energy engineering, digital manufacturing, and smart industrial systems.' },
  { num:'04', title:'Industry Certifications',        desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications built into regular coursework — preparing graduates for a digital-first industry.' },
  { num:'05', title:'Internship Opportunities',       desc:'Multiple internship opportunities across the programme and a direct internship-to-placement pathway supported by TCCI.' },
  { num:'06', title:'Innovation & Research Culture',  desc:'A centre of excellence in teaching, research, and innovative mechanical engineering practices — encouraging students to push engineering boundaries.' },
  { num:'07', title:'Project-Based Learning',         desc:'Learn by building — live projects, hackathons, and product development across all four years of the programme.' },
  { num:'08', title:'Emerging Technology Exposure',   desc:'Robotics, automation, digital twins, AI-assisted CAD/CAM, and renewable energy systems integrated throughout the curriculum.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement.' },
];

export default function BTechMEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmewhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btechmewhy-wrap{max-width:1280px;margin:0 auto}

        .cl-btechmewhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechmewhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechmewhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechmewhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechmewhy-h2 em{font-style:normal;color:#DF5400}
        .cl-btechmewhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechmewhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-btechmewhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-btechmewhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-btechmewhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-btechmewhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-btechmewhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-btechmewhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechmewhy-sec{padding:70px 5%}.cl-btechmewhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechmewhy-sec" id="why-tulas">
        <div className="cl-btechmewhy-wrap">
          <div className="cl-btechmewhy-head">
            <div className="cl-btechmewhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-btechmewhy-h2">Why Study Mechanical Engineering<br/><em>At Tulas Institute</em></h2>
            <p className="cl-btechmewhy-sub">A programme engineered for the modern engineering profession — combining strong fundamentals, industry alignment, and hands-on practice.</p>
          </div>
          <div className="cl-btechmewhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-btechmewhy-card">
                <div className="cl-btechmewhy-num">{c.num}</div>
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
