'use client';
import Link from 'next/link';

export default function BScAgHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bscagh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-bscagh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-bscagh-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.68) 0%,rgba(0,21,46,.60) 55%,rgba(196,73,0,.75) 100%);}
        .cl-bscagh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-bscagh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-bscagh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-bscagh-bc .cur{color:#FFF3D7;}
        .cl-bscagh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-bscagh-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-bscagh-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-bscagh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-bscagh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-bscagh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-bscagh-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-bscagh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-bscagh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-bscagh-btn-solid:hover{transform:translateY(-2px);}
        .cl-bscagh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-bscagh-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-bscagh-sec" id="hero">
        <img className="cl-bscagh-bg" src="/courses/applied-science/bannerImg.webp" alt="B.Sc. Agriculture Hero" aria-hidden="true"/>
        <div className="cl-bscagh-overlay"/>
        <div className="cl-bscagh-inner">
          <div className="cl-bscagh-bc">Home / Programs / B.Sc. / <span className="cur">Agriculture (Hons.)</span></div>
          <div className="cl-bscagh-badge">B.Sc. (Hons.) Agriculture · NAAC A+</div>
          <h1 className="cl-bscagh-h1">Best B.Sc. (Hons.) Agriculture<br/><em>Institute In North India</em></h1>
          <p className="cl-bscagh-desc">A four-year undergraduate degree covering the theoretical and practical training that today's agriculture sector needs — from crop production and soil science to agribusiness, opening opportunities across technical, commercial, and research roles in a sector that never slows down.</p>
          <div className="cl-bscagh-chips">
            <span className="cl-bscagh-chip"><strong>4-Year</strong> UG Programme</span>
            <span className="cl-bscagh-chip">ICAR-Aligned Curriculum</span>
            <span className="cl-bscagh-chip">Field &amp; Lab-Based Learning</span>
            <span className="cl-bscagh-chip">Multiple Internships</span>
            <span className="cl-bscagh-chip">100% Placement Support</span>
          </div>
          <div className="cl-bscagh-btns">
            <Link href="/apply-now" className="cl-bscagh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-bscagh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
