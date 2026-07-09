'use client';
import Link from 'next/link';

export default function MBAAgrMCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbaagrm-cta-batch{padding:0 7% 80px;background:#fff}
        .cl-mbaagrm-cta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-mbaagrm-cta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff}
        .cl-mbaagrm-cta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-mbaagrm-cta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}
        .cl-mbaagrm-cta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mbaagrm-cta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-mbaagrm-cta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-mbaagrm-cta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-mbaagrm-cta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-mbaagrm-cta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-mbaagrm-cta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-mbaagrm-cta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-mbaagrm-cta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-mbaagrm-cta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-mbaagrm-cta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-mbaagrm-cta-btns{flex-direction:column;align-items:stretch}.cl-mbaagrm-cta-btn-white,.cl-mbaagrm-cta-btn-outline{justify-content:center}}
      `}}/>

      {/* First Batch Banner */}
      <div className="cl-mbaagrm-cta-batch">
        <div className="cl-mbaagrm-cta-batch-wrap">
          <div className="cl-mbaagrm-cta-batch-banner">
            <h3 className="cl-mbaagrm-cta-batch-h3">First Graduating Batch: 2028</h3>
            <p className="cl-mbaagrm-cta-batch-p">This programme's alumni story starts with you. As the founding cohort, you'll be the first to carry the MBA — Agri-Business Management credential into the industry.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cl-mbaagrm-cta-sec">
        <div className="cl-mbaagrm-cta-inner">
          <h2 className="cl-mbaagrm-cta-h2">Lead The Business.<br/>Feed The Nation.</h2>
          <p className="cl-mbaagrm-cta-sub">Join Tulas Institute's MBA in Agri-Business Management — master agricultural value chains, earn 9 industry certifications, and graduate with a live agri-market project and rural leadership capstone.</p>
          <div className="cl-mbaagrm-cta-btns">
            <Link href="/apply-now" className="cl-mbaagrm-cta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-mbaagrm-cta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-mbaagrm-cta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-mbaagrm-cta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
