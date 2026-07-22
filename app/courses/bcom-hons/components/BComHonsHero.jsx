'use client';
import Link from 'next/link';

export default function BComHonsHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        .cl-bcomh-hero-sec{position:relative;min-height:78vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#001F4C;}
        .cl-bcomh-hero-img{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center;}
        .cl-bcomh-hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,rgba(0,31,76,.78) 0%,rgba(0,21,46,.62) 55%,rgba(196,73,0,.72) 100%);}
        .cl-bcomh-hero-inner{position:relative;z-index:2;text-align:center;padding:60px 7%;max-width:1200px;width:100%;margin:0 auto;}
        .cl-bcomh-hero-badge{display:inline-flex;align-items:center;gap:10px;border-radius:32px;padding:10px 28px;font-weight:700;font-size:.76rem;text-transform:uppercase;letter-spacing:.16em;color:#fff;background:rgba(255,255,255,.14);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.25);margin-bottom:26px;}
        .cl-bcomh-hero-h1{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(2rem,4.6vw,4.6rem);line-height:.95;text-shadow:0 8px 50px rgba(0,0,0,.6);margin-bottom:24px;}
        .cl-bcomh-hero-h1 em{font-style:normal;color:#FFF3D7;filter:drop-shadow(0 4px 16px rgba(255,243,215,.5));}
        .cl-bcomh-hero-desc{font-size:1.12rem;line-height:1.9;max-width:840px;margin:0 auto 30px;color:rgba(255,255,255,.92);}
        .cl-bcomh-hero-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:900px;margin:0 auto 34px;}
        .cl-bcomh-hero-chip{padding:9px 18px;border-radius:30px;font-size:.8rem;font-weight:600;color:#fff;background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);}
        .cl-bcomh-hero-chip strong{color:#FFF3D7;font-weight:800;}
        .cl-bcomh-hero-ctas{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;}
        .cl-bcomh-hero-btn-solid{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:#DF5400;box-shadow:0 4px 16px rgba(223,84,0,.4);transition:transform .25s;text-decoration:none;}
        .cl-bcomh-hero-btn-solid:hover{transform:translateY(-2px);}
        .cl-bcomh-hero-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:10px;font-weight:700;font-size:.94rem;color:#fff;background:transparent;border:2px solid rgba(255,255,255,.5);transition:transform .25s;text-decoration:none;}
        .cl-bcomh-hero-btn-outline:hover{transform:translateY(-2px);}
        @media(max-width:640px){.cl-bcomh-hero-inner{padding:50px 5%;}}
      `}}/>
      <section className="cl-bcomh-hero-sec">
        <img src="/courses/bcom/bannerImg.webp" alt="B.Com (Hons.) at Tulas Institute" className="cl-bcomh-hero-img"/>
        <div className="cl-bcomh-hero-overlay"/>
        <div className="cl-bcomh-hero-inner">
          <div className="cl-bcomh-hero-badge">B.Com (Hons.) · NAAC A+</div>
          <h1 className="cl-bcomh-hero-h1">Build Your Future<br/>In <em>Commerce &amp; Finance</em></h1>
          <p className="cl-bcomh-hero-desc">A comprehensive, three-year undergraduate degree affiliated with Sri Dev Suman Uttarakhand University, preparing students for managerial roles across accounting, banking, finance, and insurance — and a strong launchpad for professional qualifications like CA and CS.</p>
          <div className="cl-bcomh-hero-chips">
            <span className="cl-bcomh-hero-chip"><strong>3-Year</strong> UG Programme</span>
            <span className="cl-bcomh-hero-chip">UGC Recognised</span>
            <span className="cl-bcomh-hero-chip">Industry Certifications</span>
            <span className="cl-bcomh-hero-chip">CA/CS Foundation-Ready</span>
            <span className="cl-bcomh-hero-chip">100% Placement Support</span>
          </div>
          <div className="cl-bcomh-hero-ctas">
            <Link href="/apply-now" className="cl-bcomh-hero-btn-solid">Apply Now →</Link>
            <Link href="/contact" className="cl-bcomh-hero-btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
