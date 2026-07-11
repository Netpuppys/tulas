'use client';
import Link from 'next/link';

export default function BTechCECTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechcecta-batch{padding:0 7% 80px;background:#fff}
        .cl-btechcecta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-btechcecta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff}
        .cl-btechcecta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-btechcecta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        .cl-btechcecta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btechcecta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-btechcecta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-btechcecta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-btechcecta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-btechcecta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-btechcecta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-btechcecta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-btechcecta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-btechcecta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-btechcecta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-btechcecta-btns{flex-direction:column;align-items:stretch}.cl-btechcecta-btn-white,.cl-btechcecta-btn-outline{justify-content:center}}
      `}}/>

      {/* Established Badge Banner */}
      <div className="cl-btechcecta-batch">
        <div className="cl-btechcecta-batch-wrap">
          <div className="cl-btechcecta-batch-banner">
            <h3 className="cl-btechcecta-batch-h3">Department Established: 2011</h3>
            <p className="cl-btechcecta-batch-p">With over a decade of engineering education excellence, the Department of Civil Engineering at Tulas Institute has a proven track record of producing infrastructure professionals who shape India's built environment.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cl-btechcecta-sec">
        <div className="cl-btechcecta-inner">
          <h2 className="cl-btechcecta-h2">Build It.<br/>Lead It.</h2>
          <p className="cl-btechcecta-sub">Join Tulas Institute's B.Tech in Civil Engineering — master structural design, sustainable construction, and smart infrastructure, and graduate ready to build the world of tomorrow.</p>
          <div className="cl-btechcecta-btns">
            <Link href="/apply-now" className="cl-btechcecta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-btechcecta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-btechcecta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-btechcecta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
