'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',        desc:'Artificial intelligence and machine learning concepts woven into the ECE curriculum — from AI-assisted signal processing to embedded AI systems and intelligent communication.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',      desc:'Association bringing premier, nationally recognised certifications and academic credibility to your B.Tech ECE degree.' },
  { num:'03', title:'Industry-Aligned Curriculum',   desc:'Continuously updated to match real industry trends — 5G/6G networks, VLSI chip design, IoT, robotics, and embedded systems.' },
  { num:'04', title:'Industry Certifications',       desc:'Cisco CCNA, ARM Embedded, FPGA/VLSI, AWS, Microsoft, Google, NVIDIA, and Python certifications built into the programme.' },
  { num:'05', title:'Internship Opportunities',      desc:'Multiple paid internship opportunities across the programme and a direct internship-to-placement pathway supported by TCCI.' },
  { num:'06', title:'Innovation & Research Culture', desc:'A centre of excellence in ECE teaching, research, and innovation — encouraging students to push the boundaries of electronics and communication.' },
  { num:'07', title:'Project-Based Learning',        desc:'Learn by building — IoT systems, VLSI circuits, 5G prototypes, and robotics projects across all four years of the programme.' },
  { num:'08', title:'Emerging Technology Exposure',  desc:'Hands-on training with 5G/6G, embedded AI, VLSI design tools, robotics platforms, and AI-driven signal processing throughout the curriculum.' },
  { num:'09', title:'Placement Readiness Framework', desc:'Career development and corporate readiness powered by TCCI — resume building, mock interviews, and dedicated recruiter engagement for ECE roles.' },
];

export default function BTechECEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechecewhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btechecewhy-wrap{max-width:1280px;margin:0 auto}

        .cl-btechecewhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechecewhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechecewhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechecewhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechecewhy-h2 em{font-style:normal;color:#DF5400}
        .cl-btechecewhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechecewhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-btechecewhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-btechecewhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-btechecewhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-btechecewhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-btechecewhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-btechecewhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechecewhy-sec{padding:70px 5%}.cl-btechecewhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechecewhy-sec" id="why-tulas">
        <div className="cl-btechecewhy-wrap">
          <div className="cl-btechecewhy-head">
            <div className="cl-btechecewhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-btechecewhy-h2">Why Study Electronics &amp; Communication<br/><em>At Tulas Institute</em></h2>
            <p className="cl-btechecewhy-sub">A programme engineered for the modern ECE profession — combining strong fundamentals, industry alignment, and hands-on practice in the technologies shaping our connected world.</p>
          </div>
          <div className="cl-btechecewhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-btechecewhy-card">
                <div className="cl-btechecewhy-num">{c.num}</div>
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
