'use client';

const CERTS = [
  { name: 'AWS',              meta: 'Data & ML certifications'    },
  { name: 'Microsoft',        meta: 'Azure Data & AI tracks'      },
  { name: 'Google',           meta: 'Data Analytics & AI'         },
  { name: 'NVIDIA',           meta: 'Deep learning & AI'          },
  { name: 'Tableau / Power BI', meta: 'Visualization certifications' },
  { name: 'Python',           meta: 'Programming certifications'  },
];

const HANDS_ON = [
  'Live Data Projects',
  'Hackathons',
  'Kaggle Challenges',
  'Research Projects',
  'Capstone Projects',
  'Datathons',
];

export default function DSCertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dsf-sec{padding:110px 7%;background:#fff}
        .cl-dsf-wrap{max-width:1280px;margin:0 auto}

        .cl-dsf-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dsf-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dsf-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dsf-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-dsf-h2 em{font-style:normal;color:#DF5400}
        .cl-dsf-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-dsf-sub{text-align:center;font-size:1.3rem;font-weight:800;margin-bottom:32px;color:#001F4C}

        .cl-dsf-cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-dsf-feat{grid-column:span 2;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;border-radius:16px;padding:28px 22px}
        .cl-dsf-feat .pill{display:inline-block;width:fit-content;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7}
        .cl-dsf-feat .ttl{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-dsf-feat .desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-dsf-card{position:relative;overflow:hidden;border-radius:16px;padding:28px 22px;transition:all .35s;border:2px solid #e0e4ed;background:#fff}
        .cl-dsf-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);transform:scaleX(0);transform-origin:left;transition:transform .35s}
        .cl-dsf-card:hover{border-color:#DF5400;transform:translateY(-6px);box-shadow:0 14px 34px rgba(223,84,0,.14)}
        .cl-dsf-card:hover::before{transform:scaleX(1)}
        .cl-dsf-card .name{font-weight:800;font-size:1.02rem;margin-bottom:6px;color:#001F4C}
        .cl-dsf-card .meta{font-size:.82rem;color:#5a6a8a}

        .cl-dsf-hands-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:60px}
        .cl-dsf-hand{display:flex;align-items:center;gap:14px;border-radius:14px;padding:22px 24px;font-weight:700;font-size:1rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .3s;cursor:default}
        .cl-dsf-hand:hover{border-color:#DF5400;transform:translateY(-3px);box-shadow:0 10px 26px rgba(0,31,76,.08)}
        .cl-dsf-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#DF5400;line-height:1;flex-shrink:0}

        .cl-dsf-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-dsf-intern strong{color:#001F4C}

        @media(max-width:1200px){
          .cl-dsf-cert-grid{grid-template-columns:repeat(2,1fr)}
          .cl-dsf-hands-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-dsf-sec{padding:70px 5%}
          .cl-dsf-cert-grid,.cl-dsf-hands-grid{grid-template-columns:1fr}
          .cl-dsf-feat{grid-column:span 1}
        }
      `}} />

      <section className="cl-dsf-sec" id="certs">
        <div className="cl-dsf-wrap">

          <div className="cl-dsf-head">
            <div className="cl-dsf-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-dsf-h2">Certifications <em>&amp; Projects</em></h2>
            <p>Beyond the degree — globally recognized certifications, real projects, and continuous industry exposure that make graduates job-ready.</p>
          </div>

          <div className="cl-dsf-sub">Industry Certifications</div>
          <div className="cl-dsf-cert-grid">
            <div className="cl-dsf-feat">
              <span className="pill">Flagship Association</span>
              <div className="ttl">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="desc">Premier certifications backed by IIT Kanpur's Electronics &amp; ICT Academy — adding national credibility to your data science skill set.</div>
            </div>
            {CERTS.map((c) => (
              <div className="cl-dsf-card" key={c.name}>
                <div className="name">{c.name}</div>
                <div className="meta">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="cl-dsf-sub">Hands-On Learning</div>
          <div className="cl-dsf-hands-grid">
            {HANDS_ON.map((item, i) => (
              <div className="cl-dsf-hand" key={item}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </>
  );
}
