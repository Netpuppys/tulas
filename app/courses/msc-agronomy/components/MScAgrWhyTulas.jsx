'use client';

const CARDS = [
  { num:'01', title:'Research-Driven Curriculum',      desc:'Built around laboratory work, field trials, and independent research projects that sharpen analytical thinking and scientific rigour.' },
  { num:'02', title:'Interdisciplinary Approach',      desc:'Environmental science, biotechnology, and agricultural economics woven into every aspect of the programme for a holistic understanding.' },
  { num:'03', title:'Field-Based Application',         desc:'Academic depth paired directly with hands-on field practice — from crop physiology trials to water resource management experiments.' },
  { num:'04', title:'Climate-Resilient Focus',         desc:'Dedicated training in sustainable, climate-resilient agricultural practices and precision agronomy technologies for the future of farming.' },
  { num:'05', title:'Industry & Research Internships', desc:'Structured exposure to agricultural organisations, research institutes, and agri-business firms across government and private sectors.' },
  { num:'06', title:'Rural Engagement',                desc:'Extension activities and community workshops connecting students directly to real farming communities and ground-level agricultural challenges.' },
  { num:'07', title:'Placement Readiness',             desc:'Dedicated placement support across the programme with access to 750+ recruiters spanning agriculture, research, and agribusiness sectors.' },
  { num:'08', title:'Higher Studies Ready',            desc:'A strong research foundation preparing graduates for Ph.D. programmes and advanced agricultural research careers at national institutes.' },
  { num:'09', title:'Multi-Sector Careers',            desc:'Clear pathways into agriculture, research, agribusiness, government services, and allied sectors — opening doors across the full agri ecosystem.' },
];

export default function MScAgrWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagrwhy-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mscagrwhy-wrap{max-width:1280px;margin:0 auto;}

        .cl-mscagrwhy-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mscagrwhy-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mscagrwhy-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mscagrwhy-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mscagrwhy-h2 em{font-style:normal;color:#DF5400;}
        .cl-mscagrwhy-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mscagrwhy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-mscagrwhy-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-mscagrwhy-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-mscagrwhy-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-mscagrwhy-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-mscagrwhy-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-mscagrwhy-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mscagrwhy-sec{padding:70px 5%}.cl-mscagrwhy-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mscagrwhy-sec" id="why-tulas">
        <div className="cl-mscagrwhy-wrap">
          <div className="cl-mscagrwhy-head">
            <div className="cl-mscagrwhy-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mscagrwhy-h2">Why Study M.Sc. Agronomy<br/><em>At Tulas Institute</em></h2>
            <p className="cl-mscagrwhy-sub">A research-driven, field-tested postgraduate programme designed to produce the next generation of agricultural scientists and industry leaders.</p>
          </div>
          <div className="cl-mscagrwhy-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mscagrwhy-card">
                <div className="cl-mscagrwhy-num">{c.num}</div>
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
