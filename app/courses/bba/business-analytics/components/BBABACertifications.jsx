'use client';

const CERTS = [
  { name: 'Google Digital Marketing',               meta: 'Digital Marketing Mastery'        },
  { name: 'Google Analytics',                       meta: 'Data-Driven Decision Making'      },
  { name: 'Meta Blueprint',                         meta: 'Social Media Expertise'           },
  { name: 'HubSpot Content Marketing',              meta: 'Content Strategy Excellence'      },
  { name: 'HubSpot Inbound Marketing',              meta: 'Inbound Growth Strategies'        },
  { name: 'Semrush SEO',                            meta: 'Advanced Search Optimization'     },
  { name: 'Shopify Foundations',                    meta: 'E-Commerce Fundamentals'          },
];

const HANDS_ON = [
  'Live Business Analytics Projects',
  'Business Dashboards',
  'Industry Case Studies',
  'AI Business Simulations',
  'Data Visualization Challenges',
  'Business Consulting Projects',
  'Analytics Competitions',
  'Professional Portfolio Development',
];

export default function BBABACertifications() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-baf-sec{padding:110px 7%;background:#fff}
        .cl-baf-wrap{max-width:1280px;margin:0 auto}

        .cl-baf-head{text-align:center;max-width:880px;margin:0 auto 70px}
        .cl-baf-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#DF5400;margin-bottom:20px}
        .cl-baf-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#DF5400;flex-shrink:0}
        .cl-baf-h2{margin-bottom:22px;line-height:.95;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#001F4C}
        .cl-baf-h2 em{font-style:normal;color:#DF5400}
        .cl-baf-head p{font-size:1.08rem;line-height:1.9;color:#5a6a8a}

        .cl-baf-sub{text-align:center;font-size:1.3rem;font-weight:800;margin-bottom:32px;color:#001F4C}

        .cl-baf-cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-baf-feat{grid-column:span 2;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;border-radius:16px;padding:28px 22px}
        .cl-baf-feat .pill{display:inline-block;width:fit-content;padding:5px 14px;border-radius:20px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;background:rgba(255,243,215,.2);color:#FFF3D7}
        .cl-baf-feat .ttl{font-weight:800;font-size:1.3rem;color:#fff;margin-bottom:6px}
        .cl-baf-feat .desc{font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.8)}
        .cl-baf-card{position:relative;overflow:hidden;border-radius:16px;padding:28px 22px;transition:all .35s;border:2px solid #e0e4ed;background:#fff}
        .cl-baf-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);transform:scaleX(0);transform-origin:left;transition:transform .35s}
        .cl-baf-card:hover{border-color:#DF5400;transform:translateY(-6px);box-shadow:0 14px 34px rgba(223,84,0,.14)}
        .cl-baf-card:hover::before{transform:scaleX(1)}
        .cl-baf-card .name{font-weight:800;font-size:.98rem;margin-bottom:6px;color:#001F4C}
        .cl-baf-card .meta{font-size:.82rem;color:#5a6a8a}

        .cl-baf-hands-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:60px}
        .cl-baf-hand{display:flex;align-items:center;gap:12px;border-radius:14px;padding:20px 20px;font-weight:700;font-size:.9rem;background:#f8f9fc;border:1.5px solid #e0e4ed;color:#001F4C;transition:all .3s;cursor:default}
        .cl-baf-hand:hover{border-color:#DF5400;transform:translateY(-3px);box-shadow:0 10px 26px rgba(0,31,76,.08)}
        .cl-baf-hand .n{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;color:#DF5400;line-height:1;flex-shrink:0}

        .cl-baf-intern{text-align:center;max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.9;color:#5a6a8a}
        .cl-baf-intern strong{color:#001F4C}

        @media(max-width:1200px){
          .cl-baf-cert-grid{grid-template-columns:repeat(2,1fr)}
          .cl-baf-hands-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .cl-baf-sec{padding:70px 5%}
          .cl-baf-cert-grid,.cl-baf-hands-grid{grid-template-columns:1fr}
          .cl-baf-feat{grid-column:span 1}
        }
      `}} />

      <section className="cl-baf-sec" id="certs">
        <div className="cl-baf-wrap">

          <div className="cl-baf-head">
            <div className="cl-baf-eyebrow"><span className="bar" />Practical Learning</div>
            <h2 className="cl-baf-h2">Certifications <em>&amp; Projects</em></h2>
            <p>Beyond the degree — globally recognised certifications, real analytics projects, and continuous industry exposure that make graduates job-ready from day one.</p>
          </div>

          <div className="cl-baf-sub">Industry Certifications</div>
          <div className="cl-baf-cert-grid">
            <div className="cl-baf-feat">
              <span className="pill">Flagship Association</span>
              <div className="ttl">IIT Kanpur E&amp;ICT Academy Certifications</div>
              <div className="desc">Strengthen your analytical and business decision-making skills through globally recognised industry certifications integrated into the curriculum.</div>
            </div>
            {CERTS.map((c) => (
              <div className="cl-baf-card" key={c.name}>
                <div className="name">{c.name}</div>
                <div className="meta">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="cl-baf-sub">Hands-On Learning</div>
          <div className="cl-baf-hands-grid">
            {HANDS_ON.map((item, i) => (
              <div className="cl-baf-hand" key={item}>
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
