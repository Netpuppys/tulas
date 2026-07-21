'use client';
import Link from 'next/link';

export default function MTechCSECTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-cta-sec{padding:80px 7%;background:#fff;}
        .cl-mtcse-cta-wrap{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1.15fr;gap:24px;align-items:stretch;}

        /* Left — navy batch card */
        .cl-mtcse-cta-batch{background:#001F4C;border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;}
        .cl-mtcse-cta-batch-label{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.6);margin-bottom:8px;}
        .cl-mtcse-cta-batch-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.2vw,3rem);color:#fff;line-height:1.05;}
        .cl-mtcse-cta-batch-title em{font-style:normal;color:#FFF3D7;}
        .cl-mtcse-cta-batch-meta{display:flex;flex-wrap:wrap;gap:10px;}
        .cl-mtcse-cta-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);}
        .cl-mtcse-cta-batch-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;width:fit-content;}
        .cl-mtcse-cta-batch-btn:hover{transform:translateY(-2px);}

        /* Right — orange gradient card */
        .cl-mtcse-cta-card{background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);border-radius:22px;padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between;gap:32px;position:relative;overflow:hidden;}
        .cl-mtcse-cta-card::before{content:'';position:absolute;top:-40px;right:-40px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.08);}
        .cl-mtcse-cta-card::after{content:'';position:absolute;bottom:-60px;left:-20px;width:160px;height:160px;border-radius:50%;background:rgba(0,0,0,.08);}
        .cl-mtcse-cta-tag{display:inline-block;padding:7px 18px;border-radius:20px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;background:rgba(255,255,255,.2);color:#fff;width:fit-content;}
        .cl-mtcse-cta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,4vw,4.2rem);color:#fff;line-height:.95;position:relative;z-index:1;}
        .cl-mtcse-cta-body{font-size:1rem;line-height:1.8;color:rgba(255,255,255,.9);max-width:480px;position:relative;z-index:1;}
        .cl-mtcse-cta-btns{display:flex;gap:14px;flex-wrap:wrap;position:relative;z-index:1;}
        .cl-mtcse-cta-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;background:#fff;color:#DF5400;box-shadow:0 4px 16px rgba(0,0,0,.15);transition:transform .25s;text-decoration:none;}
        .cl-mtcse-cta-btn-solid:hover{transform:translateY(-2px);}
        .cl-mtcse-cta-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 34px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;border:2px solid rgba(255,255,255,.6);background:transparent;transition:transform .25s;text-decoration:none;}
        .cl-mtcse-cta-btn-outline:hover{transform:translateY(-2px);}

        @media(max-width:860px){.cl-mtcse-cta-wrap{grid-template-columns:1fr}}
        @media(max-width:640px){.cl-mtcse-cta-sec{padding:60px 5%}.cl-mtcse-cta-batch,.cl-mtcse-cta-card{padding:36px 28px}}
      `}}/>
      <section className="cl-mtcse-cta-sec" id="cta">
        <div className="cl-mtcse-cta-wrap">

          {/* Batch card */}
          <div className="cl-mtcse-cta-batch">
            <div>
              <div className="cl-mtcse-cta-batch-label">Admissions Open</div>
              <div className="cl-mtcse-cta-batch-title">M.Tech CSE<br/><em>2025–2027</em></div>
            </div>
            <div className="cl-mtcse-cta-batch-meta">
              <span className="cl-mtcse-cta-chip">2-Year PG Programme</span>
              <span className="cl-mtcse-cta-chip">AI-Integrated</span>
              <span className="cl-mtcse-cta-chip">Research-Driven</span>
              <span className="cl-mtcse-cta-chip">100% Placement Support</span>
            </div>
            <Link href="/apply-now" className="cl-mtcse-cta-batch-btn">Apply Now →</Link>
          </div>

          {/* CTA card */}
          <div className="cl-mtcse-cta-card">
            <span className="cl-mtcse-cta-tag">Start Your Journey</span>
            <h2 className="cl-mtcse-cta-h2">Build It.<br/>Research It.<br/>Lead It.</h2>
            <p className="cl-mtcse-cta-body">Join a postgraduate programme built for the era of intelligent computing — advanced AI research, industry certifications, and real-world innovation from day one.</p>
            <div className="cl-mtcse-cta-btns">
              <Link href="/apply-now" className="cl-mtcse-cta-btn-solid">Apply Now →</Link>
              <Link href="/contact" className="cl-mtcse-cta-btn-outline">Contact Admissions</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
