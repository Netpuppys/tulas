'use client';
import Link from 'next/link';

export default function BBALLBCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bbllbcta-batch{padding:0 7% 80px;background:#fff}
        .cl-bbllbcta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-bbllbcta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff}
        .cl-bbllbcta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-bbllbcta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        .cl-bbllbcta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-bbllbcta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-bbllbcta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-bbllbcta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-bbllbcta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-bbllbcta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-bbllbcta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-bbllbcta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-bbllbcta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-bbllbcta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-bbllbcta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-bbllbcta-btns{flex-direction:column;align-items:stretch}.cl-bbllbcta-btn-white,.cl-bbllbcta-btn-outline{justify-content:center}}
      `}}/>

      <div className="cl-bbllbcta-batch">
        <div className="cl-bbllbcta-batch-wrap">
          <div className="cl-bbllbcta-batch-banner">
            <h3 className="cl-bbllbcta-batch-h3">First Batch: 2025–2030</h3>
            <p className="cl-bbllbcta-batch-p">Tulas School of Law's BCI-approved BBA LL.B. (Hons.) programme — combining business acumen with legal expertise for a career in corporate law, compliance, and commercial practice.</p>
          </div>
        </div>
      </div>

      <section className="cl-bbllbcta-sec">
        <div className="cl-bbllbcta-inner">
          <h2 className="cl-bbllbcta-h2">Think It.<br/>Draft It.<br/>Lead It.</h2>
          <p className="cl-bbllbcta-sub">Join Tulas School of Law's BBA LL.B. (Hons.) programme — master corporate law, contract drafting, and business compliance, and graduate ready to lead in India's corporate and legal sectors.</p>
          <div className="cl-bbllbcta-btns">
            <Link href="/apply-now" className="cl-bbllbcta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-bbllbcta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-bbllbcta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-bbllbcta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
