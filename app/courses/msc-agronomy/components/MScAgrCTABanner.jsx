'use client';
import Link from 'next/link';

export default function MScAgrCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagrcta-sec{padding:80px 7%;background:#f8f9fc;}
        .cl-mscagrcta-wrap{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1.15fr;gap:24px;align-items:stretch;}

        /* Left — navy batch card */
        .cl-mscagrcta-batch{background:#001F4C;border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;}
        .cl-mscagrcta-batch-label{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.6);margin-bottom:8px;}
        .cl-mscagrcta-batch-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.2vw,3rem);color:#fff;line-height:1.05;}
        .cl-mscagrcta-batch-title em{font-style:normal;color:#FFF3D7;}
        .cl-mscagrcta-batch-meta{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mscagrcta-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}
        .cl-mscagrcta-batch-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;width:fit-content;}
        .cl-mscagrcta-batch-btn:hover{transform:translateY(-2px);}

        /* Right — orange gradient card */
        .cl-mscagrcta-cta{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;position:relative;overflow:hidden;}
        .cl-mscagrcta-cta::before{content:'';position:absolute;top:-40px;right:-40px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.08);}
        .cl-mscagrcta-cta::after{content:'';position:absolute;bottom:-60px;left:-20px;width:160px;height:160px;border-radius:50%;background:rgba(0,0,0,.08);}
        .cl-mscagrcta-cta-tag{display:inline-block;padding:7px 18px;border-radius:20px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;background:rgba(255,255,255,.2);color:#fff;width:fit-content;}
        .cl-mscagrcta-cta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4vw,4.2rem);color:#fff;line-height:.95;position:relative;z-index:1;}
        .cl-mscagrcta-cta-body{font-size:1rem;line-height:1.8;color:rgba(255,255,255,.9);max-width:480px;position:relative;z-index:1;}
        .cl-mscagrcta-cta-btns{display:flex;gap:14px;flex-wrap:wrap;position:relative;z-index:1;}
        .cl-mscagrcta-cta-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;background:#fff;color:#DF5400;box-shadow:0 4px 16px rgba(0,0,0,.15);transition:transform .25s;text-decoration:none;}
        .cl-mscagrcta-cta-btn-solid:hover{transform:translateY(-2px);}
        .cl-mscagrcta-cta-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;border:2px solid rgba(255,255,255,.6);background:transparent;transition:transform .25s;text-decoration:none;}
        .cl-mscagrcta-cta-btn-outline:hover{transform:translateY(-2px);}

        @media(max-width:860px){.cl-mscagrcta-wrap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mscagrcta-sec{padding:60px 5%}.cl-mscagrcta-batch,.cl-mscagrcta-cta{padding:36px 28px}}
      `}}/>
      <section className="cl-mscagrcta-sec" id="cta">
        <div className="cl-mscagrcta-wrap">

          {/* Batch card */}
          <div className="cl-mscagrcta-batch">
            <div>
              <div className="cl-mscagrcta-batch-label">Admissions Open</div>
              <div className="cl-mscagrcta-batch-title">M.Sc. Agronomy<br/><em>2025–2027</em></div>
            </div>
            <div className="cl-mscagrcta-batch-meta">
              <span className="cl-mscagrcta-chip">2-Year PG Programme</span>
              <span className="cl-mscagrcta-chip">Research-Driven</span>
              <span className="cl-mscagrcta-chip">Field-Based Learning</span>
              <span className="cl-mscagrcta-chip">100% Placement Support</span>
            </div>
            <Link href="/apply-now" className="cl-mscagrcta-batch-btn">Apply Now →</Link>
          </div>

          {/* CTA card */}
          <div className="cl-mscagrcta-cta">
            <span className="cl-mscagrcta-cta-tag">Start Your Journey</span>
            <h2 className="cl-mscagrcta-cta-h2">Research It.<br/>Grow It.<br/>Lead It.</h2>
            <p className="cl-mscagrcta-cta-body">Join a postgraduate programme designed to develop agricultural scientists, field researchers, and industry leaders — with real-world exposure from day one.</p>
            <div className="cl-mscagrcta-cta-btns">
              <Link href="/apply-now" className="cl-mscagrcta-cta-btn-solid">Apply Now →</Link>
              <Link href="/contact" className="cl-mscagrcta-cta-btn-outline">Contact Admissions</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
