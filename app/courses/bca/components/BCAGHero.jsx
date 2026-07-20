'use client';
import Link from 'next/link';

export default function BCAGHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcagh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-bcagh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-bcagh-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.50) 55%,rgba(196,73,0,.75) 100%);}
        .cl-bcagh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-bcagh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-bcagh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-bcagh-bc .cur{color:#FFF3D7;}
        .cl-bcagh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-bcagh-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-bcagh-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-bcagh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-bcagh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-bcagh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-bcagh-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-bcagh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-bcagh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-bcagh-btn-solid:hover{transform:translateY(-2px);}
        .cl-bcagh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-bcagh-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-bcagh-sec" id="hero">
        <img className="cl-bcagh-bg" src="/courses/bca/bannerImg.webp" alt="BCA Hero" aria-hidden="true"/>
        <div className="cl-bcagh-overlay"/>
        <div className="cl-bcagh-inner">
          <div className="cl-bcagh-bc">Home / Programs / <span className="cur">BCA</span></div>
          <div className="cl-bcagh-badge">BCA · UG Programme · NAAC A+</div>
          <h1 className="cl-bcagh-h1">Launch Your Future<br/>In <em>Computing</em></h1>
          <p className="cl-bcagh-desc">A strong foundation in computing built for software development, AI, and technology careers. Choose your path — general BCA, or a focused specialisation in Full Stack Development or AI &amp; ML.</p>
          <div className="cl-bcagh-chips">
            <span className="cl-bcagh-chip"><strong>3-Year</strong> UG Programme</span>
            <span className="cl-bcagh-chip">Multiple Specialisation Pathways</span>
            <span className="cl-bcagh-chip">Industry Certifications</span>
            <span className="cl-bcagh-chip">Live Projects &amp; Capstone</span>
            <span className="cl-bcagh-chip">Research &amp; Innovation Ecosystem</span>
          </div>
          <div className="cl-bcagh-btns">
            <Link href="/apply-now" className="cl-bcagh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-bcagh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
