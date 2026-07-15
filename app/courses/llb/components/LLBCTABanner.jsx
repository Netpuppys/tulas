'use client';
import Link from 'next/link';

export default function LLBCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbcta-batch{padding:0 7% 80px;background:#fff}
        .cl-llbcta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-llbcta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff}
        .cl-llbcta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-llbcta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        .cl-llbcta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-llbcta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-llbcta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-llbcta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-llbcta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-llbcta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-llbcta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-llbcta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-llbcta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-llbcta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-llbcta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-llbcta-btns{flex-direction:column;align-items:stretch}.cl-llbcta-btn-white,.cl-llbcta-btn-outline{justify-content:center}}
      `}}/>

      <div className="cl-llbcta-batch">
        <div className="cl-llbcta-batch-wrap">
          <div className="cl-llbcta-batch-banner">
            <h3 className="cl-llbcta-batch-h3">First Batch: 2025–2028</h3>
            <p className="cl-llbcta-batch-p">Tulas School of Law's BCI-approved LL.B. programme — preparing India's next generation of legal professionals for the courtroom, corporate boardroom, and judiciary.</p>
          </div>
        </div>
      </div>

      <section className="cl-llbcta-sec">
        <div className="cl-llbcta-inner">
          <h2 className="cl-llbcta-h2">Argue It.<br/>Draft It.<br/>Win It.</h2>
          <p className="cl-llbcta-sub">Join Tulas School of Law's LL.B. programme — master courtroom advocacy, legal research, and professional ethics, and graduate ready to practise in India's courts, corporates, and public institutions.</p>
          <div className="cl-llbcta-btns">
            <Link href="/apply-now" className="cl-llbcta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-llbcta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-llbcta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-llbcta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
