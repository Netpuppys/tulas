'use client';

import Link from 'next/link';

export default function BCAICTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcaicta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-bcaicta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-bcaicta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-bcaicta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-bcaicta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-bcaicta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-bcaicta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-bcaicta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-bcaicta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-bcaicta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-bcaicta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){
          .cl-bcaicta-btns{flex-direction:column;align-items:stretch}
          .cl-bcaicta-btn-white,.cl-bcaicta-btn-outline{justify-content:center}
        }
      `}} />

      <section className="cl-bcaicta-sec">
        <div className="cl-bcaicta-inner">
          <h2 className="cl-bcaicta-h2">Graduate As A<br />Working Developer</h2>
          <p className="cl-bcaicta-sub">
            Join Tulas Institute's BCA in AI &amp; ML — ship real apps every year, earn 9 industry certifications, and graduate job-ready.
          </p>
          <div className="cl-bcaicta-btns">
            <Link href="/apply-now" className="cl-bcaicta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-bcaicta-btn-outline">Explore Programs</Link>
            <Link href="/contact" className="cl-bcaicta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-bcaicta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
