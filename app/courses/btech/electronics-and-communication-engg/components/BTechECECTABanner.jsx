'use client';
import Link from 'next/link';

export default function BTechECECTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-btechececta-batch{padding:0 7% 80px;background:#fff}
        .cl-btechececta-batch-wrap{max-width:1280px;margin:0 auto}
        .cl-btechececta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff}
        .cl-btechececta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1}
        .cl-btechececta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82)}

        .cl-btechececta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%)}
        .cl-btechececta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none}
        .cl-btechececta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none}
        .cl-btechececta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto}
        .cl-btechececta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3)}
        .cl-btechececta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500}
        .cl-btechececta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap}
        .cl-btechececta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none}
        .cl-btechececta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3)}
        .cl-btechececta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none}
        .cl-btechececta-btn-outline:hover{background:#fff;color:#DF5400}
        @media(max-width:640px){.cl-btechececta-btns{flex-direction:column;align-items:stretch}.cl-btechececta-btn-white,.cl-btechececta-btn-outline{justify-content:center}}
      `}}/>

      <div className="cl-btechececta-batch">
        <div className="cl-btechececta-batch-wrap">
          <div className="cl-btechececta-batch-banner">
            <h3 className="cl-btechececta-batch-h3">Department Established: 2006</h3>
            <p className="cl-btechececta-batch-p">One of the pioneering ECE departments at Tulas Institute — with nearly two decades of producing electronics and communication engineers who connect, innovate, and lead across telecom, embedded systems, and semiconductor industries.</p>
          </div>
        </div>
      </div>

      <section className="cl-btechececta-sec">
        <div className="cl-btechececta-inner">
          <h2 className="cl-btechececta-h2">Circuit It.<br/>Connect It.<br/>Innovate It.</h2>
          <p className="cl-btechececta-sub">Join Tulas Institute's B.Tech in Electronics &amp; Communication Engineering — master 5G, IoT, VLSI, and embedded systems, and graduate ready to shape the connected technologies of tomorrow.</p>
          <div className="cl-btechececta-btns">
            <Link href="/apply-now" className="cl-btechececta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-btechececta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-btechececta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-btechececta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
