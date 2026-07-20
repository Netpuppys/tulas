'use client';
import Link from 'next/link';

export default function MScAgrHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mscagr-hero-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-mscagr-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-mscagr-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.68) 0%,rgba(0,21,46,.60) 55%,rgba(196,73,0,.75) 100%);}
        .cl-mscagr-hero-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mscagr-hero-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mscagr-hero-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-mscagr-hero-bc .cur{color:#FFF3D7;}
        .cl-mscagr-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mscagr-hero-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mscagr-hero-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mscagr-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mscagr-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-mscagr-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-mscagr-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-mscagr-hero-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mscagr-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-mscagr-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-mscagr-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-mscagr-hero-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-mscagr-hero-sec" id="hero">
        <img className="cl-mscagr-hero-bg" src="/courses/bba/bannerImg.webp" alt="M.Sc. Agronomy Hero" aria-hidden="true"/>
        <div className="cl-mscagr-hero-overlay"/>
        <div className="cl-mscagr-hero-inner">
          <div className="cl-mscagr-hero-bc">Home / Programs / M.Sc. / <span className="cur">Agronomy</span></div>
          <div className="cl-mscagr-hero-badge">M.Sc. Agronomy · NAAC A+</div>
          <h1 className="cl-mscagr-hero-h1">Excellence In Agronomy<br/><em>&amp; Sustainable Agriculture</em></h1>
          <p className="cl-mscagr-hero-desc">A specialised postgraduate programme built to develop advanced expertise in crop production, soil science, and sustainable farming practices — combining scientific understanding, analytical thinking, and field-based application to address modern agricultural challenges.</p>
          <div className="cl-mscagr-hero-chips">
            <span className="cl-mscagr-hero-chip"><strong>2-Year</strong> PG Programme</span>
            <span className="cl-mscagr-hero-chip">Research-Driven Curriculum</span>
            <span className="cl-mscagr-hero-chip">Field &amp; Lab-Based Learning</span>
            <span className="cl-mscagr-hero-chip">Industry &amp; Research Internships</span>
            <span className="cl-mscagr-hero-chip">100% Placement Support</span>
          </div>
          <div className="cl-mscagr-hero-btns">
            <Link href="/apply-now" className="cl-mscagr-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-mscagr-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
