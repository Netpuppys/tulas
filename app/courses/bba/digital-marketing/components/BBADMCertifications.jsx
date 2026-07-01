'use client';

const CERTS = [
  { name: 'Google Digital Marketing',               meta: 'Fundamentals & strategy'        },
  { name: 'Google Analytics',                       meta: 'Data & campaign analytics'       },
  { name: 'Meta Certified Digital Marketing Associate', meta: 'Facebook & Instagram ads'   },
  { name: 'HubSpot Content Marketing',              meta: 'Content strategy & SEO'          },
  { name: 'HubSpot Inbound Marketing',              meta: 'Lead generation & CRM'           },
  { name: 'Semrush SEO',                            meta: 'Search engine optimisation'      },
  { name: 'Shopify Foundations',                    meta: 'E-commerce management'           },
];

const HANDS_ON = [
  'Live Client Projects',
  'Brand Audits',
  'Marketing Simulations',
  'AI Campaign Development',
  'Business Case Studies',
  'Startup Challenges',
  'Marketing Competitions',
  'Digital Portfolio Development',
];

export default function BBADMCertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmf-sec{padding:110px 7%;background:#fff}
        .cl-dmf-wrap{max-width:1280px;margin:0 auto}

        .cl-dmf-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-dmf-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-dmf-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-dmf-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-dmf-h2 em{font-style:normal;color:#DF5400}
        .cl-dmf-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-dmf-sub{text-align:center;font-size:1.3rem;font-weight:800;margin-bottom:32px;color:#001F4C}

        .cl-dmf-cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-dmf-feat{grid-column:span 2;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;border-radius:16px;padding:28px 22px}
        .cl-dmf-feat .pill{display:inline-block;width:fit-content;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7}
        .cl-dmf-feat .ttl{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-dmf-feat .desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-dmf-card{position:relative;overflow:hidden;border-radius:16px;padding:28px 22px;transition:all .35s;border:2px solid #e0e4ed;background:#fff}
        .cl-dmf-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);transform:scaleX(0);transform-origin:left;transition:transform .35s}
        .cl-dmf-card:hover{border-color:#DF5400;transform:translateY(-6px);box-shadow:0 14px 34px rgba(223,84,0,.14)}
        .cl-dmf-card:hover::before{transform:scaleX(1)}
        .cl-dmf-card .name{font-weight:800;font-size:.98rem;margin-bottom:6px;color:#001F4C}
        .cl-dmf-card .meta{font-size:.82rem;color:#5a6a8a}

        /* 4-col hands-on grid */
        .cl-dmf-hands-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-dmf-hand{display:flex;align-items:center;gap:12px;border-radius:14px;padding:20px 20px;font-weight:700;font-size:.9rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .3s;cursor:default}
        .cl-dmf-hand:hover{border-color:#DF5400;transform:translateY(-3px);box-shadow:0 10px 26px rgba(0,31,76,.08)}
        .cl-dmf-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;color:#DF5400;line-height:1;flex-shrink:0}

        .cl-dmf-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-dmf-intern strong{color:#001F4C}

        @media(max-width:1200px){
          .cl-dmf-cert-grid{grid-template-columns:repeat(2,1fr)}
          .cl-dmf-hands-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-dmf-sec{padding:70px 5%}
          .cl-dmf-cert-grid,.cl-dmf-hands-grid{grid-template-columns:1fr}
          .cl-dmf-feat{grid-column:span 1}
        }
      `}} />

      <section className="cl-dmf-sec" id="certs">
        <div className="cl-dmf-wrap">

          <div className="cl-dmf-head">
            <div className="cl-dmf-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-dmf-h2">Certifications,<em>&amp; Projects</em></h2>
            <p>Beyond the degree — globally recognised certifications, real campaigns, and continuous industry exposure that make graduates job-ready from day one.</p>
          </div>

          <div className="cl-dmf-sub">Industry Certifications</div>
          <div className="cl-dmf-cert-grid">
            <div className="cl-dmf-feat">
              <span className="pill">Flagship Association</span>
              <div className="ttl">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="desc">Enhance your business and digital marketing expertise through industry-recognised certifications backed by IIT Kanpur's Electronics &amp; ICT Academy.</div>
            </div>
            {CERTS.map((c) => (
              <div className="cl-dmf-card" key={c.name}>
                <div className="name">{c.name}</div>
                <div className="meta">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="cl-dmf-sub">Hands-On Learning</div>
          <div className="cl-dmf-hands-grid">
            {HANDS_ON.map((item, i) => (
              <div className="cl-dmf-hand" key={item}>
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
