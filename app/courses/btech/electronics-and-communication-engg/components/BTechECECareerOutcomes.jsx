'use client';

import BtechStudents from "../../components/BtechStudents";
import HiringPartnerBtech from "../../components/HiringPartnerBtech";

const ROLES = [
  { title:'Embedded Systems Engineer', range:'₹4–8 LPA', desc:'Design and develop embedded firmware for ARM microcontrollers, RTOS environments, and real-time industrial control systems across automotive and consumer electronics sectors.' },
  { title:'VLSI Design Engineer',      range:'₹5–10 LPA', desc:'Design, simulate, and verify digital and analog integrated circuits using VHDL/Verilog, FPGA platforms, and EDA tools in semiconductor companies.' },
  { title:'Telecom Engineer',          range:'₹4–8 LPA', desc:'Plan, deploy, and optimise 5G/6G wireless networks, VoIP systems, and RF infrastructure for telecom operators and network equipment manufacturers.' },
  { title:'IoT Developer',             range:'₹4–9 LPA', desc:'Build end-to-end IoT solutions — from sensor integration and edge computing to cloud connectivity and intelligent data analytics platforms.' },
  { title:'Network Engineer',          range:'₹3–7 LPA', desc:'Design and manage enterprise and telecom networks using Cisco technologies, network security protocols, and cloud-based network infrastructure.' },
  { title:'Signal Processing Engineer',range:'₹4–9 LPA', desc:'Develop DSP algorithms, AI-assisted signal processing systems, and MATLAB/Python-based solutions for communication, radar, and imaging applications.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',   dark:false },
  { val:'750+', label:'Recruiters',             dark:true  },
  { val:'100%', label:'Paid Internships',       dark:true  },
  { val:'2006', label:'Department Established', dark:true  },
];

const ROW1 = ['Qualcomm','Samsung','Intel','TCS','Infosys','Wipro','HCL','Tech Mahindra','Ericsson','Nokia','Motorola','Cisco','ISRO','DRDO','Bharat Electronics','BSNL'];
const ROW2 = ['Accenture','Capgemini','Cognizant','L&T Technology','NXP Semiconductors','Texas Instruments','STMicroelectronics','Siemens','Honeywell','Bosch','ABB','Schneider Electric','Reliance Jio','Airtel','Vodafone','IBM'];

export default function BTechECECareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechececo-sec{background:#f8f9fc;padding:0px 7%}
        .cl-btechececo-wrap{max-width:1280px;margin:0 auto}

        .cl-btechececo-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-btechececo-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-btechececo-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-btechececo-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-btechececo-h2 em{font-style:normal;color:#DF5400}
        .cl-btechececo-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-btechececo-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-btechececo-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-btechececo-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btechececo-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-btechececo-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-btechececo-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-btechececo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-btechececo-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-btechececo-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-btechececo-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-btechececo-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-btechececo-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-btechececo-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-btechececo-mq-head{text-align:center;margin-bottom:28px}
        .cl-btechececo-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-btechececo-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-btechececo-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-btechececo-mq-track{display:flex;gap:14px;width:max-content;animation:cl-btechececo-scroll 32s linear infinite}
        .cl-btechececo-mq-track.rev{animation-direction:reverse}
        .cl-btechececo-mq-wrap:hover .cl-btechececo-mq-track{animation-play-state:paused}
        @keyframes cl-btechececo-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-btechececo-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-btechececo-grid{grid-template-columns:1fr 1fr}.cl-btechececo-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-btechececo-sec{padding:70px 5%}.cl-btechececo-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-btechececo-sec" id="careers">
        <div className="cl-btechececo-wrap">
          <div className="cl-btechececo-head">
            <div className="cl-btechececo-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-btechececo-h2">Where This B.Tech<br/><em>Can Take You</em></h2>
            <p className="cl-btechececo-sub">From embedded systems and VLSI to 5G networks and IoT — an ECE degree opens doors across every connected technology sector.</p>
          </div>

          <div className="cl-btechececo-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-btechececo-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-btechececo-ach-val">{a.val}</div>
                <div className="cl-btechececo-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-btechececo-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-btechececo-card">
                <div className="cl-btechececo-card-top">
                  <div className="cl-btechececo-card-title">{r.title}</div>
                  <span className="cl-btechececo-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
          <HiringPartnerBtech/>
                              
                                      <BtechStudents/>

          {/* <div className="cl-btechececo-mq-head">
            <h3>Where ECE Graduates Are Hired</h3>
            <p>Trusted by leading organisations across telecom, semiconductors, embedded systems, and emerging technology.</p>
          </div>
          <div className="cl-btechececo-mq-wrap">
            <div className="cl-btechececo-mq-track">
              {[...ROW1,...ROW1].map((c,i)=><div key={i} className="cl-btechececo-mq-chip">{c}</div>)}
            </div>
          </div>
          <div className="cl-btechececo-mq-wrap">
            <div className="cl-btechececo-mq-track rev">
              {[...ROW2,...ROW2].map((c,i)=><div key={i} className="cl-btechececo-mq-chip">{c}</div>)}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
