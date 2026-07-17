'use client';

export default function ContactSafety() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ctsf-sec{background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);padding:90px 7%;position:relative;overflow:hidden;}
        .cl-ctsf-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 80% 50%,rgba(223,84,0,.18) 0%,transparent 60%);pointer-events:none;}
        .cl-ctsf-sec::after{content:'';position:absolute;inset:0;opacity:.04;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;pointer-events:none;}
        .cl-ctsf-wrap{max-width:1280px;margin:0 auto;position:relative;z-index:2;}

        .cl-ctsf-head{text-align:center;max-width:720px;margin:0 auto 56px;}
        .cl-ctsf-eyebrow{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#FFF3D7;margin-bottom:20px;}
        .cl-ctsf-eyebrow .bar{display:block;width:34px;height:3px;border-radius:2px;background:#FFF3D7;flex-shrink:0;}
        .cl-ctsf-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,4rem);color:#fff;line-height:.95;margin-bottom:16px;}
        .cl-ctsf-h2 em{font-style:normal;color:#FFF3D7;}
        .cl-ctsf-sub{font-size:1rem;line-height:1.8;color:rgba(255,255,255,.72);}

        .cl-ctsf-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
        .cl-ctsf-card{border-radius:22px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(12px);}
        .cl-ctsf-card-top{padding:28px 32px 0;}
        .cl-ctsf-card-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:20px;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;}
        .cl-ctsf-card-badge.anti{background:rgba(223,84,0,.22);color:#DF5400;border:1px solid rgba(223,84,0,.35);}
        .cl-ctsf-card-badge.women{background:rgba(255,243,215,.15);color:#FFF3D7;border:1px solid rgba(255,243,215,.25);}
        .cl-ctsf-card-title{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;color:#fff;line-height:1;margin-bottom:6px;}
        .cl-ctsf-card-desc{font-size:.88rem;color:rgba(255,255,255,.65);line-height:1.6;margin-bottom:24px;}
        .cl-ctsf-divider{height:1px;background:rgba(255,255,255,.1);margin:0 32px;}
        .cl-ctsf-card-lines{padding:24px 32px 28px;display:flex;flex-direction:column;gap:18px;}
        .cl-ctsf-line{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}
        .cl-ctsf-line-label{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.55);}
        .cl-ctsf-line-val{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:#FFF3D7;letter-spacing:.04em;line-height:1;text-decoration:none;transition:color .2s;}
        .cl-ctsf-line-val:hover{color:#DF5400;}
        .cl-ctsf-line-val.email{font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:700;color:#FFF3D7;letter-spacing:0;}
        .cl-ctsf-badge-247{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px;font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;background:rgba(223,84,0,.25);color:#DF5400;border:1px solid rgba(223,84,0,.4);}
        .cl-ctsf-note{text-align:center;margin-top:44px;font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.8;}
        .cl-ctsf-note a{color:#FFF3D7;font-weight:700;text-decoration:underline;}

        @media(max-width:760px){.cl-ctsf-grid{grid-template-columns:1fr;}.cl-ctsf-line-val{font-size:1.7rem;}}
        @media(max-width:640px){.cl-ctsf-sec{padding:70px 5%;}.cl-ctsf-card-top,.cl-ctsf-divider,.cl-ctsf-card-lines{padding-left:22px;padding-right:22px;}}
      `}}/>
      <section className="cl-ctsf-sec" id="safety-helplines">
        <div className="cl-ctsf-wrap">

          <div className="cl-ctsf-head">
            <div className="cl-ctsf-eyebrow"><span className="bar"/>Student Safety</div>
            <h2 className="cl-ctsf-h2">Safety &amp; Support<br/><em>Helplines</em></h2>
            <p className="cl-ctsf-sub">Government-mandated 24×7 helplines for student safety and welfare. Save these numbers before you need them.</p>
          </div>

          <div className="cl-ctsf-grid">

            {/* Anti-Ragging Card */}
            <div className="cl-ctsf-card">
              <div className="cl-ctsf-card-top">
                <div className="cl-ctsf-card-badge anti">🛡️ UGC Mandated</div>
                <div className="cl-ctsf-card-title">Anti-Ragging Helpline</div>
                <div className="cl-ctsf-card-desc">If you or someone you know is facing ragging, reach out immediately. All calls are confidential.</div>
              </div>
              <div className="cl-ctsf-divider"/>
              <div className="cl-ctsf-card-lines">
                <div className="cl-ctsf-line">
                  <div>
                    <div className="cl-ctsf-line-label">24×7 Toll-Free Helpline</div>
                    <a href="tel:1800-180-5522" className="cl-ctsf-line-val">1800-180-5522</a>
                  </div>
                  <span className="cl-ctsf-badge-247">24×7 Free</span>
                </div>
                <div className="cl-ctsf-line">
                  <div>
                    <div className="cl-ctsf-line-label">Email Helpline</div>
                    <a href="mailto:helpline@antiragging.in" className="cl-ctsf-line-val email">helpline@antiragging.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Safety Card */}
            <div className="cl-ctsf-card">
              <div className="cl-ctsf-card-top">
                <div className="cl-ctsf-card-badge women">👩‍⚖️ Govt. of India</div>
                <div className="cl-ctsf-card-title">Women's Safety Helpline</div>
                <div className="cl-ctsf-card-desc">Dedicated government helplines for women's safety, support, and emergency police assistance.</div>
              </div>
              <div className="cl-ctsf-divider"/>
              <div className="cl-ctsf-card-lines">
                <div className="cl-ctsf-line">
                  <div>
                    <div className="cl-ctsf-line-label">Women's Helpline (24×7)</div>
                    <a href="tel:181" className="cl-ctsf-line-val">181</a>
                  </div>
                  <span className="cl-ctsf-badge-247">24×7</span>
                </div>
                <div className="cl-ctsf-line">
                  <div>
                    <div className="cl-ctsf-line-label">Women's Police Helpline</div>
                    <a href="tel:1091" className="cl-ctsf-line-val">1091</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <p className="cl-ctsf-note">
            For campus-specific safety concerns, contact the institute's Internal Complaints Committee (ICC) or reach us at <a href="mailto:info@tulas.edu.in">info@tulas.edu.in</a>
          </p>

        </div>
      </section>
    </>
  );
}
