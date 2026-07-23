'use client';
import Link from 'next/link';

export default function DiplomaCsECTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dipcse-cta-sec{padding:80px 7%;background:#fff;}
        .cl-dipcse-cta-wrap{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1.15fr;gap:24px;align-items:stretch;}

        .cl-dipcse-cta-batch{background:#001F4C;border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;}
        .cl-dipcse-cta-batch-label{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.6);margin-bottom:8px;}
        .cl-dipcse-cta-batch-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.8rem,2.8vw,2.6rem);color:#fff;line-height:1.05;}
        .cl-dipcse-cta-batch-title em{font-style:normal;color:#FFF3D7;}
        .cl-dipcse-cta-batch-meta{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-dipcse-cta-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}
        .cl-dipcse-cta-batch-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;width:fit-content;}
        .cl-dipcse-cta-batch-btn:hover{transform:translateY(-2px);}

        .cl-dipcse-cta-card{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;position:relative;overflow:hidden;}
        .cl-dipcse-cta-card::before{content:'';position:absolute;top:-40px;right:-40px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.08);}
        .cl-dipcse-cta-card::after{content:'';position:absolute;bottom:-60px;left:-20px;width:160px;height:160px;border-radius:50%;background:rgba(0,0,0,.08);}
        .cl-dipcse-cta-tag{display:inline-block;padding:7px 18px;border-radius:20px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;background:rgba(255,255,255,.2);color:#fff;width:fit-content;}
        .cl-dipcse-cta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4vw,4.2rem);color:#fff;line-height:.95;position:relative;z-index:1;}
        .cl-dipcse-cta-body{font-size:1rem;line-height:1.8;color:rgba(255,255,255,.9);max-width:480px;position:relative;z-index:1;}
        .cl-dipcse-cta-btns{display:flex;gap:14px;flex-wrap:wrap;position:relative;z-index:1;}
        .cl-dipcse-cta-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;background:#fff;color:#DF5400;box-shadow:0 4px 16px rgba(0,0,0,.15);transition:transform .25s;text-decoration:none;}
        .cl-dipcse-cta-btn-solid:hover{transform:translateY(-2px);}
        .cl-dipcse-cta-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;border:2px solid rgba(255,255,255,.6);background:transparent;transition:transform .25s;text-decoration:none;}
        .cl-dipcse-cta-btn-outline:hover{transform:translateY(-2px);}

        @media(max-width:860px){.cl-dipcse-cta-wrap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-dipcse-cta-sec{padding:60px 5%}.cl-dipcse-cta-batch,.cl-dipcse-cta-card{padding:36px 28px}}
      `}}/>
      <section className="cl-dipcse-cta-sec" id="cta">
        <div className="cl-dipcse-cta-wrap">

          <div className="cl-dipcse-cta-batch">
            <div>
              <div className="cl-dipcse-cta-batch-label">Admissions Open</div>
              <div className="cl-dipcse-cta-batch-title">Diploma CSE<br/><em>2025–2028</em></div>
            </div>
            <div className="cl-dipcse-cta-batch-meta">
              <span className="cl-dipcse-cta-chip">3-Year Diploma</span>
              <span className="cl-dipcse-cta-chip">Industry Certifications</span>
              <span className="cl-dipcse-cta-chip">IIT Kanpur Association</span>
              <span className="cl-dipcse-cta-chip">100% Placement Support</span>
            </div>
            <Link href="/apply-now" className="cl-dipcse-cta-batch-btn">Apply Now →</Link>
          </div>

          <div className="cl-dipcse-cta-card">
            <span className="cl-dipcse-cta-tag">Start Your Journey</span>
            <h2 className="cl-dipcse-cta-h2">Code It.<br/>Build It.<br/>Launch It.</h2>
            <p className="cl-dipcse-cta-body">Join a diploma programme built for the AI era — IIT Kanpur association, industry certifications, and direct placement support from day one.</p>
            <div className="cl-dipcse-cta-btns">
              <Link href="/apply-now" className="cl-dipcse-cta-btn-solid">Apply Now →</Link>
              <Link href="/contact" className="cl-dipcse-cta-btn-outline">Contact Admissions</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
