'use client';

const CARDS = [
  { num:'01', title:'Advanced Analysis Training',    desc:'Specialised training in structural analysis, earthquake, and wind engineering.' },
  { num:'02', title:'Industry-Standard Software',    desc:'ETABS, STAAD Pro, ANSYS, SAP2000, and BIM tools for real-world applications.' },
  { num:'03', title:'Research & Publications',       desc:'Independent research, dissertation work, and publication in reputed journals.' },
  { num:'04', title:'Global Design Codes',           desc:'Curriculum aligned with IS, Eurocode, and ACI international standards.' },
  { num:'05', title:'Industry Collaboration',        desc:'Internships and consultancy projects bridging academia and practice.' },
  { num:'06', title:'Disaster Resilience Focus',     desc:'Modules aligned with NIDM and NDMA national resilience initiatives.' },
  { num:'07', title:'Digital Twin & AI Applications', desc:'Structural health monitoring and AI-driven optimisation exposure.' },
  { num:'08', title:'Green Building Certification',  desc:'LEED and IGBC certification workshops built into the programme.' },
  { num:'09', title:'Global Career Readiness',       desc:'Training for opportunities in design firms, construction companies, and research institutions worldwide.' },
];

export default function MTechStructuralWhyTulas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtse-why-sec{background:#f8f9fc;padding:110px 7%;}
        .cl-mtse-why-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtse-why-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-mtse-why-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtse-why-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtse-why-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-mtse-why-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtse-why-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtse-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .cl-mtse-why-card{background:#fff;border-radius:16px;padding:28px;box-shadow:0 8px 24px rgba(0,31,76,.06);transition:transform .3s,box-shadow .3s,border .3s;border:1.5px solid transparent;}
        .cl-mtse-why-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,31,76,.1);border-color:#001F4C;}
        .cl-mtse-why-num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#DF5400;line-height:1;margin-bottom:12px;}
        .cl-mtse-why-card h3{font-weight:800;font-size:1.08rem;color:#001F4C;margin-bottom:10px;line-height:1.3;}
        .cl-mtse-why-card p{font-size:.88rem;line-height:1.75;color:#5a6a8a;margin:0;}

        @media(max-width:960px){.cl-mtse-why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.cl-mtse-why-sec{padding:70px 5%}.cl-mtse-why-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtse-why-sec" id="why-tulas">
        <div className="cl-mtse-why-wrap">
          <div className="cl-mtse-why-head">
            <div className="cl-mtse-why-eyebrow"><span className="bar"/>The Tulas Advantage</div>
            <h2 className="cl-mtse-why-h2">Why Pursue M.Tech Structural<br/><em>Engineering At Tulas</em></h2>
            <p className="cl-mtse-why-sub">A perfect blend of advanced academics, practical learning, certifications, industry exposure, and research opportunities.</p>
          </div>
          <div className="cl-mtse-why-grid">
            {CARDS.map((c,i)=>(
              <div key={i} className="cl-mtse-why-card">
                <div className="cl-mtse-why-num">{c.num}</div>
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
