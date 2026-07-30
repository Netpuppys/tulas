'use client';

const DOMAINS = [
  { tag:'Core Domain', title:'Artificial Intelligence & Machine Learning', desc:'Deep learning, generative AI, and agentic AI systems.',                                       pills:['Deep Learning','Generative AI'] },
  { tag:'Core Domain', title:'Data Science & Analytics',                  desc:'Advanced data analytics and data-driven decision systems.',                                    pills:['Data Analytics','Big Data'] },
  { tag:'Core Domain', title:'Cloud Computing & MLOps',                   desc:'Scalable cloud architecture and machine learning operations.',                                  pills:['Cloud Computing','MLOps'] },
  { tag:'Core Domain', title:'Computer Vision & NLP',                     desc:'Visual intelligence and natural language processing systems.',                                  pills:['Computer Vision','NLP'] },
  { tag:'Core Domain', title:'Cyber Security',                            desc:'Security research and secure systems engineering.',                                             pills:['Cyber Security','Secure Systems'] },
  { tag:'Core Domain', title:'Distributed & High-Performance Computing',  desc:'Distributed systems and high-performance computing architectures.',                             pills:['Distributed Systems','HPC'] },
];

const CLA = [
  'Artificial Intelligence','Machine Learning','Deep Learning','Generative AI','Agentic AI',
  'Data Science & Analytics','Cloud Computing','Computer Vision',
  'Natural Language Processing','Cyber Security','MLOps','Distributed & High-Performance Computing',
];

export default function MTechCSEOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-ovw-sec{padding:110px 7%;background:#fff;}
        .cl-mtcse-ovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-mtcse-ovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-mtcse-ovw-visual{position:relative;height:460px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-mtcse-ovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-mtcse-ovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-mtcse-ovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1;pointer-events:none;}
        .cl-mtcse-ovw-mark{text-align:center;color:#fff;z-index:1;position:relative;}
        .cl-mtcse-ovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-mtcse-ovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-mtcse-ovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:2;}
        .cl-mtcse-ovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mtcse-ovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-mtcse-ovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtcse-ovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtcse-ovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mtcse-ovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtcse-ovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mtcse-ovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mtcse-ovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mtcse-ovw-dom-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-mtcse-ovw-dom-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mtcse-ovw-dom-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mtcse-ovw-dom-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-mtcse-ovw-dom-h2 em{font-style:normal;color:#DF5400;}
        .cl-mtcse-ovw-dom-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mtcse-ovw-dom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cl-mtcse-ovw-dcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mtcse-ovw-dcard-vis{position:relative;height:150px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mtcse-ovw-dcard-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mtcse-ovw-dcard-title{font-weight:800;font-size:1.1rem;color:#fff;line-height:1.25;}
        .cl-mtcse-ovw-dcard-body{padding:24px;flex:1;display:flex;flex-direction:column;}
        .cl-mtcse-ovw-dcard-body p{font-size:.9rem;line-height:1.7;color:#5a6a8a;margin-bottom:16px;}
        .cl-mtcse-ovw-pills{display:flex;flex-wrap:wrap;gap:7px;}
        .cl-mtcse-ovw-pill{padding:5px 12px;border-radius:7px;font-size:.76rem;font-weight:600;background:#f8f9fc;border:1px solid #e0e4ed;color:#001F4C;}

        .cl-mtcse-ovw-core{border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:36px;margin-top:24px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);}
        .cl-mtcse-ovw-core .cap{font-family:'Bebas Neue',sans-serif;font-size:2rem;line-height:1.05;color:#FFF3D7;margin-bottom:12px;}
        .cl-mtcse-ovw-core p{font-size:.9rem;line-height:1.7;color:rgba(255,255,255,.82);}

        .cl-mtcse-ovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:70px 0 36px;}
        .cl-mtcse-ovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:1000px;margin:0 auto;}
        .cl-mtcse-ovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mtcse-ovw-split{grid-template-columns:1fr}.cl-mtcse-ovw-dom-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mtcse-ovw-sec{padding:70px 5%}.cl-mtcse-ovw-dom-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mtcse-ovw-sec" id="overview">
        <div className="cl-mtcse-ovw-wrap">
          <div className="cl-mtcse-ovw-split">
            <div className="cl-mtcse-ovw-visual">
              <div className="cl-mtcse-ovw-imgwrap">
                <img src="/courses/btech/usp.png" alt="M.Tech CSE Overview"/>
              </div>
              <span className="cl-mtcse-ovw-glyph">CSE</span>
              {/* <div className="cl-mtcse-ovw-mark">
                <span className="big">M.Tech CSE</span>
                <span className="small">School of Computing</span>
              </div> */}
              <div className="cl-mtcse-ovw-badge">
                <span className="yr">2Y</span>
                <span className="lbl">AI-Integrated<br/>Curriculum</span>
              </div>
            </div>
            <div>
              <div className="cl-mtcse-ovw-eyebrow"><span className="bar"/>School of Computing</div>
              <h2 className="cl-mtcse-ovw-h2">Where Advanced Computing<br/><em>Meets Research &amp; Innovation</em></h2>
              <p className="cl-mtcse-ovw-lead">The M.Tech in Computer Science &amp; Engineering at Tulas is designed to develop highly skilled professionals, researchers, and technology leaders capable of addressing complex computing challenges and driving innovation in the digital era.</p>
              <p className="cl-mtcse-ovw-body">The programme offers advanced knowledge in Artificial Intelligence, Machine Learning, Data Science, Cyber Security, Cloud Computing, High-Performance Computing, Software Engineering, and Distributed Systems. With a strong emphasis on research, innovation, advanced problem-solving, and real-world applications, students gain hands-on experience through industry-oriented projects, research publications, dissertation work, and emerging technologies aligned with global technological advancements.</p>
              <blockquote className="cl-mtcse-ovw-quote">"Advance your expertise, lead innovation, and shape the future of intelligent computing with Tulas M.Tech in Computer Science &amp; Engineering."</blockquote>
            </div>
          </div>

          <div className="cl-mtcse-ovw-dom-head">
            <div className="cl-mtcse-ovw-dom-eyebrow"><span className="bar"/>Advanced Learning Domains</div>
            <h2 className="cl-mtcse-ovw-dom-h2">Six Domains, One<br/><em>AI-Integrated Curriculum</em></h2>
            <p className="cl-mtcse-ovw-dom-sub">At Tulas, Artificial Intelligence is not a standalone subject — it is woven throughout the entire M.Tech CSE curriculum.</p>
          </div>

          <div className="cl-mtcse-ovw-dom-grid">
            {DOMAINS.map((d,i)=>(
              <div key={i} className="cl-mtcse-ovw-dcard">
                <div className="cl-mtcse-ovw-dcard-vis">
                  <span className="cl-mtcse-ovw-dcard-tag">{d.tag}</span>
                  <span className="cl-mtcse-ovw-dcard-title">{d.title}</span>
                </div>
                <div className="cl-mtcse-ovw-dcard-body">
                  <p>{d.desc}</p>
                  <div className="cl-mtcse-ovw-pills">
                    {d.pills.map((p,j)=><span key={j} className="cl-mtcse-ovw-pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cl-mtcse-ovw-core">
            <div className="cap">Built On Advanced Computing</div>
            <p>Advanced Algorithms · Distributed Systems · Research Methodology · Mathematical Foundations · Modern Software Engineering</p>
          </div>

          <div className="cl-mtcse-ovw-cla-title">Core Learning Areas</div>
          <div className="cl-mtcse-ovw-cla-row">
            {CLA.map((c,i)=><span key={i} className="cl-mtcse-ovw-cla-chip">{c}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
