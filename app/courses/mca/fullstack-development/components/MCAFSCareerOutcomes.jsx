'use client';

import BtechStudents from "@/app/courses/btech/components/BtechStudents";
import HiringPartnerBtech from "@/app/courses/btech/components/HiringPartnerBtech";
const ROLES = [
  { title:'Full Stack Developer',           range:'₹4–12 LPA',    desc:'Build and maintain end-to-end web applications spanning frontend, backend, and database layers for product companies and startups.' },
  { title:'Backend Engineer',               range:'₹5–14 LPA',    desc:'Design server-side systems, RESTful APIs, and microservices for high-performance, scalable software applications.' },
  { title:'Cloud Solutions Architect',      range:'₹8–20 LPA',    desc:'Design and deploy cloud-native infrastructure and managed services using AWS, Azure, or GCP platforms.' },
  { title:'DevOps Engineer',                range:'₹6–15 LPA',    desc:'Automate CI/CD pipelines, containerize workloads using Docker/Kubernetes, and manage enterprise production deployments.' },
  { title:'AI-Integrated App Developer',    range:'₹6–16 LPA',    desc:'Build intelligent full stack applications that incorporate machine learning models and AI capabilities into production systems.' },
  { title:'Software Architect',             range:'₹10–22 LPA',   desc:'Design large-scale software systems with a focus on scalability, resilience, and engineering best practices.' },
  { title:'Database Administrator',         range:'₹4–10 LPA',    desc:'Manage relational and NoSQL databases, optimise queries, and ensure data integrity, availability, and security.' },
  { title:'Technology Entrepreneur',        range:'Market-Driven', desc:'Launch technology startups leveraging the Innovation & Entrepreneurship foundation built in the final semester.' },
  { title:'Web Security Specialist',        range:'₹5–14 LPA',    desc:'Protect web applications from threats and vulnerabilities through ethical hacking, penetration testing, and secure coding.' },
];

const ACH = [
  { val:'100%', label:'Placement Assistance',   dark:false },
  { val:'750+', label:'Industry Recruiters',    dark:true  },
  { val:'₹22L', label:'Highest Package',        dark:true  },
  { val:'3+',   label:'Portfolio Projects',     dark:true  },
];

const ROW1 = ['Infosys','TCS','Wipro','HCL Technologies','Accenture','Cognizant','Amazon','Microsoft','Google','Zoho','Freshworks','Tech Mahindra','Capgemini','IBM','Oracle','Infosys','TCS','Wipro','HCL Technologies','Accenture','Cognizant','Amazon','Microsoft','Google','Zoho','Freshworks','Tech Mahindra','Capgemini','IBM','Oracle'];
const ROW2 = ['Razorpay','Swiggy','Zomato','PhonePe','Flipkart','Paytm','Byju\'s','upGrad','Nykaa','Meesho','Ola','Dunzo','CRED','Zepto','Groww','Razorpay','Swiggy','Zomato','PhonePe','Flipkart','Paytm','Byju\'s','upGrad','Nykaa','Meesho','Ola','Dunzo','CRED','Zepto','Groww'];

