'use client';
import Link from 'next/link';

export default function BCFSCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcfscta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-bcfscta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-bcfscta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-bcfscta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-bcfscta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-bcfscta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-bcfscta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-bcfscta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-bcfscta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-bcfscta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-bcfscta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){
          .cl-bcfscta-btns{flex-direction:column;align-items:stretch}
          .cl-bcfscta-btn-white,.cl-bcfscta-btn-outline{justify-content:center}
        }
      `}} />

      <section className="cl-bcfscta-sec">
        <div className="cl-bcfscta-inner">
          <h2 className="cl-bcfscta-h2">Build The Web,<br />Front To Back</h2>
          <p className="cl-bcfscta-sub">
            Join Tulas Institute's BCA Full Stack Development — master four production stacks, earn 8 industry certifications, and graduate with a live deployed capstone product.
          </p>
          <div className="cl-bcfscta-btns">
            <Link href="/apply-now" className="cl-bcfscta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-bcfscta-btn-outline">Explore Programs</Link>
            <Link href="/contact" className="cl-bcfscta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-bcfscta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
