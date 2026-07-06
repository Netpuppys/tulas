'use client';

import Link from 'next/link';

export default function MBADMCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-dmcta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-dmcta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-dmcta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-dmcta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-dmcta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-dmcta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-dmcta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-dmcta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-dmcta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-dmcta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-dmcta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){
          .cl-dmcta-btns{flex-direction:column;align-items:stretch}
          .cl-dmcta-btn-white,.cl-dmcta-btn-outline{justify-content:center}
        }
      `}} />

      <section className="cl-dmcta-sec">
        <div className="cl-dmcta-inner">
          <h2 className="cl-dmcta-h2">Lead Brands With<br />AI-Powered Marketing</h2>
          <p className="cl-dmcta-sub">
            Join Tulas Institute and build the marketing career you've envisioned — with live campaigns, global certifications, and three paths forward at graduation.
          </p>
          <div className="cl-dmcta-btns">
            <Link href="/apply-now" className="cl-dmcta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-dmcta-btn-outline">Explore Programs</Link>
            <Link href="/contact" className="cl-dmcta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-dmcta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
