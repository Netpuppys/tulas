'use client';
import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'Site Engineer',                          range:'₹3–6 LPA',  desc:'Oversee day-to-day construction operations, quality control, and on-site safety for infrastructure and building projects.' },
  { title:'Structural Engineer',                    range:'₹4–8 LPA',  desc:'Analyse and design load-bearing structures — buildings, bridges, and industrial facilities — using RCC, steel, and composite systems.' },
  { title:'Construction Project Manager',           range:'₹5–10 LPA', desc:'Plan, schedule, and deliver construction projects on time and within budget, coordinating contractors, consultants, and clients.' },
  { title:'Urban & Town Planner',                   range:'₹4–9 LPA',  desc:'Shape sustainable urban environments — land use planning, smart city design, and zoning regulations for growing cities.' },
  { title:'Geotechnical Engineer',                  range:'₹4–8 LPA',  desc:'Investigate soil conditions, design foundations, and provide ground improvement solutions for civil and infrastructure projects.' },
  { title:'Government Sector Engineer (PWD/Municipal)', range:'₹4–9 LPA', desc:'Work with government bodies on public infrastructure — roads, drainage, water supply, and municipal construction programmes.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',   dark:false },
  { val:'750+', label:'Recruiters',             dark:true  },
  { val:'100%', label:'Paid Internships',       dark:true  },
  { val:'2011', label:'Department Established', dark:true  },
];

const ROW1 = ['Academor','Amazon Web Services','Artech','BMW','Cywarden','ESAF Bank','Glowlogics','Grant Thornton','Hikeedu','Intel','Movidu','Prodesk IT','Relinns Technologies','Siemens','Stellaraa Edu Tech','Talbros','Verizon'];
const ROW2 = ['Acxiom Consulting','Arrise','ASC International','CK (Calvin Klein)','Easemytrip','Fitelo','Google','Hero','HSBC','Learning Routes','MWIDM','Reality Assistant','Root Analysis','Silverspace','Step2gen','The Times of India'];

export default function BTechCECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechceco-sec{background:#f8f9fc;padding:110px 7%}
        .cl-btechceco-wrap{max-width:1280px;margin:0 auto}

        .cl-btechceco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechceco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechceco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechceco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechceco-h2 em{font-style:normal;color:#DF5400}
        .cl-btechceco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechceco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-btechceco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-btechceco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btechceco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-btechceco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-btechceco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-btechceco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-btechceco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-btechceco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-btechceco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-btechceco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-btechceco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-btechceco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-btechceco-mq-section{padding:60px 0 0}
        .cl-btechceco-mq-head{text-align:center;margin-bottom:28px}
        .cl-btechceco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-btechceco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-btechceco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-btechceco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-btechceco-scroll 32s linear infinite}
        .cl-btechceco-mq-track.rev{animation-direction:reverse;margin-top:8px}
        .cl-btechceco-mq-wrap:hover .cl-btechceco-mq-track{animation-play-state:paused}
        @keyframes cl-btechceco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-btechceco-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-btechceco-grid{grid-template-columns:1fr 1fr}.cl-btechceco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechceco-sec{padding:70px 5%}.cl-btechceco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechceco-sec" id="careers">
        <div className="cl-btechceco-wrap">
          <div className="cl-btechceco-head">
            <div className="cl-btechceco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-btechceco-h2">Where This B.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-btechceco-sub">From site engineering to urban planning — a civil engineering degree opens both government and private-sector infrastructure careers.</p>
          </div>

          <div className="cl-btechceco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-btechceco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-btechceco-ach-val">{a.val}</div>
                <div className="cl-btechceco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-btechceco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-btechceco-card">
                <div className="cl-btechceco-card-top">
                  <div className="cl-btechceco-card-title">{r.title}</div>
                  <span className="cl-btechceco-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

           <HiringPartnerBtech/>
                                                            
                                        <BtechStudents/>

          {/* <div className="cl-btechceco-mq-section">
            <div className="cl-btechceco-mq-head">
              <h3>Where Engineering Recruiters</h3>
              <p>Trusted by leading organisations across technology, consulting, manufacturing and emerging tech.</p>
            </div>
            <div className="cl-btechceco-mq-wrap">
              <div className="cl-btechceco-mq-track">
                {[...ROW1,...ROW1].map((c,i)=><div key={i} className="cl-btechceco-mq-chip">{c}</div>)}
              </div>
            </div>
            <div className="cl-btechceco-mq-wrap">
              <div className="cl-btechceco-mq-track rev">
                {[...ROW2,...ROW2].map((c,i)=><div key={i} className="cl-btechceco-mq-chip">{c}</div>)}
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
