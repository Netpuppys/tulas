'use client';
import Link from 'next/link';

export default function MTechThermalHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtte-hero-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-mtte-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-mtte-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.60) 55%,rgba(196,73,0,.75) 100%);}
        .cl-mtte-hero-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mtte-hero-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mtte-hero-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-mtte-hero-bc .cur{color:#FFF3D7;}
        .cl-mtte-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mtte-hero-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mtte-hero-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mtte-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mtte-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-mtte-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-mtte-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-mtte-hero-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mtte-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-mtte-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-mtte-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-mtte-hero-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-mtte-hero-sec" id="hero">
        <img className="cl-mtte-hero-bg" src="/courses/btech/computer-science/topBanner.webp" alt="M.Tech Thermal Engineering Hero" aria-hidden="true"/>
        <div className="cl-mtte-hero-overlay"/>
        <div className="cl-mtte-hero-inner">
          <div className="cl-mtte-hero-bc">Home / Programs / M.Tech / <span className="cur">Thermal Engineering</span></div>
          <div className="cl-mtte-hero-badge">M.Tech · Thermal Engineering · Energy Innovation</div>
          <h1 className="cl-mtte-hero-h1">Where Energy Innovation<br/>Meets <em>Engineering Excellence</em></h1>
          <p className="cl-mtte-hero-desc">An industry-relevant postgraduate programme focused on Advanced Thermodynamics, Heat Transfer, Computational Fluid Dynamics (CFD), Renewable Energy Systems, Thermal Power Engineering, Combustion Engineering, HVAC &amp; Refrigeration, Energy Management</p>
          <div className="cl-mtte-hero-chips">
            <span className="cl-mtte-hero-chip"><strong>2-Year</strong> M.Tech Programme</span>
            <span className="cl-mtte-hero-chip">Industry-Integrated Advanced Curriculum</span>
            <span className="cl-mtte-hero-chip">Research &amp; Innovation Focus</span>
            <span className="cl-mtte-hero-chip">Industry-Oriented Projects &amp; Thesis</span>
            <span className="cl-mtte-hero-chip">Expert Faculty &amp; Industry Mentorship</span>
          </div>
          <div className="cl-mtte-hero-btns">
            <Link href="/apply-now" className="cl-mtte-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-mtte-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
