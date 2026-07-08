'use client';
import Link from 'next/link';

export default function MBABACTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbabacta-batch{padding:0 7% 80px;background:#fff}
        .cl-mbabacta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-mbabacta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;margin-bottom:0}
        .cl-mbabacta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-mbabacta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        .cl-mbabacta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mbabacta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-mbabacta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-mbabacta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-mbabacta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-mbabacta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-mbabacta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-mbabacta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-mbabacta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-mbabacta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-mbabacta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-mbabacta-btns{flex-direction:column;align-items:stretch}.cl-mbabacta-btn-white,.cl-mbabacta-btn-outline{justify-content:center}}
      `}}/>

      {/* First Batch Banner */}
      <div className="cl-mbabacta-batch">
        <div className="cl-mbabacta-batch-wrap">
          <div className="cl-mbabacta-batch-banner">
            <h3 className="cl-mbabacta-batch-h3">First Graduating Batch: 2028</h3>
            <p className="cl-mbabacta-batch-p">This programme's alumni story starts with you. As the founding cohort, you'll be the first to carry the MBA — Business Analytics credential into the industry.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cl-mbabacta-sec">
        <div className="cl-mbabacta-inner">
          <h2 className="cl-mbabacta-h2">Lead Decisions With<br/>Data-Driven Strategy</h2>
          <p className="cl-mbabacta-sub">Join Tulas Institute's MBA in Business Analytics — master predictive modelling, earn 9 industry certifications, and graduate with a live data strategy capstone.</p>
          <div className="cl-mbabacta-btns">
            <Link href="/apply-now" className="cl-mbabacta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-mbabacta-btn-outline">Explore Programs</Link>
            <Link href="/contact" className="cl-mbabacta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-mbabacta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
