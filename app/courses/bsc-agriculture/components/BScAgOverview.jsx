'use client';

const DOMAINS = [
  { tag:'Core Domain',     title:'Agronomy & Soil Science',              desc:'Crop production, soil testing, and sustainable land management.',         pills:['Soil Testing','Crop Production'] },
  { tag:'Core Domain',     title:'Horticulture & Plant Breeding',        desc:'Genetics, plant breeding, and horticultural crop management.',             pills:['Genetics','Horticulture'] },
  { tag:'Core Domain',     title:'Plant Pathology & Entomology',         desc:'Plant disease diagnosis and pest management for healthier crops.',         pills:['Plant Pathology','Entomology'] },
  { tag:'Core Domain',     title:'Animal Science & Husbandry',           desc:'Livestock management and the fundamentals of animal husbandry.',           pills:['Animal Husbandry','Livestock Management'] },
  { tag:'Core Domain',     title:'Agricultural Economics & Extension',   desc:'Rural economy, agribusiness, and agricultural extension education.',       pills:['Agri-Economics','Extension Education'] },
  { tag:'Emerging Focus',  title:'Food Technology & Biotechnology',      desc:'Fundamentals of biotechnology and food production technology.',            pills:['Biotechnology','Food Technology'] },
];

const CLA = [
  'Animal Science','Extension Education','Plant Biochemistry','Agricultural Economics',
  'Fundamentals of Biotechnology','Rural Development','Environmental Health',
  'Crop Production','Basic Sciences','Humanities',
];

export default function BScAgOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagovw-sec{padding:110px 7%;background:#fff;}
        .cl-bscagovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-bscagovw-visual{position:relative;height:500px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-bscagovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-bscagovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-bscagovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1;pointer-events:none;}
        .cl-bscagovw-mark{text-align:center;color:#fff;z-index:1;position:relative;}
        .cl-bscagovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-bscagovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-bscagovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:2;}
        .cl-bscagovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-bscagovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-bscagovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bscagovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bscagovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bscagovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-bscagovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-bscagovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-bscagovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-bscagovw-elig{max-width:900px;margin:0 auto 80px;border-radius:18px;overflow:hidden;border:1px solid #e0e4ed;}
        .cl-bscagovw-elig table{width:100%;border-collapse:collapse;}
        .cl-bscagovw-elig th{background:#001F4C;color:#fff;text-align:left;padding:14px 20px;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;}
        .cl-bscagovw-elig td{padding:16px 20px;font-size:.9rem;color:#4a5a7a;border-bottom:1px solid #e0e4ed;}
        .cl-bscagovw-elig td.k{font-weight:800;color:#001F4C;white-space:nowrap;}

        .cl-bscagovw-dom-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-bscagovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bscagovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bscagovw-dom-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-bscagovw-dom-h2 em{font-style:normal;color:#DF5400;}
        .cl-bscagovw-dom-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bscagovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-bscagovw-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-bscagovw-dcard-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-bscagovw-dcard-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-bscagovw-dcard-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-bscagovw-dcard-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-bscagovw-dcard-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-bscagovw-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-bscagovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        .cl-bscagovw-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;margin-top:24px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-bscagovw-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-bscagovw-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-bscagovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-bscagovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-bscagovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-bscagovw-split{grid-template-columns:1fr}.cl-bscagovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bscagovw-sec{padding:70px 5%}.cl-bscagovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bscagovw-sec" id="overview">
        <div className="cl-bscagovw-wrap">
          <div className="cl-bscagovw-split">
            <div className="cl-bscagovw-visual">
              <div className="cl-bscagovw-imgwrap">
                <img src="/courses/applied-science/contentRight.webp" alt="B.Sc. Agriculture Overview"/>
              </div>
              <span className="cl-bscagovw-glyph">AG</span>
              {/* <div className="cl-bscagovw-mark">
                <span className="big">B.Sc. Agri</span>
                <span className="small">School of Agriculture</span>
              </div> */}
              <div className="cl-bscagovw-badge">
                <span className="yr">4Y</span>
                <span className="lbl">ICAR-Aligned<br/>Curriculum</span>
              </div>
            </div>
            <div>
              <div className="cl-bscagovw-eyebrow"><span className="bar"/>School of Agriculture</div>
              <h2 className="cl-bscagovw-h2">Where Science<br/><em>Meets The Soil</em></h2>
              <p className="cl-bscagovw-lead">B.Sc. (Hons.) Agriculture is a four-year degree covering the theory and practice of modern agricultural techniques — from food production to rural economy and development.</p>
              <p className="cl-bscagovw-body">The programme is a broad-based one with real staying power: agriculture is never a sector facing layoffs, because feeding the planet is never optional. Students build knowledge across agronomy, soil science, horticulture, plant breeding and genetics, entomology, plant pathology, animal science, extension education, plant biochemistry, agricultural economics, and the fundamentals of biotechnology. The course follows ICAR (Indian Council of Agricultural Research) recommendations, teaching students to improve crop production sustainably while building a broad understanding of agriculture and allied fields.</p>
              <blockquote className="cl-bscagovw-quote">"Cultivating knowledge, growing innovation — B.Sc.(Hons.) Agriculture empowers future leaders to feed the world sustainably and shape the future of farming."</blockquote>
            </div>
          </div>

          <div className="cl-bscagovw-elig">
            <table>
              <thead>
                <tr><th>Course</th><th>Duration</th><th>Eligibility</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="k">B.Sc. (Hons.) Agriculture</td>
                  <td>4 Years</td>
                  <td>Passed 10+2 with Physics, Chemistry, Mathematics/Biology/Agriculture, with at least 45% marks (40% for reserved category).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cl-bscagovw-dom-head">
            <div className="cl-bscagovw-dom-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2 className="cl-bscagovw-dom-h2">Six Domains, One<br/><em>Agricultural Foundation</em></h2>
            <p className="cl-bscagovw-dom-sub">Every domain combines classroom learning with lab work and field practice.</p>
          </div>

          <div className="cl-bscagovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-bscagovw-dcard">
                <div className="cl-bscagovw-dcard-vis">
                  <span className="cl-bscagovw-dcard-tag">{d.tag}</span>
                  <span className="cl-bscagovw-dcard-title">{d.title}</span>
                </div>
                <div className="cl-bscagovw-dcard-body">
                  <p>{d.desc}</p>
                  <div className="cl-bscagovw-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-bscagovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-bscagovw-core">
            <div className="cap">Built On Core Agricultural Sciences</div>
            <p>Agronomy · Soil Science · Horticulture · Plant Breeding &amp; Genetics · Entomology · Plant Pathology</p>
          </div>

          <div className="cl-bscagovw-cla-title">Core Learning Areas</div>
          <div className="cl-bscagovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-bscagovw-cla-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
