'use client';
import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";
const ROLES = [
  { title:'Design Engineer',               range:'₹4–8 LPA',  desc:'Create mechanical components and systems using CAD/CAM tools, simulation software, and engineering standards across automotive, aerospace, and industrial sectors.' },
  { title:'Manufacturing Engineer',        range:'₹3–7 LPA',  desc:'Optimise production processes, oversee quality assurance, and implement lean manufacturing techniques on the shop floor.' },
  { title:'Quality Control Engineer',      range:'₹3–7 LPA',  desc:'Ensure product quality through inspection, testing, Six Sigma processes, and statistical quality control in manufacturing environments.' },
  { title:'Robotics Engineer',             range:'₹4–9 LPA',  desc:'Design, build, and program robotic systems and automation solutions for industrial manufacturing and smart factory environments.' },
  { title:'Energy Systems Engineer',       range:'₹4–8 LPA',  desc:'Develop and manage renewable energy systems, thermal power plants, and energy-efficient infrastructure for industrial and utility applications.' },
  { title:'Automotive / Aerospace Engineer', range:'₹4–9 LPA', desc:'Apply mechanical engineering principles to vehicle and aircraft design, testing, manufacturing, and maintenance across leading OEMs and Tier-1 suppliers.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',   dark:false },
  { val:'750+', label:'Recruiters',             dark:true  },
  { val:'100%', label:'Paid Internships',       dark:true  },
  { val:'2006', label:'Department Established', dark:true  },
];

const ROW1 = ['Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank','Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT','Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon'];
const ROW2 = ['Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)','Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes','MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India'];

export default function BTechMECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechmeco-sec{background:#f8f9fc;padding:0px 7%}
        .cl-btechmeco-wrap{max-width:1280px;margin:0 auto}

        .cl-btechmeco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechmeco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechmeco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechmeco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechmeco-h2 em{font-style:normal;color:#DF5400}
        .cl-btechmeco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechmeco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-btechmeco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-btechmeco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btechmeco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-btechmeco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-btechmeco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-btechmeco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-btechmeco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-btechmeco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-btechmeco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-btechmeco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-btechmeco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-btechmeco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-btechmeco-mq-head{text-align:center;margin-bottom:28px}
        .cl-btechmeco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-btechmeco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-btechmeco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-btechmeco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-btechmeco-scroll 32s linear infinite}
        .cl-btechmeco-mq-track.rev{animation-direction:reverse}
        .cl-btechmeco-mq-wrap:hover .cl-btechmeco-mq-track{animation-play-state:paused}
        @keyframes cl-btechmeco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-btechmeco-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-btechmeco-grid{grid-template-columns:1fr 1fr}.cl-btechmeco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechmeco-sec{padding:70px 5%}.cl-btechmeco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechmeco-sec" id="careers">
        <div className="cl-btechmeco-wrap">
          <div className="cl-btechmeco-head">
            <div className="cl-btechmeco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-btechmeco-h2">Where This B.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-btechmeco-sub">From design and manufacturing to robotics and energy — a mechanical engineering degree opens roles across every industrial sector.</p>
          </div>

          <div className="cl-btechmeco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-btechmeco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-btechmeco-ach-val">{a.val}</div>
                <div className="cl-btechmeco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-btechmeco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-btechmeco-card">
                <div className="cl-btechmeco-card-top">
                  <div className="cl-btechmeco-card-title">{r.title}</div>
                  <span className="cl-btechmeco-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                    
                            <BtechStudents/>

          {/* <div className="cl-btechmeco-mq-head">
            <h3>Where Engineering Recruiters</h3>
            <p>Trusted by leading organisations across technology, consulting, manufacturing and emerging tech.</p>
          </div>
          <div className="cl-btechmeco-mq-wrap">
            <div className="cl-btechmeco-mq-track">
              {[...ROW1,...ROW1].map((c,i)=><div key={i} className="cl-btechmeco-mq-chip">{c}</div>)}
            </div>
          </div>
          <div className="cl-btechmeco-mq-wrap">
            <div className="cl-btechmeco-mq-track rev">
              {[...ROW2,...ROW2].map((c,i)=><div key={i} className="cl-btechmeco-mq-chip">{c}</div>)}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
