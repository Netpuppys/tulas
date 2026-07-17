'use client';

const CARDS = [
  { num:'01', title:'Advanced Computing Curriculum',  desc:'A structured 4-semester PG programme that builds deep computing expertise across OS, data structures, networks, and AI alongside full stack specialisation.' },
  { num:'02', title:'IIT Kanpur E&ICT Academy',       desc:'Association bringing premier, nationally recognised certifications and academic credibility directly into your MCA degree — at no extra cost.' },
  { num:'03', title:'Industry-Integrated Learning',   desc:'Live projects, hackathons, expert talks, and industry mentorship embedded across every semester — not offered as optional extras.' },
  { num:'04', title:'Five Elective Tracks',           desc:'Real specialisation choice across Full Stack Architecture, Cloud-Native, Backend Engineering, DevOps, Cyber Security, and AI-Integrated tracks.' },
  { num:'05', title:'Industry-Sponsored Capstone',    desc:'The final semester major project is co-designed and evaluated with an industry partner — real brief, real standards, real portfolio impact.' },
  { num:'06', title:'Research & Innovation Focus',    desc:'Research Methodology, Seminar, and Innovation & Entrepreneurship subjects cultivate academic depth and entrepreneurial thinking.' },
  { num:'07', title:'Cloud-Native & AI Integration',  desc:'Dedicated elective tracks for cloud-native development and AI-integrated full stack — skills defining the next decade of software engineering.' },
  { num:'08', title:'Expert Faculty & Mentors',       desc:'A faculty team combining academic rigour with industry experience, supported by visiting professionals and active industry mentors.' },
  { num:'09', title:'Placement Readiness Framework',  desc:'750+ industry recruiter network, structured placement training, mock interviews, and career services available from day one.' },
];

export default function MCAFSWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafswhy-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mcafswhy-wrap{max-width:1280px;margin:0 auto}

        .cl-mcafswhy-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mcafswhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mcafswhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mcafswhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mcafswhy-h2 em{font-style:normal;color:#DF5400}
        .cl-mcafswhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mcafswhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .cl-mcafswhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent}
        .cl-mcafswhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C}
        .cl-mcafswhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px}
        .cl-mcafswhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3}
        .cl-mcafswhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0}

        @media(max-width:960px){.cl-mcafswhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcafswhy-sec{padding:70px 5%}.cl-mcafswhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mcafswhy-sec" id="why-tulas">
        <div className="cl-mcafswhy-wrap">
          <div className="cl-mcafswhy-head">
            <div className="cl-mcafswhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mcafswhy-h2">Why Study MCA Full Stack<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mcafswhy-sub">A programme engineered for the modern technology profession — combining strong computing fundamentals, industry alignment, and hands-on practice.</p>
          </div>
          <div className="cl-mcafswhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mcafswhy-card">
                <div className="cl-mcafswhy-num">{c.num}</div>
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
