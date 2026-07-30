'use client';
import Link from 'next/link';

export default function MTechCSEHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-mtcse-hero-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;}
        .cl-mtcse-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
        .cl-mtcse-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.60) 55%,rgba(196,73,0,.75) 100%);}
        .cl-mtcse-hero-overlay::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-mtcse-hero-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-mtcse-hero-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-mtcse-hero-bc .cur{color:#FFF3D7;}
        .cl-mtcse-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-mtcse-hero-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-mtcse-hero-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-mtcse-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-mtcse-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-mtcse-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-mtcse-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-mtcse-hero-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-mtcse-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-mtcse-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-mtcse-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-mtcse-hero-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-mtcse-hero-sec" id="hero">
        <img className="cl-mtcse-hero-bg" src="/courses/btech/ProgramOutcomes.png" alt="M.Tech CSE Hero" aria-hidden="true"/>
        <div className="cl-mtcse-hero-overlay"/>
        <div className="cl-mtcse-hero-inner">
          <div className="cl-mtcse-hero-bc">Home / Programs / M.Tech / <span className="cur">Computer Science &amp; Engineering</span></div>
          <div className="cl-mtcse-hero-badge">M.Tech · Computer Science &amp; Engineering · AI-Integrated</div>
          <h1 className="cl-mtcse-hero-h1">Advance Your Expertise<br/>In <em>Intelligent Computing</em></h1>
          <p className="cl-mtcse-hero-desc">An industry-relevant postgraduate programme focused on Artificial Intelligence, Data Science, Cyber Security, Cloud Computing, and High-Performance Computing </p>
          <div className="cl-mtcse-hero-chips">
            <span className="cl-mtcse-hero-chip"><strong>2-Year</strong> M.Tech Programme</span>
            <span className="cl-mtcse-hero-chip">AI-Integrated Advanced Curriculum</span>
            <span className="cl-mtcse-hero-chip">Research &amp; Innovation Focus</span>
            <span className="cl-mtcse-hero-chip">Industry-Oriented Projects &amp; Thesis</span>
            <span className="cl-mtcse-hero-chip">Expert Faculty &amp; Industry Mentorship</span>
          </div>
          <div className="cl-mtcse-hero-btns">
            <Link href="/apply-now" className="cl-mtcse-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-mtcse-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
