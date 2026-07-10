'use client';
import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";

const ROLES = [
  { title:'International Business Manager', range:'₹9–20 LPA', desc:'Drive global market-entry, partnerships, and cross-border revenue for manufacturing, trading houses, or multinational corporations.' },
  { title:'Export-Import Manager',          range:'₹8–18 LPA', desc:'Manage export documentation, customs compliance, freight coordination, and international buyer-seller relationships.' },
  { title:'Global Trade Analyst',           range:'₹7–15 LPA', desc:'Analyse trade data, supply chain performance, and market intelligence to support global business decisions.' },
  { title:'Supply Chain Manager',           range:'₹8–18 LPA', desc:'Oversee cross-border logistics, vendor management, and global supply chain optimisation for large-scale operations.' },
  { title:'Trade Compliance Officer',       range:'₹7–16 LPA', desc:'Ensure import-export compliance, customs documentation accuracy, and trade regulation adherence across international markets.' },
  { title:'Global Market-Entry Consultant', range:'₹9–20 LPA', desc:'Advise organisations on international expansion strategy, market research, and cross-border regulatory navigation.' },
];

const ACH = [
  { val:'₹20', label:'LPA Indicative Top Salary',   dark:false },
  { val:'3',   label:'Career Pathways Built In',     dark:true  },
  { val:'9',   label:'Industry Certifications',      dark:true  },
  { val:'2028',label:'First Graduating Batch',       dark:true  },
];

const MARQUEE_ITEMS = [
  'Manufacturing Exporters','Logistics & Freight Firms','Trading Houses',
  'Global Consulting Firms','Shipping & Freight Forwarding','Import-Export Agencies',
  'Multinational Corporations','Trade Finance Institutions',
];

export default function MBAIBCareerOutcomes() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaibco-sec{background:#f8f9fc;padding:110px 7%}
        .cl-mbaibco-wrap{max-width:1280px;margin:0 auto}

        .cl-mbaibco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mbaibco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mbaibco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mbaibco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mbaibco-h2 em{font-style:normal;color:#DF5400}
        .cl-mbaibco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mbaibco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-mbaibco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-mbaibco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mbaibco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-mbaibco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-mbaibco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-mbaibco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-mbaibco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-mbaibco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-mbaibco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-mbaibco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-mbaibco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-mbaibco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-mbaibco-mq-wrap{overflow:hidden;position:relative}
        .cl-mbaibco-mq-head{text-align:center;margin-bottom:28px}
        .cl-mbaibco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-mbaibco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:600px;margin:0 auto}
        .cl-mbaibco-mq-track{display:flex;gap:16px;animation:cl-mbaibco-scroll 28s linear infinite;width:max-content}
        .cl-mbaibco-mq-wrap:hover .cl-mbaibco-mq-track{animation-play-state:paused}
        @keyframes cl-mbaibco-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .cl-mbaibco-mq-item{display:flex;align-items:center;gap:12px;padding:14px 24px;border-radius:40px;background:#fff;border:1.5px solid #e0e4ed;white-space:nowrap;font-weight:700;font-size:.92rem;color:#001F4C}
        .cl-mbaibco-mq-dot{width:8px;height:8px;border-radius:50%;background:#DF5400;flex-shrink:0}

        @media(max-width:900px){.cl-mbaibco-grid{grid-template-columns:1fr 1fr}.cl-mbaibco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mbaibco-sec{padding:70px 5%}.cl-mbaibco-grid{grid-template-columns:1fr}.cl-mbaibco-ach{grid-template-columns:1fr 1fr}}
      `}}/>
      <section className="cl-mbaibco-sec" id="careers">
        <div className="cl-mbaibco-wrap">
          <div className="cl-mbaibco-head">
            <div className="cl-mbaibco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mbaibco-h2">Where Graduates<br/><em>Are Headed</em></h2>
            <p className="cl-mbaibco-sub">From export-import operations to global consulting, MBA International Business graduates step into cross-border leadership roles across the world's fastest-growing industries.</p>
          </div>

          <div className="cl-mbaibco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mbaibco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-mbaibco-ach-val">{a.val}</div>
                <div className="cl-mbaibco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-mbaibco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mbaibco-card">
                <div className="cl-mbaibco-card-top">
                  <div className="cl-mbaibco-card-title">{r.title}</div>
                  <span className="cl-mbaibco-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                                                            
                                        <BtechStudents/>

          {/* <div className="cl-mbaibco-mq-wrap">
            <div className="cl-mbaibco-mq-head">
              <h3>Where Graduates Could Be Recruited</h3>
              <p>Indicative hiring sectors for international business talent — manufacturing exporters, logistics, trading houses, and consulting.</p>
            </div>
            <div className="cl-mbaibco-mq-track">
              {items.map((item,i)=>(
                <div key={i} className="cl-mbaibco-mq-item">
                  <span className="cl-mbaibco-mq-dot"/>{item}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
