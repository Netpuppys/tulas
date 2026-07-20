'use client';
import Link from 'next/link';

export default function BScAgCTABanner() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagcta-batch{padding:0 7% 80px;background:#fff;}
        .cl-bscagcta-batch-wrap{max-width:1280px;margin:0 auto;}
        .cl-bscagcta-batch-banner{border-radius:22px;padding:56px 40px;text-align:center;background:linear-gradient(135deg,#001F4C 0%,#00152e 100%);color:#fff;}
        .cl-bscagcta-batch-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.2rem);color:#FFF3D7;margin-bottom:14px;line-height:1;}
        .cl-bscagcta-batch-p{max-width:680px;margin:0 auto;font-size:1rem;line-height:1.8;color:rgba(255,255,255,.82);}

        .cl-bscagcta-sec{position:relative;overflow:hidden;min-height:560px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#DF5400 0%,#c44900 100%);}
        .cl-bscagcta-sec::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 40% 50%,rgba(255,255,255,.14) 0%,transparent 60%);pointer-events:none;}
        .cl-bscagcta-sec::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(55deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 80px);pointer-events:none;}
        .cl-bscagcta-inner{position:relative;z-index:2;text-align:center;padding:80px 7%;max-width:1000px;margin:0 auto;}
        .cl-bscagcta-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.2rem,7vw,7rem);line-height:.95;color:#fff;margin-bottom:28px;letter-spacing:.02em;text-shadow:0 8px 28px rgba(0,0,0,.3);}
        .cl-bscagcta-sub{font-size:1.24rem;line-height:1.9;color:rgba(255,255,255,.94);margin-bottom:44px;font-weight:500;}
        .cl-bscagcta-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-bscagcta-btn-white{background:#fff;color:#DF5400;padding:17px 38px;border-radius:10px;font-weight:800;font-size:.96rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;box-shadow:0 4px 20px rgba(0,0,0,.2);text-decoration:none;}
        .cl-bscagcta-btn-white:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(0,0,0,.3);}
        .cl-bscagcta-btn-outline{background:transparent;color:#fff;border:2px solid #fff;padding:17px 38px;border-radius:10px;font-weight:700;font-size:.96rem;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none;}
        .cl-bscagcta-btn-outline:hover{background:#fff;color:#DF5400;}
        @media(max-width:640px){.cl-bscagcta-btns{flex-direction:column;align-items:stretch}.cl-bscagcta-btn-white,.cl-bscagcta-btn-outline{justify-content:center}}
      `}}/>

      <div className="cl-bscagcta-batch">
        <div className="cl-bscagcta-batch-wrap">
          <div className="cl-bscagcta-batch-banner">
            <h3 className="cl-bscagcta-batch-h3">Admissions Open: B.Sc. (Hons.) Agriculture 2025–2029</h3>
            <p className="cl-bscagcta-batch-p">A four-year ICAR-aligned undergraduate programme at Tulas Institute — combining agronomy, soil science, horticulture, animal science, and agribusiness to produce graduates ready for a sector the world will always need.</p>
          </div>
        </div>
      </div>

      <section className="cl-bscagcta-sec">
        <div className="cl-bscagcta-inner">
          <h2 className="cl-bscagcta-h2">Grow It.<br/>Farm It.<br/>Lead It.</h2>
          <p className="cl-bscagcta-sub">Join Tulas Institute's B.Sc. (Hons.) Agriculture — master the science of farming, build real field expertise, and graduate ready to lead careers across agriculture, agribusiness, and research.</p>
          <div className="cl-bscagcta-btns">
            <Link href="/apply-now" className="cl-bscagcta-btn-white">Apply Now →</Link>
            <Link href="/programs" className="cl-bscagcta-btn-outline">Explore Programs</Link>
            <Link href="/brochure" className="cl-bscagcta-btn-outline">Download Brochure</Link>
            <Link href="/contact" className="cl-bscagcta-btn-outline">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
