'use client';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-cth-sec{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:78vh;background:linear-gradient(135deg,#001F4C 0%,#00152e 55%,#c44900 100%);}
        .cl-cth-sec::after{content:'';position:absolute;inset:0;opacity:.06;background-image:linear-gradient(0deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.1) 25%,rgba(255,255,255,.1) 26%,transparent 27%);background-size:60px 60px;}
        .cl-cth-inner{position:relative;z-index:2;text-align:center;padding:50px 7%;max-width:1200px;width:100%;}
        .cl-cth-bc{display:flex;gap:10px;justify-content:center;margin-bottom:22px;font-size:.82rem;color:rgba(255,255,255,.65);}
        .cl-cth-bc .cur{color:#FFF3D7;}
        .cl-cth-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-cth-h1{color:#fff;font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-cth-h1 em{color:#FFF3D7;font-style:normal;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-cth-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-cth-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-cth-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-cth-btns{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-cth-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-cth-btn-solid:hover{transform:translateY(-2px);}
        .cl-cth-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-cth-btn-outline:hover{transform:translateY(-2px);}
      `}}/>
      <section className="cl-cth-sec pt-[110px] md:pt-0" id="hero">
        <div className="cl-cth-inner">
          <div className="cl-cth-bc">Home / <span className="cur">Contact Us</span></div>
          <div className="cl-cth-badge">Get In Touch · NAAC A+</div>
          <h1 className="cl-cth-h1">Let's Start Your<br/><em>Journey With Us</em></h1>
          <p className="cl-cth-desc">Being the capital city, Dehradun is well-connected by road, rail, and air, and is easily accessible from most parts of the country — just 235 km from New Delhi, and an easy destination to visit any time of the year.</p>
          <div className="cl-cth-chips">
            <span className="cl-cth-chip">Admissions Open 2026-27</span>
            <span className="cl-cth-chip">Multiple Regional Helplines</span>
            <span className="cl-cth-chip">Dehradun &amp; Patna Offices</span>
          </div>
          <div className="cl-cth-btns">
            <a href="tel:+91-9837983721" className="cl-cth-btn-solid">Call Admissions →</a>
            <a href="mailto:info@tulas.edu.in" className="cl-cth-btn-outline">Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
