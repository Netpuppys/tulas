'use client';

const DOMAINS = [
  { tag:'Core Area', title:'Constitutional & Public Law',       desc:'Constitutional law, administrative law, and public governance frameworks.',   pills:['Constitutional Law','Public Law'] },
  { tag:'Core Area', title:'Political Science & Governance',   desc:'Political systems, governance structures, and public administration.',        pills:['Political Systems','Governance'] },
  { tag:'Core Area', title:'Human Rights & International Law', desc:'Human rights law, international treaties, and global legal frameworks.',     pills:['Human Rights','International Law'] },
  { tag:'Core Area', title:'Criminal & Civil Law',             desc:'Criminal procedure, civil law, and law of torts applied in practice.',        pills:['Criminal Law','Civil Law'] },
  { tag:'Core Area', title:'Environmental & Labour Law',       desc:'Environmental regulations, labour rights, and social justice legislation.',   pills:['Environmental Law','Labour Law'] },
  { tag:'Core Area', title:'ADR & Legal Research',             desc:'Mediation, arbitration, and research methodology for legal practice.',       pills:['Legal Research','ADR'] },
];

const CLA = ['Critical Thinking','Legal Reasoning','Public Policy Analysis','Legal Drafting','Legal Research','Governance Analysis','Public Speaking','Case Analysis','Constitutional Interpretation','Professional Ethics','Analytical Thinking','Decision Making'];

export default function BALLBOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbov-sec{padding:110px 7%;background:#fff;}
        .cl-ballbov-wrap{max-width:1280px;margin:0 auto;}

        .cl-ballbov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        .cl-ballbov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);}
        .cl-ballbov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-ballbov-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-ballbov-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:24px;line-height:1;z-index:2;pointer-events:none;}
        .cl-ballbov-mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;z-index:2;}
        .cl-ballbov-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#FFF3D7;line-height:1;}
        .cl-ballbov-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-ballbov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-ballbov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-ballbov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-ballbov-text{display:flex;flex-direction:column;gap:0;}
        .cl-ballbov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ballbov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ballbov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-ballbov-h2 em{font-style:normal;color:#DF5400;}
        .cl-ballbov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-ballbov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-ballbov-bq{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-ballbov-dhead{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-ballbov-dhead-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-ballbov-dhead-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-ballbov-dhead h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-ballbov-dhead h2 em{font-style:normal;color:#DF5400;}
        .cl-ballbov-dhead p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-ballbov-dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-ballbov-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-ballbov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-ballbov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-ballbov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-ballbov-dbody{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-ballbov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-ballbov-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-ballbov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}
        .cl-ballbov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-ballbov-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-ballbov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-ballbov-cla-title{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#001F4C;margin:70px 0 36px;}
        .cl-ballbov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-ballbov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-ballbov-split{grid-template-columns:1fr}.cl-ballbov-dgrid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-ballbov-sec{padding:70px 5%}.cl-ballbov-dgrid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-ballbov-sec" id="overview">
        <div className="cl-ballbov-wrap">

          <div className="cl-ballbov-split">
            <div className="cl-ballbov-visual">
              <div className="cl-ballbov-imgwrap">
                <img src="/school-of-law/law/criminal-law-opt.png" alt="BA LLB Overview"/>
              </div>
             
              <div className="cl-ballbov-badge">
                <span className="yr">BCI</span>
                <span className="lbl">Approved<br/>Programme</span>
              </div>
            </div>

            <div className="cl-ballbov-text">
              <div className="cl-ballbov-eyebrow"><span className="bar"/>Tulas School of Law</div>
              <h2 className="cl-ballbov-h2">Where Society<br/><em>Meets Law</em></h2>
              <p className="cl-ballbov-lead">The BA LL.B.  at Tulas School of Law combines humanities with legal education to develop strong analytical, advocacy, and public policy skills.</p>
              <p className="cl-ballbov-body">Law is inseparable from society — understanding governance, human rights, political structures, and social justice is as essential as knowing legal statutes. The BA LL.B.  programme at Tulas School of Law integrates political science, public policy, and humanities with rigorous legal training to develop graduates who are ready to serve in courts, civil services, academia, and public institutions. Through moot courts, legal aid clinics, policy research, and internships, students graduate as confident, practice-ready advocates.</p>
              <blockquote className="cl-ballbov-bq">"A legal education should prepare you for the courtroom — not just the classroom."</blockquote>
            </div>
          </div>

          <div className="cl-ballbov-dhead">
            <div className="cl-ballbov-dhead-eyebrow"><span className="bar"/>Core Learning Areas</div>
            <h2>Six Domains, One<br/><em>Integrated Foundation</em></h2>
            <p>Every area is built on strong legal fundamentals and reinforced through moot courts, policy research, and internships.</p>
          </div>

          <div className="cl-ballbov-dgrid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-ballbov-dcard">
                <div className="cl-ballbov-dvis">
                  <span className="cl-ballbov-dtag">{d.tag}</span>
                  <span className="cl-ballbov-dtitle">{d.title}</span>
                </div>
                <div className="cl-ballbov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-ballbov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-ballbov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-ballbov-core">
              <div className="cl-ballbov-cap">Built On Core<br/>Legal Education</div>
              <p>Constitutional Law · Political Science · Public Policy · Administrative Law · Human Rights · Legal Research</p>
            </div>
          </div>

          <div className="cl-ballbov-cla-title">Skills You'll Develop</div>
          <div className="cl-ballbov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-ballbov-cla-chip">{c}</span>)}
          </div>

        </div>
      </section>
    </>
  );
}
