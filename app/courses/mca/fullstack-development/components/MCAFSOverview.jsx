'use client';

const DOMAINS = [
  { tag:'Architecture',  title:'Full Stack Architecture',             desc:'Advanced full stack architecture and enterprise-grade system design.',              pills:['System Design','Enterprise Apps'] },
  { tag:'Cloud',         title:'Cloud-Native Development',            desc:'Cloud computing platforms, deployment, and cloud-native application design.',       pills:['Cloud Computing','Deployment'] },
  { tag:'Backend',       title:'Backend Engineering',                 desc:'Node.js & Express, PHP/Laravel, and advanced database systems.',                    pills:['Node.js','Laravel','Advanced DB'] },
  { tag:'DevOps',        title:'DevOps & Containerization',           desc:'Version control, automation, and DevOps practices for full stack teams.',           pills:['Git/GitHub','Automation'] },
  { tag:'Security',      title:'Cyber Security for Web Apps',         desc:'Web application security and ethical hacking for developers.',                      pills:['Web Security','Ethical Hacking'] },
  { tag:'AI-Integrated', title:'AI-Integrated Full Stack Development',desc:'Integrating AI capabilities directly into full stack applications.',               pills:['AI Integration','Intelligent Apps'] },
];

const CLA = ['Data Structures & Algorithms','Computer Networks','Database Management','Computer Organization & Architecture','Network Security','Artificial Intelligence','Software Quality Assurance','Innovation & Entrepreneurship','Web Technologies','Research Methodology'];

export default function MCAFSOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafsov-sec{padding:110px 7%;background:#fff;}
        .cl-mcafsov-wrap{max-width:1280px;margin:0 auto;}

        .cl-mcafsov-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}

        .cl-mcafsov-visual{position:relative;height:500px;border-radius:20px;overflow:visible;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);}
        .cl-mcafsov-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-mcafsov-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-mcafsov-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:24px;line-height:1;z-index:2;pointer-events:none;}
        .cl-mcafsov-mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;z-index:2;}
        .cl-mcafsov-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#FFF3D7;line-height:1;}
        .cl-mcafsov-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-mcafsov-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-mcafsov-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mcafsov-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-mcafsov-text{display:flex;flex-direction:column;gap:0;}
        .cl-mcafsov-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mcafsov-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mcafsov-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mcafsov-h2 em{font-style:normal;color:#DF5400;}
        .cl-mcafsov-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mcafsov-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mcafsov-bq{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mcafsov-dhead{text-align:center;max-width:880px;margin:0 auto 70px;}
        .cl-mcafsov-dhead-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mcafsov-dhead-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mcafsov-dhead h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mcafsov-dhead h2 em{font-style:normal;color:#DF5400;}
        .cl-mcafsov-dhead p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mcafsov-dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-mcafsov-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mcafsov-dvis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mcafsov-dtag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mcafsov-dtitle{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-mcafsov-dbody{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-mcafsov-dbody p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-mcafsov-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-mcafsov-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}
        .cl-mcafsov-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);margin-top:24px;}
        .cl-mcafsov-cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-mcafsov-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-mcafsov-cla-title{text-align:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#001F4C;margin:70px 0 36px;}
        .cl-mcafsov-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-mcafsov-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mcafsov-split{grid-template-columns:1fr}.cl-mcafsov-dgrid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcafsov-sec{padding:70px 5%}.cl-mcafsov-dgrid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mcafsov-sec" id="overview">
        <div className="cl-mcafsov-wrap">

          <div className="cl-mcafsov-split">
            <div className="cl-mcafsov-visual">
              <div className="cl-mcafsov-imgwrap">
                <img src="/courses/mca/content2.webp" alt="MCA Full Stack Overview"/>
              </div>
              {/* <div className="cl-mcafsov-glyph">MCA</div>
              <div className="cl-mcafsov-mark">
                <span className="big">Full Stack</span>
                <span className="small">School of Computing</span>
              </div> */}
              <div className="cl-mcafsov-badge">
                <span className="yr">PG</span>
                <span className="lbl">Advanced Computing<br/>Curriculum</span>
              </div>
            </div>

            <div className="cl-mcafsov-text">
              <div className="cl-mcafsov-eyebrow"><span className="bar"/>School of Computing</div>
              <h2 className="cl-mcafsov-h2">Where Code<br/><em>Meets Architecture</em></h2>
              <p className="cl-mcafsov-lead">The MCA in Full Stack Development builds an advanced computing foundation, with a strong focus on software development, system design, data management, and emerging technologies.</p>
              <p className="cl-mcafsov-body">Students move from core computing fundamentals — operating systems, data structures, database management, and networks — into applied full stack specialisation across five elective tracks covering frontend, backend, cloud, and AI-integrated development. Industry-integrated learning through live projects, hackathons, and industry-sponsored capstone projects builds graduates who are ready to architect and ship enterprise-grade software.</p>
              <blockquote className="cl-mcafsov-bq">"A future-ready graduate profile that combines advanced technical expertise, industry exposure, research aptitude, innovation capabilities, and lifelong learning skills to address evolving global technology challenges."</blockquote>
            </div>
          </div>

          <div className="cl-mcafsov-dhead">
            <div className="cl-mcafsov-dhead-eyebrow"><span className="bar"/>Domains You'll Study</div>
            <h2>Six Domains Across<br/><em>The Full Stack</em></h2>
            <p>Every domain builds on a strong computing core, with five program-elective slots offering real specialisation choice each semester.</p>
          </div>

          <div className="cl-mcafsov-dgrid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-mcafsov-dcard">
                <div className="cl-mcafsov-dvis">
                  <span className="cl-mcafsov-dtag">{d.tag}</span>
                  <span className="cl-mcafsov-dtitle">{d.title}</span>
                </div>
                <div className="cl-mcafsov-dbody">
                  <p>{d.desc}</p>
                  <div className="cl-mcafsov-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-mcafsov-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-mcafsov-core">
            <div className="cl-mcafsov-cap">Built On Core Computing</div>
            <p>Operating Systems &amp; Shell Programming · OOP with Java · Python Programming · Database Management · Computer Networks · Software Engineering</p>
          </div>

          {/* <div className="cl-mcafsov-cla-title">Core Learning Areas</div>
          <div className="cl-mcafsov-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-mcafsov-cla-chip">{c}</span>)}
          </div> */}

        </div>
      </section>
    </>
  );
}
