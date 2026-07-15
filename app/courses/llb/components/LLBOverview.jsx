'use client';

const DOMAINS = [
  { tag:'Core Area', title:'Constitutional & Administrative Law', desc:'Indian constitutional principles, judicial processes, and administrative law.', pills:['Constitutional Law','Administrative Law'] },
  { tag:'Core Area', title:'Criminal Law & Procedure',           desc:'Criminal law principles, procedure, and courtroom advocacy.',                pills:['Criminal Law','Legal Procedure'] },
  { tag:'Core Area', title:'Civil Law & Law of Torts',          desc:'Civil liability, torts, and dispute resolution fundamentals.',               pills:['Civil Law','Law of Torts'] },
  { tag:'Core Area', title:'Property & Family Law',             desc:'Property rights, family law, and personal law frameworks.',                  pills:['Property Law','Family Law'] },
  { tag:'Core Area', title:'Corporate & Company Law',           desc:'Corporate governance, company law, and commercial regulation.',               pills:['Corporate Law','Company Law'] },
  { tag:'Core Area', title:'ADR & Legal Research',              desc:'Mediation, arbitration, negotiation, and legal research methodology.',        pills:['ADR','Legal Research'] },
];

const CLA = ['Critical Thinking','Legal Reasoning','Courtroom Advocacy','Legal Drafting','Legal Research','Negotiation','Mediation','Public Speaking','Case Analysis','Client Counselling','Professional Ethics','Decision Making'];

export default function LLBOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbov-sec{padding:110px 7%;background:#fff;}
        .cl-llbov-wrap{max-width:1280px;margin:0 auto;}

        .cl-llbov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        .cl-llbov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);}
        .cl-llbov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-llbov-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-llbov-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:24px;line-height:1;z-index:2;pointer-events:none;}
        .cl-llbov-mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;z-index:2;}
        .cl-llbov-mark .big{font-family:'Bebas Neue',sans-serif;font-size:3.2rem;color:#FFF3D7;line-height:1;}
        .cl-llbov-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-llbov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-llbov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-llbov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-llbov-text{display:flex;flex-direction:column;gap:0;}
        .cl-llbov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-llbov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-llbov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-llbov-h2 em{font-style:normal;color:#DF5400;}
        .cl-llbov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-llbov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-llbov-bq{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-llbov-dhead{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-llbov-dhead-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-llbov-dhead-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-llbov-dhead h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-llbov-dhead h2 em{font-style:normal;color:#DF5400;}
        .cl-llbov-dhead p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-llbov-dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-llbov-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-llbov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-llbov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-llbov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-llbov-dbody{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-llbov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-llbov-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-llbov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}
        .cl-llbov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-llbov-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-llbov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-llbov-cla-title{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#001F4C;margin:70px 0 36px;}
        .cl-llbov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-llbov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-llbov-split{grid-template-columns:1fr}.cl-llbov-dgrid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-llbov-sec{padding:70px 5%}.cl-llbov-dgrid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-llbov-sec" id="overview">
        <div className="cl-llbov-wrap">

          <div className="cl-llbov-split">
            <div className="cl-llbov-visual">
              <div className="cl-llbov-imgwrap">
                <img src="/school-of-law/law/constitutional-law.png" alt="LLB Overview"/>
              </div>
              {/* <div className="cl-llbov-glyph">LAW</div>
              <div className="cl-llbov-mark">
                <span className="big">LLB</span>
                <span className="small">Tulas School of Law</span>
              </div> */}
              <div className="cl-llbov-badge">
                <span className="yr">BCI</span>
                <span className="lbl">Approved<br/>Programme</span>
              </div>
            </div>

            <div className="cl-llbov-text">
              <div className="cl-llbov-eyebrow"><span className="bar"/>Tulas School of Law</div>
              <h2 className="cl-llbov-h2">Where Law<br/><em>Meets Practice</em></h2>
              <p className="cl-llbov-lead">The LL.B. at Tulas School of Law is designed for graduates aspiring to build successful careers in litigation, judiciary, corporate law, and legal consultancy.</p>
              <p className="cl-llbov-body">Law is more than understanding statutes and legal principles — it is about interpreting complex situations, solving real-world legal challenges, and advocating for justice with integrity. At Tulas School of Law, students gain a comprehensive understanding of the legal system while developing analytical thinking, legal reasoning, and professional ethics. Through moot courts, legal research, drafting exercises, internships, and industry interactions, students graduate as confident, practice-ready professionals.</p>
              <blockquote className="cl-llbov-bq">"A legal education should prepare you for the courtroom — not just the classroom."</blockquote>
            </div>
          </div>

          <div className="cl-llbov-dhead">
            <div className="cl-llbov-dhead-eyebrow"><span className="bar"/>Core Learning Areas</div>
            <h2>Six Domains, One<br/><em>Legal Foundation</em></h2>
            <p>Every area is built on strong legal fundamentals and reinforced through moot courts, drafting exercises, and internships.</p>
          </div>

          <div className="cl-llbov-dgrid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-llbov-dcard">
                <div className="cl-llbov-dvis">
                  <span className="cl-llbov-dtag">{d.tag}</span>
                  <span className="cl-llbov-dtitle">{d.title}</span>
                </div>
                <div className="cl-llbov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-llbov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-llbov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
            <div className="cl-llbov-core">
              <div className="cl-llbov-cap">Built On Core<br/>Legal Education</div>
              <p>Constitutional Law · Criminal Law · Contract Law · Law of Torts · Property Law · Professional Ethics</p>
            </div>
          </div>

          {/* <div className="cl-llbov-cla-title">Skills You'll Develop</div>
          <div className="cl-llbov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-llbov-cla-chip">{c}</span>)}
          </div> */}

        </div>
      </section>
    </>
  );
}
