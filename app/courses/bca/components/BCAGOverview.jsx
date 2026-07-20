'use client';
import Link from 'next/link';

const PATHS = [
  {
    tag: 'Specialisation',
    title: 'BCA Cyber Security',
    desc: 'A comprehensive undergraduate computing degree covering programming, databases, software engineering, networking, and web technologies.',
    link: null,
    current: false,
  },
  {
    tag: 'Specialisation',
    title: 'BCA Full Stack Development',
    desc: 'Specialise in end-to-end web development — frontend, backend, cloud deployment, and full stack project tracks across MERN, Django, Spring Boot, and Laravel.',
    link: '/courses/bca/fullstack-devlopment/',
    current: false,
  },
  {
    tag: 'Specialisation',
    title: 'BCA AI & ML',
    desc: 'Specialise in artificial intelligence, machine learning, and AI-powered application development, with a deployed app portfolio.',
    link: '/courses/bca/artificial-intelligence-&-machine-learning/',
    current: false,
  },
];

const CLA = [
  'Programming Fundamentals','Data Structures','Database Management','Web Technologies',
  'Software Engineering','Computer Networks','Operating Systems','Artificial Intelligence',
  'Cloud Computing','Communication Skills',
];

export default function BCAGOverview() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagovw-sec{padding:110px 7%;background:#fff;}
        .cl-bcagovw-wrap{max-width:1280px;margin:0 auto;}

        .cl-bcagovw-split{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;align-items:center;margin-bottom:80px;}
        .cl-bcagovw-visual{position:relative;height:500px;border-radius:20px;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);box-shadow:0 24px 60px rgba(0,31,76,.22);display:flex;align-items:center;justify-content:center;overflow:visible;}
        .cl-bcagovw-imgwrap{position:absolute;inset:0;border-radius:20px;overflow:hidden;}
        .cl-bcagovw-imgwrap img{width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-bcagovw-glyph{font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,243,215,.14);position:absolute;top:20px;left:20px;z-index:1;pointer-events:none;}
        .cl-bcagovw-mark{text-align:center;color:#fff;z-index:1;position:relative;}
        .cl-bcagovw-mark .big{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:#FFF3D7;line-height:1;display:block;}
        .cl-bcagovw-mark .small{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-top:8px;display:block;}
        .cl-bcagovw-badge{position:absolute;bottom:-26px;left:-20px;display:flex;align-items:center;gap:16px;border-radius:18px;padding:22px 26px;background:#fff;box-shadow:0 16px 40px rgba(0,31,76,.2);z-index:2;}
        .cl-bcagovw-badge .yr{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:#DF5400;line-height:1;}
        .cl-bcagovw-badge .lbl{font-size:.8rem;font-weight:700;line-height:1.4;color:#001F4C;}

        .cl-bcagovw-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcagovw-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcagovw-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:22px;}
        .cl-bcagovw-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcagovw-lead{font-size:1.18rem;font-weight:600;line-height:1.7;color:#001F4C;margin-bottom:20px;}
        .cl-bcagovw-body{font-size:1rem;line-height:1.9;color:#5a6a8a;margin-bottom:20px;}
        .cl-bcagovw-quote{padding-left:22px;border-left:4px solid #DF5400;font-style:italic;font-weight:600;font-size:1.05rem;line-height:1.7;color:#001F4C;}

        .cl-bcagovw-path-head{text-align:center;max-width:880px;margin:0 auto 50px;}
        .cl-bcagovw-path-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bcagovw-path-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bcagovw-path-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C;line-height:.95;margin-bottom:16px;}
        .cl-bcagovw-path-h2 em{font-style:normal;color:#DF5400;}
        .cl-bcagovw-path-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bcagovw-path-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:80px;}
        .cl-bcagovw-pcard{border-radius:20px;overflow:hidden;display:flex;flex-direction:column;background:#fff;box-shadow:0 8px 28px rgba(0,31,76,.07);border:2px solid transparent;}
        .cl-bcagovw-pcard.current{border-color:#DF5400;}
        .cl-bcagovw-pcard-vis{position:relative;padding:22px;min-height:130px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(135deg,#001F4C 0%,#c44900 130%);}
        .cl-bcagovw-pcard-tag{position:absolute;top:14px;left:14px;background:rgba(255,243,215,.95);color:#001F4C;font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:6px 14px;border-radius:20px;}
        .cl-bcagovw-pcard-title{font-weight:800;font-size:1.3rem;color:#fff;line-height:1.2;}
        .cl-bcagovw-pcard-body{padding:24px;flex:1;display:flex;flex-direction:column;gap:14px;}
        .cl-bcagovw-pcard-body p{font-size:.92rem;line-height:1.75;color:#5a6a8a;}
        .cl-bcagovw-pcard-link{margin-top:auto;font-weight:800;font-size:.86rem;color:#DF5400;text-decoration:none;}

        .cl-bcagovw-cla-title{text-align:center;font-size:1.5rem;font-weight:800;color:#001F4C;margin:0 0 36px;}
        .cl-bcagovw-cla-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:920px;margin:0 auto;}
        .cl-bcagovw-cla-chip{padding:12px 22px;border-radius:30px;font-size:.88rem;font-weight:700;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;}

        @media(max-width:900px){.cl-bcagovw-split{grid-template-columns:1fr}.cl-bcagovw-path-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-bcagovw-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bcagovw-sec" id="overview">
        <div className="cl-bcagovw-wrap">
          <div className="cl-bcagovw-split">
            <div className="cl-bcagovw-visual">
              <div className="cl-bcagovw-imgwrap">
                <img src="/courses/bca/departmentalMission.webp" alt="BCA Overview"/>
              </div>
              
              <div className="cl-bcagovw-badge">
                <span className="yr">UG</span>
                <span className="lbl">NEP 2020<br/>OBE Framework</span>
              </div>
            </div>
            <div>
              <div className="cl-bcagovw-eyebrow"><span className="bar"/>School of Computing</div>
              <h2 className="cl-bcagovw-h2">Where Computing<br/><em>Meets Career</em></h2>
              <p className="cl-bcagovw-lead">The BCA at Tulas Institute delivers a strong foundation in computing through programming, databases, software engineering, networking, and web technologies.</p>
              <p className="cl-bcagovw-body">Students build a strong computing core — programming, databases, software engineering, networking, and web technologies — then choose from specialisation opportunities in emerging domains such as Artificial Intelligence, Machine Learning, Full Stack Development, and Cloud Computing. Industry-integrated learning through live projects, case studies, hackathons, workshops, and expert sessions, plus multiple embedded industry certifications, make graduates job-ready from day one.</p>
              <blockquote className="cl-bcagovw-quote">"A future-ready graduate profile that combines technical expertise, industry readiness, research aptitude, and innovation capabilities to address evolving global technology demands."</blockquote>
            </div>
          </div>

          <div className="cl-bcagovw-path-head" id="programmes">
            <div className="cl-bcagovw-path-eyebrow"><span className="bar"/>Choose Your Path</div>
            <h2 className="cl-bcagovw-path-h2">Three Ways To<br/><em>Study Computer Applications</em></h2>
            <p className="cl-bcagovw-path-sub">Start with the core BCA, or go deep into a focused specialisation from Semester II onward.</p>
          </div>

          <div className="cl-bcagovw-path-grid">
            {PATHS.map((p,i)=>(
              <div key={i} className={`cl-bcagovw-pcard${p.current?' current':''}`}>
                <div className="cl-bcagovw-pcard-vis">
                  <span className="cl-bcagovw-pcard-tag">{p.tag}</span>
                  <span className="cl-bcagovw-pcard-title">{p.title}</span>
                </div>
                <div className="cl-bcagovw-pcard-body">
                  <p>{p.desc}</p>
                  {p.link && <Link href={p.link} className="cl-bcagovw-pcard-link">Explore {p.title} →</Link>}
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}
