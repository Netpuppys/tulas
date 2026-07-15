'use client';
import Link from 'next/link';

export default function BALLBHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-ballbh-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-ballbh-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-ballbh-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.88) 0%,rgba(0,21,46,.80) 55%,rgba(196,73,0,.75) 100%);}
        .cl-ballbh-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-ballbh-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-ballbh-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-ballbh-bc .cur{color:#FFF3D7;}
        .cl-ballbh-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-ballbh-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-ballbh-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-ballbh-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-ballbh-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-ballbh-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-ballbh-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-ballbh-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-ballbh-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-ballbh-btn-solid:hover{transform:translateY(-2px);}
        .cl-ballbh-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-ballbh-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-ballbh-sec" id="hero">
        <img className="cl-ballbh-bg" src="/school-of-law/law/civil-procedure-code-opt.png" alt="BA LLB Hero" aria-hidden="true"/>
        <div className="cl-ballbh-overlay"/>
        <div className="cl-ballbh-inner">
          <div className="cl-ballbh-bc">Home / Programs / School of Law / <span className="cur">BA LL.B. (Hons.)</span></div>
          <div className="cl-ballbh-badge">BA LL.B. (Hons.) · 5 Years · BCI Approved</div>
          <h1 className="cl-ballbh-h1">Where Law Meets<br/><em>Society &amp; Governance</em></h1>
          <p className="cl-ballbh-desc">An integrated programme that combines humanities with legal education — the BA LL.B. (Hons.) at Tulas School of Law develops strong analytical, advocacy, and public policy skills for careers spanning litigation, judiciary, civil services, and academia.</p>
          <div className="cl-ballbh-chips">
            <span className="cl-ballbh-chip"><strong>5 Years</strong> Programme</span>
            <span className="cl-ballbh-chip">BCI Approved Programme</span>
            <span className="cl-ballbh-chip">Moot Court Training</span>
            <span className="cl-ballbh-chip">Internship Opportunities</span>
            <span className="cl-ballbh-chip">Practice-Ready Curriculum</span>
          </div>
          <div className="cl-ballbh-btns">
            <Link href="/apply-now" className="cl-ballbh-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-ballbh-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
