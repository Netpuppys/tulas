'use client';

const CARDS = [
  { num:'01', title:'AI-Integrated Learning',          desc:'Curriculum that weaves Artificial Intelligence and Machine Learning into every year of study.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',        desc:'National credibility through certifications backed by IIT Kanpur\'s Electronics & ICT Academy.' },
  { num:'03', title:'Industry-Aligned Curriculum',     desc:'A syllabus designed in collaboration with IT industry partners to match real-world skill demands.' },
  { num:'04', title:'Industry Certifications',         desc:'AWS, Microsoft, Google, NVIDIA, Oracle, and Python certifications integrated into the programme.' },
  { num:'05', title:'Internship Opportunities',        desc:'Structured industry exposure and internships throughout the diploma to build professional experience.' },
  { num:'06', title:'Innovation & Research Culture',   desc:'Hackathons, coding challenges, and research projects fostering a culture of continuous innovation.' },
  { num:'07', title:'Project-Based Learning',          desc:'Capstone and live projects that put theoretical knowledge into real software and hardware solutions.' },
  { num:'08', title:'Emerging Technology Exposure',    desc:'Hands-on training in Blockchain, AR/VR, Quantum Computing, Big Data, and the Internet of Things.' },
  { num:'09', title:'Placement Readiness Framework',   desc:'Dedicated placement support across the final year, connecting students with 750+ recruiters.' },
];

export default function DiplomaCsEWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-dipcse-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-dipcse-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-dipcse-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-dipcse-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-dipcse-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-dipcse-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-dipcse-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-dipcse-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-dipcse-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-dipcse-why-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-dipcse-why-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-dipcse-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-dipcse-why-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-dipcse-why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-dipcse-why-sec{padding:70px 5%}.cl-dipcse-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-dipcse-why-sec" id="why-tulas">
        <div className="cl-dipcse-why-wrap">
          <div className="cl-dipcse-why-head">
            <div className="cl-dipcse-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-dipcse-why-h2">Why Study CSE<br/><em>At Tulas Institute</em></h2>
            <p className="cl-dipcse-why-sub">A programme engineered for the AI era — combining industry certifications, IIT Kanpur association, and project-based learning for real career outcomes.</p>
          </div>
          <div className="cl-dipcse-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-dipcse-why-card">
                <div className="cl-dipcse-why-num">{c.num}</div>
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
