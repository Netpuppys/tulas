'use client';

const CARDS = [
  { num:'01', title:'ICAR-Aligned Curriculum',    desc:'Built on Indian Council of Agricultural Research recommendations for national academic credibility and recognition.' },
  { num:'02', title:'On-Campus Agricultural Farm', desc:'Real hands-on understanding of the farming environment, with students actively managing the on-campus farm.' },
  { num:'03', title:'Broad-Based Curriculum',      desc:'Agronomy, soil science, horticulture, plant breeding, animal science, and more — all under one degree.' },
  { num:'04', title:'Recession-Proof Sector',      desc:'Agriculture is a field that never faces the layoffs other industries do — feeding the planet is never optional.' },
  { num:'05', title:'Industrial Training',         desc:'Placements with agribusiness, research, and agri-tech organisations for real-world exposure and career readiness.' },
  { num:'06', title:'Sustainability Focus',        desc:'Training in organic farming, precision agriculture, and sustainable crop production for a greener future.' },
  { num:'07', title:'Placement Readiness',         desc:'Dedicated placement support across the final year of the programme, connecting graduates with top recruiters.' },
  { num:'08', title:'Active Student Clubs',        desc:'A vibrant, multi-cultural teaching environment with student-run bodies and rich co-curricular activities.' },
  { num:'09', title:'Higher Studies Ready',        desc:'A strong foundation for M.Sc. Agriculture and specialised postgraduate study in allied agricultural sciences.' },
];

export default function BScAgWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagwhy-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-bscagwhy-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagwhy-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bscagwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bscagwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bscagwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bscagwhy-h2 em{font-style:normal;color:#DF5400;}
        .cl-bscagwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bscagwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-bscagwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-bscagwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-bscagwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-bscagwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-bscagwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-bscagwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bscagwhy-sec{padding:70px 5%}.cl-bscagwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bscagwhy-sec" id="why-tulas">
        <div className="cl-bscagwhy-wrap">
          <div className="cl-bscagwhy-head">
            <div className="cl-bscagwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-bscagwhy-h2">Why Study Agriculture<br/><em>At Tulas Institute</em></h2>
            <p className="cl-bscagwhy-sub">Practical, field-tested learning that prepares graduates for a sector that will never stop needing skilled hands.</p>
          </div>
          <div className="cl-bscagwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-bscagwhy-card">
                <div className="cl-bscagwhy-num">{c.num}</div>
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
