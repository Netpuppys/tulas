'use client';

import BtechStudents from "../../btech/components/BtechStudents";
import HiringPartnerBtech from "../../btech/components/HiringPartnerBtech";

const ROLES = [
  'Agricultural Officer',
  'Agronomist',
  'Soil Scientist',
  'Plant Breeder',
  'Agricultural Research Scientist',
  'Farm Manager',
  'Horticulturist',
  'Seed Technologist',
];

const ACH = [
  { val:'100%', label:'Placement Assistance',      dark:false },
  { val:'750+', label:'Recruiters',                dark:true  },
  { val:'ICAR', label:'Aligned Curriculum',        dark:true  },
  { val:'6',    label:'Core Agricultural Domains', dark:true  },
];

const ROW1 = ['Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM','Tata','Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS','Amazon','Microsoft','HCL','LG','Wipro','Vivo','JBM','Tata','Samsung','ITC','Oracle','Cummins','Aon','Honda','Hexaware','AIS'];

export default function BScAgCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagco-sec{background:#fff;padding:10px 7%;}
        .cl-bscagco-wrap{max-width:1280px;margin:0 auto;}

        .cl-bscagco-head{text-align:center;max-width:860px;margin:0 auto 70px;}
        .cl-bscagco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px;}
        .cl-bscagco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0;}
        .cl-bscagco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px;}
        .cl-bscagco-h2 em{font-style:normal;color:#DF5400;}
        .cl-bscagco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a;}

        .cl-bscagco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:52px;}
        .cl-bscagco-ach-card{border-radius:18px;padding:32px 24px;text-align:center;}
        .cl-bscagco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);}
        .cl-bscagco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);}
        .cl-bscagco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px;}
        .cl-bscagco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75);}

        .cl-bscagco-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:52px;}
        .cl-bscagco-item{border-radius:14px;padding:22px 14px;text-align:center;font-weight:700;font-size:.9rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:border-color .2s,transform .2s;}
        .cl-bscagco-item:hover{border-color:#001F4C;transform:translateY(-3px);}

        .cl-bscagco-mq-head{text-align:center;margin-bottom:28px;}
        .cl-bscagco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px;}
        .cl-bscagco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto;}
        .cl-bscagco-mq-wrap{overflow:hidden;margin:16px 0;}
        .cl-bscagco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-bscagco-scroll 32s linear infinite;}
        .cl-bscagco-mq-wrap:hover .cl-bscagco-mq-track{animation-play-state:paused;}
        @keyframes cl-bscagco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-bscagco-mq-chip{min-width:170px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px;}

        .cl-bscagco-note{text-align:center;font-size:.78rem;color:#9aa4b8;margin-top:24px;}

        @media(max-width:900px){.cl-bscagco-grid{grid-template-columns:repeat(3,1fr)}.cl-bscagco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.cl-bscagco-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-bscagco-sec{padding:70px 5%}}
      `}}/>
      <section className="cl-bscagco-sec" id="careers">
        <div className="cl-bscagco-wrap">
          <div className="cl-bscagco-head">
            <div className="cl-bscagco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-bscagco-h2">Where This B.Sc.<br/><em>Can Take You</em></h2>
            <p className="cl-bscagco-sub">From government agriculture departments to agribusiness and research — this degree opens routes across the sector.</p>
          </div>

          <div className="cl-bscagco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-bscagco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-bscagco-ach-val">{a.val}</div>
                <div className="cl-bscagco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-bscagco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-bscagco-item">{r}</div>
            ))}
          </div>

          <HiringPartnerBtech/>
                                        
          <BtechStudents/>
        </div>
      </section>
    </>
  );
}
