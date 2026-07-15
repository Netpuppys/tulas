'use client';
import Link from 'next/link';

export default function LLBHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-llbh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-llbh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-llbh-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.88) 0%,rgba(0,21,46,.80) 55%,rgba(196,73,0,.75) 100%);}
        .cl-llbh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-llbh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-llbh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-llbh-bc .cur{color:#FFF3D7;}
        .cl-llbh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-llbh-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-llbh-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-llbh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-llbh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-llbh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-llbh-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-llbh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-llbh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-llbh-btn-solid:hover{transform:translateY(-2px);}
        .cl-llbh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-llbh-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-llbh-sec" id="hero">
        <img className="cl-llbh-bg" src="/school-of-law/law/financial-banking-law.png" alt="LLB Hero" aria-hidden="true"/>
        <div className="cl-llbh-overlay"/>
        <div className="cl-llbh-inner">
          <div className="cl-llbh-bc">Home / Programs / School of Law / <span className="cur">LL.B.</span></div>
          <div className="cl-llbh-badge">LL.B. · 3 Years · BCI Approved</div>
          <h1 className="cl-llbh-h1">Build Your Future<br/><em>In Law &amp; Litigation</em></h1>
          <p className="cl-llbh-desc">Designed for graduates aspiring to build successful careers in litigation, judiciary, corporate law and legal consultancy — the LL.B. at Tulas School of Law prepares future legal professionals through experiential learning, courtroom training, and industry exposure.</p>
          <div className="cl-llbh-chips">
            <span className="cl-llbh-chip"><strong>3 Years</strong> Programme</span>
            <span className="cl-llbh-chip">BCI Approved Programme</span>
            <span className="cl-llbh-chip">Moot Court Training</span>
            <span className="cl-llbh-chip">Internship Opportunities</span>
            <span className="cl-llbh-chip">Practice-Ready Curriculum</span>
          </div>
          <div className="cl-llbh-btns">
            <Link href="/apply-now" className="cl-llbh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-llbh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
