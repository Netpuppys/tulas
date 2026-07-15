'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and machine learning concepts woven into the EEE curriculum — from AI-assisted power monitoring to intelligent energy systems and smart grid analytics.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier, nationally recognised certifications and academic credibility to your B.Tech EEE degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real industry trends — smart grids, electric vehicles, renewable energy, industrial automation, and IoT-enabled power systems.' },
  { num:'04', title:'Industry Certifications',       desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications built into the programme — alongside Siemens Automation and PLC/SCADA credentials.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple internship opportunities across the programme and a direct internship-to-placement pathway supported by TCCI.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in EEE teaching, research, and innovation — encouraging students to develop sustainable engineering solutions.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — live projects, hackathons, and product development across power systems, EVs, and renewable energy throughout all four years.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'Smart grids, electric vehicles, renewable energy integration, industrial automation, and IoT-enabled power monitoring embedded throughout the curriculum.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement for EEE roles.' },
];

export default function BTechEEEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btecheeewhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btecheeewhy-wrap{max-width:1280px;margin:0 auto}

        .cl-btecheeewhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btecheeewhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btecheeewhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btecheeewhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btecheeewhy-h2 em{font-style:normal;color:#DF5400}
        .cl-btecheeewhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btecheeewhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-btecheeewhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-btecheeewhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-btecheeewhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-btecheeewhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-btecheeewhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-btecheeewhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btecheeewhy-sec{padding:70px 5%}.cl-btecheeewhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btecheeewhy-sec" id="why-tulas">
        <div className="cl-btecheeewhy-wrap">
          <div className="cl-btecheeewhy-head">
            <div className="cl-btecheeewhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-btecheeewhy-h2">Why Study Electrical &amp; Electronics Engineering<br/><em>At Tulas Institute</em></h2>
            <p className="cl-btecheeewhy-sub">A programme engineered for the modern engineering profession — combining strong fundamentals, industry alignment, and hands-on practice in sustainable energy technologies.</p>
          </div>
          <div className="cl-btecheeewhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-btecheeewhy-card">
                <div className="cl-btecheeewhy-num">{c.num}</div>
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
