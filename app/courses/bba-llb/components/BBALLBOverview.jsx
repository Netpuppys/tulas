'use client';

const DOMAINS = [
  { tag:'Core Area', title:'Corporate & Company Law',    desc:'Corporate governance, company law, and regulatory compliance.',                  pills:['Corporate Law','Company Law'] },
  { tag:'Core Area', title:'Business & Commercial Law',  desc:'Commercial regulations and business law fundamentals.',                          pills:['Business Law','Commercial Regulations'] },
  { tag:'Core Area', title:'Taxation & Compliance',      desc:'Taxation, mergers, acquisitions, and corporate governance.',                     pills:['Taxation','Compliance'] },
  { tag:'Core Area', title:'IPR & Cyber Law',            desc:'Intellectual property rights and cyber law for business.',                       pills:['IPR','Cyber Law'] },
  { tag:'Core Area', title:'Contract Law & Drafting',    desc:'Commercial contract drafting and legal due diligence.',                          pills:['Contract Law','Legal Drafting'] },
  { tag:'Core Area', title:'ADR & Negotiation',          desc:'Negotiation and alternative dispute resolution for business.',                   pills:['Negotiation','ADR'] },
];

const CLA = ['Critical Thinking','Legal Reasoning','Contract Drafting','Corporate Governance','Legal Research','Negotiation','Compliance Management','Case Analysis','Business Strategy','Professional Ethics','Analytical Thinking','Decision Making'];

export default function BBALLBOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllbov-sec{padding:110px 7%;background:#fff;}
        .cl-bbllbov-wrap{max-width:1280px;margin:0 auto;}

        .cl-bbllbov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        .cl-bbllbov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);}
        .cl-bbllbov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-bbllbov-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-bbllbov-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:24px;line-height:1;z-index:2;pointer-events:none;}
        .cl-bbllbov-mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;z-index:2;}
        .cl-bbllbov-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#FFF3D7;line-height:1;}
        .cl-bbllbov-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-bbllbov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-bbllbov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-bbllbov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-bbllbov-text{display:flex;flex-direction:column;gap:0;}
        .cl-bbllbov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bbllbov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bbllbov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bbllbov-h2 em{font-style:normal;color:#DF5400;}
        .cl-bbllbov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-bbllbov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-bbllbov-bq{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-bbllbov-dhead{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-bbllbov-dhead-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bbllbov-dhead-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bbllbov-dhead h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bbllbov-dhead h2 em{font-style:normal;color:#DF5400;}
        .cl-bbllbov-dhead p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bbllbov-dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-bbllbov-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-bbllbov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-bbllbov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-bbllbov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-bbllbov-dbody{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-bbllbov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-bbllbov-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-bbllbov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}
        .cl-bbllbov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-bbllbov-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-bbllbov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-bbllbov-cla-title{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#001F4C;margin:70px 0 36px;}
        .cl-bbllbov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-bbllbov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-bbllbov-split{grid-template-columns:1fr}.cl-bbllbov-dgrid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bbllbov-sec{padding:70px 5%}.cl-bbllbov-dgrid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-bbllbov-sec" id="overview">
        <div className="cl-bbllbov-wrap">

          <div className="cl-bbllbov-split">
            <div className="cl-bbllbov-visual">
              <div className="cl-bbllbov-imgwrap">
                <img src="/school-of-law/law/bballb.png" alt="BBA LLB Overview"/>
              </div>
              
              <div className="cl-bbllbov-badge">
                <span className="yr">BCI</span>
                <span className="lbl">Approved<br/>Programme</span>
              </div>
            </div>

            <div className="cl-bbllbov-text">
              <div className="cl-bbllbov-eyebrow"><span className="bar"/>Tulas School of Law</div>
              <h2 className="cl-bbllbov-h2">Where Business<br/><em>Meets Legal Practice</em></h2>
              <p className="cl-bbllbov-lead">The BBA LL.B. at Tulas School of Law combines business management with legal education to address modern corporate legal challenges.</p>
              <p className="cl-bbllbov-body">Law is more than understanding statutes and legal principles — it is about interpreting complex situations, solving real-world legal challenges, and advocating for justice with integrity. At Tulas School of Law, students gain a comprehensive understanding of the legal system while developing analytical thinking, legal reasoning, and professional ethics. Through moot courts, legal research, drafting exercises, internships, and industry interactions, students graduate as confident, practice-ready professionals.</p>
              <blockquote className="cl-bbllbov-bq">"A legal education should prepare you for the courtroom — not just the classroom."</blockquote>
            </div>
          </div>

          <div className="cl-bbllbov-dhead">
            <div className="cl-bbllbov-dhead-eyebrow"><span className="bar"/>Core Learning Areas</div>
            <h2>Six Domains, One<br/><em>Business-Law Foundation</em></h2>
            <p>Every area is built on strong legal fundamentals and reinforced through moot courts, drafting exercises, and internships.</p>
          </div>

          <div className="cl-bbllbov-dgrid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-bbllbov-dcard">
                <div className="cl-bbllbov-dvis">
                  <span className="cl-bbllbov-dtag">{d.tag}</span>
                  <span className="cl-bbllbov-dtitle">{d.title}</span>
                </div>
                <div className="cl-bbllbov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-bbllbov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-bbllbov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-bbllbov-core">
              <div className="cl-bbllbov-cap">Built On Core<br/>Legal Education</div>
              <p>Business Management · Corporate Law · Company Law · Taxation · Contract Drafting · Compliance</p>
            </div>
          </div>

          

        </div>
      </section>
    </>
  );
}
