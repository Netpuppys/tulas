'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',          desc:'Artificial intelligence and machine learning concepts woven into the Civil Engineering curriculum, preparing graduates for a digital construction industry.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',        desc:'Association bringing premier, nationally recognised certifications and academic credibility to your B.Tech degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',     desc:'Continuously updated to match real industry trends, tools, and practices — so what you learn is what employers need.' },
  { num:'04', title:'Industry Certifications',         desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications built into regular coursework — no extra cost or effort.' },
  { num:'05', title:'Internship Opportunities',        desc:'Multiple internship opportunities across the programme and a direct internship-to-placement pathway supported by TCCI.' },
  { num:'06', title:'Innovation & Research Culture',   desc:'A centre of excellence in teaching, research, and innovative civil engineering practices — encouraging students to push boundaries.' },
  { num:'07', title:'Project-Based Learning',          desc:'Learn by building — live projects, hackathons, and product development across all four years of the programme.' },
  { num:'08', title:'Emerging Technology Exposure',    desc:'BIM, AI-aided structural analysis, smart city sensors, and sustainable construction technologies integrated throughout the curriculum.' },
  { num:'09', title:'Placement Readiness Framework',  desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement.' },
];

export default function BTechCEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechcewhy-sec{background:#f8f9fc;padding:10px 7%}
        .cl-btechcewhy-wrap{max-width:1280px;margin:0 auto}

        .cl-btechcewhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechcewhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechcewhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechcewhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechcewhy-h2 em{font-style:normal;color:#DF5400}
        .cl-btechcewhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechcewhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-btechcewhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-btechcewhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-btechcewhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-btechcewhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-btechcewhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-btechcewhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechcewhy-sec{padding:70px 5%}.cl-btechcewhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechcewhy-sec" id="why-tulas">
        <div className="cl-btechcewhy-wrap">
          <div className="cl-btechcewhy-head">
            <div className="cl-btechcewhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-btechcewhy-h2">Why Study Civil Engineering<br/><em>At Tulas Institute</em></h2>
            <p className="cl-btechcewhy-sub">A programme engineered for the modern engineering profession — combining strong fundamentals, industry alignment, and hands-on practice.</p>
          </div>
          <div className="cl-btechcewhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-btechcewhy-card">
                <div className="cl-btechcewhy-num">{c.num}</div>
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
