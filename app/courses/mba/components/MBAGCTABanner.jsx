'use client';

import Link from 'next/link';

export default function MBAGCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mbagcta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-mbagcta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-mbagcta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-mbagcta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-mbagcta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-mbagcta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-mbagcta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-mbagcta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-mbagcta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-mbagcta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-mbagcta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){
          .cl-mbagcta-btns{flex-direction:column;align-items:stretch}
          .cl-mbagcta-btn-white,.cl-mbagcta-btn-outline{justify-content:center}
        }
      `}} />

      <section className="cl-mbagcta-sec">
        <div className="cl-mbagcta-inner">
          <h2 className="cl-mbagcta-h2">Master The Business<br />Of Tomorrow</h2>
          <p className="cl-mbagcta-sub">
            Join Tulas Institute and build the management career you have envisioned — with live projects, global certifications, and six specialization paths forward at graduation.
          </p>
          <div className="cl-mbagcta-btns">
            <Link href="/apply-now" className="cl-mbagcta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-mbagcta-btn-outline">Explore Programs</Link>
            <Link href="/contact" className="cl-mbagcta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-mbagcta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
