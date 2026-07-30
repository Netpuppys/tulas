'use client';

const CARDS = [
  { num:'01', title:'Future-Ready Curriculum',          desc:'Advanced Thermodynamics, CFD, Renewable Energy, Combustion, HVAC, and Hydrogen Technologies built into every semester.' },
  { num:'02', title:'Digital Engineering & Simulation', desc:'ANSYS, Siemens STAR-CCM+, MATLAB & Simulink, Python, and Digital Twin technologies for real-world thermal problem-solving.' },
  { num:'03', title:'Research Excellence',              desc:'Dissertation-based learning and interdisciplinary funded research initiatives delivering impactful engineering outcomes.' },
  { num:'04', title:'Industry Collaboration',           desc:'Sponsored research, consultancy projects, industrial internships, and plant visits with leading energy and manufacturing organisations.' },
  { num:'05', title:'Sustainable Energy Focus',         desc:'Hydrogen Energy, Fuel Cells, Solar Thermal Systems, and Carbon Capture technologies preparing graduates for the clean energy transition.' },
  { num:'06', title:'Professional Certifications',      desc:'Internationally recognised certifications in CFD, Simulation, and Energy Management — ANSYS, SolidWorks, NPTEL, ASHRAE, and more.' },
  { num:'07', title:'Innovation & Patents',             desc:'Prototype development, patent filing, and startup incubation support to turn research into real-world engineering products.' },
  { num:'08', title:'World-Class Faculty',              desc:'Accomplished academicians and industry professionals mentoring research, publications, and technical innovation throughout the programme.' },
  { num:'09', title:'Advanced Laboratories',            desc:'CFD, combustion, HVAC, and thermal testing laboratories equipped with high-performance simulation and experimental infrastructure.' },
  { num:'10', title:'Global Research Opportunities',   desc:'SCI/Scopus-indexed publications, international conference presentations, and clear doctoral pathways for ambitious researchers.' },
  { num:'11', title:'Career Advancement',               desc:'Dedicated placement support and leadership training across energy, manufacturing, and sustainable technology sectors.' },
  { num:'12', title:'Global Professional Network',      desc:'Active membership and connections through ASHRAE, ISHRAE, SAE, ASME, and ISTE communities and global industry partners.' },
];

export default function MTechThermalWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtte-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtte-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mtte-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtte-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtte-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mtte-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtte-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtte-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-mtte-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-mtte-why-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-mtte-why-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-mtte-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-mtte-why-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-mtte-why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtte-why-sec{padding:70px 5%}.cl-mtte-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtte-why-sec" id="why-tulas">
        <div className="cl-mtte-why-wrap">
          <div className="cl-mtte-why-head">
            <div className="cl-mtte-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mtte-why-h2">Why Pursue M.Tech Thermal<br/><em>Engineering At Tulas</em></h2>
            <p className="cl-mtte-why-sub">Preparing the next generation of energy innovators, research scientists, computational engineers, and sustainability leaders.</p>
          </div>
          <div className="cl-mtte-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mtte-why-card">
                <div className="cl-mtte-why-num">{c.num}</div>
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
