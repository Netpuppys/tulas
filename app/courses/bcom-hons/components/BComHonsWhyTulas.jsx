'use client';

const CARDS = [
  { num:'01', title:'UGC-Recognised Degree',       desc:'Affiliated with Sri Dev Suman Uttarakhand University, a state government university.' },
  { num:'02', title:'CA/CS Foundation-Ready',      desc:'A curriculum designed to give a head start toward professional accounting qualifications.' },
  { num:'03', title:'Industry Certifications',     desc:'Tally, GST, Advanced Excel, and NISM certifications aligned to coursework.' },
  { num:'04', title:'Two Pathways',                desc:'Choose between B.Com and B.Com (Hons.) to match your career goals.' },
  { num:'05', title:'Practical Skill-Building',    desc:'Accounting software labs, case studies, and industry visits throughout the programme.' },
  { num:'06', title:'Ethical Business Focus',      desc:'A curriculum promoting ethical and sustainable business practices.' },
  { num:'07', title:'Placement Readiness',         desc:'Dedicated placement support across the final year of the programme.' },
  { num:'08', title:'Global Business Awareness',   desc:'Preparing graduates for an interconnected global commercial environment.' },
  { num:'09', title:'Higher Studies Ready',        desc:'A strong foundation for M.Com, MBA, and professional accounting qualifications.' },
];

export default function BComHonsWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bcomh-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcomh-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bcomh-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcomh-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcomh-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bcomh-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcomh-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcomh-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-bcomh-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-bcomh-why-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-bcomh-why-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-bcomh-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-bcomh-why-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-bcomh-why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-bcomh-why-sec{padding:70px 5%}.cl-bcomh-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bcomh-why-sec" id="why-tulas">
        <div className="cl-bcomh-why-wrap">
          <div className="cl-bcomh-why-head">
            <div className="cl-bcomh-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-bcomh-why-h2">Why Study B.Com<br/><em>At Tulas Institute</em></h2>
            <p className="cl-bcomh-why-sub">A commerce degree engineered for real career outcomes — professional exams, corporate roles, or entrepreneurship.</p>
          </div>
          <div className="cl-bcomh-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-bcomh-why-card">
                <div className="cl-bcomh-why-num">{c.num}</div>
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
