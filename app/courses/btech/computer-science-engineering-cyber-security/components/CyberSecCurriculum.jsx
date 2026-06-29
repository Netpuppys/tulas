'use client';

const TECH_PILLS = [
  'Network Security','Ethical Hacking','Penetration Testing','Digital Forensics',
  'Malware Analysis','Cryptography','Cloud Security','SIEM & SOC',
  'Incident Response','Threat Intelligence','DevSecOps','Secure Coding',
];

const ROADMAP = [
  { num: '01', title: 'Fundamentals', desc: 'Networking, operating systems, Linux and programming foundations.' },
  { num: '02', title: 'Defensive Security', desc: 'Network defense, cryptography, security operations and monitoring.' },
  { num: '03', title: 'Offensive Security', desc: 'Ethical hacking, penetration testing, exploitation and red teaming.' },
  { num: '04', title: 'Frontier', desc: 'Cloud security, DevSecOps, threat intelligence and emerging specializations.' },
];

export default function CyberSecCurriculum() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cyc-sec{position:relative;overflow:hidden;padding:110px 7%;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%)}
        .cl-cyc-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(223,84,0,.16) 0%,transparent 55%);pointer-events:none}
        .cl-cyc-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto}

        /* split */
        .cl-cyc-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:70px}
        .cl-cyc-img{position:relative;border-radius:22px;overflow:hidden;height:460px;box-shadow:0 24px 60px rgba(0,0,0,.4);background:linear-gradient(135deg,#001F4C 0%,#00152e 60%,#0a2d5c 100%);display:flex;align-items:center;justify-content:center}
        .cl-cyc-img svg{width:88px;height:88px;color:rgba(255,243,215,.85);position:relative;z-index:2}
        .cl-cyc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,31,76,.4),rgba(223,84,0,.3))}
        .cl-cyc-img-tag{position:absolute;bottom:18px;left:0;right:0;text-align:center;z-index:3;color:rgba(255,255,255,.55);font-size:.7rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase}
        .cl-cyc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px}
        .cl-cyc-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0}
        .cl-cyc-h2{margin-bottom:22px;line-height:1;font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4.5vw,4.2rem);color:#fff}
        .cl-cyc-h2 em{font-style:normal;color:#FFF3D7}
        .cl-cyc-copy p{font-size:1.05rem;line-height:1.9;margin-bottom:20px;color:rgba(255,255,255,.82)}
        .cl-cyc-pills{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
        .cl-cyc-pill{padding:10px 18px;border-radius:30px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);transition:all .25s;cursor:default}
        .cl-cyc-pill:hover{background:rgba(223,84,0,.35);border-color:#DF5400}

        /* roadmap */
        .cl-cyc-roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative}
        .cl-cyc-step{position:relative;padding:0 18px;text-align:center}
        .cl-cyc-step::before{content:'';position:absolute;top:27px;left:-50%;width:100%;height:3px;background:rgba(255,255,255,.2);z-index:1}
        .cl-cyc-step:first-child::before{display:none}
        .cl-cyc-num{display:flex;align-items:center;justify-content:center;margin:0 auto 20px;position:relative;z-index:2;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:#fff;box-shadow:0 8px 24px rgba(223,84,0,.4)}
        .cl-cyc-step h4{font-size:1.05rem;font-weight:800;color:#fff;margin-bottom:8px}
        .cl-cyc-step p{font-size:.85rem;line-height:1.6;color:rgba(255,255,255,.7)}

        @media(max-width:968px){
          .cl-cyc-split{grid-template-columns:1fr;gap:40px}
          .cl-cyc-roadmap{grid-template-columns:repeat(2,1fr);gap:30px}
          .cl-cyc-step::before{display:none}
        }
        @media(max-width:640px){
          .cl-cyc-sec{padding:70px 5%}
          .cl-cyc-roadmap{grid-template-columns:1fr}
        }
      `}} />

      <section className="cl-cyc-sec" id="curriculum">
        <div className="cl-cyc-inner">

          <div className="cl-cyc-split">
            <div className="cl-cyo-img">
                <img src="/courses/btech/computer-science-engineering-cyber-security/contentRight.webp" alt="Cyber Security students at Tulas" className="object-top"/>
              </div>
            <div className="cl-cyc-copy">
              <div className="cl-cyc-eyebrow"><span className="bar" />The Differentiator</div>
              <h2 className="cl-cyc-h2">A Hands-On<br /><em>Security Curriculum</em></h2>
              <p>At Tulas, cyber security isn't theory on a slide — it's practiced in live labs. Students move from networking and systems fundamentals to advanced offensive and defensive operations, graduating fluent in the tools that protect modern organizations.</p>
              <div className="cl-cyc-pills">
                {TECH_PILLS.map((p) => <span className="cl-cyc-pill" key={p}>{p}</span>)}
              </div>
            </div>
          </div>

          <div className="cl-cyc-roadmap">
            {ROADMAP.map((s) => (
              <div className="cl-cyc-step" key={s.num}>
                <div className="cl-cyc-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