export default function MCAFSCareerOutcomes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcafsco-sec{background:#f8f9fc;padding:10px 7%}
        .cl-mcafsco-wrap{max-width:1280px;margin:0 auto}

        .cl-mcafsco-head{text-align:center;max-width:860px;margin:0 auto 70px}
        .cl-mcafsco-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-mcafsco-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-mcafsco-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.8rem);line-height:.95;color:#001F4C;margin-bottom:22px}
        .cl-mcafsco-h2 em{font-style:normal;color:#DF5400}
        .cl-mcafsco-sub{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-mcafsco-ach{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px}
        .cl-mcafsco-ach-card{border-radius:18px;padding:32px 24px;text-align:center}
        .cl-mcafsco-ach-card.light{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mcafsco-ach-card.dark{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-mcafsco-ach-val{font-family:'Bebas Neue',sans-serif;font-size:3.4rem;color:#fff;line-height:1;margin-bottom:10px}
        .cl-mcafsco-ach-lbl{font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.75)}

        .cl-mcafsco-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:72px}
        .cl-mcafsco-card{background:#fff;border-radius:16px;padding:28px;border:1px solid #e0e4ed;transition:transform .3s,box-shadow .3s}
        .cl-mcafsco-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,31,76,.1)}
        .cl-mcafsco-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
        .cl-mcafsco-card-title{font-weight:800;font-size:1.1rem;color:#001F4C;line-height:1.3}
        .cl-mcafsco-range{display:inline-block;padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:700;background:#FFF3D7;color:#DF5400;white-space:nowrap;flex-shrink:0;margin-left:12px}
        .cl-mcafsco-card p{font-size:.88rem;line-height:1.7;color:#5a6a8a;margin:0}

        .cl-mcafsco-mq-head{text-align:center;margin-bottom:28px}
        .cl-mcafsco-mq-head h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#001F4C;margin-bottom:8px}
        .cl-mcafsco-mq-head p{font-size:.9rem;color:#5a6a8a;max-width:700px;margin:0 auto}
        .cl-mcafsco-mq-wrap{overflow:hidden;margin:16px 0}
        .cl-mcafsco-mq-track{display:flex;gap:14px;width:max-content;animation:cl-mcafsco-scroll 32s linear infinite}
        .cl-mcafsco-mq-track.rev{animation-direction:reverse}
        .cl-mcafsco-mq-wrap:hover .cl-mcafsco-mq-track{animation-play-state:paused}
        @keyframes cl-mcafsco-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .cl-mcafsco-mq-chip{min-width:190px;height:72px;border-radius:14px;background:#fff;border:1px solid #e0e4ed;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.88rem;color:#001F4C;text-align:center;padding:0 16px}

        @media(max-width:900px){.cl-mcafsco-grid{grid-template-columns:1fr 1fr}.cl-mcafsco-ach{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cl-mcafsco-sec{padding:70px 5%}.cl-mcafsco-grid{grid-template-columns:1fr}}
      `}}/>
      <section className="cl-mcafsco-sec" id="careers">
        <div className="cl-mcafsco-wrap">
          <div className="cl-mcafsco-head">
            <div className="cl-mcafsco-eyebrow"><span className="bar"/>Career Outcomes</div>
            <h2 className="cl-mcafsco-h2">Where This MCA<br/><em>Can Take You</em></h2>
            <p className="cl-mcafsco-sub">From full stack development to cloud architecture and AI integration — an MCA in Full Stack opens roles across every technology sector.</p>
          </div>

          <div className="cl-mcafsco-ach">
            {ACH.map((a,i)=>(
              <div key={i} className={`cl-mcafsco-ach-card ${a.dark?'dark':'light'}`}>
                <div className="cl-mcafsco-ach-val">{a.val}</div>
                <div className="cl-mcafsco-ach-lbl">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="cl-mcafsco-grid">
            {ROLES.map((r,i)=>(
              <div key={i} className="cl-mcafsco-card">
                <div className="cl-mcafsco-card-top">
                  <div className="cl-mcafsco-card-title">{r.title}</div>
                  <span className="cl-mcafsco-range">{r.range}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <HiringPartnerBtech/>
                              
                                      <BtechStudents/>
{/* 
          <div className="cl-mcafsco-mq-head">
            <h3>Where Our Graduates Get Hired</h3>
            <p>Trusted by leading organisations across technology, product, consulting, and emerging tech sectors.</p>
          </div>
          <div className="cl-mcafsco-mq-wrap">
            <div className="cl-mcafsco-mq-track">
              {ROW1.map((c,i)=><div key={i} className="cl-mcafsco-mq-chip">{c}</div>)}
            </div>
          </div>
          <div className="cl-mcafsco-mq-wrap">
            <div className="cl-mcafsco-mq-track rev">
              {ROW2.map((c,i)=><div key={i} className="cl-mcafsco-mq-chip">{c}</div>)}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
