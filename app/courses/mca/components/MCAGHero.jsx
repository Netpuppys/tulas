'use client';
import Link from 'next/link';

export default function MCAGHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mcagh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-mcagh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-mcagh-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.88) 0%,rgba(0,21,46,.50) 55%,rgba(196,73,0,.75) 100%);}
        .cl-mcagh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mcagh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mcagh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-mcagh-bc .cur{color:#FFF3D7;}
        .cl-mcagh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mcagh-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mcagh-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mcagh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mcagh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-mcagh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-mcagh-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-mcagh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mcagh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-mcagh-btn-solid:hover{transform:translateY(-2px);}
        .cl-mcagh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-mcagh-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-mcagh-sec" id="hero">
        <img className="cl-mcagh-bg" src="/courses/mca/bannerImg.webp" alt="MCA Hero" aria-hidden="true"/>
        <div className="cl-mcagh-overlay"/>
        <div className="cl-mcagh-inner">
          <div className="cl-mcagh-bc">Home / Programs / <span className="cur">MCA</span></div>
          <div className="cl-mcagh-badge">MCA · PG Programme · NAAC A+</div>
          <h1 className="cl-mcagh-h1">Master The Future<br/>Of <em>Computing</em></h1>
          <p className="cl-mcagh-desc">An advanced computing curriculum built for software engineering, AI, and enterprise technology careers. Choose your path — general MCA, or a focused specialisation in Full Stack Development or AI &amp; ML.</p>
          <div className="cl-mcagh-chips">
            <span className="cl-mcagh-chip"><strong>2-Year</strong> PG Programme</span>
            <span className="cl-mcagh-chip">Multiple Specialisation Pathways</span>
            <span className="cl-mcagh-chip">Industry Certifications</span>
            <span className="cl-mcagh-chip">Industry-Sponsored Capstone</span>
            <span className="cl-mcagh-chip">Research &amp; Innovation Ecosystem</span>
          </div>
          <div className="cl-mcagh-btns">
            <Link href="/apply-now" className="cl-mcagh-btn-solid">Apply Now →</Link>
            <Link href="#programmes" className="cl-mcagh-btn-outline">Explore Pathways</Link>
          </div>
        </div>
      </section>
    </>
  );
}
