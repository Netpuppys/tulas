'use client';
import Link from 'next/link';

const PATHS = [
  {
    tag:'Current Page · General',
    title:'MCA',
    desc:'A comprehensive postgraduate computing degree covering software development, artificial intelligence, data science, cloud computing, and cyber security foundations.',
    link:null,
    current:true,
  },
  {
    tag:'Specialisation',
    title:'MCA Full Stack Development',
    desc:'Specialise in end-to-end software architecture, cloud-native development, DevOps, and enterprise application engineering.',
    link:'/courses/mca/fullstack-development/',
    linkLabel:'Explore MCA Full Stack →',
    current:false,
  },
  {
    tag:'Specialisation',
    title:'MCA AI & ML',
    desc:'Specialise in artificial intelligence, machine learning, and data-driven intelligent systems for next-generation software products.',
    link:'/courses/mca/artificial-intelligence-&-machine-learning/',
    linkLabel:'Explore MCA AI & ML →',
    current:false,
  },
];

const CLA = ['Operating Systems','OOP with Java','Python Programming','Data Structures & Algorithms','Computer Networks','Database Management','Software Engineering','Artificial Intelligence','Network Security','Research Methodology'];

export default function MCAGOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagovw-sec{padding:110px 7%;background:#fff;}
        .cl-mcagovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-mcagovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-mcagovw-visual{position:relative;height:500px;border-radius:20px;overflow:visible;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);}
        .cl-mcagovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-mcagovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-mcagovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:7rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:24px;line-height:1;z-index:2;pointer-events:none;}
        .cl-mcagovw-mark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;z-index:2;}
        .cl-mcagovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:#FFF3D7;line-height:1;}
        .cl-mcagovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;}
        .cl-mcagovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:3;}
        .cl-mcagovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-mcagovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-mcagovw-text{display:flex;flex-direction:column;gap:0;}
        .cl-mcagovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mcagovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mcagovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-mcagovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-mcagovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-mcagovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-mcagovw-bq{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-mcagovw-path-head{text-align:center;max-width:880px;margin:0 auto 60px;}
        .cl-mcagovw-path-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-mcagovw-path-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-mcagovw-path-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-mcagovw-path-head h2 em{font-style:normal;color:#DF5400;}
        .cl-mcagovw-path-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-mcagovw-pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:70px;}
        .cl-mcagovw-pcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);border:2px solid transparent;}
        .cl-mcagovw-pcard.current{border-color:#DF5400;}
        .cl-mcagovw-pvis{position:relative;padding:22px;min-height:130px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-mcagovw-ptag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-mcagovw-ptitle{font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;line-height:1.2;}
        .cl-mcagovw-pbody{padding:24px;flex:1;display:flex;flex-direction:column;gap:14px;}
        .cl-mcagovw-pbody p{font-size:.92rem;line-height:1.75;color:#5a6a8a;}
        .cl-mcagovw-plink{margin-top:auto;font-weight:800;font-size:.86rem;color:#DF5400;text-decoration:none;display:inline-block;}

        .cl-mcagovw-cla-title{text-align:center;font-size:1.3rem;font-weight:800;color:#001F4C;margin:0 0 36px;}
        .cl-mcagovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-mcagovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-mcagovw-split{grid-template-columns:1fr}.cl-mcagovw-pgrid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mcagovw-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-mcagovw-sec" id="overview">
        <div className="cl-mcagovw-wrap">

          <div className="cl-mcagovw-split">
            <div className="cl-mcagovw-visual">
              <div className="cl-mcagovw-imgwrap">
                <img src="/courses/mca/ProgramEducationalOutcome.webp" alt="MCA Overview"/>
              </div>
             
              <div className="cl-mcagovw-badge">
                <span className="yr">PG</span>
                <span className="lbl">Advanced Computing<br/>Curriculum</span>
              </div>
            </div>

            <div className="cl-mcagovw-text">
              <div className="cl-mcagovw-eyebrow"><span className="bar"/>School of Computing</div>
              <h2 className="cl-mcagovw-h2">Where Computing<br/><em>Meets Career</em></h2>
              <p className="cl-mcagovw-lead">The MCA at Tulas Institute delivers an advanced computing curriculum with a strong focus on software development, system design, data management, and emerging technologies.</p>
              <p className="cl-mcagovw-body">Students build a strong computing core — operating systems, data structures, databases, networks, and software engineering — then choose from specialisation opportunities in Artificial Intelligence, Machine Learning, Full Stack Development, Cloud Computing, Data Science, Cyber Security, and DevOps. Industry-integrated learning, embedded certifications, and an industry-sponsored capstone project make graduates ready for advanced computing careers from day one.</p>
              <blockquote className="cl-mcagovw-bq">"A future-ready graduate profile combining advanced technical expertise, industry exposure, research aptitude, innovation capabilities, and lifelong learning skills."</blockquote>
            </div>
          </div>

          <div className="cl-mcagovw-path-head" id="programmes">
            <div className="cl-mcagovw-path-eyebrow"><span className="bar"/>Choose Your Path</div>
            <h2>Three Ways To<br/><em>Study Computing</em></h2>
            <p>Start with the core MCA, or go deep into a focused specialisation from Semester II onward.</p>
          </div>

          <div className="cl-mcagovw-pgrid">
            {PATHS.map((p,i)=>(
              <div key={i} className={`cl-mcagovw-pcard${p.current?' current':''}`}>
                <div className="cl-mcagovw-pvis">
                  <span className="cl-mcagovw-ptag">{p.tag}</span>
                  <span className="cl-mcagovw-ptitle">{p.title}</span>
                </div>
                <div className="cl-mcagovw-pbody">
                  <p>{p.desc}</p>
                  {p.link && <Link href={p.link} className="cl-mcagovw-plink">{p.linkLabel}</Link>}
                </div>
              </div>
            ))}
          </div>

          

        </div>
      </section>
    </>
  );
}
